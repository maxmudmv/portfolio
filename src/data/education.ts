import { CertificateItem, EducationItem } from "./types";

/**
 * TA'LIM, KURSLAR VA SERTIFIKATLAR MA'LUMOTLARI (EDITABLE EDUCATION & CERTIFICATES FILE)
 */
export const educationData: EducationItem[] = [
  {
    id: "tatu-bachelor",
    type: "degree",
    institution: {
      uz: "Toshkent Axborot Texnologiyalari Universiteti (TATU)",
      en: "Tashkent University of Information Technologies (TUIT)",
      ru: "Ташкентский университет информационных технологий (ТУИТ)",
    },
    facultyOrProgram: {
      uz: "Kompyuter injiniringi, AT-Servis",
      en: "Computer Engineering, IT-Service",
      ru: "Компьютерный инжиниринг, ИТ-Сервис",
    },
    degreeLevel: {
      uz: "Bakalavr (Bachelor)",
      en: "Bachelor's Degree (B.Sc.)",
      ru: "Бакалавр (Bachelor)",
    },
    year: "2026",
    location: {
      uz: "Toshkent, Oʻzbekiston",
      en: "Tashkent, Uzbekistan",
      ru: "Ташкент, Узбекистан",
    },
    description: {
      uz: "Kompyuter tizimlari arxitekturasi, maʼlumotlar bazalari, algoritmlash, dasturlash asoslari hamda axborot texnologiyalari servislarini boshqarish boʻyicha fundamental oliy taʼlim.",
      en: "Fundamental engineering education in computer systems architecture, relational databases, algorithms, programming, and enterprise IT service management.",
      ru: "Фундаментальное высшее образование в области архитектуры компьютерных систем, баз данных, алгоритмизации, программирования и управления ИТ-сервисами.",
    },
    focusAreas: [
      "Relational Databases & SQL",
      "Algorithms & Data Structures",
      "Computer Systems Engineering",
      "IT Infrastructure & Service Management",
    ],
  },
  {
    id: "najot-talim-data-analysis",
    type: "course",
    institution: {
      uz: "Najot Taʼlim",
      en: "Najot Ta'lim Training Center",
      ru: "Учебный центр Najot Ta'lim",
    },
    facultyOrProgram: {
      uz: "Data Analysis — Maʼlumotlar tahlili va vizualizatsiyasi",
      en: "Data Analysis & Visualization",
      ru: "Data Analysis — Анализ и визуализация данных",
    },
    degreeLevel: {
      uz: "Kasbiy malaka oshirish kursi",
      en: "Professional Specialization Program",
      ru: "Профессиональный курс повышения квалификации",
    },
    year: "2025",
    location: {
      uz: "Toshkent, Oʻzbekiston",
      en: "Tashkent, Uzbekistan",
      ru: "Ташкент, Узбекистан",
    },
    description: {
      uz: "SQL, MS Excel, Power BI va Python (NumPy, pandas, Matplotlib, Seaborn) yordamida amaliy maʼlumotlar tahlili, tozalash va biznes vizualizatsiyasi boʻyicha intensiv dastur.",
      en: "Intensive hands-on program covering SQL querying, advanced Excel, Power BI dashboarding, and Python data analysis with NumPy, pandas, Matplotlib, and Seaborn.",
      ru: "Интенсивная практическая программа по анализу данных, очистке и бизнес-визуализации с использованием SQL, MS Excel, Power BI и Python (NumPy, pandas, Matplotlib, Seaborn).",
    },
    focusAreas: [
      "SQL Data Analysis",
      "Power BI Dashboards",
      "Python (NumPy, pandas)",
      "Matplotlib & Seaborn Visualization",
      "Advanced MS Excel",
    ],
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: "five-million-ai-leaders-2026",
    title: "Five Million AI Leaders",
    issuer: {
      uz: "Five Million AI Leaders Initiative",
      en: "Five Million AI Leaders Initiative",
      ru: "Инициатива Five Million AI Leaders",
    },
    year: "2026",
    category: {
      uz: "Sunʼiy intellekt va maʼlumotlar texnologiyalari",
      en: "Artificial Intelligence & Data Technologies",
      ru: "Искусственный интеллект и технологии данных",
    },
    description: {
      uz: "Sunʼiy intellekt vositalari, maʼlumotlarga asoslangan qarorlar qabul qilish va zamonaviy raqamli transformatsiya koʻnikmalarini tasdiqlovchi elektron sertifikat.",
      en: "Electronic certificate validating competencies in AI literacy, data-driven decision workflows, and modern digital transformation.",
      ru: "Электронный сертификат, подтверждающий компетенции в области технологий ИИ, принятия решений на основе данных и цифровой трансформации.",
    },
    skillsValidated: ["AI Literacy", "Data-Driven Decision Making", "Analytical Workflows"],
    verificationNote: {
      uz: "hh.uz rasmiy rezyumesida tasdiqlangan elektron sertifikat (2026)",
      en: "Verified electronic certificate listed on official hh.uz CV (2026)",
      ru: "Подтвержденный электронный сертификат в резюме hh.uz (2026)",
    },
  },
  {
    id: "power-bi-data-prep-2025",
    title: "Data Preparation and Visualization with Power BI",
    issuer: {
      uz: "Microsoft Power BI Specialization",
      en: "Microsoft Power BI Specialization",
      ru: "Специализация Microsoft Power BI",
    },
    year: "2025",
    category: {
      uz: "Business Intelligence & Data Visualization",
      en: "Business Intelligence & Data Visualization",
      ru: "Business Intelligence и визуализация данных",
    },
    description: {
      uz: "Maʼlumotlarni Power Query orqali tayyorlash (ETL), tozalash, maʼlumotlar modelini qurish va interaktiv Power BI hisobotlarini yaratish boʻyicha elektron sertifikat.",
      en: "Electronic certificate covering Power Query data preparation (ETL), data modeling, and building interactive analytical dashboards in Power BI.",
      ru: "Электронный сертификат по подготовке данных (Power Query ETL), моделированию данных и созданию интерактивных дашбордов в Power BI.",
    },
    skillsValidated: ["Power BI", "Power Query (ETL)", "Data Modeling", "Interactive Visualization"],
    verificationNote: {
      uz: "hh.uz rasmiy rezyumesida tasdiqlangan elektron sertifikat (2025)",
      en: "Verified electronic certificate listed on official hh.uz CV (2025)",
      ru: "Подтвержденный электронный сертификат в резюме hh.uz (2025)",
    },
  },
];
