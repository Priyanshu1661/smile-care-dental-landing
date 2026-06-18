import { motion } from "framer-motion";
import aboutImg from "../assets/images/about.png";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={aboutImg} 
              alt="Modern dental clinic interior" 
              className="rounded-2xl shadow-lg w-full object-cover aspect-square md:aspect-[4/3]"
              data-testid="img-about"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-testid="text-about-heading">
              A gentle approach to your family's dental health
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground" data-testid="text-about-content">
              <p>
                At Smile Care, we believe that visiting the dentist shouldn't be stressful. We've built our practice around <strong className="text-primary font-semibold">patient-first care</strong> and <strong className="text-primary font-semibold">gentle treatments</strong>.
              </p>
              <p>
                Equipped with modern technology and a deeply compassionate approach, our team has been trusted by local families for over <strong className="text-primary font-semibold">20+ Years</strong>. From routine cleanings to complex procedures, your comfort and well-being are always our highest priority.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
