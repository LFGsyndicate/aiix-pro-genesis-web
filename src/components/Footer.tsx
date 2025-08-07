
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send } from "lucide-react";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aiix-darkblue text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm">
              <span className="en-content">
                © {currentYear} by DAO LFGsyndicate. All rights reserved.
              </span>
              <span className="ru-content">
                © {currentYear} DAO LFGsyndicate. Все права защищены.
              </span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href="https://aiix.pro/privacy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              <span className="en-content">Privacy Policy</span>
              <span className="ru-content">Политика конфиденциальности</span>
            </a>

            <div className="flex gap-6">
              <a href="https://t.me/aiixpro_bot" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Send size={20} />
              </a>
              {/* <a href="https://youtube.com/@aiixpro" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com/aiixpro" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={20} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
