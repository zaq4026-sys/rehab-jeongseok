import type { Metadata } from "next";
import { seo } from "@/content/seo";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataInput = {}): Metadata {
  // TODO: Vercel 배포 도메인 확정 후 교체.
  const siteUrl = "https://TODO-domain.com";
  const resolvedTitle = title ?? seo.defaultTitle;
  const resolvedDescription = description ?? seo.defaultDescription;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: `${siteUrl}${path}`,
      siteName: seo.defaultTitle,
      locale: "ko_KR",
      type: "website",
    },
  };
}
