import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  enableVanta: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ enableVanta }) => {
  const { language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div 
        id="vanta-bg" 
        className="absolute inset-0"
        ref={(el) => {
          if (el && !el.hasAttribute('data-vanta-applied')) {
            el.setAttribute('data-vanta-applied', 'true');
            enableVanta();
          }
        }}
      ></div>
      
      <div className="hero-content container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
          <span className="en-content">Unlock the Power of AI Agents for Your Business</span>
          <span className="ru-content">Раскройте потенциал AI-агентов для вашего бизнеса</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          <span className="en-content">
            Automate tasks, boost efficiency, and drive growth with custom-built AI agents.
          </span>
          <span className="ru-content">
            Автоматизируйте задачи, повышайте эффективность и стимулируйте рост с помощью AI-агентов, разработанных специально для вас.
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg"
          >
            <span className="en-content">Get a Free Consultation</span>
            <span className="ru-content">Консультация</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-lg"
          >
            <span className="en-content">Learn More</span>
            <span className="ru-content">Узнать больше</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
