import React from "react";
import { Card} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";
import type { ImageMetadata } from "astro";

interface BlogCardProps {
  index: number;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: ImageMetadata;
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
  const t = (key: string) => translations[key] || key;

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
            <div className="max-h-96 aspect-auto relative rounded-lg overflow-hidden">
              <img
                src={image?.src}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <TextElement
                variant="body"
                className="text-secondary hover:underline"
              >
                <time dateTime={date}>{formatDate(date, lang)}</time>
              </TextElement>
              <TextElement variant="titleblog" className="text-primary">
                {title}
              </TextElement>
              <TextElement
                variant="body"
                className="text-gray-600 line-clamp-4"
              >
                {description}
              </TextElement>
              <TextElement
                variant="body"
                className="text-primary font-bold hover:underline"
              >
                {t("blog.readmore")} →
              </TextElement>
            </div>
          </div>
        </Card>
      </a>
    </motion.div>
  );
}
