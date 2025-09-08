import { Calendar, Clock, Play } from "lucide-react";
import { formatDistanceToNow } from "@/lib/utils";
import type { Video } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface VideoCardHomeProps {

  video: Video;
}

export function VideoCardHome({ video }: VideoCardHomeProps) {
  return (
    <Card className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow group">
      <div className="relative aspect-video">
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          className="flex items-center justify-center "
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
          className=""
        >
          <h3 className="text-lg font-semibold line-clamp-1">{video.title}</h3>
        </a>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-1">
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
