import { VideoCard } from "./video-card";
import type { Video } from "@/lib/types";
import { motion } from "framer-motion";
import { styles } from "@/components/text-element/ElementStyle";
import { cn } from "@/lib/utils";

interface VideoListProps {
  videos: Video[];
  translations: Record<string, string>;
  lang: string;
}

export function VideoList({ videos, translations, lang }: VideoListProps) {
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

  return (
    <div className="container py-12 space-y-12">
      <motion.h1
        className={cn(styles.heading, "text-center text-primary")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("nav.news-media")}
      </motion.h1>

      <motion.p
        className={cn(styles.body, "text-center max-w-8xl mx-auto")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("videos.list.description")}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
