import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const testimonials = t('testimonials.items');

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          {t('testimonials.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? {} : { opacity: 0, rotateY: -15 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={prefersReducedMotion ? {} : { rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-blue-500" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed italic relative z-10">"{testimonial.text}"</p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
