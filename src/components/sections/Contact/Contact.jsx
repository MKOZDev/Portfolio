import Wrapper from "@/components/layout/Wrapper";
import ContactForm from "./ContactForm";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section
        className="py-24 bg-main max-sm:py-12 overflow-hidden relative"
        id="contact"
      >
        <Wrapper className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-sm:gap-8">
          <div>
            <h3 className="text-4xl text-white md:text-5xl text-left font-bold tracking-tight mb-8 leading-14 max-sm:leading-none">
              Masz pomysł na stronę, sklep lub aplikację webową?
            </h3>
            <p className="text-white text-xl text-left">
              Skontaktuj się ze mną i stwórzmy nowoczesne rozwiązanie dopasowane
              do Twojego biznesu.
            </p>
            <div className="flex items-center gap-4 mt-12">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Mail className="text-blue w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-secondary">Napisz do mnie</p>
                <a
                  href="mailto:kontakt@mkozdev.com"
                  className="text-lg font-medium text-white hover:text-brand-cyan transition-colors"
                >
                  kontakt@mkozdev.com
                </a>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/MKOZDev"
                target="_blank"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <FaGithub className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/mateusz-koziolek-a1712a333/"
                target="_blank"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <FaLinkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
          <ContactForm></ContactForm>
        </Wrapper>
      </section>
    </>
  );
}
