import Image from "next/image";
import { CTAButton } from "@/components/common/CTAButton";
import { FadeUp } from "@/components/common/FadeUp";
import { Section } from "@/components/common/Section";
import { NaverBookingLink } from "@/components/ui/NaverBookingLink";

/**
 * Director profile summary for the home page.
 * Pivots from service methodology to the specialist who evaluates and designs care.
 */
export function ProfileSummary() {
  return (
    <Section tone="ivory" aria-labelledby="profile-heading">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <FadeUp delayMs={0}>
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[28rem] overflow-hidden border border-line bg-white lg:max-w-none">
            <Image
              src="/images/director/portrait-primary.jpg"
              alt="재활의정석 대표 황제원 물리치료사"
              fill
              sizes="(min-width: 1024px) 40vw, 28rem"
              className="object-cover object-top"
            />
          </div>
        </FadeUp>

        <div>
          <FadeUp delayMs={120}>
            <p className="mb-8 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand lg:mb-10">
              THE DIRECTOR
            </p>
          </FadeUp>

          <FadeUp delayMs={240}>
            <h2
              id="profile-heading"
              className="font-serif text-5xl font-semibold leading-[1.1] tracking-[-0.025em] text-charcoal lg:text-6xl xl:text-7xl"
            >
              황제원
            </h2>
          </FadeUp>

          <FadeUp delayMs={360}>
            <ul className="mt-8 grid gap-2 lg:mt-10 lg:gap-3">
              <li className="font-sans text-base leading-relaxed text-charcoal lg:text-lg">
                재활운동전문 물리치료사
              </li>
              <li className="font-sans text-base leading-relaxed text-charcoal lg:text-lg">
                고려대학교 융합과학대학원 스포츠의학과 석사과정
              </li>
              <li className="font-sans text-base leading-relaxed text-charcoal lg:text-lg">
                재활의정석 전문운동센터 대표
              </li>
            </ul>
          </FadeUp>

          <FadeUp delayMs={480}>
            <div className="my-10 h-px w-16 bg-line lg:my-14" />
          </FadeUp>

          <FadeUp delayMs={500}>
            <p className="break-keep font-serif text-2xl font-semibold leading-[1.35] tracking-[-0.02em] text-charcoal lg:text-3xl xl:text-4xl">
              재활센터는 많습니다.
              <br />
              하지만 직접 평가하고
              <br />
              직접 설계하는 곳은 드뭅니다.
            </p>
          </FadeUp>

          <FadeUp delayMs={620}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5 lg:mt-14">
              <CTAButton href="/about">대표 전체 프로필 보기</CTAButton>
              <NaverBookingLink
                ariaLabel="네이버 예약 페이지 열기"
                className="inline-flex min-h-12 items-center justify-center border border-line bg-transparent px-6 text-sm font-semibold text-charcoal transition-colors duration-300 ease-calm hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                1:1 상담 예약
              </NaverBookingLink>
            </div>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}
