import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import WhyMe from "./components/WhyMe";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#0f0f0f] min-h-screen relative selection:bg-purple-500/30">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar />
      
      <Hero />
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <Portfolio />
      <Tools />
      <WhyMe />
      <Testimonials />
      <Footer />
    </main>
  );
}
