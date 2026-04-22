import { CTAButton } from "@/components/common/CTAButton";
import { FadeUp } from "@/components/common/FadeUp";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

const genericApproach = [
  "평가 없이 운동부터 시작",
  "통증이 있어도 동일 루틴",
  "더 강하게, 더 많이",
  "트레이너 경력 기반",
  "단발성 수업",
] as const;

const jeongseokApproach = [
  "움직임·통증·자세 평가 후 설계",
  "회복 단계별 강도 조정",
  "덜어내고 정렬부터, 그다음 강화",
  "근거 기반(EBP) · 석사과정 연구",
  "평가 → 회복 → 복귀 3단계 관리",
] as const;

/**
 * Two-column methodology comparison between generic fitness/PT and Rehab Jeongseok.
 * This section makes the center's evaluation-first approach immediately legible.
 */
export function BeforeAfterComparison() {
  return (
    <Section tone="white" aria-labelledby="comparison-heading">
      <FadeUp delayMs={0}>
        <SectionHeading
          id="comparison-heading"
          kicker="METHODOLOGY"
          title="순서가 달랐기 때문에 결과가 달랐습니다."
          description="많은 재활센터가 평가 없이 운동부터 시작합니다. 재활의정석은 평가를 가장 먼저 놓습니다. 이 순서가 회복의 속도와 재발 여부를 결정합니다."
          align="center"
        />
      </FadeUp>

      <div className="mt-20 grid grid-cols-1 gap-0 border border-line lg:mt-24 md:grid-cols-2">
        <FadeUp delayMs={120} className="h-full">
          <article className="h-full border-b border-line bg-ivory p-10 md:border-b-0 md:border-r lg:p-14">
            <p className="font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              GENERIC APPROACH
            </p>
            <h3 className="mt-4 font-serif text-2xl font-semibold tracking-[-0.02em] text-muted lg:text-3xl">
              일반 피트니스 · PT
            </h3>

            <div className="my-10 h-px bg-line" />

            <div className="grid gap-6 lg:gap-7">
              {genericApproach.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  <p className="font-sans text-sm leading-7 text-muted lg:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </FadeUp>

        <FadeUp delayMs={240} className="h-full">
          <article className="h-full border-t-2 border-brand bg-white p-10 lg:p-14">
            <p className="font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              REHAB JEONGSEOK
            </p>
            <h3 className="mt-4 font-serif text-2xl font-semibold tracking-[-0.02em] text-charcoal lg:text-3xl">
              재활의정석 전문운동센터
            </h3>

            <div className="my-10 h-px bg-brand/30" />

            <div className="grid gap-6 lg:gap-7">
              {jeongseokApproach.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  <p className="font-sans text-sm leading-7 text-charcoal lg:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </FadeUp>
      </div>

      <FadeUp delayMs={360}>
        <div className="mt-16 flex justify-center lg:mt-20">
          <CTAButton href="/approach" variant="text">
            3단계 관리 모델 자세히 보기 →
          </CTAButton>
        </div>
      </FadeUp>
    </Section>
  );
}
