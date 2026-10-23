import { Locale } from "./types";

export const SUPPORTED_LOCALES: Locale[] = ["uz", "en", "ru"];
export const DEFAULT_LOCALE: Locale = "uz";

export function isValidLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export interface Dictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    keywords: string[];
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    visualizations: string;
    contact: string;
    downloadCv: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
  };
  hero: {
    badge: string;
    availableStatus: string;
    viewProjectsBtn: string;
    downloadCvBtn: string;
    contactBtn: string;
    dashboardBadge: string;
    dashboardTitle: string;
    dashboardSubtitle: string;
    dashboardNote: string;
    interactiveHint: string;
    reducedMotionBadge: string;
    toggle3dLabel: string;
    mode3d: string;
    mode2d: string;
  };
  sections: {
    about: {
      eyebrow: string;
      title: string;
      subtitle: string;
      careerGoalTitle: string;
      quickFactsTitle: string;
      locationLabel: string;
      educationLabel: string;
      workFormatLabel: string;
      employmentTypeLabel: string;
      languagesTitle: string;
      readFullBio: string;
    };
    skills: {
      eyebrow: string;
      title: string;
      subtitle: string;
      authenticityNote: string;
      appliedInLabel: string;
      keyCapabilitiesLabel: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      subtitle: string;
      filterAll: string;
      filterProcessAutomation: string;
      filterBi: string;
      filterPythonSql: string;
      viewCaseStudy: string;
      viewAllProjects: string;
      githubLink: string;
      liveLink: string;
      templateBadge: string;
      organizationLabel: string;
      periodLabel: string;
      roleLabel: string;
      problemTitle: string;
      datasetTitle: string;
      cleaningTitle: string;
      edaTitle: string;
      methodologyTitle: string;
      toolsTitle: string;
      resultsTitle: string;
      lessonsTitle: string;
      backToProjects: string;
      emptyCategory: string;
    };
    experience: {
      eyebrow: string;
      title: string;
      subtitle: string;
      totalDurationBadge: string;
      keyAchievements: string;
      viewRelatedCaseStudy: string;
    };
    education: {
      eyebrow: string;
      title: string;
      subtitle: string;
      degreeBadge: string;
      courseBadge: string;
      focusAreasLabel: string;
    };
    certificates: {
      eyebrow: string;
      title: string;
      subtitle: string;
      verifiedBadge: string;
      skillsValidatedLabel: string;
    };
    visualizations: {
      eyebrow: string;
      title: string;
      subtitle: string;
      disclaimerBadge: string;
      tabDiscoverInvest: string;
      tabAvloniyBi: string;
      tabSkillPipeline: string;
      tableToggleShow: string;
      tableToggleHide: string;
      metricColumn: string;
      primaryColumn: string;
      secondaryColumn: string;
    };
    githubSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      githubCardTitle: string;
      githubCardDesc: string;
      leetcodeCardTitle: string;
      leetcodeCardDesc: string;
      stackCardTitle: string;
      stackCardDesc: string;
      openGithubBtn: string;
      openLeetcodeBtn: string;
    };
    cvSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      downloadPrimaryBtn: string;
      viewInlineBtn: string;
      fileInfoLabel: string;
      updatedLabel: string;
      replaceHintTitle: string;
      replaceHintText: string;
      includedHighlights: string[];
    };
    contact: {
      eyebrow: string;
      title: string;
      subtitle: string;
      directChannelsTitle: string;
      preferredBadge: string;
      phoneLabel: string;
      emailLabel: string;
      telegramLabel: string;
      linkedinLabel: string;
      githubLabel: string;
      formTitle: string;
      formSubtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailInputLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      validationName: string;
      validationEmail: string;
      validationMessage: string;
      successTitle: string;
      successMessage: string;
      unconfiguredTitle: string;
      unconfiguredMessage: string;
      openMailClientBtn: string;
      openTelegramBtn: string;
      errorTitle: string;
    };
  };
  footer: {
    rights: string;
    builtWith: string;
    quickLinks: string;
    directContact: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  uz: {
    meta: {
      siteTitle: "Elmurodov Mahmud | Data Analyst & Data Scientist Portfolio",
      siteDescription:
        "Elmurodov Mahmud Zarifjon oʻgʻli — Data Analyst va Data Scientist shaxsiy portfeli. SQL, MS Excel, Power BI, Python (NumPy, pandas, Matplotlib, Seaborn) hamda biznes jarayonlarini raqamlashtirish boʻyicha amaliy keyslar.",
      projectsTitle: "Loyihalar va Amaliy Keyslar | Elmurodov Mahmud",
      projectsDescription:
        "Discover Invest va A. Avloniy nomidagi milliy institutda bajarilgan real maʼlumotlar tahlili, WebApp + Database avtomatlashtirish hamda Power BI Dashboard loyihalari.",
      aboutTitle: "Men haqimda | Elmurodov Mahmud — Data Analyst",
      aboutDescription:
        "TATU bitiruvchisi, Data Analyst va BI mutaxassisi Elmurodov Mahmudning kasbiy tarjimai holi, maqsadlari va texnik koʻnikmalari.",
      contactTitle: "Bogʻlanish | Elmurodov Mahmud — Data Analyst",
      contactDescription:
        "Ish takliflari, tahliliy loyihalar va hamkorlik uchun Elmurodov Mahmud bilan bogʻlanish: Telefon, Telegram (@maxmudmv), Email, LinkedIn va GitHub.",
      keywords: [
        "Elmurodov Mahmud",
        "Mahmud Elmurodov",
        "Data Analyst Uzbekistan",
        "Data Scientist Tashkent",
        "BI Analyst",
        "Power BI",
        "SQL",
        "Python Data Analysis",
        "Discover Invest",
        "TATU",
      ],
    },
    nav: {
      home: "Asosiy",
      about: "Men haqimda",
      skills: "Koʻnikmalar",
      projects: "Loyihalar",
      experience: "Ish tajribasi",
      education: "Taʼlim",
      visualizations: "Vizual tahlil",
      contact: "Aloqa",
      downloadCv: "CV yuklab olish",
      languageLabel: "Tilni tanlash",
      openMenu: "Menyuni ochish",
      closeMenu: "Menyuni yopish",
      skipToContent: "Asosiy tarkibga oʻtish",
    },
    hero: {
      badge: "DATA ANALYST • BI ANALYST • PRODUCT ANALYST",
      availableStatus: "Toshkent • Toʻliq stavka, masofaviy yoki gibrid ishlashga tayyor",
      viewProjectsBtn: "Loyihalarni koʻrish",
      downloadCvBtn: "Rezyumeni yuklab olish (PDF)",
      contactBtn: "Bogʻlanish",
      dashboardBadge: "JONLI 3D ANALITIK SAHNA",
      dashboardTitle: "Living Data Dashboard",
      dashboardSubtitle: "SQL • Python • Power BI • Excel & WebApp Automation",
      dashboardNote:
        "Eslatma: 3D sahna maʼlumotlar tahlili va BI jarayonlarining badiiy-interaktiv vizualizatsiyasidir. Haqiqiy ish natijalari pastdagi amaliy keyslarda keltirilgan.",
      interactiveHint: "Sichqonchani harakatlantiring yoki tugunlarni tanlang",
      reducedMotionBadge: "2D Analitik rejim",
      toggle3dLabel: "Vizual rejimni almashtirish",
      mode3d: "3D Interaktiv",
      mode2d: "2D Yuqori aniqlik",
    },
    sections: {
      about: {
        eyebrow: "01 / MEN HAQIMDA",
        title: "Maʼlumotlarni tizimlashtirish va aniq biznes yechimlariga aylantirish",
        subtitle:
          "Fundamental muhandislik taʼlimi (TATU) hamda real korporativ jarayonlarni raqamlashtirish tajribasi.",
        careerGoalTitle: "Kasbiy maqsadim",
        quickFactsTitle: "Asosiy maʼlumotlar",
        locationLabel: "Manzil",
        educationLabel: "Oliy taʼlim",
        workFormatLabel: "Ish formati",
        employmentTypeLabel: "Bandlik turi",
        languagesTitle: "Biladigan tillar",
        readFullBio: "Toʻliq maʼlumot va yondashuv",
      },
      skills: {
        eyebrow: "02 / TEXNIK KOʻNIKMALAR",
        title: "Amaliyotda sinalgan tahliliy texnologiyalar steki",
        subtitle:
          "Maʼlumotlarni bazadan yigʻish (SQL, WebApp), tozalash (Python, Excel) va interaktiv boshqaruv panellarida (Power BI) taqdim etish.",
        authenticityNote:
          "Barcha koʻnikmalar sunʼiy foizlar bilan emas, balki real ish joylari va oʻquv dasturlarida bajarilgan amaliy vazifalar orqali koʻrsatilgan.",
        appliedInLabel: "Amaliy qoʻllanilishi:",
        keyCapabilitiesLabel: "Asosiy imkoniyatlar:",
      },
      projects: {
        eyebrow: "03 / LOYIHALAR VA AMALIY KEYSLAR",
        title: "Haqiqiy biznes jarayonlarda bajarilgan tahliliy ishlar",
        subtitle:
          "Discover Invest va A. Avloniy nomidagi milliy institutdagi real raqamlashtirish hamda BI loyihalari.",
        filterAll: "Barchasi",
        filterProcessAutomation: "Avtomatlashtirish & WebApp",
        filterBi: "Power BI & Excel",
        filterPythonSql: "Python & SQL",
        viewCaseStudy: "Keysni batafsil oʻqish",
        viewAllProjects: "Barcha loyihalar sahifasi",
        githubLink: "GitHub profil",
        liveLink: "Tashkilot sayti",
        templateBadge: "GitHub Portfel Yoʻnalishi",
        organizationLabel: "Tashkilot",
        periodLabel: "Davr",
        roleLabel: "Rol",
        problemTitle: "1. Muammo tavsifi (Problem Statement)",
        datasetTitle: "2. Maʼlumotlar manbai va tarkibi",
        cleaningTitle: "3. Maʼlumotlarni tozalash va tizimlashtirish",
        edaTitle: "4. Dastlabki tahlil (Exploratory Analysis)",
        methodologyTitle: "5. Yechim metodologiyasi va bosqichlar",
        toolsTitle: "6. Qoʻllanilgan texnologiyalar",
        resultsTitle: "7. Erishilgan natijalar va samaradorlik",
        lessonsTitle: "8. Xulosalar va amaliy saboqlar",
        backToProjects: "Loyihalar roʻyxatiga qaytish",
        emptyCategory: "Ushbu kategoriyada hozircha loyihalar topilmadi.",
      },
      experience: {
        eyebrow: "04 / ISH TAJRIBASI",
        title: "Real tashkilotlardagi kasbiy faoliyat",
        subtitle: "Qurilish-investitsiya va davlat taʼlim muassasalarida maʼlumotlar bilan ishlash tajribasi.",
        totalDurationBadge: "Umumiy amaliy tajriba: 7 oy",
        keyAchievements: "Bajarilgan asosiy vazifalar va natijalar:",
        viewRelatedCaseStudy: "Tegishli amaliy keysni koʻrish",
      },
      education: {
        eyebrow: "05 / TAʼLIM VA MALAKA OSHIRISH",
        title: "Oliy muhandislik taʼlimi va ixtisoslashgan Data Analysis kursi",
        subtitle: "Nazariy baza va zamonaviy maʼlumotlar tahlili amaliyoti uygʻunligi.",
        degreeBadge: "Oliy taʼlim (Bakalavr)",
        courseBadge: "Kasbiy kurs",
        focusAreasLabel: "Oʻzlashtirilgan yoʻnalishlar:",
      },
      certificates: {
        eyebrow: "06 / SERTIFIKATLAR VA YUTUQLAR",
        title: "Tasdiqlangan elektron sertifikatlar",
        subtitle: "Power BI vizualizatsiyasi va sunʼiy intellekt yoʻnalishidagi rasmiy sertifikatlar.",
        verifiedBadge: "Tasdiqlangan",
        skillsValidatedLabel: "Tasdiqlangan koʻnikmalar:",
      },
      visualizations: {
        eyebrow: "07 / INTERAKTIV MAʼLUMOTLAR VIZUALIZATSIYASI",
        title: "Amaliy keyslar va tahliliy jarayonlar diagrammalari",
        subtitle:
          "Har bir loyihadagi jarayonlar samaradorligi va tahliliy ish hajmining interaktiv taqqoslovi.",
        disclaimerBadge: "Haqiqiy rezyume koʻrsatkichlariga asoslangan vizual tahlil",
        tabDiscoverInvest: "Discover Invest: Raqamlashtirish samarasi",
        tabAvloniyBi: "A. Avloniy: BI va maʼlumotlar qamrovi",
        tabSkillPipeline: "Tahliliy zanjir: SQL • Python • BI",
        tableToggleShow: "Jadval koʻrinishida oʻqish (Accessibility)",
        tableToggleHide: "Jadvalni yashirish",
        metricColumn: "Bosqich / Yoʻnalish",
        primaryColumn: "Asosiy koʻrsatkich",
        secondaryColumn: "Raqamlashtirilgandan soʻng",
      },
      githubSection: {
        eyebrow: "08 / GITHUB VA TEXNIK PROFILLAR",
        title: "Kod repozitoriylari va algoritmik amaliyot",
        subtitle:
          "Python, SQL va algoritmik masalalar boʻyicha ochiq profillarim bilan tanishing.",
        githubCardTitle: "GitHub — @maxmudmv",
        githubCardDesc:
          "Python (NumPy, pandas, Matplotlib, Seaborn), SQL skriptlar va avtomatlashtirish loyihalari repozitoriysi.",
        leetcodeCardTitle: "LeetCode — @maxmudmv",
        leetcodeCardDesc:
          "Maʼlumotlar tuzilmalari, algoritmik fikrlash va SQL masalalarini yechish boʻyicha doimiy mashgʻulotlar.",
        stackCardTitle: "Asosiy tahliliy muhit",
        stackCardDesc:
          "SQL • MS Excel • Google Sheets • Power BI • Python (NumPy, pandas, Matplotlib, Seaborn).",
        openGithubBtn: "GitHub profilga oʻtish",
        openLeetcodeBtn: "LeetCode profilga oʻtish",
      },
      cvSection: {
        eyebrow: "09 / REZYUMENI YUKLAB OLISH (CV)",
        title: "Rasmiy PDF Rezyume",
        subtitle:
          "Ish beruvchilar va HR mutaxassislari uchun barcha tajriba, taʼlim va aloqa maʼlumotlarini oʻz ichiga olgan toʻliq PDF rezyume.",
        downloadPrimaryBtn: "PDF Rezyumeni yuklab olish",
        viewInlineBtn: "Yangi oynada ochish",
        fileInfoLabel: "Format: PDF • 2 sahifa (UZ / EN / RU maʼlumotlar bilan)",
        updatedLabel: "Yangilangan sana: 23-oktyabr, 2026",
        replaceHintTitle: "Faylni yangilash boʻyicha eslatma",
        replaceHintText:
          "Rezyume fayli `public/cv/Elmurodov_Mahmud_CV.pdf` manzilida joylashgan. Uni istalgan vaqtda yangi PDF fayl bilan almashtirishingiz mumkin.",
        includedHighlights: [
          "Toʻliq aloqa maʼlumotlari (+998 90 009-14-47, Telegram @maxmudmv, Email)",
          "Discover Invest va A. Avloniy institutidagi mehnat faoliyati tafsilotlari",
          "TATU bakalavr diplomi (2026) va Najot Taʼlim Data Analysis kursi (2025)",
          "Power BI (2025) va Five Million AI Leaders (2026) sertifikatlari",
        ],
      },
      contact: {
        eyebrow: "10 / ALOQA VA BOGʻLANISH",
        title: "Hamkorlik va ish takliflari uchun bogʻlaning",
        subtitle:
          "Data Analyst, BI Analyst yoki Product Analyst lavozimlari hamda tahliliy loyihalar boʻyicha muloqotga doim ochiqman.",
        directChannelsTitle: "Tezkor aloqa kanallari",
        preferredBadge: "Eng tezkor aloqa usuli",
        phoneLabel: "Telefon raqam",
        emailLabel: "Elektron pochta",
        telegramLabel: "Telegram",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        formTitle: "Xabar yuborish",
        formSubtitle:
          "Quyidagi formani toʻldiring — xabaringiz tekshirilib, elektron pochta orqali yetkaziladi.",
        nameLabel: "Ism-sharifingiz",
        namePlaceholder: "Masalan: Sardor Rahimov",
        emailInputLabel: "Email manzilingiz",
        emailPlaceholder: "sardor@company.uz",
        companyLabel: "Kompaniya yoki mavzu (ixtiyoriy)",
        companyPlaceholder: "Kompaniya nomi yoki ish taklifi",
        messageLabel: "Xabar matni",
        messagePlaceholder: "Vakansiya yoki loyiha haqida qisqacha yozing...",
        submitBtn: "Xabarni yuborish",
        submittingBtn: "Yuborilmoqda...",
        validationName: "Iltimos, ismingizni kiriting (kamida 2 ta belgi).",
        validationEmail: "Iltimos, toʻgʻri email manzilini kiriting.",
        validationMessage: "Iltimos, xabar matnini kiriting (kamida 10 ta belgi).",
        successTitle: "Xabaringiz muvaffaqiyatli yuborildi!",
        successMessage:
          "Murojaatingiz uchun rahmat. Tez orada koʻrsatilgan email manzilingizga javob beraman.",
        unconfiguredTitle: "Avtomatik pochta xizmati (.env) hali ulanmagan",
        unconfiguredMessage:
          "Sayt soxta yuborish holatini koʻrsatmaydi: serverda RESEND_API_KEY hali sozlanmagan. Ammo yozgan xabaringiz tayyor — uni quyidagi tugma orqali bir zumda Email yoki Telegram (@maxmudmv) orqali yuborishingiz mumkin:",
        openMailClientBtn: "Tayyor xabarni Email orqali yuborish",
        openTelegramBtn: "Telegram (@maxmudmv) orqali yozish",
        errorTitle: "Xatolik yuz berdi",
      },
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      builtWith: "Next.js, TypeScript, Three.js va Tailwind CSS asosida yaratilgan.",
      quickLinks: "Sahifalar",
      directContact: "Toʻgʻridan-toʻgʻri aloqa",
    },
  },
  en: {
    meta: {
      siteTitle: "Mahmud Elmurodov | Data Analyst & Data Scientist Portfolio",
      siteDescription:
        "Official portfolio of Mahmud Elmurodov (Elmurodov Mahmud Zarifjon Ogli) — Data Analyst & Data Scientist specializing in SQL, MS Excel, Power BI, Python (NumPy, pandas, Matplotlib, Seaborn), and workflow digitization.",
      projectsTitle: "Projects & Case Studies | Mahmud Elmurodov",
      projectsDescription:
        "Real-world Data Analytics, WebApp + Database workflow digitization, and Power BI dashboard case studies delivered at Discover Invest and the A. Avloniy National Research Institute.",
      aboutTitle: "About Me | Mahmud Elmurodov — Data Analyst",
      aboutDescription:
        "Biography, engineering background at TUIT, analytical methodology, and career goals of Data Analyst Mahmud Elmurodov.",
      contactTitle: "Contact | Mahmud Elmurodov — Data Analyst",
      contactDescription:
        "Get in touch with Mahmud Elmurodov for Data Analyst, BI Analyst, and Product Analyst roles in Tashkent or remote.",
      keywords: [
        "Mahmud Elmurodov",
        "Elmurodov Mahmud",
        "Data Analyst Tashkent",
        "BI Analyst Uzbekistan",
        "Power BI Developer",
        "Python Data Analyst",
        "SQL Analyst",
      ],
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      visualizations: "Visualizations",
      contact: "Contact",
      downloadCv: "Download CV",
      languageLabel: "Select language",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      skipToContent: "Skip to main content",
    },
    hero: {
      badge: "DATA ANALYST • BI ANALYST • PRODUCT ANALYST",
      availableStatus: "Tashkent, Uzbekistan • Open to Full-Time, Remote & Hybrid Roles",
      viewProjectsBtn: "View Case Studies",
      downloadCvBtn: "Download CV (PDF)",
      contactBtn: "Contact Me",
      dashboardBadge: "INTERACTIVE 3D ANALYTICAL SCENE",
      dashboardTitle: "Living Data Dashboard",
      dashboardSubtitle: "SQL • Python • Power BI • Excel & WebApp Automation",
      dashboardNote:
        "Note: This 3D composition is an interactive visual representation of data analytics and BI workflows. Verified workplace case studies are detailed below.",
      interactiveHint: "Move cursor or click nodes to inspect layers",
      reducedMotionBadge: "2D Precision Mode",
      toggle3dLabel: "Toggle visual rendering mode",
      mode3d: "3D Interactive",
      mode2d: "2D High-Contrast",
    },
    sections: {
      about: {
        eyebrow: "01 / ABOUT ME",
        title: "Turning Raw Organizational Data into Reliable Business Decisions",
        subtitle:
          "Combining a Computer Engineering degree from TUIT with hands-on process digitization and executive BI reporting.",
        careerGoalTitle: "Career Objective",
        quickFactsTitle: "Quick Profile Facts",
        locationLabel: "Location",
        educationLabel: "Education",
        workFormatLabel: "Work Format",
        employmentTypeLabel: "Employment Type",
        languagesTitle: "Languages",
        readFullBio: "Read Full Biography",
      },
      skills: {
        eyebrow: "02 / TECHNICAL SKILLS",
        title: "Production-Tested Analytical & Data Stack",
        subtitle:
          "End-to-end capabilities spanning SQL database querying, Python data wrangling, Excel automation, and interactive Power BI dashboards.",
        authenticityNote:
          "Skills are documented with concrete tools and real workplace context rather than arbitrary percentage bars.",
        appliedInLabel: "Applied in:",
        keyCapabilitiesLabel: "Core Capabilities:",
      },
      projects: {
        eyebrow: "03 / PROJECTS & CASE STUDIES",
        title: "Verified Workplace Analytics & Digitization Case Studies",
        subtitle:
          "Real operational transformations delivered at Discover Invest and the A. Avloniy National Research Institute.",
        filterAll: "All Work",
        filterProcessAutomation: "Automation & WebApp",
        filterBi: "Power BI & Excel",
        filterPythonSql: "Python & SQL",
        viewCaseStudy: "Read Full Case Study",
        viewAllProjects: "Explore All Case Studies",
        githubLink: "GitHub Profile",
        liveLink: "Organization Website",
        templateBadge: "GitHub Portfolio Track",
        organizationLabel: "Organization",
        periodLabel: "Period",
        roleLabel: "Role",
        problemTitle: "1. Problem Statement",
        datasetTitle: "2. Dataset & Data Sources",
        cleaningTitle: "3. Data Cleaning & Preprocessing",
        edaTitle: "4. Exploratory Analysis",
        methodologyTitle: "5. Methodology & Implementation",
        toolsTitle: "6. Tools & Technologies",
        resultsTitle: "7. Results & Business Impact",
        lessonsTitle: "8. Key Takeaways & Lessons Learned",
        backToProjects: "Back to All Projects",
        emptyCategory: "No projects found in this category.",
      },
      experience: {
        eyebrow: "04 / WORK EXPERIENCE",
        title: "Professional Industry Experience",
        subtitle: "Delivering data automation, reporting optimization, and BI visibility across enterprise and government organizations.",
        totalDurationBadge: "Verified Experience: 7 Months",
        keyAchievements: "Key Responsibilities & Outcomes:",
        viewRelatedCaseStudy: "View Detailed Case Study",
      },
      education: {
        eyebrow: "05 / EDUCATION & TRAINING",
        title: "Academic Foundation & Specialized Data Analytics Training",
        subtitle: "Computer Engineering degree paired with intensive Data Analysis & Visualization specialization.",
        degreeBadge: "Bachelor's Degree",
        courseBadge: "Professional Course",
        focusAreasLabel: "Core Focus Areas:",
      },
      certificates: {
        eyebrow: "06 / CERTIFICATES & ACHIEVEMENTS",
        title: "Verified Electronic Certificates",
        subtitle: "Recognized credentials in Microsoft Power BI visualization and Artificial Intelligence literacy.",
        verifiedBadge: "Verified on CV",
        skillsValidatedLabel: "Validated Competencies:",
      },
      visualizations: {
        eyebrow: "07 / INTERACTIVE DATA VISUALIZATIONS",
        title: "Interactive Process & Analytical Breakdown",
        subtitle:
          "Explore documented operational improvements and analytical workflow distributions across real case studies.",
        disclaimerBadge: "Authentic workflow visualizations grounded in documented CV outcomes",
        tabDiscoverInvest: "Discover Invest: Digitization Impact",
        tabAvloniyBi: "A. Avloniy: BI & Data Scope",
        tabSkillPipeline: "Analytical Pipeline: SQL • Python • BI",
        tableToggleShow: "Show Accessible Data Table",
        tableToggleHide: "Hide Accessible Data Table",
        metricColumn: "Stage / Dimension",
        primaryColumn: "Primary Metric",
        secondaryColumn: "Post-Digitization Metric",
      },
      githubSection: {
        eyebrow: "08 / GITHUB & TECHNICAL WORK",
        title: "Code Repositories & Algorithmic Problem Solving",
        subtitle:
          "Explore my public profiles across GitHub and LeetCode for Python, SQL, and algorithmic work.",
        githubCardTitle: "GitHub — @maxmudmv",
        githubCardDesc:
          "Repositories for Python data analysis (NumPy, pandas, Matplotlib, Seaborn), SQL scripts, and automation tools.",
        leetcodeCardTitle: "LeetCode — @maxmudmv",
        leetcodeCardDesc:
          "Continuous practice in data structures, algorithmic thinking, and relational SQL problem solving.",
        stackCardTitle: "Core Analytical Environment",
        stackCardDesc:
          "SQL • MS Excel • Google Sheets • Power BI • Python (NumPy, pandas, Matplotlib, Seaborn).",
        openGithubBtn: "Visit GitHub Profile",
        openLeetcodeBtn: "Visit LeetCode Profile",
      },
      cvSection: {
        eyebrow: "09 / DOWNLOADABLE CV",
        title: "Official Curriculum Vitae (PDF)",
        subtitle:
          "Download the complete, recruiter-ready PDF resume containing verified work history, education, skills, and contact details.",
        downloadPrimaryBtn: "Download CV (PDF)",
        viewInlineBtn: "Open PDF in Browser",
        fileInfoLabel: "Format: PDF • 2 Pages (Complete Verified Profile)",
        updatedLabel: "Last Updated: October 23, 2026",
        replaceHintTitle: "Easy CV Replacement",
        replaceHintText:
          "Stored at `public/cv/Elmurodov_Mahmud_CV.pdf`. Replace this file anytime to update the download across the entire site.",
        includedHighlights: [
          "Direct contact channels (+998 90 009-14-47, Telegram @maxmudmv, Email)",
          "Work experience at Discover Invest and A. Avloniy National Institute",
          "B.Sc. in Computer Engineering at TUIT (2026) & Najot Ta'lim Data Analysis (2025)",
          "Certificates in Power BI (2025) and Five Million AI Leaders (2026)",
        ],
      },
      contact: {
        eyebrow: "10 / CONTACT & SOCIAL LINKS",
        title: "Let's Discuss Data Roles & Analytical Projects",
        subtitle:
          "Available for full-time, part-time, and project-based Data Analyst, BI Analyst, and Product Analyst opportunities.",
        directChannelsTitle: "Verified Direct Channels",
        preferredBadge: "Preferred Communication Channel",
        phoneLabel: "Phone",
        emailLabel: "Email",
        telegramLabel: "Telegram",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        formTitle: "Send a Direct Message",
        formSubtitle:
          "Fill out the form below. Input is validated on both client and server.",
        nameLabel: "Your Name",
        namePlaceholder: "e.g., Alex Morgan",
        emailInputLabel: "Your Email",
        emailPlaceholder: "alex@company.com",
        companyLabel: "Company / Role (Optional)",
        companyPlaceholder: "Company name or position",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about the role, team, or analytical challenge...",
        submitBtn: "Send Message",
        submittingBtn: "Sending...",
        validationName: "Please enter your name (at least 2 characters).",
        validationEmail: "Please enter a valid email address.",
        validationMessage: "Please enter a message (at least 10 characters).",
        successTitle: "Message Sent Successfully!",
        successMessage:
          "Thank you for reaching out. I will reply to your email address shortly.",
        unconfiguredTitle: "Automated Email Service (.env) Not Yet Configured",
        unconfiguredMessage:
          "To maintain strict honesty, this form does not fake delivery when RESEND_API_KEY is not set on the server. Your drafted message is ready below — send it with one click via your email client or Telegram (@maxmudmv):",
        openMailClientBtn: "Send Drafted Message via Email App",
        openTelegramBtn: "Message on Telegram (@maxmudmv)",
        errorTitle: "Submission Error",
      },
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Engineered with Next.js, TypeScript, Three.js & Tailwind CSS.",
      quickLinks: "Navigation",
      directContact: "Direct Contact",
    },
  },
  ru: {
    meta: {
      siteTitle: "Элмуродов Махмуд | Портфолио Data Analyst & Data Scientist",
      siteDescription:
        "Официальное портфолио Элмуродова Махмуда Зарифжон угли — Data Analyst и BI Analyst. SQL, MS Excel, Power BI, Python (NumPy, pandas, Matplotlib, Seaborn) и реальные кейсы автоматизации данных.",
      projectsTitle: "Проекты и Кейсы | Элмуродов Махмуд",
      projectsDescription:
        "Практические кейсы по анализу данных, цифровизации табельного учета (WebApp + БД) в Discover Invest и разработке дашбордов Power BI в Институте им. А. Авлони.",
      aboutTitle: "Обо мне | Элмуродов Махмуд — Аналитик данных",
      aboutDescription:
        "Профессиональная биография, образование в ТУИТ, навыки и карьерные цели аналитика данных Элмуродова Махмуда.",
      contactTitle: "Контакты | Элмуродов Махмуд — Аналитик данных",
      contactDescription:
        "Свяжитесь с Элмуродовым Махмудом по вопросам трудоустройства (Data Analyst, BI Analyst, Product Analyst) и сотрудничества.",
      keywords: [
        "Элмуродов Махмуд",
        "Махмуд Элмуродов",
        "Аналитик данных Ташкент",
        "Data Analyst Узбекистан",
        "BI аналитик",
        "Power BI",
        "SQL",
        "Python аналитик",
      ],
    },
    nav: {
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      experience: "Опыт работы",
      education: "Образование",
      visualizations: "Визуализация",
      contact: "Контакты",
      downloadCv: "Скачать CV",
      languageLabel: "Выбор языка",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      skipToContent: "Перейти к основному содержанию",
    },
    hero: {
      badge: "DATA ANALYST • BI ANALYST • PRODUCT ANALYST",
      availableStatus: "Ташкент • Готов к полной занятости, удаленной работе или гибриду",
      viewProjectsBtn: "Смотреть проекты",
      downloadCvBtn: "Скачать резюме (PDF)",
      contactBtn: "Связаться",
      dashboardBadge: "ИНТЕРАКТИВНАЯ 3D-СЦЕНА АНАЛИТИКИ",
      dashboardTitle: "Living Data Dashboard",
      dashboardSubtitle: "SQL • Python • Power BI • Excel и автоматизация WebApp",
      dashboardNote:
        "Примечание: 3D-сцена является интерактивной визуализацией сферы аналитики данных. Реальные производственные результаты представлены ниже в кейсах.",
      interactiveHint: "Наведите курсор или выберите узлы данных",
      reducedMotionBadge: "2D-режим высокой четкости",
      toggle3dLabel: "Переключить режим визуализации",
      mode3d: "3D Интерактив",
      mode2d: "2D Четкий режим",
    },
    sections: {
      about: {
        eyebrow: "01 / ОБО МНЕ",
        title: "Систематизация данных и создание понятных аналитических решений",
        subtitle:
          "Сочетание инженерного образования (ТУИТ) с реальным опытом цифровизации процессов и BI-аналитики.",
        careerGoalTitle: "Карьерная цель",
        quickFactsTitle: "Ключевая информация",
        locationLabel: "Локация",
        educationLabel: "Образование",
        workFormatLabel: "Формат работы",
        employmentTypeLabel: "Тип занятости",
        languagesTitle: "Владение языками",
        readFullBio: "Подробнее обо мне",
      },
      skills: {
        eyebrow: "02 / ТЕХНИЧЕСКИЕ НАВЫКИ",
        title: "Прикладной стек технологий анализа данных",
        subtitle:
          "Полный цикл работы с данными: от SQL-запросов и WebApp-сбора до очистки в Python/Excel и дашбордов в Power BI.",
        authenticityNote:
          "Навыки представлены без вымышленных процентов — с указанием реальных инструментов и мест практического применения.",
        appliedInLabel: "Практическое применение:",
        keyCapabilitiesLabel: "Ключевые возможности:",
      },
      projects: {
        eyebrow: "03 / ПРОЕКТЫ И ПРАКТИЧЕСКИЕ КЕЙСЫ",
        title: "Реальные кейсы цифровизации и аналитики данных",
        subtitle:
          "Проекты, реализованные в компании Discover Invest и Национальном институте им. А. Авлони.",
        filterAll: "Все проекты",
        filterProcessAutomation: "Автоматизация и WebApp",
        filterBi: "Power BI и Excel",
        filterPythonSql: "Python и SQL",
        viewCaseStudy: "Читать разбор кейса",
        viewAllProjects: "Все проекты и кейсы",
        githubLink: "Профиль GitHub",
        liveLink: "Сайт организации",
        templateBadge: "Направление GitHub-портфеля",
        organizationLabel: "Организация",
        periodLabel: "Период",
        roleLabel: "Роль",
        problemTitle: "1. Постановка проблемы",
        datasetTitle: "2. Источники и структура данных",
        cleaningTitle: "3. Очистка и систематизация данных",
        edaTitle: "4. Разведочный анализ (EDA)",
        methodologyTitle: "5. Методология и этапы реализации",
        toolsTitle: "6. Использованные технологии",
        resultsTitle: "7. Результаты и бизнес-эффект",
        lessonsTitle: "8. Выводы и практические уроки",
        backToProjects: "Назад ко всем проектам",
        emptyCategory: "В данной категории проекты не найдены.",
      },
      experience: {
        eyebrow: "04 / ОПЫТ РАБОТЫ",
        title: "Профессиональный опыт в организациях",
        subtitle: "Практика автоматизации учета, оптимизации отчетов и разработки BI-дашбордов.",
        totalDurationBadge: "Подтвержденный опыт: 7 месяцев",
        keyAchievements: "Ключевые задачи и достижения:",
        viewRelatedCaseStudy: "Открыть подробный кейс",
      },
      education: {
        eyebrow: "05 / ОБРАЗОВАНИЕ И КУРСЫ",
        title: "Высшее инженерное образование и профильная подготовка Data Analysis",
        subtitle: "Фундаментальная база ТУИТ и интенсивная практика анализа данных в Najot Ta'lim.",
        degreeBadge: "Бакалавр (Высшее)",
        courseBadge: "Профильный курс",
        focusAreasLabel: "Ключевые дисциплины:",
      },
      certificates: {
        eyebrow: "06 / СЕРТИФИКАТЫ И ДОСТИЖЕНИЯ",
        title: "Подтвержденные электронные сертификаты",
        subtitle: "Сертификаты в области подготовки и визуализации данных в Power BI и технологий ИИ.",
        verifiedBadge: "Подтверждено в резюме",
        skillsValidatedLabel: "Подтвержденные навыки:",
      },
      visualizations: {
        eyebrow: "07 / ИНТЕРАКТИВНАЯ ВИЗУАЛИЗАЦИЯ ДАННЫХ",
        title: "Аналитические графики и показатели процессов",
        subtitle:
          "Интерактивное сравнение эффективности процессов до и после цифровизации на основе реальных кейсов.",
        disclaimerBadge: "Визуализация на основе документально подтвержденных результатов резюме",
        tabDiscoverInvest: "Discover Invest: Эффект цифровизации",
        tabAvloniyBi: "Институт им. А. Авлони: Охват BI",
        tabSkillPipeline: "Аналитический цикл: SQL • Python • BI",
        tableToggleShow: "Показать таблицу данных (Доступность)",
        tableToggleHide: "Скрыть таблицу данных",
        metricColumn: "Этап / Направление",
        primaryColumn: "Базовый показатель",
        secondaryColumn: "После цифровизации",
      },
      githubSection: {
        eyebrow: "08 / GITHUB И ТЕХНИЧЕСКИЕ ПРОФИЛИ",
        title: "Репозитории кода и алгоритмическая практика",
        subtitle:
          "Ознакомьтесь с моими профилями на GitHub и LeetCode по Python, SQL и алгоритмам.",
        githubCardTitle: "GitHub — @maxmudmv",
        githubCardDesc:
          "Репозитории с проектами анализа данных на Python (NumPy, pandas, Matplotlib, Seaborn) и SQL.",
        leetcodeCardTitle: "LeetCode — @maxmudmv",
        leetcodeCardDesc:
          "Регулярное решение алгоритмических задач, структур данных и SQL-запросов.",
        stackCardTitle: "Основной аналитический стек",
        stackCardDesc:
          "SQL • MS Excel • Google Sheets • Power BI • Python (NumPy, pandas, Matplotlib, Seaborn).",
        openGithubBtn: "Открыть профиль GitHub",
        openLeetcodeBtn: "Открыть профиль LeetCode",
      },
      cvSection: {
        eyebrow: "09 / СКАЧАТЬ РЕЗЮМЕ (CV)",
        title: "Официальное PDF-резюме",
        subtitle:
          "Полная версия резюме в формате PDF для работодателей и HR-специалистов с опытом работы, образованием и контактами.",
        downloadPrimaryBtn: "Скачать PDF-резюме",
        viewInlineBtn: "Открыть PDF в браузере",
        fileInfoLabel: "Формат: PDF • 2 страницы (Полное проверенное резюме)",
        updatedLabel: "Обновлено: 23 октября 2026",
        replaceHintTitle: "Быстрое обновление файла",
        replaceHintText:
          "Файл хранится по пути `public/cv/Elmurodov_Mahmud_CV.pdf`. Вы можете заменить его новым PDF-файлом в любой момент.",
        includedHighlights: [
          "Прямые контакты (+998 90 009-14-47, Telegram @maxmudmv, Email)",
          "Подробный опыт работы в Discover Invest и Институте им. А. Авлони",
          "Диплом бакалавра ТУИТ (2026) и курс Data Analysis в Najot Ta'lim (2025)",
          "Сертификаты Power BI (2025) и Five Million AI Leaders (2026)",
        ],
      },
      contact: {
        eyebrow: "10 / КОНТАКТЫ И СОЦИАЛЬНЫЕ СЕТИ",
        title: "Свяжитесь со мной по вопросам работы и проектов",
        subtitle:
          "Открыт к предложениям на позиции Data Analyst, BI Analyst и Product Analyst (полная занятость, гибрид или удаленно).",
        directChannelsTitle: "Прямые каналы связи",
        preferredBadge: "Предпочтительный способ связи",
        phoneLabel: "Телефон",
        emailLabel: "Электронная почта",
        telegramLabel: "Telegram",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        formTitle: "Отправить сообщение",
        formSubtitle:
          "Заполните форму ниже — данные проходят валидацию на клиенте и сервере.",
        nameLabel: "Ваше имя",
        namePlaceholder: "Например: Тимур Каримов",
        emailInputLabel: "Ваш Email",
        emailPlaceholder: "timur@company.uz",
        companyLabel: "Компания / Вакансия (необязательно)",
        companyPlaceholder: "Название компании или тема",
        messageLabel: "Сообщение",
        messagePlaceholder: "Опишите вакансию или аналитическую задачу...",
        submitBtn: "Отправить сообщение",
        submittingBtn: "Отправка...",
        validationName: "Пожалуйста, введите ваше имя (минимум 2 символа).",
        validationEmail: "Пожалуйста, введите корректный адрес электронной почты.",
        validationMessage: "Пожалуйста, введите текст сообщения (минимум 10 символов).",
        successTitle: "Сообщение успешно отправлено!",
        successMessage:
          "Спасибо за обращение! Я отвечу на указанный вами Email в ближайшее время.",
        unconfiguredTitle: "Почтовый сервис (.env) еще не подключен",
        unconfiguredMessage:
          "Форма не имитирует ложную отправку, так как ключ RESEND_API_KEY еще не задан на сервере. Ваше сообщение сохранено — отправьте его в один клик через почтовый клиент или в Telegram (@maxmudmv):",
        openMailClientBtn: "Отправить через почтовую программу",
        openTelegramBtn: "Написать в Telegram (@maxmudmv)",
        errorTitle: "Ошибка отправки",
      },
    },
    footer: {
      rights: "Все права защищены.",
      builtWith: "Разработано на Next.js, TypeScript, Three.js и Tailwind CSS.",
      quickLinks: "Навигация",
      directContact: "Прямая связь",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
