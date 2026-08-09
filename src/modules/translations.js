
export const translations = {
  fa: {
    ui: {
      technologies: 'فناوری‌ها',
      gallery: 'گالری',
      toggleTheme: 'تغییر تم',
      toggleLanguage: 'تغییر زبان',
      seeMore: 'مشاهده بیشتر',
      seeLess: 'مشاهده کمتر'
    },
    hero: {
      title: 'پیمان سلیمی',
      subtitle: 'معمار نرم‌افزار سازمانی • توسعه‌دهنده فول‌استک • مدل‌سازی، تحلیل و پشتیبانی تصمیم',
      paragraphs: [
        'به نمونه‌کارهای من خوش آمدید. من یک معمار نرم‌افزار سازمانی و توسعه‌دهنده فول‌استک با سابقه‌ای چندرشته‌ای در مهندسی نرم‌افزار سازمانی، محاسبات علمی، مدل‌سازی ریاضی، تحلیل داده، طراحی الگوریتم و معماری نرم‌افزار هستم. کار من بر ساخت سیستم‌های سازمانی مقیاس‌پذیر، قابل نگهداری و با کارایی بالا با استفاده از الگوهای معماری مدرن و شیوه‌های مهندسی متمرکز است.',
        'این نمونه‌کارها شامل پروژه‌های واقعی، معماری‌های نرم‌افزاری، تصمیمات مهندسی و راه‌حل‌های فنی توسعه‌یافته برای سازمان‌های بزرگ است. در حالی که برخی جزئیات پیاده‌سازی برای حفظ محرمانگی پروژه به‌عمد ساده‌سازی شده‌اند، معماری‌های ارائه‌شده به‌درستی اصول اصلی طراحی، فناوری‌ها و رویکردهای مهندسی پشت سیستم‌های اصلی را نشان می‌دهند.'
      ]
    },
    sections: [
      {
        title: 'معماری میکرو فرانت‌اند سازمانی',
        description: 'این معماری برای شرکت چیلک سازان ایرانی به عنوان پایه فرانت‌اند پلتفرم مدیریت اطلاعات سازمانی طراحی و پیاده‌سازی شده است. هدف اصلی ساخت یک برنامه سازمانی مقیاس‌پذیر با تجزیه رابط کاربری به میکرو فرانت‌اندهای مستقل توسعه و استقرارپذیر بود. یک متا اپشل کل پلتفرم را با مدیریت راه‌اندازی، بررسی احراز هویت، بارگذاری ماژول‌های زمان اجرا، ناوبری و کنترل دسترسی مبتنی بر نقش هماهنگ می‌کند. برنامه‌های کسب‌وکار به‌صورت پویا در زمان اجرا با استفاده از Webpack Module Federation یکپارچه می‌شوند که امکان توسعه، استقرار و نگهداری مستقل در حوزه‌های مختلف کسب‌وکار را فراهم می‌کند. نمودارهای منتشرشده برخی جزئیات پیاده‌سازی را برای حفظ محرمانگی پروژه ساده‌سازی کرده‌اند در حالی که معماری کلی، رفتار زمان اجرا و تصمیمات مهندسی را به‌دقت نشان می‌دهند.',
        technologies: ['React', 'TypeScript', 'Webpack Module Federation', 'Micro Frontend', 'Meta AppShell', 'React Router', 'JWT Authentication', 'Role-Based Access Control (RBAC)'],
        items: [
          { title: 'ورود', image: 'images/information-management-login.jpg' },
          { title: 'پورتال', image: 'images/information-management-main-pages.jpg' },
          { title: 'میکرو فرانت‌اند گوشت مرغ', image: 'images/meat-chicken-pro-home-page.jpg' },
          { title: 'جریان زمان اجرا', image: 'images/d1.jpg' },
          { title: 'اکوسیستم', image: 'images/d2.jpg' },
          { title: 'متا اپشل', image: 'images/d3.jpg' },
          { title: 'ماژول فدراسیون زمان اجرا', image: 'images/d4.jpg' },
          { title: 'هماهنگ‌کننده پورتال', image: 'images/d5.jpg' },
          { title: 'جریان احراز هویت و مجوز', image: 'images/d6.jpg' },
          { title: 'میکرو فرانت‌اند مشترک', image: 'images/d7.jpg' },
          { title: 'اتوبوس رویداد فرانت‌اند', image: 'images/d8.jpg' },
          { title: 'استقرار فرانت‌اند سازمانی', image: 'images/d9.jpg' }
        ]
      },
      {
        title: 'معماری میکروسرویس‌های سازمانی',
        description: 'این معماری برای شرکت چیلک سازان ایرانی به عنوان پایه بک‌اند پلتفرم مدیریت اطلاعات سازمانی طراحی و پیاده‌سازی شده است. هدف اصلی پشتیبانی از اکوسیستم میکرو فرانت‌اند سازمان و ایجاد یک معماری سرویس‌گرا مقیاس‌پذیر و آینده‌نگر بود. یک دروازه API متمرکز YARP به عنوان نقطه ورودی واحد برای تمام برنامه‌های فعلی و آینده معرفی شد که امکان یکپارچه‌سازی بدون دردسر با وب، دسکتاپ، موبایل و سیستم‌های شخص ثالث را فراهم می‌کند. یک سرویس احراز هویت اختصاصی مدیریت هویت متمرکز و امنیت یکپارچه را در سراسر اکوسیستم نرم‌افزاری شرکت فراهم می‌کند. هر حوزه کسب‌وکار به عنوان یک میکروسرویس خودمختار با پایگاه داده اختصاصی پیاده‌سازی شده است، در حالی که gRPC و RabbitMQ ارتباطات هم‌زمان و ناهم‌زمان کارآمد را بین سرویس‌ها ممکن می‌سازند. نمودارهای منتشرشده برخی جزئیات پیاده‌سازی را برای حفظ محرمانگی پروژه ساده‌سازی کرده‌اند در حالی که طراحی کلی معماری و تصمیمات مهندسی را به‌دقت نشان می‌دهند.',
        technologies: ['ASP.NET Core', 'C#', 'Microservices', 'YARP API Gateway', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'Entity Framework Core', 'JWT Authentication', 'Database per Service', 'Docker'],
        items: [
          { title: 'اکوسیستم میکروسرویس‌های سازمانی', image: 'images/ms1.jpg' },
          { title: 'دروازه API', image: 'images/ms2.jpg' },
          { title: 'سرویس احراز هویت', image: 'images/ms3.jpg' },
          { title: 'جریان درخواست', image: 'images/ms4.jpg' },
          { title: 'ارتباط gRPC', image: 'images/ms5.jpg' },
          { title: 'اتوبوس رویداد RabbitMQ', image: 'images/ms6.jpg' },
          { title: 'پایگاه داده به ازای هر سرویس', image: 'images/ms7.jpg' },
          { title: 'سرویس‌های حوزه', image: 'images/ms8.jpg' },
          { title: 'استقرار تولید', image: 'images/ms9.jpg' }
        ]
      },
      {
        title: 'مجموعه نرم‌افزارهای دسکتاپ سازمانی',
        description: 'یک پلتفرم دسکتاپ یکپارچه برای شرکت چیلک سازان ایرانی توسعه یافته است. این برنامه سیستم‌های سازمانی متعددی را از طریق یک برنامه واحد ویندوز فرم ارائه می‌دهد. کاربران می‌توانند بدون خروج از برنامه، بین سیستم‌های مختلف از منوی "نرم‌افزار محلی سازمان" جابه‌جا شوند.',
        technologies: ['C#', '.NET Framework', 'Windows Forms', 'Microsoft SQL Server', 'Entity Framework', 'Dapper', 'Repository Pattern', 'Unit of Work Pattern', 'Factory Pattern', 'Singleton Pattern', 'Strategy Pattern', 'Facade Pattern', 'Observer Pattern', 'Command Pattern', 'Dependency Injection', 'SOLID Principles', 'Object-Oriented Programming (OOP)', 'Stimulsoft Reports', 'DevComponents DotNetBar'],
        items: [
          { title: 'سیستم اتوماسیون اداری چیلک سازان - صفحه اصلی', image: 'images/office-automation-home-page.jpg' },
          { title: 'صندوق ورودی گردش کار', image: 'images/office-automation-workflow-inbox.jpg' },
          { title: 'عملیات', image: 'images/office-automation-operations.jpg' },
          { title: 'سیستم مدیریت منابع انسانی چیلک سازان ایرانی', image: 'images/hr-homepage.jpg' },
          { title: 'سیستم مدیریت امنیت چیلک سازان ایرانی', image: 'images/security-system-homepage.jpg' }
        ]
      },
      {
        title: 'سورنگ مارکت',
        description: 'سورنگ مارکت یک پلتفرم تجارت الکترونیک مدرن تجهیزات پزشکی است که با همکاری شرکت فرداافزار چابک توسعه یافته است. به عنوان توسعه‌دهنده فول‌استک، در توسعه پایان‌به‌پایند پلتفرم با پیاده‌سازی چهارده ماژول اصلی تجاری در هر دو لایه فرانت‌اند و بک‌اند مشارکت داشتم. این راه‌حل طراحی مبتنی بر دامنه (DDD) و معماری تمیز را در بک‌اند با معماری مبتنی بر ویژگی در فرانت‌اند ترکیب می‌کند و در نتیجه کدپایه‌ای مدولار، قابل نگهداری و مقیاس‌پذیر ایجاد می‌کند. مسئولیت‌های من شامل پیاده‌سازی ماژول‌های تخفیف، اقساط، سفارشات، پرداخت‌ها، استعلام قیمت، سبد خرید، برنامه‌های نمایندگی، مدیریت حساب‌های بانکی، بنرها، کارت‌های هدیه، کیف پول، حمل و نقل و ماژول بازگشت کالا، و همچنین مشارکت در توسعه APIهای REST، مدل‌سازی پایگاه داده و بهبودهای UI/UX بود. این پروژه با موفقیت طبق برنامه تحویل و به تولید deploy شد. سیستم زنده در <a href="http://www.surangmarket.com" target="_blank" rel="noopener noreferrer">www.surangmarket.com</a> در دسترس است.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Feature-Based Architecture', 'Tailwind CSS', 'NextAuth.js', 'NestJS', 'Domain-Driven Design (DDD)', 'Clean Architecture', 'REST API', 'PostgreSQL', 'TypeORM', 'Redis', 'RabbitMQ', 'Docker'],
        items: [
          { title: 'صفحه اصلی سورنگ مارکت', image: 'images/surangmarket-home-page.jpg' }
        ]
      },
      {
        title: 'دستاورد علمی',
        description: 'شناخته‌شده در میان ۱٪ برتر دانشمندان جهان توسط ISC.',
        technologies: [],
        items: [
          { title: 'گواهی دانشمند ۱٪ برتر', image: 'images/top-1-percent-scientist-certificate.jpg' }
        ]
      },
      {
        title: 'آموزش حرفه‌ای و یادگیری مستمر',
        description: 'یادگیری مستمر همیشه بخشی اساسی از توسعه حرفه‌ای من بوده است. در طول سال‌ها، در دوره‌های حرفه‌ای متعددی در زمینه مهندسی نرم‌افزار مدرن، معماری سازمانی، توسعه فرانت‌اند و بک‌اند، سیستم‌های توزیع‌شده، طراحی نرم‌افزار و فناوری‌های نوظهور سرمایه‌گذاری کرده‌ام. گالری زیر شامل سوابق خرید منتخبی است که بخشی از سفر یادگیری بلندمدت من را نشان می‌دهد.',
        technologies: ['C#', '.NET', 'ASP.NET Core', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Redux Toolkit', 'Zustand', 'GraphQL', 'gRPC', 'Web API', 'RabbitMQ', 'Redis', 'Microservices', 'Micro Frontend', 'Module Federation', 'CQRS', 'MediatR', 'Clean Architecture', 'Design Patterns', 'Entity Framework Core', 'Dapper', 'Identity', 'OAuth 2.0', 'JWT', 'Blazor', 'WPF', 'AngularJS', 'Go', 'PHP', 'Python'],
        items: [
          { title: '۱', image: 'images/course-01.jpg' },
          { title: '۲', image: 'images/course-02.jpg' },
          { title: '۳', image: 'images/course-03.jpg' },
          { title: '۴', image: 'images/course-04.jpg' },
          { title: '۵', image: 'images/course-05.jpg' },
          { title: '۶', image: 'images/course-06.jpg' },
          { title: '۷', image: 'images/course-07.jpg' },
          { title: '۸', image: 'images/course-08.jpg' }
        ]
      }
    ]
  },
  en: {
    ui: {
      technologies: 'Technologies',
      gallery: 'Gallery',
      toggleTheme: 'Toggle Theme',
      toggleLanguage: 'Toggle Language',
      seeMore: 'See More',
      seeLess: 'See Less'
    },
    hero: {
      title: 'Peyman Salimi',
      subtitle: 'Enterprise Software Architect • Full-Stack Developer • Modeling, Analytics & Decision Support',
      paragraphs: [
        'Welcome to my portfolio. I\'m an Enterprise Software Architect and Full-Stack Developer with a multidisciplinary background spanning enterprise software engineering, scientific computing, mathematical modeling, data analysis, algorithm design, and software architecture. My work focuses on building scalable, maintainable, and high-performance enterprise systems using modern architectural patterns and engineering practices.',
        'This portfolio presents selected real-world projects, software architectures, engineering decisions, and technical solutions developed for enterprise organizations. While certain implementation details have been intentionally simplified to respect project confidentiality, the showcased architectures accurately represent the core design principles, technologies, and engineering approaches behind the original systems.'
      ]
    },
    sections: [
      {
        title: 'Enterprise Micro Frontend Architecture',
        description: 'This architecture was designed and implemented for Chilik Sazan Iranian Co. as the frontend foundation of the Enterprise Information Management Platform. The primary objective was to build a scalable enterprise application by decomposing the user interface into independently developed and deployable Micro Frontends. A Meta AppShell orchestrates the entire platform by handling application bootstrap, authentication checks, runtime module loading, navigation, and role-based access control. Business applications are dynamically integrated at runtime using Webpack Module Federation, allowing independent development, deployment, and maintenance across multiple business domains. The published diagrams intentionally simplify certain implementation details to respect project confidentiality while accurately representing the overall architecture, runtime behavior, and engineering decisions.',
        technologies: ['React', 'TypeScript', 'Webpack Module Federation', 'Micro Frontend', 'Meta AppShell', 'React Router', 'JWT Authentication', 'Role-Based Access Control (RBAC)'],
        items: [
          { title: 'Login', image: 'images/information-management-login.jpg' },
          { title: 'Portal', image: 'images/information-management-main-pages.jpg' },
          { title: 'Meat Chicken Pro Micro Frontend', image: 'images/meat-chicken-pro-home-page.jpg' },
          { title: 'Runtime Flow', image: 'images/d1.jpg' },
          { title: 'Ecosystem', image: 'images/d2.jpg' },
          { title: 'Meta AppShell', image: 'images/d3.jpg' },
          { title: 'Module Federation Runtime', image: 'images/d4.jpg' },
          { title: 'Portal Orchestrator', image: 'images/d5.jpg' },
          { title: 'Authentication & Authorization Flow', image: 'images/d6.jpg' },
          { title: 'Shared Micro Frontend', image: 'images/d7.jpg' },
          { title: 'Frontend Event Bus', image: 'images/d8.jpg' },
          { title: 'Enterprise Frontend Deployment', image: 'images/d9.jpg' }
        ]
      },
      {
        title: 'Enterprise Microservices Architecture',
        description: 'This architecture was designed and implemented for Chilik Sazan Iranian Co. as the backend foundation of the Enterprise Information Management Platform. The primary objective was to support the organization\'s Micro Frontend ecosystem while establishing a scalable and future-ready service architecture. A centralized YARP API Gateway was introduced as the single entry point for all current and future client applications, enabling seamless integration with web, desktop, mobile, and third-party systems. A dedicated Authentication Service provides centralized identity management and consistent security across the company\'s software ecosystem. Each business domain is implemented as an autonomous microservice with its own database, while gRPC and RabbitMQ enable efficient synchronous and asynchronous communication between services. The published diagrams intentionally simplify certain implementation details to respect project confidentiality while accurately representing the overall architectural design and engineering decisions.',
        technologies: ['ASP.NET Core', 'C#', 'Microservices', 'YARP API Gateway', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'Entity Framework Core', 'JWT Authentication', 'Database per Service', 'Docker'],
        items: [
          { title: 'Enterprise Microservices Ecosystem', image: 'images/ms1.jpg' },
          { title: 'API Gateway', image: 'images/ms2.jpg' },
          { title: 'Authentication Service', image: 'images/ms3.jpg' },
          { title: 'Request Flow', image: 'images/ms4.jpg' },
          { title: 'gRPC Communication', image: 'images/ms5.jpg' },
          { title: 'RabbitMQ Event Bus', image: 'images/ms6.jpg' },
          { title: 'Database per Service', image: 'images/ms7.jpg' },
          { title: 'Domain Services', image: 'images/ms8.jpg' },
          { title: 'Production Deployment', image: 'images/ms9.jpg' }
        ]
      },
      {
        title: 'Enterprise Desktop Suite',
        description: 'An integrated enterprise desktop platform developed for Chilick Sazan Iranian Co. The application provides multiple organizational systems through a unified Windows Forms application. Users can switch between different systems from the \'Organization Local Software\' menu without leaving the application.',
        technologies: ['C#', '.NET Framework', 'Windows Forms', 'Microsoft SQL Server', 'Entity Framework', 'Dapper', 'Repository Pattern', 'Unit of Work Pattern', 'Factory Pattern', 'Singleton Pattern', 'Strategy Pattern', 'Facade Pattern', 'Observer Pattern', 'Command Pattern', 'Dependency Injection', 'SOLID Principles', 'Object-Oriented Programming (OOP)', 'Stimulsoft Reports', 'DevComponents DotNetBar'],
        items: [
          { title: 'Chilick Sazan Office Automation System - Home Page', image: 'images/office-automation-home-page.jpg' },
          { title: 'Workflow Inbox', image: 'images/office-automation-workflow-inbox.jpg' },
          { title: 'Operations', image: 'images/office-automation-operations.jpg' },
          { title: 'Chilick Sazan Iranian Human Resources Management System', image: 'images/hr-homepage.jpg' },
          { title: 'Chilick Sazan Iranian Security Management System', image: 'images/security-system-homepage.jpg' }
        ]
      },
      {
        title: 'SurangMarket',
        description: 'SurangMarket is a modern medical equipment e-commerce platform developed in collaboration with Farda Afzar Chabok Co. As a Full-Stack Developer, I contributed to the end-to-end development of the platform by implementing fourteen core business modules across both frontend and backend layers. The solution combines Domain-Driven Design (DDD) and Clean Architecture on the backend with a Feature-Based Architecture on the frontend, resulting in a modular, maintainable, and scalable codebase. My responsibilities included implementing the Discount, Installments, Orders, Payments, Price Inquiry, Shopping Cart, Agent Plans, Bank Accounts Management, Banners, Gift Cards, Wallet, Shipping, and RMA modules, as well as contributing to REST API development, database modeling, and UI/UX improvements. The project was successfully delivered on schedule and deployed to production. The live system is available at <a href="http://www.surangmarket.com" target="_blank" rel="noopener noreferrer">www.surangmarket.com</a>.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Feature-Based Architecture', 'Tailwind CSS', 'NextAuth.js', 'NestJS', 'Domain-Driven Design (DDD)', 'Clean Architecture', 'REST API', 'PostgreSQL', 'TypeORM', 'Redis', 'RabbitMQ', 'Docker'],
        items: [
          { title: 'SurangMarket Home Page', image: 'images/surangmarket-home-page.jpg' }
        ]
      },
      {
        title: 'Scientific Achievement',
        description: 'Recognized among the world\'s Top 1% Scientists by the ISC.',
        technologies: [],
        items: [
          { title: 'Top 1% Scientist Certificate', image: 'images/top-1-percent-scientist-certificate.jpg' }
        ]
      },
      {
        title: 'Professional Training & Continuous Learning',
        description: 'Continuous learning has always been an essential part of my professional development. Over the years, I have invested in numerous professional courses covering modern software engineering, enterprise architecture, frontend and backend development, distributed systems, software design, and emerging technologies. The gallery below contains selected purchase records representing part of my long-term learning journey.',
        technologies: ['C#', '.NET', 'ASP.NET Core', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Redux Toolkit', 'Zustand', 'GraphQL', 'gRPC', 'Web API', 'RabbitMQ', 'Redis', 'Microservices', 'Micro Frontend', 'Module Federation', 'CQRS', 'MediatR', 'Clean Architecture', 'Design Patterns', 'Entity Framework Core', 'Dapper', 'Identity', 'OAuth 2.0', 'JWT', 'Blazor', 'WPF', 'AngularJS', 'Go', 'PHP', 'Python'],
        items: [
          { title: '1', image: 'images/course-01.jpg' },
          { title: '2', image: 'images/course-02.jpg' },
          { title: '3', image: 'images/course-03.jpg' },
          { title: '4', image: 'images/course-04.jpg' },
          { title: '5', image: 'images/course-05.jpg' },
          { title: '6', image: 'images/course-06.jpg' },
          { title: '7', image: 'images/course-07.jpg' },
          { title: '8', image: 'images/course-08.jpg' }
        ]
      }
    ]
  }
};