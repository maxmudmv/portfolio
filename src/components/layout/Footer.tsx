import React from "react";
import Link from "next/link";
import { Mail, Phone, Send, Github, Linkedin, Code2 } from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import { profileData } from "@/data/profile";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-400/15 bg-obsidian-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/10 font-display text-sm font-bold text-gold-300">
                ME
              </div>
              <div>
                <p className="font-display text-base font-bold text-white">
                  {profileData.fullName[locale]}
                </p>
                <p className="font-mono text-xs text-gold-400">
                  {profileData.title[locale]}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {profileData.tagline[locale]}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-mono text-xs font-semibold tracking-wider text-gold-300 uppercase">
              {dict.footer.quickLinks}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              <li>
                <Link href={`/${locale}`} className="transition hover:text-gold-300">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="transition hover:text-gold-300">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/projects`} className="transition hover:text-gold-300">
                  {dict.nav.projects}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="transition hover:text-gold-300">
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <a
                  href={profileData.cvPath}
                  download={profileData.cvFileName}
                  className="text-gold-300 transition hover:text-amber-300"
                >
                  {dict.nav.downloadCv}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Contact Links */}
          <div>
            <h3 className="font-mono text-xs font-semibold tracking-wider text-gold-300 uppercase">
              {dict.footer.directContact}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={profileData.contact.phoneHref}
                  className="inline-flex items-center gap-2 text-slate-300 transition hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 text-gold-400" />
                  <span>{profileData.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center gap-2 text-slate-300 transition hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 text-gold-400" />
                  <span>{profileData.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.contact.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 transition hover:text-gold-300"
                >
                  <Send className="h-4 w-4 text-gold-400" />
                  <span>Telegram: {profileData.contact.telegramHandle}</span>
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={profileData.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-obsidian-900 text-slate-300 transition hover:border-gold-400 hover:text-gold-300"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profileData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-obsidian-900 text-slate-300 transition hover:border-gold-400 hover:text-gold-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profileData.contact.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-obsidian-900 text-slate-300 transition hover:border-gold-400 hover:text-gold-300"
              >
                <Code2 className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {profileData.fullName[locale]}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
