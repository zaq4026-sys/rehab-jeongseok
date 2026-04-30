import Link from "next/link";
import { FadeUp } from "@/components/common/FadeUp";
import { Section } from "@/components/common/Section";
import { NaverBookingLink } from "@/components/ui/NaverBookingLink";
import { site } from "@/content/site";

type TextSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

type ItemSection = {
  eyebrow: string;
  title: string;
  intro?: string;
  items: Array<{
    eyebrow: string;
    title: string;
    description: string;
  }>;
};

type ChecklistSection = {
  eyebrow: string;
  title: string;
  intro: string | string[];
  items: string[];
  outro?: string;
};

type NextStepSection = {
  eyebrow: string;
  title: string;
  intro?: string;
  links: Array<{
    eyebrow: string;
    title: string;
    href: string;
  }>;
};

type ApproachContentSection =
  | { type: "text"; data: TextSection }
  | { type: "items"; data: ItemSection }
  | { type: "checklist"; data: ChecklistSection }
  | { type: "next"; data: NextStepSection };

export type ApproachDetailPageData = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
  };
  sections: ApproachContentSection[];
  ctaTitle: string;
};

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="break-keep font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal md:text-5xl">
      {children}
    </h2>
  );
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-8 grid gap-6 lg:gap-8">
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="break-keep font-serif text-base leading-8 tracking-[-0.01em] text-charcoal/85 lg:text-lg lg:leading-9"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function TextBlock({ section }: { section: TextSection }) {
  return (
    <FadeUp delayMs={0}>
      <div className="max-w-4xl">
        <Eyebrow>{section.eyebrow}</Eyebrow>
        <SectionTitle>{section.title}</SectionTitle>
        <Paragraphs paragraphs={section.paragraphs} />
      </div>
    </FadeUp>
  );
}

function ItemGrid({ section }: { section: ItemSection }) {
  return (
    <>
      <FadeUp delayMs={0}>
        <div className="max-w-4xl">
          <Eyebrow>{section.eyebrow}</Eyebrow>
          <SectionTitle>{section.title}</SectionTitle>
          {section.intro ? (
            <p className="mt-6 max-w-3xl break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80">
              {section.intro}
            </p>
          ) : null}
        </div>
      </FadeUp>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {section.items.map((item, index) => (
          <FadeUp key={`${item.eyebrow}-${item.title}`} delayMs={120 + index * 80}>
            <article className="h-full border border-line bg-white p-8 transition-colors duration-500 ease-calm hover:border-brand lg:p-10">
              <p className="font-en text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                {item.eyebrow}
              </p>
              <h3 className="mt-5 break-keep font-serif text-2xl font-semibold tracking-[-0.02em] text-charcoal lg:text-3xl">
                {item.title}
              </h3>
              <div className="my-7 h-px w-10 bg-line" />
              <p className="break-keep font-sans text-base leading-8 text-muted">
                {item.description}
              </p>
            </article>
          </FadeUp>
        ))}
      </div>
    </>
  );
}

function ChecklistBlock({ section }: { section: ChecklistSection }) {
  const introParagraphs = Array.isArray(section.intro)
    ? section.intro
    : [section.intro];

  return (
    <FadeUp delayMs={0}>
      <div className="max-w-4xl">
        <Eyebrow>{section.eyebrow}</Eyebrow>
        <SectionTitle>{section.title}</SectionTitle>
        <div className="mt-8 grid gap-6">
          {introParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="break-keep font-serif text-base leading-8 tracking-[-0.01em] text-charcoal/85 lg:text-lg lg:leading-9"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="mt-8 grid gap-4">
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span className="shrink-0 font-en text-sm font-semibold leading-8 text-brand">
                —
              </span>
              <span className="break-keep font-sans text-base leading-8 text-charcoal">
                {item}
              </span>
            </li>
          ))}
        </ul>
        {section.outro ? (
          <p className="mt-8 break-keep font-serif text-base leading-8 tracking-[-0.01em] text-charcoal/85 lg:text-lg lg:leading-9">
            {section.outro}
          </p>
        ) : null}
      </div>
    </FadeUp>
  );
}

