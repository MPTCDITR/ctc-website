import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";
import { motion } from "framer-motion";
import OurService5 from "@/assets/our-centers/our-service/service-7.png";
import TextElement from "../text-element/TextElement";

export function OperationPrinciple() {
  const facilitySections = [
    {
      id: "computer-lab",
      title: "បន្ទប់កំព្យូទ័រ",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image1: OurService5.src,
      image2: OurService5.src,
    },
    {
      id: "training-room",
      title: "មជ្ឈមណ្ឌលបណ្តុះបណ្តាល",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image1: OurService5.src,
      image2: OurService5.src,
    },
    {
      id: "public-hall",
      title: "សាធារណៈ",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image1: OurService5.src,
      image2: OurService5.src,
    },
    {
      id: "post-office",
      title: "បញ្ជារប្រៃសណីយ៍",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
