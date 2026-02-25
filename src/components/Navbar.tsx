import { motion } from "motion/react";
import { useState, useEffect, ReactNode } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-display font-bold tracking-tight">
          IRFAN MALIK<span className="text-purple-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#portfolio">Work</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <a
            href="#contact"
            className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  );
}
