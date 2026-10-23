import type { Metadata } from "next";
import "./globals.css";
import { profileData } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maxmudmv.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elmurodov Mahmud | Data Analyst & Data Scientist Portfolio",
    template: "%s | Elmurodov Mahmud",
  },
  description:
    "Elmurodov Mahmud Zarifjon oʻgʻli — Data Analyst va Data Scientist portfeli. SQL, MS Excel, Power BI, Python (NumPy, pandas, Matplotlib, Seaborn).",
  authors: [{ name: "Elmurodov Mahmud Zarifjon o'g'li" }],
  creator: "Elmurodov Mahmud",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["en_US", "ru_RU"],
    url: siteUrl,
    siteName: "Elmurodov Mahmud — Data Analyst Portfolio",
    title: "Elmurodov Mahmud | Data Analyst & Data Scientist",
    description:
      "SQL, MS Excel, Power BI, Python (NumPy, pandas, Matplotlib, Seaborn) hamda biznes jarayonlarini raqamlashtirish boʻyicha shaxsiy portfel.",
    images: [
      {
        url: "/images/mahmud.jpg",
        width: 800,
        height: 800,
        alt: "Elmurodov Mahmud Zarifjon o'g'li",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.fullName.uz,
    alternateName: [profileData.fullName.en, profileData.fullName.ru],
    jobTitle: "Data Analyst | Data Scientist",
    url: siteUrl,
    image: `${siteUrl}${profileData.photoUrl}`,
    email: `mailto:${profileData.contact.email}`,
    telephone: profileData.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Tashkent University of Information Technologies (TATU)",
    },
    sameAs: [
      profileData.contact.githubUrl,
      profileData.contact.linkedinUrl,
      profileData.contact.telegramUrl,
      profileData.contact.leetcodeUrl,
    ],
    knowsAbout: [
      "Data Analysis",
      "Business Intelligence",
      "SQL",
      "Microsoft Power BI",
      "MS Excel",
      "Python",
      "NumPy",
      "pandas",
      "Matplotlib",
      "Seaborn",
    ],
  };

  return (
    <html
      lang="uz"
      className="dark"
      suppressHydrationWarning
    >
      <body className="ambient-grid min-h-screen bg-obsidian-950 font-sans text-slate-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
