import { BeforeAfterComparison } from "@/components/sections/BeforeAfterComparison";
import { CredentialCards } from "@/components/sections/CredentialCards";
import { HomeHero } from "@/components/sections/HomeHero";

export default function Page() {
  return (
    <main>
      <HomeHero />
      <CredentialCards />
      <BeforeAfterComparison />
    </main>
  );
}
