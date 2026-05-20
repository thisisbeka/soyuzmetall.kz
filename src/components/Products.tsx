import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ProductCard } from './ProductCard';

export function Products() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const categories = t('products.categories');

  return (
    <section id="products" className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3"
          >
            {t('products.title')}
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500"
          >
            {t('products.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.slice(0, 8).map((category: any, index: number) => (
            <ProductCard key={index} name={category.name} description={category.description} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
