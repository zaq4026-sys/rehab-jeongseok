import { FadeUp } from "@/components/common/FadeUp";
import type { Program } from "@/content/programs";

type ProgramAudienceProps = {
  program: Program;
};

/**
 * Audience checklist for symptoms and situations that fit a program.
 * Uses restrained cards to keep medical copy clear and scannable.
 */
export function ProgramAudience({ program }: ProgramAudienceProps) {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp delayMs={0}>
          <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            WHO IT IS FOR
          </p>
          <h2 className="break-keep font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal md:text-5xl">
            이런 분께 권합니다
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {program.audience.map((item, index) => (
            <FadeUp key={item} delayMs={120 + index * 60}>
              <div className="flex h-full items-start gap-4 border border-line bg-ivory p-6">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <p className="break-keep font-sans text-base leading-8 text-charcoal">
                  {item}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
