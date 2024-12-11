import TextElement from "@/components/text-element/TextElement";
import PostOfficeView from "@/assets/post-office-view.webp";

export function CentersSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container flex flex-col items-center gap-8">
        <TextElement variant="heading" className="text-primary">
          Our Centers
        </TextElement>
        <TextElement variant="body" className="max-w-8xl text-center ">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
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
