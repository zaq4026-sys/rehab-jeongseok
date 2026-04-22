import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/common/FadeUp";
import { LocationCTA } from "@/components/sections/LocationCTA";
import { PROGRAMS } from "@/content/programs";

export const metadata: Metadata = {
  title: "프로그램 — 재활의정석",
  description:
    "허리·목·어깨·무릎 통증부터 수술 후 재활, 파킨슨 재활, 선수 재활까지. 광주 재활의정석의 전문 프로그램 6종을 안내합니다.",
  alternates: { canonical: "/programs" },
  openGraph: {
    title: "프로그램 — 재활의정석",
    description:
      "허리·목·어깨·무릎 통증부터 수술 후 재활, 파킨슨 재활, 선수 재활까지. 광주 재활의정석의 전문 프로그램 6종을 안내합니다.",
    url: "/programs",
  },
};

const principles = [
  {
    label: "EVALUATION",
    title: "평가",
    description: "통증 부위가 아니라, 그 통증을 만든 움직임의 문제를 봅니다.",
  },
  {
    label: "RECOVERY",
    title: "회복",
    description: "덜어낼 것은 덜어내고, 다시 배워야 할 움직임을 회복합니다.",
  },
  {
    label: "PERFORMANCE",
    title: "수행력",
    description: "일상·운동·업무에서 다시 쓸 수 있는 몸까지 연결합니다.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-ivory">
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp delayMs={0}>
            <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              PROGRAMS
            </p>
            <h1 className="max-w-4xl break-keep font-serif text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-charcoal md:text-6xl lg:text-7xl">
              증상이 아닌 원인을 다룹니다
            </h1>
            <p className="mt-8 max-w-3xl break-keep font-serif text-xl leading-9 tracking-[-0.01em] text-charcoal/80 md:text-2xl md:leading-10">
              재활의정석의 프로그램은 통증 부위가 아니라, 그 부위를 만든
              움직임의 문제를 찾습니다. 어느 프로그램에 해당하시든 시작은
              평가입니다.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((program, index) => (
              <FadeUp key={program.slug} delayMs={index * 80}>
                <Link
                  href={`/programs/${program.slug}`}
                  className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <article className="flex h-full flex-col border border-line bg-ivory p-8 transition-colors duration-500 ease-calm group-hover:border-brand lg:p-10">
                    <p className="mb-5 font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                      {program.slug.replaceAll("-", " ")}
                    </p>
                    <h2 className="break-keep font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-charcoal">
                      {program.title}
                    </h2>
                    <div className="my-7 h-px w-10 bg-line transition-all duration-500 ease-calm group-hover:w-16 group-hover:bg-brand" />
                    <p className="flex-1 break-keep font-sans text-base leading-8 text-muted">
                      {program.cardOneLiner}
                    </p>
                    <p className="mt-8 font-en text-[11px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors duration-500 ease-calm group-hover:text-brand">
                      자세히 보기 →
                    </p>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp delayMs={0}>
            <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              SHARED PRINCIPLE
            </p>
            <h2 className="max-w-4xl break-keep font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal md:text-5xl">
              어떤 프로그램이든 동일한 원칙으로 진행됩니다
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-0 border border-line md:grid-cols-3">
            {principles.map((item, index) => (
              <FadeUp key={item.label} delayMs={120 + index * 120}>
                <article className="h-full border-b border-line bg-white p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-10">
                  <p className="mb-6 font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {item.label}
                  </p>
                  <h3 className="font-serif text-3xl font-semibold tracking-[-0.025em] text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-6 break-keep font-sans text-base leading-8 text-muted">
                    {item.description}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <LocationCTA />
    </main>
  );
}
