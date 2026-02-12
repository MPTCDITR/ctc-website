import { Calendar, Clock, Play } from "lucide-react";
import { formatDistanceToNow } from "@/lib/utils";
import type { Video } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow group">
      <div className="relative aspect-video">
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          className="flex items-center justify-center " rel="noreferrer"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="object-cover w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Play
            className="absolute hidden group-hover:flex"
            stroke="red"
            fill="red"
            size={58}
          />
        </a>
      </div>
      <CardHeader className="pb-2">
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          className="hover:underline" rel="noreferrer"
        >
          <h3 className="text-xl font-semibold line-clamp-2">{video.title}</h3>
        </a>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">
          {video.description}
        </p>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground pt-2 border-t">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDistanceToNow(new Date(video.publishedAt))}</span>
          </div>
          {video.duration && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{video.duration}</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
