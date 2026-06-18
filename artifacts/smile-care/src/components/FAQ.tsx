import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What are your clinic timings?",
      answer: "Mon–Sat: 9:00 AM – 8:00 PM, Sunday: 10:00 AM – 2:00 PM"
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we work with all major insurance providers"
    },
    {
      question: "Do I need an appointment or can I walk in?",
      answer: "Appointments preferred; walk-ins welcome for emergencies"
    },
    {
      question: "Is root canal treatment painful?",
      answer: "With modern techniques and local anesthesia, it's virtually painless"
    },
    {
      question: "Do you offer emergency dental care?",
      answer: "Yes, call us for same-day emergency appointments"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
              data-testid="text-faq-heading"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background rounded-2xl p-6 md:p-8 border border-border/50"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-secondary text-lg py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
