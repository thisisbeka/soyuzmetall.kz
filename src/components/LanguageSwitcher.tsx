import { useI18n, Locale } from '../i18n/i18n';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const handleChange = (newLocale: Locale) => {
    if (newLocale !== locale) {
      setLocale(newLocale);
    }
  };

  return (
    <div className="relative flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
      {(['ru', 'kk'] as Locale[]).map((lang) => (
        <motion.button
          key={lang}
          onClick={() => handleChange(lang)}
          className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all overflow-hidden ${
            locale === lang
              ? 'text-white'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
        >
          {locale === lang && (
            <motion.div
              layoutId="activeLocale"
              className="absolute inset-0 bg-gradient-to-r from-[#004BFF] to-[#00C6FF] rounded-lg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{lang.toUpperCase()}</span>
        </motion.button>
      ))}
    </div>
  );
}
