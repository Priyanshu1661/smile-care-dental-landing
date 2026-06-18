import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export function Testimonials() {
  const reviews = [
    {
      name: "Meera Joshi",
      location: "Mumbai",
      text: "Dr. Priya made my root canal completely painless. Highly recommend!"
    },
    {
      name: "Rajesh Nair",
      location: "Pune",
      text: "The best dental clinic for kids. My daughter actually looks forward to visits!"
    },
    {
      name: "Sunita Kaur",
      location: "Thane",
      text: "Clean, modern, and professional. Transparent pricing, no hidden costs."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            data-testid="text-testimonials-heading"
          >
            What Our Patients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Real stories from local families who trust us with their smiles.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-8 italic">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-primary text-lg">{review.name}</h4>
                <p className="text-secondary text-sm font-medium">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
