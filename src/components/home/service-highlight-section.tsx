import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import imageservice from "@/assets/service/service.svg";
import TextElement from "@/components/text-element/TextElement";

interface ServiceItem {
  title: string;
  description: string;
  src: string;
}
const services: ServiceItem[] = [
  {
    title: "មជ្ឈមណ្ឌល",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    src: imageservice.src,
  },
  {
    title: "មជ្ឈមណ្ឌលបណ្តុះបណ្តាល",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    src: imageservice.src,
  },
  {
    title: "សាលាសាធារណៈ",
    description:
      "It was popularised in the 1960s with the release of Letraset, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    src: imageservice.src,
  },
  {
    title: "បណ្តុំប្រព័ន្ធថ្មី",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    src: imageservice.src,
  },
];

export function ServiceHighlights() {
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
            គោលការណ៍ប្រតិបត្តិនៃមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍
          </TextElement>
          <TextElement variant="body" className="max-w-8xl">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
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
                  {service.title}
                </TextElement>

                <TextElement variant="small">{service.description}</TextElement>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
