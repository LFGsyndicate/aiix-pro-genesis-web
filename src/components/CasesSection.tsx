import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

// Import case images
import case01 from '../assets/case-01.jpg';
import case02 from '../assets/case-02.jpg';
import case03 from '../assets/case-03.jpg';
import case04 from '../assets/case-04.jpg';
import case05 from '../assets/case-05.jpg';

interface Case {
  id: string;
  title: string;
  titleRu: string;
  client: string;
  clientRu: string;
  challenge: string;
  challengeRu: string;
  solution: string;
  solutionRu: string;
  technologies: string[];
  outcome: string;
  outcomeRu: string;
  imageUrl: string;
}

const technologies = [
  { name: 'OpenAI', description: 'For state-of-the-art Large Language Models (GPT series) and core reasoning capabilities.' },
  { name: 'Google Cloud', description: 'For scalable cloud infrastructure, Vertex AI, and Gemini models.' },
  { name: 'AWS', description: 'For robust, secure, and globally distributed cloud services and Bedrock AI platform.' },
  { name: 'Chainlink', description: 'The industry standard for decentralized oracle networks, connecting smart contracts to real-world data.' },
  { name: 'The Graph', description: 'The standard protocol for indexing and querying data from blockchains like Ethereum and Solana.' },
  { name: 'LangChain', description: 'The primary framework for developing context-aware, reasoning AI agents and applications.' },
  { name: 'Kubernetes', description: 'The leading open-source standard for automating deployment, scaling, and management of containerized applications.' },
  { name: 'Docker', description: 'The industry standard for containerization, ensuring consistency across development and production environments.' },
  { name: 'OpenZeppelin', description: 'The gold standard for secure, audited, and community-vetted smart contract libraries for the EVM.' },
  { name: 'Hardhat & Foundry', description: 'Premier development environments for compiling, deploying, testing, and debugging Ethereum-based software.' },
  { name: 'Pinecone', description: 'A leading vector database for building high-performance AI applications with long-term memory.' },
  { name: 'PostgreSQL', description: 'The world\'s most advanced open-source relational database, trusted for its reliability and data integrity.' },
  { name: 'Vercel', description: 'The definitive platform for deploying and scaling modern frontend applications (React, Next.js).' },
  { name: 'GitHub Actions', description: 'The standard for building robust, automated CI/CD pipelines directly within the development workflow.' },
  { name: 'Anthropic (Claude)', description: 'For access to alternative, safety-focused large language models, providing flexibility and depth to our AI solutions.' }
];

