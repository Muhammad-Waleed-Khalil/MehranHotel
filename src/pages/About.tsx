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
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-black">
                Experience <span className="text-luxury gold-glow">Luxury Hospitality</span>
              </h2>
              <p className="text-navy-dark text-lg mb-4 leading-relaxed">
                Mehran Hotel offers premium hospitality, located in the vibrant heart of Peshawar, 
                with services tailored to comfort and luxury. Our commitment to excellence ensures 
                every guest experiences the finest in accommodation and service.
              </p>
              <p className="text-navy-dark text-lg leading-relaxed">
                From our elegantly appointed rooms to our world-class dining facilities, every aspect 
                of Mehran Hotel is designed to provide an unforgettable experience. Whether you're 
                visiting for business or pleasure, we're dedicated to making your stay exceptional.
              </p>
              
              {/* Urdu Introduction */}
              <div className="mt-8 p-6 glass rounded-2xl border-luxury">
                <p className="text-black text-lg leading-relaxed mb-4 noto-nastaliq-urdu" dir="rtl">
                  اگر آپ پشاور میں ایک پُرسکون، صاف ستھرا اور بجٹ فرینڈلی ہوٹل تلاش کر رہے ہیں تو آپ کی تلاش یہاں ختم ہوتی ہے۔
                </p>
                <p className="text-navy text-base leading-relaxed noto-nastaliq-urdu" dir="rtl">
                  🌟 ہم پیش کرتے ہیں وہ سب کچھ جو آپ کو گھر سے دور اپنے گھر جیسا سکون دے:
                </p>
              </div>
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

      {/* Animated Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black">
              Our <span className="text-luxury gold-glow">Gallery</span>
            </h2>
            <p className="text-navy text-lg max-w-2xl mx-auto">
              Discover the beauty and elegance of Mehran Hotel through our stunning collection
            </p>
          </motion.div>

          {/* Animated Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                src: "/optimized/mainlobby-optimized.jpg",
                alt: "Mehran Hotel Main Lobby - Elegant entrance with luxury furnishings",
                title: "Main Lobby"
              },
              {
                src: "/optimized/reception-optimized.jpg", 
                alt: "Mehran Hotel Reception - Professional service desk with marble finishes",
                title: "Reception Area"
              },
              {
                src: "/optimized/2ndfloorlobby-optimized.jpg",
                alt: "Mehran Hotel Second Floor Lobby - Spacious common area with modern design",
                title: "Second Floor"
              },
              {
                src: "/optimized/3rdfloor-optimized.jpg",
                alt: "Mehran Hotel Third Floor - Contemporary interior with premium amenities",
                title: "Third Floor"
              },
              {
                src: "/optimized/fourbedroom-optimized.jpg",
                alt: "Mehran Hotel Four Bedroom Suite - Spacious family accommodation",
                title: "Family Suite"
              },
              {
                src: "/optimized/premium-optimized.jpg",
                alt: "Mehran Hotel Premium Room - Luxury accommodation with elegant furnishings",
                title: "Premium Room"
              },
              {
                src: "/optimized/twobedAc-optimized.jpg",
                alt: "Mehran Hotel Two Bedroom AC Suite - Modern amenities and comfort",
                title: "AC Suite"
              },
              {
                src: "/optimized/outside-optimized.jpg",
                alt: "Mehran Hotel Exterior - Beautiful building facade and entrance",
                title: "Hotel Exterior"
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                className="group relative overflow-hidden rounded-2xl glass border-luxury"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {image.alt.split(' - ')[1] || 'Luxury accommodation'}
                    </p>
                  </div>
                </div>
                
                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/40 transition-all duration-300 pointer-events-none" />
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black">
              Our <span className="text-luxury gold-glow">Values</span>
            </h2>
            <p className="text-navy text-lg max-w-2xl mx-auto">
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
                  <value.icon className="text-gold font-bold group-hover:text-navy-deep" size={32} />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-black group-hover:text-luxury group-hover:gold-glow transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-navy-dark leading-relaxed">
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-black">
              Ready to Experience <span className="text-luxury gold-glow">Luxury?</span>
            </h2>
            <p className="text-navy text-lg mb-8">
              Book your stay at Mehran Hotel today and discover the finest hospitality in Peshawar.
            </p>
            <a
              href="https://www.google.com/maps/place/Mehran+hotel+peshawar(Rs+1600+up+to+5000)/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-light text-white hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(230,184,77,0.4)] hover:shadow-[0_0_50px_rgba(230,184,77,0.6)]"
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