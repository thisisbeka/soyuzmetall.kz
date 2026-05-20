import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QuickOrderModal } from '../components/QuickOrderModal';

interface WireCard {
  nameRu: string;
  nameKk: string;
  image: string;
}

const wireCards: WireCard[] = [
  { nameRu: 'Вязальная проволока', nameKk: 'Байланыстырушы сым', image: '/vyazalnye-provoloki.jpg' },
  { nameRu: 'Колючая проволока', nameKk: 'Тікенді сым', image: '/kolyuchie-provoloki.jpg' },
  { nameRu: 'Нихромовая проволока', nameKk: 'Нихромды сым', image: '/nihromovye-provoloki.jpg' },
  { nameRu: 'Проволока арматурная', nameKk: 'Арматуралық сым', image: '/armaturnye-provoloki.jpg' },
  { nameRu: 'Проволока для пружинных шайб', nameKk: 'Серіппелі шайбаларға арналған сым', image: '/provoloka-dlya-pruzhinnyh-shajb.jpg' },
  { nameRu: 'Проволока канатная', nameKk: 'Арқанды сым', image: '/provoloka-kanatnaya.jpg' },
  { nameRu: 'Сварочная проволока', nameKk: 'Дәнекерлеу сымы', image: '/svarochnye-provoloki.jpg' },
  { nameRu: 'Проволока углеродистая', nameKk: 'Көміртекті сым', image: '/provoloka-uglerodistaya.jpg' },
  { nameRu: 'Проволока пружинная', nameKk: 'Серіппелі сым', image: '/provoloka-pruzhinnaya.jpg' },
  { nameRu: 'Проволока оцинкованная', nameKk: 'Мырышталған сым', image: '/oczinkovannye-provoloki.jpg' },
];

export function WireProducts() {
  const { language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [orderProduct, setOrderProduct] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ru: {
      title: 'Проволока',
      backText: 'Назад к каталогу',
    },
    kk: {
      title: 'Сым',
      backText: 'Каталогқа оралу',
    }
  };

  const text = language === 'kk' ? content.kk : content.ru;

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
          <span>{text.backText}</span>
        </motion.button>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{text.title}</h1>
          <p className="text-lg text-slate-500">
            {language === 'kk' ? 'Әртүрлі типтегі сым өнімдері' : 'Проволока различных типов и назначений'}
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-[1fr_120px_120px] gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-500">
            <span>{language === 'kk' ? 'Атауы' : 'Наименование'}</span>
            <span className="text-center">{language === 'kk' ? 'Қолжетімділік' : 'Наличие'}</span>
            <span className="text-center">{language === 'kk' ? 'Тапсырыс' : 'Заказ'}</span>
          </div>

          {wireCards.map((card, index) => {
            const cardName = language === 'kk' ? card.nameKk : card.nameRu;

            return (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[1fr_120px_120px] gap-2 sm:gap-4 items-center px-6 py-4 border-b border-slate-100 last:border-b-0 hover:bg-blue-50/50 transition-colors"
              >
                <div>
                  <span className="font-medium text-slate-900">{cardName}</span>
                </div>

                <div className="text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                    В наличии
                  </span>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setOrderProduct(cardName)}
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
