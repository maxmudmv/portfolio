import React from "react";
import { CheckCircle, Layers, Cpu, Database } from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import { skillCategories, skillsData } from "@/data/skills";

interface SkillsSectionProps {
  locale: Locale;
  dict: Dictionary["sections"]["skills"];
}

export default function SkillsSection({ locale, dict }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-obsidian-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold tracking-widest text-gold-400 uppercase">
              {dict.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {dict.title}
            </h2>
            <p className="mt-3 text-base text-slate-400">{dict.subtitle}</p>
          </div>
          <p className="max-w-md rounded-xl border border-gold-400/20 bg-obsidian-950/80 px-4 py-2.5 text-xs text-slate-400">
            {dict.authenticityNote}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {skillCategories.map((category) => {
            const items = skillsData.filter((s) => s.category === category.id);
            return (
              <div key={category.id}>
                <div className="mb-5 flex flex-col justify-between gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center">
                  <h3 className="font-display text-lg font-bold text-gold-300 sm:text-xl">
                    {category.title[locale]}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {category.subtitle[locale]}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {items.map((skill) => (
                    <div
                      key={skill.id}
                      className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-6"
                    >
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-display text-lg font-bold text-white">
                            {skill.name}
                          </h4>
                          <span className="rounded-full border border-gold-400/35 bg-gold-400/10 px-3 py-1 font-mono text-xs font-semibold text-gold-300">
                            {skill.badge[locale]}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-slate-300">
                          {skill.description[locale]}
                        </p>
                      </div>

                      <div className="mt-5 border-t border-white/10 pt-4">
                        <p className="text-xs text-slate-400">
                          <span className="font-semibold text-gold-300">
                            {dict.appliedInLabel}{" "}
                          </span>
                          {skill.usedIn[locale]}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {skill.toolsOrModules.map((mod) => (
                            <span
                              key={mod}
                              className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-obsidian-950 px-2.5 py-1 font-mono text-xs text-slate-200"
                            >
                              <CheckCircle className="h-3 w-3 text-amber-400" />
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
