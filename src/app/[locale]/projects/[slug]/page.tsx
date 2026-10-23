import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  Calendar,
  UserCheck,
  CheckCircle2,
  Github,
  ExternalLink,
  Layers,
  Database,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import {
  SUPPORTED_LOCALES,
  isValidLocale,
  getDictionary,
} from "@/data/dictionaries";
import { Locale } from "@/data/types";
import { projectsData } from "@/data/projects";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const proj of projectsData) {
      params.push({ locale, slug: proj.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "uz";
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title[validLocale],
    description: project.shortSummary[validLocale],
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  const dict = getDictionary(locale).sections.projects;
  const chart = project.chartConfig;

  return (
    <article className="py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-obsidian-900 px-4 py-2 text-xs font-semibold text-gold-300 transition hover:border-gold-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{dict.backToProjects}</span>
        </Link>

        {/* Case Study Header */}
        <header className="mt-8 border-b border-gold-400/20 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gold-400/40 bg-gold-400/10 px-3.5 py-1 font-mono text-xs font-semibold text-gold-300">
              {project.categoryLabel[locale]}
            </span>
            {project.isTemplatePlaceholder && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-300">
                <Sparkles className="h-3.5 w-3.5" />
                {dict.templateBadge}
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title[locale]}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {project.shortSummary[locale]}
          </p>

          {/* Metadata Strip */}
          <div className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-obsidian-900/80 p-5 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <div>
                <p className="font-mono text-xs text-slate-400">
                  {dict.organizationLabel}
                </p>
                <p className="mt-0.5 text-sm font-bold text-white">
                  {project.organization[locale]}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <div>
                <p className="font-mono text-xs text-slate-400">
                  {dict.periodLabel}
                </p>
                <p className="mt-0.5 text-sm font-bold text-white">
                  {project.period[locale]}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <UserCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <div>
                <p className="font-mono text-xs text-slate-400">
                  {dict.roleLabel}
                </p>
                <p className="mt-0.5 text-sm font-bold text-white">
                  {project.role[locale]}
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5"
              >
                <p className="font-display text-2xl font-extrabold text-gold-300">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {metric.label[locale]}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {metric.detail[locale]}
                </p>
              </div>
            ))}
          </div>
        </header>

        {/* Case Study Body Sections */}
        <div className="mt-10 space-y-10">
          {/* 1. Problem Statement & 2. Dataset */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="glass-panel rounded-2xl p-6">
              <h2 className="font-display text-lg font-bold text-gold-300">
                {dict.problemTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                {project.problemStatement[locale]}
              </p>
            </section>

            <section className="glass-panel rounded-2xl p-6">
              <h2 className="font-display text-lg font-bold text-gold-300">
                {dict.datasetTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                {project.datasetAndSources[locale]}
              </p>
            </section>
          </div>

          {/* 3. Data Cleaning & Preprocessing */}
          <section className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5">
              <Database className="h-5 w-5 text-amber-400" />
              <h2 className="font-display text-xl font-bold text-white">
                {dict.cleaningTitle}
              </h2>
            </div>
            <ul className="mt-4 space-y-3">
              {project.dataCleaningAndPrep[locale].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-200 sm:text-base"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Exploratory Analysis & 5. Methodology */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="glass-panel rounded-2xl p-6">
              <h2 className="font-display text-lg font-bold text-white">
                {dict.edaTitle}
              </h2>
              <ul className="mt-4 space-y-3">
                {project.exploratoryAnalysis[locale].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-panel rounded-2xl p-6">
              <h2 className="font-display text-lg font-bold text-white">
                {dict.methodologyTitle}
              </h2>
              <ul className="mt-4 space-y-3">
                {project.methodology[locale].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200"
                  >
                    <Layers className="mt-1 h-4 w-4 shrink-0 text-gold-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Interactive Case Study Chart */}
          <section className="glass-panel rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-white">
              {chart.title[locale]}
            </h2>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              {chart.subtitle[locale]}
            </p>

            <div className="mt-6 space-y-4">
              {chart.data.map((pt, idx) => {
                const hasSecondary = typeof pt.secondaryValue === "number";
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/5 bg-obsidian-950/70 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                      <span className="font-semibold text-white">
                        {pt.label[locale]}
                      </span>
                      <span className="font-mono text-xs text-gold-300">
                        {hasSecondary
                          ? `${pt.primaryValue} → ${pt.secondaryValue} (${pt.unit})`
                          : `${pt.primaryValue}${pt.unit}`}
                      </span>
                    </div>
                    <div className="mt-2.5 h-3 w-full overflow-hidden rounded-full bg-obsidian-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-400 to-amber-500"
                        style={{
                          width: `${
                            hasSecondary
                              ? Math.min(pt.secondaryValue ?? 0, 100)
                              : Math.min(pt.primaryValue * 2.5, 100)
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-xs text-slate-400">
              {chart.authenticityNote[locale]}
            </p>
          </section>

          {/* 6. Tools & 7. Results */}
          <section className="glass-panel rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-gold-300">
              {dict.resultsTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {project.resultsAndImpact[locale].map((res, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-200 sm:text-base"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase">
                {dict.toolsTitle}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.toolsAndTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-gold-400/30 bg-obsidian-950 px-3 py-1 font-mono text-xs font-semibold text-gold-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 8. Lessons Learned & Repository Note */}
          <section className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5">
              <Lightbulb className="h-5 w-5 text-amber-400" />
              <h2 className="font-display text-xl font-bold text-white">
                {dict.lessonsTitle}
              </h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {project.limitationsAndLessons[locale].map((lesson, idx) => (
                <li
                  key={idx}
                  className="text-sm leading-relaxed text-slate-300 sm:text-base"
                >
                  • {lesson}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <p className="text-xs text-slate-400">
                {project.repositoryNote[locale]}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gold-400/40 bg-obsidian-900 px-4 py-2 text-xs font-bold text-gold-300 transition hover:border-gold-400 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    <span>{dict.githubLink}</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 px-4 py-2 text-xs font-bold text-obsidian-950"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{dict.liveLink}</span>
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
