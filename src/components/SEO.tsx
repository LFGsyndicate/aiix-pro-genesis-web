import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  noindex = false
}) => {
  const { language } = useLanguage();

  const defaultTitle = language === 'ru' 
    ? 'AIix Pro - Ведущая компания по разработке AI-агентов | Индивидуальные AI-решения'
    : 'AIix Pro - Leading AI Agent Development Company | Custom AI Solutions';

  const defaultDescription = language === 'ru'
    ? 'AIix Pro специализируется на разработке индивидуальных AI-агентов, интеграции Web3 и решениях интеллектуальной автоматизации. Трансформируйте свой бизнес с нашими экспертными услугами разработки AI.'
    : 'AIix Pro specializes in custom AI agent development, Web3 integration, and intelligent automation solutions. Transform your business with our expert AI development services.';

  const defaultKeywords = language === 'ru'
    ? 'AI-агенты, искусственный интеллект, индивидуальные AI-решения, автоматизация бизнеса, Web3, блокчейн AI, смарт-контракты, машинное обучение, разработка AI, интеллектуальные агенты'
    : 'AI agents, artificial intelligence, custom AI solutions, business automation, Web3, blockchain AI, smart contracts, machine learning, AI development, intelligent agents';

  const siteTitle = title ? `${title} | AIix Pro` : defaultTitle;

  return (
    <Helmet>
      <html lang={language} />
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Language alternatives */}
      <link rel="alternate" hrefLang="en" href="https://aiix.pro/?lang=en" />
      <link rel="alternate" hrefLang="ru" href="https://aiix.pro/?lang=ru" />
      <link rel="alternate" hrefLang="x-default" href="https://aiix.pro/" />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:locale" content={language === 'ru' ? 'ru_RU' : 'en_US'} />
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;