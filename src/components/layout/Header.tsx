import { Rabbit, ChevronDown } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CTCLogoBlueSubtitle from "@/assets/logo/ctc-logo-blue-subtitle.webp";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  translations: Record<string, string>;
  lang?: string;
}

export function Header({ translations, lang }: HeaderProps) {
  const t = (key: string) => translations[key] || key;

  const navigation = [
    { href: `/${lang}`, label: t("nav.home") },
    {
      label: t("nav.about"),
      href: "#",
      children: [
        { label: "About Us", href: `/${lang}/about/about-us` },
        { label: "Mission & Vision", href: `/${lang}/about/mission-vision ` },
        { label: "CTC Structure", href: `/${lang}/about/ctc-structure ` },
      ],
    },
    { href: `/${lang}/our-centers/`, label: "Our Centers" },
    { href: `/${lang}/blog/`, label: t("nav.news") },
    { href: `/${lang}/contact/`, label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-full py-4 items-center justify-between">
        <a href={`/${lang}`} aria-label="Go to home page">
          <img
            src={CTCLogoBlueSubtitle.src}
            alt="c.t.c. logo"
            className="h-12 md:h-14"
            style={{ objectFit: "cover" }}
          />
        </a>

        <nav className="hidden lg:flex lg:gap-0 xl:gap-4 items-center">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger
                  asChild
                  className="font-medium transition-colors hover:text-[#004282] nav-link"
                >
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-base lg:px-3 xl:px-4"
                  >
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.label}>
                      <a href={child.href} className="text-base">
                        {child.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className=" hover:text-[#004282] lg:px-3 xl:px-4 font-medium transition-colors nav-link text-base"
                >
                  {item.label}
                </a>
              </motion.div>
            )
          )}
        </nav>

        <div className="flex items-center">
          <div className="hidden md:flex">
            <LanguageSwitcher lang={lang} />
          </div>
          <MobileNav translations={translations} lang={lang} />
        </div>
      </div>
    </header>
  );
}
