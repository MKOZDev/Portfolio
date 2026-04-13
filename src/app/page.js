import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact/Contact";
import Experience from "@/components/sections/Experience/Experience";
import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";
import Services from "@/components/sections/Services/Services";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
