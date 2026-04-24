import { FadeUp } from "@/components/common/FadeUp";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import type { Program } from "@/content/programs";

type ProgramApproachProps = {
  program: Program;
};

const approachItems = [
  {
    key: "evaluation",
    number: "01",
    label: "EVALUATION",
    title: "평가",
  },
  {
    key: "recovery",
    number: "02",
    label: "RECOVERY",
    title: "회복",
  },
  {
    key: "performance",
    number: "03",
    label: "PERFORMANCE",
    title: "수행력",
  },
] as const;

/**
 * Three-stage program-specific approach.
 * Reuses the Evaluation / Recovery / Performance rhythm from the main site.
 */
export function ProgramApproach({ program }: ProgramApproachProps) {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp delayMs={0}>
          <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            OUR APPROACH
          </p>
          <h2 className="break-keep font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal md:text-5xl">
            같은 원칙, 다른 설계
          </h2>
          <p className="mt-6 max-w-3xl break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80">
            어떤 프로그램이든 평가는 먼저입니다. 다만 몸이 보내는 신호와
            목표가 다르기 때문에 설계는 달라집니다.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-0 border border-line md:grid-cols-3">
          {approachItems.map((item, index) => (
            <FadeUp key={item.key} delayMs={120 + index * 120}>
              <article className="h-full border-b border-line bg-white p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-10">
                <div className="mb-8 flex items-baseline gap-4">
                  <span className="font-en text-2xl font-semibold tracking-[-0.02em] text-brand">
                    {item.number}
                  </span>
                  <span className="font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-semibold tracking-[-0.025em] text-charcoal">
                  {item.title}
                </h3>
                <div className="my-8 h-px w-12 bg-line" />
                <p className="break-keep font-sans text-base leading-8 text-muted">
                  {program.approach[item.key]}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delayMs={480}>
          <div className="mt-12 max-w-3xl">
            <PlaceholderImage
              aspect="4:3"
              label="EXERCISE GIF"
              futureSrc={program.assetSlots.exerciseGif}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
