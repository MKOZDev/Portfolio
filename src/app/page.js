import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import Main from "@/components/layout/Main";
import Contact from "@/components/sections/Contact/Contact";
import Experience from "@/components/sections/Experience/Experience";
import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";
import Services from "@/components/sections/Services/Services";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Main>
        <Hero></Hero>
        <Services></Services>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </Main>
      <Footer></Footer>
    </>
  );
}
