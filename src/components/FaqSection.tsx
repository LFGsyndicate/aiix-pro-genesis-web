
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItemProps {
  questionEn: string;
  questionRu: string;
  answerEn: string;
  answerRu: string;
}

const FaqSection: React.FC = () => {
  const { language } = useLanguage();
  
  const faqItems: FaqItemProps[] = [
    {
      questionEn: "What is an AI agent?",
      questionRu: "Что такое AI-агент?",
      answerEn: "An AI agent is an autonomous software entity powered by artificial intelligence that can perceive its environment, make decisions, and take actions to achieve specific goals. Unlike simple chatbots or automation tools, AI agents can learn, adapt, and improve over time. They maintain memory of past interactions, can plan complex sequences of actions, and leverage various tools to accomplish tasks with minimal human supervision.",
      answerRu: "AI-агент — это автономная программная сущность, работающая на искусственном интеллекте, которая может воспринимать окружающую среду, принимать решения и предпринимать действия для достижения конкретных целей. В отличие от простых чат-ботов или инструментов автоматизации, AI-агенты могут учиться, адаптироваться и совершенствоваться со временем. Они сохраняют память о прошлых взаимодействиях, могут планировать сложные последовательности действий и использовать различные инструменты для выполнения задач с минимальным вмешательством человека."
    },
    {
      questionEn: "How do AI agents differ from chatbots?",
      questionRu: "Чем AI-агенты отличаются от чат-ботов?",
      answerEn: "While chatbots are primarily designed for conversational interactions and typically follow predefined scripts, AI agents are much more sophisticated. Agents can operate autonomously without human prompting, make decisions based on multiple data points, learn from past experiences, and execute complex tasks across multiple systems. They can also take initiative, anticipate needs, and adapt their strategies to achieve goals more effectively over time.",
      answerRu: "В то время как чат-боты в основном предназначены для разговорных взаимодействий и обычно следуют предопределенным сценариям, AI-агенты намного сложнее. Агенты могут работать автономно без подсказок человека, принимать решения на основе множества точек данных, учиться на прошлом опыте и выполнять сложные задачи в нескольких системах. Они также могут проявлять инициативу, предвидеть потребности и адаптировать свои стратегии для более эффективного достижения целей с течением времени."
    },
    {
      questionEn: "What types of AI agents do you build?",
      questionRu: "Какие типы AI-агентов вы создаете?",
      answerEn: "We develop a wide range of AI agents tailored to specific business needs, including customer service agents, sales and marketing agents, data analysis agents, research and content creation agents, personal productivity agents, operations agents, and more. Our approach is always to customize the agent's capabilities to your unique requirements rather than offering one-size-fits-all solutions.",
      answerRu: "Мы разрабатываем широкий спектр AI-агентов, адаптированных к конкретным бизнес-потребностям, включая агентов по обслуживанию клиентов, агентов по продажам и маркетингу, агентов по анализу данных, агентов по исследованиям и созданию контента, агентов по личной продуктивности, операционных агентов и многое другое. Наш подход всегда заключается в настройке возможностей агента под ваши уникальные требования, а не в предложении универсальных решений."
    },
    {
      questionEn: "What factors affect the cost of developing an AI agent?",
      questionRu: "Какие факторы влияют на стоимость разработки AI-агента?",
      answerEn: "Several factors influence the cost: complexity and scope of the agent's capabilities, number of systems it needs to integrate with, amount of data processing required, level of autonomy needed, specific industry knowledge required, security and compliance requirements, and the extent of customization. We provide detailed quotes based on your specific requirements and offer flexible engagement models to accommodate different budgets.",
      answerRu: "На стоимость влияют несколько факторов: сложность и объем возможностей агента, количество систем, с которыми ему необходимо интегрироваться, объем необходимой обработки данных, требуемый уровень автономности, необходимые специфические отраслевые знания, требования безопасности и соответствия, а также степень настройки. Мы предоставляем подробные расценки на основе ваших конкретных требований и предлагаем гибкие модели сотрудничества для соответствия различным бюджетам."
    },
    {
      questionEn: "How long does it take to develop and deploy an AI agent?",
      questionRu: "Сколько времени занимает разработка и внедрение AI-агента?",
      answerEn: "Development timelines vary based on complexity, but typically range from 4-12 weeks. Simple, focused agents can be deployed in as little as 2-4 weeks, while more complex, multi-functional agents integrated with multiple systems may take 3-6 months. We often implement in phases, allowing you to see value quickly while we continue expanding capabilities over time.",
      answerRu: "Сроки разработки варьируются в зависимости от сложности, но обычно составляют от 4 до 12 недель. Простые, узконаправленные агенты могут быть развернуты всего за 2-4 недели, в то время как более сложные многофункциональные агенты, интегрированные с несколькими системами, могут занять 3-6 месяцев. Мы часто внедряем поэтапно, что позволяет вам быстро увидеть ценность, пока мы продолжаем расширять возможности со временем."
    },
    {
      questionEn: "How do you ensure data privacy and security?",
      questionRu: "Как вы обеспечиваете конфиденциальность и безопасность данных?",
      answerEn: "We implement industry-leading security practices, including encryption of data in transit and at rest, role-based access controls, regular security audits, and compliance with relevant regulations like GDPR, HIPAA, or CCPA as needed. We can deploy solutions on your infrastructure or in isolated cloud environments, and we clearly document data usage policies. Our development process includes security reviews at every stage to ensure your data remains protected.",
      answerRu: "Мы внедряем передовые в отрасли практики безопасности, включая шифрование данных при передаче и в состоянии покоя, контроль доступа на основе ролей, регулярные аудиты безопасности и соответствие соответствующим нормам, таким как GDPR, HIPAA или CCPA по мере необходимости. Мы можем развертывать решения на вашей инфраструктуре или в изолированных облачных средах, и мы четко документируем политики использования данных. Наш процесс разработки включает проверки безопасности на каждом этапе, чтобы ваши данные оставались защищенными."
    },
    {
      questionEn: "Can AI agents integrate with our existing systems?",
      questionRu: "Могут ли AI-агенты интегрироваться с нашими существующими системами?",
      answerEn: "Yes, our AI agents are designed for seamless integration with your existing technology stack. We support integration with common business systems like CRM platforms, ERP systems, customer service platforms, marketing tools, data warehouses, and custom databases. We use APIs, webhooks, middleware, or custom connectors as needed to ensure smooth data flow and functionality across your entire ecosystem.",
      answerRu: "Да, наши AI-агенты разработаны для бесшовной интеграции с вашим существующим технологическим стеком. Мы поддерживаем интеграцию с распространенными бизнес-системами, такими как CRM-платформы, ERP-системы, платформы обслуживания клиентов, маркетинговые инструменты, хранилища данных и пользовательские базы данных. При необходимости мы используем API, веб-хуки, промежуточное программное обеспечение или пользовательские коннекторы для обеспечения плавного потока данных и функциональности во всей вашей экосистеме."
    },
    {
      questionEn: "Do we need to provide training data for our AI agent?",
      questionRu: "Нужно ли нам предоставлять обучающие данные для нашего AI-агента?",
      answerEn: "While providing some data helps customize your agent more quickly, it's not always necessary. We can start with pre-trained models and industry knowledge, then gradually train the agent using real interactions. For specialized domains, some initial data or documentation is beneficial. We can also help you identify and prepare relevant data from your existing systems to accelerate the training process. Our approach is flexible and adapted to your data availability.",
      answerRu: "Хотя предоставление некоторых данных помогает быстрее настроить вашего агента, это не всегда необходимо. Мы можем начать с предварительно обученных моделей и отраслевых знаний, а затем постепенно обучать агента, используя реальные взаимодействия. Для специализированных областей полезны некоторые начальные данные или документация. Мы также можем помочь вам определить и подготовить соответствующие данные из существующих систем, чтобы ускорить процесс обучения. Наш подход гибкий и адаптирован к доступности ваших данных."
    }
  ];
  
  return (
    <section id="faq" className="bg-aiix-lightgray py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-aiix-darkblue text-center mb-6">
          <span className="en-content">Frequently Asked Questions</span>
          <span className="ru-content">Часто задаваемые вопросы</span>
        </h2>
        
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          <span className="en-content">
            Have questions about AI agents or our services? Find quick answers below.
          </span>
          <span className="ru-content">
            Есть вопросы об AI-агентах или наших услугах? Найдите быстрые ответы ниже.
          </span>
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-aiix-darkblue hover:text-aiix-cyan">
                  <span className="en-content">{item.questionEn}</span>
                  <span className="ru-content">{item.questionRu}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <span className="en-content">{item.answerEn}</span>
                  <span className="ru-content">{item.answerRu}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
