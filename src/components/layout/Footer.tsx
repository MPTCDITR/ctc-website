"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import CTCLogo from "@/assets/logo/ctc-logo.webp";

export function SiteFooter() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-gray-100"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
        <motion.div variants={itemVariants}>
          <div className=" rounded-full mb-4">
            <img
              src={CTCLogo.src}
              alt="c.t.c. logo"
              className="h-16"
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <a href="/" className="text-gray-600 hover:text-[#004282]">
              Home
            </a>
            <a
              href="/about/our-story"
              className="text-gray-600 hover:text-[#004282]"
            >
              Our Story
            </a>
            <a
              href="/about/mission"
              className="text-gray-600 hover:text-[#004282]"
            >
              Mission & Vision
            </a>
            <a href="/centers" className="text-gray-600 hover:text-[#004282]">
              Our Centers
            </a>
            <a href="/news" className="text-gray-600 hover:text-[#004282]">
              News And Events
            </a>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4">Other as</h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-gray-600 hover:text-[#004282]">
              Ministry Of Post And Telecommunications
            </a>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4">Contact</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span>info@doct.gov.kh</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span>1234</span>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="h-4 w-4 mt-1" />
              <span>
                អគារលេខ ១៣ មហាវិថីព្រះនរោត្តម
                <br />
                រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា
                <br />
                ប្រអប់សំបុត្រលេខ ១២០១០
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
