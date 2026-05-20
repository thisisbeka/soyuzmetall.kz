import { motion } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useI18n();

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'products', href: '#products' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'contacts', href: '#contacts' },
  ];

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const phone = '77711372864';
    const text = encodeURIComponent('Здравствуйте! Хочу получить консультацию и прайс-лист.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] lg:hidden"
    >
      <div className="absolute inset-0 bg-slate-900/98 backdrop-blur-xl" onClick={onClose} />

      <div className="relative h-full overflow-y-auto">
        <div className="min-h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
            <img
              src="/logo_soyuz_new.png"
              alt="Союз Металл"
              className="h-12 w-auto"
            />
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 px-6 py-6 space-y-1.5">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="text-lg font-medium">
                  {t(`nav.${item.key}`)}
                </span>
                <ChevronRight className="w-5 h-5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="px-6 py-6 space-y-3 border-t border-slate-700/50">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
            >
              <img src="/wp_icon.png" alt="" className="w-5 h-5 filter brightness-0 invert" />
              {t('hero.ctaWhatsApp')}
            </button>

            <div className="flex justify-center pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
