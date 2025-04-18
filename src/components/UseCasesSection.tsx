
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UseCaseProps {
  titleEn: string;
  titleRu: string;
  descriptionEn: string;
  descriptionRu: string;
}

const UseCaseItem: React.FC<UseCaseProps> = ({ titleEn, titleRu, descriptionEn, descriptionRu }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-semibold text-aiix-darkblue mb-2">
        <span className="en-content">{titleEn}</span>
        <span className="ru-content">{titleRu}</span>
      </h4>
      <p className="text-gray-600 text-sm">
        <span className="en-content">{descriptionEn}</span>
        <span className="ru-content">{descriptionRu}</span>
      </p>
    </div>
  );
};

const UseCasesSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("customer-service");
  
  const useCaseCategories = [
    {
      id: "customer-service",
      titleEn: "Customer Service",
      titleRu: "Обслуживание Клиентов",
      cases: [
        {
          titleEn: "24/7 L1 Support Resolution",
          titleRu: "Круглосуточное решение запросов поддержки L1",
          descriptionEn: "AI agents handle common customer inquiries, troubleshooting, and problem resolution around the clock, ensuring customers receive immediate assistance regardless of time zone.",
          descriptionRu: "AI-агенты обрабатывают распространенные клиентские запросы, устраняют неполадки и решают проблемы круглосуточно, обеспечивая клиентам мгновенную помощь независимо от часового пояса."
        },
        {
          titleEn: "Proactive Customer Outreach",
          titleRu: "Проактивное информирование клиентов",
          descriptionEn: "Agents monitor customer behavior patterns and system statuses, reaching out to customers before they encounter problems or to offer timely assistance based on predicted needs.",
          descriptionRu: "Агенты отслеживают шаблоны поведения клиентов и состояние систем, обращаясь к клиентам до возникновения проблем или предлагая своевременную помощь на основе прогнозируемых потребностей."
        },
        {
          titleEn: "Intelligent Ticket Routing & Prioritization",
          titleRu: "Умная маршрутизация и приоритизация заявок",
          descriptionEn: "Analyze incoming customer issues to determine severity, classify by type, and automatically route to the most appropriate department or specialist for quick resolution.",
          descriptionRu: "Анализируйте входящие проблемы клиентов для определения серьезности, классифицируйте по типу и автоматически направляйте в наиболее подходящий отдел или специалисту для быстрого решения."
        }
      ]
    },
    {
      id: "sales-marketing",
      titleEn: "Sales & Marketing",
      titleRu: "Продажи и Маркетинг",
      cases: [
        {
          titleEn: "Automated Lead Qualification & Scoring",
          titleRu: "Автоматическая квалификация и скоринг лидов",
          descriptionEn: "AI agents evaluate and score incoming leads based on multiple data points, engage in initial qualification conversations, and route high-potential prospects to sales representatives.",
          descriptionRu: "AI-агенты оценивают и присваивают рейтинг входящим лидам на основе множества точек данных, проводят первичные квалификационные беседы и направляют перспективных потенциальных клиентов представителям отдела продаж."
        },
        {
          titleEn: "Personalized Email Campaign Generation & Sending",
          titleRu: "Генерация и отправка персонализированных email-кампаний",
          descriptionEn: "Create, personalize, optimize, and send email campaigns based on customer data and preferences, including A/B testing and automated follow-ups.",
          descriptionRu: "Создавайте, персонализируйте, оптимизируйте и отправляйте email-кампании на основе данных и предпочтений клиентов, включая A/B-тестирование и автоматические повторные контакты."
        },
        {
          titleEn: "Autonomous CRM Data Entry & Updates",
          titleRu: "Автономный ввод и обновление данных в CRM",
          descriptionEn: "Monitor communications across channels to automatically update customer information, interaction history, and opportunity statuses in your CRM without manual data entry.",
          descriptionRu: "Отслеживайте коммуникации по всем каналам для автоматического обновления информации о клиентах, истории взаимодействия и статуса возможностей в вашей CRM без ручного ввода данных."
        }
      ]
    },
    {
      id: "data-analysis",
      titleEn: "Data Analysis",
      titleRu: "Анализ Данных",
      cases: [
        {
          titleEn: "Real-time Market Trend Monitoring & Reporting",
          titleRu: "Мониторинг и отчетность по рыночным трендам в реальном времени",
          descriptionEn: "Continuously monitor market data, identify emerging trends, and automatically generate actionable reports with recommendations for business strategy adjustments.",
          descriptionRu: "Непрерывно отслеживайте рыночные данные, выявляйте новые тенденции и автоматически создавайте применимые отчеты с рекомендациями по корректировке бизнес-стратегии."
        },
        {
          titleEn: "Automated Performance Dashboard Generation",
          titleRu: "Автоматическая генерация дашбордов производительности",
          descriptionEn: "Collect data from multiple sources, clean and process it, then generate visual dashboards with key metrics and insights tailored to different stakeholders.",
          descriptionRu: "Собирайте данные из нескольких источников, очищайте и обрабатывайте их, затем создавайте визуальные информационные панели с ключевыми показателями и выводами, адаптированными для различных заинтересованных сторон."
        },
        {
          titleEn: "Anomaly Detection in Business Metrics",
          titleRu: "Обнаружение аномалий в бизнес-метриках",
          descriptionEn: "Continuously analyze business performance data to identify unusual patterns, potential issues, or unexpected opportunities that require attention from decision-makers.",
          descriptionRu: "Непрерывно анализируйте данные о производительности бизнеса, чтобы выявлять необычные закономерности, потенциальные проблемы или неожиданные возможности, требующие внимания лиц, принимающих решения."
        }
      ]
    },
    {
      id: "content-management",
      titleEn: "Content Management",
      titleRu: "Управление Контентом",
      cases: [
        {
          titleEn: "Automated Report Generation from Data",
          titleRu: "Автоматическая генерация отчетов из данных",
          descriptionEn: "Transform raw data into comprehensive, formatted reports with narrative analysis, charts, and actionable insights, ready for presentation to stakeholders.",
          descriptionRu: "Преобразуйте необработанные данные в комплексные, отформатированные отчеты с повествовательным анализом, диаграммами и действенными выводами, готовые для представления заинтересованным сторонам."
        },
        {
          titleEn: "SEO Keyword Research & Content Brief Creation",
          titleRu: "Исследование SEO-ключевых слов и создание ТЗ на контент",
          descriptionEn: "Research market trends and competitive keywords, then generate detailed content briefs with SEO recommendations for writers and marketing teams.",
          descriptionRu: "Исследуйте рыночные тенденции и конкурентные ключевые слова, затем создавайте подробные задания на контент с рекомендациями по SEO для писателей и маркетинговых команд."
        },
        {
          titleEn: "Social Media Post Generation & Scheduling",
          titleRu: "Генерация и планирование постов в социальных сетях",
          descriptionEn: "Create engaging social media content tailored to different platforms, optimize posting schedules, and maintain consistent brand voice across all channels.",
          descriptionRu: "Создавайте привлекательный контент для социальных сетей, адаптированный для различных платформ, оптимизируйте графики публикаций и поддерживайте последовательный голос бренда на всех каналах."
        }
      ]
    },
    {
      id: "productivity",
      titleEn: "Personal Productivity",
      titleRu: "Личная Продуктивность",
      cases: [
        {
          titleEn: "Intelligent Email Sorting & Prioritization",
          titleRu: "Умная сортировка и приоритизация электронной почты",
          descriptionEn: "Analyze incoming emails to categorize by importance, flag urgent messages, draft response suggestions, and organize communications for efficient processing.",
          descriptionRu: "Анализируйте входящие электронные письма для категоризации по важности, отмечайте срочные сообщения, составляйте предложения ответов и организуйте коммуникации для эффективной обработки."
        },
        {
          titleEn: "Automated Calendar Management & Meeting Scheduling",
          titleRu: "Автоматическое управление календарем и планирование встреч",
          descriptionEn: "Understand scheduling preferences, manage meeting requests, find optimal timeslots across multiple participants, and send invites without human intervention.",
          descriptionRu: "Понимайте предпочтения по расписанию, управляйте запросами на встречи, находите оптимальные временные интервалы для нескольких участников и отправляйте приглашения без вмешательства человека."
        },
        {
          titleEn: "Proactive Task Reminders & Follow-ups",
          titleRu: "Проактивные напоминания о задачах и контроль исполнения",
          descriptionEn: "Track outstanding tasks, send well-timed reminders, and proactively follow up on incomplete activities based on priority and deadlines.",
          descriptionRu: "Отслеживайте невыполненные задачи, отправляйте своевременные напоминания и проактивно контролируйте незавершенные действия на основе приоритетов и сроков."
        }
      ]
    }
  ];
  
  return (
    <section id="use-cases" className="bg-white py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-aiix-darkblue text-center mb-6">
          <span className="en-content">AI Agents in Action: Real-World Applications</span>
          <span className="ru-content">AI-агенты в действии: Реальные примеры применения</span>
        </h2>
        
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          <span className="en-content">
            Explore how our custom AI agents can be applied to various functions across your organization.
          </span>
          <span className="ru-content">
            Изучите, как наши индивидуальные AI-агенты могут применяться к различным функциям во всей вашей организации.
          </span>
        </p>
        
        <Tabs defaultValue="customer-service" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {useCaseCategories.map(category => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="text-sm md:text-base"
              >
                <span className="en-content">{category.titleEn}</span>
                <span className="ru-content">{category.titleRu}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {useCaseCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {category.cases.map((useCase, index) => (
                  <UseCaseItem key={index} {...useCase} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCasesSection;
