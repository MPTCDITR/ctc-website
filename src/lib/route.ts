import { getTranslatedkey } from "@/i18n/utils";
import { getRelativeLocaleUrl } from "astro:i18n";

export const navigation = [
  { label: "nav.home", href: "" },
  {
    label: "nav.about",
    children: [
      { label: "nav.about.aboutus", href: `/about/about-us` },
      { label: "nav.about.mission", href: `/about/mission-vision` },
      { label: "nav.about.structure", href: `/about/ctc-structure` },
    ],
  },
  { href: `/our-centers/`, label: "nav.ourcenters" },
  { href: `/blog/`, label: "nav.news" },
  { href: `/contact/`, label: "nav.contact" },
];

interface RouteType {
  href?: string;
  label: string;
  children?: RouteType[];
}

export function getLocalizedRoutes(
  paths: RouteType[],
  locale: string
): RouteType[] {
  return paths.map((path) => {
    if (path.href || path.href === "") {
      return {
        label: getTranslatedkey(path.label, locale),
        href: getRelativeLocaleUrl(locale, path.href),
      };
    }

    if (path.children) {
      return {
        label: getTranslatedkey(path.label, locale),
        children: getLocalizedRoutes(path.children, locale),
      };
    }

    return path;
  });
}
