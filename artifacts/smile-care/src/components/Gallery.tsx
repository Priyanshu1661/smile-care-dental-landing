import { motion } from "framer-motion";
import img1 from "../assets/images/gallery-1.png";
import img2 from "../assets/images/gallery-2.png";
import img3 from "../assets/images/gallery-3.png";
import img4 from "../assets/images/gallery-4.png";
import img5 from "../assets/images/gallery-5.png";
import img6 from "../assets/images/gallery-6.png";

export function Gallery() {
  const images = [
    { src: img1, alt: "Bright modern clinic reception" },
    { src: img2, alt: "Clean dental treatment room" },
    { src: img3, alt: "Friendly dentist consultation" },
    { src: img4, alt: "Sterilization and hygiene setup" },
    { src: img5, alt: "Comfortable waiting area" },
    { src: img6, alt: "Children's corner" }
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            data-testid="text-gallery-heading"
          >
            Take a Tour of Our Clinic
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A calm, clean, and modern environment designed for your comfort.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm"
              data-testid={`container-gallery-img-${index}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
