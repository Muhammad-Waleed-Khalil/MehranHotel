import { motion } from "framer-motion";
import { Bed, Users, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

interface PremiumRoomCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  beds: number;
  guests: number;
  features: string[];
  price: number;
  originalPrice?: number;
  delay?: number;
  isPremium?: boolean;
}

const PremiumRoomCard = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  beds, 
  guests, 
  features, 
  price, 
  originalPrice, 
  delay = 0,
  isPremium = false
}: PremiumRoomCardProps) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Main Card Container */}
      <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl">
        
        {/* Full-bleed Image */}
        <div className="relative h-full">
          <OptimizedImage
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            priority={isPremium}
            loading={isPremium ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Bottom ribbon (subtitle + 'Luxury Suite') */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4">
            <div className="text-center">
              <h3 className="font-serif text-lg font-bold text-cream mb-1">
                {subtitle}
              </h3>
              <p className="text-cream text-xs font-medium">
                Luxury Suite
              </p>
            </div>
          </div>

          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-gold/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
                <Crown className="text-navy-deep" size={14} />
                <span className="text-navy-deep font-semibold text-xs">Premium</span>
              </div>
            </div>
          )}

          {/* Price Badge */}
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-gold font-bold text-lg transition-colors duration-300 group-hover:text-gray-900">
                PKR {price.toLocaleString()}
              </div>
              {originalPrice && (
                <div className="text-cream-dark text-xs line-through transition-colors duration-300 group-hover:text-gray-800">
                  PKR {originalPrice.toLocaleString()}
                </div>
              )}
              <div className="text-cream text-xs transition-colors duration-300 group-hover:text-gray-800">
                per night
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover Content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
            <div className="text-center">
              <h4 className="font-serif text-xl font-bold text-cream mb-4 transition-colors duration-300 group-hover:text-gray-900">
                {title}
              </h4>
              
              {/* Room Info */}
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="flex items-center gap-2 text-cream transition-colors duration-300 group-hover:text-gray-900">
                  <Bed size={16} className="text-gold" />
                  <span className="text-sm">{beds} Bed{beds > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-2 text-cream transition-colors duration-300 group-hover:text-gray-900">
                  <Users size={16} className="text-gold" />
                  <span className="text-sm">{guests} Guest{guests > 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2 text-sm text-cream transition-colors duration-300 group-hover:text-gray-900">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Button */}
              <motion.button
                onClick={() => navigate('/contact')}
                className="bg-gold hover:bg-gold-light text-navy-deep hover:text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </div>

        {/* Border Glow on Hover */}
        <div className="absolute inset-0 rounded-3xl border border-gold/0 group-hover:border-gold/50 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default PremiumRoomCard;
