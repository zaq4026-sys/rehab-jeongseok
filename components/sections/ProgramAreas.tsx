import Link from "next/link";
import { FadeUp } from "@/components/common/FadeUp";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PROGRAMS, type Program } from "@/content/programs";

const primaryPrograms = PROGRAMS.filter((program) =>
  ["lower-back", "neck-shoulder", "knee", "post-surgery"].includes(
    program.slug,
  ),
);

const specialistPrograms = PROGRAMS.filter((program) =>
  ["parkinsons", "athlete"].includes(program.slug),
);

function ProgramCardLink({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <article className="h-full border border-line bg-white p-8 transition-all duration-500 ease-calm group-hover:border-brand group-hover:bg-ivory lg:p-10">
        <p className="mb-5 font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-brand lg:mb-6">
          {program.cardLabel}
        </p>

        <h4 className="font-serif text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-charcoal lg:text-3xl">
          {program.title}
        </h4>

        <div className="my-6 h-px w-10 bg-line transition-all duration-500 ease-calm group-hover:w-16 group-hover:bg-brand lg:my-8" />

        <p className="mb-8 font-sans text-sm leading-7 text-muted lg:mb-10 lg:text-base lg:leading-8">
          {program.cardOneLiner}
        </p>

        <div className="flex items-center gap-2 font-en text-[11px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors duration-500 ease-calm group-hover:text-brand">
          <span>DETAILS</span>
          <span className="transition-transform duration-500 ease-calm group-hover:translate-x-1">
            →
          </span>
        </div>
      </article>
    </Link>
  );
}

/**
 * Program area cards on the home page.
 * Each card links into the Phase B program hub detail pages.
 */
export function ProgramAreas() {
  return (
    <Section tone="white" aria-labelledby="programs-heading">
      <FadeUp delayMs={0}>
        <SectionHeading
          id="programs-heading"
          kicker="FOCUS AREAS"
          title="대표가 직접 평가하고 관리하는 분야입니다."
          description="통증 부위가 아니라, 그 부위를 만든 움직임의 문제를 찾습니다. 어느 프로그램에 해당하시든 시작은 평가입니다."
          align="left"
        />
      </FadeUp>

      <div className="mt-20 lg:mt-24">
        <FadeUp delayMs={120}>
          <div className="mb-10 lg:mb-12">
            <p className="mb-3 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              PAIN · POST-SURGERY REHABILITATION
            </p>
            <h3 className="font-serif text-3xl font-semibold tracking-[-0.025em] text-charcoal lg:text-4xl">
              통증·수술 후 재활
            </h3>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {primaryPrograms.map((program, index) => (
            <FadeUp
              key={program.slug}
              delayMs={240 + index * 60}
              className="h-full"
            >
              <ProgramCardLink program={program} />
            </FadeUp>
          ))}
        </div>
      </div>

      <div className="mt-20 lg:mt-24">
        <div className="mb-16 h-px bg-line lg:mb-20" />

        <FadeUp delayMs={540}>
          <div className="mb-10 lg:mb-12">
            <p className="mb-3 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              SPECIALIST REHABILITATION
            </p>
            <h3 className="font-serif text-3xl font-semibold tracking-[-0.025em] text-charcoal lg:text-4xl">
              파킨슨·선수 재활
            </h3>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {specialistPrograms.map((program, index) => (
            <FadeUp
              key={program.slug}
              delayMs={660 + index * 60}
              className="h-full"
            >
              <ProgramCardLink program={program} />
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
