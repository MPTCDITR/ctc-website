import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  slug: string;
  lang: string;
  translations: Record<string, string>;
}

export function BlogLatestCard({
  title,
  description,
  date,
  author,
  image,
  slug,
  lang,
  translations,
}: BlogCardProps) {
  const urlSlug = slug.split("/").slice(1).join("/");

  return (
    <Card className="flex flex-col h-full">
      {image && (
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{author}</span>
          <span>•</span>
          <time dateTime={date}>{formatDate(new Date(date), lang)}</time>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
          {description}
        </p>
        <Button
          asChild
          variant="outline"
          className="w-full text-secondary border-secondary hover:bg-secondary hover:text-white"
        >
          <a href={`/${lang}/blog/${urlSlug}`}>
            {translations["blog.read_more"] || "Read More"}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
