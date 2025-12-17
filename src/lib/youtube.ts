import type { Video } from "./types";

export interface YouTubePlaylist {
  id: string;
  title: string;
  description: string;
}

const API_KEY = import.meta.env.YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.YOUTUBE_CHANNEL_ID;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function getPlaylists(): Promise<YouTubePlaylist[]> {
  if (!API_KEY || !CHANNEL_ID) {
    console.error("YouTube API Key or Channel ID missing");
    return [];
  }

  try {
    const response = await fetch(
      `${BASE_URL}/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&key=${API_KEY}`
    );
    const data = await response.json();

    if (!data.items) return [];

    return data.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
    }));
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
}

// Helper to parse ISO 8601 duration to MM:SS or H:MM:SS
function parseDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return "";

  const hours = (match[1] || "").replace("H", "");
  const minutes = (match[2] || "").replace("M", "");
  const seconds = (match[3] || "").replace("S", "");

  let result = "";
  if (hours) result += `${hours}:`;
  result += `${hours && !minutes ? "00" : minutes || "0"}:`;
  result += seconds.padStart(2, "0");

  return result;
}

export async function getVideosForPlaylist(
  playlistId: string
): Promise<Video[]> {
  if (!API_KEY) return [];

  try {
    // 1. Fetch Playlist Items
    const playlistResponse = await fetch(
      `${BASE_URL}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`
    );
    const playlistData = await playlistResponse.json();

    if (!playlistData.items || playlistData.items.length === 0) return [];

    // 2. Extract Video IDs
    const videoIds = playlistData.items.map(
      (item: any) => item.snippet.resourceId.videoId
    );

    // 3. Fetch Video Details (ContentDetails for duration)
    const videosResponse = await fetch(
      `${BASE_URL}/videos?part=snippet,contentDetails&id=${videoIds.join(
        ","
      )}&key=${API_KEY}`
    );
    const videosData = await videosResponse.json();

    if (!videosData.items) return [];

    // 4. Map back to Video interface
    return videosData.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail:
        item.snippet.thumbnails.high?.url ||
        item.snippet.thumbnails.medium?.url ||
        item.snippet.thumbnails.default?.url,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
      playlistId,
      duration: parseDuration(item.contentDetails.duration),
    }));
  } catch (error) {
    console.error(`Error fetching videos for playlist ${playlistId}:`, error);
    return [];
  }
}

export async function getVideoById(id: string): Promise<Video | null> {
  if (!API_KEY) return null;

  try {
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet,contentDetails&id=${id}&key=${API_KEY}`
    );
    const data = await response.json();

    if (!data.items || data.items.length === 0) return null;

    const item = data.items[0];
    return {
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail:
        item.snippet.thumbnails.high?.url ||
        item.snippet.thumbnails.medium?.url ||
        item.snippet.thumbnails.default?.url,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
      duration: parseDuration(item.contentDetails.duration),
    };
  } catch (error) {
    console.error(`Error fetching video ${id}:`, error);
    return null;
  }
}

export async function getAllVideos(): Promise<Record<string, Video[]>> {
  const playlists = await getPlaylists();
  const videosByPlaylist: Record<string, Video[]> = {};

  // Fetch videos for all playlists in parallel
  await Promise.all(
    playlists.map(async (playlist) => {
      const videos = await getVideosForPlaylist(playlist.id);
      if (videos.length > 0) {
        videosByPlaylist[playlist.title] = videos;
      }
    })
  );

  return videosByPlaylist;
}
