import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // TODO: Vercel 배포 도메인 확정 후 host/sitemap URL 교체.
  const siteUrl = "https://TODO-domain.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
