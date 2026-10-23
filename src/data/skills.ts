import { SkillCategory, SkillItem } from "./types";

/**
 * TEXNIK KO'NIKMALAR MA'LUMOTLARI (EDITABLE SKILLS FILE)
 * Asoslanmagan uydirma foizlar o'rniga har bir texnologiyaning real qo'llanilish
 * sohasi va amaliy tajribadagi o'rni ko'rsatilgan.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "analytics_bi",
    title: {
      uz: "Maʼlumotlar tahlili va Business Intelligence (BI)",
      en: "Data Analytics & Business Intelligence (BI)",
      ru: "Анализ данных и Business Intelligence (BI)",
    },
    subtitle: {
      uz: "Interaktiv boshqaruv panellari (Dashboard), KPI monitoringi va avtomatlashtirilgan hisobotlar",
      en: "Interactive executive dashboards, KPI tracking, and automated reporting systems",
      ru: "Интерактивные дашборды, мониторинг KPI и автоматизированные системы отчетности",
    },
  },
  {
    id: "programming_libs",
    title: {
      uz: "Python va Data Science kutubxonalari",
      en: "Python & Data Science Ecosystem",
      ru: "Python и библиотеки Data Science",
    },
    subtitle: {
      uz: "Maʼlumotlarni tozalash (Data Cleaning), EDA va statistik vizualizatsiya",
      en: "Data wrangling, exploratory data analysis (EDA), and statistical visualization",
      ru: "Очистка данных (Data Cleaning), разведочный анализ (EDA) и статистическая визуализация",
    },
  },
  {
    id: "databases_automation",
    title: {
      uz: "Maʼlumotlar bazasi va jarayonlarni avtomatlashtirish",
      en: "Databases & Workflow Automation",
      ru: "Базы данных и автоматизация процессов",
    },
    subtitle: {
      uz: "SQL soʻrovlari, relyatsion maʼlumotlar bazasi va maxsus WebApp integratsiyasi",
      en: "SQL querying, relational database structuring, and custom WebApp data collection",
      ru: "SQL-запросы, реляционные базы данных и сбор данных через WebApp",
    },
  },
];

export const skillsData: SkillItem[] = [
  {
    id: "power-bi",
    name: "Microsoft Power BI",
    category: "analytics_bi",
    badge: {
      uz: "Asosiy BI vosita",
      en: "Core BI Tool",
      ru: "Основной BI-инструмент",
    },
    description: {
      uz: "Toʻplangan maʼlumotlar asosida rahbariyat va boʻlimlar uchun tushunarli, interaktiv boshqaruv panellari (Dashboard) hamda vizual hisobotlar tayyorlash.",
      en: "Designing clear, interactive executive dashboards and visual analytical reports from multi-source institutional datasets.",
      ru: "Разработка наглядных интерактивных панелей управления (Dashboard) и визуальных отчетов для руководства и отделов.",
    },
    usedIn: {
      uz: "A. Avloniy instituti & Sertifikatlangan yoʻnalish (2025)",
      en: "A. Avloniy Institute & Certified Specialization (2025)",
      ru: "Институт им. А. Авлони и профильная сертификация (2025)",
    },
    toolsOrModules: ["Power Query (ETL)", "DAX Calculations", "Data Modeling", "Interactive KPI Cards"],
  },
  {
    id: "ms-excel",
    name: "MS Excel & Google Sheets",
    category: "analytics_bi",
    badge: {
      uz: "Yuqori darajadagi avtomatlashtirish",
      en: "Advanced Reporting & Templates",
      ru: "Продвинутая автоматизация таблиц",
    },
    description: {
      uz: "Murakkab hisobotlarni funksiyalar, formulalar va avtomatlashtirilgan tahliliy shablonlar yordamida optimallashtirib, qayta ishlash vaqtini bir necha barobar qisqartirish.",
      en: "Optimizing complex analytical reports through dynamic formulas, pivot tables, and automated templates to drastically cut turnaround times.",
      ru: "Оптимизация сложных отчетов с помощью формул, сводных таблиц и автоматизированных шаблонов с кратным сокращением времени обработки.",
    },
    usedIn: {
      uz: "Discover Invest & A. Avloniy instituti",
      en: "Discover Invest & A. Avloniy Institute",
      ru: "Discover Invest и Институт им. А. Авлони",
    },
    toolsOrModules: ["Pivot Tables", "XLOOKUP / INDEX-MATCH", "Automated Payroll Templates", "Data Validation"],
  },
  {
    id: "sql",
    name: "SQL",
    category: "databases_automation",
    badge: {
      uz: "Maʼlumotlar bazasi tahlili",
      en: "Relational Data Querying",
      ru: "Работа с базами данных",
    },
    description: {
      uz: "Relyatsion maʼlumotlar bazasidan kerakli kesimlarni ajratib olish, birlashtirish (JOIN), guruhlash va tahliliy hisobotlar uchun tayyorlash.",
      en: "Extracting, joining, aggregating, and validating structured records from relational databases for downstream analytics.",
      ru: "Извлечение, объединение (JOIN), агрегация и проверка структурированных данных из реляционных СУБД для аналитики.",
    },
    usedIn: {
      uz: "Discover Invest (Database) & Najot Taʼlim",
      en: "Discover Invest (Database) & Najot Ta'lim",
      ru: "Discover Invest (Database) и Najot Ta'lim",
    },
    toolsOrModules: ["SELECT / JOINs", "GROUP BY & Aggregations", "Window Functions", "Subqueries & CTEs"],
  },
  {
    id: "python-pandas-numpy",
    name: "Python (pandas & NumPy)",
    category: "programming_libs",
    badge: {
      uz: "Maʼlumotlarni qayta ishlash",
      en: "Data Wrangling & Computation",
      ru: "Обработка и очистка данных",
    },
    description: {
      uz: "Katta va murakkab jadvalli maʼlumotlarni tozalash, boʻsh qiymatlar hamda xatoliklarni bartaraf etish, vektorlashtirilgan hisob-kitoblarni bajarish.",
      en: "Cleaning tabular datasets, handling missing values and anomalies, and performing vectorized numerical operations.",
      ru: "Очистка табличных массивов, обработка пропусков и аномалий, выполнение векторизованных вычислений.",
    },
    usedIn: {
      uz: "Amaliy tahliliy loyihalar & TATU",
      en: "Applied Analytical Projects & TUIT",
      ru: "Прикладные аналитические проекты и ТУИТ",
    },
    toolsOrModules: ["DataFrame Transformations", "Missing Data Imputation", "Time-Series Grouping", "NumPy Arrays"],
  },
  {
    id: "matplotlib-seaborn",
    name: "Matplotlib & Seaborn",
    category: "programming_libs",
    badge: {
      uz: "Statistik vizualizatsiya",
      en: "Statistical Visualization",
      ru: "Статистическая визуализация",
    },
    description: {
      uz: "Maʼlumotlar taqsimoti, korrelyatsiya matritsalari, vaqt qatorlari va koʻp oʻlchamli bogʻliqliklarni ilmiy va biznes grafiklar koʻrinishida ifodalash.",
      en: "Visualizing distributions, correlation matrices, time-series trends, and multi-variable relationships with publication-grade clarity.",
      ru: "Построение графиков распределений, матриц корреляций, временных рядов и многомерных зависимостей.",
    },
    usedIn: {
      uz: "Exploratory Data Analysis (EDA) & Najot Taʼlim",
      en: "Exploratory Data Analysis (EDA) & Najot Ta'lim",
      ru: "Разведочный анализ данных (EDA) и Najot Ta'lim",
    },
    toolsOrModules: ["Heatmaps & Correlations", "Distribution Plots", "Time-Series Charts", "Custom Styling"],
  },
  {
    id: "webapp-db-automation",
    name: "WebApp & Database Automation",
    category: "databases_automation",
    badge: {
      uz: "Raqamli transformatsiya",
      en: "Process Digitization",
      ru: "Цифровизация процессов",
    },
    description: {
      uz: "Qoʻlda bajariladigan eskirgan maʼlumot yigʻish jarayonlarini maxsus WebApp va markazlashgan maʼlumotlar bazasi orqali toʻliq raqamlashtirish.",
      en: "Replacing error-prone manual paper/photo workflows with custom WebApp interfaces connected directly to structured databases.",
      ru: "Замена устаревшего ручного сбора данных специализированными WebApp-интерфейсами с прямой записью в БД.",
    },
    usedIn: {
      uz: "Discover Invest (Tabel tizimini raqamlashtirish)",
      en: "Discover Invest (Timekeeping Digitization)",
      ru: "Discover Invest (Цифровизация табельного учета)",
    },
    toolsOrModules: ["WebApp Data Capture", "Centralized DB Pipeline", "Automated Sheets Sync", "Payroll Data QA"],
  },
];
