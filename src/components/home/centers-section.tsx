import TextElement from "@/components/text-element/TextElement";
import PostOfficeView from "@/assets/post-office-view.webp";

interface CenterSectionProps {
  translations: Record<string, string>;
  lang?: string;
}

export function CentersSection({ translations, lang }: CenterSectionProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <div className="py-16 bg-gray-50">
      <div className="container flex flex-col items-center gap-8">
        <TextElement variant="heading" className="text-primary">
          {t("nav.center.ourcenters")}
        </TextElement>
        <TextElement variant="body" className="max-w-8xl text-center ">
          {t("home.center.description")}
        </TextElement>
        <div className="w-full max-w-8xl aspect-[16/9] bg-gray-200 rounded-lg">
          <img
            src={PostOfficeView.src}
            alt="c.t.c. post office view"
            className="w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
