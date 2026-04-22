import { FadeUp } from "@/components/common/FadeUp";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

const credentials = [
  {
    keyword: "어려운 케이스",
    label: "COMPLEX CASE FOCUS",
    description:
      "일반 피트니스나 도수치료가 다루기 어려운 만성통증·파킨슨·수술 후 재활을 정면으로 다룹니다. 회피 없이.",
  },
  {
    keyword: "고려대",
    label: "KOREA UNIVERSITY · SPORTS MEDICINE",
    description:
      "융합과학대학원 스포츠의학과 석사과정. 근거 기반(EBP) 재활을 연구로 뒷받침합니다.",
  },
  {
    keyword: "주력 영역",
    label: "CHRONIC PAIN · NEURO REHAB",
    description:
      "허리·어깨·팔꿈치·발목의 만성 통증, 파킨슨·뇌졸중 재활. 1년 이상 반복된 통증과 신경계 질환에 집중합니다.",
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
          title="재활센터는 많습니다. 하지만 이 세 가지는 드뭅니다."
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
