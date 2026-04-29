import Image from "next/image";
import { CTAButton } from "@/components/common/CTAButton";
import { FadeUp } from "@/components/common/FadeUp";
import { NaverBookingLink } from "@/components/ui/NaverBookingLink";

/**
 * Main landing hero for the center positioning.
 * Introduces the specialist positioning, core promise, and primary booking path.
 */
export function HomeHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100dvh-5rem)] bg-ivory"
    >
      <div className="mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-section sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:px-10 lg:py-section-lg">
        <div>
          <FadeUp delayMs={0}>
            <p className="mb-8 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:mb-10">
              KOREA UNIVERSITY SPORTS MEDICINE · COMPLEX CASE REHABILITATION
            </p>
          </FadeUp>

          <FadeUp delayMs={120}>
            <h1
              id="hero-heading"
              className="font-serif text-5xl font-semibold leading-[1.1] tracking-[-0.025em] text-charcoal sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              통증이 반복되는 이유를
              <br />
              다시 봅니다.
            </h1>
          </FadeUp>

          <FadeUp delayMs={240}>
            <p className="mt-8 max-w-xl font-sans text-base leading-8 text-muted sm:text-lg sm:leading-9 lg:mt-10">
              재활운동전문 물리치료사가 직접 평가하고, 직접 설계합니다.
              <br />
              허리·어깨·팔꿈치·발목의 만성 통증, 그리고 파킨슨·뇌졸중
              재활까지.
              <br />
              광주 재활의정석 전문운동센터.
            </p>
          </FadeUp>

          <FadeUp delayMs={360}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <NaverBookingLink
                ariaLabel="네이버 예약 페이지에서 1:1 상담 예약하기"
                className="inline-flex min-h-12 items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors duration-300 ease-calm hover:bg-brand-dark active:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                1:1 상담 예약
              </NaverBookingLink>

              <CTAButton href="/about" variant="secondary">
                대표 프로필 보기
              </CTAButton>
            </div>
          </FadeUp>
        </div>

        <FadeUp delayMs={200}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[28rem] overflow-hidden border border-line bg-white lg:max-w-none">
            <Image
              src="/images/director/portrait-primary.jpg"
              alt="재활의정석 대표 황제원 물리치료사"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 28rem"
              className="object-cover object-top"
            />
          </div>
        </FadeUp>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-center sm:block">
        <p className="font-en text-[10px] font-semibold tracking-[0.18em] text-muted">
          SCROLL
        </p>
        <span className="mx-auto mt-3 block h-8 w-px bg-line" />
      </div>
    </section>
  );
}
