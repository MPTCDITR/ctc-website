import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";

interface BlogCardProps {
  index: number;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  slug: string;
  lang: string;
  translations: Record<string, string>;
}

export function BlogCard({
  index,
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
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={`/${lang}/blog/${urlSlug}`}
        className="block hover:opacity-90 transition-opacity"
      >
        <Card className="overflow-hidden">
          <div
            className={`grid md:grid-cols-2 gap-8 p-4 lg:p-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="aspect-auto relative rounded-lg overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4">
              <TextElement variant="body" className="text-secondary hover:underline">
                <time dateTime={date}>{formatDate(new Date(date), lang)}</time>
              </TextElement>
              <TextElement variant="title" className="text-primary">{title}</TextElement>
              <TextElement variant="body" className="text-gray-600">{description}</TextElement>
              <TextElement variant="body" className="text-primary font-bold hover:underline">
                Read More →
              </TextElement>
            </div>
          </div>
        </Card>
      </a>
    </motion.div>
  );
}
