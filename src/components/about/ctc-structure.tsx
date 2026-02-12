import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

import enNationalGovernmentCouncil from "@/assets/structure/en-national-government-council.svg";
import khNationalGovernmentCouncil from "@/assets/structure/kh-national-government-council.svg";
import enListCenters from "@/assets/structure/en-list-centers.svg";
import khListCenters from "@/assets/structure/kh-list-centers.svg";
import type { CollectionEntry } from "astro:content";

interface StructureProps {
  translations: Record<string, string>;
  lang: string;
  nationalBoardMembers: CollectionEntry<"national-board-member">[];
}

export function StructureCtc({
  translations,
  lang,
  nationalBoardMembers,
}: StructureProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <div className="container py-12 space-y-24">
      {/* First Section - Structure of CTC */}
      <section className="space-y-8">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TextElement variant="heading">{t("about.structure")}</TextElement>
          <TextElement variant="paragraph">
            {t("about.structure.description")}
          </TextElement>
        </motion.div>
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4">
            {lang === "en" ? (
              <img
                src={enNationalGovernmentCouncil.src}
                alt="ctc national government council orgchart"
                className="object-cover"
              />
            ) : (
              <img
                src={khNationalGovernmentCouncil.src}
                alt="ctc national government council orgchart"
                className="object-cover"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          className={cn(styles.paragraph, "text-center space-y-4")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("about.structure.description2")}
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4">
            {lang === "en" ? (
              <img
                src={enListCenters.src}
                alt="ctc national government council orgchart"
                className="object-cover"
              />
            ) : (
              <img
                src={khListCenters.src}
                alt="ctc national government council orgchart"
                className="object-cover"
              />
            )}
          </div>
        </motion.div>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary">
            {t("about.structure.ctcnational.board")}
          </h2>
          <TextElement variant="paragraph">
            {t("about.structure.ctcnational.board.description")}
          </TextElement>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {nationalBoardMembers.map((member, index) => (
            <motion.div
              key={member.data.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-4">
                <div className="flex gap-6">
                  <div className="relative overflow-hidden ">
                    <img
                      src={member.data.image?.src}
                      alt="ctc national government council orgchart"
                      className="object-cover size-32"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex-1 lg:flex sm:block justify-between items-start">
                      <div>
                        {member.data?.name && (
                          <div className="flex gap-2">
                            <div className="text-lg">{member.data.title}</div>
                            <div className="font-semibold text-lg text-primary">
                              {member.data.name}
                            </div>
                          </div>
                        )}
                        <div className="text-text">
                          {member.data.organization}
                        </div>
                      </div>

                      <div className="text-text">{member.data.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
