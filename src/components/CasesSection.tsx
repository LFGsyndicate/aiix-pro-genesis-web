import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { cases, technologies } from '../data/casesData';

const CasesSection: React.FC = () => {
  const { language } = useLanguage();
  const [visibleCases, setVisibleCases] = useState(5);
  
  const showMoreCases = () => {
    setVisibleCases(prev => Math.min(prev + 5, cases.length));
  };

  const hasMoreCases = visibleCases < cases.length;

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="en-content">Our Cases</span>
          <span className="ru-content">Наши кейсы</span>
        </h2>
        
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          <span className="en-content">Real-world implementations showcasing our expertise in AI agents and Web3 technologies</span>
          <span className="ru-content">Реальные внедрения, демонстрирующие наш опыт в AI-агентах и Web3 технологиях</span>
        </p>

        {/* Technologies Carousel */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8">
            <span className="en-content">Our Technology Stack</span>
            <span className="ru-content">Наш технологический стек</span>
          </h3>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-1">
              {technologies.map((tech, index) => (
                <CarouselItem key={index} className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full min-h-[180px]">
                      <CardContent className="flex flex-col items-center justify-center p-4 text-center h-full">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center">
                          <img 
                            src={tech.logoUrl} 
                            alt={tech.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              // Fallback to text if logo fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xs">${tech.name}</div>`;
                              }
                            }}
                          />
                        </div>
                        <h4 className="font-semibold text-xs mb-2">{tech.name}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          <span className="en-content">{tech.description}</span>
                          <span className="ru-content">{tech.descriptionRu}</span>
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {cases.slice(0, visibleCases).map((caseItem, index) => (
            <Card key={caseItem.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col">
                {/* Header bar with case number */}
                <div className={`bg-gradient-to-r ${caseItem.gradientColors} h-[55px] flex items-center justify-center`}>
                  <div className="text-white font-bold text-lg opacity-90">
                    Case {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                {/* Case content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Case {String(index + 1).padStart(2, '0')}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <span className="en-content">{caseItem.client}</span>
                      <span className="ru-content">{caseItem.clientRu}</span>
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg mb-4 leading-tight">
                    <span className="en-content">{caseItem.title}</span>
                    <span className="ru-content">{caseItem.titleRu}</span>
                  </CardTitle>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">
                        <span className="en-content">The Challenge:</span>
                        <span className="ru-content">Вызов:</span>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <span className="en-content">{caseItem.challenge}</span>
                        <span className="ru-content">{caseItem.challengeRu}</span>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">
                        <span className="en-content">Our Solution:</span>
                        <span className="ru-content">Наше решение:</span>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <span className="en-content">{caseItem.solution}</span>
                        <span className="ru-content">{caseItem.solutionRu}</span>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">
                        <span className="en-content">Key Technologies:</span>
                        <span className="ru-content">Ключевые технологии:</span>
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {caseItem.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">
                        <span className="en-content">Competencies:</span>
                        <span className="ru-content">Компетенции:</span>
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {caseItem.competencies.map((competency) => (
                          <Badge key={competency} variant="secondary" className="text-xs">
                            {competency}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">
                        <span className="en-content">The Outcome:</span>
                        <span className="ru-content">Результат:</span>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <span className="en-content">{caseItem.outcome}</span>
                        <span className="ru-content">{caseItem.outcomeRu}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreCases && (
          <div className="text-center">
            <Button 
              onClick={showMoreCases}
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <span className="en-content">Show More</span>
              <span className="ru-content">Показать еще</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CasesSection;