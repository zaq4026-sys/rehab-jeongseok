import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/programs/ProgramPageTemplate";
import { getProgramBySlug } from "@/content/programs";

const program = getProgramBySlug("neck-shoulder");

export function generateMetadata(): Metadata {
  if (!program) return {};

  return {
    title: program.seo.title,
    description: program.seo.description,
    keywords: program.seo.keywords,
    alternates: { canonical: "/programs/neck-shoulder" },
    openGraph: {
      title: program.seo.title,
      description: program.seo.description,
      url: "/programs/neck-shoulder",
    },
  };
}

export default function NeckShoulderProgramPage() {
  if (!program) return null;

  return <ProgramPageTemplate program={program} />;
}
