import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Vercel 배포 도메인 확정 후 교체.
  const siteUrl = "https://TODO-domain.com";

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
