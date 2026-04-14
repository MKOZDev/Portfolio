"use client";
import { useState } from "react";
import Wrapper from "@/components/layout/Wrapper";
import styles from "./Header.module.css";
import { menuItems } from "@/data/menu";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${styles.header}`}
    >
      <Wrapper>
        <div className="flex justify-between items-center h-20 max-sm:h-13">
          <p className="text-xl font-bold tracking-wider flex items-center">
            MKOZ<span className="text-blue">Dev</span>.
          </p>

          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                className="text-sm font-medium text-secondary hover:text-blue transition-all hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:flex group text-sm items-center font-medium gap-2 bg-black text-white px-6 py-2.5 ml-12 rounded-full hover:bg-bg-main hover:text-main hover:scale-105 transition-all duration-300"
          >
            Współpracujmy
            <ArrowRight size={16} />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 z-[60]"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </Wrapper>

      <div
        className={`fixed top-0 left-0 w-full md:hidden h-screen bg-white flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            onClick={() => setOpen(false)}
            className={`text-2xl font-semibold transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className={`mt-6 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDelay: `${menuItems.length * 100}ms`,
          }}
        >
          Współpracujmy <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}
