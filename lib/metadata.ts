import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { site } from "@/content/site";

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
  const resolvedTitle = title ?? seo.defaultTitle;
  const resolvedDescription = description ?? seo.defaultDescription;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: `${site.url}${path}`,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: `${site.url}${path}`,
      siteName: seo.defaultTitle,
      locale: "ko_KR",
      type: "website",
    },
  };
}
