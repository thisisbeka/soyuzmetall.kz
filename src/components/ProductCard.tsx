import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
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

const productRoutes: Record<string, string> = {
  'Арматура': '/products/armature',
  'Балка': '/products/beam',
  'Арқалық': '/products/beam',
  'Лист': '/products/sheet',
  'Парақ': '/products/sheet',
  'Оцинковка': '/products/galvanized',
  'Мырышталған': '/products/galvanized',
  'Профлист': '/products/proflist',
  'Профпарақ': '/products/proflist',
  'Трубы': '/products/pipes',
  'Құбырлар': '/products/pipes',
  'Проволока': '/products/wire',
  'Сым': '/products/wire',
  'Квадрат': '/products/square',
  'Төртбұрыш': '/products/square',
};

export function ProductCard({ name, description, index }: ProductCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const backgroundImage = productImages[name];
  const navigate = useNavigate();

  const handleClick = () => {
    const route = productRoutes[name];
    if (route) {
      navigate(route);
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={handleClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-bold text-white mb-0.5">
          {name}
        </h3>
        <p className="text-white/70 text-sm line-clamp-1">{description}</p>
      </div>
    </motion.div>
  );
}
