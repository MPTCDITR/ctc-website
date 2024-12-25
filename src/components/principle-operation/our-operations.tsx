import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";
import { motion } from "framer-motion";
import OurService1 from "@/assets/image-assets/computer-lab.webp";
import OurService2 from "@/assets/our-centers/our-service/computer-labs.png";
import trainingRoom1 from "@/assets/our-centers/our-service/training-room-1.webp";
import OurService3 from "@/assets/our-centers/our-service/training-room-2.png";
import OurService4 from "@/assets/image-assets/ctc-left-view.webp";
import OurService5 from "@/assets/image-assets/post-office-view.webp";
import OurService6 from "@/assets/our-centers/our-service/post-order.png";
import OurService7 from "@/assets/image-assets/ctc-opening-ceremony.webp";
import TextElement from "../text-element/TextElement";

interface FunctionalityProps {
  translations: Record<string, string>;
}

export function OperationPrinciple({ translations }: FunctionalityProps) {
  const t = (key: string) => translations[key] || key;

  const facilitySections = [
    {
      id: "computer-lab",
      title: "home.service.computerlab",
      description1: "center.computerlab.description1",
      description2: "center.computerlab.description2",
      image1: OurService1.src,
      image2: OurService2.src,
    },
    {
      id: "training-room",
      title: "home.service.trainingroom",
      description1: "center.trainingroom.description1",
      description2: "center.trainingroom.description2",
      image1: trainingRoom1.src,
      image2: OurService3.src,
    },
    {
      id: "public-hall",
      title: "home.service.publichall",
      description1: "center.publichall.description1",
      description2: "center.publichall.description2",
      image1: OurService4.src,
      image2: OurService5.src,
    },
    {
      id: "post-office",
      title: "home.service.postoffice",
      description1: "center.postoffice.description1",
      image1: OurService6.src,
      image2: OurService7.src,
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
            {t("nav.center.ourfunctionalities")}
          </motion.h1>
          <motion.p
            className={cn(styles.body, "text-center max-w-8xl mx-auto ")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t("center.functionality.description")}
          </motion.p>
        </motion.section>
      </div>
      {facilitySections.map((section, index) => (
        <div
          key={section.title}
          id={section.id}
          className={`${index % 2 === 1 ? "bg-background text-primary" : "bg-primary text-white"} py-12 space-y-24 scroll-mt-20`}
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
