import { FadeUp } from "@/components/common/FadeUp";
import type { Program } from "@/content/programs";

type ProgramMilestoneProps = {
  program: Program;
};

const milestoneItems = [
  {
    number: "10",
    label: "RESET",
    key: "reset10",
  },
  {
    number: "30",
    label: "ZERO",
    key: "zero30",
  },
  {
    number: "50",
    label: "BEYOND",
    key: "beyond50",
  },
] as const;

/**
 * Program-specific 10 / 30 / 50 session milestones.
 * Keeps the signature milestone system consistent across detail pages.
 */
export function ProgramMilestone({ program }: ProgramMilestoneProps) {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp delayMs={0}>
          <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            10 · 30 · 50
          </p>
          <h2 className="break-keep font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal md:text-5xl">
            막연히 다니지 않습니다
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {milestoneItems.map((item, index) => (
            <FadeUp key={item.key} delayMs={120 + index * 120}>
              <article className="h-full border border-line bg-ivory p-8 transition-colors duration-500 ease-calm hover:border-brand lg:p-10">
                <p className="font-serif text-6xl font-semibold leading-none tracking-[-0.03em] text-brand md:text-7xl">
                  {item.number}
                </p>
                <p className="mt-4 font-en text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                  {item.label}
                </p>
                <div className="my-8 h-px w-12 bg-line" />
                <p className="break-keep font-sans text-base leading-8 text-muted">
                  {program.milestone[item.key]}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
