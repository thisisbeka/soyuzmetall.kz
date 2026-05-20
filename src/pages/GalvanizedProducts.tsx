import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QuickOrderModal } from '../components/QuickOrderModal';

interface ProductSpec {
  name: string;
  dimensions: string;
  weight: number;
  quantity: number;
}

const galvanizedSpecs: ProductSpec[] = [
  { name: 'Лист 0,25 мм', dimensions: '1000 х 2000', weight: 3.95, quantity: 253.16 },
  { name: 'Лист 0,3 мм', dimensions: '1000 х 2000', weight: 4.74, quantity: 20.75 },
  { name: 'Лист 0,35 мм', dimensions: '1000 х 2000', weight: 5.53, quantity: 180.83 },
  { name: 'Лист 0,4 мм', dimensions: '1000 х 2000', weight: 6.32, quantity: 158.23 },
  { name: 'Лист 0,4 мм', dimensions: '1250 х 2500', weight: 9.88, quantity: 101.21 },
  { name: 'Лист 0,45 мм', dimensions: '1000 х 2000', weight: 7.11, quantity: 140.65 },
  { name: 'Лист 0,45 мм', dimensions: '1250 х 2500', weight: 11.50, quantity: 86.96 },
  { name: 'Лист 0,5 мм', dimensions: '1000 х 2000', weight: 7.90, quantity: 126.58 },
  { name: 'Лист 0,5 мм', dimensions: '1250 х 2500', weight: 12.50, quantity: 80.00 },
  { name: 'Лист 0,6 мм', dimensions: '1250 х 2500', weight: 14.50, quantity: 68.97 },
  { name: 'Лист 0,65 мм', dimensions: '1250 х 2500', weight: 16.10, quantity: 62.11 },
  { name: 'Лист 0,7 мм', dimensions: '1250 х 2500', weight: 17.30, quantity: 57.80 },
  { name: 'Лист 0,8 мм', dimensions: '1250 х 2500', weight: 19.75, quantity: 50.63 },
  { name: 'Лист 0,85 мм', dimensions: '1250 х 2500', weight: 21.00, quantity: 47.62 },
  { name: 'Лист 0,9 мм', dimensions: '1250 х 2500', weight: 22.22, quantity: 45.00 },
  { name: 'Лист 0,95 мм', dimensions: '1250 х 2500', weight: 23.50, quantity: 42.55 },
  { name: 'Лист 1,0 мм', dimensions: '1250 х 2500', weight: 25.30, quantity: 39.53 },
  { name: 'Лист 1,5 мм', dimensions: '1250 х 2500', weight: 37.00, quantity: 27.03 },
  { name: 'Лист 1,2 мм', dimensions: '1250 х 2500', weight: 31.00, quantity: 32.26 },
  { name: 'Лист 1,95 мм', dimensions: '1250 х 2500', weight: 48.20, quantity: 20.75 },
  { name: 'Лист 2,0 мм', dimensions: '1250 х 2500', weight: 50.00, quantity: 20.00 },
];

export function GalvanizedProducts() {
  const { language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [orderProduct, setOrderProduct] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ru: {
      title: 'Оцинкованный лист',
      backText: 'Назад к каталогу',
      subtitle: 'Оцинкованные листы различных толщин и размеров',
      description: 'Оцинкованный лист -- это стальной лист, покрытый слоем цинка для защиты от коррозии. Продукт отличается высокой прочностью, долговечностью и устойчивостью к воздействию внешних факторов. Он широко используется в строительстве, автомобилестроении и бытовой технике. Благодаря отличной формуемости и сварочным характеристикам, оцинкованный лист идеально подходит для создания разнообразных конструкций и деталей.',
      characteristics: 'Характеристики:',
      specs: [
        'Толщина: от 0.3 до 3 мм',
        'Ширина: от 1000 до 1500 мм',
        'Длина: до 6000 мм',
        'Покрытие: цинк от 100 до 275 г/м2'
      ],
      tableTitle: 'Спецификации',
      tableHeaders: {
        name: 'Наименование',
        dimensions: 'Длина 1 шт',
        weight: 'Вес 1 шт',
        quantity: 'Кол-во штук в тонне',
        action: ''
      },
      orderButton: 'Заказать'
    },
    kk: {
      title: 'Мырышталған парақ',
      backText: 'Каталогқа оралу',
      subtitle: 'Әртүрлі қалыңдық пен өлшемдегі мырышталған парақтар',
      description: 'Мырышталған парақ -- тоттанудан қорғау үшін мырыш қабатымен жабылған болат парақ. Өнім жоғары беріктігімен, ұзақ мерзімділігімен және сыртқы факторлардың әсеріне төзімділігімен ерекшеленеді. Ол құрылыста, автомобиль өндірісінде және тұрмыстық техникада кеңінен қолданылады. Тамаша қалыптасу және дәнекерлеу сипаттамаларына байланысты мырышталған парақ әртүрлі конструкциялар мен бөлшектерді жасау үшін өте қолайлы.',
      characteristics: 'Сипаттамалары:',
      specs: [
        'Қалыңдығы: 0.3-тен 3 мм-ге дейін',
        'Ені: 1000-нен 1500 мм-ге дейін',
        'Ұзындығы: 6000 мм-ге дейін',
        'Жабын: мырыш 100-ден 275 г/м2-ге дейін'
      ],
      tableTitle: 'Спецификациялар',
      tableHeaders: {
        name: 'Атауы',
        dimensions: '1 дана ұзындығы',
        weight: '1 дана салмағы',
        quantity: 'Тоннадағы даналар саны',
        action: ''
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

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-8">
          <p className="text-slate-600 leading-relaxed mb-6">{text.description}</p>
          <h3 className="text-lg font-bold text-slate-900 mb-3">{text.characteristics}</h3>
          <ul className="space-y-2">
            {text.specs.map((spec, index) => (
              <li key={index} className="text-slate-600 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">{text.tableTitle}</h2>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-[1fr_120px_100px_140px_100px] gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-500">
            <span>{text.tableHeaders.name}</span>
            <span className="text-center">{text.tableHeaders.dimensions}</span>
            <span className="text-center">{text.tableHeaders.weight}</span>
            <span className="text-center">{text.tableHeaders.quantity}</span>
            <span className="text-center">{text.tableHeaders.action}</span>
          </div>

          {galvanizedSpecs.map((spec, index) => {
            const fullName = `${spec.name} (${spec.dimensions})`;

            return (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[1fr_120px_100px_140px_100px] gap-2 sm:gap-4 items-center px-6 py-4 border-b border-slate-100 last:border-b-0 hover:bg-blue-50/50 transition-colors"
              >
                <div>
                  <span className="font-medium text-slate-900">{spec.name}</span>
                </div>

                <div className="text-center">
                  <span className="text-slate-600">{spec.dimensions}</span>
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
