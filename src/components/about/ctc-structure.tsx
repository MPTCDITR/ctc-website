import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

import enNationalGovernmentCouncil from "@/assets/structure/en-national-government-council.svg";
import khNationalGovernmentCouncil from "@/assets/structure/kh-national-government-council.svg";
import listCenters from "@/assets/structure/list-centers.svg";

interface StructureProps {
  translations: Record<string, string>;
  lang: string;
}

const staffMembers = [
  {
    title: "Title",
    name: "Name",
    department: "Department",
    role: "Role",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Title",
    name: "Name",
    department: "Department",
    role: "Role",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Title",
    name: "Name",
    department: "Department",
    role: "Role",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Title",
    name: "Name",
    department: "Department",
    role: "Role",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const tableStaff = [
  { title: "Title", name: "Name", role: "Role" },
  { title: "Title", name: "Name", role: "Role" },
  { title: "Title", name: "Name", role: "Role" },
  { title: "Title", name: "Name", role: "Role" },
];

export function StructureCtc({ translations, lang }: StructureProps) {
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
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4">
            <img
              src={listCenters.src}
              alt="ctc centers"
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Second Section - Structure of CTC General Secretariat */}
      <section className="space-y-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary">
            Structure of CTC General Secretariat
          </h2>
          <TextElement variant="paragraph">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </TextElement>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {staffMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200"></div>
                  <div className="w-full">
                    <div className="flex-1 lg:flex sm:block justify-between items-center">
                      <div className="flex gap-2">
                        <div className="text-lg">{member.title}</div>
                        <div className="font-semibold text-lg text-primary">
                          {member.name}
                        </div>
                      </div>
                      <div className="text-secondary">{member.role}</div>
                    </div>
                    <div className="text-text">{member.department}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Third Section - Additional Structure */}
      <section className="space-y-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary">
            Structure of CTC General Secretariat
          </h2>
          <TextElement variant="paragraph">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </TextElement>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tableStaff.map((staff, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="font-semibold text-primary">
                    {staff.title}
                  </div>
                  <div className="text-lg">{staff.name}</div>
                </div>
                <div className="text-secondary">{staff.role}</div>
              </div>
            </Card>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
