import { motion } from "motion/react";

const timeline = [
  {
    year: "2023–Present",
    role: "Self-Initiated Web Design Projects",
    desc: "Focusing on UI/UX principles, modern web aesthetics, and responsive design."
  },
  {
    year: "2023–Present",
    role: "Graphic Designer & Video Editor",
    company: "RISE School of Accountancy",
    desc: "Creating visual content, branding materials, and video edits for educational marketing."
  }
];

export default function About() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              From Visual Design to <br />
              <span className="text-purple-400">UX Strategy</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I started my journey as a graphic designer, mastering visual storytelling and brand communication. 
                Over time, I transitioned into UI/UX design — focusing on solving real user problems through research, 
                wireframing, prototyping, and responsive interface design.
              </p>
              <p>
                With 3+ years of experience, I combine visual aesthetics with usability principles to create 
                intuitive, high-converting digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative border-l border-white/10 pl-8 space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <span className="absolute -left-[39px] top-1 w-5 h-5 bg-[#0f0f0f] border border-purple-500 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                </span>
                <span className="text-sm font-mono text-purple-400 mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                {item.company && <p className="text-sm text-gray-500 mb-2">{item.company}</p>}
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
