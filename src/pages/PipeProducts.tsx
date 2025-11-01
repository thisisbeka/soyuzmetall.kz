import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
  const { t, language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ru: {
      title: 'Металлические трубы',
      backText: 'Назад к каталогу',
      intro: {
        paragraph1: 'Металлические трубы — это основа множества технологических процессов и строительных решений. Их применяют в транспортировке жидкостей и газов, создании каркасов зданий, производстве оборудования, машиностроении и многих других отраслях.',
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
      intro: {
        paragraph1: 'Металл құбырлар – бұл көптеген технологиялық процестер мен құрылыс шешімдерінің негізі. Олар сұйықтық пен газды тасымалдауда, ғимараттардың қаңқаларын жасауда, жабдықтарды өндіруде, машина жасауда және басқа да көптеген салаларда қолданылады.',
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
    <div className="min-h-screen bg-slate-900">
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 will-change-auto"
          style={{
            backgroundImage: `url('/truby.png')`,
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
              {pipeCards.map((card, index) => {
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
                        backgroundImage: `url('${card.image}')`,
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
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                {text.intro.paragraph1}
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                {text.intro.paragraph2}
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                {text.intro.paragraph3}
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-8">{text.classification.title}</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">{text.classification.byMethod.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{text.classification.byMethod.description}</p>
                  <ul className="space-y-3">
                    {text.classification.byMethod.items.map((item, index) => (
                      <li key={index} className="text-slate-300">
                        <span className="font-semibold text-white">{item.title}.</span> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-700 pt-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">{text.classification.byShape.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{text.classification.byShape.description}</p>
                  <ul className="space-y-3">
                    {text.classification.byShape.items.map((item, index) => (
                      <li key={index} className="text-slate-300">
                        <span className="font-semibold text-white">{item.title}.</span> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-700 pt-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">{text.classification.byMaterial.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{text.classification.byMaterial.description}</p>
                  <ul className="space-y-3">
                    {text.classification.byMaterial.items.map((item, index) => (
                      <li key={index} className="text-slate-300">
                        <span className="font-semibold text-white">{item.title}.</span> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
