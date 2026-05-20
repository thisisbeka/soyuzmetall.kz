import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QuickOrderModal } from '../components/QuickOrderModal';

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
  const { language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [orderProduct, setOrderProduct] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = language === 'kk' ? 'Арматура өнім түрлері' : 'Арматура';
  const subtitle = language === 'kk'
    ? 'Әртүрлі диаметр мен сыныптағы құрылыс арматурасы'
    : 'Строительная арматура различных диаметров и классов';
  const backText = language === 'kk' ? 'Каталогқа оралу' : 'Назад к каталогу';

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.button
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const element = document.querySelector('#products');
              element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>{backText}</span>
        </motion.button>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{title}</h1>
          <p className="text-lg text-slate-500">{subtitle}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-[1fr_120px_120px] gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-500">
            <span>{language === 'kk' ? 'Атауы' : 'Наименование'}</span>
            <span className="text-center">{language === 'kk' ? 'Қолжетімділік' : 'Наличие'}</span>
            <span className="text-center">{language === 'kk' ? 'Тапсырыс' : 'Заказ'}</span>
          </div>

          {armatureProducts.map((product, index) => {
            const productName = language === 'kk' ? product.nameKk : product.nameRu;
            const productClass = language === 'kk' ? product.classKk : product.classRu;

            return (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.02 }}
                className="grid grid-cols-1 sm:grid-cols-[1fr_120px_120px] gap-2 sm:gap-4 items-center px-6 py-4 border-b border-slate-100 last:border-b-0 hover:bg-blue-50/50 transition-colors"
              >
                <div>
                  <span className="font-medium text-slate-900">{productName}</span>
                  {productClass && (
                    <span className="ml-2 text-sm text-slate-400">({productClass})</span>
                  )}
                </div>

                <div className="text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                    В наличии
                  </span>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setOrderProduct(productName + (productClass ? ` (${productClass})` : ''))}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Заказать</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <QuickOrderModal
        isOpen={!!orderProduct}
        onClose={() => setOrderProduct(null)}
        productName={orderProduct || ''}
      />
    </div>
  );
}
