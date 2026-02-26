import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-12 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-7xl font-display font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let’s Build Something <br />
            <span className="text-gradient">Exceptional</span>
          </motion.h2>
          <p className="text-xl text-gray-400 mb-10">Ready to transform your digital product?</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/923404774275"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
            >
              Schedule a Call
            </a>
            <a 
              href="https://www.behance.net/irfanmalik18"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 border border-white/10 rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">Muhammad Irfan Malik</h3>
            <p className="text-gray-500">UI/UX Designer</p>

            <div className="flex items-center gap-4 mt-3 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/mi-dexign/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.png" className="w-6 h-6" alt="" />
              </a>
              <a href="https://www.instagram.com/mi_dexign/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.png" className="w-6 h-6" alt="" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 text-gray-400 text-sm">
            <a href="mailto:irfanmalik0035@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> irfanmalik0035@gmail.com
            </a>
            <a href="https://wa.me/923404774275" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> +92 340 4774275
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Lahore, Pakistan
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 text-gray-600 text-xs">
          © {new Date().getFullYear()} Muhammad Irfan Malik. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
