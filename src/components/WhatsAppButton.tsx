import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { GlowingEffect } from './ui/glowing-effect';
import { ResponsiveImage } from './ResponsiveImage';

export function WhatsAppButton() {
  const prefersReducedMotion = useReducedMotion();

  const handleClick = () => {
    const phone = '77711372864';
    const text = encodeURIComponent('Здравствуйте! Хочу получить информацию по товарам. Сәлеметсіз бе! Тауарлар туралы ақпарат алғым келеді.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={prefersReducedMotion ? {} : { scale: 0, opacity: 0 }}
      animate={prefersReducedMotion ? {} : {
        scale: [1, 1.1, 1],
        opacity: 1
      }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.15 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
      transition={{
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: { duration: 0.3 }
      }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center group transition-colors overflow-hidden"
      aria-label="WhatsApp"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <ResponsiveImage
        src="/wp_icon.png"
        alt="Связаться через WhatsApp - Союз Металл"
        className="relative z-10 w-10 h-10 filter brightness-0 invert"
        width={40}
        height={40}
      />
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping" />
    </motion.button>
  );
}
