import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages, type Language } from "@/i18n/ui";
import KhmerIcon from "@/assets/languages/KH.svg";
import USIcon from "@/assets/languages/UK.svg";

interface LanguageSwitcherProps {
  translations?: Record<string, string>;
  lang?: string;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const switchLanguage = (lang: Language) => {
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/").filter(Boolean);
    const newPath = segments.length > 1 ? segments.slice(1).join("/") : "";
    window.location.pathname = `/${lang}/${newPath}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="font-medium transition-colors hover:text-primary nav-link "
      >
        <Button variant="ghost" className="flex items-center gap-2">
          {lang == "en" ? (
            <>
              <img src={USIcon.src} width="23" height="15" />
              <span>English</span>
            </>
          ) : (
            <>
              <img src={KhmerIcon.src} width="23" height="15" />
              <span>ខ្មែរ</span>
            </>
            
          )}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(languages).map(([lang, label]) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => switchLanguage(lang as Language)}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
