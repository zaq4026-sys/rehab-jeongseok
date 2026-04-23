import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { NaverBookingLink } from "@/components/ui/NaverBookingLink";

type ProgramPageTemplateProps = {
  title: string;
  kicker: string;
  targetSymptoms: string[];
  differentiators: string[];
  processApplication: {
    step: string;
    description: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  ctaText?: string;
};

/**
 * Shared landing-page template for body- and condition-specific program pages.
 * Actual page copy is injected from content/programs.ts.
 */
export function ProgramPageTemplate({
  title,
  kicker,
  targetSymptoms,
  differentiators,
  processApplication,
  faqs,
  ctaText = "1:1 상담 예약",
}: ProgramPageTemplateProps) {
  return (
    <main>
      <Section>
        <SectionHeading titleAs="h1" kicker={kicker} title={title} />
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-3xl font-semibold">
              이런 분께 권합니다
            </h2>
            <ul className="grid gap-3 text-muted">
              {targetSymptoms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-serif text-3xl font-semibold">
              우리는 이렇게 다르게 봅니다
            </h2>
            <ul className="grid gap-3 text-muted">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="mb-8 font-serif text-3xl font-semibold">
          3단계 모델 적용
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {processApplication.map((item) => (
            <article key={item.step} className="border border-line bg-white p-6">
              <p className="mb-4 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                {item.step}
              </p>
              <p className="leading-8 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <h2 className="mb-8 font-serif text-3xl font-semibold">FAQ</h2>
        <div className="grid gap-5">
          {faqs.map((item) => (
            <article key={item.q} className="border-b border-line pb-5">
              <h3 className="font-semibold text-charcoal">{item.q}</h3>
              <p className="mt-3 leading-8 text-muted">{item.a}</p>
            </article>
          ))}
        </div>
        <NaverBookingLink
          ariaLabel="네이버 예약 페이지 열기"
          className="mt-10 inline-flex min-h-12 items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors duration-300 ease-calm hover:bg-brand-dark active:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          {ctaText}
        </NaverBookingLink>
      </Section>
    </main>
  );
}
