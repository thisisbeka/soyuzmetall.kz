import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const partners: { name: string; logo?: string }[] = [
  { name: 'Nomad group' },
  { name: 'Ulytau Group', logo: '/Ulytau-Group.svg' },
  { name: 'KazBuild Development', logo: '/KazBuild_Development.webp' },
  { name: 'Saba group', logo: '/Saba_group.png' },
  { name: 'Bazis-A', logo: '/Bazis-A.webp' },
  { name: 'Корпорация Век', logo: '/Корпорация_Век.png' },
  { name: 'Барыс Строй 2021', logo: '/Барыс_Строй_2021.webp' },
  { name: 'Gask Construction' },
];

export function PartnersMarquee() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section id="about" className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-slate-900 mb-3"
        >
          {t('partners.title')}
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500 text-center"
        >
          {t('partners.subtitle')}
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className={`flex gap-6 ${prefersReducedMotion ? '' : 'animate-marquee'}`}>
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 h-28 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-2 px-5 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 max-w-[120px] object-contain"
                  />
                ) : (
                  <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                )}
                <span className="text-slate-700 font-medium text-xs text-center leading-tight">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
