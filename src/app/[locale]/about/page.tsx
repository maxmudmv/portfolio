import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/data/dictionaries";
import { Locale } from "@/data/types";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceEducationSection from "@/components/sections/ExperienceEducationSection";
import GithubCvSection from "@/components/sections/GithubCvSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "uz";
  const dict = getDictionary(validLocale);

  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  };
}

export default async function AboutPage({
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
    <div className="pt-4">
      <AboutSection locale={locale} dict={dict.sections.about} />
      <SkillsSection locale={locale} dict={dict.sections.skills} />
      <ExperienceEducationSection
        locale={locale}
        experienceDict={dict.sections.experience}
        educationDict={dict.sections.education}
        certificatesDict={dict.sections.certificates}
      />
      <GithubCvSection
        locale={locale}
        githubDict={dict.sections.githubSection}
        cvDict={dict.sections.cvSection}
      />
    </div>
  );
}
