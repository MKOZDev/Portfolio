"use client";
import { ArrowDown } from "lucide-react";
import { FaReact, FaJs } from "react-icons/fa";
import Image from "next/image";
import styles from "./Hero.module.css";
import Wrapper from "@/components/layout/Wrapper";
import SkillCard from "@/components/ui/SkillCard";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}
export default function Hero() {
  const ref = useRef(null);
  const isSmall = useMediaQuery("(max-width: 380px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, isSmall ? 0 : 600]);
  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className={`${styles.hero} py-64 flex inline-center relative overflow-hidden min-h-[90vh] max-sm:py-0 max-sm:min-h-screen`}
    >
      <div className="absolute pointer-events-none top-0 right-0 w-96 h-96 bg-bg-main/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob section-fade visible"></div>
      <div className="absolute pointer-events-none bottom-0 left-0 w-96 h-96 bg-bg-main/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob section-fade visible"></div>
      <Wrapper className="flex items-center justify-between gap-12">
        <div className="max-w-xl max-xl:max-w-[50%] max-lg:max-w-full">
          <h1 className="text-6xl mb-6 text-main font-bold max-sm:text-4xl max-lg:text-center">
            Full Stack Developer tworzący <span>strony</span>{" "}
            <span className="text-secondary font-normal">Internetowe</span>
          </h1>
          <p className="text-secondary mb-6 max-lg:text-center">
            Jestem Full Stack Developerem specjalizującym się w React,
            JavaScript oraz WordPress. Tworzę szybkie, responsywne i
            zoptymalizowane strony internetowe oraz aplikacje webowe, które
            realnie zwiększają sprzedaż i konwersję.
          </p>
          <div className="flex gap-4 flex-wrap max-lg:justify-center">
            <a
              href="#projects"
              className="flex group items-center font-medium gap-2 bg-black text-white px-6 py-4 rounded-full hover:bg-bg-main hover:text-main hover:scale-105  transition-all duration-300 max-sm:w-full max-sm:justify-center"
              style={{
                boxShadow: "0px 10px 15px -3px rgba(0, 212, 255, 0.2)",
              }}
            >
              Zobacz projekty
              <ArrowDown
                size={16}
                className="group-hover:translate-y-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#contact"
              className="flex bg-white text-black font-medium px-6 py-4 rounded-full border border-bg-secondary  hover:border-main hover:scale-105 transition-all duration-300 max-sm:w-full max-sm:justify-center"
            >
              Kontakt
            </a>
          </div>
        </div>
        <div className="relative max-xl:max-w-[50%] max-lg:hidden">
          <Image
            className="rounded-3xl shadow-[0_35px_50px_5px_rgba(0,0,0,0.25)]"
            src="/hero-img.png"
            width={590}
            height={598}
            alt=""
            priority
          />
          <SkillCard
            icon={FaReact}
            width="w-40"
            color="text-blue"
            iconBg="bg-[#DBEAFE]"
            label="Framework"
            title="React.js"
            positionClasses="top-10 right-10"
          ></SkillCard>
          <SkillCard
            icon={FaJs}
            width="w-55"
            color="text-[#EAB308]"
            iconBg="bg-[#FEF9C3]"
            label="Expertise"
            title="JavaScript / ES6+"
            positionClasses="bottom-10 left-10"
            delay="0.5s"
          ></SkillCard>
        </div>
      </Wrapper>
    </motion.section>
  );
}
