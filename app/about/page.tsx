import type { Metadata } from "next";
import Image from "next/image";
import type { HTMLAttributes, ReactNode } from "react";
import { FadeUp } from "@/components/common/FadeUp";
import { LocationCTA } from "@/components/sections/LocationCTA";

export const metadata: Metadata = {
  title: "About — 재활의정석 | 황제원 대표 소개",
  description:
    "재활의정석은 평가(Evaluation)에서 시작해 회복과 수행력으로 이어지는 원칙 중심의 재활을 추구합니다. 고려대학교 융합과학대학원 스포츠의학과 석사과정을 밟고 있는 대표 황제원 물리치료사가 직접 평가하고 관리합니다.",
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

const workPhotos = [
  {
    src: "/images/director/assessing.png",
    alt: "대표가 방문자의 움직임을 평가하는 모습",
  },
  {
    src: "/images/director/correcting.png",
    alt: "대표가 운동 동작을 수정하는 모습",
  },
  {
    src: "/images/director/exercise-leading.png",
    alt: "대표가 운동을 지도하는 모습",
  },
  {
    src: "/images/director/consulting.png",
    alt: "대표가 상담을 진행하는 모습",
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
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-24 md:py-32 ${className}`} {...props}>
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
                className="object-cover object-top"
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
                고려대학교 융합과학대학원 스포츠의학과 석사 과정을 밟고
                있으며, 물리치료사 면허를 기반으로 재활 현장에 서왔습니다.
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workPhotos.map((photo, index) => (
            <FadeUp key={photo.src} delayMs={480 + index * 80}>
              <div className="relative aspect-[4/5] overflow-hidden border border-line bg-ivory">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </PageSection>

      <PageSection aria-labelledby="case-story-heading">
        <div className="max-w-4xl">
            <FadeUp delayMs={0}>
              <Eyebrow>CASE STORY</Eyebrow>
              <h2
                id="case-story-heading"
                className="break-keep font-serif text-3xl font-semibold tracking-[-0.025em] text-charcoal lg:text-4xl xl:text-5xl"
              >
                1년을 돌아 저희 센터에 오신 어머님
              </h2>
            </FadeUp>

            <div className="mt-10 grid gap-6 lg:gap-8">
              <FadeUp delayMs={120}>
                <p className="break-keep font-serif text-base leading-8 text-charcoal lg:text-lg">
                  60대 어머님께서 회전근개 파열 진단을 받으신 후 1년간 여러
                  방법을 시도하셨습니다. 병원 치료, 필라테스, 요가까지
                  시도하셨지만 머리 위로 손이 올라가지 않는 상태가
                  계속되었고, 수소문 끝에 저희 센터를 찾아 오셨습니다.
                </p>
              </FadeUp>

              <FadeUp delayMs={240}>
                <p className="break-keep font-serif text-base leading-8 text-charcoal lg:text-lg">
                  평가로 확인된 문제는 분명했습니다. 어깨 하나가 막힌 게
                  아니라, 그 어깨를 지탱하는 흉추·견갑·회전근개 전체의
                  움직임이 오래 멈춰 있었습니다. 막혀 있던 구간을 하나씩
                  열어가는 운동으로 설계했습니다.
                </p>
              </FadeUp>

              <FadeUp delayMs={360}>
                <p className="break-keep font-serif text-base leading-8 text-charcoal lg:text-lg">
                  다섯 차례 세션 이후 어머님은 뒷짐을 지실 수 있게 되셨고,
                  팔을 90도 이상 드실 수 있게 되셨습니다. &quot;운동
                  직후에는 얼얼한데 갈수록 나아가는 느낌이 든다&quot;고
                  말씀하시며, 회원권을 추가로 이어가기로 하셨습니다.
                </p>
              </FadeUp>

              <FadeUp delayMs={480}>
                <div className="border-l-2 border-brand pl-6">
                  <p className="break-keep font-serif text-lg font-medium leading-8 text-charcoal lg:text-xl">
                    저희가 하는 일은 분명합니다.
                    <br />
                    병원에서 진단과 치료를 받으신 분,
                    <br />
                    또는 여러 방법을 시도했지만 움직임이 돌아오지 않는 분의
                    &quot;운동으로 풀어야 하는 구간&quot;을 담당합니다.
                  </p>
                  <p className="mt-4 font-en text-[10px] uppercase tracking-[0.18em] text-muted">
                    — 재활의정석 전문운동센터
                  </p>
                </div>
              </FadeUp>
            </div>
        </div>
      </PageSection>

      <LocationCTA />
    </main>
  );
}
