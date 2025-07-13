
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface BenefitProps {
  icon: React.ReactNode;
  titleEn: string;
  titleRu: string;
  descriptionEn: string;
  descriptionRu: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, titleEn, titleRu, descriptionEn, descriptionRu }) => {
  return (
    <div className="benefit-card hover:-translate-y-1">
      <div className="text-aiix-cyan mb-4">{icon}</div>
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

const BenefitsSection: React.FC = () => {
  const { language } = useLanguage();
  
  const benefits: BenefitProps[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      titleEn: "Task Automation",
      titleRu: "Автоматизация Задач",
      descriptionEn: "Eliminate repetitive manual tasks, allowing your team to focus on strategic, high-value activities.",
      descriptionRu: "Устраните повторяющиеся ручные задачи, позволяя вашей команде сосредоточиться на стратегических, высокоценных деятельностях."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titleEn: "Increased Efficiency",
      titleRu: "Повышение Эффективности",
      descriptionEn: "Process information faster and more accurately than humans, significantly reducing processing times.",
      descriptionRu: "Обрабатывайте информацию быстрее и точнее, чем люди, значительно сокращая время обработки."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titleEn: "Enhanced Decision-Making",
      titleRu: "Улучшенное Принятие Решений",
      descriptionEn: "Leverage data-driven insights for smarter, more informed business decisions.",
      descriptionRu: "Используйте основанные на данных аналитические выводы для более умных и информированных бизнес-решений."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titleEn: "Cost Reduction",
      titleRu: "Снижение Затрат",
      descriptionEn: "Dramatically decrease operational costs by minimizing human intervention in routine processes.",
      descriptionRu: "Значительно сократите операционные расходы, минимизируя вмешательство человека в рутинные процессы."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titleEn: "24/7 Operations",
      titleRu: "Круглосуточная Работа",
      descriptionEn: "Keep your business running around the clock without additional staffing costs or burnout.",
      descriptionRu: "Обеспечьте работу вашего бизнеса круглосуточно без дополнительных затрат на персонал или выгорания."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
      ),
      titleEn: "Scalability & Flexibility",
      titleRu: "Масштабируемость и Гибкость",
      descriptionEn: "Easily scale operations up or down to meet demand without the complexities of workforce management.",
      descriptionRu: "Легко масштабируйте операции вверх или вниз для удовлетворения спроса без сложностей управления персоналом."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      titleEn: "Personalized Interactions",
      titleRu: "Персонализированное Взаимодействие",
      descriptionEn: "Deliver consistently personalized experiences to customers at scale through adaptive learning.",
      descriptionRu: "Предоставляйте стабильно персонализированный опыт клиентам в масштабе через адаптивное обучение."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titleEn: "Improved Accuracy",
      titleRu: "Повышенная Точность",
      descriptionEn: "Eliminate human error in data processing and decision-making through consistent AI operations.",
      descriptionRu: "Устраните человеческие ошибки в обработке данных и принятии решений благодаря последовательным AI-операциям."
    }
  ];
  
  return (
    <section id="benefits" className="bg-aiix-lightgray py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-aiix-darkblue text-center mb-6">
          <span className="en-content">How AI Agents Can Transform Your Business</span>
          <span className="ru-content">Как AI-агенты могут трансформировать ваш бизнес</span>
        </h2>
        
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          <span className="en-content">
            Our custom AI agents deliver tangible advantages that directly impact your bottom line and transform how your business operates.
          </span>
          <span className="ru-content">
            Наши индивидуальные AI-агенты предоставляют ощутимые преимущества, которые напрямую влияют на ваши финансовые результаты и трансформируют работу вашего бизнеса.
          </span>
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
