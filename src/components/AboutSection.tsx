
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-aiix-darkblue text-center mb-12">
          <span className="en-content">What Exactly Are AI Agents?</span>
          <span className="ru-content">Что же такое AI-агенты?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="prose max-w-none">
              <p className="text-base md:text-lg mb-6">
                <span className="en-content">
                  Unlike simple chatbots or basic automation tools, AI agents are sophisticated software entities that 
                  can perceive their environment, make decisions, and take actions to achieve specific goals autonomously.
                </span>
                <span className="ru-content">
                  В отличие от простых чат-ботов или базовых инструментов автоматизации, AI-агенты – это сложные программные 
                  сущности, которые могут воспринимать окружающую среду, принимать решения и предпринимать действия для 
                  автономного достижения конкретных целей.
                </span>
              </p>
              
              <p className="text-base md:text-lg mb-6">
                <span className="en-content">
                  What sets AI agents apart is their ability to learn, adapt, and improve over time. They can maintain memory 
                  of past interactions, plan complex sequences of actions, and leverage various tools to accomplish tasks with minimal human supervision.
                </span>
                <span className="ru-content">
                  Отличительной особенностью AI-агентов является их способность учиться, адаптироваться и совершенствоваться со временем. 
                  Они могут сохранять память о прошлых взаимодействиях, планировать сложные последовательности действий и использовать 
                  различные инструменты для выполнения задач с минимальным участием человека.
                </span>
              </p>
              
              <p className="text-base md:text-lg">
                <span className="en-content">
                  At AIix Pro, we develop custom AI agents that are tailored to your specific business needs, seamlessly 
                  integrating with your existing systems to automate complex workflows and deliver tangible results.
                </span>
                <span className="ru-content">
                  В AIix Pro мы разрабатываем индивидуальных AI-агентов, адаптированных к конкретным потребностям вашего 
                  бизнеса, которые легко интегрируются с существующими системами для автоматизации сложных рабочих процессов 
                  и предоставления измеримых результатов.
                </span>
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img 
                  src="/lovable-uploads/963d9e1c-7386-40ca-a3d3-e7f8339656f9.png" 
                  alt="AI agent visualization" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
