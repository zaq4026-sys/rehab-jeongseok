import { FadeUp } from "@/components/common/FadeUp";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

const credentials = [
  {
    keyword: "재활전문",
    label: "BOARD-CERTIFIED PHYSICAL THERAPIST",
    description:
      "한국물리치료사협회 인증 재활 전문 자격. 일반 물리치료사와 구분되는 전문 트랙입니다.",
  },
  {
    keyword: "고려대",
    label: "KOREA UNIVERSITY · SPORTS MEDICINE",
    description:
      "스포츠의학 석사과정 재학. 근거 기반(EBP) 재활을 연구로 뒷받침합니다.",
  },
  {
    keyword: "만성통증",
    label: "CHRONIC MUSCULOSKELETAL PAIN · FOCUS AREA",
    description:
      "허리·어깨·팔꿈치·발목. 대표가 직접 평가하고 관리하는 주력 분야입니다.",
  },
] as const;

/**
 * Three credential cards that translate proof points into large serif keywords.
 * Sits directly below the hero to make the center's specialist positioning concrete.
 */
export function CredentialCards() {
  return (
    <Section tone="ivory" aria-labelledby="credentials-heading">
      <FadeUp delayMs={0}>
        <SectionHeading
          id="credentials-heading"
          kicker="WHY CHOOSE US"
          title="재활센터는 많습니다. 하지만 이 셋은 드뭅니다."
          align="left"
        />
      </FadeUp>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:mt-20 lg:gap-12">
        {credentials.map((item, index) => (
          <FadeUp key={item.keyword} delayMs={120 + index * 120}>
            <article className="h-full border border-line bg-white p-10 transition-all duration-500 ease-calm hover:border-brand hover:shadow-soft lg:p-12">
              <p className="mb-8 font-en text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-brand lg:mb-10">
                {item.label}
              </p>

              <h3 className="font-serif text-5xl font-semibold tracking-[-0.025em] text-charcoal lg:text-6xl">
                {item.keyword}
              </h3>

              <div className="my-8 h-px w-12 bg-line lg:my-10" />

              <p className="font-sans text-sm leading-7 text-muted lg:text-base lg:leading-8">
                {item.description}
              </p>
            </article>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
