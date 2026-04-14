import Wrapper from "@/components/layout/Wrapper";
import styles from "./Header.module.css";
import { menuItems } from "@/data/menu";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${styles.header}`}
      >
        <Wrapper>
          <div className="flex justify-between items-center h-20">
            <p class="text-xl font-bold tracking-wider grow flex items-center">
              MKOZ<span class="text-blue">Dev</span>.
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
              className="hidden md:flex group text-sm items-center font-medium gap-2 bg-black text-white px-6 py-2.5 ml-12 rounded-full hover:bg-bg-main hover:text-main hover:scale-105  transition-all duration-300 max-sm:w-full max-sm:justify-center"
              style={{
                boxShadow: "0px 10px 15px -3px rgba(0, 212, 255, 0.2)",
              }}
            >
              Współpracujmy
              <ArrowRight
                size={16}
                className="transition-transform duration-300"
              />
            </a>
          </div>
        </Wrapper>
      </header>
    </>
  );
}
