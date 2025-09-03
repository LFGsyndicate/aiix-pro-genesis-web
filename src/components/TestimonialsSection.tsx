
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialProps {
  nameEn: string;
  nameRu: string;
  positionEn: string;
  positionRu: string;
  companyEn: string;
  companyRu: string;
  quoteEn: string;
  quoteRu: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  nameEn, nameRu, positionEn, positionRu, companyEn, companyRu, quoteEn, quoteRu 
}) => {
  return (
    <div className="testimonial-card">
      <blockquote className="text-xs md:text-sm text-gray-600 mb-4">
        <span className="en-content">&ldquo;{quoteEn}&rdquo;</span>
        <span className="ru-content">&ldquo;{quoteRu}&rdquo;</span>
      </blockquote>
      
      <div className="mt-auto">
        <p className="font-semibold text-aiix-darkblue">
          <span className="en-content">{nameEn}</span>
          <span className="ru-content">{nameRu}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="en-content">{positionEn}, {companyEn}</span>
          <span className="ru-content">{positionRu}, {companyRu}</span>
        </p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  
  const testimonials: TestimonialProps[] = [
    {
      nameEn: "Alexandra Chen",
      nameRu: "Александра Чен",
      positionEn: "CTO",
      positionRu: "CTO",
      companyEn: "TechForward Solutions",
      companyRu: "TechForward Solutions",
      quoteEn: "AIix Pro transformed our customer support operations. Their AI agent handles 78% of our support tickets autonomously, reducing response times by 92% and allowing our team to focus on complex issues. The ROI has been exceptional – we've reduced support costs by 40% while improving customer satisfaction scores.",
      quoteRu: "AIix Pro трансформировал наши операции по поддержке клиентов. Их AI-агент самостоятельно обрабатывает 78% наших запросов в службу поддержки, сокращая время ответа на 92% и позволяя нашей команде сосредоточиться на сложных проблемах. ROI был исключительным – мы сократили расходы на поддержку на 40% при одновременном повышении показателей удовлетворенности клиентов."
    },
    {
      nameEn: "Mikhail Sorokin",
      nameRu: "Михаил Сорокин",
      positionEn: "Marketing Director",
      positionRu: "Директор по маркетингу",
      companyEn: "Global Retail Group",
      companyRu: "Global Retail Group",
      quoteEn: "The email campaign agent AIix Pro developed for us has been a game-changer. It autonomously creates, personalizes, and optimizes our campaigns, resulting in a 34% increase in open rates and a 27% boost in conversions. What impresses me most is how the agent continuously learns from performance data to improve future campaigns.",
      quoteRu: "Агент для email-кампаний, разработанный AIix Pro для нас, изменил правила игры. Он автономно создает, персонализирует и оптимизирует наши кампании, что привело к увеличению показателей открытия на 34% и конверсии на 27%. Больше всего меня впечатляет то, как агент постоянно учится на основе данных о производительности для улучшения будущих кампаний."
    },
    {
      nameEn: "Sophia Williams",
      nameRu: "София Уильямс",
      positionEn: "Data Analytics Lead",
      positionRu: "Руководитель отдела аналитики данных",
      companyEn: "FinInsight Corp",
      companyRu: "FinInsight Corp",
      quoteEn: "We implemented AIix Pro's market analysis agent to enhance our financial decision-making. The agent now monitors global market trends 24/7, detects emerging patterns, and generates actionable insights that have helped us identify investment opportunities 58% faster than our previous methods. Worth every penny.",
      quoteRu: "Мы внедрили агент анализа рынка от AIix Pro для улучшения принятия финансовых решений. Агент теперь круглосуточно отслеживает глобальные рыночные тенденции, выявляет новые закономерности и генерирует действенные идеи, которые помогли нам выявлять инвестиционные возможности на 58% быстрее, чем наши предыдущие методы. Стоит каждой копейки."
    },
    {
      nameEn: "David Park",
      nameRu: "Дэвид Парк",
      positionEn: "Operations Manager",
      positionRu: "Менеджер по операциям",
      companyEn: "NexGen Manufacturing",
      companyRu: "NexGen Manufacturing",
      quoteEn: "The supply chain optimization agent from AIix Pro has revolutionized our operations. It anticipates potential disruptions, suggests inventory adjustments, and automates communication with suppliers. We've reduced stockouts by 63% and inventory carrying costs by 21% in just six months. The team at AIix Pro are true experts.",
      quoteRu: "Агент оптимизации цепочки поставок от AIix Pro произвел революцию в наших операциях. Он предвидит потенциальные сбои, предлагает корректировки запасов и автоматизирует общение с поставщиками. Мы сократили отсутствие товара на складе на 63% и расходы на хранение запасов на 21% всего за шесть месяцев. Команда AIix Pro – настоящие эксперты."
    },
    {
      nameEn: "Elena Kuznetsova",
      nameRu: "Елена Кузнецова",
      positionEn: "CEO",
      positionRu: "Генеральный директор",
      companyEn: "InnoHealth Technologies",
      companyRu: "InnoHealth Technologies",
      quoteEn: "As a healthcare technology company, we needed an AI solution that could handle sensitive data while improving our research capabilities. AIix Pro delivered a custom research agent that has accelerated our literature review process by 5x while maintaining strict compliance with privacy regulations. Their understanding of both AI and industry-specific needs sets them apart.",
      quoteRu: "Как компания в сфере медицинских технологий, нам требовалось AI-решение, которое могло бы обрабатывать конфиденциальные данные, улучшая при этом наши исследовательские возможности. AIix Pro предоставила индивидуального исследовательского агента, который ускорил наш процесс обзора литературы в 5 раз, сохраняя при этом строгое соответствие нормам конфиденциальности. Их понимание как AI, так и отраслевых потребностей выделяет их среди других."
    }
  ];
  
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-aiix-darkblue text-center mb-6">
          <span className="en-content">Trusted by Innovators</span>
          <span className="ru-content">Нам доверяют новаторы</span>
        </h2>
        
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          <span className="en-content">
            See how organizations across industries are achieving breakthrough results with our AI agents.
          </span>
          <span className="ru-content">
            Узнайте, как организации из разных отраслей достигают прорывных результатов с нашими AI-агентами.
          </span>
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
