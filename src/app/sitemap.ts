import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/data/dictionaries";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://maxmudmv.vercel.app";
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of SUPPORTED_LOCALES) {
    // Static routes per locale
    const staticRoutes = ["", "/projects", "/about", "/contact"];
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.85,
      });
    }

    // Dynamic project case study routes per locale
    for (const proj of projectsData) {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${proj.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
