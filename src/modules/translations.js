export const translations = {
  fa: {
    ui: {
      technologies: "فناوری‌ها",
      gallery: "گالری",
      toggleTheme: "تغییر تم",
      toggleLanguage: "تغییر زبان",
      showMore: "مشاهده بیشتر",
      showLess: "مشاهده کمتر",
    },

    hero: {
      title: "پیمان سلیمی",
      subtitle:
        "",

      paragraphs: [
        "این پورتفولیو مجموعه‌ای منتخب از پروژه‌های انجام شده برای شرکت‌ها، معماری‌های نرم‌افزاری، تصمیمات مهندسی و راهکارهای فنی توسعه‌یافته برای سازمان‌ها را ارائه می‌دهد. جهت حفظ محرمانگی اطلاعات سازمانی، محصولی و فنی پروژه‌ها، بخش زیادی از جزئیات پیاده‌سازی در نمودارها و توضیحات عمداً ساده‌سازی، انتزاع یا حذف شده‌اند. در بخش‌های مرتبط با رابط کاربری و تجربه کاربری (UI/UX) نیز تنها بخش‌های عمومی‌تر و غیرحساس پروژه‌ها نمایش داده شده‌اند و از ارائه تصاویری که می‌توانند اطلاعات اختصاصی، ساختارهای داخلی یا منطق کسب‌وکار پروژه‌ها را آشکار کنند، خودداری شده است. تمامی نمونه‌ها و دیاگرام‌های منتشرشده با هدف نمایش اصول معماری، تصمیمات مهندسی و رویکردهای فنی تهیه شده‌اند و نباید به‌عنوان بازنمایی کامل و دقیق ساختار داخلی یا زیرساخت عملیاتی پروژه‌های اصلی تلقی شوند.",
      ],
    },

    sections: [
      {
        id: "micro-frontend",

        title: "معماری میکرو فرانت‌اند سازمانی",

        description:
          "این معماری برای شرکت چلیک‌سازان ایرانیان، به‌عنوان یک MVP و نمونه پیاده‌سازی معماری برای زیرساخت فرانت‌اند یک پلتفرم مدیریت اطلاعات سازمانی، توسط من طراحی و پیاده‌سازی شده است. هدف این MVP اعتبارسنجی رویکرد Micro Frontend، الگوهای یکپارچه‌سازی، نحوه بارگذاری ماژول‌ها و تصمیمات اصلی معماری بود و به‌عنوان یک محصول کامل و نهایی production توسعه داده نشد. برای حفظ محرمانگی پروژه، نام واقعی Micro Frontendها، برنامه‌ها، سرویس‌ها، سیستم‌ها و سایر اجزای داخلی در نمودارهای منتشرشده نمایش داده نشده و از نام‌های عمومی یا مستعار استفاده شده است. همچنین جزئیات اختصاصی مربوط به زیرساخت، شبکه، آدرس‌ها، استقرار و سایر اطلاعات حساس پیاده‌سازی حذف یا ساده‌سازی شده‌اند. در این معماری، رابط کاربری به Micro Frontendهایی مستقل تقسیم شده است که امکان توسعه و استقرار مستقل دارند. یک Meta AppShell کل پلتفرم را هماهنگ می‌کند و وظایفی مانند راه‌اندازی اولیه، بررسی احراز هویت، بارگذاری پویای ماژول‌ها، ناوبری و کنترل دسترسی مبتنی بر نقش را بر عهده دارد. برنامه‌های کسب‌وکار با استفاده از Webpack Module Federation به‌صورت پویا و در زمان اجرا یکپارچه می‌شوند. این رویکرد امکان توسعه و نگهداری مستقل بخش‌های مختلف رابط کاربری را فراهم می‌کند. دیاگرام‌های منتشرشده بازنمایی‌های ساده‌شده و انتزاعی از نمونه معماری هستند و با هدف نمایش رویکرد معماری، الگوی تعامل اجزا و تصمیمات مهندسی تهیه شده‌اند، بدون آنکه ساختار محرمانه و قابل شناسایی سیستم اصلی را افشا کنند.",
      },

      {
        id: "microservices",

        title: "معماری میکروسرویس‌های سازمانی",

        description:
          "این معماری برای شرکت چلیک‌سازان ایرانیان، به‌عنوان یک MVP و نمونه پیاده‌سازی معماری برای زیرساخت بک‌اند یک پلتفرم مدیریت اطلاعات سازمانی، توسط من طراحی و پیاده‌سازی شده است. هدف این MVP اعتبارسنجی مرزبندی سرویس‌ها، الگوهای ارتباطی، نحوه تعامل اجزای معماری و تصمیمات اصلی طراحی بود و به‌عنوان یک سیستم کامل و نهایی production توسعه داده نشد. برای رعایت محرمانگی، نام واقعی Microserviceها، پایگاه‌های داده، سرویس‌های داخلی، سیستم‌های سازمانی و سایر اجزای اختصاصی در دیاگرام‌های منتشرشده نمایش داده نشده و از نام‌های عمومی یا مستعار استفاده شده است. اطلاعات حساسی مانند IP، Port، URLهای داخلی، نام سرورها، Endpointهای اختصاصی، ساختار واقعی پایگاه‌های داده، توپولوژی شبکه، تنظیمات زیرساختی و سایر جزئیات اختصاصی نیز عمداً حذف یا تغییر داده شده‌اند. بنابراین دیاگرام‌های منتشرشده نقشه دقیق معماری عملیاتی یا زیرساخت واقعی سیستم نیستند، بلکه بازنمایی‌هایی ساده‌شده و انتزاعی هستند که برای نمایش اصول معماری و تصمیمات مهندسی تهیه شده‌اند. در این نمونه، یک API Gateway متمرکز مبتنی بر YARP به‌عنوان نقطه ورود واحد برای کلاینت‌های مختلف در نظر گرفته شد. یک سرویس احراز هویت اختصاصی نیز برای مدیریت متمرکز هویت و ایجاد امنیت یکپارچه در اکوسیستم نرم‌افزاری طراحی شد. حوزه‌های مختلف کسب‌وکار به‌صورت Microserviceهای مستقل با پایگاه داده مستقل طراحی و پیاده‌سازی شدند و gRPC و RabbitMQ برای برقراری ارتباطات هم‌زمان و غیرهم‌زمان میان سرویس‌ها مورد استفاده قرار گرفتند. دیاگرام‌های منتشرشده صرفاً رویکرد کلی معماری و تصمیمات مهندسی منتخب را در سطحی انتزاعی نشان می‌دهند و از نمایش جزئیات اختصاصی و قابل شناسایی سیستم اصلی خودداری می‌کنند.",
      },

      {
        id: "desktop-suite",

        title: "مجموعه نرم‌افزارهای دسکتاپ سازمانی",

        description:
          "یک پلتفرم دسکتاپ یکپارچه برای شرکت چلیک‌سازان ایرانیان توسعه یافته است. این نرم‌افزار، چندین سیستم سازمانی را در قالب یک برنامه واحد Windows Forms ارائه می‌دهد. کاربران می‌توانند بدون خروج از برنامه، از طریق یک رابط یکپارچه میان سیستم‌های مختلف سازمانی جابه‌جا شوند. جزئیات اختصاصی مربوط به سیستم‌های داخلی، نام نرم‌افزارها و ساختارهای سازمانی در این پورتفولیو نمایش داده نشده‌اند.",
      },

      {
        id: "surangmarket",

        title: "سورنگ مارکت",

        description:
          "سُرنگ مارکت یک مارکت‌پلیس تخصصی تجهیزات پزشکی و بخشی از اکوسیستم بیمارستان مجازی هوشمند است که با هدف ایجاد ارتباط مؤثر میان تأمین‌کنندگان و خریداران تجهیزات پزشکی توسعه یافته است. به‌عنوان یک توسعه‌دهنده فول‌استک، در همکاری با تیم توسعه، در فرآیند توسعه پلتفرم از طراحی تا پیاده‌سازی نقش داشتم و بخش‌های مختلف کسب‌وکار را در لایه‌های فرانت‌اند و بک‌اند پیاده‌سازی کردم. این راهکار در بک‌اند از Domain-Driven Design (DDD) و Clean Architecture و در فرانت‌اند از Feature-Based Architecture بهره می‌برد که به شکل‌گیری کدی ماژولار، قابل نگهداری و مقیاس‌پذیر منجر شده است. مسئولیت‌های من شامل توسعه قابلیت‌های مرتبط با سفارش، پرداخت، تخفیف، اقساط، سبد خرید، حساب‌های کاربری، کیف پول، حمل‌ونقل، مرجوعی کالا (RMA) و سایر بخش‌های اصلی پلتفرم، همچنین طراحی و توسعه REST API، مدل‌سازی پایگاه داده و بهبودهای UI/UX بود. پروژه با موفقیت به محیط عملیاتی منتقل شد و سامانه در حال اجرا در www.surangmarket.com در دسترس است.",
      },
    ],
  },

  en: {
    ui: {
      technologies: "Technologies",
      gallery: "Gallery",
      toggleTheme: "Toggle Theme",
      toggleLanguage: "Toggle Language",
      showMore: "Show more",
      showLess: "Show less",
    },

    hero: {
      title: "Peyman Salimi",
      subtitle:
        "Enterprise Software Architect • Full-Stack Developer • Modeling, Analytics & Decision Support",

 paragraphs: [
  "This portfolio presents a selected collection of projects completed for companies, software architectures, engineering decisions, and technical solutions developed for organizations. To protect the confidentiality of organizational, product, and technical information, a significant portion of the implementation details has been intentionally simplified, abstracted, or omitted from the diagrams and descriptions. In sections related to user interface and user experience (UI/UX), only the more general and non-sensitive parts of the projects are presented, while screenshots that could reveal proprietary information, internal structures, or business logic have been intentionally excluded. All published examples and diagrams are intended to demonstrate architectural principles, engineering decisions, and technical approaches and should not be interpreted as complete or exact representations of the internal structure or operational infrastructure of the original projects.",
],
    },

    sections: [
      {
        id: "micro-frontend",

        title: "Enterprise Micro Frontend Architecture",

        description:
          "This architecture was designed and implemented by me as an MVP and architectural reference implementation for the frontend foundation of an Enterprise Information Management Platform at Chilik Sazan Iranian Co. The MVP was developed to validate the Micro Frontend approach, integration patterns, module loading strategy, and core architectural decisions rather than to deliver a complete production feature set. To protect project confidentiality, the actual names of Micro Frontends, applications, services, systems, and other internal components are not exposed in the published diagrams; generic or pseudonymous names are used instead. Project-specific infrastructure details, network information, addresses, deployment details, and other sensitive implementation information have also been omitted or simplified. The implementation decomposes the enterprise frontend into independently developed and deployable Micro Frontends. A Meta AppShell orchestrates the platform by handling application bootstrap, authentication checks, runtime module loading, navigation, and role-based access control. Business applications are dynamically integrated at runtime using Webpack Module Federation, enabling independent development and maintenance across multiple business domains. The published diagrams are simplified and abstracted representations of the MVP architecture, intended to demonstrate the architectural approach, component interaction patterns, and engineering decisions without exposing the confidential or identifiable internal structure of the original system.",
      },

      {
        id: "microservices",

        title: "Enterprise Microservices Architecture",

        description:
          "This architecture was designed and implemented by me as an MVP and architectural reference implementation for the backend foundation of an Enterprise Information Management Platform at Chilik Sazan Iranian Co. The MVP was developed to validate service boundaries, communication patterns, architectural interactions, and core design decisions rather than to represent a fully completed production system. To respect project confidentiality, the actual names of Microservices, databases, internal services, organizational systems, and other proprietary components are not exposed in the published diagrams; generic or pseudonymous names are used instead. Sensitive information such as IP addresses, ports, internal URLs, server names, proprietary endpoints, actual database structures, network topology, infrastructure configuration, and other implementation-specific details has been intentionally omitted or modified. Therefore, the published diagrams are not exact representations of the production architecture or infrastructure, but simplified and abstracted architectural views created to demonstrate the underlying engineering principles and design decisions. The MVP included a centralized YARP API Gateway as a unified entry point for different client applications and a dedicated Authentication Service for centralized identity management and security. Different business domains were designed and implemented as autonomous Microservices with independent databases, while gRPC and RabbitMQ were used for synchronous and asynchronous communication between services. The published diagrams represent the overall architectural approach and selected engineering decisions at an appropriate level of abstraction, without exposing proprietary or identifiable details of the original system.",
      },

      {
        id: "desktop-suite",

        title: "Enterprise Desktop Suite",

        description:
          "An integrated enterprise desktop platform developed for Chilik Sazan Iranian Co. The application provides multiple organizational systems through a unified Windows Forms application. Users can switch between different organizational systems through a unified interface without leaving the application. Proprietary details related to internal systems, application names, and organizational structures have not been exposed in this portfolio.",
      },

      {
        id: "surangmarket",

        title: "SurangMarket",

        description:
          "Surang Market is a specialized medical equipment marketplace and part of the Smart Virtual Hospital ecosystem, developed to facilitate effective connections between medical equipment suppliers and buyers. As a Full-Stack Developer, I worked collaboratively with the development team throughout the platform’s development, from design to implementation, and implemented various business capabilities across both the frontend and backend layers. The solution follows Domain-Driven Design (DDD) and Clean Architecture on the backend, and a Feature-Based Architecture on the frontend, resulting in a modular, maintainable, and scalable codebase. My responsibilities included developing capabilities related to orders, payments, discounts, installments, shopping cart, user accounts, wallet, transportation, product returns (RMA), and other core areas of the platform, as well as designing and developing REST APIs, database modeling, and UI/UX improvements. The project was successfully delivered and deployed to production, and the live platform is available at www.surangmarket.com.",
      },
    ],
  },
};