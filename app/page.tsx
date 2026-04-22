import { BeforeAfterComparison } from "@/components/sections/BeforeAfterComparison";
import { CredentialCards } from "@/components/sections/CredentialCards";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { HomeHero } from "@/components/sections/HomeHero";
import { LocationCTA } from "@/components/sections/LocationCTA";
import { ProfileSummary } from "@/components/sections/ProfileSummary";
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
      <ProfileSummary />
      <CustomerReviews />
      <LocationCTA />
    </main>
  );
}
