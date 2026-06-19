import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import heroBg from "@assets/atikah-akhtar-XJptUS8nbhs-unsplash_1781867070381.jpg";

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      data-testid="section-hero"
    >
      <img
        src={heroBg}
        alt="Modern dental treatment room"
        className="absolute inset-0 w-full h-full object-cover object-center"
        data-testid="img-hero"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-testid="text-hero-headline"
          >
            Your Family's Smile, Our Priority
          </h1>
          <p
            className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            Expert dental care for every member of your family. From routine
            checkups to specialized treatments, we ensure a comfortable and
            painless experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-semibold bg-secondary hover:bg-secondary/85 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 rounded-md"
              data-testid="button-hero-book"
            >
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 rounded-md"
              data-testid="button-hero-call"
            >
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
