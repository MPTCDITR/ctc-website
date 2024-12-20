"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

interface CenterLocationsProps {
  translations: Record<string, string>;
}

export function CenterLocations({ translations }: CenterLocationsProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <div className="container py-12 space-y-12">
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className={cn(styles.heading, "text-center text-primary")}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("our.ctc.title")}
        </motion.h1>
        <motion.p
          className={cn(styles.body, "text-center max-w-8xl mx-auto ")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t("our.ctc.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="w-full aspect-[16/9] bg-gray-200">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1oXXkivO9_Cx8KyA2kAjlhWqoEK_DbuM&ehbc=2E312F&noprof=1"
              className="w-full h-full"
            ></iframe>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}
