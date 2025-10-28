import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ProductCard } from './ProductCard';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

export function Products() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const categories = t('products.categories');

  return (
    <section id="products" className="relative py-20 bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 will-change-auto"
        style={{
          backgroundImage: `url('/4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            {t('products.title')}
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            {t('products.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories.slice(0, 8).map((category: any, index: number) => (
            <ProductCard key={index} name={category.name} description={category.description} index={index} />
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <InteractiveHoverButton
              href="https://drive.google.com/file/d/1bPU_s4-7mDMbLMOkKWEvHCl31T53YUoU/view?usp=sharing"
              text={t('products.viewAll')}
              variant="primary"
              className="shadow-lg shadow-blue-600/30 text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
