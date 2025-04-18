
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

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
              <p className="text-lg mb-6">
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
              
              <p className="text-lg mb-6">
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
              
              <p className="text-lg">
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
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-aiix-primary to-aiix-magenta rounded-xl shadow-lg flex items-center justify-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
