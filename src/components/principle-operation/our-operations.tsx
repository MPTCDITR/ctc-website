import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";
import { motion } from "framer-motion";
import OurService1 from "@/assets/our-centers/our-service/computer-lab.png";
import OurService2 from "@/assets/our-centers/our-service/computer-lab-1.png";
import OurService3 from "@/assets/our-centers/our-service/trainning-center.png";
import OurService4 from "@/assets/image-assets/ctc-left-view.webp";
import OurService5 from "@/assets/image-assets/post-office-view.webp";
import OurService6 from "@/assets/our-centers/our-service/post-order.png";
import OurService7 from "@/assets/image-assets/ctc-opening-ceremony.webp";
import TextElement from "../text-element/TextElement";

export function OperationPrinciple() {
  const facilitySections = [
    {
      title: "បន្ទប់កំព្យូទ័រ",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image1: OurService1.src,
      image2: OurService2.src,
    },
    {
      title: "មជ្ឈមណ្ឌលបណ្តុះបណ្តាល",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image1: OurService3.src,
      image2: OurService3.src,
    },
    {
      title: "សាធារណៈ",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image1: OurService4.src,
      image2: OurService5.src,
    },
    {
      title: "បញ្ជារប្រៃសណីយ៍",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
            C.T.C Operation Principles
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
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                  <TextElement variant="paragraph">
                    {section.description}
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
                  <TextElement variant="paragraph">
                    {section.description}
                  </TextElement>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      ))}
    </>
  );
}
