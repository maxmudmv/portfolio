import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import { profileData } from "@/data/profile";
import LivingDataDashboard from "@/components/three/LivingDataDashboard";

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary["hero"];
}

export default function HeroSection({ locale, dict }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-gold-400/15 pb-16 pt-10 sm:pb-24 sm:pt-14">
      {/* Atmospheric background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gold-400/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-[110px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Identity & Calls to Action */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wider text-gold-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
              <span>{dict.badge}</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              {profileData.fullName[locale]}
            </h1>

            <p className="mt-3 font-display text-xl font-bold sm:text-2xl">
              <span className="gold-text-gradient">{profileData.title[locale]}</span>
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {profileData.tagline[locale]}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
              <MapPin className="h-4 w-4 shrink-0 text-gold-400" />
              <span>{dict.availableStatus}</span>
            </div>

            {/* Primary Calls to Action */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 px-6 py-3.5 text-sm font-bold text-obsidian-950 shadow-gold-md transition hover:brightness-110"
              >
                <span>{dict.viewProjectsBtn}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={profileData.cvPath}
                download={profileData.cvFileName}
                className="inline-flex items-center gap-2 rounded-xl border border-gold-400/40 bg-obsidian-900/90 px-5 py-3.5 text-sm font-semibold text-gold-200 transition hover:border-gold-400 hover:bg-gold-400/10 hover:text-white"
              >
                <Download className="h-4 w-4 text-gold-400" />
                <span>{dict.downloadCvBtn}</span>
              </a>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-obsidian-900/60 px-5 py-3.5 text-sm font-medium text-slate-200 transition hover:border-gold-400/40 hover:text-white"
              >
                <Mail className="h-4 w-4 text-amber-400" />
                <span>{dict.contactBtn}</span>
              </Link>
            </div>

            {/* Key Authentic Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profileData.keyHighlights.map((item) => (
                <div
                  key={item.id}
                  className="glass-panel rounded-xl p-3.5 transition hover:border-gold-400/35"
                >
                  <p className="font-display text-xl font-extrabold text-gold-300 sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-300">
                    {item.label[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Signature 3D Living Data Dashboard */}
          <div className="lg:col-span-6">
            <LivingDataDashboard locale={locale} dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
}
