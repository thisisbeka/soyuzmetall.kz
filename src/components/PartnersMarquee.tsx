import { motion, useAnimationControls } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Building2 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const partnerNames = [
  'Nomad group',
  'Ulytau Group',
  'KazBuild Development',
  'Saba group',
  'Bazis-A',
  'Корпорация Век',
  'Барыс Строй 2021',
  'Gask Construction',
];

export function PartnersMarquee() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion || isHovered) return;

    const animate = async () => {
      await controls.start({
        x: [0, -1920],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          },
        },
      });
    };

    animate();
  }, [controls, prefersReducedMotion, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="about" className="relative py-20 bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 will-change-auto"
        style={{
          backgroundImage: `url('/3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          {t('partners.title')}
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 text-center"
        >
          {t('partners.subtitle')}
        </motion.p>
      </div>

      <div className="relative z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            animate={controls}
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1920, right: 0 }}
            dragElastic={0.1}
            onDragStart={handleMouseEnter}
            onDragEnd={handleMouseLeave}
          >
            {[...partnerNames, ...partnerNames, ...partnerNames].map((name, index) => (
              <motion.div
                key={index}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -5 }}
                className="flex-shrink-0 w-64 h-32 bg-slate-900 rounded-xl border border-slate-700 hover:border-blue-500/50 flex items-center justify-center gap-3 px-6 transition-colors"
              >
                <Building2 className="w-8 h-8 text-blue-500" />
                <span className="text-white font-semibold text-center">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
