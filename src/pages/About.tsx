import { motion } from "framer-motion";
import { Award, Heart, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { pageSEO } from "@/lib/seo";
import reception from "@/assets/reception.jpg";
import mainlobby from "@/assets/mainlobby.jpg";
import thirdfloor from "@/assets/3rdfloor.jpg";

const About = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.hotelmehran.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://www.hotelmehran.com/about"
      }
    ]
  };

  const values = [
    {
      icon: Award,
      title: "Craftsmanship",
      description: "Every detail is carefully curated to ensure the highest standards of luxury and comfort."
    },
    {
      icon: Heart,
      title: "Service Excellence",
      description: "Our dedicated team provides personalized service with warmth and professionalism."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Strategically located in the heart of Peshawar for easy access to the city's attractions."
    }
  ];

  const suites = [
    {
      title: "Luxurious Suite",
      description: "Luxurious Premium Suite with elegant furnishings and marble accents",
      subtitle: "Experience luxury redefined",
      image: reception
    },
    {
      title: "Spacious Suite",
      description: "Spacious Four-Bedroom Family Suite with panoramic city views",
      subtitle: "Experience luxury redefined",
      image: thirdfloor
    },
    {
      title: "Executive Suite",
      description: "Executive Two-Bedroom AC Suite with modern amenities",
      subtitle: "Experience luxury redefined",
      image: mainlobby
    }
  ];

  return (
    <>
      <SEO 
        config={pageSEO.about}
        structuredData={[breadcrumbSchema]}
        preloadImages={[mainlobby, reception, thirdfloor]}
      />

      <Hero
        title="About Mehran Hotel"
        subtitle="Premium Hospitality in Peshawar"
        backgroundImage={mainlobby}
      />

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-luxury-white">
                Experience <span className="text-luxury gold-glow">Luxury Hospitality</span>
              </h2>
              <p className="text-cream-dark text-lg mb-4 leading-relaxed">
                Mehran Hotel offers premium hospitality, located in the vibrant heart of Peshawar, 
                with services tailored to comfort and luxury. Our commitment to excellence ensures 
                every guest experiences the finest in accommodation and service.
              </p>
              <p className="text-cream-dark text-lg leading-relaxed">
                From our elegantly appointed rooms to our world-class dining facilities, every aspect 
                of Mehran Hotel is designed to provide an unforgettable experience. Whether you're 
                visiting for business or pleasure, we're dedicated to making your stay exceptional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <OptimizedImage
                  src={reception}
                  alt="Mehran Hotel Reception - Elegant lobby with luxury furnishings and marble finishes"
                  width={400}
                  height={256}
                  className="rounded-2xl w-full h-64 object-cover"
                  priority={true}
                  loading="eager"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <OptimizedImage
                  src={thirdfloor}
                  alt="Mehran Hotel Interior - Spacious third floor with modern amenities and elegant design"
                  width={400}
                  height={256}
                  className="rounded-2xl w-full h-64 object-cover mt-8"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Suites Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-luxury-white">
              Our <span className="text-luxury gold-glow">Luxury Suites</span>
            </h2>
            <p className="text-cream text-lg max-w-2xl mx-auto">
              Immerse yourself in opulent accommodations designed for the discerning traveler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {suites.map((suite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(230, 184, 77, 0.3)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative glass rounded-2xl overflow-hidden group"
              >
                <div className="relative w-full aspect-[3/2]">
                  <OptimizedImage
                    src={suite.image}
                    alt={`${suite.title} - Elegant room design`}
                    width={400}
                    height={267}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center relative z-10">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-luxury-white-г group-hover:text-gold transition-colors duration-300">
                    {suite.title}
                  </h3>
                  <p className="text-cream-dark text-base mb-3 leading-relaxed">
                    {suite.description}
                  </p>
                  <p className="text-cream font-medium text-sm italic">
                    {suite.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-luxury-white">
              Our <span className="text-luxury gold-glow">Values</span>
            </h2>
            <p className="text-cream text-lg max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional hospitality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-2xl p-8 text-center group hover:border-gold transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-all duration-300">
                  <value.icon className="text-gold group-hover:text-navy-deep" size={32} />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-luxury-white group-hover:text-luxury group-hover:gold-glow transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-cream-dark leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-luxury-white">
              Ready to Experience <span className="text-luxury gold-glow">Luxury?</span>
            </h2>
            <p className="text-cream text-lg mb-8">
              Book your stay at Mehran Hotel today and discover the finest hospitality in Peshawar.
            </p>
            <a
              href="https://www.google.com/maps/place/Mehran+hotel+peshawar(Rs+1600+up+to+5000)/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-light text-navy-deep font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(230,184,77,0.4)] hover:shadow-[0_0_50px_rgba(230,184,77,0.6)]"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;