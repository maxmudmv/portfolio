"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download, Globe, Sparkles } from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary, SUPPORTED_LOCALES } from "@/data/dictionaries";
import { profileData } from "@/data/profile";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary["nav"];
}

const LOCALE_LABELS: Record<Locale, string> = {
  uz: "OʻZ",
  en: "EN",
  ru: "РУ",
};

export default function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname() || `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Preserve current sub-route when switching language
  const getLocalizedPath = (targetLocale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return `/${targetLocale}`;
    }
    if (SUPPORTED_LOCALES.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
      return "/" + segments.join("/");
    }
    return `/${targetLocale}/${segments.join("/")}`;
  };

  const handleLanguageSelect = (targetLocale: Locale) => {
    try {
      localStorage.setItem("preferred_locale", targetLocale);
      document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  const navItems = [
    { href: `/${locale}`, label: dict.home, exact: true },
    { href: `/${locale}/about`, label: dict.about, exact: false },
    { href: `/${locale}#skills`, label: dict.skills, exact: false },
    { href: `/${locale}/projects`, label: dict.projects, exact: false },
    { href: `/${locale}#experience`, label: dict.experience, exact: false },
    { href: `/${locale}#visualizations`, label: dict.visualizations, exact: false },
    { href: `/${locale}/contact`, label: dict.contact, exact: false },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (href.includes("#")) return false;
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gold-400/20 bg-obsidian-950/90 py-2.5 shadow-glass backdrop-blur-xl"
          : "border-b border-white/5 bg-obsidian-950/65 py-4 backdrop-blur-md"
      }`}
    >
      {/* Skip to content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-gold-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-obsidian-950"
      >
        {dict.skipToContent}
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-400/40 bg-gradient-to-br from-gold-400/20 to-amber-500/10 font-display text-sm font-bold tracking-wider text-gold-300 shadow-gold-sm transition group-hover:border-gold-400 group-hover:text-white">
            ME
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-white sm:text-base">
              {profileData.shortName[locale]}
            </span>
            <span className="font-mono text-[11px] text-gold-400">
              Data Analyst | Data Scientist
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-gold-400/15 text-gold-300 shadow-gold-sm"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Language Switcher + CV Download */}
        <div className="hidden items-center gap-3 lg:flex">
          <div
            role="group"
            aria-label={dict.languageLabel}
            className="flex items-center rounded-xl border border-gold-400/25 bg-obsidian-900/90 p-1"
          >
            <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-gold-400" />
            {SUPPORTED_LOCALES.map((loc) => {
              const activeLoc = loc === locale;
              return (
                <Link
                  key={loc}
                  href={getLocalizedPath(loc)}
                  onClick={() => handleLanguageSelect(loc)}
                  aria-current={activeLoc ? "true" : undefined}
                  className={`rounded-lg px-2.5 py-1 font-mono text-xs font-semibold transition ${
                    activeLoc
                      ? "bg-gold-400 text-obsidian-950 shadow-sm"
                      : "text-slate-300 hover:text-gold-300"
                  }`}
                >
                  {LOCALE_LABELS[loc]}
                </Link>
              );
            })}
          </div>

          <a
            href={profileData.cvPath}
            download={profileData.cvFileName}
            className="inline-flex items-center gap-2 rounded-xl border border-gold-400/50 bg-gradient-to-r from-gold-400 to-amber-500 px-4 py-2 text-xs font-bold text-obsidian-950 shadow-gold-sm transition hover:brightness-110"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{dict.downloadCv}</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <div
            role="group"
            aria-label={dict.languageLabel}
            className="flex items-center rounded-lg border border-gold-400/25 bg-obsidian-900 p-0.5"
          >
            {SUPPORTED_LOCALES.map((loc) => {
              const activeLoc = loc === locale;
              return (
                <Link
                  key={loc}
                  href={getLocalizedPath(loc)}
                  onClick={() => handleLanguageSelect(loc)}
                  className={`rounded-md px-2 py-1 font-mono text-[11px] font-semibold ${
                    activeLoc
                      ? "bg-gold-400 text-obsidian-950"
                      : "text-slate-300"
                  }`}
                >
                  {LOCALE_LABELS[loc]}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? dict.closeMenu : dict.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold-400/30 bg-obsidian-900 text-gold-300 transition hover:border-gold-400"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-gold-400/20 bg-obsidian-950/98 px-4 pb-6 pt-3 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-gold-400/15 text-gold-300"
                      : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 border-t border-white/10 pt-4">
            <a
              href={profileData.cvPath}
              download={profileData.cvFileName}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 px-4 py-3 text-sm font-bold text-obsidian-950 shadow-gold-sm"
            >
              <Download className="h-4 w-4" />
              <span>{dict.downloadCv}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
