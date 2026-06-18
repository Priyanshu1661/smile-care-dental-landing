import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Dr. Profile", href: "#dr-profile" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-md py-3" : "bg-primary py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl" data-testid="link-home-logo">
          <span className="text-2xl">🦷</span>
          <span className="font-heading">Smile Care</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-secondary transition-colors duration-200 font-medium text-sm lg:text-base"
              data-testid={`link-nav-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button 
            asChild 
            variant="secondary" 
            className="hover:-translate-y-0.5 transition-transform duration-200 shadow-sm hover:shadow-md"
            data-testid="button-book-appointment-header"
          >
            <a 
              href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Appointment
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary shadow-lg border-t border-primary/20 flex flex-col py-4 px-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg font-medium py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
              data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            asChild 
            variant="secondary" 
            className="w-full mt-2 h-12 text-lg"
            data-testid="button-book-appointment-mobile"
          >
            <a 
              href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Appointment
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
