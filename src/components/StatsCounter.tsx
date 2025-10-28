import { useI18n } from '../i18n/i18n';
import { useCountUp } from '../hooks/useCountUp';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function StatsCounter() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const stats = t('stats.items');

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 will-change-auto"
        style={{
          backgroundImage: `url('/5.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          {t('stats.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative text-center group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300">
        <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
          {count}
          {stat.suffix}
        </div>
        <div className="text-slate-400 text-lg">{stat.label}</div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
