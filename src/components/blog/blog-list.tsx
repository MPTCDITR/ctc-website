import { useState } from "react";
import { BlogCard } from "./blog-card";
import type { CollectionEntry } from "astro:content";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";
import { TextElement } from "@/components/text-element/TextElement";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { convertNumberToKhmer } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
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

  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = posts.slice(startIndex, endIndex);

  return (
    <div className="container py-12 space-y-12">
      <motion.h1
        className={cn(styles.heading, "text-center text-primary")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("nav.news-event")}
      </motion.h1>

      <motion.p
        className={cn(styles.body, "text-center max-w-8xl mx-auto")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("blog.list.description")}
      </motion.p>

      <div className="space-y-8">
        {currentArticles.map((post, index) => (
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

      <div className="mt-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <div
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={`flex text-sm font-semibold space-x-2 me-5 items-center ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>{t("btn.previous")}</span>
              </div>
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                >
                  {lang === "en" ? page : convertNumberToKhmer(page)}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <div
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={`flex text-sm font-semibold space-x-2 ms-5 items-center ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
              >
                <span>{t("btn.next")}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
