import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

export function MissionVisionContent() {
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
            className={cn(styles.heading, "text-[#004282]")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Vision
          </motion.h1>
          <motion.p
            className={cn(styles.body, "text-[#202020] leading-relaxed")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="aspect-square bg-gray-200" />
        </motion.div>
      </motion.section>

      <motion.section
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div
          className="md:order-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Card className="aspect-square bg-gray-200" />
        </motion.div>
        <div className="space-y-6 md:order-1">
          <motion.h1
            className={cn(styles.heading, "text-[#004282]")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Mission
          </motion.h1>
          <motion.p
            className={cn(styles.body, "text-[#202020] leading-relaxed")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
