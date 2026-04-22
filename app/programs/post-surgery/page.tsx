import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/programs/ProgramPageTemplate";
import { getProgramBySlug } from "@/content/programs";

const program = getProgramBySlug("post-surgery");

export function generateMetadata(): Metadata {
  if (!program) return {};

  return {
    title: program.seo.title,
    description: program.seo.description,
    keywords: program.seo.keywords,
    alternates: { canonical: "/programs/post-surgery" },
    openGraph: {
      title: program.seo.title,
      description: program.seo.description,
      url: "/programs/post-surgery",
    },
  };
}

export default function PostSurgeryProgramPage() {
  if (!program) return null;

  return <ProgramPageTemplate program={program} />;
}
