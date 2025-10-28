import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

export function CTASection() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 will-change-auto"
        style={{
          backgroundImage: `url('/3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-300 mb-10"
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
        >
          <InteractiveHoverButton
            href="#contacts"
            text={t('cta.button')}
            variant="primary"
            className="shadow-lg shadow-blue-600/30 text-lg px-10 py-5 font-bold"
          />
        </motion.div>
      </div>
    </section>
  );
}
