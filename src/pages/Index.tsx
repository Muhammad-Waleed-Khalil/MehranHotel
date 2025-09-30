import { useEffect } from "react";
import { motion } from "framer-motion";
import { Hotel, Utensils, Users, Clock, Car } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import RoomCard from "@/components/RoomCard";
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { pageSEO } from "@/lib/seo";
import { generateHotelSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";
import mainlobby from "@/assets/mainlobby.jpg";
import outside from "@/assets/outside.jpg";
import premium from "@/assets/premium.jpg";
import fourbedroom from "@/assets/fourbedroom.jpg";
import twobedAc from "@/assets/twobedAc.jpg";

const Index = () => {

  const hotelSchema = generateHotelSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.hotelmehran.com/" }
  ]);
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  const highlights = [
    {
      icon: Hotel,
      title: "Ultra-Luxury Suites",
      description: "Exquisitely appointed accommodations with marble finishes, premium furnishings, and panoramic city views for the ultimate luxury experience."
    },
    {
      icon: Utensils,
      title: "World-Class Dining",
      description: "Indulge in exceptional culinary artistry at our fine dining restaurant, featuring locally-sourced ingredients and international cuisine."
    },
    {
      icon: Users,
      title: "Prime Location",
      description: "Strategically positioned in the heart of Peshawar, offering convenient access to business districts and cultural landmarks."
    }
  ];

  const gallery = [
    { src: premium, alt: "Luxurious Premium Suite with elegant furnishings and marble accents" },
    { src: fourbedroom, alt: "Spacious Four-Bedroom Family Suite with panoramic city views" },
    { src: twobedAc, alt: "Executive Two-Bedroom AC Suite with modern amenities" }
  ];

  const rooms = [
    {
      title: "Single Bed Room",
      price: 1500,
      originalPrice: 2000,
      image: twobedAc,
      description: "Comfortable single occupancy room with modern amenities and city view. Perfect for business travelers.",
      features: ["Free WiFi", "Air Conditioning", "Room Service", "Daily Housekeeping"],
      beds: 1,
      guests: 1
    },
    {
      title: "Double Bed Room",
      price: 2500,
      originalPrice: 3000,
      image: premium,
      description: "Spacious double bed room with elegant furnishings and premium amenities. Ideal for couples.",
      features: ["Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "Daily Housekeeping", "City View"],
      beds: 1,
      guests: 2
    },
    {
      title: "AC Room Deluxe",
      price: 3500,
      originalPrice: 4000,
      image: fourbedroom,
      description: "Premium AC room with luxury amenities and panoramic views. Perfect for extended stays.",
      features: ["Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "Daily Housekeeping", "City View", "Balcony"],
      beds: 2,
      guests: 3
    },
    {
      title: "Family Suite",
      price: 5000,
      originalPrice: 6000,
      image: mainlobby,
      description: "Luxurious family suite with multiple bedrooms and premium amenities. Perfect for families.",
      features: ["Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "Daily Housekeeping", "City View", "Balcony", "Kitchenette"],
      beds: 4,
      guests: 6
    }
  ];

  return (
    <>
      <SEO 
        config={pageSEO.home}
        structuredData={[hotelSchema, breadcrumbSchema, localBusinessSchema, organizationSchema, webSiteSchema]}
      />

      {/* Hero Section */}
      <Hero
        title="Welcome to Mehran Hotel"
        subtitle="Experience Luxury in the Heart of Peshawar"
        backgroundImage={outside}
        showCTA
      />

      {/* Enhanced Highlights Section with Asymmetrical Layout */}
      <section className="py-40 bg-background relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 marble-overlay opacity-15" />
        <div className="absolute inset-0 ambient-light opacity-40" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold-metallic/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/4 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="font-serif text-5xl md:text-7xl font-bold mb-8 text-luxury-white leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
            >
              Why Choose <span className="text-luxury gold-glow">Mehran Hotel</span>
            </motion.h2>
            <motion.p 
              className="text-cream text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience unparalleled luxury and sophistication in the heart of Peshawar
            </motion.p>
          </motion.div>

          {/* Asymmetrical Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`${index === 1 ? 'lg:col-span-1 lg:row-span-2' : ''}`}
              >
                <ServiceCard
                  icon={highlight.icon}
                  title={highlight.title}
                  description={highlight.description}
                  delay={index * 0.2}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section with Curved Divider */}
      <section className="py-40 bg-card relative overflow-hidden">
        {/* Enhanced Curved Divider */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-card" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)' }} />
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 marble-overlay opacity-12" />
        <div className="absolute inset-0 ambient-light opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gold/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-gold-metallic/7 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-gold-light/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="font-serif text-5xl md:text-7xl font-bold mb-8 text-luxury-white leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our <span className="text-luxury gold-glow">Luxury Suites</span>
            </motion.h2>
            <motion.p 
              className="text-cream text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Immerse yourself in opulent accommodations designed for the discerning traveler
            </motion.p>
          </motion.div>

          {/* Asymmetrical Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-3xl ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : 
                  index === 1 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Multi-layer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold-metallic/10" />
                  
                  {/* Enhanced Content Overlay */}
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="glass-premium rounded-3xl p-8 border-luxury backdrop-blur-xl">
                      <h3 className="font-serif text-3xl font-semibold text-luxury-white mb-3 gold-glow">
                        {image.alt.split(' ')[0]} Suite
                      </h3>
                      <p className="text-cream text-base opacity-95 leading-relaxed">
                        Experience luxury redefined
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-500 rounded-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced USP Section with Breakout Elements */}
      <section className="py-40 bg-background relative overflow-hidden">
        {/* Enhanced Breakout Background Elements */}
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/12 rounded-full blur-3xl" />
        <div className="absolute -left-40 bottom-1/4 w-[450px] h-[450px] bg-gold-metallic/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/6 rounded-full blur-3xl" />
        <div className="absolute inset-0 marble-overlay opacity-10" />
        <div className="absolute inset-0 ambient-light opacity-25" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="font-serif text-5xl md:text-7xl font-bold mb-8 text-luxury-white leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our <span className="text-luxury gold-glow">Exclusive Services</span>
            </motion.h2>
            <motion.p 
              className="text-cream text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Indulge in world-class amenities and personalized service that defines true luxury
            </motion.p>
          </motion.div>

          {/* Asymmetrical Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {[
              { icon: Hotel, text: "Deluxe Rooms & Suites", description: "Elegantly appointed accommodations" },
              { icon: Utensils, text: "Fine Dining Restaurant", description: "Culinary excellence awaits" },
              { icon: Users, text: "Event & Conference Halls", description: "Sophisticated venues for every occasion" },
              { icon: Clock, text: "24/7 Concierge Service", description: "Round-the-clock personalized assistance" },
              { icon: Car, text: "Luxury Airport Transfer", description: "Seamless arrival and departure" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative ${
                  index === 2 ? 'md:col-span-2 lg:col-span-1' : 
                  index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="glass-premium rounded-3xl p-10 border-luxury luxury-hover h-full relative overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold-metallic/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold-metallic/20 flex items-center justify-center mb-6 group-hover:from-gold/30 group-hover:to-gold-metallic/30 transition-all duration-500 border border-gold/20 group-hover:border-gold/40"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="text-gold group-hover:text-gold-light transition-colors duration-300" size={28} />
                    </motion.div>
                    
                    <h3 className="font-serif text-2xl font-semibold mb-3 text-luxury-white group-hover:text-luxury group-hover:gold-glow transition-all duration-500">
                      {service.text}
                    </h3>
                    
                    <p className="text-cream-dark group-hover:text-cream transition-colors duration-300 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 rounded-3xl border border-gold/0 group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms & Pricing Section */}
      <section className="py-40 bg-background relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 marble-overlay opacity-15" />
        <div className="absolute inset-0 ambient-light opacity-35" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gold-metallic/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/4 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="font-serif text-5xl md:text-7xl font-bold mb-8 text-luxury-white leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our <span className="text-luxury gold-glow">Luxury Rooms</span>
            </motion.h2>
            <motion.p 
              className="text-cream text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
            >
              Experience unparalleled comfort and luxury in our elegantly appointed accommodations
            </motion.p>
          </motion.div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <RoomCard
                  title={room.title}
                  price={room.price}
                  originalPrice={room.originalPrice}
                  image={room.image}
                  description={room.description}
                  features={room.features}
                  beds={room.beds}
                  guests={room.guests}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </div>

          {/* Special Offer Banner */}
          <motion.div
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 glass-premium rounded-3xl p-8 border-luxury text-center"
          >
            <h3 className="font-serif text-3xl font-bold text-luxury-white mb-4 gold-glow">
              Special Offer
            </h3>
            <p className="text-cream text-lg mb-6 max-w-2xl mx-auto">
              Book any room for 3 nights or more and get 20% off your total stay. 
              Valid until the end of this month.
            </p>
            <motion.button
              onClick={() => window.location.href = '/contact'}
              className="glass-strong rounded-2xl px-8 py-4 border-luxury text-gold hover:text-navy-deep font-semibold transition-all duration-300 hover:bg-gold hover:text-navy-deep cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now & Save
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
