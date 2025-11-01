import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
  const { t, language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ru: {
      title: 'Оцинкованный лист',
      backText: 'Назад к каталогу',
      description: 'Оцинкованный лист – это стальной лист, покрытый слоем цинка для защиты от коррозии. Продукт отличается высокой прочностью, долговечностью и устойчивостью к воздействию внешних факторов. Он широко используется в строительстве, автомобилестроении и бытовой технике. Благодаря отличной формуемости и сварочным характеристикам, оцинкованный лист идеально подходит для создания разнообразных конструкций и деталей.',
      characteristics: 'Характеристики:',
      specs: [
        'Толщина: от 0.3 до 3 мм',
        'Ширина: от 1000 до 1500 мм',
        'Длина: до 6000 мм',
        'Покрытие: цинк от 100 до 275 г/м²'
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
      description: 'Мырышталған парақ – тоттанудан қорғау үшін мырыш қабатымен жабылған болат парақ. Өнім жоғары беріктігімен, ұзақ мерзімділігімен және сыртқы факторлардың әсеріне төзімділігімен ерекшеленеді. Ол құрылыста, автомобиль өндірісінде және тұрмыстық техникада кеңінен қолданылады. Тамаша қалыптасу және дәнекерлеу сипаттамаларына байланысты мырышталған парақ әртүрлі конструкциялар мен бөлшектерді жасау үшін өте қолайлы.',
      characteristics: 'Сипаттамалары:',
      specs: [
        'Қалыңдығы: 0.3-тен 3 мм-ге дейін',
        'Ені: 1000-нен 1500 мм-ге дейін',
        'Ұзындығы: 6000 мм-ге дейін',
        'Жабын: мырыш 100-ден 275 г/м²-ге дейін'
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
    <div className="min-h-screen bg-slate-900">
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 will-change-auto"
          style={{
            backgroundImage: `url('/metallicheskie-listy.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900" />

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
            <span>{text.backText}</span>
          </motion.button>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{text.title}</h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {text.description}
            </p>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{text.characteristics}</h2>
              <ul className="space-y-2">
                {text.specs.map((spec, index) => (
                  <li key={index} className="text-slate-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden"
          >
            <div className="p-6 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-white">{text.tableTitle}</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-4 text-slate-400 font-semibold">{text.tableHeaders.name}</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">{text.tableHeaders.dimensions}</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">{text.tableHeaders.weight}</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">{text.tableHeaders.quantity}</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">{text.tableHeaders.action}</th>
                  </tr>
                </thead>
                <tbody>
                  {galvanizedSpecs.map((spec, index) => (
                    <motion.tr
                      key={index}
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                      animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.02 }}
                      className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="p-4 text-slate-300">{spec.name}</td>
                      <td className="p-4 text-slate-300">{spec.dimensions}</td>
                      <td className="p-4 text-slate-300">{spec.weight}</td>
                      <td className="p-4 text-slate-300">{spec.quantity}</td>
                      <td className="p-4">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                          {text.orderButton}
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
