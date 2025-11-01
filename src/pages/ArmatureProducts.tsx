import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface Product {
  nameRu: string;
  nameKk: string;
  classRu?: string;
  classKk?: string;
}

const armatureProducts: Product[] = [
  { nameRu: 'Арматура 40 мм', nameKk: 'Арматура 40 мм' },
  { nameRu: 'Арматура 32 мм', nameKk: 'Арматура 32 мм' },
  { nameRu: 'Арматура 30 мм', nameKk: 'Арматура 30 мм' },
  { nameRu: 'Арматура 25 мм', nameKk: 'Арматура 25 мм' },
  { nameRu: 'Арматура 22 мм', nameKk: 'Арматура 22 мм' },
  { nameRu: 'Арматура 20 мм', nameKk: 'Арматура 20 мм' },
  { nameRu: 'Арматура 18 мм', nameKk: 'Арматура 18 мм' },
  { nameRu: 'Арматура 16 мм', nameKk: 'Арматура 16 мм' },
  { nameRu: 'Арматура 14 мм', nameKk: 'Арматура 14 мм' },
  { nameRu: 'Арматура 12 мм', nameKk: 'Арматура 12 мм' },
  { nameRu: 'Арматура 10 мм', nameKk: 'Арматура 10 мм' },
  { nameRu: 'Арматура 8 мм', nameKk: 'Арматура 8 мм' },
  { nameRu: 'Арматура 6,5 мм', nameKk: 'Арматура 6,5 мм' },
  { nameRu: 'Арматура 8 мм', nameKk: 'Арматура 8 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 10 мм', nameKk: 'Арматура 10 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 12 мм', nameKk: 'Арматура 12 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 14 мм', nameKk: 'Арматура 14 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 16 мм', nameKk: 'Арматура 16 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 18 мм', nameKk: 'Арматура 18 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 20 мм', nameKk: 'Арматура 20 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 22 мм', nameKk: 'Арматура 22 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 25 мм', nameKk: 'Арматура 25 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 28 мм', nameKk: 'Арматура 28 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
  { nameRu: 'Арматура 32 мм', nameKk: 'Арматура 32 мм', classRu: 'класс AIII', classKk: 'AIII сыныбы' },
];

export function ArmatureProducts() {
  const { t, language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = language === 'kk' ? 'Арматура өнім түрлері' : 'Виды продукции Арматура';
  const subtitle = language === 'kk'
    ? 'Әртүрлі диаметр мен сыныптағы құрылыс арматурасы'
    : 'Строительная арматура различных диаметров и классов';
  const backText = language === 'kk' ? 'Каталогқа оралу' : 'Назад к каталогу';

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
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.querySelector('#products');
                element?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            whileHover={prefersReducedMotion ? {} : { x: -5 }}
            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{backText}</span>
          </motion.button>

          <div className="text-center mb-16">
            <motion.h1
              key={`title-${language}`}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {title}
            </motion.h1>
            <motion.p
              key={`subtitle-${language}`}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400"
            >
              {subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {armatureProducts.map((product, index) => {
              const productName = language === 'kk' ? product.nameKk : product.nameRu;
              const productClass = language === 'kk' ? product.classKk : product.classRu;

              return (
              <motion.div
                key={`${index}-${language}`}
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
                    {productName}
                  </h3>
                  {productClass && (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {productClass}
                    </p>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
