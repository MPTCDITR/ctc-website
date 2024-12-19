import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CollectionEntry } from "astro:content";
import TextElement from "@/components/text-element/TextElement";

interface CentersListProps {
  translations: Record<string, string>;
  centers: CollectionEntry<"centers">[];
  lang: string;
}

interface CenterCardProps {
  index: number;
  name: string;
  slug: string;
  lang: string;
  translations?: Record<string, string>;
}

export function CenterManagementInfo({
  translations,
  centers,
  lang,
}: CentersListProps) {
  return (
    <div className="container py-12 space-y-24">
      <motion.section
        className="space-y-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="text-center space-y-4">
          <TextElement variant="heading">
            Community Operation and Management
          </TextElement>
          <TextElement variant="paragraph">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </TextElement>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {centers.map((center, index) => (
            <CenterNameCard
              index={index}
              name={center.data.name}
              slug={center.slug}
              lang={lang}
              translations={translations}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
}

function CenterNameCard({
  index,
  name,
  slug,
  lang,
  translations,
}: CenterCardProps) {
  const urlSlug = slug.split("/").slice(1).join("/");

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
    >
      <a href={`/${lang}/center/centers-management/${urlSlug}`}>
        <Card
          className={`p-4 h-full text-lg text-primary flex items-center justify-between transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-slate-50 shadow-sm hover:shadow-lightblue hover:border-none`}
        >
          <span className="font-semibold">{name}</span>
          <ChevronRight className="w-5 h-5 text-secondary" />
        </Card>
      </a>
    </motion.div>
  );
}
