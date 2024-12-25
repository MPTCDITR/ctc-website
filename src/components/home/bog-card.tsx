import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import type { ImageMetadata } from "astro";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  author: string;
  image?: ImageMetadata;
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
            src={image?.src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-2 leading-9">{title}</CardTitle>
        <div className="text-sm text-muted-foreground space-x-2 mt-2">
          <span>{author}</span>
          <span>•</span>
          <time dateTime={date}>{formatDate(date, lang)}</time>
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
            {translations["blog.readmore"] || "Read More"}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
