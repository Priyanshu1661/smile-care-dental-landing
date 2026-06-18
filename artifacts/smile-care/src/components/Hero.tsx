import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import heroImg from "../assets/images/hero.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6" data-testid="text-hero-headline">
              Your Family's Trusted Smile Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-subheadline">
              Gentle, modern dentistry for every age — from your child's first visit to your perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="h-14 px-8 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 bg-secondary hover:bg-secondary/90 text-white"
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
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-base border-secondary text-secondary hover:bg-secondary/10 hover:-translate-y-0.5 transition-all duration-200"
                data-testid="button-hero-call"
              >
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img 
              src={heroImg} 
              alt="Bright, welcoming dental clinic reception" 
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3] md:aspect-auto"
              data-testid="img-hero"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
