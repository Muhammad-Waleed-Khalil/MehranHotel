import { motion } from "framer-motion";
import { Hotel, Utensils, Users, Clock, Car } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PremiumRoomsSection from "@/components/PremiumRoomsSection";
import SEO from "@/components/SEO";
import { pageSEO } from "@/lib/seo";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import premium from "@/assets/premium.jpg";
import fourbedroom from "@/assets/fourbedroom.jpg";
import twobedAc from "@/assets/twobedAc.jpg";
import secondfloor from "@/assets/2ndfloorlobby.jpg";

const Services = () => {

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.hotelmehran.com/" },
    { name: "Services", url: "https://www.hotelmehran.com/services" }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "What are your check-in and check-out times?",
      answer: "Check-in is available from 2:00 PM and check-out is until 12:00 PM. Early check-in and late check-out may be arranged based on availability."
    },
    {
      question: "Do you offer parking facilities?",
      answer: "Yes, we provide complimentary parking for all our guests."
    },
    {
      question: "Is Wi-Fi available?",
      answer: "Yes, high-speed Wi-Fi is available throughout the hotel premises for all guests."
    },
    {
      question: "Do you provide airport transfer services?",
      answer: "Yes, we offer convenient airport pick-up and drop-off services for our guests. Please contact us in advance to arrange this service."
    },
    {
      question: "What dining options are available?",
      answer: "We have a fine dining restaurant that serves authentic local and international cuisine. Room service is also available 24/7."
    },
    {
      question: "Are there any special offers or packages?",
      answer: "We frequently offer special packages and seasonal promotions. Please contact us or check our website for current offers."
    }
  ]);

  const services = [
    {
      icon: Hotel,
      title: "Deluxe Rooms & Suites",
      description: "Elegantly furnished rooms with modern amenities, comfortable bedding, and stunning views. Choose from our range of deluxe rooms and premium suites.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Utensils,
      title: "Fine Dining Restaurant",
      description: "Experience exquisite cuisine at our in-house restaurant. Our chefs prepare authentic local and international dishes using the finest ingredients.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Users,
      title: "Event & Conference Halls",
      description: "State-of-the-art facilities for weddings, conferences, and corporate events. Our spacious halls can accommodate gatherings of all sizes.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      icon: Clock,
      title: "24/7 Room Service",
      description: "Round-the-clock room service ensures your needs are met at any hour. From meals to amenities, we're always here to serve you.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      icon: Car,
      title: "Airport Pick & Drop",
      description: "Convenient airport transfer services for a hassle-free journey. Our professional drivers ensure safe and comfortable transportation.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <>
      <SEO 
        config={pageSEO.services}
        structuredData={[breadcrumbSchema, faqSchema]}
      />

      <Hero
        title="Our Services"
        subtitle="Premium Amenities for Your Comfort"
        backgroundImage={premium}
      />

      {/* Premium Rooms Section */}
      <PremiumRoomsSection />

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black">
              What We <span className="text-luxury gold-glow">Offer</span>
            </h2>
            <p className="text-navy text-lg max-w-2xl mx-auto">
              Comprehensive services designed to make your stay unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Urdu Facilities Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <div className="glass-premium rounded-3xl p-8 border-luxury">
              <h3 className="font-serif text-2xl font-bold text-black mb-6 text-center noto-nastaliq-urdu" dir="rtl">
                🌟 ہماری بہترین سہولیات:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-black text-lg leading-relaxed noto-nastaliq-urdu" dir="rtl">
                    🛏️ کشادہ، صاف ستھرے اور آرام دہ کمرے
                  </p>
                  <p className="text-black text-lg leading-relaxed noto-nastaliq-urdu" dir="rtl">
                    ❄️ AC اور Non-AC رومز – آپ کی ضرورت کے مطابق
                  </p>
                  <p className="text-black text-lg leading-relaxed noto-nastaliq-urdu" dir="rtl">
                    💰 انتہائی مناسب اور بجٹ کے مطابق کرائے
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-black text-lg leading-relaxed noto-nastaliq-urdu" dir="rtl">
                    📶 24/7 روم سروس اور ہائی سپیڈ WiFi
                  </p>
                  <p className="text-black text-lg leading-relaxed noto-nastaliq-urdu" dir="rtl">
                    🔒 مکمل سیکیورٹی اور خاندانی ماحول
                  </p>
                  <p className="text-black text-lg leading-relaxed noto-nastaliq-urdu" dir="rtl">
                    🎉 سیاحوں کے لیے خصوصی سہولیات
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black">
              Frequently Asked <span className="text-luxury gold-glow">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="font-serif text-xl font-semibold mb-3 text-gold font-bold gold-glow">
                  {faq.name}
                </h3>
                <p className="text-navy-dark leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Range Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-black">
              Affordable <span className="text-luxury gold-glow">Luxury</span>
            </h2>
            <p className="text-navy text-lg mb-6">
              Experience premium hospitality at competitive rates
            </p>
            <div className="text-5xl font-bold text-luxury gold-glow mb-8">
              Rs 1600 – 5000
            </div>
            <a
              href="https://www.google.com/maps/place/Mehran+hotel+peshawar(Rs+1600+up+to+5000)/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(230,184,77,0.4)] hover:shadow-[0_0_50px_rgba(230,184,77,0.6)]"
            >
              Book Your Stay
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
