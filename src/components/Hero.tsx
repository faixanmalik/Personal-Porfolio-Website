import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Gradients */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm md:text-base font-mono text-purple-400 tracking-widest uppercase mb-4">
              Muhammad Irfan Malik
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6">
              Designing Digital <br />
              <span className="text-gradient">Experiences</span> That Convert.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              UI/UX Designer with 3+ years of experience crafting user-focused digital products that drive engagement and business growth.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <a
              href="https://www.behance.net/irfanmalik18"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Book a Discovery Call
            </a>
          </motion.div>
        </div>

        {/* Right Content - Portrait */}
        <motion.div
          className="relative z-10 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ y: y2 }}
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-[2rem] blur-2xl opacity-40 animate-pulse" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-gray-900">
              <img 
                src="/irfan-malik.png" 
                alt="Muhammad Irfan Shahid" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 rounded-xl">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Current Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-sm font-medium">Available for new projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        style={{ opacity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
