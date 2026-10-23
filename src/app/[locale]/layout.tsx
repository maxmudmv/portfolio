import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SUPPORTED_LOCALES,
  isValidLocale,
  getDictionary,
} from "@/data/dictionaries";
import { Locale } from "@/data/types";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "uz";
  const dict = getDictionary(validLocale);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://maxmudmv.vercel.app";

  return {
    title: dict.meta.siteTitle,
    description: dict.meta.siteDescription,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `${siteUrl}/${validLocale}`,
      languages: {
        uz: `${siteUrl}/uz`,
        en: `${siteUrl}/en`,
        ru: `${siteUrl}/ru`,
        "x-default": `${siteUrl}/uz`,
      },
    },
    openGraph: {
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      url: `${siteUrl}/${validLocale}`,
      locale:
        validLocale === "uz"
          ? "uz_UZ"
          : validLocale === "ru"
          ? "ru_RU"
          : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar locale={locale} dict={dict.nav} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
