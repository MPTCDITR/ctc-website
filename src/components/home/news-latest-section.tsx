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
  const [visibleNews, setVisibleNews] = useState(3);
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="bg-accent/10 py-24">
      <div className="container flex flex-col items-center gap-12">
        <motion.h2
          className="text-4xl font-bold text-primary text-center text-primary "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest News and Events
        </motion.h2>
        <motion.p
          className="max-w-2xl text-center text-lg text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stay updated with the latest happenings at Community Tech Center. From
          new course offerings to community events, there's always something
          exciting on the horizon.
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
        {visibleNews < posts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              className="bg-primary hover:bg-secondary/90 text-white"
              onClick={() =>
                setVisibleNews((prevVisible) =>
                  Math.min(prevVisible + 3, posts.length)
                )
              }
            >
              Load More News
            </Button>
          </motion.div>
        )}
        {visibleNews >= posts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href={`/${lang}/blog`}>
              <Button className="bg-primary hover:hover:bg-secondary text-white">
                View All News
              </Button>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
