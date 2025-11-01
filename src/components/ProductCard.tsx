import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Package } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  description: string;
  index: number;
}

const productImages: Record<string, string> = {
  'Арматура': '/armatura.png',
  'Балка': '/balka.png',
  'Лист': '/metallicheskie-listy.jpg',
  'Оцинковка': '/metallicheskie-listy.jpg',
  'Квадрат': '/kvadrat.png',
  'Профлист': '/oczinkovannye-proflisty.jpg',
  'Трубы': '/truby.png',
  'Проволока': '/provoloka.png',
  'Арқалық': '/balka.png',
  'Парақ': '/metallicheskie-listy.jpg',
  'Мырышталған': '/metallicheskie-listy.jpg',
  'Төртбұрыш': '/kvadrat.png',
  'Профпарақ': '/oczinkovannye-proflisty.jpg',
  'Құбырлар': '/truby.png',
  'Сым': '/provoloka.png',
};

export function ProductCard({ name, description, index }: ProductCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const backgroundImage = productImages[name];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const navigate = useNavigate();

  const handleClick = () => {
    if (name === 'Арматура') {
      navigate('/products/armature');
      window.scrollTo(0, 0);
    } else if (name === 'Балка' || name === 'Арқалық') {
      navigate('/products/beam');
      window.scrollTo(0, 0);
    } else if (name === 'Лист' || name === 'Парақ') {
      navigate('/products/sheet');
      window.scrollTo(0, 0);
    } else if (name === 'Оцинковка' || name === 'Мырышталған') {
      navigate('/products/galvanized');
      window.scrollTo(0, 0);
    } else if (name === 'Профлист' || name === 'Профпарақ') {
      navigate('/products/proflist');
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : {
        opacity: 0,
        y: 20
      }}
      whileInView={prefersReducedMotion ? {} : {
        opacity: 1,
        y: 0
      }}
      viewport={{ once: true, margin: '0px', amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: isMobile ? 0 : index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={prefersReducedMotion || isMobile ? {} : {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
      }}
      onClick={handleClick}
      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden will-change-transform cursor-pointer"
    >

      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 will-change-opacity"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90 group-hover:from-slate-900/70 group-hover:via-slate-800/60 group-hover:to-slate-900/80 transition-all duration-300" />

      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-300" />

      <div className="relative z-10">
        <motion.div
          className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20"
          whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
        >
          <Package className="w-7 h-7 text-white" />
        </motion.div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
