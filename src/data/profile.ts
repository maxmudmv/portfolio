import { ProfileData } from "./types";

/**
 * MARKAZIY PROFIL MA'LUMOTLARI (EDITABLE PROFILE FILE)
 * Ushbu fayl orqali ism-sharif, aloqa havolalari, "Men haqimda" matni va
 * rezyume (CV) manzilini istalgan vaqtda o'zgartirishingiz mumkin.
 */
export const profileData: ProfileData = {
  fullName: {
    uz: "Elmurodov Mahmud Zarifjon oʻgʻli",
    en: "Mahmud Elmurodov Zarifjon Ogli",
    ru: "Элмуродов Махмуд Зарифжон угли",
  },
  shortName: {
    uz: "Mahmud Elmurodov",
    en: "Mahmud Elmurodov",
    ru: "Махмуд Элмуродов",
  },
  title: {
    uz: "Data Analyst | Data Scientist",
    en: "Data Analyst | Data Scientist",
    ru: "Data Analyst | Data Scientist (Аналитик данных)",
  },
  subtitle: {
    uz: "BI Analyst • Product Analyst • Data & Process Automation",
    en: "BI Analyst • Product Analyst • Data & Process Automation",
    ru: "BI-аналитик • Продуктовый аналитик • Автоматизация данных",
  },
  tagline: {
    uz: "Xom maʼlumotlarni aniq biznes qarorlariga, avtomatlashtirilgan tahliliy tizimlarga va interaktiv boshqaruv panellariga (Dashboard) aylantiraman.",
    en: "Transforming raw organizational data into automated analytical pipelines, interactive BI dashboards, and reliable business decisions.",
    ru: "Превращаю сырые данные в автоматизированные аналитические таблицы, интерактивные BI-дашборды и точные бизнес-решения.",
  },
  bioParagraphs: {
    uz: [
      "Men Elmurodov Mahmud, Toshkent axborot texnologiyalari universiteti (TATU) Kompyuter injiniringi (AT-Servis) yoʻnalishi bitiruvchisiman. Hozirda Data Analyst sifatida faoliyat yuritmoqdaman va maʼlumotlar tahlili hamda Data Science sohasida professional darajada oʻsishni maqsad qilganman.",
      "Maʼlumotlar tahlili yoʻnalishiga boʻlgan kuchli qiziqishim va bilimlarim ortidan SQL, MS Excel, Google Sheets, Python (NumPy, pandas, Matplotlib, Seaborn) va Power BI texnologiyalaridan foydalangan holda bir nechta amaliy loyihalarni muvaffaqiyatli bajardim.",
      "Amaliy faoliyatim davomida Discover Invest kompaniyasida eskirgan qoʻlda tabel yuritish jarayonini maxsus WebApp va maʼlumotlar bazasi (Database) orqali toʻliq raqamlashtirdim hamda A. Avloniy nomidagi milliy institutda rahbariyat uchun interaktiv Power BI boshqaruv panellarini ishlab chiqdim.",
    ],
    en: [
      "I am Mahmud Elmurodov, a Computer Engineering (IT-Service) graduate from Tashkent University of Information Technologies (TUIT). I currently work as a Data Analyst focused on advancing professionally across Data Analytics, Business Intelligence, and Data Science.",
      "Driven by a strong passion for analytical problem-solving, I have successfully delivered practical projects using SQL, MS Excel, Google Sheets, Python (NumPy, pandas, Matplotlib, Seaborn), and Power BI.",
      "In real-world operations at Discover Invest, I fully digitized an outdated manual paper-and-photo timekeeping workflow by building a custom WebApp connected directly to a centralized database. Earlier at the A. Avloniy National Research Institute, I cleaned multi-scale institutional datasets, optimized complex Excel reports, and built executive Power BI dashboards.",
    ],
    ru: [
      "Я Махмуд Элмуродов, выпускник Ташкентского университета информационных технологий (ТУИТ) по направлению «Компьютерный инжиниринг (ИТ-сервис)». В настоящее время развиваюсь как аналитик данных (Data Analyst / BI Analyst) с фокусом на углубленную аналитику и Data Science.",
      "Благодаря глубокому интересу к анализу данных я успешно реализовал ряд практических задач с использованием SQL, MS Excel, Google Sheets, Python (NumPy, pandas, Matplotlib, Seaborn) и Power BI.",
      "В рамках реальной практики в компании Discover Invest я полностью оцифровал устаревший ручной процесс табелирования через собственное WebApp-приложение с прямой записью в базу данных, а в Национальном институте им. А. Авлони разработал интерактивные дашборды Power BI и оптимизировал сложные аналитические отчеты.",
    ],
  },
  careerGoal: {
    uz: "Universitetda olgan fundamental bilimlarim hamda amaliy tajribamni yanada boyitish, kompaniya rivojiga oʻz hissamni qoʻshish va kuchli jamoada haqiqiy biznes keyslar ustida ishlash uchun professional jamoalardan munosib ish takliflarini qidirmoqdaman.",
    en: "Seeking impactful Data Analyst, BI Analyst, or Product Analyst roles within a strong engineering and analytics team where I can solve real business cases and drive measurable operational efficiency.",
    ru: "Ищу достойные предложения в профессиональных командах на позиции Data Analyst, BI Analyst или Product Analyst для работы над реальными бизнес-кейсами и вклада в развитие компании.",
  },
  location: {
    uz: "Toshkent sh. (Tinchlik), Oʻzbekiston",
    en: "Tashkent (Tinchlik), Uzbekistan",
    ru: "г. Ташкент (Тинчлик), Узбекистан",
  },
  citizenship: {
    uz: "Oʻzbekiston (ishlash ruxsatnomasi: Oʻzbekiston)",
    en: "Uzbekistan (Work permit: Uzbekistan)",
    ru: "Узбекистан (разрешение на работу: Узбекистан)",
  },
  workFormat: {
    uz: "Ish beruvchi ofisida, masofaviy (remote) yoki gibrid (hybrid) • Kamdan-kam xizmat safarlariga tayyor",
    en: "On-site, Remote, or Hybrid • Available for occasional business trips",
    ru: "На месте работодателя, удаленно или гибрид • Готов к редким командировкам",
  },
  employmentType: {
    uz: "Toʻliq stavka, qisman bandlik yoki loyihaviy ish",
    en: "Full-time, Part-time, or Project-based assignment",
    ru: "Полная занятость, частичная занятость, проектная работа",
  },
  birthDate: "2005-02-01",
  age: 21,
  photoUrl: "/images/mahmud.jpg",
  cvPath: "/cv/Elmurodov_Mahmud_CV.pdf",
  cvFileName: "Elmurodov_Mahmud_Data_Analyst_CV.pdf",
  cvUpdatedDate: "2026-10-23",
  contact: {
    phone: "+998 (90) 009-14-47",
    phoneHref: "tel:+998900091447",
    email: "elmurodovmaxmud8@gmail.com",
    telegramHandle: "@maxmudmv",
    telegramUrl: "https://t.me/maxmudmv",
    githubUrl: "https://github.com/maxmudmv",
    githubUsername: "maxmudmv",
    linkedinUrl: "https://www.linkedin.com/in/maxmudmv",
    leetcodeUrl: "https://leetcode.com/u/maxmudmv",
  },
  keyHighlights: [
    {
      id: "experience",
      value: "7+ oy",
      label: {
        uz: "Real amaliy tajriba",
        en: "Real Industry Experience",
        ru: "Реальный опыт работы",
      },
      description: {
        uz: "Discover Invest va A. Avloniy nomidagi milliy institutda maʼlumotlar tahlili hamda jarayonlarni raqamlashtirish.",
        en: "Data analytics, reporting automation, and process digitization at Discover Invest & A. Avloniy Institute.",
        ru: "Анализ данных, автоматизация отчетности и цифровизация процессов в Discover Invest и Институте им. А. Авлони.",
      },
    },
    {
      id: "core-stack",
      value: "7+",
      label: {
        uz: "Asosiy tahliliy texnologiyalar",
        en: "Core Analytical Tools",
        ru: "Ключевых инструментов анализа",
      },
      description: {
        uz: "SQL, MS Excel, Google Sheets, Power BI, Python (NumPy, pandas, Matplotlib, Seaborn).",
        en: "SQL, MS Excel, Google Sheets, Power BI, Python (NumPy, pandas, Matplotlib, Seaborn).",
        ru: "SQL, MS Excel, Google Sheets, Power BI, Python (NumPy, pandas, Matplotlib, Seaborn).",
      },
    },
    {
      id: "automation",
      value: "100%",
      label: {
        uz: "Raqamlashtirilgan tabel jarayoni",
        en: "Digitized Timekeeping Flow",
        ru: "Цифровизация табельного учета",
      },
      description: {
        uz: "Qoʻlda jurnal yuritish va rasm yuborish oʻrniga maxsus WebApp + Database tizimi joriy etildi.",
        en: "Replaced manual paper journal & photo reporting with a custom WebApp writing directly to a database.",
        ru: "Замена бумажных журналов и фотоотчетов на специализированное WebApp-приложение с базой данных.",
      },
    },
    {
      id: "education",
      value: "2026",
      label: {
        uz: "TATU Bakalavr & Najot Taʼlim",
        en: "TUIT B.Sc. & Najot Ta'lim",
        ru: "Бакалавр ТУИТ и Najot Ta'lim",
      },
      description: {
        uz: "Kompyuter injiniringi (AT-Servis) bakalavri hamda Data Analysis & Visualization maxsus kursi.",
        en: "B.Sc. in Computer Engineering (IT-Service) paired with specialized Data Analysis & Visualization training.",
        ru: "Бакалавр компьютерного инжиниринга (ИТ-сервис) и профильный курс Data Analysis & Visualization.",
      },
    },
  ],
  spokenLanguages: [
    {
      code: "uz",
      name: {
        uz: "Oʻzbek tili",
        en: "Uzbek",
        ru: "Узбекский язык",
      },
      level: {
        uz: "Ona tili (Native)",
        en: "Native",
        ru: "Родной (Native)",
      },
    },
    {
      code: "en",
      name: {
        uz: "Ingliz tili",
        en: "English",
        ru: "Английский язык",
      },
      level: {
        uz: "B1 — Oʻrta (Intermediate)",
        en: "B1 — Intermediate",
        ru: "B1 — Средний (Intermediate)",
      },
    },
    {
      code: "ru",
      name: {
        uz: "Rus tili",
        en: "Russian",
        ru: "Русский язык",
      },
      level: {
        uz: "Muloqot va kasbiy hujjatlar darajasida",
        en: "Working & Professional reading proficiency",
        ru: "Рабочее и профессиональное владение",
      },
    },
  ],
};
