"use client";
import Wrapper from "@/components/layout/Wrapper";
import SectionH3 from "@/components/ui/SectionH3";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Slider from "@/components/ui/Slider";
import { projectsItems } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <section className="py-24 max-sm:py-12 overflow-hidden" id="projects">
        <Wrapper className="">
          <SectionHeading
            align="text-left"
            title="Strony internetowe i aplikacje"
            text="Portfolio"
          ></SectionHeading>
          <Slider
            items={projectsItems}
            slidesPerView={2}
            renderItem={(item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full"
              >
                <Image
                  className="rounded-t-xl w-full"
                  src={`/${item.image}`}
                  width={590}
                  height={598}
                  alt=""
                  priority
                />
                <div className="text-center flex flex-col grow p-8 max-sm:p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((techItem, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2.5 py-1 bg-white border border-gray-200 rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <SectionH3 text={item.title} align="text-left"></SectionH3>
                  <p className="text-sm text-secondary text-left mb-4">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-2 mt-auto text-sm mr-auto font-bold group-hover:text-blue transition-colors text-left">
                    Zobacz projekt{" "}
                    <i
                      className="transform group-hover:translate-x-1 transition-transform"
                      data-fa-i2svg=""
                    >
                      <svg
                        className="svg-inline--fa fill-current text-main fa-arrow-right w-3 group-hover:text-blue"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                      </svg>
                    </i>
                  </div>
                </div>
              </a>
            )}
          />
        </Wrapper>
      </section>
    </>
  );
}
