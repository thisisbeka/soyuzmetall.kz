import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QuickOrderModal } from '../components/QuickOrderModal';

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
  const { language } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [orderProduct, setOrderProduct] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ru: {
      title: 'Квадрат стальной',
      backText: 'Назад к каталогу',
      subtitle: 'Стальной горячекатаный квадрат различных размеров',
      description: {
        intro: 'Стальной горячекатаный квадрат является популярным видом металлопроката, используемым преимущественно в области строительства. Создаваемый из специальной заготовки на прокатном стане (согласно требованиям Государственного стандарта качества), он обладает строгими геометрическими размерами, а также определенными физическими и механическими характеристиками.',
        offer: 'Если вы собираетесь купить квадрат стальной, то сделать это можете уже прямо сейчас, обратившись к специалистам нашей компании «СоюзМеталл». У нас представлен наиболее широкий выбор качественного металлопроката от самых известных и проверенных заводов-изготовителей, а также действует большое количество филиалов, расположенных в самых различных частях Казахстана.',
        whatIsTitle: 'Что такое квадрат стальной горячекатаный?',
        whatIs: 'Это выполненный из стального сплава прут, обладающий квадратным сечением и толщиной от 0,6 до 20 сантиметров. Он не обладает внутренней полостью, благодаря чему отличается высокой степенью жесткости и соответствует самым высоким требованиям в плане прочности и надежности. При его изготовлении применяются разные виды стали, в том числе легированные и рядовые, а само производство металлопроката осуществляется согласно регламентированным требованиям ГОСТ 2591-88. Что касается длины такого изделия, то она может быть различной и, как правило, варьируется от 1 до 12 метров.',
        applicationTitle: 'Где применяется такой материал?',
        application: 'Благодаря своим уникальным эксплуатационным свойствам стальной квадрат получил широкое распространение в различных сферах деятельности, а именно:',
        construction: 'В области строительства. Высокая прочность такого элемента позволяет применять его при создании несущих конструкций во время возведения частных домов и коттеджей, многоэтажных жилых строений, а также промышленных и административных зданий. Чаще всего он используется при укреплении перекрытий, террас или лестниц;',
        industry: 'В области промышленности. Стальной квадрат применяется при изготовлении всевозможных конструкций из металла, в том числе ограждений, ворот, лавок, защитных решеток и многого другого. Также такой вид металлопроката используется на производстве металлических деталей (втулок, шайб, клемм), предназначенных для эксплуатации в области машиностроения.',
        priceTitle: 'Мы предлагаем наиболее выгодную цену за метр металлического квадрата!',
        price: 'Если вы не знаете, где именно лучше всего купить квадрат металлический, то можете смело обращаться к специалистам нашей компании «СоюзМеталл». Мы обладаем огромным опытом в сфере продажи изделий металлопроката, а также предоставляем для своих клиентов дополнительные услуги, а именно:',
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
      subtitle: 'Әртүрлі өлшемдегі болат ыстық илемденген квадрат',
      description: {
        intro: 'Болаттан жасалған ыстық илемденген квадрат құрылыста негізінен қолданылатын металл илемнің танымал түрі болып табылады. Илем станында арнайы дайындамадан жасалған (Мемлекеттік сапа стандартының талаптарына сәйкес), ол қатаң геометриялық өлшемдерге, сондай-ақ белгілі бір физикалық және механикалық сипаттамаларға ие.',
        offer: 'Егер сіз болат квадратты сатып алғыңыз келсе, дәл қазір біздің «СоюзМеталл» компаниясының мамандарына хабарласу арқылы мұны жасай аласыз. Бізде ең танымал және тексерілген зауыттар-өндірушілерден сапалы металл илемнің ең кең таңдауы, сондай-ақ Қазақстанның әртүрлі бөліктерінде орналасқан филиалдардың үлкен саны бар.',
        whatIsTitle: 'Болат ыстық илемденген квадрат дегеніміз не?',
        whatIs: 'Бұл қалыңдығы 0,6-дан 20 сантиметрге дейін болатын квадрат қимасы бар болат қорытпадан жасалған стержень. Оның ішкі қуысы жоқ, соның арқасында қатаңдықтың жоғары деңгейімен ерекшеленеді және беріктік пен сенімділік тұрғысынан ең жоғары талаптарға сәйкес келеді. Оны өндіру кезінде легирленген және қарапайым болаттардың әртүрлі түрлері қолданылады, ал металл илемнің өндірісі МЕСТ 2591-88 реттелген талаптарына сәйкес жүзеге асырылады. Мұндай өнімнің ұзындығына келетін болсақ, ол әртүрлі болуы мүмкін және әдетте 1-ден 12 метрге дейін өзгереді.',
        applicationTitle: 'Мұндай материал қайда қолданылады?',
        application: 'Өзінің бірегей пайдалану қасиеттерінің арқасында болат квадрат әртүрлі қызмет салаларында кең таралды, атап айтқанда:',
        construction: 'Құрылыс саласында. Мұндай элементтің жоғары беріктігі оны жеке үйлер мен коттеджелерді, көп қабатты тұрғын ғимараттарды, сондай-ақ өнеркәсіптік және әкімшілік ғимараттарды салу кезінде тіреуіш конструкцияларды жасау кезінде қолдануға мүмкіндік береді. Жиі ол төбелер, терраса немесе баспалдақтарды нығайту кезінде қолданылады;',
        industry: 'Өнеркәсіп саласында. Болат квадрат қоршаулар, қақпалар, орындықтар, қорғаныс торлар және т.б. металдан жасалған әртүрлі конструкцияларды дайындау кезінде қолданылады. Сондай-ақ бұл металл илемнің түрі машина жасауда пайдалануға арналған металл бөлшектерді (втулкалар, шайбалар, қысқыштар) өндіруде қолданылады.',
        priceTitle: 'Біз металл квадратының метрі үшін ең тиімді бағаны ұсынамыз!',
        price: 'Егер сіз металл квадратты қайдан сатып алу керектігін білмесеңіз, онда біздің «СоюзМеталл» компаниясының мамандарына сенімді түрде жүгіне аласыз. Біз металл илем бұйымдарын сату саласында үлкен тәжірибеге иеміз, сондай-ақ өз клиенттеріміз үшін қосымша қызметтер ұсынамыз, атап айтқанда:',
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

          {squareCards.map((card, index) => {
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

        {/* Description content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {text.description.intro}
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              {text.description.offer}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {text.description.whatIsTitle}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {text.description.whatIs}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {text.description.applicationTitle}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              {text.description.application}
            </p>
            <div className="space-y-4">
              <p className="text-slate-600 text-lg leading-relaxed">
                {text.description.construction}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                {text.description.industry}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {text.description.priceTitle}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {text.description.price}
            </p>
            <ul className="space-y-3">
              {text.description.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                  <span className="text-slate-600 text-lg leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
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
