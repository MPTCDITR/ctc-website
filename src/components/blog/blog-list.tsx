import { useState } from "react";
import { BlogCard } from "./blog-card";
import type { CollectionEntry } from "astro:content";
import { Dot } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";
import { TextElement } from "@/components/text-element/TextElement";

interface BlogListProps {
  translations: Record<string, string>;
  posts: CollectionEntry<"blog">[];
  lang: string;
}

export function BlogList({ translations, posts, lang }: BlogListProps) {
  const t = (key: string) => translations[key] || key;

  if (!posts?.length) {
    return (
      <div className="space-y-8">
        <TextElement variant="heading">{t("blog.title")}</TextElement>
        <TextElement variant="body" className="text-muted-foreground">
          {t("blog.no_posts")}
        </TextElement>
      </div>
    );
  }

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  return (
    <div className="container py-12 space-y-12">
      <motion.h1
        className={cn(styles.heading, "text-center text-primary")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        News and Events
      </motion.h1>

      <motion.p
        className={cn(styles.body, "text-center max-w-8xl mx-auto")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </motion.p>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <BlogCard
            index={index}
            key={post.slug}
            title={post.data.title}
            description={post.data.description}
            date={post.data.date.toISOString()}
            author={post.data.author}
            image={post.data.image}
            slug={post.slug}
            lang={lang}
            translations={translations}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className="focus:outline-none"
            >
              <Dot
                className={`h-2 w-4 ${i === currentPage ? "text-primary" : "text-gray-400"}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
