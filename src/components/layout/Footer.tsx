import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import CTCLogo from "@/assets/logo/ctc-logo.webp";

interface FooterProps {
  lang?: string;
}

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

const links = (lang: string | undefined) => [
  { href: `/${lang}`, label: "Home" },
  { href: `/${lang}/about/about-us`, label: "Our Story" },
  { href: `/${lang}/about/mission-vision`, label: "Mission & Vision" },
  { href: `/${lang}/our-centers`, label: "Our Centers" },
  { href: `/${lang}/blog`, label: "News And Events" },
];

const contacts = [
  { icon: Mail, text: "info@doct.gov.kh" },
  { icon: Phone, text: "1234" },
  {
    icon: MapPin,
    text: `អគារលេខ ១៣ មហាវិថីព្រះនរោត្តម
រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា
ប្រអប់សំបុត្រលេខ ១២០១០`,
  },
];

export function SiteFooter({ lang }: FooterProps) {
  return (
    <motion.footer
      className="bg-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div variants={itemVariants}>
          <div className="rounded-full mb-4">
            <img
              src={CTCLogo.src}
              alt="C.T.C. logo"
              className="h-24 object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-lg text-white mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-lg">
            {links(lang).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-secondary"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 text-lg text-white">Other Links</h3>
          <div className="flex flex-col gap-2 text-lg">
            <a href={`/${lang}`} className="text-white hover:text-secondary">
              Ministry Of Post And Telecommunications
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 text-lg text-white">Contact</h3>
          <div className="flex flex-col gap-4 text-lg">
            {contacts.map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-start gap-2 text-white">
                <Icon className="h-4 min-w-4 mt-1" />
                <span> {text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
