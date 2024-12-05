import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <div className="bg-slate-100">
      <div className="container grid md:grid-cols-2 grid-cols-1 gap-12 py-16 h-100">
        <div>
          <h2 className="text-4xl font-bold text-[#004282]">
            About Community Tech Center
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-lg text-[#202020]">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <Button
            variant="link"
            className="w-fit text-[#F58220] hover:text-[#F58220]/90"
          >
            About Us →
          </Button>
        </div>
      </div>
    </div>
  );
}
