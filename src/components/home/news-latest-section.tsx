import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlogLatestCard } from "./bog-card";
import type { CollectionEntry } from "astro:content";

interface LatestBlogsProps {
  posts: CollectionEntry<"blog">[];
  translations: Record<string, string>;
  lang: string;
}

export function LatestBlogs({ posts, translations, lang }: LatestBlogsProps) {
  const latestPosts = posts.slice(0, 3);
  const t = (key: string) => translations[key] || key;

  return (
    <div className="bg-accent/10 py-24">
      <div className="container flex flex-col items-center gap-12">
        <motion.h2
          className="text-4xl font-bold text-primary text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("home.latest.newsandevents")}
        </motion.h2>
        <motion.p
          className="max-w-8xl text-center text-lg text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("home.latest.newsandevents.description")}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {latestPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <BlogLatestCard
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href={`/${lang}/blog`}>
            <Button className="bg-primary hover:hover:bg-secondary text-white">
              {t("home.viewallnews")}
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
