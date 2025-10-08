import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PremiumRoomCard from "./PremiumRoomCard";
import premium from "@/assets/premium.jpg";
import fourbedroom from "@/assets/fourbedroom.jpg";
import twobedAc from "@/assets/twobedAc.jpg";

const PremiumRoomsSection = () => {
  const navigate = useNavigate();
  
  const rooms = [
     {
       title: "Luxurious Premium Suite with elegant furnishings and marble accents",
       subtitle: "Luxurious Suite",
       description: "Experience luxury redefined",
      image: premium,
      beds: 2,
      guests: 4,
      features: [
       
      ],
      price: 5000,
      originalPrice: 6000,
      isPremium: true
    },
    {
      title: "Spacious Four-Bedroom Family Suite",
      subtitle: "Spacious Suite", 
      description: "Experience luxury redefined",
      image: "/optimized/fourbedroom-1920w.webp",
      beds: 4,
      guests: 8,
      features: [
      
      ],
      price: 4000,
      originalPrice: 4800,
      isPremium: false
    },
    {
      title: "Executive Two-Bedroom AC Suite with modern amenities",
      subtitle: "Executive Suite",
      description: "Experience luxury redefined",
      image: twobedAc,
      beds: 2,
      guests: 4,
      features: [
        
      ],
      price: 3500,
      originalPrice: 4200,
      isPremium: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
           <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black">
             Our <span className="text-luxury gold-glow">Luxury Suites</span>
           </h2>
           <p className="text-navy text-lg max-w-3xl mx-auto leading-relaxed">
             Immerse yourself in opulent accommodations designed for the discerning traveler
           </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.map((room, index) => (
            <PremiumRoomCard
              key={index}
              title={room.title}
              subtitle={room.subtitle}
              description={room.description}
              image={room.image}
              beds={room.beds}
              guests={room.guests}
              features={room.features}
              price={room.price}
              originalPrice={room.originalPrice}
              delay={index * 0.2}
              isPremium={room.isPremium}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-4 text-black">
              Ready to Experience <span className="text-luxury gold-glow">Luxury?</span>
            </h3>
            <p className="text-navy mb-6">
              Book your premium suite today and discover the finest hospitality in Peshawar.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="inline-block bg-gold hover:bg-gold-light text-white hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(230,184,77,0.4)] hover:shadow-[0_0_50px_rgba(230,184,77,0.6)] text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Suite
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumRoomsSection;
