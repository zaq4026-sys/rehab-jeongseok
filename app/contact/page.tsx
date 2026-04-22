import type { Metadata } from "next";
import { Fragment } from "react";
import { FadeUp } from "@/components/common/FadeUp";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LocationCTA } from "@/components/sections/LocationCTA";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — 재활의정석 | 상담·예약·문의",
  description:
    "광주 재활의정석 전문운동센터 상담·예약·문의. 네이버 예약, 전화(062-447-7377), 당근마켓 채널로 연락 가능합니다.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — 재활의정석",
    description:
      "네이버 예약·전화·당근마켓 어느 쪽이든 편한 방법으로 연락 주세요.",
    url: "/contact",
  },
};

type ContactCard = {
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  external?: boolean;
  primary?: boolean;
  ariaLabel: string;
};

const contactCards: ContactCard[] = [
  {
    kicker: "NAVER BOOKING",
    title: "네이버 예약",
    description:
      "원하는 날짜와 시간을 직접 선택하고 싶은 분. 24시간 예약 가능.",
    ctaLabel: "네이버 예약 페이지 열기",
    href: site.links.naverBooking,
    external: true,
    primary: true,
    ariaLabel: "네이버 예약 페이지 열기 (새 창)",
  },
  {
    kicker: "CALL DIRECTLY",
    title: "전화 상담",
    description:
      "062-447-7377 — 증상을 바로 설명하고 싶거나, 빠르게 연락이 필요한 분. 평일 07:00 – 23:00.",
    ctaLabel: "062-447-7377로 전화 걸기",
    href: `tel:${site.phone.replaceAll("-", "")}`,
    ariaLabel: `전화로 상담 문의: ${site.phoneDisplay}`,
  },
  {
    kicker: "DAANGN CHAT",
    title: "당근마켓 문의",
    description:
      "당근 이용자 또는 가벼운 텍스트 문의가 편한 분. 동네 이웃 문의 환영.",
    ctaLabel: "당근 채널 열기",
    href: site.links.daangn,
    external: true,
    ariaLabel: "당근마켓 채널 열기 (새 창)",
  },
  {
    kicker: "NAVER PLACE",
    title: "후기 먼저 보기",
    description:
      "결정 전에 실제 방문하신 분들의 후기를 더 읽어보고 싶은 분.",
    ctaLabel: "후기 100+ 보러 가기",
    href: site.links.naverPlace,
    external: true,
    ariaLabel: "네이버 플레이스 후기 보기 (새 창)",
  },
];

function ContactCardLink({ card }: { card: ContactCard }) {
  const articleClass = card.primary
    ? "h-full border border-brand bg-brand-light p-8 transition-all duration-500 ease-calm group-hover:border-brand-dark group-hover:bg-brand-light lg:p-10"
    : "h-full border border-line bg-white p-8 transition-all duration-500 ease-calm group-hover:border-brand group-hover:bg-ivory lg:p-10";

  return (
    <a
      href={card.href}
      target={card.external ? "_blank" : undefined}
      rel={card.external ? "noopener noreferrer" : undefined}
      aria-label={card.ariaLabel}
      className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <article className={articleClass}>
        <p className="mb-5 font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-brand lg:mb-6">
          {card.kicker}
        </p>
        <h3 className="break-keep font-serif text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-charcoal lg:text-3xl">
          {card.title}
        </h3>
        <div className="my-6 h-px w-10 bg-line transition-all duration-500 ease-calm group-hover:w-16 group-hover:bg-brand lg:my-8" />
        <p className="mb-8 break-keep font-sans text-sm leading-7 text-muted lg:mb-10 lg:text-base lg:leading-8">
          {card.description}
        </p>
        <div className="flex items-center gap-2 font-en text-[11px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors duration-500 ease-calm group-hover:text-brand">
          <span>{card.ctaLabel}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-500 ease-calm group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </article>
    </a>
  );
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto w-full max-w-6xl px-6">
          <FadeUp delayMs={0}>
            <SectionHeading
              kicker="CONTACT"
              title="편한 방법으로 연락 주세요."
              description="상담만으로는 비용이 발생하지 않습니다. 현재 증상과 궁금한 점을 먼저 듣고, 방문이 필요한지 함께 판단합니다."
              titleAs="h1"
            />
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-24 lg:gap-8">
            {contactCards.map((card, index) => (
              <FadeUp key={card.kicker} delayMs={120 + index * 80}>
                <ContactCardLink card={card} />
              </FadeUp>
            ))}
          </div>

          <FadeUp delayMs={480}>
            <section
              aria-labelledby="contact-hours-heading"
              className="mt-24 lg:mt-32"
            >
              <div className="max-w-3xl">
                <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  HOURS
                </p>
                <h2
                  id="contact-hours-heading"
                  className="break-keep font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal sm:text-5xl"
                >
                  문의 가능 시간
                </h2>
                <p className="mt-6 break-keep font-sans text-base leading-8 text-muted sm:text-lg">
                  전화 상담은 운영시간 내에 가능합니다. 네이버 예약과 당근은
                  24시간 접수되며, 운영시간에 순차적으로 확인합니다.
                </p>
              </div>

              <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 border-t border-line pt-8 md:grid-cols-[10rem_1fr]">
                {site.hours.map((hour) => (
                  <Fragment key={hour.label}>
                    <dt className="font-serif text-sm text-muted md:pt-1 lg:text-base">
                      {hour.label}
                    </dt>
                    <dd className="font-serif text-lg text-charcoal lg:text-xl">
                      {hour.value}
                    </dd>
                  </Fragment>
                ))}
              </dl>
            </section>
          </FadeUp>
        </div>
      </section>

      <LocationCTA />
    </main>
  );
}
