import { motion } from "framer-motion";
import { MapPin, Phone, Mail, DollarSign } from "lucide-react";
import Hero from "@/components/Hero";
import MapEmbed from "@/components/MapEmbed";
import SocialLinks from "@/components/SocialLinks";
import SEO from "@/components/SEO";
import { pageSEO } from "@/lib/seo";
import reception from "@/assets/reception.jpg";

const Contact = () => {
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
        "name": "Contact",
        "item": "https://www.hotelmehran.com/contact"
      }
    ]
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Cinema Road, Kabley Bazar, Peshawar, Pakistan",
      link: "https://www.google.com/maps/place/Mehran+hotel+peshawar(Rs+1600+up+to+5000)/"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+92-21-1234567",
      link: "tel:+922112345467"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@hotelmehran.com",
      link: "mailto:info@hotelmehran.com"
    },
    {
      icon: DollarSign,
      title: "Price Range",
      content: "Rs 1600 – 5000",
      link: null
    }
  ];

  return (
    <>
      <SEO 
        config={pageSEO.contact}
        structuredData={[breadcrumbSchema]}
      />

      <Hero
        title="Contact Us"
        subtitle="We're Here to Help"
        backgroundImage={reception}
      />

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="font-serif text-4xl font-bold mb-8 text-luxury-white">
                Get in <span className="text-luxury gold-glow">Touch</span>
              </h2>
              <p className="text-cream text-lg mb-8">
                Have questions or ready to book? We're here to assist you with all your needs.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="glass rounded-xl p-6 hover:border-gold transition-all duration-200 luxury-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-gold" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gold mb-2">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-cream-dark hover:text-gold transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gold gold-glow font-semibold">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold text-gold mb-4">Follow Us</h3>
                <SocialLinks />
              </div>
            </motion.div>

            {/* Contact Form */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="font-serif text-2xl font-bold mb-6 text-luxury-white">
                Send us a <span className="text-luxury gold-glow">Message</span>
              </h3>
              <ContactForm />
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold mb-4 text-luxury-white">
              Find <span className="text-luxury gold-glow">Us</span>
            </h2>
            <p className="text-cream text-lg">
              Located in the heart of Peshawar
            </p>
            <p className="text-cream-dark mt-2">
              <span className="text-gold gold-glow font-semibold">Coordinates:</span> 34.0151°N, 71.5805°E
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MapEmbed />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;