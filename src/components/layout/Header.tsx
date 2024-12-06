import { Rabbit, ChevronDown } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
        { label: "Our Story", href: `/${lang}/about/our-story` },
        { label: "Mission & Vision", href: `/${lang}/about/mission ` },
        { label: "Team", href: `/${lang}/about/mission ` },
      ],
    },
    { href: `/${lang}/our-centers/`, label: "Our Centers" },
    { href: `/${lang}/blog/`, label: t("nav.blog") },
    { href: `/${lang}/contact/`, label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Rabbit className="h-10 w-10" />
          <span className="font-bold text-lg">Community Tech Center</span>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger
                  asChild
                  className="font-medium transition-colors hover:text-[#004282] nav-link"
                >
                  <Button variant="ghost" className="flex items-center gap-1 ">
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.label}>
                      <a href={child.href}>{child.label}</a>
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
                  className=" hover:text-[#004282] font-medium transition-colors nav-link"
                >
                  {item.label}
                </a>
              </motion.div>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} />
          <MobileNav translations={translations} lang={lang} />
        </div>
      </div>
    </header>
  );
}
