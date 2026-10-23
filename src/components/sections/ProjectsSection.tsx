"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Building2, Calendar, Sparkles } from "lucide-react";
import { Locale, ProjectCategory } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import { projectsData } from "@/data/projects";

interface ProjectsSectionProps {
  locale: Locale;
  dict: Dictionary["sections"]["projects"];
  showAllLink?: boolean;
}

export default function ProjectsSection({
  locale,
  dict,
  showAllLink = true,
}: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProjectCategory>("all");

  const categories: { id: "all" | ProjectCategory; label: string }[] = [
    { id: "all", label: dict.filterAll },
    { id: "process-automation", label: dict.filterProcessAutomation },
    { id: "business-intelligence", label: dict.filterBi },
    { id: "python-sql", label: dict.filterPythonSql },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Filter Controls */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold tracking-widest text-gold-400 uppercase">
              {dict.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {dict.title}
            </h2>
            <p className="mt-3 text-base text-slate-400">{dict.subtitle}</p>
          </div>

          {/* Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Project Category Filter"
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                    active
                      ? "bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 shadow-gold-sm"
                      : "border border-white/10 bg-obsidian-900 text-slate-300 hover:border-gold-400/40 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-white/10 bg-obsidian-900/50 p-12 text-center text-slate-400">
            {dict.emptyCategory}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.slug}
                className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  {/* Category & Optional Template Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-lg border border-gold-400/30 bg-gold-400/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-gold-300">
                      {project.categoryLabel[locale]}
                    </span>
                    {project.isTemplatePlaceholder && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] text-amber-300">
                        <Sparkles className="h-3 w-3" />
                        {dict.templateBadge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug text-white">
                    <Link
                      href={`/${locale}/projects/${project.slug}`}
                      className="transition hover:text-gold-300"
                    >
                      {project.title[locale]}
                    </Link>
                  </h3>

                  {/* Organization & Period */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-gold-400" />
                      {project.organization[locale]}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gold-400" />
                      {project.period[locale]}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {project.shortSummary[locale]}
                  </p>

                  {/* Metrics Grid */}
                  <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-obsidian-950/90 p-3">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-left">
                        <p className="font-mono text-xs font-bold text-gold-300">
                          {m.value}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-400">
                          {m.label[locale]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.toolsAndTech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-obsidian-900 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="mt-5 flex items-center justify-between gap-2">
                    <Link
                      href={`/${locale}/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-300 transition hover:text-amber-300"
                    >
                      <span>{dict.viewCaseStudy}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={dict.githubLink}
                          className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-obsidian-900 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-gold-400/40 hover:text-white"
                        >
                          <Github className="h-3.5 w-3.5 text-gold-400" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={dict.liveLink}
                          className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-obsidian-900 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-gold-400/40 hover:text-white"
                        >
                          <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {showAllLink && (
          <div className="mt-10 flex justify-center">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 rounded-xl border border-gold-400/40 bg-obsidian-900 px-6 py-3 text-sm font-semibold text-gold-200 transition hover:border-gold-400 hover:bg-gold-400/10 hover:text-white"
            >
              <span>{dict.viewAllProjects}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
