import { motion, LayoutGroup } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useParallax } from '../hooks/useParallax';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Download } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { TypewriterUnderline } from './ui/typewriter-underline';

export function AnimatedHero() {
  const { t } = useI18n();
  const parallaxOffset = useParallax(0.3);
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 opacity-30 will-change-transform"
        style={{
          backgroundImage: `url('/1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80" />

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            2018 жылдан бері / С 2018 года
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight tracking-wide"
        >
          <span className="block text-left max-w-4xl mx-auto px-4">
            {t('hero.title')}{' '}
            <TypewriterUnderline
              words={t('hero.rotatingWords') as string[]}
              className="text-white font-bold"
              typingSpeed={100}
              pauseDuration={500}
            />
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center px-4">
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            <InteractiveHoverButton
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                const contactsSection = document.getElementById('contacts');
                if (contactsSection) {
                  window.location.hash = '#contacts?message=' + encodeURIComponent('Хочу получить консультацию');
                  contactsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              text={t('hero.ctaPrimary')}
              variant="primary"
              className="shadow-lg shadow-blue-600/20"
            />
          </motion.div>

          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            <InteractiveHoverButton
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                const contactsSection = document.getElementById('contacts');
                if (contactsSection) {
                  window.location.hash = '#contacts?message=' + encodeURIComponent('Отправьте пожалуйста прайс лист');
                  contactsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              text={t('hero.ctaSecondary')}
              icon={<Download className="w-4 h-4" />}
              variant="secondary"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [0, 10, 0],
              }
        }
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-400/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, 12, 0],
                  }
            }
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
