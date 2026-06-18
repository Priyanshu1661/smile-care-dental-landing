import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Sparkles, 
  Activity, 
  ShieldAlert, 
  Smile, 
  Baby 
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "General Checkup",
      description: "Comprehensive oral exams and digital x-rays to maintain your dental health.",
      icon: Stethoscope
    },
    {
      title: "Teeth Cleaning",
      description: "Professional scaling and polishing for a fresh, plaque-free smile.",
      icon: Sparkles
    },
    {
      title: "Root Canal",
      description: "Painless treatment to save infected teeth and restore comfort.",
      icon: Activity
    },
    {
      title: "Braces/Orthodontics",
      description: "Straighten teeth and correct bites with modern orthodontic solutions.",
      icon: ShieldAlert
    },
    {
      title: "Cosmetic Whitening",
      description: "Safe, effective teeth whitening for a bright, confident smile.",
      icon: Smile
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle, specialized care designed to make kids comfortable.",
      icon: Baby
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            data-testid="text-services-heading"
          >
            Comprehensive Dental Care
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We offer a full range of dental services to keep your family's smiles healthy and bright.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50"
              data-testid={`card-service-${index}`}
            >
              <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
