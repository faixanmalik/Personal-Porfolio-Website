import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Strong visual foundation",
  "UX-first thinking",
  "Detail-oriented design systems",
  "Clear communication",
  "Fast turnaround"
];

export default function WhyMe() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Work With Me?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5"
            >
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="font-medium">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
