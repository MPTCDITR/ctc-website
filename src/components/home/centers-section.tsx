import TextElement from "@/components/text-element/TextElement";

export function CentersSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container flex flex-col items-center gap-8">
        <TextElement variant="heading" className="text-[#004282]">
          Our Centers
        </TextElement>
        <TextElement
          variant="body"
          className="max-w-2xl text-center text-[#202020]"
        >
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </TextElement>
        <div className="w-full max-w-3xl aspect-[16/9] bg-gray-200 rounded-lg" />
      </div>
    </div>
  );
}
