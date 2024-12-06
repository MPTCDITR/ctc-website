import { Card } from "@/components/ui/card";
import { Dot } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
        className="text-4xl font-bold text-center text-[#004282]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        News and Events
      </motion.h1>

      <motion.p
        className="text-center max-w-3xl mx-auto"
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
                      <span className="text-[#F58220] hover:underline">
                        {formatDate(post.data.pubDate)}
                      </span>
                      <h2 className="text-2xl font-semibold text-[#004282]">
                        {post.data.title}
                      </h2>
                      <p className="text-gray-600">{post.data.description}</p>
                      <p className="text-[#004282] font-bold hover:underline">
                        Read More →
                      </p>
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
