import { motion } from 'framer-motion';
import { X, Phone, Download, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'products', href: '#products' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'contacts', href: '#contacts' },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: prefersReducedMotion ? 0 : 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.3 }
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 z-[100] lg:hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0A1124]/95 via-[#0F1829]/95 to-[#0A1124]/95 backdrop-blur-xl"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
            linear-gradient(225deg, rgba(205, 170, 109, 0.03) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          animation: prefersReducedMotion ? 'none' : 'gradient-shift 12s ease infinite'
        }}
        onClick={onClose}
      />

      <motion.div
        className="relative h-full overflow-y-auto"
        variants={containerVariants}
      >
        <div className="min-h-full flex flex-col">
          <motion.div
            className="flex items-center justify-between p-6 border-b border-white/10"
            variants={itemVariants}
          >
            <motion.img
              src="/logo_soyuz_new.png"
              alt="Союз Металл - металлопрокат Казахстан"
              className="h-14 w-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
            />

            <motion.button
              onClick={onClose}
              className="relative group p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-red-500/20 hover:border-red-400/30"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, rotate: 90 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <X className="w-6 h-6 text-slate-200 group-hover:text-red-400 transition-colors" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/20 group-hover:to-red-600/20 transition-all duration-300" />
            </motion.button>
          </motion.div>

          <div className="flex-1 px-6 py-8 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={onClose}
                variants={itemVariants}
                className="group relative flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/0 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-[#CDAA6D]/40 hover:bg-white/10 overflow-hidden"
                whileHover={prefersReducedMotion ? {} : { x: 8 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#CDAA6D]/0 via-[#CDAA6D]/10 to-[#CDAA6D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ animation: prefersReducedMotion ? 'none' : 'shimmer 2s ease-in-out infinite' }}
                />

                <span className="relative text-lg font-medium text-slate-200 group-hover:text-white transition-colors z-10">
                  {t(`nav.${item.key}`)}
                </span>

                <ChevronRight className="w-5 h-5 text-[#CDAA6D]/60 group-hover:text-[#CDAA6D] transform group-hover:translate-x-1 transition-all z-10" />

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="px-6 py-6 space-y-3 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20"
            variants={itemVariants}
          >
            <motion.a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                const contactsSection = document.getElementById('contacts');
                if (contactsSection) {
                  window.location.hash = '#contacts?message=' + encodeURIComponent('Хочу получить консультацию');
                  contactsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative w-full px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#005EFF] to-[#3182CE] text-white font-medium text-sm overflow-hidden shadow-lg shadow-blue-500/20 active:shadow-blue-500/40 block"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ animation: prefersReducedMotion ? 'none' : 'shimmer 2s ease-in-out infinite' }}
              />
              <span className="relative flex items-center justify-center gap-2 z-10">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{t('hero.ctaPrimary')}</span>
              </span>
            </motion.a>

            <motion.a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                const contactsSection = document.getElementById('contacts');
                if (contactsSection) {
                  window.location.hash = '#contacts?message=' + encodeURIComponent('Отправьте пожалуйста прайс лист');
                  contactsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/20 text-slate-200 font-medium text-sm backdrop-blur-md overflow-hidden hover:border-[#CDAA6D]/60 hover:bg-white/10 transition-all duration-300 active:bg-white/15 block"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#CDAA6D]/0 via-[#CDAA6D]/10 to-[#CDAA6D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center justify-center gap-2 z-10">
                <Download className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{t('hero.ctaSecondary')}</span>
              </span>
            </motion.a>

            <div className="flex justify-center pt-2">
              <LanguageSwitcher />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3);
          }
        }
      `}</style>
    </motion.div>
  );
}
