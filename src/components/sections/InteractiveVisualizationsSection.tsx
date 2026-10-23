"use client";

import React, { useState } from "react";
import { BarChart3, Table, Info } from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import { projectsData } from "@/data/projects";

interface VisualizationsSectionProps {
  locale: Locale;
  dict: Dictionary["sections"]["visualizations"];
}

export default function InteractiveVisualizationsSection({
  locale,
  dict,
}: VisualizationsSectionProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>(projectsData[0].slug);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const activeProject =
    projectsData.find((p) => p.slug === selectedSlug) ?? projectsData[0];
  const chart = activeProject.chartConfig;

  const tabs = [
    { slug: projectsData[0].slug, label: dict.tabDiscoverInvest },
    { slug: projectsData[1].slug, label: dict.tabAvloniyBi },
    { slug: projectsData[2].slug, label: dict.tabSkillPipeline },
  ];

  return (
    <section
      id="visualizations"
      className="border-t border-white/5 bg-obsidian-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

          <div className="inline-flex items-center gap-2 rounded-xl border border-gold-400/25 bg-obsidian-950 px-3.5 py-2 text-xs text-gold-300">
            <Info className="h-4 w-4 shrink-0 text-amber-400" />
            <span>{dict.disclaimerBadge}</span>
          </div>
        </div>

        {/* Dataset Switcher Tabs */}
        <div
          role="tablist"
          aria-label="Analytical Chart Switcher"
          className="mt-8 flex flex-wrap gap-2"
        >
          {tabs.map((tab) => {
            const active = tab.slug === selectedSlug;
            return (
              <button
                key={tab.slug}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => {
                  setSelectedSlug(tab.slug);
                  setHoveredIdx(null);
                }}
                className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
                  active
                    ? "bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 shadow-gold-sm"
                    : "border border-white/10 bg-obsidian-950 text-slate-300 hover:border-gold-400/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Chart Card */}
        <div className="glass-panel mt-6 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start">
            <div>
              <h3 className="font-display text-lg font-bold text-white sm:text-2xl">
                {chart.title[locale]}
              </h3>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                {chart.subtitle[locale]}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowTable((prev) => !prev)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-gold-400/30 bg-obsidian-900 px-3.5 py-2 font-mono text-xs text-gold-300 transition hover:border-gold-400"
            >
              <Table className="h-3.5 w-3.5" />
              <span>
                {showTable ? dict.tableToggleHide : dict.tableToggleShow}
              </span>
            </button>
          </div>

          {/* Legend */}
          <div className="mt-5 flex flex-wrap items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-slate-600" />
              <span className="text-slate-300">
                {chart.primarySeriesLabel[locale]}
              </span>
            </div>
            {chart.secondarySeriesLabel && (
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-gradient-to-r from-gold-400 to-amber-500" />
                <span className="font-semibold text-gold-300">
                  {chart.secondarySeriesLabel[locale]}
                </span>
              </div>
            )}
          </div>

          {/* Interactive Bars */}
          <div className="mt-8 space-y-6">
            {chart.data.map((point, index) => {
              const isHovered = hoveredIdx === index;
              const hasComparison = typeof point.secondaryValue === "number";

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`rounded-xl border p-4 transition ${
                    isHovered
                      ? "border-gold-400/50 bg-obsidian-900/90"
                      : "border-white/5 bg-obsidian-950/60"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="font-semibold text-white">
                      {point.label[locale]}
                    </span>
                    <div className="flex items-center gap-3 font-mono text-xs">
                      {hasComparison ? (
                        <>
                          <span className="text-slate-400">
                            {chart.primarySeriesLabel[locale]}:{" "}
                            <strong>{point.primaryValue}</strong>
                          </span>
                          <span className="rounded-md bg-gold-400/15 px-2 py-0.5 font-bold text-gold-300">
                            {chart.secondarySeriesLabel?.[locale]}:{" "}
                            {point.secondaryValue} ({point.unit})
                          </span>
                        </>
                      ) : (
                        <span className="rounded-md bg-gold-400/15 px-2.5 py-0.5 font-bold text-gold-300">
                          {point.primaryValue}
                          {point.unit}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bar tracks */}
                  <div className="mt-3 space-y-2">
                    {hasComparison ? (
                      <>
                        <div className="h-2.5 w-full overflow-hidden rounded-full bg-obsidian-800">
                          <div
                            className="h-full rounded-full bg-slate-600 transition-all duration-500"
                            style={{ width: `${Math.min(point.primaryValue, 100)}%` }}
                          />
                        </div>
                        <div className="h-3 w-full overflow-hidden rounded-full bg-obsidian-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-gold-400 to-amber-500 transition-all duration-500"
                            style={{
                              width: `${Math.min(point.secondaryValue ?? 0, 100)}%`,
                            }}
                          />
                        </div>
                      </>
                    ) : (
                      <div className="h-3.5 w-full overflow-hidden rounded-full bg-obsidian-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-gold-400 to-amber-500 transition-all duration-500"
                          style={{
                            width: `${Math.min(point.primaryValue * 2.5, 100)}%`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Accessible Data Table Representation */}
          {showTable && (
            <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-obsidian-950">
              <table className="w-full text-left text-xs text-slate-300 sm:text-sm">
                <thead className="border-b border-white/10 bg-obsidian-900 font-mono text-xs text-gold-300 uppercase">
                  <tr>
                    <th className="px-4 py-3">{dict.metricColumn}</th>
                    <th className="px-4 py-3">{dict.primaryColumn}</th>
                    {chart.secondarySeriesLabel && (
                      <th className="px-4 py-3">{dict.secondaryColumn}</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {chart.data.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-3 font-medium text-white">
                        {row.label[locale]}
                      </td>
                      <td className="px-4 py-3 font-mono">
                        {row.primaryValue} {row.unit}
                      </td>
                      {chart.secondarySeriesLabel && (
                        <td className="px-4 py-3 font-mono font-bold text-gold-300">
                          {row.secondaryValue} {row.unit}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Honest Attribution Note */}
          <p className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-400">
            {chart.authenticityNote[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}
