import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/programs/ProgramPageTemplate";
import { getProgramBySlug } from "@/content/programs";

const program = getProgramBySlug("parkinsons");

export function generateMetadata(): Metadata {
  if (!program) return {};

  return {
    title: program.seo.title,
    description: program.seo.description,
    keywords: program.seo.keywords,
    alternates: { canonical: "/programs/parkinsons" },
    openGraph: {
      title: program.seo.title,
      description: program.seo.description,
      url: "/programs/parkinsons",
    },
  };
}

export default function ParkinsonsProgramPage() {
  if (!program) return null;

  return <ProgramPageTemplate program={program} />;
}
