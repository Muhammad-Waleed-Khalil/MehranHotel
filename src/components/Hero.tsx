"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showCTA?: boolean;
}

const Hero = ({ title, subtitle, backgroundImage, showCTA = false }: HeroProps) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // Enhanced GSAP animations
    if (typeof window !== "undefined" && bgRef.current) {
      const ctx = gsap.context(() => {
        // Initial load animation
        gsap.fromTo(bgRef.current, 
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
        );

        // Ambient glow animation
        gsap.to(".ambient-glow", {
          scale: 1.2,
          opacity: 0.3,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });

            // Text reveal animation - 60fps optimized
            gsap.fromTo(".hero-text", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" }
            );

            // CTA animation - 60fps optimized (only if CTA exists)
            if (showCTA) {
              gsap.fromTo(".hero-cta", 
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, delay: 0.4, ease: "power2.out" }
              );
            }

            // Scroll indicator animation - 60fps optimized
            gsap.fromTo(".scroll-indicator", 
              { y: 0, opacity: 0 },
              { y: 5, opacity: 1, duration: 0.4, delay: 0.8, ease: "power2.out" }
            );
            gsap.to(".scroll-indicator", {
              y: -3,
              duration: 1.2,
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut"
            });

        setIsLoaded(true);
      });

      return () => ctx.revert();
    }
  }, [showCTA]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background with Parallax */}
      <motion.div
        ref={bgRef}
        style={{ y }}
        className="absolute inset-0 w-full h-[130%]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      </motion.div>

      {/* Enhanced Multi-layer Overlays for Cinematic Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/98 via-navy-deep/85 to-navy-deep/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/75 via-transparent to-gold/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold-metallic/8" />
      
      {/* Enhanced Ambient Glow Effects */}
      <div className="ambient-glow absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold/18 rounded-full blur-3xl" />
      <div className="ambient-glow absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gold-metallic/12 rounded-full blur-3xl" />
      <div className="ambient-glow absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gold-light/10 rounded-full blur-2xl" />
      <div className="ambient-glow absolute bottom-1/2 left-1/5 w-[350px] h-[350px] bg-gold/8 rounded-full blur-3xl" />

      {/* Enhanced Marble Texture Overlay */}
      <div className="absolute inset-0 marble-overlay opacity-25" />
      
      {/* Ambient Lighting */}
      <div className="absolute inset-0 ambient-light" />

      {/* Content with Enhanced Typography */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 text-center max-w-6xl"
      >
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
              <motion.h1 
                className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-luxury-white gold-glow leading-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {title}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-cream mb-12 max-w-4xl mx-auto font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {subtitle}
              </motion.p>

          {showCTA && (
            <motion.div
              className="hero-cta flex gap-6 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                  <Button
                    asChild
                    size="lg"
                    className="glass-premium border-luxury text-gold hover:text-navy-deep font-semibold px-12 py-7 text-lg rounded-full luxury-hover group"
                  >
                    <a href="/contact">
                      <span className="group-hover:scale-105 transition-transform duration-300">
                        Reserve Your Stay
                      </span>
                    </a>
                  </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gold/60 text-gold hover:bg-gold hover:text-navy-deep font-semibold px-12 py-7 text-lg rounded-full luxury-hover glass backdrop-blur-sm"
              >
                <Link to="/contact">
                  <span className="group-hover:scale-105 transition-transform duration-300">
                    Book Now
                  </span>
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
          <motion.div
            className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
        <div className="flex flex-col items-center gap-2 text-gold/70">
          <span className="text-sm font-light tracking-wider uppercase">Scroll</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </motion.div>

      {/* Subtle Border Glow */}
      <div className="absolute inset-0 border border-gold/10 pointer-events-none" />
    </section>
  );
};

export default Hero;
