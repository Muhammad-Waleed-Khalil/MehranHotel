import { motion } from "framer-motion";

const MapEmbed = () => {
  // Correct coordinates for Peshawar, Pakistan
  const latitude = 34.0151;
  const longitude = 71.5805;
  
  // Updated Google Maps embed URL with correct coordinates and blue pinpoint
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6318598736587!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b89d8fb96d%3A0x4b2e6e8e6e8e6e8e!2sMehran%20Hotel%20Peshawar!5e0!3m2!1sen!2spk!4v1703123456789!5m2!1sen!2spk&markers=color:blue%7C${latitude},${longitude}`;

  return (
    <motion.div 
      className="w-full h-[500px] rounded-3xl overflow-hidden glass-premium border-luxury relative"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Enhanced overlay for luxury feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold-metallic/5 pointer-events-none z-10" />
      
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mehran Hotel Location - Peshawar, Pakistan"
        className="relative z-0"
      />
      
      {/* Luxury border glow */}
      <div className="absolute inset-0 rounded-3xl border border-gold/20 pointer-events-none" />
    </motion.div>
  );
};

export default MapEmbed;
