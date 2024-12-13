import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import CTCLogo from "@/assets/logo/ctc-logo.webp";
import { useTranslations } from "@/i18n/utils";
import type { SupportedLanguage } from "@/i18n/ui";

interface FooterProps {
  lang: SupportedLanguage;
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
  { icon: Mail, text: "footer.email" },
  { icon: Phone, text: "footer.phonenumber" },
  {
    icon: MapPin,
    text: "footer.address",
  },
];

export function SiteFooter({ lang }: FooterProps) {
  const t = useTranslations(lang);

  return (
    <motion.footer
      className="bg-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 md:gap-2 lg:gap-8 gap-12">
        <motion.div variants={itemVariants}>
          <div className="rounded-full mb-4">
            <img
              src={CTCLogo.src}
              alt="C.T.C. logo"
              className=" h-28 object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-lg text-secondary mb-4">
            Quick Links
          </h3>
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
          <h3 className="font-semibold mb-4 text-lg text-secondary">
            Other Links
          </h3>
          <div className="flex flex-col gap-2 text-lg">
            <a href={`/${lang}`} className="text-white hover:text-secondary">
              Ministry Of Post And Telecommunications
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 text-lg text-secondary">Contact</h3>
          <div className="flex flex-col gap-4 text-lg">
            {contacts.map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-start gap-2 text-white">
                <Icon className="h-4 min-w-4 mt-1" />
                <span> {t(text)}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
