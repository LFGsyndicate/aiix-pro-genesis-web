
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
    id: 'expansion-podcast',
    title: 'Expansion Podcast',
    titleRu: 'Подкаст Экспансия',
    description: 'Expansion—a podcast where we translate the language of AI & Web3 into the language of common sense. We break down complex topics simply, quickly & with purpose. Want to understand what\'s really happening and how you can use it?',
    descriptionRu: '«Экспансия» — подкаст, где мы переводим язык AI и блокчейна на язык здравого смысла. Разбираем сложные темы просто, быстро и по делу. Хочешь понять, что происходит на самом деле и как это использовать?',
    imageUrl: '/lovable-uploads/xpnsn.png',
    link: 'https://t.me/xxpnsn'
  },
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
  },
  {
    id: 'dao-ai-symbiosis',
    title: 'The Symbiosis of Decentralized Autonomous Organizations and AI Agents: New Frontiers for Revenue Generation and Startup Innovation',
    titleRu: 'Симбиоз децентрализованных автономных организаций и AI-агентов: новые горизонты для генерации доходов и стартап-инноваций',
    description: 'Exploring the revolutionary intersection of DAOs and AI agents, uncovering innovative models for autonomous revenue generation and breakthrough startup opportunities.',
    descriptionRu: 'Исследование революционного пересечения DAO и AI-агентов, раскрытие инновационных моделей автономной генерации доходов и прорывных стартап-возможностей.',
    imageUrl: '/lovable-uploads/90cca6a8-294c-4107-8f10-d62992812f95.png',
    link: 'https://lfgsyndicate.github.io/DAO-AI-Future'
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
                  <a href={project.id === 'expansion-podcast' ? (language === 'en' ? 'https://t.me/xxpnsn' : 'https://t.me/expansiia') : project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <AspectRatio ratio={16 / 9} className="bg-muted hover:opacity-90 transition-opacity">
                      <img 
                        src={project.id === 'expansion-podcast' ? (language === 'en' ? '/lovable-uploads/xpnsn.png' : '/lovable-uploads/expansia.png') : project.imageUrl}
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
                      <a href={project.id === 'expansion-podcast' ? (language === 'en' ? 'https://t.me/xxpnsn' : 'https://t.me/expansiia') : project.link} target="_blank" rel="noopener noreferrer">
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
