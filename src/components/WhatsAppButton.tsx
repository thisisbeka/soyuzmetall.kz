import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function WhatsAppButton() {
  const prefersReducedMotion = useReducedMotion();

  const handleClick = () => {
    const phone = '77711372864';
    const text = encodeURIComponent('Здравствуйте! Хочу получить информацию по товарам.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={prefersReducedMotion ? {} : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
      aria-label="WhatsApp"
    >
      <img
        src="/wp_icon.png"
        alt="WhatsApp"
        className="w-8 h-8 filter brightness-0 invert"
      />
    </motion.button>
  );
}
