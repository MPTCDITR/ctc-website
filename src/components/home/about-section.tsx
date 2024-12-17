import { Button } from "@/components/ui/button";
import TextElement from "@/components/text-element/TextElement";

interface AboutSectionProps {
  translations: Record<string, string>;
  lang?: string;
}

export function AboutSection({ translations, lang }: AboutSectionProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <div className="bg-slate-100">
      <div className="container grid md:grid-cols-2 grid-cols-1 gap-12 py-16 h-100">
        <div>
          <TextElement variant="heading" className="text-primary">
            {t("home.about")}
          </TextElement>
        </div>
        <div className="flex flex-col gap-6">
          <TextElement variant="body">
            {t("home.about.description")}
          </TextElement>
          <Button
            variant="link"   
            className="w-fit text-secondary hover:text-secondary"
          >
            {t("home.about.aboutus")} →
          </Button>
        </div>
      </div>
    </div>
  );
}
