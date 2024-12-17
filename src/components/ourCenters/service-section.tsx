import { Card } from "@/components/ui/card";
import OurService1 from "@/assets/our-centers/our-service/service-5.png";
import OurService2 from "@/assets/our-centers/our-service/service-3.png";
import OurService3 from "@/assets/our-centers/our-service/service-1.png";
import OurService4 from "@/assets/our-centers/our-service/service-6.png";
import OurService5 from "@/assets/our-centers/our-service/service-7.png";
import OurService6 from "@/assets/our-centers/our-service/service-4.png";
import OurService7 from "@/assets/our-centers/our-service/service-2.png";
import OurService8 from "@/assets/our-centers/our-service/service-8.png";
import TextElement from "../text-element/TextElement";

export function ServiceSection() {
  return (
    <div className="py-12">
            <div className="container">
            <TextElement variant="heading" className="text-center">Services</TextElement>
            <TextElement variant="body" className="text-center py-12">It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
            </TextElement>
            </div>
      <section className="bg-primary ">
        <div className="container py-12">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="grid gap-10">
                    <TextElement variant="titleblog" className="text-white py-2">បន្ទប់កំព្យូទ័រ</TextElement>
                    <TextElement variant="body" className="text-white ">  It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum. 
                    </TextElement>
                        <Card className="bg-gray-200">
                        <img
                        src={OurService1.src}
                        alt="c.t.c. opening ceremony"
                        className="w-full"
                        style={{ objectFit: "cover" }}
                        />
                    </Card>
                </div>
                <div className="grid gap-10">
                    <Card className="bg-gray-200">
                        <img
                        src={OurService2.src}
                        alt="c.t.c. opening ceremony"
                        className="w-full"
                        style={{ objectFit: "cover" }}
                        />
                    </Card>
                    <TextElement variant="body" className="text-white">  It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum. 
                    </TextElement>
                </div>
            </div>  
        </div>
      </section>
      <section className="">
        <div className="container py-12">
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="grid gap-8">
                <TextElement variant="titleblog" className="text-primary py-2">បន្ទប់បណ្ដុះបណ្ដាល</TextElement>
                    <TextElement variant="body" >  It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum. 
                    </TextElement>
                        <Card className="bg-gray-200">
                        <img
                        src={OurService3.src}
                        alt="c.t.c. opening ceremony"
                        className="w-full"
                        style={{ objectFit: "cover" }}
                        />
                    </Card>
                </div>
                <div className="grid gap-8">
                    <Card className="bg-gray-200">
                        <img
                        src={OurService4.src}
                        alt="c.t.c. opening ceremony"
                        className="w-full"
                        style={{ objectFit: "cover" }}
                        />
                    </Card>
                    <TextElement variant="body">  It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum. 
                    </TextElement>
                </div>
            </div>  
        </div>
      </section>
      <section className="bg-primary ">
        <div className="container py-12">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="grid gap-8 ">
                    <TextElement variant="titleblog" className="text-white py-2">សាលាសាធារណៈ</TextElement>
                    <TextElement variant="body" className="text-white ">  It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum. 
                    </TextElement>
                        <Card className="bg-gray-200">
                        <img
                        src={OurService5.src}
                        alt="c.t.c. opening ceremony"
                        className="w-full"
                        style={{ objectFit: "cover" }}
                        />
                    </Card>
                </div>
                <div className="grid gap-8">
                    <Card className="bg-gray-200">
                        <img
                        src={OurService6.src}
                        alt="c.t.c. opening ceremony"
                        className="w-full"
                        style={{ objectFit: "cover" }}
                        />
                    </Card>
                    <TextElement variant="body" className="text-white">  It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum. 
                    </TextElement>
                </div>
            </div>  
        </div>
      </section>
      <section className="">
        <div className="container py-12">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="grid gap-8">
                    <TextElement variant="titleblog" className="text-primary py-2">បញ្ជារប្រៃសណីយ៍</TextElement>
                    <TextElement variant="body" >  It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum. 
                    </TextElement>
                        <Card className="bg-gray-200">
                        <img
                        src={OurService7.src}
                        alt="c.t.c. opening ceremony"
                        className="w-full"
                        style={{ objectFit: "cover" }}
                        />
                    </Card>
                </div>
                <div className="grid gap-8">
                    <Card className="bg-gray-200">
                        <img
                        src={OurService8.src}
                        alt="c.t.c. opening ceremony"
                        className="w-full"
                        style={{ objectFit: "cover" }}
                        />
                    </Card>
                    <TextElement variant="body">  It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum. 
                    </TextElement>
                </div>
            </div>  
        </div>
      </section>
    </div>
  );
}
