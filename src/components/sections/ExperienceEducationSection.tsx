import React from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Calendar,
  MapPin,
} from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import { experienceData } from "@/data/experience";
import { educationData, certificatesData } from "@/data/education";

interface ExperienceEducationProps {
  locale: Locale;
  experienceDict: Dictionary["sections"]["experience"];
  educationDict: Dictionary["sections"]["education"];
  certificatesDict: Dictionary["sections"]["certificates"];
}

export default function ExperienceEducationSection({
  locale,
  experienceDict,
  educationDict,
  certificatesDict,
}: ExperienceEducationProps) {
  return (
    <>
      {/* SECTION 04: WORK EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-white/5 bg-obsidian-900/35 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold tracking-widest text-gold-400 uppercase">
                {experienceDict.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
                {experienceDict.title}
              </h2>
              <p className="mt-3 text-base text-slate-400">
                {experienceDict.subtitle}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-xl border border-gold-400/35 bg-gold-400/10 px-4 py-2 font-mono text-xs font-bold text-gold-300">
              <Briefcase className="h-4 w-4 text-amber-400" />
              {experienceDict.totalDurationBadge}
            </span>
          </div>

          <div className="mt-12 space-y-8">
            {experienceData.map((job) => (
              <div
                key={job.id}
                className="glass-panel rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        {job.role[locale]}
                      </h3>
                      <span className="rounded-full border border-gold-400/35 bg-gold-400/10 px-3 py-0.5 font-mono text-xs font-semibold text-gold-300">
                        {job.duration[locale]}
                      </span>
                    </div>
                    <p className="mt-1 text-base font-semibold text-amber-300">
                      {job.company} •{" "}
                      <span className="font-normal text-slate-400">
                        {job.industry[locale]}
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-slate-300">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-gold-400" />
                      {job.period[locale]}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-gold-400" />
                      {job.location[locale]}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {job.summary[locale]}
                </p>

                <div className="mt-5">
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-gold-300 uppercase">
                    {experienceDict.keyAchievements}
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {job.achievements[locale].map((ach, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-obsidian-950 px-3 py-1 font-mono text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {job.relatedProjectSlug && (
                    <Link
                      href={`/${locale}/projects/${job.relatedProjectSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-300 transition hover:text-amber-300"
                    >
                      <span>{experienceDict.viewRelatedCaseStudy}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 & 06: EDUCATION & CERTIFICATES */}
      <section id="education" className="border-t border-white/5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left 6 cols: Education & Courses */}
            <div className="lg:col-span-6">
              <p className="font-mono text-xs font-semibold tracking-widest text-gold-400 uppercase">
                {educationDict.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                {educationDict.title}
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                {educationDict.subtitle}
              </p>

              <div className="mt-8 space-y-6">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="glass-panel rounded-2xl p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/35 bg-gold-400/10 px-3 py-1 font-mono text-xs font-semibold text-gold-300">
                        <GraduationCap className="h-3.5 w-3.5 text-amber-400" />
                        {edu.type === "degree"
                          ? educationDict.degreeBadge
                          : educationDict.courseBadge}
                      </span>
                      <span className="font-mono text-sm font-bold text-amber-400">
                        {edu.year}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-white sm:text-xl">
                      {edu.institution[locale]}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-gold-300">
                      {edu.facultyOrProgram[locale]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {edu.description[locale]}
                    </p>

                    <div className="mt-4 border-t border-white/10 pt-3">
                      <p className="font-mono text-[11px] text-slate-400">
                        {educationDict.focusAreasLabel}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {edu.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="rounded-md border border-white/10 bg-obsidian-950 px-2.5 py-0.5 font-mono text-[11px] text-slate-300"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 cols: Electronic Certificates */}
            <div id="certificates" className="lg:col-span-6">
              <p className="font-mono text-xs font-semibold tracking-widest text-gold-400 uppercase">
                {certificatesDict.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                {certificatesDict.title}
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                {certificatesDict.subtitle}
              </p>

              <div className="mt-8 space-y-6">
                {certificatesData.map((cert) => (
                  <div
                    key={cert.id}
                    className="glass-panel rounded-2xl p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/35 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-300">
                        <Award className="h-3.5 w-3.5 text-amber-400" />
                        {certificatesDict.verifiedBadge}
                      </span>
                      <span className="font-mono text-sm font-bold text-gold-300">
                        {cert.year}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-white sm:text-xl">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-gold-400">
                      {cert.category[locale]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {cert.description[locale]}
                    </p>

                    <div className="mt-4 border-t border-white/10 pt-3">
                      <p className="font-mono text-[11px] text-slate-400">
                        {certificatesDict.skillsValidatedLabel}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {cert.skillsValidated.map((sk) => (
                          <span
                            key={sk}
                            className="rounded-md border border-gold-400/20 bg-obsidian-950 px-2.5 py-0.5 font-mono text-[11px] text-gold-200"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-[11px] text-slate-400">
                        {cert.verificationNote[locale]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
