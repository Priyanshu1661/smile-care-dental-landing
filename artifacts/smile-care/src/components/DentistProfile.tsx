import { motion } from "framer-motion";
import dentistImg from "../assets/images/dentist.png";

export function DentistProfile() {
  return (
    <section id="dr-profile" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-background rounded-3xl overflow-hidden shadow-sm border border-border/50">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative h-64 md:h-auto">
              <img 
                src={dentistImg} 
                alt="Dr. Priya Sharma" 
                className="w-full h-full object-cover object-top"
                data-testid="img-dentist-profile"
              />
            </div>
            
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
                  Meet Your Doctor
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid="text-dentist-name">
                  Dr. Priya Sharma
                </h2>
                <p className="text-lg text-secondary font-medium mb-6">
                  MDS – Oral Medicine & Radiology
                </p>
                
                <div className="space-y-2 mb-8">
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    BDS (Mumbai), MDS (Delhi)
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <strong className="text-primary font-semibold">20+ Years Experience</strong>
                  </p>
                </div>
                
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-4xl text-primary/10 font-serif">"</span>
                  <p className="text-lg md:text-xl text-primary/80 italic leading-relaxed relative z-10" data-testid="text-dentist-quote">
                    I believe every patient deserves gentle, <strong className="font-semibold text-primary">Painless Treatment</strong>. I take time to understand your concerns and ensure you leave with a confident smile.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
