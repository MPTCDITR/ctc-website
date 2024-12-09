import { Card } from "@/components/ui/card";
import { Dot } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
};

export function NewsContent({
  posts,
}: {
  posts: { id: string; slug: string; data: any }[];
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  if (!posts || posts.length === 0) {
    return <div>No news available</div>;
  }
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  return (
    <div className="container py-12 space-y-12">
      <motion.h1
        className={cn(styles.heading, "text-center text-[#004282]")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        News and Events
      </motion.h1>

      <motion.p
        className={cn(styles.heading, "text-center max-w-3xl mx-auto")}
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
        {posts
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={`/${post.data.lang}/blog/${post.slug.split("/").slice(1).join("/")}`}
                className="block hover:opacity-90 transition-opacity"
              >
                <Card className="overflow-hidden">
                  <div
                    className={`grid md:grid-cols-2 gap-8 p-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="aspect-auto relative rounded-lg overflow-hidden">
                      <img
                        src={post.data.heroImage}
                        alt={post.data.title}
                        className="w-full"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="space-y-4">
                      <TextElement
                        variant="small"
                        className="text-[#F58220] hover:underline"
                      >
                        {formatDate(post.data.pubDate)}
                      </TextElement>
                      <TextElement variant="title" className="text-[#004282]">
                        {post.data.title}
                      </TextElement>
                      <TextElement variant="body" className="text-gray-600">
                        {post.data.description}
                      </TextElement>
                      <TextElement
                        variant="body"
                        className="text-[#004282] font-bold hover:underline"
                      >
                        Read More →
                      </TextElement>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
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
                className={`h-2 w-4 ${i === currentPage ? "text-[#004282]" : "text-gray-400"}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
