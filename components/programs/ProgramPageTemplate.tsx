import { LocationCTA } from "@/components/sections/LocationCTA";
import type { Program } from "@/content/programs";
import { ProgramApproach } from "./ProgramApproach";
import { ProgramAudience } from "./ProgramAudience";
import { ProgramFirstEval } from "./ProgramFirstEval";
import { ProgramHero } from "./ProgramHero";
import { ProgramMilestone } from "./ProgramMilestone";

type ProgramPageTemplateProps = {
  program: Program;
};

/**
 * Full detail-page template for Phase B program pages.
 * Data comes from `content/programs.ts` so each page keeps the same structure.
 */
export function ProgramPageTemplate({ program }: ProgramPageTemplateProps) {
  return (
    <main>
      <ProgramHero program={program} />
      <ProgramAudience program={program} />
      <ProgramApproach program={program} />
      <ProgramMilestone program={program} />
      <ProgramFirstEval program={program} />
      <LocationCTA />
    </main>
  );
}
