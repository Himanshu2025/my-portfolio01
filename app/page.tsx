import Hero from "./components/Hero";
import About from "./sections/About";
import Projects from "./components/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
