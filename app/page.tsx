import { BeforeAfterComparison } from "@/components/sections/BeforeAfterComparison";
import { CredentialCards } from "@/components/sections/CredentialCards";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProgramAreas } from "@/components/sections/ProgramAreas";
import { ProcessSteps } from "@/components/sections/ProcessSteps";

export default function Page() {
  return (
    <main>
      <HomeHero />
      <CredentialCards />
      <BeforeAfterComparison />
      <ProcessSteps />
      <ProgramAreas />
    </main>
  );
}
