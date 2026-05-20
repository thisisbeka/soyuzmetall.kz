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

const sheetProducts: Product[] = [
  { nameRu: 'Стальной лист г/к 50 мм', nameKk: 'Болат парақ ж/п 50 мм' },
  { nameRu: 'Стальной лист г/к 60 мм', nameKk: 'Болат парақ ж/п 60 мм' },
  { nameRu: 'Стальной лист г/к 40 мм', nameKk: 'Болат парақ ж/п 40 мм' },
  { nameRu: 'Стальной лист г/к 30 мм', nameKk: 'Болат парақ ж/п 30 мм' },
  { nameRu: 'Стальной лист г/к 25 мм', nameKk: 'Болат парақ ж/п 25 мм' },
  { nameRu: 'Стальной лист г/к 18 мм', nameKk: 'Болат парақ ж/п 18 мм' },
  { nameRu: 'Стальной лист г/к 20 мм', nameKk: 'Болат парақ ж/п 20 мм' },
  { nameRu: 'Стальной лист г/к 16 мм', nameKk: 'Болат парақ ж/п 16 мм' },
  { nameRu: 'Стальной лист г/к 14 мм', nameKk: 'Болат парақ ж/п 14 мм' },
  { nameRu: 'Стальной лист г/к 12 мм', nameKk: 'Болат парақ ж/п 12 мм' },
  { nameRu: 'Стальной лист г/к 10 мм', nameKk: 'Болат парақ ж/п 10 мм' },
  { nameRu: 'Стальной лист г/к 8 мм', nameKk: 'Болат парақ ж/п 8 мм' },
  { nameRu: 'Стальной лист г/к 6 мм', nameKk: 'Болат парақ ж/п 6 мм' },
  { nameRu: 'Стальной лист г/к 5 мм', nameKk: 'Болат парақ ж/п 5 мм' },
  { nameRu: 'Стальной лист г/к 4 мм', nameKk: 'Болат парақ ж/п 4 мм' },
  { nameRu: 'Стальной лист г/к 3 мм 1000 х 2000', nameKk: 'Болат парақ ж/п 3 мм 1000 х 2000' },
  { nameRu: 'Стальной лист г/к 3 мм 1250 х 2500', nameKk: 'Болат парақ ж/п 3 мм 1250 х 2500' },
  { nameRu: 'Стальной лист г/к 2 мм 1250 х 2500', nameKk: 'Болат парақ ж/п 2 мм 1250 х 2500' },
  { nameRu: 'Стальной лист г/к 2 мм 1000 х 2000', nameKk: 'Болат парақ ж/п 2 мм 1000 х 2000' },
  { nameRu: 'Стальной лист г/к 1,8 мм 1000 х 2100', nameKk: 'Болат парақ ж/п 1,8 мм 1000 х 2100' },
  { nameRu: 'Стальной лист г/к 1,8 мм 1000 х 2000', nameKk: 'Болат парақ ж/п 1,8 мм 1000 х 2000' },
];

export function SheetProducts() {
  const { language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [orderProduct, setOrderProduct] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = language === 'kk' ? 'Болат парақ өнім түрлері' : 'Виды продукции Лист';
  const subtitle = language === 'kk'
    ? 'Әртүрлі қалыңдық пен өлшемдегі болат парақтар'
    : 'Стальные листы горячекатаные различных толщин и размеров';
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

          {sheetProducts.map((product, index) => {
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
