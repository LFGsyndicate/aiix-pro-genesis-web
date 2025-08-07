import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section id="contact" className="bg-aiix-primary text-white py-20">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-5">
          <span className="en-content">Ready to Automate and Innovate?</span>
          <span className="ru-content">Готовы к автоматизации и инновациям?</span>
        </h2>
        
        <p className="text-base text-center max-w-3xl mx-auto mb-10">
          <span className="en-content">
            Let's discuss how AI agents can transform your workflow.
          </span>
          <span className="ru-content">
            Обсудим, как AI-агенты трансформируют ваши процессы.
          </span>
        </p>
        
        <div className="flex flex-col items-center mb-10">
          <div className="flex gap-8 mb-8">
            <a href="https://t.me/aiixpro_bot" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Send size={26} />
            </a>
            <a href="https://wa.me/79097878786" target="_blank" rel="noopener noreferrer" className="social-icon">
              <MessageCircle size={26} />
            </a>
            {/* <a href="https://www.youtube.com/@aiixpro" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Youtube size={26} />
            </a>
            <a href="https://www.instagram.com/aiixpro" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={26} />
            </a> */}
          </div>
          
          <a 
            href="https://t.me/ruhunt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-base learn-more-btn"
          >
            <span className="en-content">ORDER PROJECT</span>
            <span className="ru-content">ЗАКАЗ ПРОЕКТА</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
