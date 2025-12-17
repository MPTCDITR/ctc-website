import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

export interface HeroSlide {
  image: string; // Optimized src string
  title: string;
  description: string;
  href?: string;
}

interface HeroSectionProps {
  translations: Record<string, string>;
  lang?: string;
  slides: HeroSlide[];
}

const Hero = ({ translations, lang, slides }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = (key: string) => translations[key] || key;
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: index === 0 ? 1 : 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[600px] object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            // @ts-expect-error fetchpriority is a valid DOM attribute
            fetchpriority={index === 0 ? "high" : "auto"}
            decoding={index === 0 ? "sync" : "async"}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 text-start text-white">
          <motion.div
            key={currentSlide}
            initial={
              isFirstRender.current && currentSlide === 0
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
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
