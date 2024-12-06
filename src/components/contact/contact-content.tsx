"use client";

import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactContent() {
  return (
    <div className="container py-12 space-y-12">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#004282]">
              Contact Information
            </h1>
            <p className="text-[#202020]">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MapPin className="w-5 h-5 mt-1 text-[#004282]" />
              <span>
                Building 13, Monivong Blvd, Sangkat Srah Chak, Khan Daun Penh,
                Phnom Penh, Cambodia, 120210
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Phone className="w-5 h-5 text-[#004282]" />
              <span>1234</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Mail className="w-5 h-5 text-[#004282]" />
              <span>info@docd.gov.kh</span>
            </motion.div>
          </div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="#"
              className="p-2 rounded-full bg-[#004282] text-white hover:bg-[#004282]/90 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-[#004282] text-white hover:bg-[#004282]/90 transition-colors"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-[#004282] text-white hover:bg-[#004282]/90 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="aspect-square bg-gray-200" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="w-full aspect-[21/9] bg-gray-200" />
      </motion.div>
    </div>
  );
}
