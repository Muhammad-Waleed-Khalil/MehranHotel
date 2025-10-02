import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import OptimizedImage from "./OptimizedImage";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 marble-overlay opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-metallic/5 rounded-full blur-3xl" />
      
      {/* Top Border with Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <OptimizedImage 
                  src="/logo.png" 
                  alt="Mehran Hotel" 
                  width={64}
                  height={64}
                  className="h-16 w-auto" 
                  priority={true}
                  loading="eager"
                  sizes="64px"
                />
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg opacity-50" />
              </div>
              <span className="font-serif text-3xl font-bold text-luxury-white gold-glow">
                Mehran Hotel
              </span>
            </div>
            <p className="text-cream-dark mb-6 leading-relaxed text-lg max-w-md">
              Experience unparalleled luxury and sophistication in the heart of Peshawar. 
              Where every detail is crafted to perfection for the discerning traveler.
            </p>
            <SocialLinks />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-gold gold-glow mb-6">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-cream-dark hover:text-gold transition-all duration-200 group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold/0 group-hover:bg-gold rounded-full transition-all duration-200" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-gold gold-glow mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <motion.div 
                className="flex items-start gap-4 text-cream-dark group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
              >
                <MapPin className="text-gold mt-1 flex-shrink-0 group-hover:text-gold-light transition-colors" size={20} />
                <span className="leading-relaxed">
                  Cinema Road, Kabley Bazar<br />
                  Peshawar, Pakistan
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 text-cream-dark group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
              >
                <Phone className="text-gold flex-shrink-0 group-hover:text-gold-light transition-colors" size={20} />
                <div>
                  <span className="font-medium">+92-21-1234567</span>
                  <p className="text-xs italic mt-1 text-muted-foreground">
                    *Please verify local Peshawar number
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 text-cream-dark group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
              >
                <Mail className="text-gold flex-shrink-0 group-hover:text-gold-light transition-colors" size={20} />
                <a 
                  href="mailto:info@hotelmehran.com" 
                  className="hover:text-gold transition-colors font-medium"
                >
                  info@hotelmehran.com
                </a>
              </motion.div>
              
              <motion.div 
                className="mt-4 p-4 glass rounded-2xl border-luxury"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.15 }}
              >
                <div className="text-gold gold-glow font-semibold text-xl">
                  Rs 1,600 – 5,000
                </div>
                <div className="text-cream-dark text-sm mt-1">
                  Starting rates per night
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Mehran Hotel. All rights reserved.
            </p>
            
            {/* Developer Credit */}
            <motion.div
              className="flex items-center gap-2 text-muted-foreground text-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span>Developed by</span>
              <a 
                href="mailto:mwaleedkhalil@gmail.com"
                className="text-gold hover:text-gold-light transition-colors font-medium hover:underline"
              >
                Muhammad Waleed Khalil - 0399648331
              </a>
            </motion.div>
          </div>
          
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="glass-strong p-3 rounded-full border-luxury text-gold hover:text-navy-deep transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:scale-105 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
