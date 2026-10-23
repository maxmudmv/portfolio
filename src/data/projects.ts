import { ProjectCaseStudy } from "./types";

/**
 * LOYIHALAR VA AMALIY KEYSLAR (EDITABLE PROJECTS & CASE STUDIES FILE)
 * Barcha loyihalar haqiqiy ish tajribasi va GitHub profilingizga asoslangan.
 * Kelajakda yangi loyiha qo'shish uchun ushbu massivga yangi obyekt qo'shishingiz kifoya.
 */
export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "discover-invest-timekeeping-automation",
    featured: true,
    category: "process-automation",
    categoryLabel: {
      uz: "Jarayonlarni raqamlashtirish & Tahliliy avtomatlashtirish",
      en: "Process Digitization & Analytical Automation",
      ru: "Цифровизация процессов и аналитическая автоматизация",
    },
    title: {
      uz: "Discover Invest: Tabel tizimini WebApp + Database orqali raqamlashtirish va tahliliy avtomatlashtirish",
      en: "Discover Invest: Workforce Timekeeping Digitization via Custom WebApp, Database & Automated Sheets",
      ru: "Discover Invest: Цифровизация табельного учета через WebApp + БД и автоматизация аналитики",
    },
    organization: {
      uz: "Discover Invest (Toshkent)",
      en: "Discover Invest (Tashkent)",
      ru: "Discover Invest (Ташкент)",
    },
    period: {
      uz: "Sentyabr 2026 — Oktyabr 2026",
      en: "September 2026 — October 2026",
      ru: "Сентябрь 2026 — Октябрь 2026",
    },
    role: {
      uz: "Timekeeper & Data Automation Analyst",
      en: "Timekeeper & Data Automation Analyst",
      ru: "Табельщик / Аналитик по автоматизации данных",
    },
    shortSummary: {
      uz: "Qoʻlda qogʻoz jurnalga yozib, rasmini yuborishga asoslangan eskirgan tabel jarayonini maxsus WebApp va markazlashgan maʼlumotlar bazasi orqali 100% raqamlashtirish hamda Excel/Google Sheets hisobotlarini avtomatlashtirish.",
      en: "Replaced an outdated paper-journal and photo-based attendance workflow with a custom WebApp connected directly to a centralized database, paired with automated Google Sheets & Excel analytical templates.",
      ru: "Полная замена устаревшего бумажного журнала и фотоотчетов на специальное WebApp-приложение с прямой записью в базу данных и автоматизированными шаблонами Excel / Google Sheets.",
    },
    problemStatement: {
      uz: "Qurilish va arxitektura obyektlarida xodimlarning ishga kelib-ketish vaqti avval qoʻlda qogʻoz jurnalga yozilib, soʻngra uning rasmi messenjer orqali yuborilar edi. Bu esa maʼlumotlarni qayta koʻchirib yozishda koʻp vaqt yoʻqotilishiga, inson omili xatolariga va buxgalteriya uchun hisobotlarning kechikishiga sabab boʻlgan.",
      en: "Across construction and commercial sites, employee attendance was previously logged manually in paper journals and transmitted as photographs. Manually transcribing these photos into spreadsheets caused severe bottlenecks, transcription errors, and delays in payroll preparation.",
      ru: "На строительных объектах учет прихода и ухода сотрудников велся вручную в бумажном журнале с последующей отправкой фотографий. Ручной перенос данных в таблицы отнимал много времени и создавал риск ошибок при расчете зарплаты.",
    },
    datasetAndSources: {
      uz: "Xodimlarning kunlik kelib-ketish vaqtlari, smena yozuvlari, obyektlar kesimidagi davomat maʼlumotlari hamda buxgalteriya tabel jadvallari.",
      en: "Daily employee check-in/check-out timestamps, shift logs, site-level attendance records, and accounting payroll schedules.",
      ru: "Ежедневные отметки прихода и ухода сотрудников, данные по сменам, посещаемость по объектам и табельные ведомости для бухгалтерии.",
    },
    dataCleaningAndPrep: {
      uz: [
        "Qogʻoz jurnallardan oʻtkaziladigan tartibsiz yozuvlar oʻrniga WebApp formasida qatʼiy maʼlumot kiritish qoidalari (validatsiya) joriy etildi.",
        "Xodim ID raqamlari, obyekt nomlari va vaqt formatlari yagona maʼlumotlar bazasi (Database) sxemasiga standartlashtirildi.",
        "Takroriy kiritilgan yozuvlar va notoʻgʻri smena soatlarini avtomatik aniqlovchi tekshiruv formulalari tuzildi.",
      ],
      en: [
        "Eliminated unstructured photo transcriptions by enforcing strict input validation inside the custom WebApp interface.",
        "Standardized employee IDs, site codes, and timestamp formats inside a centralized relational database schema.",
        "Implemented automated validation rules in Google Sheets and MS Excel to flag duplicate entries or incomplete shift logs.",
      ],
      ru: [
        "Внедрена строгая валидация ввода данных в WebApp вместо ручной расшифровки фотографий бумажных журналов.",
        "Стандартизированы идентификаторы сотрудников, коды объектов и форматы времени в единой структуре базы данных.",
        "Настроены автоматические правила проверки в Google Sheets и Excel для выявления дубликатов и некорректных смен.",
      ],
    },
    exploratoryAnalysis: {
      uz: [
        "Maʼlumotlarni yigʻishdan tortib buxgalteriyaga topshirishgacha boʻlgan har bir bosqichda ketadigan vaqt tahlil qilindi.",
        "Obyektlar boʻyicha kunlik davomat va ish soatlari taqsimoti oʻrganilib, eng koʻp kechikish boʻladigan nuqtalar aniqlandi.",
      ],
      en: [
        "Analyzed the end-to-end reporting lifecycle from field attendance capture to final accounting submission.",
        "Examined daily attendance patterns and shift hour distributions across construction sites to identify reporting bottlenecks.",
      ],
      ru: [
        "Проанализирован полный цикл движения данных от фиксации на объекте до сдачи табеля в бухгалтерию.",
        "Изучено распределение рабочих часов и дисциплины посещаемости по объектам для устранения узких мест в отчетности.",
      ],
    },
    methodology: {
      uz: [
        "1-qadam: Xodimlar va masʼullar uchun maʼlumotlarni toʻgʻridan-toʻgʻri maʼlumotlar bazasiga (Database) yozuvchi maxsus WebApp ishlab chiqildi.",
        "2-qadam: Maʼlumotlar bazasidan Google Sheets va MS Excel tahliliy jadvallariga maʼlumotlar oqimi bogʻlandi.",
        "3-qadam: Ish soatlari, qoʻshimcha smenalar va yakuniy tabelni avtomatik hisoblovchi shablonlar yaratildi.",
        "4-qadam: Buxgalteriya boʻlimiga ish haqi hisob-kitoblari uchun xatolarsiz elektron maʼlumotlar yetkazib berish tizimi yoʻlga qoʻyildi.",
      ],
      en: [
        "Step 1: Built and deployed a custom WebApp allowing direct digital entry of attendance records into a structured database.",
        "Step 2: Connected database exports to dynamic Google Sheets and MS Excel analytical workbooks.",
        "Step 3: Engineered reusable formula templates for automatic aggregation of regular hours, absences, and shift totals.",
        "Step 4: Established a verified electronic handoff pipeline to the Accounting department for timely payroll execution.",
      ],
      ru: [
        "Шаг 1: Разработано специальное WebApp-приложение с прямой записью данных о посещаемости в базу данных (Database).",
        "Шаг 2: Настроена связка данных с аналитическими таблицами Google Sheets и MS Excel.",
        "Шаг 3: Созданы автоматизированные шаблоны для расчета отработанных часов и формирования табеля.",
        "Шаг 4: Выстроен процесс своевременной передачи точных электронных данных в бухгалтерию для начисления зарплаты.",
      ],
    },
    toolsAndTech: ["Custom WebApp", "Database", "Google Sheets", "MS Excel", "Automated Templates", "Data Validation"],
    resultsAndImpact: {
      uz: [
        "Qoʻlda jurnal yuritish va rasm yuborish jarayoni 100% raqamli WebApp + Database tizimiga oʻtkazildi.",
        "Hisobotlarni shakllantirish va maʼlumotlarni qayta ishlash vaqti bir necha barobar qisqartirildi.",
        "Buxgalteriya boʻlimiga ish haqi hisob-kitoblari uchun aniq, xatolarsiz va oʻz vaqtida elektron maʼlumotlar taqdim etildi.",
      ],
      en: [
        "100% elimination of manual paper-journal photo reporting in favor of direct WebApp-to-Database capture.",
        "Reduced report generation and data processing time several-fold through automated Google Sheets & Excel templates.",
        "Delivered accurate, error-free, and on-schedule electronic payroll datasets to the Accounting department.",
      ],
      ru: [
        "100% переход от бумажных журналов и фотоотчетов к цифровой системе WebApp + Database.",
        "Кратное сокращение времени формирования отчетов и обработки данных благодаря шаблонам Excel и Google Sheets.",
        "Обеспечена своевременная передача безошибочных электронных данных в бухгалтерию для расчета заработной платы.",
      ],
    },
    limitationsAndLessons: {
      uz: [
        "Obyektlardagi xodimlarni yangi WebApp interfeysiga oʻrgatishda qisqa va tushunarli UI hamda qatʼiy kiritish cheklovlari eng muhim omil ekanligi tasdiqlandi.",
        "Maʼlumotlarni yigʻish bosqichidayoq (source-level validation) toza saqlash keyingi tahlil vaqtini keskin tejaydi.",
      ],
      en: [
        "Learned that intuitive UI constraints and source-level validation are critical when transitioning field staff from paper logs to digital WebApps.",
        "Capturing clean, structured records at the point of entry eliminates 90% of downstream spreadsheet cleaning.",
      ],
      ru: [
        "Практика показала, что при переводе сотрудников с бумажных журналов на WebApp ключевую роль играет простота интерфейса и валидация на этапе ввода.",
        "Сбор чистых структурированных данных на входе устраняет большую часть рутинной очистки в таблицах.",
      ],
    },
    metrics: [
      {
        label: {
          uz: "Jarayonni raqamlashtirish",
          en: "Workflow Digitization",
          ru: "Цифровизация процесса",
        },
        value: "100%",
        detail: {
          uz: "Qogʻoz jurnal + rasm oʻrniga WebApp + Database",
          en: "WebApp + Database replaced paper & photos",
          ru: "WebApp + БД вместо бумажного журнала и фото",
        },
      },
      {
        label: {
          uz: "Qayta ishlash tezligi",
          en: "Processing Speedup",
          ru: "Ускорение обработки",
        },
        value: "Bir necha barobar",
        detail: {
          uz: "Avtomatlashtirilgan Excel va Google Sheets shablonlari",
          en: "Via automated Excel & Google Sheets templates",
          ru: "За счет шаблонов Excel и Google Sheets",
        },
      },
      {
        label: {
          uz: "Buxgalteriya uchun aniqlik",
          en: "Payroll Data Accuracy",
          ru: "Точность данных для бухгалтерии",
        },
        value: "Xatolarsiz",
        detail: {
          uz: "Avtomatik validatsiya qilingan elektron tabel",
          en: "Validated electronic payroll handoff",
          ru: "Проверенные электронные ведомости",
        },
      },
    ],
    chartConfig: {
      title: {
        uz: "Raqamlashtirishdan oldingi va keyingi ish bosqichlari taqqoslovi",
        en: "Workflow Pipeline Efficiency: Manual Paper Flow vs. Digitized WebApp + DB",
        ru: "Сравнение этапов процесса: Ручной учет vs Цифровая система WebApp + БД",
      },
      subtitle: {
        uz: "Discover Invest amaliy keysi asosida har bir bosqichdagi nisbiy mehnat sarfi (shartli indeks: 100 = eski qoʻlda bajarilgan jarayon)",
        en: "Relative operational effort across pipeline stages based on the Discover Invest workflow transformation (Baseline 100 = legacy manual process)",
        ru: "Относительные трудозатраты по этапам на основе кейса Discover Invest (базовый индекс 100 = старый ручной процесс)",
      },
      authenticityNote: {
        uz: "Eslatma: Ushbu diagramma rezyumedagi haqiqiy jarayon («qayta ishlash vaqtini bir necha barobar qisqartirdim») asosida eski va yangi tizim bosqichlarini vizual tushuntirish uchun keltirilgan.",
        en: "Note: Illustrative process comparison reflecting the documented workflow transformation ('reduced processing time several-fold').",
        ru: "Примечание: Наглядное сравнение этапов на основе реального результата из резюме («сократил время обработки в несколько раз»).",
      },
      type: "comparison-bar",
      primarySeriesLabel: {
        uz: "Eski jarayon (Qoʻlda jurnal + Rasm)",
        en: "Legacy Manual Flow (Paper + Photo)",
        ru: "Старый процесс (Бумажный журнал + Фото)",
      },
      secondarySeriesLabel: {
        uz: "Yangi tizim (WebApp + Database + Sheets)",
        en: "Digitized Flow (WebApp + DB + Sheets)",
        ru: "Новая система (WebApp + БД + Sheets)",
      },
      data: [
        {
          label: {
            uz: "Maʼlumot yigʻish (Obyekt)",
            en: "Field Data Capture",
            ru: "Сбор данных на объекте",
          },
          beforeValue: 100,
          afterValue: 25,
          primaryValue: 100,
          secondaryValue: 25,
          unit: "indeks",
        },
        {
          label: {
            uz: "Jadvalga koʻchirish va baza",
            en: "Database Entry & Sync",
            ru: "Ввод в таблицу и базу данных",
          },
          beforeValue: 100,
          afterValue: 10,
          primaryValue: 100,
          secondaryValue: 10,
          unit: "indeks",
        },
        {
          label: {
            uz: "Xatolarni tekshirish",
            en: "Validation & QA",
            ru: "Проверка ошибок и сверка",
          },
          beforeValue: 100,
          afterValue: 20,
          primaryValue: 100,
          secondaryValue: 20,
          unit: "indeks",
        },
        {
          label: {
            uz: "Buxgalteriya hisoboti",
            en: "Payroll Report Generation",
            ru: "Формирование отчета для бухгалтерии",
          },
          beforeValue: 100,
          afterValue: 18,
          primaryValue: 100,
          secondaryValue: 18,
          unit: "indeks",
        },
      ],
    },
    githubUrl: "https://github.com/maxmudmv",
    repositoryNote: {
      uz: "Ichki korporativ tizim (Discover Invest) — arxitektura va tahliliy shablonlar tavsifi keyslarda keltirilgan.",
      en: "Internal enterprise system built at Discover Invest — architecture and workflow details documented in this case study.",
      ru: "Внутренняя корпоративная разработка для Discover Invest — архитектура и процесс подробно описаны в кейсе.",
    },
  },
  {
    slug: "avloniy-institute-powerbi-analytics",
    featured: true,
    category: "business-intelligence",
    categoryLabel: {
      uz: "Business Intelligence (Power BI) & Maʼlumotlarni tizimlashtirish",
      en: "Business Intelligence (Power BI) & Institutional Data Engineering",
      ru: "Business Intelligence (Power BI) и систематизация данных",
    },
    title: {
      uz: "A. Avloniy nomidagi milliy institut: Maʼlumotlarni tozalash, Excel optimallashtirish va Power BI Dashboard",
      en: "A. Avloniy National Institute: Multi-Scale Data Cleaning, Excel Optimization & Executive Power BI Dashboards",
      ru: "Национальный институт им. А. Авлони: Очистка данных, оптимизация Excel и дашборды Power BI",
    },
    organization: {
      uz: "A. Avloniy nomidagi Pedagogik mahorat milliy instituti",
      en: "A. Avloniy National Research Institute",
      ru: "Национальный институт педагогического мастерства им. А. Авлони",
    },
    period: {
      uz: "Dekabr 2025 — Aprel 2026 (5 oy)",
      en: "December 2025 — April 2026 (5 months)",
      ru: "Декабрь 2025 — Апрель 2026 (5 месяцев)",
    },
    role: {
      uz: "IT Support Specialist & Data / BI Analyst",
      en: "IT Support Specialist & Data / BI Analyst",
      ru: "IT Support Specialist и аналитик данных (Power BI / Excel)",
    },
    shortSummary: {
      uz: "Institut faoliyatiga oid turli hajmdagi maʼlumotlarni yigʻish, xatolardan tozalash, MS Excel hisobotlarini formulalar yordamida optimallashtirish hamda rahbariyat uchun interaktiv Power BI boshqaruv panellarini yaratish.",
      en: "Collected, cleaned, and systematized diverse institutional datasets, optimized complex MS Excel reporting workflows, and delivered interactive Power BI dashboards for executive leadership.",
      ru: "Сбор, очистка от ошибок и систематизация данных о деятельности института, оптимизация сложных отчетов в MS Excel и создание интерактивных дашбордов Power BI для руководства.",
    },
    problemStatement: {
      uz: "Institutning turli boʻlimlaridan keladigan maʼlumotlar tarqoq formatlarda saqlangan va murakkab hisobotlarni qoʻlda yigʻish koʻp vaqt olgan. Rahbariyat va xodimlar uchun koʻrsatkichlarni tezda koʻrish hamda tahlil qilish imkonini beruvchi yagona interaktiv vizual boshqaruv paneli (Dashboard) zarur edi.",
      en: "Institutional data across departments existed in fragmented formats with inconsistent formatting and manual Excel aggregation bottlenecks. Leadership and staff needed clean, unified datasets and interactive visual dashboards to monitor operational indicators.",
      ru: "Данные о деятельности подразделений института поступали в разрозненных форматах, а ручная сводка сложных отчетов занимала много времени. Руководству требовались очищенные данные и наглядные интерактивные панели управления (Dashboard).",
    },
    datasetAndSources: {
      uz: "Institut boʻlimlarining davriy faoliyat koʻrsatkichlari, oʻquv va malaka oshirish jarayonlariga oid jadvalli maʼlumotlar hamda ichki elektron hisobotlar.",
      en: "Departmental operational records, training and professional development datasets, internal spreadsheets, and institutional reporting tables.",
      ru: "Периодические показатели работы отделов института, табличные данные учебных процессов и внутренние электронные отчеты.",
    },
    dataCleaningAndPrep: {
      uz: [
        "Turli manbalardan yigʻilgan har xil hajmdagi jadvallar xatolardan, dublikatlardan va nomuvofiq formatlardan tozalandi.",
        "Boʻlimlar va davrlar kesimidagi maʼlumotlar yagona tizimlashtirilgan tuzilmaga keltirildi.",
        "Power BI va MS Excelda tahlil qilish uchun ustun turlari hamda maʼlumotlar mantiqiy bogʻliqligi tekshirildi.",
      ],
      en: [
        "Cleaned multi-volume spreadsheets to remove formatting errors, duplicates, and inconsistent categorical labels.",
        "Systematized historical and ongoing records into standardized relational tables across departments.",
        "Prepared structured data models ready for Power Query transformation and Power BI visualization.",
      ],
      ru: [
        "Разнородные массивы данных очищены от ошибок ввода, дубликатов и несогласованных форматов.",
        "Данные по отделам и периодам приведены к единой систематизированной табличной структуре.",
        "Подготовлены корректные модели данных для загрузки в Power Query и визуализации в Power BI.",
      ],
    },
    exploratoryAnalysis: {
      uz: [
        "Boʻlimlar faoliyatiga oid asosiy koʻrsatkichlar (KPI) va rahbariyat eng koʻp soʻraydigan tahliliy kesimlar aniqlandi.",
        "MS Excelda takrorlanuvchi hisob-kitoblar tahlil qilinib, ularni funksiyalar va formulalar bilan avtomatlashtirish nuqtalari belgilandi.",
      ],
      en: [
        "Identified core institutional KPIs and frequent analytical slices requested by executive leadership.",
        "Audited existing MS Excel reports to pinpoint manual calculation bottlenecks suitable for formula optimization.",
      ],
      ru: [
        "Определены ключевые показатели (KPI) деятельности института и наиболее востребованные аналитические разрезы для руководства.",
        "Проведен аудит существующих таблиц MS Excel для замены ручных расчетов оптимизированными формулами.",
      ],
    },
    methodology: {
      uz: [
        "1-qadam: Maʼlumotlarni yigʻish, xatolardan tozalash (Data Cleaning) va tizimlashtirish.",
        "2-qadam: MS Excelda murakkab hisobotlarni ilgʻor funksiyalar va formulalar yordamida optimallashtirish.",
        "3-qadam: Power BI dasturida interaktiv filtrlar, KPI kartochkalar va dinamik diagrammalarga ega boshqaruv panellarini (Dashboard) loyihalash.",
        "4-qadam: Institutdagi kompyuter, server va tarmoq tizimlarining uzluksiz ishlashini taʼminlash orqali texnik infratuzilmani qoʻllab-quvvatlash.",
      ],
      en: [
        "Step 1: End-to-end collection, error removal, and systematization of institutional datasets.",
        "Step 2: Optimization of complex MS Excel workbooks using structured formulas and functions.",
        "Step 3: Design and deployment of interactive Power BI dashboards featuring KPI cards, slicers, and visual reports for management.",
        "Step 4: Continuous maintenance of institutional servers, networks, and workstations to ensure reliable operations.",
      ],
      ru: [
        "Шаг 1: Сбор, очистка от ошибок и систематизация массивов данных о деятельности института.",
        "Шаг 2: Оптимизация сложных отчетов в MS Excel с применением функций и формул.",
        "Шаг 3: Разработка интерактивных панелей управления (Dashboard) и визуальных отчетов в Power BI для руководства.",
        "Шаг 4: Поддержка бесперебойной работы компьютеров, серверов и сетевой инфраструктуры института.",
      ],
    },
    toolsAndTech: ["Power BI", "MS Excel", "Data Cleaning", "Power Query", "Interactive Dashboards", "IT Infrastructure"],
    resultsAndImpact: {
      uz: [
        "Institut faoliyatiga oid turli hajmdagi maʼlumotlar xatolardan tozalanib, yagona tartibga solindi.",
        "MS Excel funksiyalari va formulalari yordamida maʼlumotlarni qayta ishlash vaqti sezilarli darajada qisqartirildi.",
        "Rahbariyat va xodimlar uchun tushunarli, interaktiv Power BI boshqaruv panellari (Dashboard) hamda vizual hisobotlar taqdim etildi.",
      ],
      en: [
        "Standardized and cleaned multi-scale institutional datasets into reliable analytical tables.",
        "Significantly reduced report turnaround time through formula-driven MS Excel optimization.",
        "Empowered leadership and staff with clear, interactive Power BI dashboards and visual reports.",
      ],
      ru: [
        "Систематизированы и очищены от ошибок разнородные данные о деятельности института.",
        "Значительно сокращено время обработки данных за счет оптимизации отчетов в MS Excel.",
        "Руководство и сотрудники обеспечены понятными интерактивными дашбордами и визуальными отчетами в Power BI.",
      ],
    },
    limitationsAndLessons: {
      uz: [
        "Rahbariyat uchun Dashboard tayyorlashda ortiqcha murakkab grafiklardan koʻra aniq KPI koʻrsatkichlar va qulay filtrlar qaror qabul qilishni tezlashtirishi amalda oʻz isbotini topdi.",
      ],
      en: [
        "Confirmed that executive dashboards achieve the highest adoption when prioritizing clear KPI hierarchies and intuitive filtering over visual clutter.",
      ],
      ru: [
        "Подтверждено на практике, что для руководства наиболее эффективны дашборды с четкой иерархией KPI и удобной фильтрацией без визуальной перегрузки.",
      ],
    },
    metrics: [
      {
        label: {
          uz: "BI Vizualizatsiya",
          en: "BI Visualization",
          ru: "BI-визуализация",
        },
        value: "Power BI",
        detail: {
          uz: "Rahbariyat va xodimlar uchun interaktiv Dashboardlar",
          en: "Interactive dashboards for leadership & staff",
          ru: "Интерактивные дашборды для руководства и сотрудников",
        },
      },
      {
        label: {
          uz: "Hisobotlar tezligi",
          en: "Report Optimization",
          ru: "Оптимизация отчетов",
        },
        value: "MS Excel",
        detail: {
          uz: "Funksiyalar va formulalar orqali sezilarli qisqartirilgan vaqt",
          en: "Significantly faster processing via advanced formulas",
          ru: "Значительное сокращение времени обработки формулами",
        },
      },
      {
        label: {
          uz: "Maʼlumotlar sifati",
          en: "Data Quality",
          ru: "Качество данных",
        },
        value: "Tozalangan",
        detail: {
          uz: "Yigʻilgan, xatolardan tozalangan va tizimlashtirilgan baza",
          en: "Collected, cleaned & systematized institutional records",
          ru: "Собранные, очищенные и систематизированные данные",
        },
      },
    ],
    chartConfig: {
      title: {
        uz: "Maʼlumotlar tahlili va BI tizimlashtirish qamrovi (A. Avloniy instituti)",
        en: "Data Operations & BI Transformation Breakdown (A. Avloniy Institute)",
        ru: "Структура работ по данным и BI-аналитике (Институт им. А. Авлони)",
      },
      subtitle: {
        uz: "5 oylik faoliyat davomida bajarilgan asosiy analitik va texnik yoʻnalishlar ulushi (%)",
        en: "Proportional focus across core analytical and technical responsibilities during the 5-month engagement (%)",
        ru: "Распределение ключевых аналитических и технических задач за 5 месяцев работы (%)",
      },
      authenticityNote: {
        uz: "Eslatma: Rezyumedagi 4 ta asosiy masʼuliyat yoʻnalishi (Maʼlumotlar bilan ishlash, MS Excel optimallashtirish, Power BI Dashboard va IT qoʻllab-quvvatlash) tarkibini ifodalaydi.",
        en: "Note: Represents the four core responsibility pillars documented in the official CV.",
        ru: "Примечание: Отражает четыре ключевых направления обязанностей, указанных в официальном резюме.",
      },
      type: "bi-coverage",
      primarySeriesLabel: {
        uz: "Ish hajmi ulushi (%)",
        en: "Operational Share (%)",
        ru: "Доля задач (%)",
      },
      data: [
        {
          label: {
            uz: "Maʼlumotlarni yigʻish va tozalash",
            en: "Data Collection & Cleaning",
            ru: "Сбор и очистка данных",
          },
          primaryValue: 30,
          unit: "%",
        },
        {
          label: {
            uz: "Power BI Dashboard va vizualizatsiya",
            en: "Power BI Dashboards & Reporting",
            ru: "Дашборды Power BI и визуализация",
          },
          primaryValue: 30,
          unit: "%",
        },
        {
          label: {
            uz: "MS Excel hisobotlarini optimallashtirish",
            en: "MS Excel Formula Optimization",
            ru: "Оптимизация отчетов в MS Excel",
          },
          primaryValue: 25,
          unit: "%",
        },
        {
          label: {
            uz: "IT, Server va tarmoq tizimlari",
            en: "IT, Server & Network Support",
            ru: "Поддержка ИТ, серверов и сетей",
          },
          primaryValue: 15,
          unit: "%",
        },
      ],
    },
    liveUrl: "https://avloniy.uz/",
    githubUrl: "https://github.com/maxmudmv",
    repositoryNote: {
      uz: "A. Avloniy nomidagi milliy institut ichki BI va hisobotlar tizimi.",
      en: "Internal BI and reporting initiative at A. Avloniy National Research Institute.",
      ru: "Внутренняя система BI-отчетности Национального института им. А. Авлони.",
    },
  },
  {
    slug: "python-sql-exploratory-data-analysis",
    featured: true,
    isTemplatePlaceholder: true,
    category: "python-sql",
    categoryLabel: {
      uz: "Python & SQL Amaliy Tahlil (GitHub Portfel)",
      en: "Python & SQL Applied Analytics (GitHub Portfolio)",
      ru: "Прикладной анализ на Python и SQL (GitHub-портфель)",
    },
    title: {
      uz: "SQL, Python (pandas, NumPy) va Seaborn yordamida amaliy maʼlumotlar tahlili",
      en: "Applied Data Analysis & Visualization with SQL, Python (pandas, NumPy) & Seaborn",
      ru: "Прикладной анализ и визуализация данных на SQL, Python (pandas, NumPy) и Seaborn",
    },
    organization: {
      uz: "GitHub (@maxmudmv) & Amaliy Tahliliy Loyihalar",
      en: "GitHub (@maxmudmv) & Applied Analytical Work",
      ru: "GitHub (@maxmudmv) и практические проекты",
    },
    period: {
      uz: "2025 — 2026",
      en: "2025 — 2026",
      ru: "2025 — 2026",
    },
    role: {
      uz: "Data Analyst",
      en: "Data Analyst",
      ru: "Аналитик данных (Data Analyst)",
    },
    shortSummary: {
      uz: "Rezyumedagi texnik stek (SQL, Python: NumPy, pandas, Matplotlib, Seaborn va Power BI) asosida maʼlumotlarni tozalash, EDA (Exploratory Data Analysis) va statistik vizualizatsiya jarayonlari.",
      en: "End-to-end exploratory data analysis (EDA), SQL querying, data wrangling with pandas/NumPy, and statistical visualization using Matplotlib & Seaborn.",
      ru: "Комплексный разведочный анализ данных (EDA), SQL-запросы, предобработка в pandas/NumPy и статистическая визуализация в Matplotlib и Seaborn.",
    },
    problemStatement: {
      uz: "Biznes qarorlarini qabul qilishda xom maʼlumotlar bazasidan kerakli koʻrsatkichlarni SQL orqali ajratib olish, Python (pandas, NumPy) yordamida anomal qiymatlarni tozalash hamda Matplotlib va Seaborn kutubxonalarida aniq vizual xulosalar chiqarish talab etiladi.",
      en: "Extracting actionable business insights requires querying raw relational tables with SQL, cleaning anomalies in Python (pandas, NumPy), and communicating statistical trends via Matplotlib and Seaborn.",
      ru: "Для принятия бизнес-решений требуется извлечение срезов данных через SQL, очистка аномалий в Python (pandas, NumPy) и наглядная статистическая визуализация в Matplotlib и Seaborn.",
    },
    datasetAndSources: {
      uz: "Relyatsion SQL jadvallari, CSV/Excel formatidagi tranzaksion va operatsion maʼlumotlar toʻplamlari (yangi GitHub repozitoriylaringizni `src/data/projects.ts` faylida osongina biriktirishingiz mumkin).",
      en: "Relational SQL tables and CSV/Excel operational datasets (you can easily attach specific GitHub repo links inside `src/data/projects.ts`).",
      ru: "Реляционные таблицы SQL и операционные датасеты в форматах CSV/Excel (конкретные ссылки на репозитории легко обновляются в `src/data/projects.ts`).",
    },
    dataCleaningAndPrep: {
      uz: [
        "pandas va NumPy yordamida boʻsh qiymatlar (`NaN`), dublikatlar va notoʻgʻri maʼlumot turlarini (`dtypes`) aniqlash hamda tozalash.",
        "SQL soʻrovlari (`JOIN`, `GROUP BY`, `WHERE`) orqali tahlil uchun zarur boʻlgan maʼlumotlar kesimini shakllantirish.",
      ],
      en: [
        "Handling missing values (`NaN`), duplicate records, and data type conversions using `pandas` and `NumPy`.",
        "Structuring analytical views through relational SQL queries (`JOIN`, `GROUP BY`, filtering, and aggregations).",
      ],
      ru: [
        "Обработка пропущенных значений (`NaN`), дубликатов и приведение типов данных с помощью `pandas` и `NumPy`.",
        "Формирование аналитических витрин с помощью SQL-запросов (`JOIN`, `GROUP BY`, фильтрация и агрегация).",
      ],
    },
    exploratoryAnalysis: {
      uz: [
        "Asosiy statistik koʻrsatkichlar (oʻrtacha qiymat, mediana, dispersiya va kvantillar) tahlili.",
        "Matplotlib va Seaborn yordamida oʻzgaruvchilar oʻrtasidagi korrelyatsiya va vaqt boʻyicha oʻzgarish dinamikasini vizual oʻrganish.",
      ],
      en: [
        "Computing descriptive statistics (mean, median, variance, quantiles) across numerical features.",
        "Visualizing feature correlations and temporal distributions using `Matplotlib` and `Seaborn`.",
      ],
      ru: [
        "Расчет описательных статистик (среднее, медиана, дисперсия, квантили) по числовым признакам.",
        "Визуальное исследование корреляций и распределений с помощью `Matplotlib` и `Seaborn`.",
      ],
    },
    methodology: {
      uz: [
        "SQL orqali maʼlumotlarni bazadan ajratib olish.",
        "Python (`pandas`, `NumPy`) muhitida maʼlumotlarni tozalash va transformatsiya qilish.",
        "`Matplotlib` va `Seaborn` orqali statistik grafiklarni yaratish.",
        "Yakuniy biznes xulosalarini Power BI yoki tahliliy hisobot koʻrinishida taqdim etish.",
      ],
      en: [
        "Data extraction from relational schemas using SQL.",
        "Data wrangling and feature transformation in Python (`pandas`, `NumPy`).",
        "Statistical plotting with `Matplotlib` and `Seaborn`.",
        "Executive presentation of findings via Power BI dashboards and structured notebooks.",
      ],
      ru: [
        "Извлечение данных из реляционных таблиц с помощью SQL.",
        "Предобработка и трансформация данных в Python (`pandas`, `NumPy`).",
        "Построение статистических графиков в `Matplotlib` и `Seaborn`.",
        "Презентация бизнес-выводов в Power BI и аналитических отчетах.",
      ],
    },
    toolsAndTech: ["Python", "SQL", "pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
    resultsAndImpact: {
      uz: [
        "SQL, Python va Power BI texnologiyalarini yagona tahliliy zanjirda qoʻllash boʻyicha amaliy yechimlar.",
        "Ushbu kartochka `src/data/projects.ts` faylida joylashgan boʻlib, GitHub’ga yangi notebook yoki loyiha yuklaganingizda bir qator kod bilan toʻldirishga tayyor.",
      ],
      en: [
        "Demonstrates the complete analytical workflow combining SQL, Python (`pandas`, `NumPy`, `Matplotlib`, `Seaborn`), and Power BI.",
        "Configured in `src/data/projects.ts` so new GitHub repositories and Jupyter notebooks can be added in seconds.",
      ],
      ru: [
        "Демонстрирует полный цикл анализа данных с объединением SQL, Python (`pandas`, `NumPy`, `Matplotlib`, `Seaborn`) и Power BI.",
        "Карточка настроена в `src/data/projects.ts` для быстрого добавления новых ноутбуков и репозиториев с GitHub.",
      ],
    },
    limitationsAndLessons: {
      uz: [
        "Tahliliy loyihalarda kodning qayta ishlatiluvchanligi (reproducible notebooks) va vizual grafiklarning tushunarli izohlanishi biznes jamoalar uchun eng muhim mezon hisoblanadi.",
      ],
      en: [
        "Reproducible Python notebooks and clearly annotated charts are essential for translating technical analysis into business action.",
      ],
      ru: [
        "Воспроизводимость кода в Python-ноутбуках и понятные подписи к графикам — ключ к передаче аналитических выводов бизнесу.",
      ],
    },
    metrics: [
      {
        label: {
          uz: "Dasturlash va Baza",
          en: "Querying & Code",
          ru: "Запросы и код",
        },
        value: "SQL + Python",
        detail: {
          uz: "NumPy, pandas, Matplotlib, Seaborn",
          en: "NumPy, pandas, Matplotlib, Seaborn",
          ru: "NumPy, pandas, Matplotlib, Seaborn",
        },
      },
      {
        label: {
          uz: "GitHub Profil",
          en: "GitHub Profile",
          ru: "Профиль GitHub",
        },
        value: "@maxmudmv",
        detail: {
          uz: "github.com/maxmudmv",
          en: "github.com/maxmudmv",
          ru: "github.com/maxmudmv",
        },
      },
      {
        label: {
          uz: "Algoritmik amaliyot",
          en: "Algorithmic Practice",
          ru: "Алгоритмическая практика",
        },
        value: "LeetCode",
        detail: {
          uz: "leetcode.com/u/maxmudmv",
          en: "leetcode.com/u/maxmudmv",
          ru: "leetcode.com/u/maxmudmv",
        },
      },
    ],
    chartConfig: {
      title: {
        uz: "Tahliliy loyiha bosqichlari boʻyicha texnologik stek taqsimoti",
        en: "Analytical Pipeline Stage Coverage by Technology Stack",
        ru: "Применение стека технологий по этапам аналитического цикла",
      },
      subtitle: {
        uz: "SQL, Python (pandas/NumPy), Matplotlib/Seaborn va Power BI ning maʼlumotlar tahlili bosqichlaridagi oʻrni",
        en: "Role of SQL, Python (pandas/NumPy), Matplotlib/Seaborn, and Power BI across the data analysis lifecycle",
        ru: "Роль SQL, Python (pandas/NumPy), Matplotlib/Seaborn и Power BI на этапах анализа данных",
      },
      authenticityNote: {
        uz: "Eslatma: Ushbu diagramma sizning texnik koʻnikmalaringiz (SQL, Excel, Python, Power BI) tahliliy jarayonning qaysi bosqichlarida qoʻllanilishini koʻrsatadi.",
        en: "Note: Illustrates how your core skill stack maps to each phase of the analytical lifecycle.",
        ru: "Примечание: Показывает применение вашего технического стека на каждом этапе аналитического процесса.",
      },
      type: "pipeline-breakdown",
      primarySeriesLabel: {
        uz: "Qamrov darajasi (%)",
        en: "Workflow Share (%)",
        ru: "Доля в процессе (%)",
      },
      data: [
        {
          label: {
            uz: "1. SQL & Database (Maʼlumot olish)",
            en: "1. SQL & Database Extraction",
            ru: "1. SQL и извлечение данных",
          },
          primaryValue: 25,
          unit: "%",
        },
        {
          label: {
            uz: "2. Python: pandas & NumPy (Tozalash)",
            en: "2. Python: pandas & NumPy Cleaning",
            ru: "2. Python: очистка в pandas и NumPy",
          },
          primaryValue: 30,
          unit: "%",
        },
        {
          label: {
            uz: "3. Matplotlib & Seaborn (EDA grafiklar)",
            en: "3. Matplotlib & Seaborn EDA",
            ru: "3. EDA в Matplotlib и Seaborn",
          },
          primaryValue: 20,
          unit: "%",
        },
        {
          label: {
            uz: "4. Power BI & Excel (Biznes Dashboard)",
            en: "4. Power BI & Excel Dashboards",
            ru: "4. Дашборды Power BI и Excel",
          },
          primaryValue: 25,
          unit: "%",
        },
      ],
    },
    githubUrl: "https://github.com/maxmudmv",
    repositoryNote: {
      uz: "GitHub (@maxmudmv) sahifangizga bogʻlangan — yangi loyihalarni `src/data/projects.ts` orqali qoʻshishingiz mumkin.",
      en: "Linked to your GitHub (@maxmudmv) — easily add specific repositories in `src/data/projects.ts`.",
      ru: "Привязано к вашему профилю GitHub (@maxmudmv) — новые репозитории легко добавляются в `src/data/projects.ts`.",
    },
  },
];
