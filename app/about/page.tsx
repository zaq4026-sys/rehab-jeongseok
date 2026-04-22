import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { FadeUp } from "@/components/common/FadeUp";
import { LocationCTA } from "@/components/sections/LocationCTA";

export const metadata: Metadata = {
  title: "About — 재활의정석 | 황제원 대표 소개",
  description:
    "재활의정석은 평가(Evaluation)에서 시작해 회복과 수행력으로 이어지는 원칙 중심의 재활을 추구합니다. 대표 황제원 물리치료사가 직접 평가하고 관리합니다.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — 재활의정석",
    description: "원칙 중심의 재활, 대표가 직접 관리하는 1:1 재활운동",
    url: "/about",
    images: [
      {
        url: "/images/director/portrait-primary.jpg",
        width: 1600,
        height: 2400,
        alt: "재활의정석 대표 황제원 물리치료사",
      },
    ],
  },
};

const workMethods = [
  {
    title: "평가가 먼저입니다",
    description:
      "문제를 정의하지 못한 상태에서 운동을 시작하지 않습니다. 첫 세션은 30~60분 평가와 시범 세션으로 진행됩니다.",
  },
  {
    title: "대표가 직접 관리합니다",
    description:
      "평가한 사람이 프로그램을 설계하고, 설계한 사람이 직접 지도합니다. 중간에 다른 담당자로 넘어가지 않습니다.",
  },
  {
    title: "통증 이후까지 책임집니다",
    description:
      "통증 감소가 끝이 아닙니다. 근력 회복과 일상 복귀, 그리고 재발 방지까지가 하나의 과정입니다.",
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

export default function AboutPage() {
  return (
    <main className="bg-ivory">
      <PageSection>
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <FadeUp delayMs={0}>
            <Eyebrow>About — 재활의정석</Eyebrow>
            <h1 className="break-keep font-serif text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-charcoal md:text-6xl lg:text-7xl">
              &quot;정석(正石)&quot;이라는 이름으로 일합니다
            </h1>
            <p className="mt-8 max-w-xl break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80 md:text-2xl md:leading-10">
              편법이 아닌 원칙으로, 일시적 완화가 아닌 근본 회복으로.
              재활의정석은 통증과 움직임을 다루는 방식에 대한 저의
              기준입니다.
            </p>
          </FadeUp>

          <FadeUp delayMs={140}>
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[28rem] overflow-hidden border border-line bg-white md:max-w-none">
              <Image
                src="/images/director/portrait-primary.jpg"
                alt="재활의정석 대표 황제원 물리치료사"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </PageSection>

      <PageSection className="bg-white">
        <FadeUp delayMs={0}>
          <div className="max-w-3xl">
            <SectionTitle>재활에도, 정석(正石)이 있습니다</SectionTitle>
            <div className="mt-10 space-y-7 break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80">
              <p>
                많은 재활이 &quot;아프지 않게 하는 것&quot;에서 멈춥니다.
                하지만 통증이 사라졌다고 몸이 회복된 것은 아닙니다.
              </p>
              <p>
                재활의정석은 평가(Evaluation)에서 시작해 회복(Recovery)을
                거쳐 수행력(Performance)에 도달하는 순서를 원칙으로
                삼습니다. 이 순서를 건너뛰지 않는 것, 그것이 정석입니다.
              </p>
              <p>
                저는 통증이 사라진 상태를 넘어, 다치기 전보다 더 나은 몸으로
                돌아가는 것을 목표로 합니다.
              </p>
            </div>
          </div>
        </FadeUp>
      </PageSection>

      <PageSection>
        <FadeUp delayMs={0}>
          <div className="max-w-3xl">
            <SectionTitle>황제원 대표</SectionTitle>
            <div className="mt-10 space-y-7 break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80">
              <p>
                고려대학교 의과대학원에서 스포츠의학 석사를 수료하고,
                물리치료사 면허를 기반으로 재활 현장에 서왔습니다.
              </p>
              <p>
                병원 재활실에서 수술 직후의 환자들을, 피트니스 현장에서 운동
                중 다친 사람들을, 스포츠 현장에서 복귀를 앞둔 선수들을
                만나왔습니다. 서로 다른 현장에서 같은 원칙이 통한다는 사실이
                지금의 재활의정석을 만들었습니다.
              </p>
              <p>
                모든 회원의 프로그램은 제가 직접 평가하고, 직접 설계합니다.
              </p>
            </div>
          </div>
        </FadeUp>
      </PageSection>

      <PageSection className="bg-white">
        <FadeUp delayMs={0}>
          <SectionTitle>제가 일하는 방식</SectionTitle>
        </FadeUp>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {workMethods.map((method, index) => (
            <FadeUp key={method.title} delayMs={120 + index * 120}>
              <article className="h-full border border-line bg-ivory p-8 lg:p-10">
                <h3 className="break-keep font-serif text-2xl font-semibold tracking-[-0.02em] text-charcoal">
                  {method.title}
                </h3>
                <div className="my-7 h-px w-10 bg-line" />
                <p className="break-keep font-sans text-base leading-8 text-muted">
                  {method.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <FadeUp delayMs={0}>
          <div className="max-w-3xl">
            <SectionTitle>이력</SectionTitle>
            <p className="mt-10 break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80">
              고려대학교 의과대학원 스포츠의학 석사 · 물리치료사 면허 · 병원
              재활실 및 스포츠 현장 실무
            </p>
          </div>
        </FadeUp>
      </PageSection>

      <LocationCTA />
    </main>
  );
}
