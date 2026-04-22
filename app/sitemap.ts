import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
