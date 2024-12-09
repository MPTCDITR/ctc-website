import { Button } from "@/components/ui/button";
import TextElement from "@/components/text-element/TextElement";

export function AboutSection() {
  return (
    <div className="bg-slate-100">
      <div className="container grid md:grid-cols-2 grid-cols-1 gap-12 py-16 h-100">
        <div>
          <TextElement variant="heading" className="text-primary">
            About Community Tech Center
          </TextElement>
        </div>
        <div className="flex flex-col gap-6">
          <TextElement variant="body">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </TextElement>
          <Button
            variant="link"
            className="w-fit text-secondary hover:text-secondary"
          >
            About Us →
          </Button>
        </div>
      </div>
    </div>
  );
}
