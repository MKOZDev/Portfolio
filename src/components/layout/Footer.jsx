import Wrapper from "@/components/layout/Wrapper";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer
        className="bg-main border-t border-secondary py-8 text-white"
        id="contact"
      >
        <Wrapper className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
            <div>
              <span className="text-xl font-bold tracking-wider">
                MKOZ<span className="text-blue">Dev</span>.
              </span>
            </div>

            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} MKOZDev. Wszelkie prawa zastrzeżone.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/MKOZDev"
                target="_blank"
                className="text-gray-500 hover:text-white "
              >
                <FaGithub className="w-4 h-4 text-secondary hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/mateusz-koziolek-a1712a333/"
                target="_blank"
                className="text-gray-500 hover:text-white "
              >
                <FaLinkedin className="w-4 h-4 text-secondary hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </Wrapper>
      </footer>
    </>
  );
}
