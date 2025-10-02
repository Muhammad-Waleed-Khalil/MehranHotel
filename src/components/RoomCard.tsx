import { motion } from "framer-motion";
import { Bed, Wifi, Car, Utensils, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RoomCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  features: string[];
  beds: number;
  guests: number;
  delay?: number;
}

const RoomCard = ({ 
  title, 
  price, 
  originalPrice, 
  image, 
  description, 
  features, 
  beds, 
  guests, 
  delay = 0 
}: RoomCardProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative h-full"
    >
      {/* Main Card */}
      <div className="glass-premium rounded-3xl overflow-hidden h-full border-luxury luxury-hover relative">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-gold-metallic/8 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          {/* Multi-layer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-gold/25 via-transparent to-gold-metallic/15" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 glass-premium rounded-2xl p-4 border-luxury">
            <div className="text-center">
              <div className="text-gold gold-glow font-bold text-xl">PKR {price.toLocaleString()}</div>
              {originalPrice && (
                <div className="text-cream-dark text-sm line-through">PKR {originalPrice.toLocaleString()}</div>
              )}
              <div className="text-cream text-xs mt-1">per night</div>
            </div>
          </div>

          {/* Room Type Badge */}
          <div className="absolute top-4 left-4 glass rounded-xl px-3 py-2 border-luxury">
            <span className="text-gold font-semibold text-sm">{title}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 relative z-10">
          {/* Room Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-cream-dark">
              <Bed size={20} className="text-gold" />
              <span className="text-sm">{beds} Bed{beds > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-2 text-cream-dark">
              <Users size={20} className="text-gold" />
              <span className="text-sm">{guests} Guest{guests > 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-cream-dark leading-relaxed text-base mb-6 group-hover:text-cream transition-colors duration-200">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider">Amenities</h4>
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-cream-dark text-sm">
                  <Star size={14} className="text-gold flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <motion.button
            onClick={() => navigate('/contact')}
            className="w-full glass-strong rounded-2xl py-4 border-luxury text-gold hover:text-black font-semibold transition-all duration-200 group-hover:bg-gold group-hover:text-black cursor-pointer text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="group-hover:scale-105 transition-transform duration-200">
              Book Now
            </span>
          </motion.button>
        </div>

        {/* Hover Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-gold/0 group-hover:border-gold/40 transition-all duration-300 pointer-events-none" />
        
        {/* Ambient Glow on Hover */}
        <div className="absolute inset-0 rounded-3xl shadow-none group-hover:shadow-gold-strong transition-all duration-300 pointer-events-none" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        <motion.div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold/50 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay + 1,
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-gold-metallic/50 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: delay + 2,
          }}
        />
      </div>
    </motion.div>
  );
};

export default RoomCard;
