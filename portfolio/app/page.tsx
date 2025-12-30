import Image from "next/image";
import Header from "./components/Heder/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Service/Services";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <>
    <Header />
   <Hero /> 
    <About />
    <Services />
    <Skills />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
</>
  );
}
