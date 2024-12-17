import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Mission from "@/assets/vision-mission/mission.svg";
import Vision from "@/assets/vision-mission/vision.svg";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

interface MissionVisionProps {
  translations: Record<string, string>;
}

export function MissionVisionContent({ translations }: MissionVisionProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <div className="container py-12 space-y-24">
      <motion.section
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6">
          <motion.h1
            className={cn(styles.heading, "text-primary")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("about.vision.title")}
          </motion.h1>
          <motion.p
            className={cn(styles.body, "leading-relaxed")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t("about.vision.description")}
          </motion.p>
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="aspect-square bg-background border-none max-w-60 lg:max-w-80">
            <img
              src={Vision.src}
              alt="c.t.c. vision"
              className="w-full"
              style={{ objectFit: "cover" }}
            />
          </Card>
        </motion.div>
      </motion.section>

      <motion.section
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div
          className="md:order-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Card className="aspect-square bg-background border-none max-w-60 lg:max-w-80">
            <img
              src={Mission.src}
              alt="c.t.c. mission"
              className="w-full"
              style={{ objectFit: "cover" }}
            />
          </Card>
        </motion.div>
        <div className="space-y-6 md:order-1">
          <motion.h1
            className={cn(styles.heading, "text-primary")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {t("about.mission.title")}
          </motion.h1>
          <motion.ul
            className={cn(styles.body, "leading-relaxed list-disc pl-4")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <li>{t("about.mission.description1")}</li>
            <li>{t("about.mission.description2")}</li>
          </motion.ul>
        </div>
      </motion.section>
    </div>
  );
}
