import Link from "next/link";
import { FadeUp } from "@/components/common/FadeUp";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

type ProgramCard = {
  slug: string;
  titleKr: string;
  titleEn: string;
  description: string;
  href: string;
};

const chronicPainPrograms: ProgramCard[] = [
  {
    slug: "lower-back",
    titleKr: "만성 요통 · 허리디스크",
    titleEn: "LOW BACK PAIN",
    description:
      "반복되는 허리 통증, 디스크·협착증 후 재활, 앉아 있는 자세가 만드는 요추 문제.",
    href: "/programs/chronic-pain/lower-back",
  },
  {
    slug: "shoulder",
    titleKr: "만성 어깨 통증 · 회전근개",
    titleEn: "SHOULDER PAIN",
    description:
      "오십견, 회전근개 파열·수술 후, 어깨 충돌 증후군, 반복 동작 후 어깨 기능 회복.",
    href: "/programs/chronic-pain/shoulder",
  },
  {
    slug: "elbow",
    titleKr: "테니스엘보 · 골프엘보",
    titleEn: "ELBOW PAIN",
    description:
      "팔꿈치 외측·내측 만성 통증, 반복 사용 손상, 힘을 쓸 때 반복되는 팔 통증.",
    href: "/programs/chronic-pain/elbow",
  },
  {
    slug: "ankle",
    titleKr: "만성 발목 불안정 · 염좌",
    titleEn: "ANKLE PAIN",
    description:
      "발목 삐끗이 반복되는 만성 불안정, 발목 수술 후 재활, 달리기·점프 복귀.",
    href: "/programs/chronic-pain/ankle",
  },
];

const neuroPrograms: ProgramCard[] = [
  {
    slug: "parkinson",
    titleKr: "파킨슨 질환 재활",
    titleEn: "PARKINSON'S REHABILITATION",
    description:
      "균형 · 보행 · 자세 안정성 훈련. 약물과 병행하는 운동 재활로 일상 기능 유지를 돕습니다.",
    href: "/programs/neuro/parkinson",
  },
  {
    slug: "stroke",
    titleKr: "뇌졸중 후 기능 회복",
    titleEn: "POST-STROKE RECOVERY",
    description:
      "뇌경색 · 뇌출혈 이후 편마비 · 균형 · 보행 · 일상 동작 회복. 의료기관 퇴원 후 지속 관리.",
    href: "/programs/neuro/stroke",
  },
];

function ProgramCardLink({ program }: { program: ProgramCard }) {
  return (
    <Link
      href={program.href}
      className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <article className="h-full border border-line bg-white p-8 transition-all duration-500 ease-calm group-hover:border-brand group-hover:bg-ivory lg:p-10">
        <p className="mb-5 font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-brand lg:mb-6">
          {program.titleEn}
        </p>

        <h4 className="font-serif text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-charcoal lg:text-3xl">
          {program.titleKr}
        </h4>

        <div className="my-6 h-px w-10 bg-line transition-all duration-500 ease-calm group-hover:w-16 group-hover:bg-brand lg:my-8" />

        <p className="mb-8 font-sans text-sm leading-7 text-muted lg:mb-10 lg:text-base lg:leading-8">
          {program.description}
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
 * Program area cards for chronic pain and neurological rehabilitation.
 * Each card acts as an entry point to an independent SEO landing page.
 */
export function ProgramAreas() {
  return (
    <Section tone="white" aria-labelledby="programs-heading">
      <FadeUp delayMs={0}>
        <SectionHeading
          id="programs-heading"
          kicker="FOCUS AREAS"
          title="대표가 직접 평가하고 관리하는 분야입니다."
          description="일반 피트니스에서 다루기 어려운 만성 근골격계 통증과 뇌질환 재활. 부위·질환 특성에 맞춘 평가·설계로 접근합니다."
          align="left"
        />
      </FadeUp>

      <div className="mt-20 lg:mt-24">
        <FadeUp delayMs={120}>
          <div className="mb-10 lg:mb-12">
            <p className="mb-3 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              CHRONIC MUSCULOSKELETAL PAIN
            </p>
            <h3 className="font-serif text-3xl font-semibold tracking-[-0.025em] text-charcoal lg:text-4xl">
              만성 근골격계 통증 재활
            </h3>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {chronicPainPrograms.map((program, index) => (
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
              NEUROLOGICAL REHABILITATION
            </p>
            <h3 className="font-serif text-3xl font-semibold tracking-[-0.025em] text-charcoal lg:text-4xl">
              뇌질환 재활
            </h3>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {neuroPrograms.map((program, index) => (
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
