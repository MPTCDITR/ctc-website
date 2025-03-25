import { Facebook, Link, MapPin, Youtube} from "lucide-react";
import { motion } from "framer-motion";
import CTCLogo from "@/assets/logo/ctc-logo.svg";
import { useTranslations } from "@/i18n/utils";
import type { SupportedLanguage } from "@/i18n/ui";
import TextElement from "../text-element/TextElement";
import Cambodia from "@/assets/footer/cambodia-cities.svg";
import tiktok from "@/assets/footer/tiktok.svg";

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
      className="bg-primary bg-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
        <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        aria-hidden="true"
      >
        <img 
          src={Cambodia.src}
          alt="" // Empty alt text since this is decorative
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
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
        <TextElement variant="titleblog" className="font-semibold text-lg text-secondary mb-4">{t("footer.quicklink")}</TextElement>
          <div className="flex flex-col gap-3 text-lg">
            {links(lang).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-secondary"
                style={{ WebkitTextStroke: " black" }}
              >
                {t(label)}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
        <TextElement variant="titleblog" className="font-semibold text-lg text-secondary mb-4">{t("footer.otherlink")}</TextElement>
          <div className="flex flex-col gap-3 text-lg">
            {otherLinks.map(({ href, label }) => (
              <a href={href} target="_blank" className="text-white hover:text-secondary outline-black">
                {t(label)}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
        <TextElement variant="titleblog" className="font-semibold text-lg text-secondary mb-4"> {t("nav.contact")}</TextElement>
          <div className="grid gap-2">
            <div className="flex flex-col gap-3 text-lg">
              {contacts.map(({ icon: Icon, text, href }, index) => (
                <div key={index} className="flex items-start gap-2 text-white">
                  <Icon className="h-4 min-w-4 mt-1" />
                  { href 
                    ? (<a href={href} target="_blank" rel="noreferrer" className="hover:text-secondary outline-black"><span> {t(text)}</span></a>) 
                    : (<span> {t(text)}</span>) 
                  }
                  
                </div>
              ))}
            </div>

              <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                <a
                    href="https://www.facebook.com/profile.php?id=61574204880819 "
                    target="_blank"
                    className="p-2 rounded-full text-white bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Facebook className="w-5 h-5"/>
                  </a>
                  <a
                    href="https://www.youtube.com/@MPTCCommunityTechCenter "
                    target="_blank"
                    className="p-2 rounded-full text-white bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Youtube className="w-5 h-5"/>
                  </a>
                  <a
                    href="https://www.tiktok.com/@community.tech.center"
                    target="_blank"
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <img
                        src={tiktok.src}
                        alt="Social"
                        className="size-5"
                        style={{ objectFit: "cover" }}
                    />
                  </a>
                </motion.div>
                </div>
              </motion.div>   
    
      </div>
     
    </motion.footer>
  );
}
