import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/data/dictionaries";
import { Locale } from "@/data/types";
import ProjectsSection from "@/components/sections/ProjectsSection";
import InteractiveVisualizationsSection from "@/components/sections/InteractiveVisualizationsSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "uz";
  const dict = getDictionary(validLocale);

  return {
    title: dict.meta.projectsTitle,
    description: dict.meta.projectsDescription,
  };
}

export default async function ProjectsPage({
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
      <ProjectsSection
        locale={locale}
        dict={dict.sections.projects}
        showAllLink={false}
      />
      <InteractiveVisualizationsSection
        locale={locale}
        dict={dict.sections.visualizations}
      />
    </div>
  );
}
