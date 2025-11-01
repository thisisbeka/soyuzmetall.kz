import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface SquareCard {
  nameRu: string;
  nameKk: string;
  image: string;
}

const squareCards: SquareCard[] = [
  { nameRu: 'Квадрат 10 x 10 (Россия)', nameKk: 'Квадрат 10 x 10 (Ресей)', image: '/kvadrat.jpg' },
  { nameRu: 'Квадрат 12 x 12 (Россия)', nameKk: 'Квадрат 12 x 12 (Ресей)', image: '/kvadrat.jpg' },
  { nameRu: 'Квадрат 14 x 14 (Россия)', nameKk: 'Квадрат 14 x 14 (Ресей)', image: '/kvadrat.jpg' },
  { nameRu: 'Квадрат 16 x 16 (Россия)', nameKk: 'Квадрат 16 x 16 (Ресей)', image: '/kvadrat.jpg' },
  { nameRu: 'Квадрат 20 x 20 (Россия)', nameKk: 'Квадрат 20 x 20 (Ресей)', image: '/kvadrat.jpg' },
];

export function SquareProducts() {
  const { t, language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ru: {
      title: 'Квадрат стальной',
      backText: 'Назад к каталогу',
      description: {
        intro: 'Стальной горячекатаный квадрат является популярным видом металлопроката, используемым преимущественно в области строительства. Создаваемый из специальной заготовки на прокатном стане (согласно требованиям Государственного стандарта качества), он обладает строгими геометрическими размерами, а также определенными физическими и механическими характеристиками.',
        offer: 'Если вы собираетесь купить квадрат стальной, то сделать это можете уже прямо сейчас, обратившись к специалистам нашей компании «МеталлоСклад». У нас представлен наиболее широкий выбор качественного металлопроката от самых известных и проверенных заводов-изготовителей, а также действует большое количество филиалов, расположенных в самых различных частях Казахстана.',
        whatIsTitle: 'Что такое квадрат стальной горячекатаный?',
        whatIs: 'Это выполненный из стального сплава прут, обладающий квадратным сечением и толщиной от 0,6 до 20 сантиметров. Он не обладает внутренней полостью, благодаря чему отличается высокой степенью жесткости и соответствует самым высоким требованиям в плане прочности и надежности. При его изготовлении применяются разные виды стали, в том числе легированные и рядовые, а само производство металлопроката осуществляется согласно регламентированным требованиям ГОСТ 2591-88. Что касается длины такого изделия, то она может быть различной и, как правило, варьируется от 1 до 12 метров.',
        applicationTitle: 'Где применяется такой материал?',
        application: 'Благодаря своим уникальным эксплуатационным свойствам стальной квадрат получил широкое распространение в различных сферах деятельности, а именно:',
        construction: 'В области строительства. Высокая прочность такого элемента позволяет применять его при создании несущих конструкций во время возведения частных домов и коттеджей, многоэтажных жилых строений, а также промышленных и административных зданий. Чаще всего он используется при укреплении перекрытий, террас или лестниц;',
        industry: 'В области промышленности. Стальной квадрат применяется при изготовлении всевозможных конструкций из металла, в том числе ограждений, ворот, лавок, защитных решеток и многого другого. Также такой вид металлопроката используется на производстве металлических деталей (втулок, шайб, клемм), предназначенных для эксплуатации в области машиностроения.',
        priceTitle: 'Мы предлагаем наиболее выгодную цену за метр металлического квадрата!',
        price: 'Если вы не знаете, где именно лучше всего купить квадрат металлический, то можете смело обращаться к специалистам нашей компании «МеталлоСклад». Мы обладаем огромным опытом в сфере продажи изделий металлопроката, а также предоставляем для своих клиентов дополнительные услуги, а именно:',
        features: [
          'Гарантию качества на все изделия из металла, подкрепленную соответствующей технической документацией;',
          'Квалифицированную помощь в выборе продукции;',
          'Большое количество наших представительств в разных уголках страны;',
          'Ответственность, надежность и пунктуальность;',
          'Широкий спектр дополнительных услуг (резка, рубка изделий и их поставка разными видами транспорта);',
          'Наличие собственного производства;',
          'Огромный выбор других видов металлопроката.'
        ]
      }
    },
    kk: {
      title: 'Болат квадрат',
      backText: 'Каталогқа оралу',
      description: {
        intro: 'Болаттан жасалған ыстық илемденген квадрат құрылыста негізінен қолданылатын металл илемнің танымал түрі болып табылады. Илем станында арнайы дайындамадан жасалған (Мемлекеттік сапа стандартының талаптарына сәйкес), ол қатаң геометриялық өлшемдерге, сондай-ақ белгілі бір физикалық және механикалық сипаттамаларға ие.',
        offer: 'Егер сіз болат квадратты сатып алғыңыз келсе, дәл қазір біздің «МеталлоСклад» компаниясының мамандарына хабарласу арқылы мұны жасай аласыз. Бізде ең танымал және тексерілген зауыттар-өндірушілерден сапалы металл илемнің ең кең таңдауы, сондай-ақ Қазақстанның әртүрлі бөліктерінде орналасқан филиалдардың үлкен саны бар.',
        whatIsTitle: 'Болат ыстық илемденген квадрат дегеніміз не?',
        whatIs: 'Бұл қалыңдығы 0,6-дан 20 сантиметрге дейін болатын квадрат қимасы бар болат қорытпадан жасалған стержень. Оның ішкі қуысы жоқ, соның арқылы қатаңдықтың жоғары деңгейімен ерекшеленеді және беріктік пен сенімділік тұрғысынан ең жоғары талаптарға сәйкес келеді. Оны өндіру кезінде легирленген және қарапайым болаттардың әртүрлі түрлері қолданылады, ал металл илемнің өндірісі МЕСТ 2591-88 реттелген талаптарына сәйкес жүзеге асырылады. Мұндай өнімнің ұзындығына келетін болсақ, ол әртүрлі болуы мүмкін және әдетте 1-ден 12 метрге дейін өзгереді.',
        applicationTitle: 'Мұндай материал қайда қолданылады?',
        application: 'Өзінің бірегей пайдалану қасиеттерінің арқасында болат квадрат әртүрлі қызмет салаларында кең таралды, атап айтқанда:',
        construction: 'Құрылыс саласында. Мұндай элементтің жоғары беріктігі оны жеке үйлер мен коттеджелерді, көп қабатты тұрғын ғимараттарды, сондай-ақ өнеркәсіптік және әкімшілік ғимараттарды салу кезінде тіреуіш конструкцияларды жасау кезінде қолдануға мүмкіндік береді. Жиі ол төбелер, терраса немесе баспалдақтарды нығайту кезінде қолданылады;',
        industry: 'Өнеркәсіп саласында. Болат квадрат қоршаулар, қақпалар, орындықтар, қорғаныс торлар және т.б. металдан жасалған әртүрлі конструкцияларды дайындау кезінде қолданылады. Сондай-ақ бұл металл илемнің түрі машина жасауда пайдалануға арналған металл бөлшектерді (втулкалар, шайбалар, қысқыштар) өндіруде қолданылады.',
        priceTitle: 'Біз металл квадратының метрі үшін ең тиімді бағаны ұсынамыз!',
        price: 'Егер сіз металл квадратты қайдан сатып алу керектігін білмесеңіз, онда біздің «МеталлоСклад» компаниясының мамандарына сенімді түрде жүгіне аласыз. Біз металл илем бұйымдарын сату саласында үлкен тәжірибеге иеміз, сондай-ақ өз клиенттеріміз үшін қосымша қызметтер ұсынамыз, атап айтқанда:',
        features: [
          'Тиісті техникалық құжаттамамен қамтамасыз етілген барлық металл бұйымдарына сапа кепілдігі;',
          'Өнімді таңдауда білікті көмек;',
          'Еліміздің әртүрлі бұрыштарында біздің өкілдіктеріміздің үлкен саны;',
          'Жауапкершілік, сенімділік және уақытты сақтау;',
          'Қосымша қызметтердің кең спектрі (кесу, бұйымдарды кесу және оларды әртүрлі көлік түрлерімен жеткізу);',
          'Өзіндік өндірістің болуы;',
          'Металл илемнің басқа түрлерінің үлкен таңдауы.'
        ]
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
            backgroundImage: `url('/kvadrat.png')`,
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

          <div className="mb-16">
            <motion.h1
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
            >
              {text.title}
            </motion.h1>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mb-16 space-y-6"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {text.description.intro}
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {text.description.offer}
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {text.description.whatIsTitle}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {text.description.whatIs}
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {text.description.applicationTitle}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  {text.description.application}
                </p>
                <div className="space-y-4">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {text.description.construction}
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {text.description.industry}
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {text.description.priceTitle}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {text.description.price}
                </p>
                <ul className="space-y-3">
                  {text.description.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-slate-300 text-lg leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {language === 'kk' ? 'Өнімдер' : 'Продукция'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {squareCards.map((card, index) => {
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
        </div>
      </section>
    </div>
  );
}
