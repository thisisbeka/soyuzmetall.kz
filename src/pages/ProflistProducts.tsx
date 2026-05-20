import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QuickOrderModal } from '../components/QuickOrderModal';

interface ProductSpec {
  name: string;
  thickness: string;
  weight: string;
  quantity: string;
}

const proflistSpecs: ProductSpec[] = [
  { name: 'Профлист оцинкованный Н 21 (1,05х6)', thickness: '0,4', weight: '23,7', quantity: '42,19' },
  { name: 'Профлист оцинкованный Н 21 (1,05х6)', thickness: '0,5', weight: '30,0', quantity: '33,33' },
  { name: 'Профлист оцинкованный Н 21 (1,05х6)', thickness: '0,6', weight: '36,6', quantity: '27,32' },
  { name: 'Профлист оцинкованный Н 21 (1,05х6)', thickness: '0,7', weight: '41,5', quantity: '24,10' },
  { name: 'Профлист оцинкованный Н 35 (1,05х6)', thickness: '0,5', weight: '30,0', quantity: '33,33' },
  { name: 'Профлист оцинкованный Н 35 (1,05х6)', thickness: '0,6', weight: '36,6', quantity: '27,32' },
  { name: 'Профлист оцинкованный Н 35 (1,05х6)', thickness: '0,7', weight: '41,5', quantity: '24,10' },
  { name: 'Профлист оцинкованный Н 35 (1,05х6)', thickness: '0,8', weight: '47,4', quantity: '21,10' },
  { name: 'Профлист оцинкованный Н 35 (1,05х6)', thickness: '0,9', weight: '54,0', quantity: '18,52' },
  { name: 'Профлист оцинкованный Н 60 (0,9х6)', thickness: '0,5', weight: '30,0', quantity: '33,33' },
  { name: 'Профлист оцинкованный Н 60 (0,9х6)', thickness: '0,6', weight: '36,6', quantity: '27,32' },
  { name: 'Профлист оцинкованный Н 60 (0,9х6)', thickness: '0,7', weight: '41,5', quantity: '24,10' },
  { name: 'Профлист оцинкованный Н 60 (0,9х6)', thickness: '0,8', weight: '47,4', quantity: '21,10' },
  { name: 'Профлист оцинкованный Н 60 (0,9х6)', thickness: '0,9', weight: '54,0', quantity: '18,52' },
];

export function ProflistProducts() {
  const { language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [orderProduct, setOrderProduct] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ru: {
      title: 'Профлист оцинкованный',
      backText: 'Назад к каталогу',
      subtitle: 'Оцинкованные профлисты различных марок и толщин',
      tableTitle: 'Спецификации',
      tableHeaders: {
        name: 'Наименование',
        thickness: 'Толщина',
        weight: 'Вес 1 шт',
        quantity: 'Кол-во шт в тонне',
      },
      orderButton: 'Заказать'
    },
    kk: {
      title: 'Мырышталған профпарақ',
      backText: 'Каталогқа оралу',
      subtitle: 'Әртүрлі маркалар мен қалыңдықтағы мырышталған профпарақтар',
      tableTitle: 'Спецификациялар',
      tableHeaders: {
        name: 'Атауы',
        thickness: 'Қалыңдығы',
        weight: '1 дана салмағы',
        quantity: 'Тоннадағы даналар саны',
      },
      orderButton: 'Тапсырыс беру'
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
          <p className="text-lg text-slate-500">{text.subtitle}</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">{text.tableTitle}</h2>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-[1fr_100px_100px_140px_100px] gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-500">
            <span>{text.tableHeaders.name}</span>
            <span className="text-center">{text.tableHeaders.thickness}</span>
            <span className="text-center">{text.tableHeaders.weight}</span>
            <span className="text-center">{text.tableHeaders.quantity}</span>
            <span className="text-center"></span>
          </div>

          {proflistSpecs.map((spec, index) => {
            const fullName = `${spec.name}, толщина ${spec.thickness} мм`;

            return (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[1fr_100px_100px_140px_100px] gap-2 sm:gap-4 items-center px-6 py-4 border-b border-slate-100 last:border-b-0 hover:bg-blue-50/50 transition-colors"
              >
                <div>
                  <span className="font-medium text-slate-900">{spec.name}</span>
                </div>

                <div className="text-center">
                  <span className="text-slate-600">{spec.thickness}</span>
                </div>

                <div className="text-center">
                  <span className="text-slate-600">{spec.weight}</span>
                </div>

                <div className="text-center">
                  <span className="text-slate-600">{spec.quantity}</span>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setOrderProduct(fullName)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{text.orderButton}</span>
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
