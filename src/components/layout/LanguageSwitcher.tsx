import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages, type Language, type SupportedLanguage } from "@/i18n/ui";
import KhmerIcon from "@/assets/languages/kh.svg";
import ENIcon from "@/assets/languages/en.svg";
import KHSquareIcon from "@/assets/languages/km-square.svg";
import ENSquareIcon from "@/assets/languages/en-square.svg";

interface LanguageSwitcherProps {
  translations?: Record<string, string>;
  lang: string;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const switchLanguage = (lang: Language) => {
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/").filter(Boolean);
    const newPath = segments.length > 1 ? segments.slice(1).join("/") : "";
    window.location.pathname = `/${lang}/${newPath}`;
  };

  const langImages = {
    en: ENSquareIcon,
    km: KHSquareIcon,
  };

  return (
    <>
      <div className="hidden md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="font-medium transition-colors hover:text-primary nav-link"
          >
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-base"
            >
              {lang == "en" ? (
                <>
                  <img src={ENIcon.src} width="23" height="15" alt="english lang"/>
                  <span>English</span>
                </>
              ) : (
                <>
                  <img src={KhmerIcon.src} width="23" height="15" alt="khmer lang"/>
                  <span>ខ្មែរ</span>
                </>
              )}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.entries(languages).map(([langKey, label]) => (
              <DropdownMenuItem
                key={langKey}
                onClick={() => switchLanguage(langKey as Language)}
                className="text-base"
              >
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {Object.entries(languages).map(
        ([language]) =>
          lang !== language && (
            <button
              key={language}
              onClick={() => switchLanguage(language as SupportedLanguage)}
              type="button"
              aria-label={`Current language: ${switchLanguage[language]}. Click to toggle language.`}
              className="flex min-w-max rounded-full border-2 border-solid border-secondary sm:flex md:hidden 2xl:ml-10"
            >
              <img
                src={langImages[language].src}
                width="26"
                height="26"
                alt="flag"
                className="rounded-full"
              />
            </button>
          )
      )}
    </>
  );
}
