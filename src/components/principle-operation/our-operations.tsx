import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";
import { motion } from "framer-motion";
import OurService5 from "@/assets/our-centers/our-service/service-7.png";
import TextElement from "../text-element/TextElement";

interface FunctionalityProps {
  translations: Record<string, string>;
}

export function OperationPrinciple({ translations }: FunctionalityProps) {
  const t = (key: string) => translations[key] || key;

  const facilitySections = [
    {
      title: "home.service.computerlab",
      description1: "center.computerlab.description1",
      description2: "center.computerlab.description2",
      image1: OurService5.src,
      image2: OurService5.src,
    },
    {
      title: "home.service.trainingroom",
      description1: "center.trainingroom.description1",
      description2: "center.trainingroom.description2",
      image1: OurService5.src,
      image2: OurService5.src,
    },
    {
      title: "home.service.publichall",
      description1: "center.publichall.description1",
      description2: "center.publichall.description2",
      image1: OurService5.src,
      image2: OurService5.src,
    },
    {
      title: "home.service.postoffice",
      description1: "center.postoffice.description1",
      image1: OurService5.src,
      image2: OurService5.src,
    },
  ];

  return (
    <>
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
            {t("nav.center.ourservices")}
          </motion.h1>
          <motion.p
            className={cn(styles.body, "text-center max-w-8xl mx-auto ")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </motion.p>
        </motion.section>
      </div>
      {facilitySections.map((section, index) => (
        <div
          className={`${index % 2 === 1 ? "bg-background text-primary" : "bg-primary text-white"} py-12 space-y-24`}
        >
          <motion.section
            key={section.title}
            className=" container rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <div className="p-8 md:p-12 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className=" space-y-4 ">
                  <h2 className="text-3xl font-bold">{t(section.title)}</h2>
                  <TextElement variant="paragraph">
                    {t(section.description1)}
                  </TextElement>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <img
                      src={section.image1}
                      alt={section.title}
                      className="object-cover w-full"
                    />
                  </div>
                </div>
                <div className=" flex flex-col space-y-4 ">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <img
                      src={section.image2}
                      alt={section.title}
                      className="object-cover w-full"
                    />
                  </div>
                  {section.description2 && (
                    <TextElement variant="paragraph">
                      {t(section.description2)}
                    </TextElement>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      ))}
    </>
  );
}
