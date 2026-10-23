import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/data/dictionaries";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceEducationSection from "@/components/sections/ExperienceEducationSection";
import InteractiveVisualizationsSection from "@/components/sections/InteractiveVisualizationsSection";
import GithubCvSection from "@/components/sections/GithubCvSection";
import ContactSection from "@/components/sections/ContactSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      {/* Split-Screen Hero + Signature 3D Living Data Dashboard */}
      <HeroSection locale={locale} dict={dict.hero} />

      {/* 01. About Me */}
      <AboutSection locale={locale} dict={dict.sections.about} />

      {/* 02. Technical Skills */}
      <SkillsSection locale={locale} dict={dict.sections.skills} />

      {/* 03. Projects & Case Studies */}
      <ProjectsSection locale={locale} dict={dict.sections.projects} />

      {/* 04. Work Experience, 05. Education, 06. Certificates & Achievements */}
      <ExperienceEducationSection
        locale={locale}
        experienceDict={dict.sections.experience}
        educationDict={dict.sections.education}
        certificatesDict={dict.sections.certificates}
      />

      {/* 07. Interactive Data Visualizations */}
      <InteractiveVisualizationsSection
        locale={locale}
        dict={dict.sections.visualizations}
      />

      {/* 08. GitHub & Technical Work + 09/10. Downloadable CV */}
      <GithubCvSection
        locale={locale}
        githubDict={dict.sections.githubSection}
        cvDict={dict.sections.cvSection}
      />

      {/* 10. Contact & Social Links + Working Contact Form */}
      <ContactSection locale={locale} dict={dict.sections.contact} />
    </>
  );
}
