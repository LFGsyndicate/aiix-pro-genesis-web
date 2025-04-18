
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ApproachStepProps {
  number: number;
  titleEn: string;
  titleRu: string;
  descriptionEn: string;
  descriptionRu: string;
  icon: React.ReactNode;
}

const ApproachStep: React.FC<ApproachStepProps> = ({ 
  number, titleEn, titleRu, descriptionEn, descriptionRu, icon 
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-aiix-cyan text-white rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      
      <div className="w-8 h-8 bg-aiix-primary text-white rounded-full flex items-center justify-center mb-4 -mt-20 ml-10">
        <span className="text-sm font-bold">{number}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-aiix-darkblue mb-2">
        <span className="en-content">{titleEn}</span>
        <span className="ru-content">{titleRu}</span>
      </h3>
      
      <p className="text-gray-600">
        <span className="en-content">{descriptionEn}</span>
        <span className="ru-content">{descriptionRu}</span>
      </p>
    </div>
  );
};

const ApproachSection: React.FC = () => {
  const { language } = useLanguage();
  
  const approachSteps: ApproachStepProps[] = [
    {
      number: 1,
      titleEn: "Discovery",
      titleRu: "Исследование",
      descriptionEn: "We analyze your business needs, workflows, and objectives to identify the optimal AI agent applications.",
      descriptionRu: "Мы анализируем потребности вашего бизнеса, рабочие процессы и цели, чтобы определить оптимальные применения AI-агентов.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: 2,
      titleEn: "Design",
      titleRu: "Дизайн",
      descriptionEn: "We create a detailed blueprint for your custom AI agent, including capabilities, interfaces, and integration points.",
      descriptionRu: "Мы создаем подробный план вашего индивидуального AI-агента, включая возможности, интерфейсы и точки интеграции.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      number: 3,
      titleEn: "Development",
      titleRu: "Разработка",
      descriptionEn: "Our engineers build and train your AI agent, ensuring it meets all functional specifications and quality standards.",
      descriptionRu: "Наши инженеры создают и обучают вашего AI-агента, гарантируя соответствие всем функциональным спецификациям и стандартам качества.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: 4,
      titleEn: "Deployment",
      titleRu: "Внедрение",
      descriptionEn: "We seamlessly integrate your AI agent into your existing systems and ensure smooth adoption by your team.",
      descriptionRu: "Мы бесшовно интегрируем вашего AI-агента в существующие системы и обеспечиваем плавное внедрение вашей командой.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: 5,
      titleEn: "Evolution",
      titleRu: "Эволюция",
      descriptionEn: "We continuously monitor, refine, and expand your AI agent's capabilities based on performance data and changing needs.",
      descriptionRu: "Мы постоянно отслеживаем, совершенствуем и расширяем возможности вашего AI-агента на основе данных о производительности и меняющихся потребностей.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];
  
  return (
    <section id="approach" className="bg-aiix-lightgray py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-aiix-darkblue text-center mb-6">
          <span className="en-content">Our Expert Approach to AI Agent Development</span>
          <span className="ru-content">Наш экспертный подход к разработке AI-агентов</span>
        </h2>
        
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          <span className="en-content">
            We follow a proven methodology to create AI agents that deliver exceptional value from day one and continue 
            to evolve with your business.
          </span>
          <span className="ru-content">
            Мы следуем проверенной методологии для создания AI-агентов, которые обеспечивают исключительную ценность с 
            первого дня и продолжают развиваться вместе с вашим бизнесом.
          </span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {approachSteps.map((step, index) => (
            <React.Fragment key={index}>
              <ApproachStep {...step} />
              {index < approachSteps.length - 1 && (
                <div className="hidden md:block md:col-span-0 border-t-2 border-dashed border-aiix-cyan mt-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
