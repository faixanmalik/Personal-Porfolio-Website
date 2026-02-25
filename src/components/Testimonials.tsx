import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Irfan transformed our vague ideas into a stunning, high-converting product. His attention to detail is unmatched.",
    author: "Ayesha Khan",
    role: "Founder, TechStart"
  },
  {
    text: "The best UI designer we've worked with. He understands not just design, but business goals.",
    author: "Bilal Ahmed",
    role: "Product Manager, FlowApp"
  },
  {
    text: "Incredible turnaround time and quality. The new design system saved our dev team hundreds of hours.",
    author: "Zainab Malik",
    role: "CTO, EduLearn"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 relative"
            >
              <Quote className="w-10 h-10 text-purple-500/20 mb-6" />
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">"{item.text}"</p>
              <div>
                <h4 className="font-bold text-white">{item.author}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