const cases: Case[] = [
  {
    id: 'case-01',
    title: 'Automating On-Chain Compliance for a DeFi Protocol with a ZK-Powered AI Agent',
    titleRu: 'Автоматизация соответствия нормативным требованиям в DeFi протоколе с AI-агентом на основе ZK',
    client: 'A leading European DeFi Lending Platform',
    clientRu: 'Ведущая европейская DeFi платформа кредитования',
    challenge: 'The client needed to implement mandatory AML/KYC checks without compromising the core tenets of user privacy and decentralization. Manual verification was slow, costly, and created a central point of failure, deterring user adoption.',
    challengeRu: 'Клиенту требовалось внедрить обязательные проверки AML/KYC без ущерба для основных принципов конфиденциальности пользователей и децентрализации. Ручная верификация была медленной, дорогостоящей и создавала единую точку отказа, отпугивая пользователей.',
    solution: 'We engineered and deployed an autonomous AI agent that leverages Zero-Knowledge Proofs (ZK-Proofs). The agent operates off-chain, interfacing with verified credential providers via secure oracles. It validates a user\'s status, generates a cryptographic ZK-proof of compliance, and submits only this proof to the protocol\'s smart contract.',
    solutionRu: 'Мы разработали и развернули автономный AI-агент, использующий доказательства с нулевым разглашением (ZK-Proofs). Агент работает вне сети, взаимодействуя с проверенными поставщиками учетных данных через безопасные оракулы. Он проверяет статус пользователя, генерирует криптографическое ZK-доказательство соответствия и отправляет только это доказательство в смарт-контракт протокола.',
    technologies: ['ZK Proofs', 'Solidity', 'AI Agent', 'Chainlink Oracles', 'AWS'],
    outcome: 'Reduced compliance operational costs by 95%. Enabled a scalable, privacy-preserving onboarding flow that processed over 50,000 users in the first quarter while remaining fully decentralized and compliant with regulations.',
    outcomeRu: 'Сократили операционные расходы на соответствие нормативным требованиям на 95%. Обеспечили масштабируемый, сохраняющий конфиденциальность процесс регистрации, который обработал более 50,000 пользователей в первом квартале, оставаясь полностью децентрализованным и соответствующим регулированию.',
    imageUrl: case01
  },
  {
    id: 'case-02',
    title: 'Real-Time Pharmaceutical Supply Chain Auditing via a Private Blockchain and Predictive AI Agents',
    titleRu: 'Аудит цепочки поставок фармацевтических препаратов в реальном времени через приватный блокчейн и прогнозирующие AI-агенты',
    client: 'A Global Pharmaceutical Logistics Provider',
    clientRu: 'Глобальный поставщик фармацевтической логистики',
    challenge: 'Ensuring temperature integrity and preventing counterfeiting across a multi-stage, global supply chain was a major liability. Lapses resulted in millions in lost product and severe regulatory risk.',
    challengeRu: 'Обеспечение температурной целостности и предотвращение подделок в многоэтапной глобальной цепочке поставок было серьезной проблемой. Нарушения приводили к потерям продукции на миллионы и серьезным регулятивным рискам.',
    solution: 'We deployed a permissioned EVM blockchain (Hyperledger Besu) to create an immutable audit trail, recording data from IoT sensors at every stage. We then layered an AI agent that continuously monitored this on-chain data using TensorFlow models trained on historical data.',
    solutionRu: 'Мы развернули разрешенный EVM блокчейн (Hyperledger Besu) для создания неизменяемого аудиторского следа, записывающего данные с IoT-сенсоров на каждом этапе. Затем мы добавили AI-агент, который непрерывно отслеживал эти данные в сети, используя модели TensorFlow, обученные на исторических данных.',
    technologies: ['EVM Private Chain', 'AI Agent', 'IoT Integration', 'Kubernetes', 'PostgreSQL'],
    outcome: 'Achieved 99.9% verifiable product integrity across 15 countries. Reduced spoilage-related losses by $2.1M in the first year. Automated audit reporting for regulators, saving an estimated 1,200 man-hours annually.',
    outcomeRu: 'Достигли 99.9% проверяемой целостности продукции в 15 странах. Сократили потери от порчи на $2.1М в первый год. Автоматизировали отчетность для регуляторов, сэкономив около 1,200 человеко-часов в год.',
    imageUrl: case02
  },
  {
    id: 'case-03',
    title: 'Dynamic NFT Royalties for a Creator Economy Platform on Solana',
    titleRu: 'Динамические роялти NFT для платформы экономики создателей на Solana',
    client: 'An Emerging Music and Digital Art NFT Marketplace',
    clientRu: 'Развивающийся NFT маркетплейс музыки и цифрового искусства',
    challenge: 'The platform wanted to reward creators based on the long-term cultural impact of their work, not just initial sales. A static royalty percentage failed to capture and incentivize sustained relevance.',
    challengeRu: 'Платформа хотела вознаграждать создателей на основе долгосрочного культурного влияния их работ, а не только первоначальных продаж. Статический процент роялти не мог отразить и стимулировать устойчивую релевантность.',
    solution: 'We engineered a novel smart contract system on Solana where royalty percentages are not fixed. An off-chain AI agent ingests both on-chain data and off-chain social metrics, calculating a "Relevance Score" that dynamically adjusts the creator\'s royalty share.',
    solutionRu: 'Мы разработали новую систему смарт-контрактов на Solana, где проценты роялти не фиксированы. AI-агент вне сети обрабатывает как данные в сети, так и социальные метрики вне сети, вычисляя "Балл релевантности", который динамически корректирует долю роялти создателя.',
    technologies: ['Solana', 'AI Agent', 'Vector DBs', 'Next.js', 'GCP'],
    outcome: 'Increased creator retention by 60% and boosted secondary market trading volume by 250% as the innovative and fair economic model attracted top-tier artists to the platform.',
    outcomeRu: 'Увеличили удержание создателей на 60% и повысили объем торгов на вторичном рынке на 250%, поскольку инновационная и справедливая экономическая модель привлекла высококлассных художников на платформу.',
    imageUrl: case03
  },
  {
    id: 'case-04',
    title: 'AI-Powered Governance Proposal Analyst for a Top-10 DAO',
    titleRu: 'AI-аналитик предложений управления для ТОП-10 DAO',
    client: 'A Major Decentralized Finance (DeFi) DAO',
    clientRu: 'Крупное децентрализованное финансовое (DeFi) DAO',
    challenge: 'Token holders were overwhelmed by the volume and complexity of technical and financial governance proposals. This led to low voter participation and a high risk of poorly informed decisions impacting a multi-billion dollar treasury.',
    challengeRu: 'Держатели токенов были перегружены объемом и сложностью технических и финансовых предложений по управлению. Это привело к низкому участию избирателей и высокому риску плохо информированных решений, влияющих на многомиллиардную казну.',
    solution: 'We built an AI agent that integrates directly with the DAO\'s governance portal and Discord server. For each new proposal, the agent automatically generates a concise summary, simulates financial impact, cross-references past votes, and analyzes community sentiment.',
    solutionRu: 'Мы создали AI-агент, который интегрируется напрямую с порталом управления DAO и Discord сервером. Для каждого нового предложения агент автоматически генерирует краткое резюме, симулирует финансовое влияние, сопоставляет с прошлыми голосованиями и анализирует настроения сообщества.',
    technologies: ['DAO Governance', 'AI Agent', 'Vector DBs', 'Discord API'],
    outcome: 'Voter participation increased by 45%. The average time-to-vote for active delegates was reduced by 3 days. Qualitative feedback showed a 90% improvement in voter confidence regarding complex technical proposals.',
    outcomeRu: 'Участие избирателей увеличилось на 45%. Среднее время до голосования для активных делегатов сократилось на 3 дня. Качественная обратная связь показала 90% улучшение уверенности избирателей в отношении сложных технических предложений.',
    imageUrl: case04
  },
  {
    id: 'case-05',
    title: 'Autonomous HR Agent for Technical Talent Sourcing & Screening',
    titleRu: 'Автономный HR-агент для поиска и отбора технических талантов',
    client: 'A Scale-Up FinTech Company',
    clientRu: 'Масштабируемая FinTech компания',
    challenge: 'The client\'s HR team spent over 60% of their time on manual sourcing and initial screening of software engineers, creating a massive bottleneck for company growth.',
    challengeRu: 'HR-команда клиента тратила более 60% времени на ручной поиск и первоначальный отбор инженеров-программистов, создавая огромное узкое место для роста компании.',
    solution: 'We developed an AI agent to fully automate the top-of-funnel recruiting process. The agent scans GitHub, LinkedIn, and developer forums for suitable candidates, conducts initial technical screening, and schedules interviews.',
    solutionRu: 'Мы разработали AI-агент для полной автоматизации процесса найма на верхнем уровне воронки. Агент сканирует GitHub, LinkedIn и форумы разработчиков в поисках подходящих кандидатов, проводит первоначальный технический отбор и назначает интервью.',
    technologies: ['AI Agent', 'Kubernetes', 'AWS', 'LinkedIn API', 'PostgreSQL'],
    outcome: 'Reduced time-to-hire by 50% (from 45 days to 22 days). Freed up 25 hours per week for the senior HR team. Increased the quality of candidates reaching the final stage by 35%.',
    outcomeRu: 'Сократили время найма на 50% (с 45 до 22 дней). Освободили 25 часов в неделю для старшей HR-команды. Повысили качество кандидатов, достигающих финальной стадии, на 35%.',
    imageUrl: case05
  }
];
=======
import { Card, CardContent, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { cases, technologies } from '../data/casesData';
>>>>>>> 1b9cdb2 (Обновлены контакты и меню: новые ссылки, удалён Use Cases)

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
<<<<<<< HEAD
                <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                        <h4 className="font-semibold text-sm mb-2">{tech.name}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-3">{tech.description}</p>
=======
                <CarouselItem key={index} className="pl-1 basis-1/1 md:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full min-h-[200px]">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
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
                                parent.innerHTML = `<div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xs">${tech.name}</div>`;
                              }
                            }}
                          />
                        </div>
                        <h4 className="font-semibold text-sm mb-3">{tech.name}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          <span className="en-content">{tech.description}</span>
                          <span className="ru-content">{tech.descriptionRu}</span>
                        </p>
