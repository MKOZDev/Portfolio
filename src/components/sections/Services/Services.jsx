import Wrapper from "@/components/layout/Wrapper";
import SectionH3 from "@/components/ui/SectionH3";
import SectionHeading from "@/components/ui/SectionHeading";
import { servicesItems } from "@/data/services";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="relative py-24 z-2 bg-white max-sm:py-12">
      <Wrapper>
        <SectionHeading
          title="Jak mogę pomóc ?"
          text="Moje kompetencje"
          align="text-center"
        />

        <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {servicesItems.map((item) => (
            <div
              key={item.id}
              className=" bg-gray-50 rounded-3xl p-8 border border-gray-100 group relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(0,229,255,0.15)] hover:border-[rgba(0,229,255,0.3)] hover:-translate-y-4 max-sm:hover:-translate-y-1 hover:scale-102"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue rounded-bl-full opacity-5 -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
              <Image
                className="mb-6"
                src={`/${item.icon}.png`}
                width={60}
                height={60}
                alt=""
                priority
              />
              <SectionH3 text={item.title} />
              <p className="text-sm text-left text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
