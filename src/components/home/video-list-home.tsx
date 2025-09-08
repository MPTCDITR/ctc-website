import { useEffect, useState } from "react";
import type { Video } from "@/lib/types";
import { VideoCardHome } from "./video-card-home";

interface VideoListHomeProps {
 videos?: Video[]; 
  translations: Record<string, string>;
  lang?: string;
}

export function VideoListHome({ videos, translations }: VideoListHomeProps) {
  const t = (key: string) => translations[key] || key;

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold">No videos found</h2>
        <p className="text-muted-foreground mt-2">
          Please check your playlist ID or try again later.
        </p>
      </div>
    );
  }
  const Videos = videos.slice(0, 3); 
  return (
    <div className="container py-12 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Videos.map((video) => (
              <VideoCardHome 
                key={video.id} 
                video={video} 
              />
        ))}
      </div>
    </div>
  );
}