>>>>>>> 1b9cdb2 (Обновлены контакты и меню: новые ссылки, удалён Use Cases)
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
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {cases.slice(0, visibleCases).map((caseItem, index) => (
            <Card key={caseItem.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-0">
<<<<<<< HEAD
                  <div className="h-full bg-muted">
                    <img 
                      src={caseItem.imageUrl}
                      alt={language === 'en' ? caseItem.title : caseItem.titleRu} 
                      className="object-cover w-full h-full min-h-[300px]"
                      loading="lazy"
                    />
=======
                  <div className={`h-full bg-gradient-to-r ${caseItem.gradientColors} min-h-[55px] flex items-center justify-center`}>
                    <div className="text-white font-bold text-lg opacity-80">
                      Case {String(index + 1).padStart(2, '0')}
                    </div>
>>>>>>> 1b9cdb2 (Обновлены контакты и меню: новые ссылки, удалён Use Cases)
                  </div>
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        Case {String(index + 1).padStart(2, '0')}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <span className="en-content">{caseItem.client}</span>
                        <span className="ru-content">{caseItem.clientRu}</span>
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl mb-4 leading-tight">
                      <span className="en-content">{caseItem.title}</span>
                      <span className="ru-content">{caseItem.titleRu}</span>
                    </CardTitle>
                    
                    <div className="space-y-4">
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
<<<<<<< HEAD
=======
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
>>>>>>> 1b9cdb2 (Обновлены контакты и меню: новые ссылки, удалён Use Cases)
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