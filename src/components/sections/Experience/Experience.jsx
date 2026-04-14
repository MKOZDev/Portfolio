import Wrapper from "@/components/layout/Wrapper";
import SectionH3 from "@/components/ui/SectionH3";
import SectionHeading from "@/components/ui/SectionHeading";
import { experienceItems } from "@/data/experience";

export default function Experience({}) {
  const allTech = experienceItems.flatMap((item) => item.tech);
  const uniqueTech = [...new Set(allTech)];
  return (
    <>
      <section id="experience" className="py-24 bg-bg-gray max-sm:py-12">
        <Wrapper className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center max-sm:gap-8">
          <div>
            <SectionHeading
              title="Doświadczenie jako Full Stack Developer"
              text="Kariera"
              align="text-left"
            ></SectionHeading>
            <p className="text-secondary text-base text-left mb-4">
              Od ponad 5 lat tworzę strony internetowe i aplikacje webowe dla
              firm, startupów oraz e-commerce. Specjalizuję się w React,
              JavaScript (ES6+), PHP oraz WordPress, dostarczając wydajne i
              skalowalne rozwiązania.
            </p>
            <p className="text-secondary text-base text-left">
              Moje projekty są zoptymalizowane pod SEO, Core Web Vitals oraz
              szybkość ładowania, co przekłada się na lepszą widoczność w Google
              i większy ruch na stronie.
            </p>
            <div className="flex gap-8 mb-10 mt-8 max-sm:my-8">
              <div>
                <p className="text-4xl font-bold text-brand-dark mb-1">5+</p>
                <p className="text-sm text-gray-500">Lat doświadczenia</p>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div>
                <p className="text-4xl font-bold text-brand-dark mb-1">50+</p>
                <p className="text-sm text-gray-500">
                  Zrealizowanych projektów
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {uniqueTech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-main"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="relative pl-8 border-l border-gray-200 space-y-10">
            {experienceItems.map((item, index) => {
              const isFirst = index === 0;
              return (
                <div key={item.id} className="relative">
                  <div
                    className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-gray-50 ${
                      isFirst ? "bg-blue" : "bg-secondary"
                    }`}
                  />
                  <p
                    className={`text-sm font-bold mb-1 ${isFirst ? "text-blue" : "text-secondary"}`}
                  >
                    {item.year}
                  </p>
                  <SectionH3 text={item.role} />
                  <p className={`text-sm text-secondary}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
