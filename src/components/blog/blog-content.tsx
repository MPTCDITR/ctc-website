import React from "react";
import { formatDate } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface BlogContentProps {
  title: string;
  date: Date;
  author: string;
  description: string;
  image?: string;
  lang: string;
  children: React.ReactNode;
}

export function BlogContent({
  title,
  date,
  author,
  description,
  image,
  lang,
  children,
}: BlogContentProps) {
  return (
    <article className="container py-12 space-y-8">
      <Card className="w-full aspect-[21/9] bg-gray-200">
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full aspect-video object-cover"
          />
        )}
      </Card>
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-[#004282]">{title}</h1>
        {/* <p className="text-xl text-muted-foreground">{description}</p> */}

        <div className="flex items-center gap-2 text-gray-600">
          <span>{author}</span>
          <span>•</span>
          <span>
            <time dateTime={date.toISOString()}>{formatDate(date, lang)}</time>
          </span>
        </div>

        <div className="prose prose-neutral max-w-none">{children}</div>
      </div>
    </article>
  );
}
