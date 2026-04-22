import { CTAButton } from "@/components/common/CTAButton";
import { FadeUp } from "@/components/common/FadeUp";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

const processSteps = [
  {
    number: "01",
    label: "ASSESSMENT",
    title: "평가",
    description:
      "통증이 아닌 움직임을 봅니다. 자세·정렬·생활 습관까지 함께 확인해 회복의 방향을 설계합니다.",
    items: [
      "움직임 패턴 · 통증 유발 동작 분석",
      "자세 · 정렬 · 좌우 비대칭 평가",
      "일상 · 업무 · 운동 습관 인터뷰",
      "개인별 회복 설계서 작성",
    ],
  },
  {
    number: "02",
    label: "RECOVERY",
    title: "회복",
    description:
      "덜어내고 정렬부터. 조직이 회복되고 기본 움직임이 다시 익숙해질 때까지 단계적으로 올립니다.",
    items: [
      "조직 회복 · 염증 관리",
      "정렬 회복 · 좌우 균형 재설계",
      "기본 움직임 재학습",
      "재발 방지 습관 교육 병행",
    ],
  },
  {
    number: "03",
    label: "PERFORMANCE",
    title: "복귀",
    description:
      "일상·업무·스포츠 동작에서 통증 없이 지속되는 수준까지. 근력·지구력·파워를 목표에 맞춰 재구축합니다.",
    items: [
      "근력 · 지구력 · 파워 재구축",
      "일상 · 업무 · 스포츠 동작 전이",
      "재발 없이 유지되는 수준까지",
      "장기 관리 플랜 수립",
    ],
  },
] as const;

/**
 * Three-stage model section explaining the evaluation-first care flow.
 * Shows how assessment, recovery, and performance connect in sequence.
 */
export function ProcessSteps() {
  return (
    <Section tone="ivory" aria-labelledby="process-heading">
      <FadeUp delayMs={0}>
        <SectionHeading
          id="process-heading"
          kicker="3-STAGE MODEL"
          title="평가 → 회복 → 복귀."
          description="통증 완화만 목표로 삼지 않습니다. 평가로 원인을 찾고, 회복으로 토대를 다지고, 복귀로 일상·운동·업무에서 재발 없이 유지되는 수준까지 이끕니다."
          align="left"
        />
      </FadeUp>

      <div className="mt-20 grid grid-cols-1 gap-0 overflow-hidden border border-line md:grid-cols-3 lg:mt-24">
        {processSteps.map((step, index) => (
          <FadeUp
            key={step.number}
            delayMs={120 + index * 120}
            className="h-full"
          >
            <article
              className={`h-full bg-white p-10 transition-colors duration-500 ease-calm hover:bg-ivory lg:p-14 ${
                index < processSteps.length - 1
                  ? "border-b border-line md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="mb-10 flex items-baseline gap-4">
                <span className="font-en text-2xl font-semibold tracking-[-0.02em] text-brand lg:text-3xl">
                  {step.number}
                </span>
                <span className="font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {step.label}
                </span>
              </div>

              <h3 className="font-serif text-4xl font-semibold tracking-[-0.025em] text-charcoal lg:text-5xl">
                {step.title}
              </h3>

              <div className="my-8 h-px w-12 bg-line lg:my-10" />

              <p className="mb-8 font-sans text-sm leading-7 text-muted lg:mb-10 lg:text-base lg:leading-8">
                {step.description}
              </p>

              <ul className="grid gap-3 lg:gap-4">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    <span className="font-sans text-sm leading-7 text-charcoal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeUp>
        ))}
      </div>

      <FadeUp delayMs={480}>
        <div className="mt-16 flex justify-start lg:mt-20">
          <CTAButton href="/approach" variant="text">
            3단계 모델 전체 보기 →
          </CTAButton>
        </div>
      </FadeUp>
    </Section>
  );
}
