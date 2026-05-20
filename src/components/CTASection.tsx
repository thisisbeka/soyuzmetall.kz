import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { MessageCircle } from 'lucide-react';

export function CTASection() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const handleWhatsApp = () => {
    const phone = '77711372864';
    const text = encodeURIComponent('Здравствуйте! Хочу начать сотрудничество.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-blue-100 mb-8"
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-2xl shadow-xl shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-6 h-6" />
            {t('cta.button')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
