import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { FileText, Calculator, CreditCard, Package } from 'lucide-react';

const icons = [FileText, Calculator, CreditCard, Package];

export function DeliveryTimeline() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const steps = t('delivery.steps');

  return (
    <section className="relative py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-slate-900 mb-12"
        >
          {t('delivery.title')}
        </motion.h2>

        <div className="relative">
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-blue-200 hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step: any, index: number) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative z-10 w-20 h-20 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
