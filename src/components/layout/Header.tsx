import React from "react";
import { Rabbit } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  translations: Record<string, string>;
  lang?: string;
}

export function Header({ translations, lang }: HeaderProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Rabbit className="h-10 w-10" />
          <span className="font-bold text-lg">Community Tech Center</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <a
            href={`/${lang}`}
            className="font-medium transition-colors hover:text-primary nav-link"
          >
            {t("nav.home")}
          </a>
          <a
            href={`/${lang}/about/`}
            className="font-medium transition-colors hover:text-primary nav-link"
          >
            {t("nav.about")}
          </a>
          <a
            href={`/${lang}/blog/`}
            className="font-medium transition-colors hover:text-primary nav-link"
          >
            {t("nav.blog")}
          </a>
          <a
            href={`/${lang}/contact/`}
            className="font-medium transition-colors hover:text-primary nav-link"
          >
            {t("nav.contact")}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} />
          <MobileNav translations={translations} lang={lang} />
        </div>
      </div>
    </header>
  );
}
