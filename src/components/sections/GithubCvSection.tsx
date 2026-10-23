import React from "react";
import {
  Github,
  Code2,
  Terminal,
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import { profileData } from "@/data/profile";

interface GithubCvSectionProps {
  locale: Locale;
  githubDict: Dictionary["sections"]["githubSection"];
  cvDict: Dictionary["sections"]["cvSection"];
}

export default function GithubCvSection({
  locale,
  githubDict,
  cvDict,
}: GithubCvSectionProps) {
  return (
    <>
      {/* SECTION 08: GITHUB & TECHNICAL WORK */}
      <section id="github" className="border-t border-white/5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold tracking-widest text-gold-400 uppercase">
              {githubDict.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {githubDict.title}
            </h2>
            <p className="mt-3 text-base text-slate-400">{githubDict.subtitle}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* GitHub Card */}
            <div className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/35 bg-gold-400/10 text-gold-300">
                  <Github className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {githubDict.githubCardTitle}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {githubDict.githubCardDesc}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <a
                  href={profileData.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold-300 transition hover:text-amber-300"
                >
                  <span>{githubDict.openGithubBtn}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* LeetCode Card */}
            <div className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/35 bg-amber-500/10 text-amber-300">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {githubDict.leetcodeCardTitle}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {githubDict.leetcodeCardDesc}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <a
                  href={profileData.contact.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 transition hover:text-gold-200"
                >
                  <span>{githubDict.openLeetcodeBtn}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Core Stack Environment Card */}
            <div className="glass-panel flex flex-col justify-between rounded-2xl p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/35 bg-gold-400/10 text-gold-300">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {githubDict.stackCardTitle}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {githubDict.stackCardDesc}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                {["SQL", "MS Excel", "Power BI", "NumPy", "pandas", "Matplotlib", "Seaborn"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-md border border-gold-400/20 bg-obsidian-950 px-2.5 py-1 font-mono text-xs text-gold-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09: DOWNLOADABLE CV */}
      <section
        id="cv"
        className="border-t border-white/5 bg-obsidian-900/40 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel relative overflow-hidden rounded-3xl border border-gold-400/35 p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400/10 blur-[90px]"
            />

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="font-mono text-xs font-semibold tracking-widest text-gold-400 uppercase">
                  {cvDict.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-4xl">
                  {cvDict.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  {cvDict.subtitle}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {cvDict.includedHighlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={profileData.cvPath}
                    download={profileData.cvFileName}
                    className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 px-6 py-3.5 text-sm font-bold text-obsidian-950 shadow-gold-md transition hover:brightness-110"
                  >
                    <Download className="h-4 w-4" />
                    <span>{cvDict.downloadPrimaryBtn}</span>
                  </a>

                  <a
                    href={profileData.cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gold-400/40 bg-obsidian-950 px-5 py-3.5 text-sm font-semibold text-gold-200 transition hover:border-gold-400 hover:text-white"
                  >
                    <FileText className="h-4 w-4 text-gold-400" />
                    <span>{cvDict.viewInlineBtn}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-obsidian-950/90 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/35 bg-gold-400/10 text-gold-300">
                      <FolderGit2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-white">
                        {profileData.cvFileName}
                      </p>
                      <p className="font-mono text-xs text-gold-400">
                        {cvDict.fileInfoLabel}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 font-mono text-xs text-slate-400">
                    {cvDict.updatedLabel}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs font-bold text-amber-300">
                      {cvDict.replaceHintTitle}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {cvDict.replaceHintText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
