import { useI18n, Locale } from '../i18n/i18n';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const handleChange = (newLocale: Locale) => {
    if (newLocale !== locale) {
      setLocale(newLocale);
    }
  };

  return (
    <div className="relative flex items-center gap-1 p-1 rounded-lg bg-slate-100/80 backdrop-blur-sm border border-slate-200/50">
      {(['ru', 'kk'] as Locale[]).map((lang) => (
        <motion.button
          key={lang}
          onClick={() => handleChange(lang)}
          className={`relative px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
            locale === lang
              ? 'text-white'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {locale === lang && (
            <motion.div
              layoutId="activeLocale"
              className="absolute inset-0 bg-blue-600 rounded-md"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{lang.toUpperCase()}</span>
        </motion.button>
      ))}
    </div>
  );
}
