import { motion, LayoutGroup } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { TextRotate } from './ui/text-rotate';

export function AnimatedHero() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const handleWhatsApp = () => {
    const phone = '77711372864';
    const text = encodeURIComponent('Здравствуйте! Хочу получить консультацию и прайс-лист.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-50">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.div variants={itemVariants} className="inline-block mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              2018 жылдан бері / С 2018 года
            </span>
          </motion.div>

          <LayoutGroup>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-5 leading-tight tracking-wide flex flex-wrap items-center gap-2 sm:gap-3"
              layout
            >
              <motion.span layout transition={{ type: "spring", damping: 30, stiffness: 400 }}>
                {t('hero.title')}
              </motion.span>
              <TextRotate
                texts={t('hero.rotatingWords') as string[]}
                mainClassName="text-white px-3 sm:px-4 bg-blue-600 overflow-hidden py-1 sm:py-2 justify-center rounded-lg shadow-lg shadow-blue-600/30"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </motion.h1>
          </LayoutGroup>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={itemVariants}>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-2xl shadow-xl shadow-green-500/30 hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <img src="/wp_icon.png" alt="" className="w-6 h-6 filter brightness-0 invert" />
              {t('hero.ctaWhatsApp')}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
