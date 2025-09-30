"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Glass effect on scroll
      setScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? "glass-premium shadow-elegant py-4 border-b border-gold/20" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo with Enhanced Styling */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Mehran Hotel Logo" 
                  className="h-16 w-auto transition-all duration-500 ease-out group-hover:scale-110 rounded-lg" 
                />
                <div className="absolute inset-0 bg-gold/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
              </div>
              <span className="font-serif text-3xl font-bold text-navy-deep group-hover:text-gold transition-all duration-500 ease-out">
                Mehran Hotel
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Enhanced Styling */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  to={link.path}
                  className={`relative font-medium transition-all duration-400 ease-out group uppercase tracking-wider text-sm ${
                    location.pathname === link.path
                      ? "text-gold gold-glow"
                      : "text-navy-deep hover:text-gold"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Hover Effect */}
                  <motion.span
                        className="absolute -bottom-2 left-0 h-0.5 bg-gold transition-all duration-400 ease-out"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    style={{
                      width: location.pathname === link.path ? "100%" : "0%"
                    }}
                  />
                  
                  {/* Background Glow on Hover */}
                      <div className="absolute inset-0 bg-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out -m-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button with Enhanced Styling */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden glass-strong p-3 rounded-full border-luxury text-gold hover:text-navy-deep transition-all duration-500 ease-out group"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation with Enhanced Styling */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden mt-6 overflow-hidden"
            >
              <div className="glass-strong rounded-3xl p-6 border-luxury">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block font-medium transition-all duration-500 ease-out py-3 px-4 rounded-xl uppercase tracking-wider text-sm group ${
                          location.pathname === link.path
                            ? "text-gold gold-glow bg-gold/10"
                            : "text-navy-deep hover:text-gold hover:bg-gold/5"
                        }`}
                      >
                        <span className="relative z-10">{link.name}</span>
                            <div className="absolute inset-0 bg-gold/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle Border Glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-all duration-700 ease-out" />
    </motion.nav>
  );
};

export default Navbar;
