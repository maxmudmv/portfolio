import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, GraduationCap, Briefcase, Globe2, ArrowUpRight, Target } from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import { profileData } from "@/data/profile";

interface AboutSectionProps {
  locale: Locale;
  dict: Dictionary["sections"]["about"];
}

export default function AboutSection({ locale, dict }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-widest text-gold-400 uppercase">
            {dict.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-3 text-base text-slate-400">{dict.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Portrait & Quick Facts Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel overflow-hidden rounded-2xl p-5 sm:p-6">
              <div className="flex flex-col items-center gap-5 sm:flex-row">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-gold-400/50 shadow-gold-sm sm:h-32 sm:w-32">
                  <Image
                    src={profileData.photoUrl}
                    alt={profileData.fullName[locale]}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                    {profileData.fullName[locale]}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-gold-400">
                    {profileData.title[locale]}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    {profileData.subtitle[locale]}
                  </p>
                </div>
              </div>

              {/* Quick Facts List */}
              <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <div>
                    <span className="block text-xs text-slate-400">
                      {dict.locationLabel}
                    </span>
                    <span className="font-medium text-slate-200">
                      {profileData.location[locale]}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <div>
                    <span className="block text-xs text-slate-400">
                      {dict.educationLabel}
                    </span>
                    <span className="font-medium text-slate-200">
                      TATU — Kompyuter injiniringi (2026)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <div>
                    <span className="block text-xs text-slate-400">
                      {dict.workFormatLabel}
                    </span>
                    <span className="font-medium text-slate-200">
                      {profileData.workFormat[locale]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gold-300 uppercase">
                  <Globe2 className="h-4 w-4 text-gold-400" />
                  <span>{dict.languagesTitle}</span>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {profileData.spokenLanguages.map((lang) => (
                    <div
                      key={lang.code}
                      className="rounded-xl border border-white/10 bg-obsidian-900/80 p-2.5"
                    >
                      <p className="text-xs font-bold text-white">
                        {lang.name[locale]}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-400">
                        {lang.level[locale]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Bio & Career Goal */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              {profileData.bioParagraphs[locale].map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Career Objective Callout */}
            <div className="mt-8 rounded-2xl border border-gold-400/30 bg-gradient-to-br from-gold-400/10 via-obsidian-900 to-obsidian-950 p-6 shadow-gold-sm">
              <div className="flex items-center gap-2.5">
                <Target className="h-5 w-5 text-amber-400" />
                <h3 className="font-display text-base font-bold text-white">
                  {dict.careerGoalTitle}
                </h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-200 sm:text-base">
                {profileData.careerGoal[locale]}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                <span className="font-mono text-xs text-gold-300">
                  {profileData.employmentType[locale]}
                </span>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 transition hover:text-gold-200"
                >
                  <span>{dict.readFullBio}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
