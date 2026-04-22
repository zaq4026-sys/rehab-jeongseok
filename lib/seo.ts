import { site } from "@/content/site";

type SchemaValue =
  | string
  | number
  | boolean
  | null
  | SchemaValue[]
  | { [key: string]: SchemaValue };

function isTodoAddress(value: string) {
  return value.trim().length === 0 || value.includes("TODO");
}

export function buildLocalBusinessSchema(): Record<string, SchemaValue> {
  // TODO: Vercel 배포 도메인 확정 후 실제 공식 URL로 교체.
  const officialUrl = "https://TODO-domain.com";

  const schema: Record<string, SchemaValue> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: site.name,
    url: officialUrl,
    telephone: site.phone,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [site.links.naverPlace, site.links.kakao, site.links.daangn].filter(
      Boolean,
    ),
    medicalSpecialty: "PhysicalTherapy",
  };

  if (!isTodoAddress(site.address.text)) {
    schema.address = {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressLocality: "광주광역시",
      streetAddress: site.address.text,
    };
  }

  return schema;
}
