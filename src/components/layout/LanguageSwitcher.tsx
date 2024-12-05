import React from "react";
import { GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages, type Language } from "@/i18n/ui";

export function LanguageSwitcher() {
  const switchLanguage = (lang: Language) => {
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/").filter(Boolean);
    const newPath = segments.length > 1 ? segments.slice(1).join("/") : "";
    window.location.pathname = `/${lang}/${newPath}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <GlobeIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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
