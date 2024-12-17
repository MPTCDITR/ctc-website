import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import computerLab from "@/assets/service/computer-lab.svg";
import trainingRoom from "@/assets/service/training-room.svg";
import postOffice from "@/assets/service/post-office.svg";
import publicHall from "@/assets/service/public-hall.svg";
import TextElement from "@/components/text-element/TextElement";

interface ServiceItem {
  title: string;
  description: string;
  src: string;
}

interface ServiceSectionProps {
  translations: Record<string, string>;
  lang?: string;
}

const services: ServiceItem[] = [
  {
    title: "home.service.computerlab",
    description:
      "home.service.computerlab.description",
    src: computerLab.src,
  },
  {
    title: "home.service.trainingroom",
    description:
      "home.service.trainingroom.description",
    src: trainingRoom.src,
  },
  {
    title: "home.service.postoffice",
    description:
      "home.service.postoffice.description",
    src: postOffice.src,
  },
  {
    title: "home.service.publichall",
    description:
      "home.service.publichall.description",
    src: publicHall.src,
  },
];

export function ServiceHighlights({ translations, lang }: ServiceSectionProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16 space-y-4 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TextElement variant="heading">
            {t("home.service")}
          </TextElement>
          <TextElement variant="body" className="max-w-8xl">
           {t("home.service.description")}
          </TextElement>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background rounded-lg border border-lightblue shadow-sm shadow-lightblue transition-colors hover:bg-slate-100"
            >
              <Card className="p-6 text-center bg-transparent border-none shadow-none">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full flex items-center justify-center">
                    <img
                      src={service.src}
                      alt={service.title}
                      className="size-44 object-cover"
                    />
                  </div>
                </div>
                <TextElement
                  variant="title"
                  className="text-xl font-bold mb-4 text-primary"
                >
                  {t(service.title)}
                </TextElement>

                <TextElement variant="small">{t(service.description)}</TextElement>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
