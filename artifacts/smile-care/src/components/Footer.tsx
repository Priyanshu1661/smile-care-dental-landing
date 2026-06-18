import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Clinic Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-heading flex items-center gap-2">
              <span>🦷</span> Smile Care
            </h3>
            <div className="space-y-4 text-white/80">
              <p>123 Dental Street,<br />Andheri West, Mumbai – 400053</p>
              <p className="font-medium text-white text-lg mt-4">+91 98765 43210</p>
              <p>Mon–Sat: 9AM–8PM<br />Sun: 10AM–2PM</p>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-200" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-200" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-200" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col items-start lg:items-center">
            <div className="w-full lg:w-auto">
              <h4 className="text-xl font-bold mb-6 font-heading">Ready to smile?</h4>
              <p className="text-white/80 mb-6">Book your appointment today and take the first step towards perfect dental health.</p>
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 bg-secondary hover:bg-secondary/90 text-white border-0"
                data-testid="button-footer-book"
              >
                <a 
                  href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book Appointment via WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-1 h-64 md:h-full min-h-[250px] rounded-2xl overflow-hidden shadow-md">
            <iframe 
              src="https://maps.google.com/maps?q=Mumbai+dental+clinic&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; 2025 Smile Care Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
