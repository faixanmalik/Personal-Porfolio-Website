import { motion } from "motion/react";
import { Search, Layout, Monitor, MousePointer, Layers } from "lucide-react";

const services = [
  {
    icon: <Search className="w-8 h-8 text-purple-400" />,
    title: "UX Research & Strategy",
    desc: "User flows, competitor analysis, wireframes, journey mapping"
  },
  {
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    title: "UI Design",
    desc: "Modern, clean, conversion-focused interfaces"
  },
  {
    icon: <Monitor className="w-8 h-8 text-pink-400" />,
    title: "Landing Page Design",
    desc: "High-converting product & SaaS landing pages"
  },
  {
    icon: <MousePointer className="w-8 h-8 text-green-400" />,
    title: "Prototyping",
    desc: "Interactive Figma prototypes for real-user testing"
  },
  {
    icon: <Layers className="w-8 h-8 text-orange-400" />,
    title: "Design Systems",
    desc: "Scalable UI systems for growing products"
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-[#111]">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What I Can Do For Your Product</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Comprehensive design solutions tailored to your business goals.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
