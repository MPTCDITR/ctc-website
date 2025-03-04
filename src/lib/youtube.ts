import type {
  Video,
  YouTubePlaylistResponse,
  YouTubeVideoResponse,
} from "./types";

import { PUBLIC_YOUTUBE_API_KEY, PUBLIC_PLAYLIST_ID } from "astro:env/client";

function formatDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";

  const hours = match[1] ? `${match[1]}:` : "";
  const minutes = match[2] ? `${match[2]}:` : "0:";
  const seconds = match[3] ? match[3].padStart(2, "0") : "00";

  return `${hours}${minutes}${seconds}`;
}

const key_youtube = PUBLIC_YOUTUBE_API_KEY;
const playlistId = PUBLIC_PLAYLIST_ID;

export async function fetchPlaylistVideos(): Promise<Video[]> {
  try {
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=24&playlistId=${playlistId}&key=${key_youtube}`;

    const playlistRes = await fetch(playlistUrl);

    if (!playlistRes.ok) {
      console.error("YouTube API error:", await playlistRes.text());
      return [];
    }

    const playlistData: YouTubePlaylistResponse = await playlistRes.json();

    if (!playlistData.items || playlistData.items.length === 0) {
      return [];
    }

    // Extract video IDs
    const videoIds = playlistData.items
      .map((item) => item.snippet.resourceId.videoId)
      .join(",");

    // Fetch video details to get durations
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${key_youtube}`;
    const videoRes = await fetch(videoUrl);

    if (!videoRes.ok) {
      console.error("YouTube API error:", await videoRes.text());
      return [];
    }

    const videoData: YouTubeVideoResponse = await videoRes.json();

    // Map the data to our Video type
    return playlistData.items.map((item) => {
      const videoId = item.snippet.resourceId.videoId;
      const videoDetails = videoData.items.find((v) => v.id === videoId);

      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail:
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.default?.url,
        publishedAt: item.snippet.publishedAt,
        duration: videoDetails
          ? formatDuration(videoDetails.contentDetails.duration)
          : undefined,
        channelTitle: item.snippet.channelTitle,
      };
    });
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return [];
  }
}
