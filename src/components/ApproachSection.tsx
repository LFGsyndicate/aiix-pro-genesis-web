
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ApproachStepProps {
  titleEn: string;
  titleRu: string;
  descriptionEn: string;
  descriptionRu: string;
}

const ApproachStep: React.FC<ApproachStepProps> = ({
  titleEn,
  titleRu,
  descriptionEn,
  descriptionRu
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-semibold text-aiix-darkblue mb-2">
        <span className="en-content mx-[17px]">{titleEn}</span>
        <span className="ru-content mx-[20px] py-[20px]">{titleRu}</span>
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
      titleEn: "Discovery",
      titleRu: "Исследование",
      descriptionEn: "We analyze your business needs, workflows, and objectives to identify the optimal AI agent applications.",
      descriptionRu: "Мы анализируем потребности вашего бизнеса, рабочие процессы и цели, чтобы определить оптимальные применения AI-агентов.",
    },
    {
      titleEn: "Design",
      titleRu: "Дизайн",
      descriptionEn: "We create a detailed blueprint for your custom AI agent, including capabilities, interfaces, and integration points.",
      descriptionRu: "Мы создаем подробный план вашего индивидуального AI-агента, включая возможности, интерфейсы и точки интеграции.",
    },
    {
      titleEn: "Development",
      titleRu: "Разработка",
      descriptionEn: "Our engineers build and train your AI agent, ensuring it meets all functional specifications and quality standards.",
      descriptionRu: "Наши инженеры создают и обучают вашего AI-агента, гарантируя соответствие всем функциональным спецификациям и стандартам качества.",
    },
    {
      titleEn: "Deployment",
      titleRu: "Внедрение",
      descriptionEn: "We seamlessly integrate your AI agent into your existing systems and ensure smooth adoption by your team.",
      descriptionRu: "Мы бесшовно интегрируем вашего AI-агента в существующие системы и обеспечиваем плавное внедрение вашей командой.",
    },
    {
      titleEn: "Evolution",
      titleRu: "Эволюция",
      descriptionEn: "We continuously monitor, refine, and expand your AI agent's capabilities based on performance data and changing needs.",
      descriptionRu: "Мы постоянно отслеживаем, совершенствуем и расширяем возможности вашего AI-агента на основе данных о производительности и меняющихся потребностей.",
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
            <div key={index}>
              <ApproachStep {...step} />
              {index < approachSteps.length - 1 && <div className="hidden md:block md:col-span-0 border-t-2 border-dashed border-aiix-cyan mt-8"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
