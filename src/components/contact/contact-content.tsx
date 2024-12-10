"use client";

import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import PostOfficeView from "@/assets/post-office-view.webp";
import TextElement from "@/components/text-element/TextElement";

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
            <TextElement variant="heading" className="text-primary">
              Contact Information
            </TextElement>
            <TextElement variant="body">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </TextElement>
          </div>

          <div className="space-y-6">
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MapPin className="w-5 h-5 mt-1 text-primary" />
              <TextElement variant="body" >
                Building 13, Monivong Blvd, Sangkat Srah Chak, Khan Daun Penh,
                Phnom Penh, Cambodia, 120210
              </TextElement>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Phone className="w-5 h-5 text-primary" />
              <TextElement variant="body" >
                1234
              </TextElement>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Mail className="w-5 h-5 text-primary" />
              <TextElement variant="body" >
                info@docd.gov.kh
              </TextElement>
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
              className="p-2 rounded-full bg-primary text-white hover:bg-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary transition-colors"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary transition-colors"
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
          <Card className="bg-gray-200">
            <img
              src={PostOfficeView.src}
              alt="c.t.c. post office view"
              className="w-full"
              style={{ objectFit: "cover" }}
            />
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="w-full aspect-[21/9] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1162.8156767476266!2d104.86875695463935!3d11.23476819449948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310965004b1805c1%3A0x6ad74b518822fb3f!2z4Z6Y4Z6H4Z-S4Z6I4Z6Y4Z6O4Z-S4Z6M4Z6b4Z6U4Z6F4Z-S4Z6F4Z-B4Z6A4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6f4Z6g4Z6C4Z6Y4Z6T4Z-N!5e0!3m2!1sen!2skh!4v1733729558785!5m2!1sen!2skh"
            className="size-full"
            title="Google Maps: Telecommunication Regulator of Cambodia Location"
          ></iframe>
        </Card>
      </motion.div>
    </div>
  );
}
