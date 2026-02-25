import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Landing Page",
    link: "https://www.behance.net/gallery/219566751/AI-Chatbot-Landing-Page",
    category: "Landing Page",
    image: "/pic1.png",
    size: "large"
  },
  {
    title: "Barber Shop Website",
    link: "https://www.behance.net/gallery/240008887/A-Rough-Concept-to-Final-UI-Barbershop-Website-Design",
    category: "Landing Page",
    image: "/pic2.png",
    size: "small"
  },
  {
    title: "RealEstate Website",
    link: "https://www.behance.net/gallery/242832663/Real-Estate-Website-Design",
    category: "Landing Page",
    image: "/pic3.png",
    size: "small"
  },
  {
    title: "Saas Landing Page",
    link: "https://www.behance.net/gallery/225152175/SaaS-Product-landing-page",
    category: "Landing Page",
    image: "/pic4.png",
    size: "small"
  },
  {
    title: "Fitness Coach Website",
    link: "https://www.behance.net/gallery/223150633/FIT30-Fitness-Coach-Landing-Page",
    category: "Lading Page",
    image: "/pic5.png",
    size: "small"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
            <p className="text-gray-400 max-w-md">A curated collection of my UI/UX and web design projects. Click any project to explore on Behance.</p>
          </div>
          <a 
            href="https://www.behance.net/irfanmalik18" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-2"
          >
            View Behance <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.a
              href={project.link || "https://www.behance.net/irfanmalik18"}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 ${
                project.size === 'large' ? 'md:row-span-2' : ''
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-purple-400 text-sm font-mono mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                <h3 className="text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="flex justify-center pt-10 flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <a
            href="https://www.behance.net/irfanmalik18"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            View More
          </a>
        </motion.div>

        <div className="mt-5 text-center">
          <p className="text-sm text-gray-500 font-mono">
            “Every design decision is driven by research, clarity, and measurable results.”
          </p>
        </div>
      </div>
    </section>
  );
}
