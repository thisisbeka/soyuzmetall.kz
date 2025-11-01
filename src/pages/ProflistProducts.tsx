import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ContactFormModal } from '../components/ContactFormModal';

interface ProductCard {
  nameRu: string;
  nameKk: string;
}

interface ProductSpec {
  name: string;
  thickness: string;
  weight: string;
  quantity: string;
}

const proflistCards: ProductCard[] = [
  { nameRu: 'Профлист оцинкованный Н 21', nameKk: 'Мырышталған профпарақ Н 21' },
  { nameRu: 'Профлист оцинкованный Н 35', nameKk: 'Мырышталған профпарақ Н 35' },
  { nameRu: 'Профлист оцинкованный Н 60', nameKk: 'Мырышталған профпарақ Н 60' },
];

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
  const { t, language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOrderClick = (spec: ProductSpec) => {
    const message = `Заказ: ${spec.name}, Толщина: ${spec.thickness} мм, Вес 1 шт: ${spec.weight} кг, Количество в тонне: ${spec.quantity} шт`;
    setSelectedProduct(message);
    setIsModalOpen(true);
  };

  const content = {
    ru: {
      title: 'Профлист оцинкованный',
      backText: 'Назад к каталогу',
      tableTitle: 'Спецификации',
      tableHeaders: {
        name: 'Наименование',
        thickness: 'толщина',
        weight: 'Вес 1 шт',
        quantity: 'Кол-во шт тонне',
      },
      orderButton: 'Заказать'
    },
    kk: {
      title: 'Мырышталған профпарақ',
      backText: 'Каталогқа оралу',
      tableTitle: 'Спецификациялар',
      tableHeaders: {
        name: 'Атауы',
        thickness: 'қалыңдығы',
        weight: '1 дана салмағы',
        quantity: 'Тоннадағы даналар саны',
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
            backgroundImage: `url('/oczinkovannye-proflisty.jpg')`,
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

          <div className="text-center mb-16">
            <motion.h1
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-12"
            >
              {text.title}
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {proflistCards.map((card, index) => {
                const cardName = language === 'kk' ? card.nameKk : card.nameRu;

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
                      delay: isMobile ? 0 : index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={prefersReducedMotion || isMobile ? {} : {
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
                    }}
                    className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden will-change-transform"
                  >
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 will-change-opacity"
                      style={{
                        backgroundImage: `url('/oczinkovannye-proflisty.jpg')`,
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

                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {cardName}
                      </h3>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
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
                    <th className="text-left p-4 text-slate-400 font-semibold">{text.tableHeaders.thickness}</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">{text.tableHeaders.weight}</th>
                    <th className="text-left p-4 text-slate-400 font-semibold">{text.tableHeaders.quantity}</th>
                    <th className="text-left p-4 text-slate-400 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {proflistSpecs.map((spec, index) => (
                    <motion.tr
                      key={index}
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                      animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.02 }}
                      className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="p-4 text-slate-300">{spec.name}</td>
                      <td className="p-4 text-slate-300">{spec.thickness}</td>
                      <td className="p-4 text-slate-300">{spec.weight}</td>
                      <td className="p-4 text-slate-300">{spec.quantity}</td>
                      <td className="p-4">
                        <button
                          onClick={() => handleOrderClick(spec)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                        >
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

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledMessage={selectedProduct}
      />
    </div>
  );
}
