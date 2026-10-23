"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Locale } from "@/data/types";
import { Dictionary } from "@/data/dictionaries";
import { profileData } from "@/data/profile";

interface ContactSectionProps {
  locale: Locale;
  dict: Dictionary["sections"]["contact"];
}

export default function ContactSection({ locale, dict }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [websiteHoneypot, setWebsiteHoneypot] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "unconfigured" | "error"
  >("idle");
  const [serverError, setServerError] = useState<string>("");

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (name.trim().length < 2) {
      nextErrors.name = dict.validationName;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      nextErrors.email = dict.validationEmail;
    }
    if (message.trim().length < 10) {
      nextErrors.message = dict.validationMessage;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: message.trim(),
          website: websiteHoneypot,
          locale,
        }),
      });

      const data = await res.json();

      if (res.status === 503 && data?.code === "EMAIL_SERVICE_UNCONFIGURED") {
        setStatus("unconfigured");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setServerError(data?.error || "Request failed");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch {
      setStatus("error");
      setServerError("Network error");
    }
  };

  const mailtoHref = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
    `Portfolio Contact: ${name || "Inquiry"}${company ? ` (${company})` : ""}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
  )}`;

  return (
    <section id="contact" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          {/* Left 5 cols: Direct Verified Contact Channels */}
          <div className="space-y-4 lg:col-span-5">
            <h3 className="font-display text-lg font-bold text-white">
              {dict.directChannelsTitle}
            </h3>

            {/* Phone (Preferred) */}
            <a
              href={profileData.contact.phoneHref}
              className="glass-panel glass-panel-hover flex items-start justify-between rounded-2xl p-5"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/15 text-gold-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-slate-400">
                      {dict.phoneLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-300">
                      <Sparkles className="h-2.5 w-2.5" />
                      {dict.preferredBadge}
                    </span>
                  </div>
                  <p className="mt-1 font-display text-base font-bold text-white">
                    {profileData.contact.phone}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-500" />
            </a>

            {/* Telegram */}
            <a
              href={profileData.contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover flex items-center justify-between rounded-2xl p-5"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-300">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400">
                    {dict.telegramLabel}
                  </span>
                  <p className="mt-0.5 font-display text-base font-bold text-white">
                    {profileData.contact.telegramHandle}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-500" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${profileData.contact.email}`}
              className="glass-panel glass-panel-hover flex items-center justify-between rounded-2xl p-5"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400">
                    {dict.emailLabel}
                  </span>
                  <p className="mt-0.5 font-mono text-sm font-bold text-white">
                    {profileData.contact.email}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-500" />
            </a>

            {/* LinkedIn & GitHub */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profileData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover flex items-center gap-3 rounded-2xl p-4"
              >
                <Linkedin className="h-5 w-5 text-gold-400" />
                <div>
                  <span className="block text-xs text-slate-400">
                    {dict.linkedinLabel}
                  </span>
                  <span className="font-mono text-xs font-bold text-white">
                    /in/maxmudmv
                  </span>
                </div>
              </a>

              <a
                href={profileData.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover flex items-center gap-3 rounded-2xl p-4"
              >
                <Github className="h-5 w-5 text-gold-400" />
                <div>
                  <span className="block text-xs text-slate-400">
                    {dict.githubLabel}
                  </span>
                  <span className="font-mono text-xs font-bold text-white">
                    @maxmudmv
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right 7 cols: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-white">
                {dict.formTitle}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{dict.formSubtitle}</p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                {/* Honeypot anti-spam field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-field">Website</label>
                  <input
                    id="website-field"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={websiteHoneypot}
                    onChange={(e) => setWebsiteHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-200"
                    >
                      {dict.nameLabel} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={dict.namePlaceholder}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:border-gold-400"
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        role="alert"
                        className="mt-1.5 text-xs text-amber-400"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-200"
                    >
                      {dict.emailInputLabel} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={dict.emailPlaceholder}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:border-gold-400"
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        role="alert"
                        className="mt-1.5 text-xs text-amber-400"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company / Subject */}
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-semibold text-slate-200"
                  >
                    {dict.companyLabel}
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={dict.companyPlaceholder}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:border-gold-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-200"
                  >
                    {dict.messageLabel} *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={dict.messagePlaceholder}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:border-gold-400"
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="mt-1.5 text-xs text-amber-400"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 px-6 py-3.5 text-sm font-bold text-obsidian-950 shadow-gold-sm transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{dict.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>{dict.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>

              {/* Status Feedback Boxes */}
              {status === "success" && (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-200"
                >
                  <div className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span>{dict.successTitle}</span>
                  </div>
                  <p className="mt-1 text-xs text-emerald-100/90">
                    {dict.successMessage}
                  </p>
                </div>
              )}

              {status === "unconfigured" && (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-amber-400/40 bg-amber-500/10 p-5 text-sm text-amber-100"
                >
                  <div className="flex items-center gap-2 font-bold text-amber-300">
                    <AlertCircle className="h-5 w-5 shrink-0 text-amber-400" />
                    <span>{dict.unconfiguredTitle}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200">
                    {dict.unconfiguredMessage}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 px-4 py-2.5 text-xs font-bold text-obsidian-950"
                    >
                      <Mail className="h-4 w-4" />
                      <span>{dict.openMailClientBtn}</span>
                    </a>
                    <a
                      href={profileData.contact.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-gold-400/40 bg-obsidian-950 px-4 py-2.5 text-xs font-semibold text-gold-300"
                    >
                      <Send className="h-4 w-4" />
                      <span>{dict.openTelegramBtn}</span>
                    </a>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200"
                >
                  <div className="flex items-center gap-2 font-bold">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <span>{dict.errorTitle}</span>
                  </div>
                  <p className="mt-1 text-xs">{serverError}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