function NextStepBlock({ section }: { section: NextStepSection }) {
  return (
    <>
      <FadeUp delayMs={0}>
        <div className="max-w-4xl">
          <Eyebrow>{section.eyebrow}</Eyebrow>
          <SectionTitle>{section.title}</SectionTitle>
          {section.intro ? (
            <p className="mt-8 break-keep font-serif text-base leading-8 tracking-[-0.01em] text-charcoal/85 lg:text-lg lg:leading-9">
              {section.intro}
            </p>
          ) : null}
        </div>
      </FadeUp>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {section.links.map((link, index) => (
          <FadeUp key={link.href} delayMs={120 + index * 120}>
            <Link
              href={link.href}
              className="group block border border-line bg-white p-8 transition-colors duration-500 ease-calm hover:border-brand hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <p className="font-en text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                {link.eyebrow}
              </p>
              <p className="mt-4 font-serif text-2xl font-semibold tracking-[-0.02em] text-charcoal transition-colors duration-500 ease-calm group-hover:text-brand lg:text-3xl">
                {link.title}
              </p>
            </Link>
          </FadeUp>
        ))}
      </div>
    </>
  );
}

function renderSection(section: ApproachContentSection) {
  if (section.type === "text") {
    return <TextBlock section={section.data} />;
  }

  if (section.type === "items") {
    return <ItemGrid section={section.data} />;
  }

  if (section.type === "checklist") {
    return <ChecklistBlock section={section.data} />;
  }

  return <NextStepBlock section={section.data} />;
}

/**
 * Shared template for the three approach detail pages.
 * Keeps the SEO landing pages visually consistent while preserving page-specific copy.
 */
export function ApproachDetailPage({ data }: { data: ApproachDetailPageData }) {
  return (
    <main className="bg-ivory">
      <Section tone="ivory" innerClassName="max-w-6xl">
        <FadeUp delayMs={0}>
          <div className="max-w-4xl">
            <Eyebrow>{data.hero.eyebrow}</Eyebrow>
            <h1 className="break-keep font-serif text-6xl font-semibold leading-[1.05] tracking-[-0.03em] text-charcoal md:text-7xl lg:text-8xl">
              {data.hero.title}
            </h1>
            <p className="mt-8 break-keep font-serif text-2xl font-semibold leading-tight tracking-[-0.02em] text-charcoal md:text-3xl lg:text-4xl">
              {data.hero.subtitle}
            </p>
            <p className="mt-6 max-w-3xl break-keep font-sans text-base leading-8 text-muted md:text-lg md:leading-9">
              {data.hero.description}
            </p>
          </div>
        </FadeUp>
      </Section>

      {data.sections.map((section, index) => (
        <Section
          key={`${section.data.eyebrow}-${section.data.title}`}
          tone={index % 2 === 0 ? "white" : "ivory"}
          innerClassName="max-w-6xl"
        >
          {renderSection(section)}
        </Section>
      ))}

      <Section tone="white" innerClassName="max-w-6xl">
        <FadeUp delayMs={0}>
          <div className="border border-line bg-ivory p-8 lg:p-12">
            <h2 className="break-keep font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-charcoal md:text-4xl">
              {data.ctaTitle}
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <NaverBookingLink
                ariaLabel="네이버 예약 페이지에서 1:1 상담 예약하기"
                className="inline-flex min-h-12 items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors duration-300 ease-calm hover:bg-brand-dark active:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                1:1 상담 예약
              </NaverBookingLink>
              <a
                href={`tel:${site.phone.replaceAll("-", "")}`}
                aria-label={`전화로 상담 문의: ${site.phoneDisplay}`}
                className="inline-flex min-h-12 items-center justify-center border border-line bg-transparent px-6 text-sm font-semibold text-charcoal transition-colors duration-300 ease-calm hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </FadeUp>
      </Section>
    </main>
  );
}
