"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Activity, Database, BarChart3, Code2, FileSpreadsheet, Layers } from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import type { DataNodeInfo } from "./LivingDataSceneCanvas";

const LivingDataSceneCanvas = dynamic(() => import("./LivingDataSceneCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold-400 border-t-transparent" />
        <span className="font-mono text-xs tracking-widest text-gold-300 uppercase">
          3D SAHNA YUKLANMOQDA...
        </span>
      </div>
    </div>
  ),
});

interface LivingDataDashboardProps {
  locale: Locale;
  dict: Dictionary["hero"];
}

interface EnrichedNode extends DataNodeInfo {
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  context: Record<Locale, string>;
  tools: string[];
}

const DASHBOARD_NODES: EnrichedNode[] = [
  {
    id: "powerbi",
    label: "Power BI",
    metric: "BI Dashboards",
    position: [1.15, 0.75, 0.3],
    color: "#F59E0B",
    title: {
      uz: "Power BI Interaktiv Boshqaruv Panellari",
      en: "Power BI Executive Dashboards",
      ru: "Интерактивные дашборды Power BI",
    },
    subtitle: {
      uz: "A. Avloniy nomidagi milliy institut & Sertifikatlangan yoʻnalish",
      en: "A. Avloniy National Institute & Certified Specialization",
      ru: "Институт им. А. Авлони и профильная сертификация",
    },
    context: {
      uz: "Toʻplangan maʼlumotlar asosida rahbariyat va xodimlar uchun tushunarli, interaktiv boshqaruv panellari (Dashboard) va vizual hisobotlar.",
      en: "Interactive visual dashboards and KPI reporting systems designed for institutional leadership and operational clarity.",
      ru: "Наглядные интерактивные панели управления (Dashboard) и визуальные отчеты для руководства и сотрудников.",
    },
    tools: ["Power BI", "Power Query", "DAX", "KPI Visualization"],
  },
  {
    id: "webapp-db",
    label: "WebApp + DB",
    metric: "100% Digitized",
    position: [-1.1, 0.82, 0.4],
    color: "#D4AF37",
    title: {
      uz: "WebApp + Database Avtomatlashtirish",
      en: "WebApp + Database Digitization",
      ru: "Цифровизация через WebApp + БД",
    },
    subtitle: {
      uz: "Discover Invest — Tabel tizimini raqamlashtirish",
      en: "Discover Invest — Timekeeping Workflow Transformation",
      ru: "Discover Invest — Цифровизация табельного учета",
    },
    context: {
      uz: "Qoʻlda qogʻoz jurnal yuritish va rasm yuborish oʻrniga xodimlar uchun maxsus WebApp va markazlashgan maʼlumotlar bazasi (Database) yaratildi.",
      en: "Replaced manual paper journal & photo reporting with a custom WebApp connected directly to a centralized database.",
      ru: "Замена бумажных журналов и фотоотчетов на специальное WebApp-приложение с прямой записью в базу данных.",
    },
    tools: ["Custom WebApp", "Relational Database", "Source Validation", "Payroll Pipeline"],
  },
  {
    id: "python-eda",
    label: "Python Data",
    metric: "pandas • NumPy",
    position: [0.1, 1.15, -0.2],
    color: "#FBBF24",
    title: {
      uz: "Python Maʼlumotlar Tahlili va Vizualizatsiyasi",
      en: "Python Data Analysis & Statistical Plotting",
      ru: "Анализ и визуализация данных на Python",
    },
    subtitle: {
      uz: "NumPy • pandas • Matplotlib • Seaborn",
      en: "NumPy • pandas • Matplotlib • Seaborn",
      ru: "NumPy • pandas • Matplotlib • Seaborn",
    },
    context: {
      uz: "Katta jadvalli maʼlumotlarni xatolardan tozalash, statistik tahlil (EDA) va ilmiy-biznes grafiklarni shakllantirish.",
      en: "Cleaning tabular datasets, performing exploratory data analysis (EDA), and building statistical charts.",
      ru: "Очистка массивов данных от ошибок, разведочный анализ (EDA) и построение статистических графиков.",
    },
    tools: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    id: "sql-excel",
    label: "SQL & Excel",
    metric: "Fast Reporting",
    position: [1.25, -0.35, 0.5],
    color: "#D97706",
    title: {
      uz: "SQL Soʻrovlari & Avtomatlashtirilgan Excel / Sheets",
      en: "SQL Querying & Automated Excel / Sheets Templates",
      ru: "SQL-запросы и автоматизация Excel / Google Sheets",
    },
    subtitle: {
      uz: "Hisobot tayyorlash vaqtini bir necha barobar qisqartirish",
      en: "Multi-fold reduction in report generation time",
      ru: "Кратное сокращение времени формирования отчетов",
    },
    context: {
      uz: "Murakkab hisobotlarni funksiyalar, formulalar va tahliliy shablonlar yordamida optimallashtirish hamda buxgalteriyaga xatolarsiz taqdim etish.",
      en: "Optimizing complex analytical tables with dynamic formulas and templates for error-free accounting and management reporting.",
      ru: "Оптимизация сложных аналитических таблиц и шаблонов для безошибочной отчетности и расчета зарплаты.",
    },
    tools: ["SQL", "MS Excel", "Google Sheets", "Automated Templates"],
  },
];

