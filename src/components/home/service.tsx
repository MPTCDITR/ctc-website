import TextElement from "@/components/text-element/TextElement";
import Service from "@/assets/service/service.svg";

const serviceItems = [
  {
    src: Service.src,
    alt: "c.t.c. post office view",
    title: "បន្ទប់កំព្យូទ័រ",
    description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    src: Service.src,
    alt: "c.t.c. post office view",
    title: "បន្ទប់បណ្ដុះបណ្ដាល",
    description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    src: Service.src,
    alt: "c.t.c. post office view",
    title: "សាលាសាធារណៈ",
    description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    src: Service.src,
    alt: "c.t.c. post office view",
    title: "បញ្ជារប្រៃសណីយ៍",
    description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
];

export function ServiceSection() {
  return (
    <div className="container py-12">
      <TextElement variant="heading" className="text-primary py-4">
        Services
      </TextElement>
      <TextElement variant="body" className="w-full lg:w-1/2">
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      </TextElement>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 py-12">
        {serviceItems.map((item, index) => (
          <div key={index} className="grid justify-center p-4 rounded-lg hover:bg-slate-100">
            <div className="w-full rounded-lg grid justify-center">
              <img
                src={item.src}
                alt={item.alt}
                className="size-44"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4">
                <TextElement variant="titleblog" className="text-center text-primary py-4">
                    {item.title}
                </TextElement>
                <TextElement variant="small" className="text-center py-2">
                    {item.description}
                </TextElement>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
