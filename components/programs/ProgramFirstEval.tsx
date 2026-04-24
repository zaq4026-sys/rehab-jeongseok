import { FadeUp } from "@/components/common/FadeUp";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import { NaverBookingLink } from "@/components/ui/NaverBookingLink";
import { site } from "@/content/site";
import type { Program } from "@/content/programs";

type ProgramFirstEvalProps = {
  program: Program;
};

/**
 * First evaluation checklist for a program detail page.
 * Ends the content section with the booking action before the global Location CTA.
 */
export function ProgramFirstEval({ program }: ProgramFirstEvalProps) {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <FadeUp delayMs={0}>
              <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                FIRST EVALUATION
              </p>
              <h2 className="break-keep font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal md:text-5xl">
                첫 평가는 여기서 시작합니다
              </h2>
              <p className="mt-6 max-w-xl break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80">
                대표가 직접 평가·관리합니다. 아래 항목을 기준으로 현재 몸의
                문제를 확인하고, 필요한 순서부터 설계합니다.
              </p>
            </FadeUp>

            <FadeUp delayMs={120}>
              <div className="mt-10 max-w-xl">
                <PlaceholderImage
                  aspect="4:3"
                  label="ASSESSMENT GIF"
                  futureSrc={program.assetSlots.assessmentGif}
                />
              </div>
            </FadeUp>
          </div>

          <FadeUp delayMs={240}>
            <div className="border border-line bg-white p-8 lg:p-10">
              <ul className="grid gap-4">
                {program.firstEval.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span className="break-keep font-sans text-base leading-8 text-charcoal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <NaverBookingLink
                  ariaLabel="네이버 예약 페이지로 이동 (새 창)"
                  className="inline-flex min-h-12 items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors duration-300 ease-calm hover:bg-brand-dark active:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  첫 평가 예약하기
                </NaverBookingLink>
                <a
                  href={`tel:${site.phone.replaceAll("-", "")}`}
                  aria-label={`전화로 상담 문의: ${site.phoneDisplay}`}
                  className="inline-flex min-h-12 items-center justify-center border border-line bg-transparent px-6 text-sm font-semibold text-charcoal transition-colors duration-300 ease-calm hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  전화 상담
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