export default function LivingDataDashboard({ locale, dict }: LivingDataDashboardProps) {
  const [activeNodeId, setActiveNodeId] = useState<string>("powerbi");
  const [prefer2D, setPrefer2D] = useState<boolean>(false);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setPrefer2D(true);
    }

    // Check WebGL availability safely
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        setPrefer2D(true);
      }
    } catch {
      setWebglSupported(false);
      setPrefer2D(true);
    }
  }, []);

  const activeNode =
    DASHBOARD_NODES.find((n) => n.id === activeNodeId) ?? DASHBOARD_NODES[0];

  return (
    <div className="glass-panel relative flex flex-col overflow-hidden rounded-2xl border border-gold-400/25 shadow-glass">
      {/* Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold-400/15 bg-obsidian-900/90 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
          </span>
          <span className="font-mono text-[11px] font-semibold tracking-wider text-gold-300 uppercase">
            {dict.dashboardBadge}
          </span>
        </div>

        {webglSupported && (
          <button
            type="button"
            onClick={() => setPrefer2D((prev) => !prev)}
            aria-label={dict.toggle3dLabel}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gold-400/25 bg-obsidian-800/90 px-2.5 py-1 font-mono text-[11px] text-slate-200 transition hover:border-gold-400 hover:text-gold-300"
          >
            <Layers className="h-3.5 w-3.5 text-gold-400" />
            <span>{prefer2D ? dict.mode3d : dict.mode2d}</span>
          </button>
        )}
      </div>

      {/* Main 3D / 2D Interactive Stage */}
      <div className="relative h-[320px] w-full bg-gradient-to-b from-obsidian-900/40 via-obsidian-950 to-obsidian-900/90 sm:h-[360px]">
        {!prefer2D && webglSupported ? (
          <LivingDataSceneCanvas
            nodes={DASHBOARD_NODES}
            activeNodeId={activeNodeId}
            onSelectNode={setActiveNodeId}
          />
        ) : (
          /* High-precision 2D SVG Fallback for Reduced Motion / non-WebGL */
          <div className="flex h-full w-full flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-xs text-amber-300">
                {dict.reducedMotionBadge}
              </span>
              <span className="font-mono text-xs text-slate-400">
                {dict.dashboardSubtitle}
              </span>
            </div>

            <div className="my-auto grid grid-cols-2 gap-3 sm:grid-cols-4">
              {DASHBOARD_NODES.map((node) => {
                const isSelected = node.id === activeNodeId;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveNodeId(node.id)}
                    className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition ${
                      isSelected
                        ? "border-gold-400 bg-gold-400/15 shadow-gold-sm"
                        : "border-white/10 bg-obsidian-800/70 hover:border-gold-400/40"
                    }`}
                  >
                    <span className="font-mono text-xs font-semibold text-gold-300">
                      {node.label}
                    </span>
                    <span className="mt-1 text-sm font-bold text-white">
                      {node.metric}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-7 items-end gap-2 pt-2">
              {[42, 68, 55, 84, 73, 96, 88].map((val, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-gold-600/60 to-amber-400"
                    style={{ height: `${val}px` }}
                  />
                  <span className="font-mono text-[10px] text-slate-400">
                    M{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Floating hint pill */}
        {!prefer2D && webglSupported && (
          <div className="pointer-events-none absolute bottom-3 left-4 rounded-full border border-white/10 bg-obsidian-950/80 px-3 py-1 font-mono text-[11px] text-slate-300 backdrop-blur-md">
            {dict.interactiveHint}
          </div>
        )}
      </div>

      {/* Node Selector Tabs */}
      <div
        role="tablist"
        aria-label={dict.dashboardTitle}
        className="grid grid-cols-2 gap-1.5 border-t border-gold-400/15 bg-obsidian-900/95 p-2.5 sm:grid-cols-4"
      >
        {DASHBOARD_NODES.map((node) => {
          const isSelected = node.id === activeNodeId;
          return (
            <button
              key={node.id}
              role="tab"
              type="button"
              aria-selected={isSelected}
              onClick={() => setActiveNodeId(node.id)}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium transition ${
                isSelected
                  ? "border border-gold-400/60 bg-gold-400/15 text-gold-200 shadow-gold-sm"
                  : "border border-transparent bg-obsidian-800/60 text-slate-300 hover:border-gold-400/25 hover:text-white"
              }`}
            >
              <span className="truncate font-semibold">{node.label}</span>
              <span className="ml-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
            </button>
          );
        })}
      </div>

      {/* Active Node Real Context Inspector */}
      <div className="border-t border-gold-400/15 bg-obsidian-950/95 p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="font-mono text-xs font-medium text-amber-400">
              {activeNode.subtitle[locale]}
            </p>
            <h3 className="mt-0.5 text-base font-bold text-white sm:text-lg">
              {activeNode.title[locale]}
            </h3>
          </div>
          <span className="rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 font-mono text-xs font-semibold text-gold-300">
            {activeNode.metric}
          </span>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
          {activeNode.context[locale]}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {activeNode.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-white/10 bg-obsidian-800 px-2.5 py-0.5 font-mono text-[11px] text-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Honest decorative vs real data note */}
        <p className="mt-3 border-t border-white/5 pt-2.5 text-[11px] leading-normal text-slate-400">
          {dict.dashboardNote}
        </p>
      </div>
    </div>
  );
}
