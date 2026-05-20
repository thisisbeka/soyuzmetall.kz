import { useI18n } from '../i18n/i18n';
import { useCountUp } from '../hooks/useCountUp';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function StatsCounter() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const stats = t('stats.items');

  return (
    <section className="relative py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          {t('stats.title')}
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat: any, index: number) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: any; index: number }) {
  const { count, ref } = useCountUp({ end: parseInt(stat.value) });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref as any}
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-slate-400 text-sm sm:text-base">{stat.label}</div>
    </motion.div>
  );
}
