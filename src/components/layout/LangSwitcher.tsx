import { languages, type SupportedLanguage, type Language } from "@/i18n/ui";
import KhmerIcon from "@/assets/languages/KH.svg";
import USIcon from "@/assets/languages/UK.svg";
import { navigate } from "astro:transitions/client";

interface LanguageSwitcherProps {
  translations?: Record<string, string>;
  lang?: string;
  initialLocale?: SupportedLanguage | undefined;
}

export function LangSwitcher({ lang, initialLocale }: LanguageSwitcherProps) {
  const toggleLanguage = () => {
    const locales = Object.keys(languages) as SupportedLanguage[];
    let currentIndex = locales.indexOf(initialLocale || locales[0]);
    const nextIndex = (currentIndex + 1) % locales.length;
    const newLocale = locales[nextIndex];
    const currentPath = window.location.pathname;

    const newPath = `/${newLocale}${currentPath.replace(/^\/[a-z]{2}/, "")}`;
    navigate(newPath);
  };

  const langImages = {
    en: KhmerIcon,
    km: USIcon,
  };
  return (
    <button
      onClick={toggleLanguage}
      type="button"
      aria-label={`Current language: Click to toggle language.`}
      className="ml-5 flex min-w-max rounded-full border-2 border-solid border-secondary sm:flex md:flex lg:hidden 2xl:ml-10"
    >
      <img
        src={`${lang === "en" ? langImages.en : langImages.en}`}
        width="26"
        height="26"
        alt="flag"
      />
    </button>
  );
}
