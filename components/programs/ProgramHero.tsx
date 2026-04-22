import { CTAButton } from "@/components/common/CTAButton";
import { FadeUp } from "@/components/common/FadeUp";
import { site } from "@/content/site";
import type { Program } from "@/content/programs";

type ProgramHeroProps = {
  program: Program;
};

/**
 * Hero block for a program detail page.
 * States the core problem and reinforces direct director-led evaluation.
 */
export function ProgramHero({ program }: ProgramHeroProps) {
  return (
    <section className="bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp delayMs={0}>
          <p className="mb-6 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            PROGRAM · {program.slug.replaceAll("-", " ")}
          </p>
          <h1 className="max-w-4xl break-keep font-serif text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-charcoal md:text-6xl lg:text-7xl">
            {program.heroHeadline}
          </h1>
        </FadeUp>

        <FadeUp delayMs={120}>
          <p className="mt-8 max-w-3xl break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80 md:text-2xl md:leading-10">
            {program.heroSubtext}
          </p>
        </FadeUp>

        <FadeUp delayMs={240}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <CTAButton
              href={site.links.naverBooking}
              external
              ariaLabel="네이버 예약 페이지로 이동 (새 창)"
            >
              첫 평가 예약하기
            </CTAButton>
            <CTAButton href="/approach" variant="secondary">
              진행 방식 보기
            </CTAButton>
          </div>
          <p className="mt-6 break-keep font-sans text-sm leading-7 text-muted">
            대표가 직접 평가·관리합니다. 프로그램은 첫 평가 이후 몸 상태에
            맞춰 조정됩니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
