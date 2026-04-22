import { site } from "@/content/site";

type SchemaValue =
  | string
  | number
  | boolean
  | null
  | SchemaValue[]
  | { [key: string]: SchemaValue };

function isFilledString(value: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function buildLocalBusinessSchema(): Record<string, SchemaValue> {
  const schema: Record<string, SchemaValue> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: site.name,
    url: site.url,
    telephone: "+82-62-447-7377",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "KR",
    },
    openingHoursSpecification: site.hours
      .filter((hour) => hour.dayOfWeek && hour.opens && hour.closes)
      .map((hour) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: hour.dayOfWeek ?? "",
        opens: hour.opens ?? "",
        closes: hour.closes ?? "",
      })),
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    sameAs: [
      site.links.naverPlace,
      site.kakaoChannelUrl,
      site.links.daangn,
    ].filter(isFilledString),
    medicalSpecialty: "PhysicalTherapy",
  };

  return schema;
}
