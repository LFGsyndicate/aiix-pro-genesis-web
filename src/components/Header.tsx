import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  enableVanta?: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const {
    language,
    setLanguage
  } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-aiix-primary/90 backdrop-blur-md' : ''}`}>
      <div className="container mx-auto flex justify-between items-center h-[18px] px-[23px] py-[21px]">
        <div className="flex items-center md:hidden mr-4">
          <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'active-language' : 'inactive-language'} text-[10px] header-text`}>
            EN
          </button>
          <span className="text-white text-[10px] mx-1">|</span>
          <button onClick={() => setLanguage('ru')} className={`${language === 'ru' ? 'active-language' : 'inactive-language'} text-[10px] header-text`}>
            RU
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <a href="#" className="text-white text-xs font-bold header-text">AIix Pro</a>

        <nav className="hidden md:flex items-center space-x-6">
          <a onClick={() => scrollToSection('hero')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
            {language === 'en' ? 'Home' : 'Главная'}
          </a>
          <a onClick={() => scrollToSection('about')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
            {language === 'en' ? 'About' : 'О нас'}
          </a>
          <a onClick={() => scrollToSection('benefits')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
            {language === 'en' ? 'Benefits' : 'Преимущества'}
          </a>
          <a onClick={() => scrollToSection('use-cases')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
            {language === 'en' ? 'Use Cases' : 'Применения'}
          </a>
          <a onClick={() => scrollToSection('approach')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
            {language === 'en' ? 'Approach' : 'Подход'}
          </a>
          <a onClick={() => scrollToSection('testimonials')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
            {language === 'en' ? 'Testimonials' : 'Отзывы'}
          </a>
          <a onClick={() => scrollToSection('faq')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
            {language === 'en' ? 'FAQ' : 'ЧЗВ'}
          </a>
          <a onClick={() => scrollToSection('contact')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
            {language === 'en' ? 'Contact' : 'Контакты'}
          </a>
          
          <div className="flex items-center ml-4 space-x-2">
            <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'active-language' : 'inactive-language'} text-[10px]`}>
              EN
            </button>
            <span className="text-white text-[10px]">|</span>
            <button onClick={() => setLanguage('ru')} className={`${language === 'ru' ? 'active-language' : 'inactive-language'} text-[10px]`}>
              RU
            </button>
          </div>
        </nav>

        {mobileMenuOpen && <div className="md:hidden absolute top-[22px] left-0 right-0 bg-aiix-primary/90 backdrop-blur-md p-4">
          <nav className="flex flex-col space-y-3">
            <a onClick={() => scrollToSection('hero')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
              {language === 'en' ? 'Home' : 'Главная'}
            </a>
            <a onClick={() => scrollToSection('about')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
              {language === 'en' ? 'About' : 'О нас'}
            </a>
            <a onClick={() => scrollToSection('benefits')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
              {language === 'en' ? 'Benefits' : 'Преимущества'}
            </a>
            <a onClick={() => scrollToSection('use-cases')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
              {language === 'en' ? 'Use Cases' : 'Применения'}
            </a>
            <a onClick={() => scrollToSection('approach')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
              {language === 'en' ? 'Approach' : 'Подход'}
            </a>
            <a onClick={() => scrollToSection('testimonials')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
              {language === 'en' ? 'Testimonials' : 'Отзывы'}
            </a>
            <a onClick={() => scrollToSection('faq')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
              {language === 'en' ? 'FAQ' : 'ЧЗВ'}
            </a>
            <a onClick={() => scrollToSection('contact')} className="text-white hover:text-aiix-cyan cursor-pointer transition-colors nav-menu-text">
              {language === 'en' ? 'Contact' : 'Контакты'}
            </a>
            
            <div className="flex items-center space-x-2 pt-2 border-t border-white/20">
              <button onClick={() => {
                setLanguage('en');
                setMobileMenuOpen(false);
              }} className={`${language === 'en' ? 'active-language' : 'inactive-language'} text-[10px]`}>
                EN
              </button>
              <span className="text-white text-[10px]">|</span>
              <button onClick={() => {
                setLanguage('ru');
                setMobileMenuOpen(false);
              }} className={`${language === 'ru' ? 'active-language' : 'inactive-language'} text-[10px]`}>
                RU
              </button>
            </div>
          </nav>
        </div>}
      </div>
    </header>
  );
};

export default Header;
