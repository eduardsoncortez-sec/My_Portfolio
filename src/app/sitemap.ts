import type { MetadataRoute } from "next";
import { projects } from "@/content/portfolio";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ["/", "/start-a-project", ...projects.map(project => `/projects/${project.slug}`)].map(path => ({ url: new URL(path, siteUrl).toString() }));
}
