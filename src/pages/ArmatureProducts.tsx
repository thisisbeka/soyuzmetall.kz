import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  name: string;
  class?: string;
}

const armatureProducts: Product[] = [
  { name: 'Арматура 40 мм' },
  { name: 'Арматура 32 мм' },
  { name: 'Арматура 30 мм' },
  { name: 'Арматура 25 мм' },
  { name: 'Арматура 22 мм' },
  { name: 'Арматура 20 мм' },
  { name: 'Арматура 18 мм' },
  { name: 'Арматура 16 мм' },
  { name: 'Арматура 14 мм' },
  { name: 'Арматура 12 мм' },
  { name: 'Арматура 10 мм' },
  { name: 'Арматура 8 мм' },
  { name: 'Арматура 6,5 мм' },
  { name: 'Арматура 8 мм', class: 'класс AIII' },
  { name: 'Арматура 10 мм', class: 'класс AIII' },
  { name: 'Арматура 12 мм', class: 'класс AIII' },
  { name: 'Арматура 14 мм', class: 'класс AIII' },
  { name: 'Арматура 16 мм', class: 'класс AIII' },
  { name: 'Арматура 18 мм', class: 'класс AIII' },
  { name: 'Арматура 20 мм', class: 'класс AIII' },
  { name: 'Арматура 22 мм', class: 'класс AIII' },
  { name: 'Арматура 25 мм', class: 'класс AIII' },
  { name: 'Арматура 28 мм', class: 'класс AIII' },
  { name: 'Арматура 32 мм', class: 'класс AIII' },
];

export function ArmatureProducts() {
  const { t, language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const title = language === 'ru' ? 'Виды продукции Арматура' : 'Арматура өнім түрлері';

  return (
    <div className="min-h-screen bg-slate-900">
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 will-change-auto"
          style={{
            backgroundImage: `url('/4.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate('/')}
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            whileHover={prefersReducedMotion ? {} : { x: -5 }}
            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'ru' ? 'Назад к каталогу' : 'Каталогқа оралу'}</span>
          </motion.button>

          <div className="text-center mb-16">
            <motion.h1
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400"
            >
              {language === 'ru'
                ? 'Строительная арматура различных диаметров и классов'
                : 'Әртүрлі диаметр мен сыныптағы құрылыс арматурасы'}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {armatureProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? {} : {
                  opacity: 0,
                  y: 20
                }}
                animate={prefersReducedMotion ? {} : {
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: isMobile ? 0 : index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={prefersReducedMotion || isMobile ? {} : {
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
                }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden will-change-transform cursor-pointer"
              >
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 will-change-opacity"
                  style={{
                    backgroundImage: `url('/armatura.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />

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
                    {product.name}
                  </h3>
                  {product.class && (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {product.class}
                    </p>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
