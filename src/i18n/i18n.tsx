import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import ruTranslations from './locales/ru.json';
import kkTranslations from './locales/kk.json';

export type Locale = 'ru' | 'kk';

const translations = {
  ru: ruTranslations,
  kk: kkTranslations,
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const getInitialLocale = (): Locale => {
  const stored = localStorage.getItem('locale');
  if (stored === 'ru' || stored === 'kk') return stored;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('kk')) return 'kk';

  return 'ru';
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return {
    ...context,
    language: context.locale,
  };
}
