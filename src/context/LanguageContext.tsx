
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    // Check if language preference is saved in localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage === 'en' || savedLanguage === 'ru') {
      return savedLanguage as Language;
    }
    
    // Auto-detect browser/OS language
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';
    const languageCode = browserLanguage.toLowerCase();
    
    // If Russian language detected, return 'ru', otherwise default to 'en'
    return languageCode.startsWith('ru') ? 'ru' : 'en';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
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
