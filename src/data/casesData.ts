export interface Case {
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
    gradientColors: string;
    competencies: string[];
  }
  
  export interface Technology {
    name: string;
    description: string;
    descriptionRu: string;
    logoUrl: string;
  }
  
  export const technologies: Technology[] = [
      {
          name: 'OpenAI',
          description: 'For state-of-the-art Large Language Models (GPT series) and core reasoning capabilities.',
          descriptionRu: 'Для современных больших языковых моделей (серия GPT) и основных возможностей рассуждения.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg'
      },
      {
          name: 'Google Cloud',
          description: 'For scalable cloud infrastructure, Vertex AI, and Gemini models.',
          descriptionRu: 'Для масштабируемой облачной инфраструктуры, Vertex AI и моделей Gemini.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
      },
      {
          name: 'AWS',
          description: 'For robust, secure, and globally distributed cloud services and Bedrock AI platform.',
          descriptionRu: 'Для надежных, безопасных и глобально распределенных облачных сервисов и платформы Bedrock AI.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
      },
      {
          name: 'Chainlink',
          description: 'The industry standard for decentralized oracle networks, connecting smart contracts to real-world data.',
          descriptionRu: 'Отраслевой стандарт для децентрализованных сетей оракулов, соединяющих смарт-контракты с данными реального мира.',
          logoUrl: 'https://cryptologos.cc/logos/chainlink-link-logo.svg'
      },
      {
          name: 'The Graph',
          description: 'The standard protocol for indexing and querying data from blockchains like Ethereum and Solana.',
          descriptionRu: 'Стандартный протокол для индексации и запроса данных из блокчейнов, таких как Ethereum и Solana.',
          logoUrl: 'https://cryptologos.cc/logos/the-graph-grt-logo.svg'
      },
      {
          name: 'LangChain',
          description: 'The primary framework for developing context-aware, reasoning AI agents and applications.',
          descriptionRu: 'Основной фреймворк для разработки контекстно-зависимых, рассуждающих AI-агентов и приложений.',
          logoUrl: 'https://python.langchain.com/img/brand/wordmark.png'
      },
      {
          name: 'Kubernetes',
          description: 'The leading open-source standard for automating deployment, scaling, and management of containerized applications.',
          descriptionRu: 'Ведущий открытый стандарт для автоматизации развертывания, масштабирования и управления контейнеризованными приложениями.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
      },
      {
          name: 'Docker',
          description: 'The industry standard for containerization, ensuring consistency across development and production environments.',
          descriptionRu: 'Отраслевой стандарт для контейнеризации, обеспечивающий согласованность между средами разработки и производства.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      {
          name: 'OpenZeppelin',
          description: 'The gold standard for secure, audited, and community-vetted smart contract libraries for the EVM.',
          descriptionRu: 'Золотой стандарт для безопасных, проверенных и одобренных сообществом библиотек смарт-контрактов для EVM.',
          logoUrl: 'https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/master/logo.svg'
      },
      {
          name: 'Hardhat & Foundry',
          description: 'Premier development environments for compiling, deploying, testing, and debugging Ethereum-based software.',
          descriptionRu: 'Премиальные среды разработки для компиляции, развертывания, тестирования и отладки программного обеспечения на основе Ethereum.',
          logoUrl: 'https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png'
      },
      {
          name: 'Pinecone',
          description: 'A leading vector database for building high-performance AI applications with long-term memory.',
          descriptionRu: 'Ведущая векторная база данных для создания высокопроизводительных AI-приложений с долгосрочной памятью.',
          logoUrl: 'https://seeklogo.com/images/P/pinecone-icon-logo-AF8B5B7F96-seeklogo.com.png'
      },
      {
          name: 'PostgreSQL',
          description: 'The world\'s most advanced open-source relational database, trusted for its reliability and data integrity.',
          descriptionRu: 'Самая продвинутая в мире реляционная база данных с открытым исходным кодом, которой доверяют за надежность и целостность данных.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
      {
          name: 'Vercel',
          description: 'The definitive platform for deploying and scaling modern frontend applications (React, Next.js).',
          descriptionRu: 'Определяющая платформа для развертывания и масштабирования современных фронтенд-приложений (React, Next.js).',
          logoUrl: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png'
      },
      {
          name: 'GitHub Actions',
          description: 'The standard for building robust, automated CI/CD pipelines directly within the development workflow.',
          descriptionRu: 'Стандарт для создания надежных автоматизированных CI/CD пайплайнов непосредственно в рабочем процессе разработки.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      },
      {
          name: 'Anthropic (Claude)',
          description: 'For access to alternative, safety-focused large language models, providing flexibility and depth to our AI solutions.',
          descriptionRu: 'Для доступа к альтернативным, ориентированным на безопасность большим языковым моделям, обеспечивающим гибкость и глубину наших AI-решений.',
          logoUrl: 'https://www.anthropic.com/images/icons/anthropic-logomark.svg'
      },
      {
          name: 'React',
          description: 'The leading JavaScript library for building user interfaces and modern web applications.',
          descriptionRu: 'Ведущая JavaScript библиотека для создания пользовательских интерфейсов и современных веб-приложений.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
          name: 'Next.js',
          description: 'The React framework for production-grade applications with server-side rendering and static generation.',
          descriptionRu: 'React фреймворк для продакшн-приложений с серверным рендерингом и статической генерацией.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
      },
      {
          name: 'TypeScript',
          description: 'Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
          descriptionRu: 'Строго типизированный язык программирования, основанный на JavaScript, обеспечивающий лучшие инструменты для любого масштаба.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      {
          name: 'Node.js',
          description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
          descriptionRu: 'JavaScript среда выполнения, построенная на движке V8 Chrome для создания масштабируемых сетевых приложений.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
          name: 'Python',
          description: 'High-level programming language ideal for AI/ML development, data analysis, and backend services.',
          descriptionRu: 'Высокоуровневый язык программирования, идеальный для разработки AI/ML, анализа данных и бэкенд-сервисов.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
          name: 'Solidity',
          description: 'Object-oriented programming language for implementing smart contracts on various blockchain platforms.',
          descriptionRu: 'Объектно-ориентированный язык программирования для реализации смарт-контрактов на различных блокчейн-платформах.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg'
      },
      {
          name: 'Rust',
          description: 'Systems programming language focused on safety, speed, and concurrency, ideal for blockchain development.',
          descriptionRu: 'Системный язык программирования, сосредоточенный на безопасности, скорости и параллелизме, идеальный для разработки блокчейна.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg'
      },
      {
          name: 'MongoDB',
          description: 'Document-oriented NoSQL database program, using JSON-like documents with optional schemas.',
          descriptionRu: 'Документо-ориентированная NoSQL база данных, использующая JSON-подобные документы с опциональными схемами.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      {
          name: 'Redis',
          description: 'In-memory data structure store, used as a database, cache, and message broker.',
          descriptionRu: 'Хранилище структур данных в памяти, используемое как база данных, кэш и брокер сообщений.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
      },
      {
          name: 'TensorFlow',
          description: 'End-to-end open source platform for machine learning and AI model development.',
          descriptionRu: 'Комплексная платформа с открытым исходным кодом для машинного обучения и разработки AI-моделей.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
      },
      {
          name: 'PyTorch',
          description: 'Open source machine learning library based on the Torch library, used for applications such as computer vision and natural language processing.',
          descriptionRu: 'Библиотека машинного обучения с открытым исходным кодом, основанная на библиотеке Torch, используемая для компьютерного зрения и обработки естественного языка.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
      },
      {
          name: 'Ethereum',
          description: 'Decentralized platform that runs smart contracts and serves as the foundation for decentralized applications.',
          descriptionRu: 'Децентрализованная платформа, которая выполняет смарт-контракты и служит основой для децентрализованных приложений.',
          logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg'
      },
      {
          name: 'Solana',
          description: 'High-performance blockchain supporting builders around the world creating crypto apps that scale.',
          descriptionRu: 'Высокопроизводительный блокчейн, поддерживающий разработчиков по всему миру в создании масштабируемых криптоприложений.',
          logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.svg'
      },
      {
          name: 'TON',
          description: 'The Open Network is a decentralized and open internet platform made up of several components.',
          descriptionRu: 'The Open Network - это децентрализованная и открытая интернет-платформа, состоящая из нескольких компонентов.',
          logoUrl: 'https://cryptologos.cc/logos/toncoin-ton-logo.svg'
      },
      {
          name: 'Supabase',
          description: 'The open source Firebase alternative. Instant APIs, Edge Functions, Realtime subscriptions, and Storage.',
          descriptionRu: 'Открытая альтернатива Firebase. Мгновенные API, Edge Functions, подписки в реальном времени и хранилище.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg'
      },
      {
          name: 'Elixir',
          description: 'Dynamic, functional language designed for building maintainable and scalable applications.',
          descriptionRu: 'Динамический функциональный язык, разработанный для создания поддерживаемых и масштабируемых приложений.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg'
      },
      {
          name: 'FastAPI',
          description: 'Modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints.',
          descriptionRu: 'Современный, быстрый веб-фреймворк для создания API с Python 3.7+ на основе стандартных подсказок типов Python.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
      },
      {
          name: 'GraphQL',
          description: 'A query language for APIs and a runtime for fulfilling those queries with your existing data.',
          descriptionRu: 'Язык запросов для API и среда выполнения для выполнения этих запросов с существующими данными.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
      },
      {
          name: 'Prisma',
          description: 'Next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, MariaDB, SQL Server, and SQLite.',
          descriptionRu: 'ORM нового поколения для Node.js и TypeScript для PostgreSQL, MySQL, MariaDB, SQL Server и SQLite.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg'
      },
      {
          name: 'Tailwind CSS',
          description: 'A utility-first CSS framework packed with classes to build any design, directly in your markup.',
          descriptionRu: 'CSS-фреймворк, ориентированный на утилиты, с классами для создания любого дизайна прямо в разметке.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
      },
      {
          name: 'Vite',
          description: 'Next generation frontend tooling. Fast, opinionated web dev build tool that serves code via native ES modules.',
          descriptionRu: 'Инструментарий фронтенда нового поколения. Быстрый инструмент сборки для веб-разработки, который обслуживает код через нативные ES-модули.',
          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'
      }
  ];
  
  export const cases: Case[] = [
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
          gradientColors: 'from-purple-600 to-blue-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Cloud & DevOps']
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
          gradientColors: 'from-blue-600 to-indigo-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Cloud & DevOps', 'Databases']
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
          gradientColors: 'from-green-600 to-teal-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Frontend', 'Cloud & DevOps']
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
          gradientColors: 'from-red-600 to-pink-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data']
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
          gradientColors: 'from-orange-600 to-yellow-600',
          competencies: ['AI/ML & Data', 'Cloud & DevOps', 'Databases']
      },
      {
          id: 'case-06',
          title: 'AI-Driven Dynamic Economy for a TON-Based Web3 Game',
          titleRu: 'AI-управляемая динамическая экономика для Web3 игры на TON',
          client: 'A Web3 Mobile Game Studio',
          clientRu: 'Студия Web3 мобильных игр',
          challenge: 'The game\'s economy was static, leading to inflation of in-game items and a lack of long-term engagement. The studio needed a system that could self-regulate to maintain item value and player interest.',
          challengeRu: 'Экономика игры была статичной, что приводило к инфляции внутриигровых предметов и отсутствию долгосрочной вовлеченности. Студии нужна была система, способная к саморегулированию для поддержания ценности предметов и интереса игроков.',
          solution: 'We built a system of autonomous AI agents on the TON blockchain. These agents act as "central bankers" for the game\'s economy. They monitor real-time player activity, market supply, and demand for in-game assets (NFTs). Based on this data, they dynamically adjust item drop rates, crafting costs, and vendor prices to prevent inflation and create a stable, engaging player-driven economy.',
          solutionRu: 'Мы создали систему автономных AI-агентов на блокчейне TON. Эти агенты действуют как "центральные банкиры" игровой экономики. Они отслеживают активность игроков в реальном времени, рыночное предложение и спрос на внутриигровые активы (NFT). На основе этих данных они динамически корректируют частоту выпадения предметов, стоимость крафта и цены у торговцев для предотвращения инфляции и создания стабильной, увлекательной экономики, управляемой игроками.',
          technologies: ['TON', 'AI Agent', 'React', '.NET Core', 'MongoDB'],
          outcome: 'Increased average player retention by 40%. Stabilized the value of top-tier in-game assets, leading to a 300% increase in secondary market trading volume and creating a sustainable economic loop for the game.',
          outcomeRu: 'Увеличили среднее удержание игроков на 40%. Стабилизировали стоимость высокоуровневых внутриигровых активов, что привело к 300% росту объема торгов на вторичном рынке и созданию устойчивого экономического цикла для игры.',
          gradientColors: 'from-cyan-600 to-blue-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Frontend', 'Full-Stack & Backend', 'Databases']
      },
      {
          id: 'case-07',
          title: 'High-Frequency Cross-Chain Arbitrage Agent',
          titleRu: 'Высокочастотный кросс-чейн арбитражный агент',
          client: 'A Crypto-Native Hedge Fund',
          clientRu: 'Криптонативный хедж-фонд',
          challenge: 'The client wanted to capitalize on price inefficiencies between DEXs on EVM chains (like Ethereum) and non-EVM chains (like Solana), but manual execution was too slow and complex to be profitable.',
          challengeRu: 'Клиент хотел извлечь выгоду из ценовых неэффективностей между DEX на EVM-чейнах (как Ethereum) и не-EVM чейнах (как Solana), но ручное исполнение было слишком медленным и сложным для получения прибыли.',
          solution: 'We developed a sophisticated, low-latency AI agent that simultaneously monitors liquidity pools on Uniswap (Ethereum) and Raydium (Solana). When it detects a profitable arbitrage opportunity, it autonomously executes a multi-leg trade: 1) Flash loan on Ethereum, 2) Swap on Uniswap, 3) Bridge assets to Solana via Wormhole, 4) Swap on Raydium, 5) Bridge assets back, 6) Repay flash loan—all within a single atomic transaction.',
          solutionRu: 'Мы разработали сложный AI-агент с низкой задержкой, который одновременно отслеживает пулы ликвидности на Uniswap (Ethereum) и Raydium (Solana). При обнаружении прибыльной арбитражной возможности он автономно выполняет многоэтапную сделку: 1) Флеш-займ на Ethereum, 2) Обмен на Uniswap, 3) Перевод активов в Solana через Wormhole, 4) Обмен на Raydium, 5) Перевод активов обратно, 6) Погашение флеш-займа — все в рамках одной атомарной транзакции.',
          technologies: ['Solidity', 'Rust', 'Wormhole SDK', 'AI Agent', 'Docker'],
          outcome: 'The agent successfully executed over 10,000 profitable arbitrage trades in its first month of operation, achieving a consistent alpha that was previously unattainable through manual or semi-automated strategies.',
          outcomeRu: 'Агент успешно выполнил более 10,000 прибыльных арбитражных сделок в первый месяц работы, достигнув стабильной альфы, которая ранее была недостижима через ручные или полуавтоматические стратегии.',
          gradientColors: 'from-emerald-600 to-green-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Cloud & DevOps']
      },
      {
          id: 'case-08',
          title: 'AI-Augmented Smart Contract Auditing Assistant for Enterprise Security',
          titleRu: 'AI-усиленный помощник аудита смарт-контрактов для корпоративной безопасности',
          client: 'A Big Four Consulting Firm\'s Blockchain Auditing Division',
          clientRu: 'Подразделение аудита блокчейна консалтинговой фирмы "Большой четверки"',
          challenge: 'Manual smart contract auditing was time-consuming, prone to human error, and struggled to keep pace with the increasing complexity of DeFi protocols. The client needed a tool to augment their human auditors\' capabilities, reduce audit time, and increase the detection rate of subtle vulnerabilities.',
          challengeRu: 'Ручной аудит смарт-контрактов был трудозатратным, подверженным человеческим ошибкам и с трудом поспевал за растущей сложностью DeFi протоколов. Клиенту нужен был инструмент для усиления возможностей человеческих аудиторов, сокращения времени аудита и повышения скорости обнаружения тонких уязвимостей.',
          solution: 'We created an AI-powered tool that integrates directly into the auditors\' VS Code environment. The AI agent, trained on a massive dataset of audited and vulnerable Solidity code (including all major historical exploits), provides real-time static analysis. It flags common vulnerabilities (re-entrancy, integer overflows, oracle manipulation risks) and, more importantly, uses pattern recognition to identify novel or unusual code structures that deviate from best practices, suggesting areas for deeper human review.',
          solutionRu: 'Мы создали AI-инструмент, который интегрируется напрямую в среду VS Code аудиторов. AI-агент, обученный на массивном наборе данных проверенного и уязвимого Solidity кода (включая все основные исторические эксплойты), обеспечивает статический анализ в реальном времени. Он отмечает распространенные уязвимости (реентерабельность, переполнения целых чисел, риски манипуляций с оракулами) и, что более важно, использует распознавание паттернов для выявления новых или необычных структур кода, отклоняющихся от лучших практик, предлагая области для более глубокого человеческого анализа.',
          technologies: ['AI/ML', 'Solidity Static Analysis', 'VS Code Extension', 'Node.js'],
          outcome: 'Accelerated the initial audit phase by 30%. Increased the detection rate of "low-to-medium" severity bugs by 75%, allowing human experts to focus their efforts on complex logical flaws. The tool is now a standard part of the client\'s Web3 auditing toolkit.',
          outcomeRu: 'Ускорили начальную фазу аудита на 30%. Повысили скорость обнаружения багов "низкой-средней" серьезности на 75%, позволив человеческим экспертам сосредоточить усилия на сложных логических недостатках. Инструмент теперь является стандартной частью Web3 аудиторского набора клиента.',
          gradientColors: 'from-violet-600 to-purple-600',
          competencies: ['AI/ML & Data', 'Blockchain & Web3', 'Frontend']
      },
      {
          id: 'case-09',
          title: 'Decentralized Clinical Trial Data Management for a DeSci DAO',
          titleRu: 'Децентрализованное управление данными клинических испытаний для DeSci DAO',
          client: 'A Decentralized Science (DeSci) initiative focused on rare disease research',
          clientRu: 'Инициатива децентрализованной науки (DeSci), сосредоточенная на исследовании редких заболеваний',
          challenge: 'Researchers needed access to sensitive patient data for clinical trials without violating patient privacy or centralizing the data on a hackable server. Traditional methods were slow and required layers of trust in intermediaries.',
          challengeRu: 'Исследователям нужен был доступ к конфиденциальным данным пациентов для клинических испытаний без нарушения конфиденциальности пациентов или централизации данных на взламываемом сервере. Традиционные методы были медленными и требовали слоев доверия к посредникам.',
          solution: 'We built a hybrid on-chain/off-chain system. An AI agent runs in a secure off-chain environment (AWS Nitro Enclave) to process and anonymize patient data. For each data point, it generates a Zero-Knowledge Proof confirming the data\'s validity (e.g., "this patient meets trial criteria X") without revealing the data itself. These proofs are anchored on an EVM chain, creating an immutable and auditable log for the DeSci DAO to verify trial integrity.',
          solutionRu: 'Мы создали гибридную систему on-chain/off-chain. AI-агент работает в безопасной off-chain среде (AWS Nitro Enclave) для обработки и анонимизации данных пациентов. Для каждой точки данных он генерирует доказательство с нулевым разглашением, подтверждающее валидность данных (например, "этот пациент соответствует критериям испытания X") без раскрытия самих данных. Эти доказательства закрепляются в EVM-чейне, создавая неизменяемый и проверяемый журнал для DeSci DAO для верификации целостности испытания.',
          technologies: ['DeSci', 'AI Agent', 'ZK-Proofs', 'Solidity', 'AWS'],
          outcome: 'Enabled a consortium of 15 research institutions to securely collaborate on a clinical trial. Reduced data verification time from weeks to minutes. Provided patients with cryptographic assurance that their raw data was never exposed.',
          outcomeRu: 'Позволили консорциуму из 15 исследовательских институтов безопасно сотрудничать в клиническом испытании. Сократили время верификации данных с недель до минут. Предоставили пациентам криптографическую гарантию того, что их исходные данные никогда не раскрывались.',
          gradientColors: 'from-teal-600 to-cyan-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Cloud & DevOps']
      },
      {
          id: 'case-10',
          title: 'Automated Enterprise Knowledge Base Agent for a Remote-First Company',
          titleRu: 'Автоматизированный агент корпоративной базы знаний для удаленной компании',
          client: 'A 5,000-employee global software company',
          clientRu: 'Глобальная софтверная компания с 5,000 сотрудников',
          challenge: 'With a fully remote workforce and information scattered across Google Drive, Confluence, Notion, and Slack, employees were wasting hours every day searching for internal information, leading to massive productivity losses.',
          challengeRu: 'При полностью удаленной рабочей силе и информации, разбросанной по Google Drive, Confluence, Notion и Slack, сотрудники тратили часы каждый день на поиск внутренней информации, что приводило к массивным потерям продуктивности.',
          solution: 'We deployed a custom AI agent that continuously and securely indexes all of the company\'s internal documentation. Using a Retrieval-Augmented Generation (RAG) architecture with a vector database, the agent provides instant, accurate, and source-cited answers to employee questions directly within Slack. It understands context, permissions, and can synthesize information from multiple sources into a single response.',
          solutionRu: 'Мы развернули кастомный AI-агент, который непрерывно и безопасно индексирует всю внутреннюю документацию компании. Используя архитектуру Retrieval-Augmented Generation (RAG) с векторной базой данных, агент предоставляет мгновенные, точные и с указанием источников ответы на вопросы сотрудников прямо в Slack. Он понимает контекст, разрешения и может синтезировать информацию из множественных источников в единый ответ.',
          technologies: ['AI Agent', 'RAG', 'Vector DBs', 'Slack API', 'Kubernetes'],
          outcome: 'Resolved an estimated 60% of internal support queries without human intervention. Saved an average of 45 minutes per employee per week, translating to over 3,700 hours of recovered productivity weekly across the organization.',
          outcomeRu: 'Решили примерно 60% внутренних запросов поддержки без человеческого вмешательства. Сэкономили в среднем 45 минут на сотрудника в неделю, что переводится в более чем 3,700 часов восстановленной продуктивности еженедельно по всей организации.',
          gradientColors: 'from-indigo-600 to-blue-600',
          competencies: ['AI/ML & Data', 'Cloud & DevOps', 'Full-Stack & Backend']
      },
      {
  
          id: 'case-11',
          title: 'AI-Driven Treasury Management & Grant Allocation Agent for a Grant-Making DAO',
          titleRu: 'AI-управляемый агент управления казной и распределения грантов для DAO, выдающего гранты',
          client: 'An Ecosystem Grant DAO on Ethereum',
          clientRu: 'Экосистемное грант DAO на Ethereum',
          challenge: 'The DAO\'s treasury management committee was struggling to efficiently evaluate hundreds of grant applications, leading to slow capital deployment and suboptimal allocation decisions. They needed a data-driven way to prioritize high-potential projects.',
          challengeRu: 'Комитет управления казной DAO с трудом эффективно оценивал сотни заявок на гранты, что приводило к медленному развертыванию капитала и неоптимальным решениям по распределению. Им нужен был основанный на данных способ приоритизации высокопотенциальных проектов.',
          solution: 'We built an AI agent to act as a co-pilot for the treasury committee. The agent analyzes each new grant proposal for clarity, feasibility, and team track record (by analyzing on-chain history). It then runs financial simulations to model the potential ROI for the ecosystem and assigns a priority score. This allows the human committee to focus their due diligence on the top 10% most promising projects.',
          solutionRu: 'Мы создали AI-агент для работы в качестве со-пилота для комитета казны. Агент анализирует каждое новое предложение гранта на ясность, осуществимость и послужной список команды (анализируя историю в сети). Затем он запускает финансовые симуляции для моделирования потенциального ROI для экосистемы и присваивает приоритетный балл. Это позволяет человеческому комитету сосредоточить свою должную осмотрительность на топ 10% наиболее перспективных проектов.',
          technologies: ['DAO Governance', 'AI Agent', 'On-chain Data Analysis', 'Solidity', 'React'],
          outcome: 'Reduced the grant approval timeline from 6 weeks to 2 weeks. Increased the measured success rate (projects reaching their stated goals) of funded projects by 40%. Made the allocation process more transparent and data-driven for the entire community.',
          outcomeRu: 'Сократили временные рамки одобрения грантов с 6 недель до 2 недель. Увеличили измеренный уровень успеха (проекты, достигающие заявленных целей) финансируемых проектов на 40%. Сделали процесс распределения более прозрачным и основанным на данных для всего сообщества.',
          gradientColors: 'from-amber-600 to-orange-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Frontend']
      },
      {
          id: 'case-12',
          title: 'Proactive AI Security Agent for Web3 Wallet Interactions',
          titleRu: 'Проактивный AI-агент безопасности для взаимодействий Web3 кошельков',
          client: 'A popular multi-chain Web3 wallet provider',
          clientRu: 'Популярный провайдер мультичейн Web3 кошельков',
          challenge: 'Users were increasingly falling victim to sophisticated phishing attacks and malicious smart contracts that drained their wallets. The client needed a proactive security layer to protect users before they signed a dangerous transaction.',
          challengeRu: 'Пользователи все чаще становились жертвами сложных фишинговых атак и вредоносных смарт-контрактов, которые опустошали их кошельки. Клиенту нужен был проактивный слой безопасности для защиты пользователей до подписания опасной транзакции.',
          solution: 'We developed an AI security agent that plugs into the wallet\'s transaction confirmation screen. Before a user signs, the agent simulates the transaction in a sandboxed environment. It analyzes the smart contract for known exploit patterns, checks the destination address against a threat intelligence database, and uses an LLM to translate the complex transaction data into a simple, human-readable summary (e.g., "Warning: This transaction will grant unlimited approval of your WETH to an unknown contract").',
          solutionRu: 'Мы разработали AI-агент безопасности, который подключается к экрану подтверждения транзакций кошелька. Перед подписанием пользователем агент симулирует транзакцию в изолированной среде. Он анализирует смарт-контракт на известные паттерны эксплойтов, проверяет адрес назначения против базы данных угроз и использует LLM для перевода сложных данных транзакции в простое, понятное человеку резюме (например, "Предупреждение: Эта транзакция предоставит неограниченное одобрение вашего WETH неизвестному контракту").',
          technologies: ['AI Agent', 'Solidity', 'EVM', 'Security Simulation', 'Go'],
          outcome: 'Prevented an estimated $5M+ in user fund losses during its 3-month beta period. Increased user trust and confidence, leading to a 15% increase in user retention for the wallet.',
          outcomeRu: 'Предотвратили примерно $5М+ потерь пользовательских средств в течение 3-месячного бета-периода. Повысили доверие и уверенность пользователей, что привело к 15% росту удержания пользователей кошелька.',
          gradientColors: 'from-red-600 to-rose-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Full-Stack & Backend']
      },
      {
          id: 'case-13',
          title: 'Generative AI Agent for Hyper-Personalized Marketing Campaigns',
          titleRu: 'Генеративный AI-агент для гиперперсонализированных маркетинговых кампаний',
          client: 'A Direct-to-Consumer E-commerce Brand',
          clientRu: 'Бренд электронной коммерции прямых продаж потребителям',
          challenge: 'The client\'s marketing team was spending a huge budget on generic ads with low conversion rates. They lacked the resources to create thousands of ad variations needed for true personalization.',
          challengeRu: 'Маркетинговая команда клиента тратила огромный бюджет на общие рекламы с низкими коэффициентами конверсии. У них не хватало ресурсов для создания тысяч вариаций рекламы, необходимых для истинной персонализации.',
          solution: 'We created a creative AI agent that connects to the client\'s product catalog and customer data platform. The agent uses generative models (like Midjourney/DALL-E for images and GPT-4 for copy) to automatically create hundreds of unique ad creatives tailored to specific customer segments (e.g., "For urban professionals," "For outdoor enthusiasts"). It then A/B tests these creatives via marketing APIs and reallocates budget to the best performers in real-time.',
          solutionRu: 'Мы создали креативный AI-агент, который подключается к каталогу продуктов клиента и платформе клиентских данных. Агент использует генеративные модели (как Midjourney/DALL-E для изображений и GPT-4 для текста) для автоматического создания сотен уникальных рекламных креативов, адаптированных к конкретным сегментам клиентов (например, "Для городских профессионалов", "Для любителей активного отдыха"). Затем он A/B тестирует эти креативы через маркетинговые API и перераспределяет бюджет на лучших исполнителей в реальном времени.',
          technologies: ['Generative AI', 'Marketing APIs', 'Python', 'AWS Lambda', 'Vue.js'],
          outcome: 'Increased Return on Ad Spend (ROAS) by 2.5x. Reduced creative production costs by 80%. Boosted overall conversion rate by 22% by serving highly relevant ads to each user segment.',
          outcomeRu: 'Увеличили возврат на рекламные расходы (ROAS) в 2.5 раза. Сократили затраты на производство креативов на 80%. Повысили общий коэффициент конверсии на 22%, подавая высокорелевантные рекламы каждому пользовательскому сегменту.',
          gradientColors: 'from-pink-600 to-purple-600',
          competencies: ['AI/ML & Data', 'Cloud & DevOps', 'Frontend']
      },
      {
          id: 'case-14',
          title: 'Autonomous Cloud Cost Optimization Agent for a SaaS Platform',
          titleRu: 'Автономный агент оптимизации облачных затрат для SaaS платформы',
          client: 'A B2B SaaS company with a large AWS footprint',
          clientRu: 'B2B SaaS компания с большим присутствием в AWS',
          challenge: 'The client\'s cloud infrastructure costs were spiraling out of control due to inefficient resource allocation, idle instances, and complex billing. Manual optimization was a full-time job that couldn\'t keep up.',
          challengeRu: 'Затраты на облачную инфраструктуру клиента выходили из-под контроля из-за неэффективного распределения ресурсов, простаивающих инстансов и сложного биллинга. Ручная оптимизация была работой на полный рабочий день, которая не могла поспевать.',
          solution: 'We deployed an AI agent with read/write access to the client\'s AWS account. The agent continuously analyzes resource utilization (CPU, RAM, network) across their entire fleet of EC2 instances, RDS databases, and Kubernetes clusters. It autonomously performs actions like terminating idle instances, downsizing underutilized resources, and purchasing/selling Reserved Instances based on predictive usage patterns to maximize savings.',
          solutionRu: 'Мы развернули AI-агент с доступом на чтение/запись к AWS аккаунту клиента. Агент непрерывно анализирует использование ресурсов (CPU, RAM, сеть) по всему их флоту EC2 инстансов, RDS баз данных и Kubernetes кластеров. Он автономно выполняет действия, такие как завершение простаивающих инстансов, уменьшение размера недоиспользуемых ресурсов и покупка/продажа зарезервированных инстансов на основе прогнозных паттернов использования для максимизации экономии.',
          technologies: ['AI Agent', 'AWS API', 'Terraform', 'Kubernetes', 'PostgreSQL'],
          outcome: 'Reduced the client\'s monthly AWS bill by a consistent 35% (saving over $40,000/month). Eliminated the need for a dedicated DevOps engineer to manage cost optimization. Ensured 99.9% uptime by only acting within safe, predefined parameters.',
          outcomeRu: 'Сократили ежемесячный счет AWS клиента на стабильные 35% (экономия более $40,000/месяц). Устранили необходимость в выделенном DevOps инженере для управления оптимизацией затрат. Обеспечили 99.9% времени работы, действуя только в рамках безопасных, предопределенных параметров.',
          gradientColors: 'from-sky-600 to-blue-600',
          competencies: ['AI/ML & Data', 'Cloud & DevOps', 'Databases']
      },
      {
          id: 'case-15',
          title: 'AI-Powered Legal Agreement-to-Smart Contract Agent for DAO Creation',
          titleRu: 'AI-агент преобразования юридических соглашений в смарт-контракты для создания DAO',
          client: 'A platform for launching venture DAOs',
          clientRu: 'Платформа для запуска венчурных DAO',
          challenge: 'The process of translating complex legal partnership agreements into secure, gas-efficient, and bug-free smart contracts was a major bottleneck. It required expensive legal and blockchain developer hours, slowing down the launch of new DAOs on the platform.',
          challengeRu: 'Процесс перевода сложных юридических партнерских соглашений в безопасные, газоэффективные и безошибочные смарт-контракты был основным узким местом. Это требовало дорогих часов юристов и блокчейн-разработчиков, замедляя запуск новых DAO на платформе.',
          solution: 'We developed a specialized AI agent for the client\'s platform. Legal teams upload a standard LLC operating agreement or investment thesis. The AI agent, trained on a curated dataset of legal clauses and corresponding audited smart contract patterns, parses the document and generates a ready-to-deploy set of Solidity contracts for DAO governance, treasury management, and voting, complete with comments explaining each function.',
          solutionRu: 'Мы разработали специализированный AI-агент для платформы клиента. Юридические команды загружают стандартное операционное соглашение LLC или инвестиционный тезис. AI-агент, обученный на кураторском наборе данных юридических клаузул и соответствующих проверенных паттернов смарт-контрактов, парсит документ и генерирует готовый к развертыванию набор Solidity контрактов для управления DAO, управления казной и голосования, с комментариями, объясняющими каждую функцию.',
          technologies: ['AI Agent', 'Solidity', 'Hardhat', 'Protocol Design', '.NET Core'],
          outcome: 'Reduced the time to deploy a new venture DAO from 4 weeks to under 3 days. Lowered the legal and development costs per launch by 70%. Ensured a higher standard of security and best practices across all DAOs launched on the platform.',
          outcomeRu: 'Сократили время развертывания нового венчурного DAO с 4 недель до менее 3 дней. Снизили юридические и разработческие затраты на запуск на 70%. Обеспечили более высокий стандарт безопасности и лучших практик во всех DAO, запущенных на платформе.',
          gradientColors: 'from-slate-600 to-gray-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Full-Stack & Backend']
      },
  
      {
          id: 'case-16',
          title: 'Predictive Transaction Routing Agent for a DEX Aggregator',
          titleRu: 'Прогнозирующий агент маршрутизации транзакций для DEX агрегатора',
          client: 'A Decentralized Exchange (DEX) Aggregator on EVM chains',
          clientRu: 'Агрегатор децентрализованных бирж (DEX) на EVM чейнах',
          challenge: 'To provide the best possible prices for users, the aggregator needed to split large trades across multiple liquidity pools. Calculating the optimal path in real-time was computationally intensive and often failed to account for sudden liquidity shifts, resulting in high slippage.',
          challengeRu: 'Для предоставления лучших возможных цен пользователям агрегатор должен был разделять крупные сделки между множественными пулами ликвидности. Вычисление оптимального пути в реальном времени было вычислительно интенсивным и часто не учитывало внезапные сдвиги ликвидности, приводя к высокому проскальзыванию.',
          solution: 'We built a predictive AI agent that runs alongside their existing routing algorithm. The agent analyzes mempool data and historical liquidity fluctuations to predict the likely price impact of a large swap before it is executed. It then recommends an optimal split-path that proactively avoids congested or shallow pools, passing this strategy to the smart contract for execution.',
          solutionRu: 'Мы создали прогнозирующий AI-агент, который работает вместе с их существующим алгоритмом маршрутизации. Агент анализирует данные мемпула и исторические колебания ликвидности для прогнозирования вероятного ценового воздействия крупного обмена до его выполнения. Затем он рекомендует оптимальный разделенный путь, который проактивно избегает перегруженных или мелких пулов, передавая эту стратегию смарт-контракту для выполнения.',
          technologies: ['AI/ML', 'On-chain Data Analysis', 'Solidity', 'Go', 'EVM'],
          outcome: 'Reduced average slippage on large-cap token swaps by an average of 0.15%, directly saving users millions of dollars. Improved the aggregator\'s competitive edge, leading to a 20% increase in trading volume.',
          outcomeRu: 'Сократили среднее проскальзывание на обменах токенов с большой капитализацией в среднем на 0.15%, напрямую сэкономив пользователям миллионы долларов. Улучшили конкурентное преимущество агрегатора, что привело к 20% росту торгового объема.',
          gradientColors: 'from-lime-600 to-green-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Full-Stack & Backend']
      },
      {
          id: 'case-17',
          title: 'Generative AI Agent for Creating Privacy-Preserving Synthetic Datasets',
          titleRu: 'Генеративный AI-агент для создания синтетических наборов данных с сохранением конфиденциальности',
          client: 'A large healthcare research organization',
          clientRu: 'Крупная организация медицинских исследований',
          challenge: 'The client possessed a vast and valuable dataset of patient records but could not share it with external researchers due to strict HIPAA privacy regulations. This severely limited collaborative research opportunities.',
          challengeRu: 'Клиент обладал обширным и ценным набором данных медицинских записей пациентов, но не мог поделиться им с внешними исследователями из-за строгих правил конфиденциальности HIPAA. Это серьезно ограничивало возможности совместных исследований.',
          solution: 'We developed a generative AI agent using a Generative Adversarial Network (GAN) architecture. The agent was trained on the client\'s private patient dataset within their secure environment. It learned the statistical distributions and correlations within the data and is now able to generate a "synthetic" dataset. This new dataset is statistically identical to the original but contains no real patient information, allowing it to be safely shared with researchers worldwide.',
          solutionRu: 'Мы разработали генеративный AI-агент, используя архитектуру генеративно-состязательной сети (GAN). Агент был обучен на приватном наборе данных пациентов клиента в их безопасной среде. Он изучил статистические распределения и корреляции в данных и теперь способен генерировать "синтетический" набор данных. Этот новый набор данных статистически идентичен оригиналу, но не содержит реальной информации о пациентах, позволяя безопасно делиться им с исследователями по всему миру.',
          technologies: ['Generative AI', 'GANs', 'TensorFlow', 'Data Privacy', 'Azure'],
          outcome: 'Unlocked a previously inaccessible dataset for a global network of 100+ researchers. Accelerated research into new treatment protocols by an estimated 12-18 months while maintaining 100% HIPAA compliance.',
          outcomeRu: 'Разблокировали ранее недоступный набор данных для глобальной сети из 100+ исследователей. Ускорили исследования новых протоколов лечения на примерно 12-18 месяцев, сохраняя 100% соответствие HIPAA.',
          gradientColors: 'from-emerald-600 to-teal-600',
          competencies: ['AI/ML & Data', 'Cloud & DevOps']
      },
      {
          id: 'case-18',
          title: 'Conversational DAO Interface Agent on the TON Blockchain',
          titleRu: 'Разговорный интерфейсный агент DAO на блокчейне TON',
          client: 'A Web3 community project building on TON',
          clientRu: 'Проект Web3 сообщества, строящийся на TON',
          challenge: 'The client wanted to maximize community engagement by allowing members to participate in DAO governance directly through their most-used app: Telegram. Standard web-based voting portals created too much friction.',
          challengeRu: 'Клиент хотел максимизировать вовлеченность сообщества, позволив участникам участвовать в управлении DAO напрямую через их наиболее используемое приложение: Telegram. Стандартные веб-порталы для голосования создавали слишком много трения.',
          solution: 'We built an AI agent that acts as a "conversational wrapper" for the DAO\'s smart contracts on TON. Community members can interact with the agent in a dedicated Telegram channel using natural language commands like "show me the latest proposals," "vote yes on proposal #5," or "delegate my votes to user X." The agent authenticates the user, parses their intent, and executes the corresponding transaction on the TON blockchain.',
          solutionRu: 'Мы создали AI-агент, который действует как "разговорная оболочка" для смарт-контрактов DAO на TON. Участники сообщества могут взаимодействовать с агентом в выделенном Telegram канале, используя команды на естественном языке, такие как "покажи мне последние предложения", "голосую за предложение #5" или "делегирую мои голоса пользователю X". Агент аутентифицирует пользователя, парсит их намерение и выполняет соответствующую транзакцию на блокчейне TON.',
          technologies: ['TON', 'AI Agent', 'Telegram Bot API', 'Go', 'Smart Contract Integration'],
          outcome: 'Increased active weekly governance participation by 400%. Became the primary interface for over 95% of all DAO interactions. Successfully onboarded hundreds of non-technical users into Web3 governance.',
          outcomeRu: 'Увеличили активное еженедельное участие в управлении на 400%. Стали основным интерфейсом для более 95% всех взаимодействий DAO. Успешно привлекли сотни нетехнических пользователей в Web3 управление.',
          gradientColors: 'from-blue-600 to-cyan-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Full-Stack & Backend']
      },
      {
          id: 'case-19',
          title: 'AI-Powered Network Optimization Agent for a DePIN Project',
          titleRu: 'AI-агент оптимизации сети для DePIN проекта',
          client: 'A Decentralized Physical Infrastructure Network (DePIN) for wireless connectivity',
          clientRu: 'Децентрализованная сеть физической инфраструктуры (DePIN) для беспроводного подключения',
          challenge: 'The client\'s decentralized network of thousands of hardware nodes was suffering from inefficient resource allocation. Manual adjustments were impossible, leading to network congestion in some areas and underutilization in others, which negatively impacted token rewards and user experience.',
          challengeRu: 'Децентрализованная сеть клиента из тысяч аппаратных узлов страдала от неэффективного распределения ресурсов. Ручные корректировки были невозможны, что приводило к перегрузке сети в некоторых областях и недоиспользованию в других, что негативно влияло на токенные вознаграждения и пользовательский опыт.',
          solution: 'We designed an AI agent to act as the autonomous network orchestrator. The agent ingests real-time data from all nodes (bandwidth, latency, uptime). Using reinforcement learning, it constantly optimizes the network by: 1) Dynamically adjusting token rewards to incentivize node deployment in high-demand areas. 2) Intelligently routing user traffic to the most efficient nodes.',
          solutionRu: 'Мы разработали AI-агент для работы в качестве автономного сетевого оркестратора. Агент поглощает данные в реальном времени со всех узлов (пропускная способность, задержка, время работы). Используя обучение с подкреплением, он постоянно оптимизирует сеть: 1) Динамически корректируя токенные вознаграждения для стимулирования развертывания узлов в областях высокого спроса. 2) Интеллектуально маршрутизируя пользовательский трафик к наиболее эффективным узлам.',
          technologies: ['DePIN', 'AI/ML', 'Reinforcement Learning', 'Solidity', 'AWS'],
          outcome: 'Improved overall network efficiency by 30%. Increased average token earnings for node providers by 20%, leading to faster network growth. Reduced network downtime in high-traffic zones by 60%.',
          outcomeRu: 'Улучшили общую эффективность сети на 30%. Увеличили средние токенные заработки для провайдеров узлов на 20%, что привело к более быстрому росту сети. Сократили время простоя сети в зонах высокого трафика на 60%.',
          gradientColors: 'from-violet-600 to-indigo-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Cloud & DevOps']
      },
      {
          id: 'case-20',
          title: 'Autonomous Document Processing Agent for Financial Services',
          titleRu: 'Автономный агент обработки документов для финансовых услуг',
          client: 'An investment bank\'s back-office operations',
          clientRu: 'Бэк-офисные операции инвестиционного банка',
          challenge: 'The team was manually processing thousands of unstructured PDF documents like invoices, trade confirmations, and compliance forms each day. This process was slow, expensive, and had a high error rate.',
          challengeRu: 'Команда вручную обрабатывала тысячи неструктурированных PDF документов, таких как счета, подтверждения сделок и формы соответствия каждый день. Этот процесс был медленным, дорогим и имел высокий уровень ошибок.',
          solution: 'We deployed a multi-stage AI agent pipeline. The first agent uses advanced OCR to extract raw text from PDFs. A second, specialized LLM-based agent then reads this text, understands its context, and accurately extracts key-value pairs (e.g., "Invoice Number," "Amount Due," "Trade CUSIP"). The structured data (JSON) is then passed to a final agent for validation and insertion into the company\'s PostgreSQL database.',
          solutionRu: 'Мы развернули многоэтапный пайплайн AI-агентов. Первый агент использует продвинутое OCR для извлечения сырого текста из PDF. Второй, специализированный агент на основе LLM затем читает этот текст, понимает его контекст и точно извлекает пары ключ-значение (например, "Номер счета", "Сумма к оплате", "CUSIP сделки"). Структурированные данные (JSON) затем передаются финальному агенту для валидации и вставки в PostgreSQL базу данных компании.',
          technologies: ['AI/ML', 'OCR', 'Fine-tuned LLM', 'PostgreSQL', 'Azure'],
          outcome: 'Automated 85% of all manual document processing. Reduced the data entry error rate from 4% to less than 0.1%. Reallocated a team of 15 employees from manual data entry to higher-value data analysis and exception handling roles.',
          outcomeRu: 'Автоматизировали 85% всей ручной обработки документов. Сократили уровень ошибок ввода данных с 4% до менее 0.1%. Перераспределили команду из 15 сотрудников с ручного ввода данных на более ценные роли анализа данных и обработки исключений.',
          gradientColors: 'from-stone-600 to-slate-600',
          competencies: ['AI/ML & Data', 'Full-Stack & Backend', 'Databases', 'Cloud & DevOps']
      },
    
    {
          id: 'case-21',
          title: 'Full-Stack Code Generation Agent for Rapid Prototyping',
          titleRu: 'Full-Stack агент генерации кода для быстрого прототипирования',
          client: 'An internal product development team at a large tech company',
          clientRu: 'Внутренняя команда разработки продуктов в крупной технологической компании',
          challenge: 'The team\'s product development cycle was slowed by the repetitive and time-consuming task of writing boilerplate code for APIs, database models, and front-end components to connect the backend and frontend.',
          challengeRu: 'Цикл разработки продуктов команды замедлялся повторяющейся и трудозатратной задачей написания шаблонного кода для API, моделей баз данных и фронтенд компонентов для соединения бэкенда и фронтенда.',
          solution: 'We created a "Full-Stack" code agent. A developer defines a data schema in a simple YAML file (e.g., a "User" object with "name" and "email"). The agent takes this schema and automatically generates: 1) The Go backend code for CRUD API endpoints. 2) The PostgreSQL database migration scripts. 3) The React/TypeScript types and basic UI components for a front-end form to interact with the API.',
          solutionRu: 'Мы создали "Full-Stack" агент кода. Разработчик определяет схему данных в простом YAML файле (например, объект "User" с "name" и "email"). Агент берет эту схему и автоматически генерирует: 1) Go бэкенд код для CRUD API эндпоинтов. 2) PostgreSQL скрипты миграции базы данных. 3) React/TypeScript типы и базовые UI компоненты для фронтенд формы для взаимодействия с API.',
          technologies: ['Code Generation', 'Go', 'React', 'Next.js', 'PostgreSQL'],
          outcome: 'Accelerated the initial setup time for new microservices from 2-3 days to under 15 minutes. Reduced boilerplate code by 90%. Allowed developers to focus entirely on core business logic, increasing feature development velocity by 40%.',
          outcomeRu: 'Ускорили время первоначальной настройки новых микросервисов с 2-3 дней до менее 15 минут. Сократили шаблонный код на 90%. Позволили разработчикам полностью сосредоточиться на основной бизнес-логике, увеличив скорость разработки функций на 40%.',
          gradientColors: 'from-fuchsia-600 to-pink-600',
          competencies: ['AI/ML & Data', 'Full-Stack & Backend', 'Frontend', 'Databases']
      },
      {
          id: 'case-22',
          title: 'Multi-Agent System for Automated Market Research & Content Generation',
          titleRu: 'Мультиагентная система для автоматизированного маркетингового исследования и генерации контента',
          client: 'A Tier-1 Management Consulting Firm',
          clientRu: 'Консалтинговая фирма первого уровня',
          challenge: 'Junior analysts were spending up to 80% of their time on laborious market research tasks: gathering data, summarizing articles, and drafting initial report sections. This was inefficient and limited the time available for high-level strategic analysis.',
          challengeRu: 'Младшие аналитики тратили до 80% своего времени на трудоемкие задачи маркетинговых исследований: сбор данных, резюмирование статей и составление первоначальных разделов отчетов. Это было неэффективно и ограничивало время, доступное для высокоуровневого стратегического анализа.',
          solution: 'We architected a multi-agent system based on a "research team" analogy. A "Researcher Agent" scours the web, financial databases (e.g., Bloomberg), and internal archives for relevant data. It passes findings to a "Data Analyst Agent," which synthesizes the information and identifies key trends. Finally, a "Writer Agent" takes the structured insights and drafts a coherent, well-formatted initial report, complete with charts and source citations, ready for human review and refinement.',
          solutionRu: 'Мы спроектировали мультиагентную систему на основе аналогии "исследовательской команды". "Агент-исследователь" прочесывает веб, финансовые базы данных (например, Bloomberg) и внутренние архивы для релевантных данных. Он передает находки "Агенту-аналитику данных", который синтезирует информацию и выявляет ключевые тренды. Наконец, "Агент-писатель" берет структурированные инсайты и составляет связный, хорошо отформатированный первоначальный отчет с диаграммами и ссылками на источники, готовый для человеческого обзора и доработки.',
          technologies: ['Multi-Agent Systems', 'LLMs', 'Go', 'Vector DBs', 'Azure'],
          outcome: 'Automated the initial research and drafting phase for standard market reports, reducing the required time from 40 hours to 4 hours. This allowed senior consultants to focus on strategy and client engagement, directly contributing to a 15% increase in project profitability.',
          outcomeRu: 'Автоматизировали фазу первоначального исследования и составления для стандартных рыночных отчетов, сократив требуемое время с 40 часов до 4 часов. Это позволило старшим консультантам сосредоточиться на стратегии и взаимодействии с клиентами, напрямую способствуя 15% росту прибыльности проектов.',
          gradientColors: 'from-rose-600 to-red-600',
          competencies: ['AI/ML & Data', 'Full-Stack & Backend', 'Cloud & DevOps']
      },
      {
          id: 'case-23',
          title: 'AI-Powered Personalized dApp Experience on Solana',
          titleRu: 'AI-персонализированный опыт dApp на Solana',
          client: 'A Web3 social and gaming platform on Solana',
          clientRu: 'Web3 социальная и игровая платформа на Solana',
          challenge: 'The platform\'s user experience was generic and one-size-fits-all. Users were overwhelmed with irrelevant content and governance proposals, leading to low engagement and retention.',
          challengeRu: 'Пользовательский опыт платформы был общим и универсальным. Пользователи были перегружены нерелевантным контентом и предложениями управления, что приводило к низкой вовлеченности и удержанию.',
          solution: 'We developed an AI personalization agent that integrates with each user\'s profile. The agent analyzes a user\'s on-chain wallet activity (NFTs held, tokens traded, DAOs participated in) to build a unique "Web3 interest graph." It then dynamically customizes the dApp\'s front-end for that user, personalizing the news feed, highlighting relevant NFT mints, and prioritizing governance proposals from DAOs they are active in.',
          solutionRu: 'Мы разработали AI-агент персонализации, который интегрируется с профилем каждого пользователя. Агент анализирует активность кошелька пользователя в сети (удерживаемые NFT, торгуемые токены, DAO, в которых участвует) для построения уникального "графа интересов Web3". Затем он динамически настраивает фронтенд dApp для этого пользователя, персонализируя новостную ленту, выделяя релевантные минты NFT и приоритизируя предложения управления от DAO, в которых они активны.',
          technologies: ['AI/ML', 'Solana', 'On-chain Data Indexing', 'React', 'Next.js'],
          outcome: 'Increased daily active user engagement by 65%. Boosted the click-through rate on featured content and proposals by 300%. User feedback reported a significantly more relevant and less noisy platform experience.',
          outcomeRu: 'Увеличили ежедневную активную пользовательскую вовлеченность на 65%. Повысили коэффициент кликов по рекомендуемому контенту и предложениям на 300%. Отзывы пользователей сообщили о значительно более релевантном и менее шумном опыте платформы.',
          gradientColors: 'from-teal-600 to-emerald-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Frontend']
      },
      {
          id: 'case-24',
          title: 'AI Agent for Bridging Legacy Enterprise Systems to Blockchain',
          titleRu: 'AI-агент для соединения устаревших корпоративных систем с блокчейном',
          client: 'A Fortune 500 company in the manufacturing sector',
          clientRu: 'Компания Fortune 500 в производственном секторе',
          challenge: 'The client wanted to leverage blockchain for supply chain traceability but was encumbered by decades of critical data locked in a legacy Oracle database. A full migration was impossible, and manual data entry was not a viable option.',
          challengeRu: 'Клиент хотел использовать блокчейн для отслеживаемости цепочки поставок, но был обременен десятилетиями критических данных, заблокированных в устаревшей базе данных Oracle. Полная миграция была невозможна, а ручной ввод данных не был жизнеспособным вариантом.',
          solution: 'We built an AI-powered "Legacy Connector" agent. This agent securely connects to the client\'s on-premise Oracle database. It was trained to understand the complex, proprietary data schema. The agent periodically queries for new records, validates their integrity against a set of predefined rules, transforms the data into a standardized format, and then anchors a cryptographic hash of the data onto an enterprise-grade EVM chain, creating a verifiable and auditable link to the original record.',
          solutionRu: 'Мы создали AI-агент "Legacy Connector". Этот агент безопасно подключается к локальной базе данных Oracle клиента. Он был обучен понимать сложную, проприетарную схему данных. Агент периодически запрашивает новые записи, валидирует их целостность против набора предопределенных правил, трансформирует данные в стандартизированный формат, а затем закрепляет криптографический хеш данных в корпоративном EVM-чейне, создавая проверяемую и аудируемую связь с оригинальной записью.',
          technologies: ['AI Agent', 'Enterprise Integration', 'Solidity', '.NET Core', 'Oracle DB'],
          outcome: 'Successfully brought verifiable traceability to a legacy system containing over 20 million records without requiring any changes to the core database. Enabled the client to meet new regulatory transparency requirements ahead of schedule.',
          outcomeRu: 'Успешно привнесли проверяемую отслеживаемость в устаревшую систему, содержащую более 20 миллионов записей, без требования каких-либо изменений в основной базе данных. Позволили клиенту выполнить новые регулятивные требования прозрачности раньше срока.',
          gradientColors: 'from-neutral-600 to-stone-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Full-Stack & Backend', 'Databases']
      },
      {
          id: 'case-25',
          title: 'Autonomous DeFi Yield-Farming Agent for Asset Management',
          titleRu: 'Автономный DeFi агент фарминга доходности для управления активами',
          client: 'A boutique crypto asset management firm',
          clientRu: 'Бутиковая фирма управления криптоактивами',
          challenge: 'The firm\'s portfolio managers were spending countless hours manually tracking and moving assets between dozens of DeFi yield farms across multiple EVM chains to chase the best returns. This was inefficient and they often missed short-lived opportunities.',
          challengeRu: 'Портфельные менеджеры фирмы тратили бесчисленные часы на ручное отслеживание и перемещение активов между десятками DeFi фермы доходности на множественных EVM чейнах для погони за лучшими доходами. Это было неэффективно, и они часто упускали краткосрочные возможности.',
          solution: 'We developed a non-custodial AI agent that clients could authorize to manage funds within their Gnosis Safe wallets. The agent constantly monitors APYs, gas fees, and smart contract risk scores across a curated list of blue-chip DeFi protocols. Based on the client\'s predefined risk tolerance, the agent autonomously executes complex strategies like harvesting rewards, compounding interest, and rotating capital to the highest-yielding opportunities.',
          solutionRu: 'Мы разработали некастодиальный AI-агент, которого клиенты могли авторизовать для управления средствами в их кошельках Gnosis Safe. Агент постоянно отслеживает APY, комиссии за газ и оценки риска смарт-контрактов по кураторскому списку голубых фишек DeFi протоколов. На основе предопределенной толерантности к риску клиента агент автономно выполняет сложные стратегии, такие как сбор вознаграждений, компаундирование процентов и ротация капитала к возможностям с наивысшей доходностью.',
          technologies: ['AI/ML', 'DeFi', 'Solidity', 'Gnosis Safe', 'EVM'],
          outcome: 'The agent achieved an average of 5-7% higher net APY than the firm\'s manually managed portfolios. It automated over 90% of routine portfolio management tasks, allowing managers to focus on high-level strategy and risk assessment.',
          outcomeRu: 'Агент достиг в среднем на 5-7% более высокого чистого APY, чем портфели фирмы, управляемые вручную. Он автоматизировал более 90% рутинных задач управления портфелем, позволив менеджерам сосредоточиться на высокоуровневой стратегии и оценке рисков.',
          gradientColors: 'from-yellow-600 to-amber-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data']
      },
  
      {
          id: 'case-26',
          title: 'Decentralized Content Moderation DAO with AI Agent Council',
          titleRu: 'Децентрализованное DAO модерации контента с советом AI-агентов',
          client: 'A Web3 decentralized social media platform',
          clientRu: 'Web3 децентрализованная платформа социальных медиа',
          challenge: 'Centralized content moderation was slow, biased, and subject to censorship. The platform needed a scalable, transparent, and community-aligned moderation system that operated on-chain.',
          challengeRu: 'Централизованная модерация контента была медленной, предвзятой и подверженной цензуре. Платформе нужна была масштабируемая, прозрачная и ориентированная на сообщество система модерации, работающая в сети.',
          solution: 'We designed a hybrid DAO governance model. User-flagged content is first submitted to a "council" of specialized AI agents. Each agent is fine-tuned to check for a specific violation (e.g., spam, hate speech, copyright infringement) based on the community-ratified guidelines. The agents vote on-chain. If their verdict is not unanimous or is challenged by the community, the decision is automatically escalated to human token-holders for a final vote.',
          solutionRu: 'Мы разработали гибридную модель управления DAO. Контент, отмеченный пользователями, сначала подается в "совет" специализированных AI-агентов. Каждый агент настроен для проверки конкретного нарушения (например, спам, язык ненависти, нарушение авторских прав) на основе ратифицированных сообществом руководящих принципов. Агенты голосуют в сети. Если их вердикт не единогласен или оспаривается сообществом, решение автоматически эскалируется к человеческим держателям токенов для финального голосования.',
          technologies: ['DAO Governance', 'AI Agents', 'Solidity', 'IPFS', 'On-chain voting'],
          outcome: 'Automated the moderation of 98% of all flagged content, with a 99.5% accuracy rate compared to human consensus. Provided a fully transparent and auditable moderation log on the blockchain, significantly increasing user trust in the platform\'s fairness.',
          outcomeRu: 'Автоматизировали модерацию 98% всего отмеченного контента с точностью 99.5% по сравнению с человеческим консенсусом. Предоставили полностью прозрачный и аудируемый журнал модерации в блокчейне, значительно увеличив доверие пользователей к справедливости платформы.',
          gradientColors: 'from-purple-600 to-violet-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data']
      },
      {
          id: 'case-27',
          title: 'Upgradable Smart Contract System with an AI Governance Agent',
          titleRu: 'Обновляемая система смарт-контрактов с AI-агентом управления',
          client: 'A rapidly evolving DeFi protocol',
          clientRu: 'Быстро развивающийся DeFi протокол',
          challenge: 'The protocol needed to add new features and fix bugs frequently, but traditional smart contract upgrades were risky, required complex governance votes, and caused downtime.',
          challengeRu: 'Протоколу нужно было часто добавлять новые функции и исправлять баги, но традиционные обновления смарт-контрактов были рискованными, требовали сложных голосований управления и вызывали простои.',
          solution: 'We implemented an upgradable smart contract architecture using the Diamond Standard (EIP-2535). We then built an AI governance agent to streamline the upgrade process. The agent monitors the development repository for new, audited code modules ("facets"). When a new facet is approved by governance, the agent automatically executes the on-chain transaction to add the new functionality to the live diamond contract, ensuring a seamless, gas-efficient, and secure upgrade with zero downtime.',
          solutionRu: 'Мы реализовали обновляемую архитектуру смарт-контрактов, используя Diamond Standard (EIP-2535). Затем мы создали AI-агент управления для упрощения процесса обновления. Агент отслеживает репозиторий разработки для новых, проверенных модулей кода ("граней"). Когда новая грань одобрена управлением, агент автоматически выполняет транзакцию в сети для добавления новой функциональности к живому diamond контракту, обеспечивая бесшовное, газоэффективное и безопасное обновление с нулевым простоем.',
          technologies: ['Smart Contract Auditing', 'Solidity', 'AI Agent', 'Hardhat', 'Terraform'],
          outcome: 'Reduced the time and gas cost of protocol upgrades by over 90%. Eliminated downtime associated with upgrades. Enabled the development team to ship new features in a safer, more iterative manner, vastly increasing their development velocity.',
          outcomeRu: 'Сократили время и газовые затраты обновлений протокола более чем на 90%. Устранили простои, связанные с обновлениями. Позволили команде разработки поставлять новые функции более безопасным, итеративным способом, значительно увеличив их скорость разработки.',
          gradientColors: 'from-indigo-600 to-purple-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Cloud & DevOps']
      },
      {
          id: 'case-28',
          title: 'AI Agent for Creating Personalized Security "Digital Twins" of Web3 Wallets',
          titleRu: 'AI-агент для создания персонализированных "цифровых двойников" безопасности Web3 кошельков',
          client: 'A high-net-worth individual crypto investor',
          clientRu: 'Криптоинвестор с высоким уровнем дохода',
          challenge: 'The client held a complex portfolio of assets, staked positions, and NFT permissions across multiple wallets. They were deeply concerned about hidden vulnerabilities or approvals that could lead to a catastrophic loss of funds.',
          challengeRu: 'Клиент держал сложный портфель активов, застейканных позиций и разрешений NFT через множественные кошельки. Они были глубоко обеспокоены скрытыми уязвимостями или одобрениями, которые могли привести к катастрофической потере средств.',
          solution: 'We created a highly specialized security service. Our AI agent creates a "digital twin" of the client\'s entire on-chain presence by forking the mainnet into a private simulation environment. The agent then runs thousands of attack scenarios against this digital twin—testing every smart contract approval, simulating phishing attacks, and probing for delegation vulnerabilities. It generates a comprehensive security report detailing every potential risk and provides a clear, actionable plan to revoke dangerous permissions and secure the assets.',
          solutionRu: 'Мы создали высокоспециализированный сервис безопасности. Наш AI-агент создает "цифрового двойника" всего присутствия клиента в сети, форкая мейннет в приватную симуляционную среду. Агент затем запускает тысячи сценариев атак против этого цифрового двойника — тестируя каждое одобрение смарт-контракта, симулируя фишинговые атаки и исследуя уязвимости делегирования. Он генерирует всеобъемлющий отчет безопасности, детализирующий каждый потенциальный риск, и предоставляет четкий, действенный план для отзыва опасных разрешений и обеспечения безопасности активов.',
          technologies: ['Blockchain Security', 'AI Agent', 'Forking', 'On-chain analysis', 'EVM'],
          outcome: 'Identified and helped the client neutralize three critical, previously unknown security vulnerabilities in their portfolio. Provided the client with peace of mind and a quantifiable reduction in their on-chain risk profile. The service is now offered as a high-end security audit for individual investors.',
          outcomeRu: 'Выявили и помогли клиенту нейтрализовать три критические, ранее неизвестные уязвимости безопасности в их портфеле. Предоставили клиенту спокойствие и количественное снижение их профиля риска в сети. Сервис теперь предлагается как высококлассный аудит безопасности для индивидуальных инвесторов.',
          gradientColors: 'from-red-600 to-orange-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Full-Stack & Backend']
      },
      {
          id: 'case-29',
          title: 'AI-Verified Carbon Credit Marketplace on a Public Blockchain',
          titleRu: 'AI-верифицированный маркетплейс углеродных кредитов на публичном блокчейне',
          client: 'An Environmental Non-Profit and Regenerative Finance (ReFi) DAO',
          clientRu: 'Экологическая некоммерческая организация и DAO регенеративных финансов (ReFi)',
          challenge: 'The voluntary carbon credit market was plagued by fraud and a lack of transparency. Buyers couldn\'t be certain that the credits they purchased represented real, verifiable carbon sequestration, which undermined the entire market\'s credibility.',
          challengeRu: 'Добровольный рынок углеродных кредитов был поражен мошенничеством и отсутствием прозрачности. Покупатели не могли быть уверены, что кредиты, которые они покупали, представляли реальное, проверяемое связывание углерода, что подрывало доверие всего рынка.',
          solution: 'We built a fully transparent marketplace on an EVM chain where carbon credits are tokenized as NFTs. To ensure legitimacy, we deployed an AI verification agent. This agent analyzes satellite imagery (from sources like Planet Labs) and IoT sensor data from reforestation projects on the ground. Using machine learning models, it independently verifies the project\'s claims about tree growth and carbon capture before the corresponding NFT-based credits can be minted and sold on the marketplace.',
          solutionRu: 'Мы создали полностью прозрачный маркетплейс на EVM-чейне, где углеродные кредиты токенизированы как NFT. Для обеспечения легитимности мы развернули AI-агент верификации. Этот агент анализирует спутниковые изображения (из источников, таких как Planet Labs) и данные IoT сенсоров с проектов лесовосстановления на земле. Используя модели машинного обучения, он независимо верифицирует заявления проекта о росте деревьев и связывании углерода до того, как соответствующие NFT-кредиты могут быть отчеканены и проданы на маркетплейсе.',
          technologies: ['ReFi', 'AI/ML', 'Computer Vision', 'Solidity', 'IPFS'],
          outcome: 'Created one of the first truly "trustless" carbon marketplaces. Attracted significant corporate investment due to the high degree of verifiability. Onboarded and verified 25+ reforestation projects globally, verifiably sequestering over 50,000 tonnes of CO2.',
          outcomeRu: 'Создали один из первых действительно "бездоверительных" углеродных маркетплейсов. Привлекли значительные корпоративные инвестиции благодаря высокой степени проверяемости. Привлекли и верифицировали 25+ проектов лесовосстановления глобально, проверяемо связав более 50,000 тонн CO2.',
          gradientColors: 'from-green-600 to-emerald-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Cloud & DevOps']
      },
      {
          id: 'case-30',
          title: 'AI-Powered Real World Asset (RWA) Tokenization Platform for Commercial Real Estate',
          titleRu: 'AI-платформа токенизации реальных активов (RWA) для коммерческой недвижимости',
          client: 'A real estate investment firm',
          clientRu: 'Фирма инвестиций в недвижимость',
          challenge: 'Investing in high-value commercial real estate was illiquid and inaccessible to smaller investors, with high barriers to entry. The client wanted to democratize access and create a more liquid market for their properties.',
          challengeRu: 'Инвестирование в высокоценную коммерческую недвижимость было неликвидным и недоступным для мелких инвесторов с высокими барьерами входа. Клиент хотел демократизировать доступ и создать более ликвидный рынок для своих объектов недвижимости.',
          solution: 'We developed a full-stack RWA tokenization platform. The legal ownership of a property is placed into a trust, and the equity is then represented as a set number of tokens on an EVM blockchain. An AI agent provides two core functions: 1) It automates due diligence by analyzing property documents, market data, and zoning laws to generate a comprehensive risk profile. 2) It provides a real-time valuation oracle for the tokenized assets, feeding this data to DeFi lending protocols where tokens can be used as collateral.',
          solutionRu: 'Мы разработали полнофункциональную платформу токенизации RWA. Юридическое владение недвижимостью помещается в траст, а капитал затем представляется как установленное количество токенов на EVM блокчейне. AI-агент предоставляет две основные функции: 1) Он автоматизирует должную осмотрительность, анализируя документы недвижимости, рыночные данные и законы зонирования для генерации всеобъемлющего профиля риска. 2) Он предоставляет оракул оценки в реальном времени для токенизированных активов, подавая эти данные в DeFi протоколы кредитования, где токены могут использоваться как залог.',
          technologies: ['RWA Tokenization', 'AI Agent', 'Solidity', 'React', 'AWS'],
          outcome: 'Successfully tokenized a portfolio of 5 commercial properties valued at over $50M. Onboarded 2,000+ new investors, increasing the capital pool and creating a liquid secondary market for previously illiquid assets.',
          outcomeRu: 'Успешно токенизировали портфель из 5 коммерческих объектов недвижимости стоимостью более $50М. Привлекли 2,000+ новых инвесторов, увеличив капитальный пул и создав ликвидный вторичный рынок для ранее неликвидных активов.',
          gradientColors: 'from-orange-600 to-red-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Frontend', 'Cloud & DevOps']
      },
    
    {
          id: 'case-31',
          title: 'Universal Web3 DevOps Agent for Multi-Chain Deployments',
          titleRu: 'Универсальный Web3 DevOps агент для мультичейн развертываний',
          client: 'A large Web3 development agency',
          clientRu: 'Крупное Web3 агентство разработки',
          challenge: 'The agency\'s developers were spending a significant amount of time on repetitive DevOps tasks for each new project: setting up boilerplate code, configuring deployment scripts for different chains (EVM, Solana, TON), and establishing CI/CD pipelines. This slowed down development and increased the chance of configuration errors.',
          challengeRu: 'Разработчики агентства тратили значительное количество времени на повторяющиеся DevOps задачи для каждого нового проекта: настройка шаблонного кода, конфигурирование скриптов развертывания для разных чейнов (EVM, Solana, TON) и установка CI/CD пайплайнов. Это замедляло разработку и увеличивало вероятность ошибок конфигурации.',
          solution: 'We built a universal DevOps AI agent. A developer can issue high-level commands like "Initialize a new Solana NFT project with an Anchor framework" or "Deploy the current contract to the TON testnet." The agent handles the entire underlying process: it clones the correct starter repository, sets up environment variables, generates deployment scripts, and integrates with GitHub Actions to create a fully-fledged CI/CD pipeline, all in a matter of minutes.',
          solutionRu: 'Мы создали универсальный DevOps AI-агент. Разработчик может выдавать высокоуровневые команды, такие как "Инициализировать новый Solana NFT проект с Anchor фреймворком" или "Развернуть текущий контракт в TON тестнет". Агент обрабатывает весь базовый процесс: он клонирует правильный стартовый репозиторий, настраивает переменные окружения, генерирует скрипты развертывания и интегрируется с GitHub Actions для создания полноценного CI/CD пайплайна, все за считанные минуты.',
          technologies: ['AI Agent', 'DevOps', 'Kubernetes', 'Docker', 'Terraform'],
          outcome: 'Reduced project setup and initial deployment time from an average of 8 hours to 10 minutes. Eliminated configuration errors, leading to more stable and secure deployments. Increased the agency\'s overall developer productivity by an estimated 25%.',
          outcomeRu: 'Сократили время настройки проекта и первоначального развертывания с в среднем 8 часов до 10 минут. Устранили ошибки конфигурации, что привело к более стабильным и безопасным развертываниям. Увеличили общую продуктивность разработчиков агентства на примерно 25%.',
          gradientColors: 'from-cyan-600 to-teal-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Cloud & DevOps']
      },
      {
          id: 'case-32',
          title: 'Emotionally-Aware AI Customer Service Agent for a High-Touch Brand',
          titleRu: 'Эмоционально-осведомленный AI-агент клиентского сервиса для бренда высокого сервиса',
          client: 'A luxury travel and hospitality company',
          clientRu: 'Компания роскошных путешествий и гостеприимства',
          challenge: 'Standard chatbots were failing to provide the high-touch, empathetic customer service expected by the client\'s discerning clientele. Their robotic, impersonal responses were actively damaging the brand\'s reputation.',
          challengeRu: 'Стандартные чатботы не могли обеспечить высокосервисное, эмпатичное обслуживание клиентов, ожидаемое взыскательной клиентурой клиента. Их роботизированные, безличные ответы активно вредили репутации бренда.',
          solution: 'We developed an advanced customer service agent with a sophisticated sentiment analysis and emotional modeling layer. The AI agent is trained to detect user frustration, urgency, and satisfaction from the language used in the chat. It dynamically adapts its tone, vocabulary, and response strategy accordingly—becoming more empathetic and apologetic with frustrated users, or more efficient and direct with users who are in a hurry. It also knows when to seamlessly escalate to a human agent for issues requiring true human empathy.',
          solutionRu: 'Мы разработали продвинутый агент клиентского сервиса с сложным слоем анализа настроений и эмоционального моделирования. AI-агент обучен обнаруживать фрустрацию пользователя, срочность и удовлетворение по языку, используемому в чате. Он динамически адаптирует свой тон, словарь и стратегию ответа соответственно — становясь более эмпатичным и извиняющимся с фрустрированными пользователями или более эффективным и прямым с пользователями, которые спешат. Он также знает, когда бесшовно эскалировать к человеческому агенту для вопросов, требующих истинной человеческой эмпатии.',
          technologies: ['AI/ML', 'Sentiment Analysis', 'NLP', 'Customer Service Platforms', 'Node.js'],
          outcome: 'Increased customer satisfaction (CSAT) scores for automated interactions by 40 points. Reduced unnecessary escalations to human agents by 70%, allowing the human team to focus on the most complex and valuable customer issues.',
          outcomeRu: 'Увеличили оценки удовлетворенности клиентов (CSAT) для автоматизированных взаимодействий на 40 пунктов. Сократили ненужные эскалации к человеческим агентам на 70%, позволив человеческой команде сосредоточиться на самых сложных и ценных клиентских вопросах.',
          gradientColors: 'from-pink-600 to-rose-600',
          competencies: ['AI/ML & Data', 'Full-Stack & Backend']
      },
      {
          id: 'case-33',
          title: 'Autonomous P2P Energy Trading Agent for a Smart Grid',
          titleRu: 'Автономный P2P агент торговли энергией для умной сети',
          client: 'A community-owned solar energy cooperative',
          clientRu: 'Кооператив солнечной энергии, принадлежащий сообществу',
          challenge: 'Members with excess solar energy wanted to sell it directly to their neighbors, but a central utility company acted as a costly middleman. They needed a decentralized, automated system for fair, real-time energy trading.',
          challengeRu: 'Участники с избыточной солнечной энергией хотели продавать ее напрямую своим соседям, но центральная коммунальная компания действовала как дорогостоящий посредник. Им нужна была децентрализованная, автоматизированная система для справедливой торговли энергией в реальном времени.',
          solution: 'We created an AI agent for each household connected to a permissioned EVM blockchain. When a household has excess energy, its agent broadcasts an offer to the network. AI agents for households that need energy analyze the grid\'s state, predict their short-term needs, and automatically place bids. The system uses a continuous double auction mechanism, managed by smart contracts, to match buyers and sellers and facilitate peer-to-peer energy payments.',
          solutionRu: 'Мы создали AI-агент для каждого домохозяйства, подключенного к разрешенному EVM блокчейну. Когда домохозяйство имеет избыточную энергию, его агент транслирует предложение в сеть. AI-агенты для домохозяйств, которым нужна энергия, анализируют состояние сети, прогнозируют свои краткосрочные потребности и автоматически размещают ставки. Система использует механизм непрерывного двойного аукциона, управляемый смарт-контрактами, для сопоставления покупателей и продавцов и облегчения peer-to-peer платежей за энергию.',
          technologies: ['AI Agent', 'IoT', 'Smart Contracts', 'EVM', 'Go'],
          outcome: 'Eliminated the need for a central utility intermediary, resulting in electricity prices that were 15% lower for buyers and payouts that were 20% higher for sellers. Created a more resilient and efficient community-owned power grid.',
          outcomeRu: 'Устранили необходимость в центральном коммунальном посреднике, что привело к ценам на электричество, которые были на 15% ниже для покупателей, и выплатам, которые были на 20% выше для продавцов. Создали более устойчивую и эффективную энергосеть, принадлежащую сообществу.',
          gradientColors: 'from-yellow-600 to-green-600',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Full-Stack & Backend']
      },
      {
          id: 'case-34',
          title: 'Conversational Data Analysis Agent for Unstructured Datasets',
          titleRu: 'Разговорный агент анализа данных для неструктурированных наборов данных',
          client: 'A quantitative analysis team at a financial research firm',
          clientRu: 'Команда количественного анализа в фирме финансовых исследований',
          challenge: 'The firm\'s most valuable data was locked in massive, unstructured text-based datasets (news archives, research papers, earnings call transcripts). Extracting insights required expert data scientists to write complex queries, creating a huge bottleneck.',
          challengeRu: 'Самые ценные данные фирмы были заблокированы в массивных, неструктурированных текстовых наборах данных (архивы новостей, исследовательские работы, транскрипты звонков по доходам). Извлечение инсайтов требовало от экспертных специалистов по данным написания сложных запросов, создавая огромное узкое место.',
          solution: 'We deployed a conversational AI agent that allows analysts to query these vast unstructured datasets using natural language. An analyst can simply ask, "What is the consensus analyst sentiment for a new EV battery technology mentioned in Q2 earnings calls?" The agent understands the query, translates it into a semantic search across the vector database, synthesizes the findings, and provides a direct, sourced answer.',
          solutionRu: 'Мы развернули разговорный AI-агент, который позволяет аналитикам запрашивать эти обширные неструктурированные наборы данных, используя естественный язык. Аналитик может просто спросить: "Каково консенсусное настроение аналитиков по новой технологии EV батарей, упомянутой в звонках по доходам Q2?" Агент понимает запрос, переводит его в семантический поиск по векторной базе данных, синтезирует находки и предоставляет прямой, с источниками ответ.',
          technologies: ['AI Agent', 'RAG', 'Vector DBs', 'Data Pipelines', 'React'],
          outcome: 'Empowered non-technical analysts to perform complex data queries that previously took days of a data scientist\'s time. Reduced the time-to-insight for new research questions from days to seconds. Unlocked novel correlations and insights from previously underutilized data.',
          outcomeRu: 'Дали возможность нетехническим аналитикам выполнять сложные запросы данных, которые ранее занимали дни времени специалиста по данным. Сократили время до инсайта для новых исследовательских вопросов с дней до секунд. Разблокировали новые корреляции и инсайты из ранее недоиспользуемых данных.',
          gradientColors: 'from-blue-600 to-indigo-600',
          competencies: ['AI/ML & Data', 'Full-Stack & Backend', 'Frontend']
      },
      {
          id: 'case-35',
          title: 'Integrated AI & DAO Strategy Agent for Enterprise Transformation',
          titleRu: 'Интегрированный AI и DAO стратегический агент для корпоративной трансформации',
          client: 'A legacy enterprise looking to innovate with Web3 and AI',
          clientRu: 'Устаревшее предприятие, стремящееся к инновациям с Web3 и AI',
          challenge: 'The client knew they needed to adopt AI and Web3 technologies to remain competitive, but they lacked the in-house expertise to develop a coherent strategy. They didn\'t know where to start or how to connect these powerful but disparate technologies.',
          challengeRu: 'Клиент знал, что им нужно принять AI и Web3 технологии, чтобы оставаться конкурентоспособными, но у них не хватало внутренней экспертизы для разработки связной стратегии. Они не знали, с чего начать или как соединить эти мощные, но разрозненные технологии.',
          solution: 'We deployed our most holistic offering: a strategic AI agent. This is not just a single tool but a comprehensive framework. The agent begins by ingesting all of the client\'s public business data and internal process documents. It identifies the highest-impact areas for automation and decentralization. It then generates a phased strategic roadmap, complete with simulated ROI calculations, architectural blueprints for potential solutions (like those in our other case studies), and a recommended governance model for an internal innovation DAO.',
          solutionRu: 'Мы развернули наше самое целостное предложение: стратегический AI-агент. Это не просто единый инструмент, а всеобъемлющий фреймворк. Агент начинает с поглощения всех публичных бизнес-данных клиента и внутренних процессных документов. Он выявляет области наивысшего воздействия для автоматизации и децентрализации. Затем он генерирует поэтапную стратегическую дорожную карту с симулированными расчетами ROI, архитектурными чертежами для потенциальных решений (как в наших других кейсах) и рекомендуемой моделью управления для внутреннего инновационного DAO.',
          technologies: ['AI Agent', 'DAO Governance', 'Protocol Design', 'Full-Stack Architecture', 'All core competencies'],
          outcome: 'Provided the client with a clear, actionable, and data-driven 3-year digital transformation roadmap. The client was able to secure a $10M internal innovation budget based on the strength and clarity of the agent-generated strategy. We were retained as the primary partner to execute this roadmap.',
          outcomeRu: 'Предоставили клиенту четкую, действенную и основанную на данных 3-летнюю дорожную карту цифровой трансформации. Клиент смог обеспечить $10М внутреннего инновационного бюджета на основе силы и ясности стратегии, сгенерированной агентом. Мы были удержаны как основной партнер для выполнения этой дорожной карты.',
          gradientColors: 'from-gradient-start to-gradient-end',
          competencies: ['Blockchain & Web3', 'AI/ML & Data', 'Full-Stack & Backend', 'Frontend', 'Cloud & DevOps', 'Databases']
      }
  ];
  