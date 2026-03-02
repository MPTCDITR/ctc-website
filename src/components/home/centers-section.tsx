import TextElement from "@/components/text-element/TextElement";
import { Button } from "@/components/ui/button";
import Locations from "@/assets/home/locationshome.svg";

interface CenterSectionProps {
  translations: Record<string, string>;
  lang?: string;
}

export function CentersSection({ translations, lang }: CenterSectionProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <div className="py-16 bg-gray-50">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col md:flex-row gap-5 lg:gap-8">
          <div>
            <TextElement variant="heading" as="h2" className="text-primary">
              {t("nav.center.ourlocations")}
            </TextElement>
            <TextElement variant="body" className="max-w-8xl mt-8">
              {t("home.center.description")}
            </TextElement>
            <Button
              variant="link"
              className="w-fit mt-5 md:text-lg text-secondary hover:text-secondary"
            >
              <a href={`/${lang}/center/our-locations`}>
                {t("home.center.viewalllocations")} →
              </a>
            </Button>
          </div>
          <div className="w-full max-w-2xl aspect-[16/9] rounded-lg">
              <a
                href={`/${lang}/center/our-locations`}
                className="block rounded-lg"
              >
                <img
                  src={Locations.src}
                  alt="18 locations of CTC"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="450"
                />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
