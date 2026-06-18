import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const stats = [
    { value: "5000+", label: "Patients Treated" },
    { value: "20+", label: "Years Experience" },
    { value: "98%", label: "Happy Patients" },
    { value: "6", label: "Dental Services" }
  ];

  const points = [
    "Advanced Hygiene Standards",
    "Modern Equipment",
    "Comfortable Treatment",
    "Experienced & Caring Staff"
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-3xl p-8 md:p-12 mb-16 shadow-lg"
          data-testid="container-stats"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 font-heading">{stat.value}</div>
                <div className="text-white/80 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
            Why families trust Smile Care
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-background p-6 rounded-2xl border border-border/50"
              >
                <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0" />
                <span className="text-lg font-semibold text-primary">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
