import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";
import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Community Tech Center",
    description: "Empowering communities through technology and innovation",
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Computer Lab",
    description: "A space for teaching digital skills, both in person and online, and for hosting meetings.",
  },
  {
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    title: "Training Room",
    description: "A place for learning how to repair technology and for offering short courses on digital skills to local authorities and community members.",
  },
  {
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    title: "Post Office",
    description: "Offers package services for sending and receiving items locally and internationally, along with other services for merchants, traders, and the community.",
  },
  {
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    title: "Public Hall",
    description: "Provides access to computers and the Internet, allowing community members to find information on agriculture, business, and public services.",
  },

];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                styles.button,
                "bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              )}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
