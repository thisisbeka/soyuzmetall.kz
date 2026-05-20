import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Scissors, Wrench, Drill, Box, Truck, Headphones as HeadphonesIcon } from 'lucide-react';

const icons = [Scissors, Wrench, Drill, Box, Truck, HeadphonesIcon];

export function Services() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const services = t('services.items');

  return (
    <section id="services" className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md hover:bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-500 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
