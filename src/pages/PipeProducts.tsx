import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QuickOrderModal } from '../components/QuickOrderModal';

interface PipeCard {
  nameRu: string;
  nameKk: string;
  image: string;
}

const pipeCards: PipeCard[] = [
  { nameRu: 'Водогазопроводная труба', nameKk: 'Су-газ құбыры', image: '/vgp-truba-2-370x262.jpg' },
  { nameRu: 'Плоскоовальная труба стальная', nameKk: 'Жалпақ-сопақ болат құбыр', image: '/ploskoovalnie_trubi-370x262.jpg' },
  { nameRu: 'Профильная труба', nameKk: 'Профильді құбыр', image: '/profilnye-truby.jpg' },
  { nameRu: 'Электросварная труба', nameKk: 'Электр дәнекерленген құбыр', image: '/elektrosvarnye-truby.jpg' },
  { nameRu: 'Бесшовные трубы', nameKk: 'Тігіссіз құбырлар', image: '/besshovnye-truby.jpg' },
];

export function PipeProducts() {
  const { language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [orderProduct, setOrderProduct] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ru: {
      title: 'Металлические трубы',
      backText: 'Назад к каталогу',
      subtitle: 'Трубы различных типов и назначений',
      intro: {
        paragraph1: 'Металлические трубы -- это основа множества технологических процессов и строительных решений. Их применяют в транспортировке жидкостей и газов, создании каркасов зданий, производстве оборудования, машиностроении и многих других отраслях.',
        paragraph2: 'Благодаря высокой прочности, универсальности и долговечности, они востребованы как в частном строительстве, так и на крупных промышленных объектах. Современный рынок трубной продукции Казахстана предлагает разнообразные варианты по форме, составу, технологии изготовления и назначению, что позволяет подобрать оптимальное решение под конкретные задачи. Надёжность таких решений во многом зависит от качества самой продукции и ее соответствия установленным нормативам.',
        paragraph3: 'Компания ТОО «Стальная марка» предоставляет широкий ассортимент сертифицированных стальных труб, гарантируя соответствие строгим требованиям стандартов качества и потребностям клиентов в различных сферах применения.'
      },
      classification: {
        title: 'Классификация стальных труб',
        byMethod: {
          title: 'По методу производства',
          description: 'Метод изготовления влияет на прочностные характеристики и область применения стальных труб, определяя их эксплуатационные свойства.',
          items: [
            { title: 'Труба бесшовная', text: 'Изготавливается методом горячего или холодного деформирования, что обеспечивает высокую прочность и однородность металла.' },
            { title: 'Труба электросварная', text: 'Создается путем сварки металлических полос. Этот метод делает её более доступной по цене при сохранении необходимых технических характеристик.' }
          ]
        },
        byShape: {
          title: 'По форме сечения',
          description: 'Форма сечения трубы напрямую связана с её конструкционной функцией и устойчивостью к нагрузкам.',
          items: [
            { title: 'Круглые трубы', text: 'Классический вариант. Широко применяется в трубопроводах и строительстве.' },
            { title: 'Труба профильная', text: 'Имеет прямоугольное или квадратное сечение, используется в металлоконструкциях и строительстве.' }
          ]
        },
        byMaterial: {
          title: 'По материалу',
          description: 'Состав стали определяет устойчивость трубы к внешним воздействиям, коррозии и механическим нагрузкам.',
          items: [
            { title: 'Труба из углеродистой стали', text: 'Наиболее распространенный тип с хорошими механическими свойствами и доступной стоимостью.' },
            { title: 'Труба из низколегированной стали', text: 'Отличается повышенной прочностью и устойчивостью к коррозии.' },
            { title: 'Труба из нержавеющей стали', text: 'Применяется в условиях, требующих высокой коррозионной стойкости и эстетичного внешнего вида.' },
            { title: 'Труба оцинкованная', text: 'Покрыта защитным слоем цинка, что обеспечивает высокие антикоррозийные свойства и продлевает срок службы изделия.' }
          ]
        }
      }
    },
    kk: {
      title: 'Металл құбырлар',
      backText: 'Каталогқа оралу',
      subtitle: 'Әртүрлі типтегі және мақсаттағы құбырлар',
      intro: {
        paragraph1: 'Металл құбырлар -- бұл көптеген технологиялық процестер мен құрылыс шешімдерінің негізі. Олар сұйықтық пен газды тасымалдауда, ғимараттардың қаңқаларын жасауда, жабдықтарды өндіруде, машина жасауда және басқа да көптеген салаларда қолданылады.',
        paragraph2: 'Жоғары беріктігі, әмбебаптығы және ұзақ мерзімділігі арқасында олар жеке құрылыста да, ірі өнеркәсіптік нысандарда да сұранысқа ие. Қазақстанның қазіргі құбыр өнімдері нарығы пішіні, құрамы, өндіріс технологиясы және мақсаты бойынша әртүрлі нұсқаларды ұсынады, бұл нақты міндеттерге оңтайлы шешім таңдауға мүмкіндік береді. Мұндай шешімдердің сенімділігі көбінесе өнімнің сапасына және белгіленген нормативтерге сәйкестігіне байланысты.',
        paragraph3: '«Стальная марка» ЖШС компаниясы сертификатталған болат құбырлардың кең ассортиментін ұсынады, сапа стандарттарының қатаң талаптарына және клиенттердің әртүрлі қолдану салаларындағы қажеттіліктеріне сәйкестікті кепілдендіреді.'
      },
      classification: {
        title: 'Болат құбырларды жіктеу',
        byMethod: {
          title: 'Өндіріс әдісі бойынша',
          description: 'Өндіріс әдісі болат құбырлардың беріктік сипаттамалары мен қолдану аясына әсер етеді, олардың пайдалану қасиеттерін анықтайды.',
          items: [
            { title: 'Тігіссіз құбыр', text: 'Ыстық немесе суық деформациялау әдісімен жасалады, бұл металдың жоғары беріктігі мен біркелкілігін қамтамасыз етеді.' },
            { title: 'Электр дәнекерленген құбыр', text: 'Металл жолақтарды дәнекерлеу арқылы жасалады. Бұл әдіс қажетті техникалық сипаттамаларды сақтай отырып, оны бағасы бойынша қолжетімді етеді.' }
          ]
        },
        byShape: {
          title: 'Қимасының пішіні бойынша',
          description: 'Құбырдың қимасының пішіні оның конструкциялық функциясымен және жүктемелерге төзімділігімен тікелей байланысты.',
          items: [
            { title: 'Дөңгелек құбырлар', text: 'Классикалық нұсқа. Құбырлар мен құрылыста кеңінен қолданылады.' },
            { title: 'Профильді құбыр', text: 'Тікбұрышты немесе шаршы қимасы бар, металл конструкцияларда және құрылыста қолданылады.' }
          ]
        },
        byMaterial: {
          title: 'Материал бойынша',
          description: 'Болаттың құрамы құбырдың сыртқы әсерлерге, коррозияға және механикалық жүктемелерге төзімділігін анықтайды.',
          items: [
            { title: 'Көміртекті болаттан жасалған құбыр', text: 'Жақсы механикалық қасиеттері және қолжетімді құны бар ең кең таралған түрі.' },
            { title: 'Төмен қорытпалы болаттан жасалған құбыр', text: 'Жоғары беріктігімен және коррозияға төзімділігімен ерекшеленеді.' },
            { title: 'Тот баспайтын болаттан жасалған құбыр', text: 'Жоғары коррозияға төзімділік және эстетикалық сыртқы түр талап ететін жағдайларда қолданылады.' },
            { title: 'Мырышталған құбыр', text: 'Мырыш қорғаныс қабатымен жабылған, бұл жоғары коррозияға қарсы қасиеттерді қамтамасыз етеді және бұйымның қызмет ету мерзімін ұзартады.' }
          ]
        }
      }
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

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-10">
          <div className="hidden sm:grid grid-cols-[1fr_120px_120px] gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-500">
            <span>{language === 'kk' ? 'Атауы' : 'Наименование'}</span>
            <span className="text-center">{language === 'kk' ? 'Қолжетімділік' : 'Наличие'}</span>
            <span className="text-center">{language === 'kk' ? 'Тапсырыс' : 'Заказ'}</span>
          </div>

          {pipeCards.map((card, index) => {
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

        {/* Intro text section */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            {text.intro.paragraph1}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            {text.intro.paragraph2}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            {text.intro.paragraph3}
          </p>
        </div>

        {/* Classification section */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">{text.classification.title}</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">{text.classification.byMethod.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{text.classification.byMethod.description}</p>
              <ul className="space-y-3">
                {text.classification.byMethod.items.map((item, index) => (
                  <li key={index} className="text-slate-600">
                    <span className="font-semibold text-slate-900">{item.title}.</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-bold text-blue-600 mb-3">{text.classification.byShape.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{text.classification.byShape.description}</p>
              <ul className="space-y-3">
                {text.classification.byShape.items.map((item, index) => (
                  <li key={index} className="text-slate-600">
                    <span className="font-semibold text-slate-900">{item.title}.</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-bold text-blue-600 mb-3">{text.classification.byMaterial.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{text.classification.byMaterial.description}</p>
              <ul className="space-y-3">
                {text.classification.byMaterial.items.map((item, index) => (
                  <li key={index} className="text-slate-600">
                    <span className="font-semibold text-slate-900">{item.title}.</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
