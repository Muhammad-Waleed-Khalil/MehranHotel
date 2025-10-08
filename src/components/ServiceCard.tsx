import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, image, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative h-full"
    >
      {/* Enhanced Main Card */}
      <div className="glass-premium rounded-3xl overflow-hidden h-full border-luxury luxury-hover relative">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold-metallic/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Section */}
        {image && (
          <div className="relative h-56 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            {/* Subtle Gold Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold-metallic/10" />
            
            {/* Floating Icon Overlay */}
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 glass rounded-full flex items-center justify-center border-luxury"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.15 }}
            >
              <Icon className="text-gold font-bold" size={20} />
            </motion.div>
          </div>
        )}

        {/* Enhanced Content Section */}
        <div className="p-10 relative z-10">
          {/* Enhanced Icon */}
          <motion.div
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gold/25 to-gold-metallic/25 flex items-center justify-center mb-8 group-hover:from-gold/35 group-hover:to-gold-metallic/35 transition-all duration-500 border border-gold/25 group-hover:border-gold/45"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.15 }}
          >
            <Icon className="text-gold font-bold group-hover:text-gold-light font-bold transition-colors duration-300" size={32} />
          </motion.div>

          {/* Enhanced Title */}
          <motion.h3
            className="font-serif text-3xl font-semibold mb-6 text-black group-hover:text-luxury group-hover:gold-glow transition-all duration-500 leading-tight"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.15 }}
          >
            {title}
          </motion.h3>

          {/* Enhanced Description */}
          <p className="text-navy leading-relaxed text-lg group-hover:text-navy-dark transition-colors duration-300">
            {description}
          </p>

          {/* Decorative Element */}
          <motion.div
            className="absolute bottom-6 right-6 w-2 h-2 bg-gold/30 rounded-full"
            whileHover={{ scale: 1.5, opacity: 0.8 }}
            transition={{ duration: 0.15 }}
          />
        </div>

        {/* Hover Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-gold/0 group-hover:border-gold/30 transition-all duration-300 pointer-events-none" />
        
        {/* Ambient Glow on Hover */}
        <div className="absolute inset-0 rounded-3xl shadow-none group-hover:shadow-gold-strong transition-all duration-300 pointer-events-none" />
      </div>

      {/* Floating Particles Effect (Optional) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        <motion.div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay + 1,
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-gold-metallic/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay + 2,
          }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
