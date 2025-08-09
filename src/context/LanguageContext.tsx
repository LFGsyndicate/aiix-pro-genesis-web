
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    // 1) URL query param has highest priority (?lang=ru|en)
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'ru') {
      return urlLang as Language;
    }

    // 2) Detect from browser/OS language on each load
    const preferred = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    const code = preferred.toLowerCase();
    return code.startsWith('ru') ? 'ru' : 'en';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
