import { motion } from "framer-motion";
import { Hotel, Utensils, Users, Clock, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
      image: "/optimized/twobedAc-optimized.jpg",
      description: "Spacious double bed room with elegant furnishings and premium amenities. Ideal for couples.",
      features: ["Free WiFi",  "Room Service", "Daily Housekeeping", "City View"],
      beds: 1,
      guests: 2
    },
    {
      title: "AC Room Deluxe",
      price: 3500,
      originalPrice: 4000,
      image: "/optimized/premium-optimized.jpg",
      description: "Premium AC room with luxury amenities and panoramic views. Perfect for extended stays.",
      features: ["Free WiFi", "Air Conditioning","Room Service", "Daily Housekeeping", "City View", "Balcony"],
      beds: 2,
      guests: 3
    },
    {
      title: "Family Suite",
      price: 5000,
      originalPrice: 6000,
      image: "/optimized/fourbedroom-1920w.webp",
      description: "Luxurious family suite with multiple bedrooms and premium amenities. Perfect for families.",
      features: ["Free WiFi", "Air Conditioning",  "Room Service", "Daily Housekeeping", "City View", "Balcony", ],
      beds: 4,
      guests: 6
    }
  ];

  return (
    <>
      <SEO 
        config={pageSEO.home}
        structuredData={[hotelSchema, breadcrumbSchema, localBusinessSchema, organizationSchema, webSiteSchema]}
        preloadImages={[outside, premium, fourbedroom, twobedAc]}
      />

      {/* Hero Section */}
      <Hero
        title="Mehran Hotel"
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
              className="font-serif text-5xl md:text-7xl font-bold mb-8 text-black leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Why Choose <span className="text-luxury gold-glow">Mehran Hotel</span>
            </motion.h2>
            <motion.p 
              className="text-navy text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
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

      {/* Enhanced Gallery Section with Modern Animated Layout */}
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
              className="font-serif text-5xl md:text-7xl font-bold mb-8 text-black leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our <span className="text-luxury gold-glow">Luxury Suites</span>
            </motion.h2>
            <motion.p 
              className="text-navy text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Immerse yourself in opulent accommodations designed for the discerning traveler
            </motion.p>
          </motion.div>

          {/* Modern Animated Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
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
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center relative z-10">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-black group-hover:text-gold-light font-bold transition-colors duration-300">
                    {image.alt.split(' ')[0]} Suite
                  </h3>
                  <p className="text-navy-dark text-base mb-3 leading-relaxed">
                    {image.alt}
                  </p>
                  <p className="text-navy font-medium text-sm italic">
                    Experience luxury redefined
                  </p>
                </div>
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-500 rounded-2xl" />
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
              className="font-serif text-5xl md:text-7xl font-bold mb-8 text-black leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our <span className="text-luxury gold-glow">Luxury Rooms</span>
            </motion.h2>
            <motion.p 
              className="text-navy text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
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
            <h3 className="font-serif text-3xl font-bold text-black mb-4 gold-glow">
              Special Offer
            </h3>
            <p className="text-navy text-lg mb-6 max-w-2xl mx-auto">
              Book any room for 3 nights or more and get 20% off your total stay. 
              Valid until the end of this month.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="glass-strong rounded-2xl px-8 py-4 border-luxury text-black font-bold hover:text-white font-semibold transition-all duration-300 hover:bg-gold hover:text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now & Save
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Urdu Special Announcement Banner */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="glass-premium rounded-3xl p-8 border-luxury max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-6 noto-nastaliq-urdu" dir="rtl">
                📞 آج ہی بکنگ کریں اور اپنی رہائش کو یادگار بنائیں!
              </h2>
              <p className="text-navy text-lg leading-relaxed noto-nastaliq-urdu" dir="rtl">
                🌟 پشاور آنے والوں کے لیے شاندار خوشخبری! 🌟
              </p>
              <p className="text-navy text-lg leading-relaxed mt-4 noto-nastaliq-urdu" dir="rtl">
                ✨ مہران ہوٹل پشاور! ✨
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urdu Location Highlights Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black noto-nastaliq-urdu" dir="rtl">
              📍 شاندار لوکیشن – شہر کے دل میں:
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🕌</div>
              <h3 className="font-serif text-xl font-bold text-black mb-3 noto-nastaliq-urdu" dir="rtl">
                قصہ خوانی بازار
              </h3>
              <p className="text-navy text-sm noto-nastaliq-urdu" dir="rtl">
                تاریخی روایات اور خریداری کا مرکز
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🍢</div>
              <h3 className="font-serif text-xl font-bold text-black mb-3 noto-nastaliq-urdu" dir="rtl">
                نمک منڈی
              </h3>
              <p className="text-navy text-sm noto-nastaliq-urdu" dir="rtl">
                پشاور کے مشہور باربی کیو اور کباب
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-serif text-xl font-bold text-black mb-3 noto-nastaliq-urdu" dir="rtl">
                لیڈی ریڈنگ ہسپتال
              </h3>
              <p className="text-navy text-sm noto-nastaliq-urdu" dir="rtl">
                طبی سہولتوں کے قریب
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="font-serif text-xl font-bold text-black mb-3 noto-nastaliq-urdu" dir="rtl">
                قلعہ بالا حصار
              </h3>
              <p className="text-navy text-sm noto-nastaliq-urdu" dir="rtl">
                تاریخ کے شوقین افراد کے لیے
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🚉</div>
              <h3 className="font-serif text-xl font-bold text-black mb-3 noto-nastaliq-urdu" dir="rtl">
                ریلوے اسٹیشن
              </h3>
              <p className="text-navy text-sm noto-nastaliq-urdu" dir="rtl">
                صرف 500 میٹر دور
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="font-serif text-xl font-bold text-black mb-3 noto-nastaliq-urdu" dir="rtl">
                باچا خان ایئرپورٹ
              </h3>
              <p className="text-navy text-sm noto-nastaliq-urdu" dir="rtl">
                صرف 5 منٹ کی دوری پر
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;