import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

import computerLab from "@/assets/image-assets/computer-lab.webp"
import trainingRoom from "@/assets/home/training-room.jpg"
import publicHall from "@/assets/home/public-hall.png"
import postOffice from "@/assets/home/post-office.svg"
import ctcImage from "@/assets//image-assets/post-office-view.webp";

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
      image: computerLab.src,
      title: "home.service.computerlab",
      description: "home.service.computerlab.description",
    },
    {
      image: trainingRoom.src,
      title: "home.service.trainingroom",
      description: "home.service.trainingroom.description",
    },
    {
      image: postOffice.src,
      title: "home.service.postoffice",
      description: "home.service.postoffice.description",
    },
    {
      image: publicHall.src,
      title: "home.service.publichall",
      description: "home.service.publichall.description",
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
              {t(slides[currentSlide].title)}
            </TextElement>
            <TextElement variant="body" className="mb-8 max-w-3xl mx-autos">
              {t(slides[currentSlide].description)}
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
