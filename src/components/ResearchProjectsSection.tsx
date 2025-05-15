
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { AspectRatio } from './ui/aspect-ratio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';

interface ResearchProject {
  id: string;
  title: string;
  titleRu?: string;
  description: string;
  descriptionRu?: string;
  imageUrl: string;
  link: string;
}

const projects: ResearchProject[] = [
  {
    id: '700-ai-startup-ideas',
    title: '700 AI Startup Ideas: A Compendium of Real-World Generative AI Applications',
    titleRu: '700 идей AI-стартапов: сборник приложений генеративного ИИ в реальном мире',
    description: 'A comprehensive industry analysis of 700 real-world generative AI applications, providing insights into how this technology is transforming businesses across sectors.',
    descriptionRu: 'Комплексный отраслевой анализ 700 реальных приложений генеративного ИИ, предоставляющий информацию о том, как эта технология трансформирует бизнес в различных секторах.',
    imageUrl: '/lovable-uploads/5d6ece40-5024-4b03-8e74-7bbce2de2499.png',
    link: 'https://lfgsyndicate.github.io/700-ai-startup-ideas'
  },
  {
    id: 'dtn',
    title: 'The Decentralized Transformation Nexus',
    titleRu: 'Нексус децентрализованной трансформации',
    description: 'Your guide to understanding the transformative power of decentralized technologies and AI.',
    descriptionRu: 'Ваш путеводитель по пониманию преобразующей силы децентрализованных технологий и искусственного интеллекта.',
    imageUrl: '/lovable-uploads/4f9589b7-8875-44e8-8d53-6ec826e6f19e.png',
    link: 'https://lfgsyndicate.github.io/dApp-Transformation-Nexus'
  }
];

const ResearchProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section id="research-projects" className="bg-gray-50 py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-aiix-darkblue text-center mb-12">
          <span className="en-content">Our Research Projects</span>
          <span className="ru-content">Наши исследовательские проекты</span>
        </h2>
        
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-0 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-0">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <AspectRatio ratio={16 / 9} className="bg-muted hover:opacity-90 transition-opacity">
                      <img 
                        src={project.imageUrl} 
                        alt={language === 'en' ? project.title : (project.titleRu || project.title)} 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </a>
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <CardTitle className="text-2xl mb-3">
                      <span className="en-content">{project.title}</span>
                      <span className="ru-content">{project.titleRu || project.title}</span>
                    </CardTitle>
                    <CardDescription className="text-base text-gray-700 mb-6">
                      <span className="en-content">{project.description}</span>
                      <span className="ru-content">{project.descriptionRu || project.description}</span>
                    </CardDescription>
                  </div>
                  <div>
                    <Button asChild className="bg-aiix-cyan hover:bg-aiix-magenta">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span className="en-content">Learn More</span>
                        <span className="ru-content">Узнать больше</span>
                        <ArrowRight className="ml-2" size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchProjectsSection;
