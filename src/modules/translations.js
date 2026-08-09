// src/modules/translations.js
export const translations = {
  fa: {
    ui: {
      technologies: 'فناوری‌ها',
      gallery: 'گالری',
      toggleTheme: 'تغییر تم',
      toggleLanguage: 'تغییر زبان',
      showMore: 'مشاهده بیشتر',
      showLess: 'مشاهده کمتر'
    },
    hero: {
      title: 'پیمان سلیمی',
      subtitle: 'معمار نرم‌افزار سازمانی • توسعه‌دهنده فول‌استک • مدل‌سازی، تحلیل داده و پشتیبانی از تصمیم‌گیری',
      paragraphs: [
        'به پورتفولیوی من خوش آمدید. من یک معمار نرم‌افزار سازمانی و توسعه‌دهنده فول‌استک هستم و سابقه‌ای چندرشته‌ای در زمینه‌های مهندسی نرم‌افزار سازمانی، محاسبات علمی، مدل‌سازی ریاضی، تحلیل داده، طراحی الگوریتم و معماری نرم‌افزار دارم. تمرکز اصلی من بر ساخت سیستم‌های سازمانی مقیاس‌پذیر، قابل نگهداری و با کارایی بالا و استفاده از الگوهای معماری مدرن و شیوه‌های مهندسی است.',
        'این پورتفولیو شامل پروژه‌های واقعی، معماری‌های نرم‌افزاری، تصمیمات مهندسی و راه‌حل‌های فنی توسعه‌یافته برای سازمان‌های بزرگ می‌شود. هرچند برای رعایت محرمانگی، برخی جزئیات پیاده‌سازی به‌عمد ساده‌سازی شده‌اند، اما معماری‌های ارائه‌شده به‌خوبی اصول اصلی طراحی، فناوری‌ها و رویکردهای مهندسی به‌کاررفته در سیستم‌های اصلی را نشان می‌دهند.'
      ]
    },
    sections: [
      {
        id: 'micro-frontend',
        title: 'معماری میکرو فرانت‌اند سازمانی',
        description: 'این معماری برای شرکت چیلک‌سازان ایرانی، به‌عنوان پایهٔ فرانت‌اند پلتفرم مدیریت اطلاعات سازمانی طراحی و پیاده‌سازی شده است. هدف اصلی، ساخت یک برنامهٔ سازمانی مقیاس‌پذیر بود؛ برای این منظور، رابط کاربری به میکرو فرانت‌اندهایی تجزیه شد که هرکدام مستقلاً قابل توسعه و استقرار باشند. یک Meta AppShell کل پلتفرم را هماهنگ می‌کند و وظایفی مانند راه‌اندازی اولیه، بررسی احراز هویت، بارگذاری پویای ماژول‌ها، ناوبری و کنترل دسترسی مبتنی بر نقش را بر عهده دارد. برنامه‌های کسب‌وکار به‌صورت پویا و در زمان اجرا با بهره‌گیری از Webpack Module Federation یکپارچه می‌شوند؛ این رویکرد امکان توسعه، استقرار و نگهداری مستقل در حوزه‌های مختلف کسب‌وکار را فراهم می‌کند. نمودارهای منتشرشده برای حفظ محرمانگی پروژه، برخی جزئیات را ساده‌سازی کرده‌اند، اما در عین حال معماری کلی، رفتار زمان اجرا و تصمیمات مهندسی را به‌دقت نشان می‌دهند.'
      },
      {
        id: 'microservices',
        title: 'معماری میکروسرویس‌های سازمانی',
        description: 'این معماری برای شرکت چیلک‌سازان ایرانی، به‌عنوان پایهٔ بک‌اند پلتفرم مدیریت اطلاعات سازمانی طراحی و پیاده‌سازی شده است. هدف اصلی، پشتیبانی از اکوسیستم میکرو فرانت‌اند سازمان و ایجاد یک معماری سرویس‌گرا، مقیاس‌پذیر و آماده برای آینده بود. یک API Gateway متمرکز مبتنی بر YARP به‌عنوان نقطهٔ ورودی واحد برای تمامی برنامه‌های فعلی و آینده در نظر گرفته شد و امکان یکپارچه‌سازی بی‌دردسر با وب، دسکتاپ، موبایل و سیستم‌های ثالث را فراهم می‌کند. یک سرویس احراز هویت اختصاصی، مدیریت متمرکز هویت و امنیت یکپارچه را در سراسر زیست‌بوم نرم‌افزاری شرکت ارائه می‌دهد. هر حوزهٔ کسب‌وکار به‌صورت یک میکروسرویس خودمختار با پایگاه دادهٔ اختصاصی خود پیاده‌سازی شده است و gRPC و RabbitMQ ارتباطات هم‌زمان و ناهم‌زمان کارآمد میان سرویس‌ها را ممکن می‌سازند. نمودارهای منتشرشده برای حفظ محرمانگی، برخی جزئیات را ساده‌سازی کرده‌اند، اما در عین حال طراحی کلی معماری و تصمیمات مهندسی را به‌دقت نشان می‌دهند.'
      },
      {
        id: 'desktop-suite',
        title: 'مجموعه نرم‌افزارهای دسکتاپ سازمانی',
        description: 'یک پلتفرم دسکتاپ یکپارچه برای شرکت چیلک‌سازان ایرانی توسعه یافته است. این نرم‌افزار، چندین سیستم سازمانی را در قالب یک برنامهٔ واحد Windows Forms ارائه می‌دهد. کاربران می‌توانند بدون ترک برنامه، از طریق منوی «نرم‌افزار محلی سازمان» میان سیستم‌های مختلف جابه‌جا شوند.'
      },
      {
        id: 'surangmarket',
        title: 'سورنگ مارکت',
        description: 'سورنگ مارکت یک پلتفرم مدرن تجارت الکترونیک در حوزهٔ تجهیزات پزشکی است که با همکاری شرکت فرداافزار چابک توسعه یافته است. به‌عنوان یک توسعه‌دهندهٔ فول‌استک، در توسعهٔ کامل پلتفرم (از طراحی تا پیاده‌سازی) مشارکت داشتم و چهارده ماژول اصلی کسب‌وکار را در هر دو لایهٔ فرانت‌اند و بک‌اند پیاده‌سازی کردم. این راه‌حل در بک‌اند از Domain-Driven Design (DDD) و Clean Architecture و در فرانت‌اند از معماری مبتنی بر ویژگی (Feature-Based) بهره می‌برد که نتیجهٔ آن کدی ماژولار، قابل نگهداری و مقیاس‌پذیر است. مسئولیت‌های من شامل پیاده‌سازی ماژول‌های تخفیف، اقساط، سفارشات، پرداخت‌ها، استعلام قیمت، سبد خرید، طرح‌های نمایندگی، مدیریت حساب‌های بانکی، بنرها، کارت‌های هدیه، کیف پول، حمل‌ونقل و مرجوعی کالا (RMA) و همچنین مشارکت در توسعهٔ REST API، مدل‌سازی پایگاه داده و بهبودهای UI/UX بود. پروژه طبق برنامه با موفقیت تحویل و در محیط عملیاتی مستقر شد. سامانهٔ در حال اجرا در <a href="http://www.surangmarket.com" target="_blank" rel="noopener noreferrer">www.surangmarket.com</a> در دسترس است.'
      },
      {
        id: 'scientific',
        title: 'دستاورد علمی',
        description: 'جزو ۱٪ برتر دانشمندان جهان بر اساس رتبه‌بندی ISC.'
      }
    ]
  },
  en: {
    ui: {
      technologies: 'Technologies',
      gallery: 'Gallery',
      toggleTheme: 'Toggle Theme',
      toggleLanguage: 'Toggle Language',
      showMore: 'Show more',
      showLess: 'Show less'
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
        id: 'micro-frontend',
        title: 'Enterprise Micro Frontend Architecture',
        description: 'This architecture was designed and implemented for Chilik Sazan Iranian Co. as the frontend foundation of the Enterprise Information Management Platform. The primary objective was to build a scalable enterprise application by decomposing the user interface into independently developed and deployable Micro Frontends. A Meta AppShell orchestrates the entire platform by handling application bootstrap, authentication checks, runtime module loading, navigation, and role-based access control. Business applications are dynamically integrated at runtime using Webpack Module Federation, allowing independent development, deployment, and maintenance across multiple business domains. The published diagrams intentionally simplify certain implementation details to respect project confidentiality while accurately representing the overall architecture, runtime behavior, and engineering decisions.'
      },
      {
        id: 'microservices',
        title: 'Enterprise Microservices Architecture',
        description: 'This architecture was designed and implemented for Chilik Sazan Iranian Co. as the backend foundation of the Enterprise Information Management Platform. The primary objective was to support the organization\'s Micro Frontend ecosystem while establishing a scalable and future-ready service architecture. A centralized YARP API Gateway was introduced as the single entry point for all current and future client applications, enabling seamless integration with web, desktop, mobile, and third-party systems. A dedicated Authentication Service provides centralized identity management and consistent security across the company\'s software ecosystem. Each business domain is implemented as an autonomous microservice with its own database, while gRPC and RabbitMQ enable efficient synchronous and asynchronous communication between services. The published diagrams intentionally simplify certain implementation details to respect project confidentiality while accurately representing the overall architectural design and engineering decisions.'
      },
      {
        id: 'desktop-suite',
        title: 'Enterprise Desktop Suite',
        description: 'An integrated enterprise desktop platform developed for Chilick Sazan Iranian Co. The application provides multiple organizational systems through a unified Windows Forms application. Users can switch between different systems from the \'Organization Local Software\' menu without leaving the application.'
      },
      {
        id: 'surangmarket',
        title: 'SurangMarket',
        description: 'SurangMarket is a modern medical equipment e-commerce platform developed in collaboration with Farda Afzar Chabok Co. As a Full-Stack Developer, I contributed to the end-to-end development of the platform by implementing fourteen core business modules across both frontend and backend layers. The solution combines Domain-Driven Design (DDD) and Clean Architecture on the backend with a Feature-Based Architecture on the frontend, resulting in a modular, maintainable, and scalable codebase. My responsibilities included implementing the Discount, Installments, Orders, Payments, Price Inquiry, Shopping Cart, Agent Plans, Bank Accounts Management, Banners, Gift Cards, Wallet, Shipping, and RMA modules, as well as contributing to REST API development, database modeling, and UI/UX improvements. The project was successfully delivered on schedule and deployed to production. The live system is available at <a href="http://www.surangmarket.com" target="_blank" rel="noopener noreferrer">www.surangmarket.com</a>.'
      },
      {
        id: 'scientific',
        title: 'Scientific Achievement',
        description: 'Recognized among the world\'s Top 1% Scientists by the ISC.'
      }
    ]
  }
};