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
  typeRu?: string;
  typeKk?: string;
}

const beamProducts: Product[] = [
  { nameRu: 'Металлическая балка 45 М', nameKk: 'Металл арқалық 45 М' },
  { nameRu: 'Металлическая балка 36 М', nameKk: 'Металл арқалық 36 М' },
  { nameRu: 'Металлическая балка 30 М', nameKk: 'Металл арқалық 30 М' },
  { nameRu: 'Металлическая балка 24 М', nameKk: 'Металл арқалық 24 М' },
  { nameRu: 'Металлическая балка 40 Ш1', nameKk: 'Металл арқалық 40 Ш1' },
  { nameRu: 'Металлическая балка 35 Ш1', nameKk: 'Металл арқалық 35 Ш1' },
  { nameRu: 'Металлическая балка 30 Ш1', nameKk: 'Металл арқалық 30 Ш1' },
  { nameRu: 'Металлическая балка 25 Ш1', nameKk: 'Металл арқалық 25 Ш1' },
  { nameRu: 'Металлическая балка 20 Ш1', nameKk: 'Металл арқалық 20 Ш1' },
  { nameRu: 'Металлическая балка 40 К1', nameKk: 'Металл арқалық 40 К1' },
  { nameRu: 'Металлическая балка 35 К1', nameKk: 'Металл арқалық 35 К1' },
  { nameRu: 'Металлическая балка 30 К1', nameKk: 'Металл арқалық 30 К1' },
  { nameRu: 'Металлическая балка 25 К1', nameKk: 'Металл арқалық 25 К1' },
  { nameRu: 'Металлическая балка 20 К1', nameKk: 'Металл арқалық 20 К1' },
  { nameRu: 'Металлическая балка 60 Б1', nameKk: 'Металл арқалық 60 Б1' },
  { nameRu: 'Металлическая балка 55 Б1', nameKk: 'Металл арқалық 55 Б1' },
  { nameRu: 'Металлическая балка 50 Б1', nameKk: 'Металл арқалық 50 Б1' },
  { nameRu: 'Металлическая балка 45 Б1', nameKk: 'Металл арқалық 45 Б1' },
  { nameRu: 'Металлическая балка 40 Б1', nameKk: 'Металл арқалық 40 Б1' },
  { nameRu: 'Металлическая балка 35 Б1', nameKk: 'Металл арқалық 35 Б1' },
  { nameRu: 'Металлическая балка 30 Б1', nameKk: 'Металл арқалық 30 Б1' },
  { nameRu: 'Металлическая балка 25 Б1', nameKk: 'Металл арқалық 25 Б1' },
  { nameRu: 'Металлическая балка 20 Б1', nameKk: 'Металл арқалық 20 Б1' },
  { nameRu: 'Металлическая балка 18 Б1', nameKk: 'Металл арқалық 18 Б1' },
  { nameRu: 'Металлическая балка 16 Б1', nameKk: 'Металл арқалық 16 Б1' },
  { nameRu: 'Металлическая балка 14 Б1', nameKk: 'Металл арқалық 14 Б1' },
  { nameRu: 'Металлическая балка 12 Б1', nameKk: 'Металл арқалық 12 Б1' },
  { nameRu: 'Балка стальная М', nameKk: 'Болат арқалық М', typeRu: 'стандартная', typeKk: 'стандартты' },
  { nameRu: 'Балка стальная Ш1', nameKk: 'Болат арқалық Ш1', typeRu: 'широкополочная', typeKk: 'кең қанатты' },
  { nameRu: 'Балка стальная К1', nameKk: 'Болат арқалық К1', typeRu: 'колонная', typeKk: 'бағаналық' },
  { nameRu: 'Балка стальная Б1', nameKk: 'Болат арқалық Б1', typeRu: 'обычная', typeKk: 'қарапайым' },
];

export function BeamProducts() {
  const { language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [orderProduct, setOrderProduct] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = language === 'kk' ? 'Арқалық өнім түрлері' : 'Виды продукции Балка';
  const subtitle = language === 'kk'
    ? 'Әртүрлі өлшем мен типтегі металл арқалықтар'
    : 'Металлические балки различных размеров и типов';
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

          {beamProducts.map((product, index) => {
            const productName = language === 'kk' ? product.nameKk : product.nameRu;
            const productType = language === 'kk' ? product.typeKk : product.typeRu;

            return (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[1fr_120px_120px] gap-2 sm:gap-4 items-center px-6 py-4 border-b border-slate-100 last:border-b-0 hover:bg-blue-50/50 transition-colors"
              >
                <div>
                  <span className="font-medium text-slate-900">{productName}</span>
                  {productType && (
                    <span className="ml-2 text-sm text-slate-400">({productType})</span>
                  )}
                </div>

                <div className="text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                    В наличии
                  </span>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setOrderProduct(productName + (productType ? ` (${productType})` : ''))}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Заказать</span>
                  </button>
                </div>
              </div>
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
