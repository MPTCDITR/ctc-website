"use client";

import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import PostOfficeView from "@/assets/post-office-view.webp";
import TextElement from "@/components/text-element/TextElement";

interface ContactProps {
  translations: Record<string, string>;
}

export function ContactContent({ translations }: ContactProps) {
  const t = (key: string) => translations[key] || key;

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
              {t("contact")}
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
              <TextElement variant="body">
              {t("footer.address")}
              </TextElement>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Phone className="w-5 h-5 text-primary" />
              <TextElement variant="body">{t("footer.phonenumber")}</TextElement>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Mail className="w-5 h-5 text-primary" />
              <TextElement variant="body">{t("footer.email")}</TextElement>
            </motion.div>
          </div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="https://www.facebook.com/www.mptc.gov.kh" target="_blank"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/mptcgovkh" target="_blank"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary transition-colors"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/www.mptc.gov.kh" target="_blank"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6732883906925!2d104.91480367570388!3d11.57526268862627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095142eadcf8db%3A0xbd4e32a5eccddfb7!2sMinistry%20of%20Post%20and%20Telecommunications!5e0!3m2!1sen!2skh!4v1734070475614!5m2!1sen!2skh"
            className="size-full"
            title="Google Maps: Telecommunication Regulator of Cambodia Location"
          ></iframe>
        </Card>
      </motion.div>
    </div>
  );
}
