import React from "react";
import { formatDate } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { TextElement } from "@/components/text-element/TextElement";
import type { ImageMetadata } from "astro";

interface BlogContentProps {
  title: string;
  date: Date;
  author: string;
  description: string;
  image?: ImageMetadata;
  lang: string;
  children: React.ReactNode;
}

export function BlogContent({
  title,
  date,
  author,
  description: _description,
  image,
  lang,
  children,
}: BlogContentProps) {
  return (
    <article className="container py-12 space-y-8">
      <Card className="w-full aspect-[21/9] bg-gray-200">
        {image && (
          <img
            src={image?.src}
            alt={title}
            className="rounded-lg w-full aspect-video object-cover"
          />
        )}
      </Card>
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-xl lg:text-4xl font-bold text-primary leading-normal lg:leading-relaxed text-justify lg:text-start">
          {title}
        </h1>
        <TextElement
          variant="small"
          className="flex items-center gap-4 text-secondary"
        >
          <span>{author},</span>
          <span>
            <time>{formatDate(date.toISOString(), lang)}</time>
          </span>
        </TextElement>
        <div className="prose prose-neutral max-w-none">{children}</div>
      </div>
    </article>
  );
}
