import { WorkExperienceItem } from "./types";

/**
 * ISH TAJRIBASI MA'LUMOTLARI (EDITABLE WORK EXPERIENCE FILE)
 * hh.uz rezyumedagi haqiqiy mehnat faoliyati asosida shakllantirilgan.
 */
export const experienceData: WorkExperienceItem[] = [
  {
    id: "discover-invest",
    company: "Discover Invest",
    industry: {
      uz: "Qurilish, koʻchmas mulk va arxitektura",
      en: "Construction, Real Estate & Architecture",
      ru: "Строительство, недвижимость и архитектура",
    },
    subIndustries: {
      uz: [
        "Uy-joy qurilishi (Housing Construction)",
        "Tijorat obyektlari qurilishi (Savdo maydonlari va ofis binolari)",
        "Arxitektura va dizayn",
      ],
      en: [
        "Housing Construction",
        "Commercial Property Construction (Retail Spaces, Office Buildings)",
        "Architecture & Design",
      ],
      ru: [
        "Жилищное строительство",
        "Строительство коммерческих объектов (торговые площади, офисные здания)",
        "Архитектура и проектирование",
      ],
    },
    role: {
      uz: "Timekeeper (Maʼlumotlar hisobi va jarayonlarni raqamlashtirish)",
      en: "Timekeeper & Workforce Data Automation Specialist",
      ru: "Табельщик / Специалист по автоматизации учета рабочего времени",
    },
    location: {
      uz: "Toshkent",
      en: "Tashkent, Uzbekistan",
      ru: "Ташкент",
    },
    period: {
      uz: "Sentyabr 2026 — Oktyabr 2026",
      en: "September 2026 — October 2026",
      ru: "Сентябрь 2026 — Октябрь 2026",
    },
    duration: {
      uz: "2 oy",
      en: "2 months",
      ru: "2 месяца",
    },
    summary: {
      uz: "Xodimlarning ish vaqtini hisobga olish (tabel yuritish) va kelib-ketish jarayonlarini toʻliq nazorat qilish hamda hisobotlar zanjirini raqamlashtirish.",
      en: "End-to-end oversight of employee attendance and timekeeping data, spearheading the complete digitization of field data collection and payroll reporting.",
      ru: "Полный контроль учета рабочего времени сотрудников (ведение табеля), посещаемости и комплексная цифровизация цепочки отчетности.",
    },
    achievements: {
      uz: [
        "Xodimlarning ish vaqtini hisobga olish (tabel yuritish) va kelib-ketish jarayonlarini toʻliq nazorat qildim.",
        "Avval qoʻlda jurnalga yozib, soʻngra rasmini yuborish orqali amalga oshiriladigan eskirgan jarayonni toʻliq raqamlashtirdim: xodimlar uchun maxsus WebApp yaratdim va maʼlumotlarni toʻgʻridan-toʻgʻri maʼlumotlar bazasiga (Database) yigʻilishini yoʻlga qoʻydim.",
        "Google Sheets va MS Excel yordamida avtomatlashtirilgan tahliliy jadvallar va shablonlar tayyorlab, hisobotlarni tezkor shakllantirish va maʼlumotlarni qayta ishlash vaqtini bir necha barobar qisqartirdim.",
        "Buxgalteriya boʻlimiga ish haqi hisob-kitoblari uchun aniq, xatolarsiz va oʻz vaqtida tayyorlangan elektron maʼlumotlarni taqdim etib bordim.",
      ],
      en: [
        "Managed end-to-end tracking of employee work hours (timekeeping) and attendance verification.",
        "Fully digitized an outdated manual process (previously recorded in paper journals and sent via photos) by building a custom WebApp that streams attendance records directly into a centralized database.",
        "Built automated analytical spreadsheets and reusable templates in Google Sheets and MS Excel, cutting report generation and data processing time several-fold.",
        "Delivered accurate, error-free, and timely electronic attendance datasets to the Accounting department for payroll calculation.",
      ],
      ru: [
        "Обеспечил полный контроль учета рабочего времени сотрудников (ведение табеля) и процессов прихода/ухода.",
        "Полностью оцифровал устаревший ручной процесс (запись в бумажный журнал с отправкой фото): разработал специальное WebApp-приложение и настроил прямой сбор данных в базу данных (Database).",
        "Создал автоматизированные аналитические таблицы и шаблоны в Google Sheets и MS Excel, сократив время формирования отчетов и обработки данных в несколько раз.",
        "Своевременно предоставлял бухгалтерии точные и безошибочные электронные данные для расчета заработной платы.",
      ],
    },
    technologies: ["Custom WebApp", "Database", "Google Sheets", "MS Excel", "Payroll Analytics"],
    relatedProjectSlug: "discover-invest-timekeeping-automation",
  },
  {
    id: "avloniy-institute",
    company: "A. Avloniy nomidagi Pedagogik mahorat milliy instituti",
    companyUrl: "https://avloniy.uz/",
    industry: {
      uz: "Davlat tashkilotlari va taʼlim muassasalari",
      en: "Government Organizations & National Education Institute",
      ru: "Государственные организации и институты образования",
    },
    subIndustries: {
      uz: ["Davlat tashkilotlari (Governmental Organizations)"],
      en: ["Governmental Organizations"],
      ru: ["Государственные организации"],
    },
    role: {
      uz: "IT Support Specialist & Data / BI Analyst",
      en: "IT Support Specialist & Data / BI Analyst",
      ru: "IT Support Specialist и аналитик данных (Power BI / Excel)",
    },
    location: {
      uz: "Toshkent",
      en: "Tashkent, Uzbekistan",
      ru: "Ташкент",
    },
    period: {
      uz: "Dekabr 2025 — Aprel 2026",
      en: "December 2025 — April 2026",
      ru: "Декабрь 2025 — Апрель 2026",
    },
    duration: {
      uz: "5 oy",
      en: "5 months",
      ru: "5 месяцев",
    },
    summary: {
      uz: "Institut faoliyatiga oid turli hajmdagi maʼlumotlarni yigʻish, tozalash, Excel hisobotlarini optimallashtirish, rahbariyat uchun Power BI boshqaruv panellarini tayyorlash hamda IT tizimlarni qoʻllab-quvvatlash.",
      en: "Collecting, cleaning, and systematizing multi-scale institutional data, optimizing complex Excel reports, building executive Power BI dashboards, and maintaining IT infrastructure.",
      ru: "Сбор, очистка и систематизация данных о деятельности института, оптимизация отчетов в MS Excel, разработка интерактивных дашбордов Power BI для руководства и ИТ-поддержка.",
    },
    achievements: {
      uz: [
        "Maʼlumotlar bilan ishlash: Institut faoliyatiga oid turli hajmdagi maʼlumotlarni yigʻish, xatolardan tozalash va tizimlashtirish ishlarini bajardim.",
        "MS Excel: Murakkab hisobotlarni funksiyalar va formulalar yordamida optimallashtirib, maʼlumotlarni qayta ishlash vaqtini sezilarli darajada qisqartirdim.",
        "Power BI: Toʻplangan maʼlumotlar asosida rahbariyat va xodimlar uchun tushunarli, interaktiv boshqaruv panellari (Dashboard) hamda vizual hisobotlar tayyorladim.",
        "IT qoʻllab-quvvatlash: Institutdagi kompyuter, server va tarmoq tizimlarining soz ishlashini taʼminladim hamda xodimlarga texnik nosozliklarni bartaraf etishda yordamlashdim.",
      ],
      en: [
        "Data Operations: Collected, cleaned, validated, and systematized diverse datasets covering institutional activities.",
        "MS Excel Optimization: Streamlined complex recurring reports using advanced functions and formulas, significantly reducing manual processing time.",
        "Power BI Dashboards: Built clear, interactive executive dashboards and visual reports enabling leadership and staff to monitor institutional metrics.",
        "IT Infrastructure Support: Maintained continuous operation of institutional computers, servers, and network systems while resolving technical issues for staff.",
      ],
      ru: [
        "Работа с данными: выполнял сбор, очистку от ошибок и систематизацию разнородных данных о деятельности института.",
        "MS Excel: оптимизировал сложные отчеты с помощью функций и формул, значительно сократив время обработки данных.",
        "Power BI: разработал понятные интерактивные панели управления (Dashboard) и визуальные отчеты для руководства и сотрудников.",
        "ИТ-поддержка: обеспечивал бесперебойную работу компьютеров, серверов и сетевых систем института, оказывал техническую поддержку сотрудникам.",
      ],
    },
    technologies: ["Power BI", "MS Excel", "Data Cleaning", "Dashboard Design", "IT & Server Support"],
    relatedProjectSlug: "avloniy-institute-powerbi-analytics",
  },
];
