import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface CenterCardProps {
  index: number;
  name: string;
  slug: string;
  lang: string;
  translations?: Record<string, string>;
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

export default CenterNameCard;
