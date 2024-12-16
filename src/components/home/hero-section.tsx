import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

import ctcImage from "@/assets/post-office-view.webp";
import ctclestside from "@/assets/about/ctc-left-view.webp";

interface Slide {
  image: string;
  title: string;
  description: string;
  href?: string;
}
interface HeroSectionProps {
  translations: Record<string, string>;
  lang?: string;
}

const Hero = ({ translations, lang }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = (key: string) => translations[key] || key;

  const slides: Slide[] = [
    {
      image: ctcImage.src,
      title: "Community Tech Center",
      description: "Empowering communities through technology and innovation",
      href: `/${lang}/about/about-us/`,
    },
    {
      image: ctclestside.src,
      title: "Computer Lab",
      description:
        "A space for teaching digital skills, both in person and online, and for hosting meetings.",
    },
    {
      image: ctcImage.src,
      title: "Post Office",
      description:
        "Offers package services for sending and receiving items locally and internationally, along with other services for merchants, traders, and the community.",
    },
    {
      image: ctclestside.src,
      title: "Public Hall",
      description:
        "Provides access to computers and the Internet, allowing community members to find information on agriculture, business, and public services.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[800px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[800px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 text-start text-white">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <TextElement variant="heading" className="mb-6 text-white">
              {slides[currentSlide].title}
            </TextElement>
            <TextElement variant="body" className="mb-8 max-w-3xl mx-autos">
              {slides[currentSlide].description}
            </TextElement>
            {slides[currentSlide].href && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(styles.button)}
              >
                <a
                  href={slides[currentSlide].href}
                  className="w-full h-full shadow-lg hover:shadow-lightblue bg-white/60 text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-base"
                >
                  {t("btn.learnmore")}
                </a>
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
