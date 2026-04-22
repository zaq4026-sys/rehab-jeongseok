import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { CTAButton } from "@/components/common/CTAButton";
import { FadeUp } from "@/components/common/FadeUp";
import { LocationCTA } from "@/components/sections/LocationCTA";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Approach — 진행 방식 | 재활의정석",
  description:
    "재활의정석의 3단계 원칙(평가·회복·수행력)과 10·30·50세션 마일스톤. 첫 세션은 30~60분 평가 + 시범으로 진행됩니다.",
  alternates: { canonical: "/approach" },
  openGraph: {
    title: "Approach — 재활의정석 진행 방식",
    description: "평가에서 시작해, 10·30·50세션으로 완성되는 재활 로드맵",
    url: "/approach",
  },
};

const principles = [
  {
    id: "assessment",
    title: "Evaluation — 평가",
    description:
      "통증의 원인, 움직임의 제한, 근력의 불균형을 먼저 파악합니다. 평가 없는 운동은 추측일 뿐입니다.",
  },
  {
    id: "recovery",
    title: "Recovery — 회복",
    description:
      "파악된 문제를 해결하는 단계입니다. 통증과 기능 제한을 우선 제거하고, 안전한 움직임을 다시 학습합니다.",
  },
  {
    id: "performance",
    title: "Performance — 수행력",
    description:
      "일상·운동·스포츠에서 실제로 쓸 수 있는 몸으로 만듭니다. 재발하지 않는 근력과 움직임 패턴을 갖춥니다.",
  },
];

const firstSession = [
  { label: "소요 시간", value: "30–60분" },
  {
    label: "구성",
    value: "상담 → 움직임 평가 → 시범 세션 → Before/After 비교",
  },
  { label: "예약 방법", value: "전화 062-447-7377 또는 네이버 예약" },
  { label: "복장", value: "운동복 현장 제공 (별도 준비 불필요)" },
];

const milestones = [
  {
    number: "10",
    label: "RESET",
    goal: "통증 강도와 빈도의 감소",
    description:
      "첫 2~3개월. 평가에서 확인된 문제를 직접 다루는 시기입니다. 통증이 줄고, 움직임이 편해지는 것을 체감합니다.",
  },
  {
    number: "30",
    label: "ZERO",
    goal: "장기적인 무통증 상태, 일상 복귀",
    description:
      "통증이 사라진 상태를 유지하는 단계입니다. 일상 동작에서 더 이상 통증이 걸림돌이 되지 않습니다.",
  },
  {
    number: "50",
    label: "BEYOND",
    goal: "근육량·근력 증가, 다치기 전보다 건강한 몸",
    description:
      "통증 관리에서 수행력 향상으로. 재발하지 않는 몸, 다음 부상을 예방하는 몸을 만듭니다.",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
      {children}
    </p>
  );
}

function PageSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="break-keep font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal md:text-5xl">
      {children}
    </h2>
  );
}

export default function ApproachPage() {
  return (
    <main className="bg-ivory">
      <PageSection>
        <FadeUp delayMs={0}>
          <div className="max-w-4xl">
            <Eyebrow>Approach — 진행 방식</Eyebrow>
            <h1 className="break-keep font-serif text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-charcoal md:text-6xl lg:text-7xl">
              평가에서 시작해, 당신이 원하는 몸까지
            </h1>
            <p className="mt-8 max-w-3xl break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80 md:text-2xl md:leading-10">
              재활의정석은 3단계 원칙과 10·30·50세션 마일스톤으로
              진행됩니다. 지금 어느 단계에 계신지, 어디까지 갈 수 있는지
              명확하게 안내합니다.
            </p>
          </div>
        </FadeUp>
      </PageSection>

      <PageSection className="bg-white">
        <FadeUp delayMs={0}>
          <SectionTitle>원칙은 세 단계입니다</SectionTitle>
        </FadeUp>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {principles.map((principle, index) => (
            <FadeUp key={principle.id} delayMs={120 + index * 120}>
              <article
                id={principle.id}
                className="h-full scroll-mt-28 border border-line bg-ivory p-8 lg:p-10"
              >
                <h3 className="break-keep font-serif text-2xl font-semibold tracking-[-0.02em] text-charcoal">
                  {principle.title}
                </h3>
                <div className="my-7 h-px w-10 bg-line" />
                <p className="break-keep font-sans text-base leading-8 text-muted">
                  {principle.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <FadeUp delayMs={0}>
          <SectionTitle>첫 세션은 이렇게 진행됩니다</SectionTitle>
        </FadeUp>

        <FadeUp delayMs={120}>
          <div className="mt-12 border border-line bg-white p-8 lg:p-10">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-3 text-base md:grid-cols-[7rem_1fr] md:gap-y-5 md:text-lg">
              {firstSession.map((item) => (
                <Fragment key={item.label}>
                  <dt className="font-sans text-sm font-semibold text-muted md:leading-8">
                    {item.label}
                  </dt>
                  <dd className="break-keep pb-5 font-sans leading-8 text-charcoal md:pb-0">
                    {item.value}
                  </dd>
                </Fragment>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <a
                href={`tel:${site.phone.replaceAll("-", "")}`}
                aria-label={`전화로 예약하기: ${site.phoneDisplay}`}
                className="inline-flex min-h-12 items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors duration-300 ease-calm hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                전화로 예약하기
              </a>
              <CTAButton
                href={site.links.naverBooking}
                external
                variant="secondary"
                ariaLabel="네이버 예약 페이지로 이동 (새 창)"
              >
                네이버 예약
              </CTAButton>
            </div>
          </div>
        </FadeUp>
      </PageSection>

      <PageSection className="bg-white">
        <FadeUp delayMs={0}>
          <div className="max-w-4xl">
            <Eyebrow>Signature Milestone</Eyebrow>
            <SectionTitle>10 · 30 · 50세션, 세 개의 분기점</SectionTitle>
            <p className="mt-6 max-w-3xl break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80">
              막연히 다니는 것이 아니라, 각 분기점마다 도달해야 할 상태가
              정해져 있습니다.
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {milestones.map((milestone, index) => (
            <FadeUp key={milestone.number} delayMs={120 + index * 120}>
              <article className="h-full border border-line bg-ivory p-8 transition-colors duration-500 ease-calm hover:border-brand lg:p-10">
                <p className="font-serif text-6xl font-semibold leading-none tracking-[-0.03em] text-brand md:text-7xl">
                  {milestone.number}
                </p>
                <p className="mt-4 font-en text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                  {milestone.label}
                </p>
                <div className="my-8 h-px w-12 bg-line" />
                <p className="break-keep font-sans text-sm font-semibold leading-7 text-charcoal">
                  목표: {milestone.goal}
                </p>
                <p className="mt-5 break-keep font-sans text-base leading-8 text-muted">
                  {milestone.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </PageSection>

      <LocationCTA />
    </main>
  );
}
