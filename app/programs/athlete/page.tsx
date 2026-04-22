import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/programs/ProgramPageTemplate";
import { getProgramBySlug } from "@/content/programs";

const program = getProgramBySlug("athlete");

export function generateMetadata(): Metadata {
  if (!program) return {};

  return {
    title: program.seo.title,
    description: program.seo.description,
    keywords: program.seo.keywords,
    alternates: { canonical: "/programs/athlete" },
    openGraph: {
      title: program.seo.title,
      description: program.seo.description,
      url: "/programs/athlete",
    },
  };
}

export default function AthleteProgramPage() {
  if (!program) return null;

  return <ProgramPageTemplate program={program} />;
}
