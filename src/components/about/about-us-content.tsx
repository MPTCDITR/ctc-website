import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import aboutctc1 from "@/assets/image-assets/about-ctc-1.webp";
import aboutctc2 from "@/assets/image-assets/about-ctc-3.webp";
import aboutctc3 from "@/assets/image-assets/about-ctc-4.webp";
import TextElement from "@/components/text-element/TextElement";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

interface AboutUsContent {
  translations: Record<string, string>;
}
export function AboutContent({ translations }: AboutUsContent) {
  const t = (key: string) => translations[key] || key;

  return (
    <div className="container py-12 space-y-12">
      <motion.h1
        className={cn(styles.heading, "text-center text-primary")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("about.ctc.title")}
      </motion.h1>

      <motion.p
        className={cn(styles.body, "lg:text-justify  max-w-8xl mx-auto")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("about.ctc.paragraph1")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="w-full aspect-video bg-gray-200">
          <img
            src={aboutctc1.src}
            alt="c.t.c. post office view"
            className="w-full"
            style={{ objectFit: "cover" }}
          />
        </Card>
      </motion.div>

      <motion.p
        className={cn(styles.body, "max-w-8xl mx-auto lg:text-justify ")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {t("about.ctc.paragraph2")}
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="bg-gray-200">
            <img
              src={aboutctc3.src}
              alt="c.t.c. opening ceremony"
              className="w-full"
              style={{ objectFit: "cover" }}
            />
          </Card>
        </motion.div>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <TextElement variant="body" className="lg:text-justify ">
            {t("about.ctc.paragraph3")}
          </TextElement>
          <TextElement variant="body">{t("about.ctc.paragraph4")}</TextElement>
        </motion.div>
      </div>

      <motion.p
        className={cn(styles.body, "max-w-8xl mx-auto")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <Card className="w-full aspect-video bg-gray-200">
          <img
            src={aboutctc2.src}
            alt="c.t.c. post office left view"
            className="w-full"
            style={{ objectFit: "cover" }}
          />
        </Card>
      </motion.div>

      <motion.p
        className={cn(styles.body, "max-w-8xl mx-auto lg:text-justify ")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        {t("about.ctc.paragraph5")}
      </motion.p>
    </div>
  );
}
