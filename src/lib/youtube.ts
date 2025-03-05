import type {
  Video,
  YouTubePlaylistResponse,
  YouTubeVideoResponse,
} from "./types";

function formatDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";

  const hours = match[1] ? `${match[1]}:` : "";
  const minutes = match[2] ? `${match[2]}:` : "0:";
  const seconds = match[3] ? match[3].padStart(2, "0") : "00";

  return `${hours}${minutes}${seconds}`;
}

export async function fetchPlaylistVideos(
  key_youtube?: string,
  playlistId?: string
): Promise<Video[]> {
  if (!key_youtube || !playlistId) {
    console.error("Missing YouTube API key or Playlist ID");
    return [];
  }

  try {
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=24&playlistId=${playlistId}&key=${key_youtube}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const playlistRes = await fetch(playlistUrl, {
      signal: controller.signal,
    });

    clearTimeout(timeout);

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

