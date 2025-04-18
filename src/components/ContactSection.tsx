
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, MessageCircle, Twitter } from "lucide-react";

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section id="contact" className="bg-aiix-primary text-white py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="en-content">Ready to Automate and Innovate?</span>
          <span className="ru-content">Готовы к автоматизации и инновациям?</span>
        </h2>
        
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          <span className="en-content">
            Let's discuss how AI agents can transform your workflow.
          </span>
          <span className="ru-content">
            Давайте обсудим, как AI-агенты могут трансформировать ваши рабочие процессы.
          </span>
        </p>
        
        <div className="flex flex-col items-center mb-12">
          <div className="flex gap-8 mb-8">
            <a href="https://t.me/aiixpro" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Send size={32} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-icon">
              <MessageCircle size={32} />
            </a>
            <a href="https://twitter.com/aiixpro" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter size={32} />
            </a>
          </div>
          
          <a 
            href="https://t.me/aiixpro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            <span className="en-content">Contact Now</span>
            <span className="ru-content">Связаться сейчас</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
