export type Locale = "uz" | "en" | "ru";

export type LocalizedString = {
  uz: string;
  en: string;
  ru: string;
};

export type LocalizedStringArray = {
  uz: string[];
  en: string[];
  ru: string[];
};

export interface ProfileData {
  fullName: LocalizedString;
  shortName: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  tagline: LocalizedString;
  bioParagraphs: LocalizedStringArray;
  careerGoal: LocalizedString;
  location: LocalizedString;
  citizenship: LocalizedString;
  workFormat: LocalizedString;
  employmentType: LocalizedString;
  birthDate: string;
  age: number;
  photoUrl: string;
  cvPath: string;
  cvFileName: string;
  cvUpdatedDate: string;
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    telegramHandle: string;
    telegramUrl: string;
    githubUrl: string;
    githubUsername: string;
    linkedinUrl: string;
    leetcodeUrl: string;
  };
  keyHighlights: {
    id: string;
    value: string;
    label: LocalizedString;
    description: LocalizedString;
  }[];
  spokenLanguages: {
    code: string;
    name: LocalizedString;
    level: LocalizedString;
  }[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: "analytics_bi" | "programming_libs" | "databases_automation" | "methods_workflows";
  badge: LocalizedString;
  description: LocalizedString;
  usedIn: LocalizedString;
  toolsOrModules: string[];
}

export interface SkillCategory {
  id: "analytics_bi" | "programming_libs" | "databases_automation" | "methods_workflows";
  title: LocalizedString;
  subtitle: LocalizedString;
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  industry: LocalizedString;
  subIndustries: LocalizedStringArray;
  role: LocalizedString;
  location: LocalizedString;
  period: LocalizedString;
  duration: LocalizedString;
  summary: LocalizedString;
  achievements: LocalizedStringArray;
  technologies: string[];
  relatedProjectSlug?: string;
}

export interface EducationItem {
  id: string;
  type: "degree" | "course";
  institution: LocalizedString;
  facultyOrProgram: LocalizedString;
  degreeLevel: LocalizedString;
  year: string;
  location: LocalizedString;
  description: LocalizedString;
  focusAreas: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: LocalizedString;
  year: string;
  category: LocalizedString;
  description: LocalizedString;
  skillsValidated: string[];
  verificationNote: LocalizedString;
}

export type ProjectCategory =
  | "data-analytics"
  | "business-intelligence"
  | "process-automation"
  | "python-sql";

export interface ChartDataPoint {
  label: LocalizedString;
  beforeValue?: number;
  afterValue?: number;
  primaryValue: number;
  secondaryValue?: number;
  unit: string;
}

export interface ProjectCaseStudy {
  slug: string;
  featured: boolean;
  isTemplatePlaceholder?: boolean;
  category: ProjectCategory;
  categoryLabel: LocalizedString;
  title: LocalizedString;
  organization: LocalizedString;
  period: LocalizedString;
  role: LocalizedString;
  shortSummary: LocalizedString;
  problemStatement: LocalizedString;
  datasetAndSources: LocalizedString;
  dataCleaningAndPrep: LocalizedStringArray;
  exploratoryAnalysis: LocalizedStringArray;
  methodology: LocalizedStringArray;
  toolsAndTech: string[];
  resultsAndImpact: LocalizedStringArray;
  limitationsAndLessons: LocalizedStringArray;
  metrics: {
    label: LocalizedString;
    value: string;
    detail: LocalizedString;
  }[];
  chartConfig: {
    title: LocalizedString;
    subtitle: LocalizedString;
    authenticityNote: LocalizedString;
    type: "comparison-bar" | "pipeline-breakdown" | "bi-coverage";
    primarySeriesLabel: LocalizedString;
    secondarySeriesLabel?: LocalizedString;
    data: ChartDataPoint[];
  };
  githubUrl?: string;
  liveUrl?: string;
  repositoryNote: LocalizedString;
}
