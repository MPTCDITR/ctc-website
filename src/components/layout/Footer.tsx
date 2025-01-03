import { Link, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import CTCLogo from "@/assets/logo/ctc-logo.svg";
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
  { href: `/${lang}`, label: "nav.home" },
  { href: `/${lang}/about/about-us`, label: "nav.about.aboutus" },
  { href: `/${lang}/about/mission-vision`, label: "nav.about.mission" },
  { href: `/${lang}/center/our-ctc`, label: "nav.center.ourctc" },
  { href: `/${lang}/center/our-locations`, label: "nav.center.ourlocations" },
  { href: `/${lang}/blog`, label: "nav.news" },
  
];

const contacts = [
  { icon: Link, text: "footer.email", href:"https://www.mptc.gov.kh", },
  // { icon: Phone, text: "footer.phoneNumber" },
  {
    icon: MapPin,
    text: "footer.address",
  },
];

const otherLinks = [
  {
    href: "https://mptc.gov.kh/",
    label: "footer.mptc",
  },
  {
    href: "https://moeys.gov.kh/",
    label: "footer.moeys",
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
          <div className="rounded-full mb-4 flex justify-center lg:justify-start">
            <img
              src={CTCLogo.src}
              alt="C.T.C. logo"
              className="h-40 lg:h-36 object-contain"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-lg text-secondary mb-4">
            {t("footer.quicklink")}
          </h3>
          <div className="flex flex-col gap-3 text-lg">
            {links(lang).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-secondary"
              >
                {t(label)}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 text-lg text-secondary">
            {t("footer.otherlink")}
          </h3>
          <div className="flex flex-col gap-3 text-lg">
            {otherLinks.map(({ href, label }) => (
              <a href={href} target="_blank" className="text-white hover:text-secondary">
                {t(label)}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 text-lg text-secondary">
            {t("nav.contact")}
          </h3>
          <div className="flex flex-col gap-3 text-lg">
            {contacts.map(({ icon: Icon, text, href }, index) => (
              <div key={index} className="flex items-start gap-2 text-white">
                <Icon className="h-4 min-w-4 mt-1" />
                { href 
                  ? (<a href={href} target="_blank" rel="noreferrer" className="hover:text-secondary"><span> {t(text)}</span></a>) 
                  : (<span> {t(text)}</span>) 
                }
                
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
