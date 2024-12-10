import React from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MobileNavProps {
  translations: Record<string, string>;
  lang?: string;
}

export function MobileNav({ translations, lang }: MobileNavProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="-mx-4 -my-2 pt-4 md:hidden">
          <LanguageSwitcher lang={lang} />
        </div>
        <nav className="flex flex-col gap-4 mt-4">
          <a
            href={`/${lang}`}
            className="font-medium transition-colors hover:text-primary"
          >
            {t("nav.home")}
          </a>
          <a
            href={`/${lang}/about/`}
            className="font-medium transition-colors hover:text-primary"
          >
            {t("nav.about")}
          </a>
          <a
            href={`/${lang}/blog/`}
            className="font-medium transition-colors hover:text-primary"
          >
            {t("nav.blog")}
          </a>
          <a
            href={`/${lang}/contact/`}
            className="font-medium transition-colors hover:text-primary"
          >
            {t("nav.contact")}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
