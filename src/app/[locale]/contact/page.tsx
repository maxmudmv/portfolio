import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/data/dictionaries";
import { Locale } from "@/data/types";
import ContactSection from "@/components/sections/ContactSection";
import GithubCvSection from "@/components/sections/GithubCvSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "uz";
  const dict = getDictionary(validLocale);

  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="pt-4">
      <ContactSection locale={locale} dict={dict.sections.contact} />
      <GithubCvSection
        locale={locale}
        githubDict={dict.sections.githubSection}
        cvDict={dict.sections.cvSection}
      />
    </div>
  );
}
