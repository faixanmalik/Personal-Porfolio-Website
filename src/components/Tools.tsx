import { motion } from "motion/react";

const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" className="w-8 h-8 md:w-10 md:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C13.7533 28.5 9.5 32.7533 9.5 38C9.5 43.2467 13.7533 47.5 19 47.5V28.5Z" fill="#0ACF83"/>
    <path d="M0 47.5C0 52.7467 4.25329 57 9.5 57C14.7467 57 19 52.7467 19 47.5H0Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#1ABCFE"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

const AdobeLogo = ({ letters, bg, text }: { letters: string, bg: string, text: string }) => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="100" height="100" rx="20" fill={bg} />
    <text x="50" y="65" fontSize="55" fontWeight="bold" fontFamily="Arial, sans-serif" fill={text} textAnchor="middle">{letters}</text>
  </svg>
);

const tools = [
  { 
    name: "Figma", 
    icon: <FigmaLogo /> 
  },
  { 
    name: "Photoshop", 
    icon: <AdobeLogo letters="Ps" bg="#001E36" text="#31A8FF" /> 
  },
  { 
    name: "Illustrator", 
    icon: <AdobeLogo letters="Ai" bg="#330000" text="#FF9A00" /> 
  },
  { 
    name: "Premiere Pro", 
    icon: <AdobeLogo letters="Pr" bg="#00005B" text="#D8A5FF" /> 
  },
  { 
    name: "After Effects", 
    icon: <AdobeLogo letters="Ae" bg="#00005B" text="#D291FF" /> 
  }
];

export default function Tools() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-12">My Creative Toolkit</h3>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                {tool.icon}
              </div>
              <span className="text-sm text-gray-500 group-hover:text-white transition-colors">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
