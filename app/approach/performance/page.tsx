import type { Metadata } from "next";
import {
  ApproachDetailPage,
  type ApproachDetailPageData,
} from "@/components/approach/ApproachDetailPage";

export const metadata: Metadata = {
  title: "복귀 — 재활의정석 전문운동센터",
  description:
    "안 아프다가 아닌, 다시 잘 움직입니다. 일상·업무·운동까지 통증 없는 복귀를 설계합니다.",
  alternates: { canonical: "/approach/performance" },
  openGraph: {
    title: "복귀 — 재활의정석 전문운동센터",
    description:
      "안 아프다가 아닌, 다시 잘 움직입니다. 일상·업무·운동까지 통증 없는 복귀를 설계합니다.",
    url: "/approach/performance",
  },
};

const performancePageData: ApproachDetailPageData = {
  hero: {
    eyebrow: "03 / PERFORMANCE",
    title: "복귀",
    subtitle: "안 아프다가 아닌, 다시 잘 움직입니다",
    description:
      "통증이 사라진 게 끝이 아닙니다. 일상·업무·운동이 통증 없이 돌아가는 것이 끝입니다.",
    image: {
      src: "/images/programs/athlete/exercise-01.png",
      alt: "스포츠 동작 복귀를 위한 운동 재활",
      aspect: "4:3",
    },
  },
  sections: [
    {
      type: "text",
      data: {
        eyebrow: "DEFINITION",
        title: "통증 없음 ≠ 회복 완료",
        paragraphs: [
          "많은 재활이 통증이 줄어들면 끝납니다. 그러나 통증이 줄어든 상태와, 다시 잘 움직일 수 있는 상태는 다릅니다.",
          "다친 부위는 회복돼도, 그 부위를 보호하느라 굳어 있던 다른 관절과 근육은 그대로 남습니다. 복귀 단계에서는 그 잔재까지 함께 풉니다.",
          "목표는 두 가지입니다. 하나, 통증 없이 일상·업무·운동을 다시 할 수 있는 것. 둘, 같은 통증이 다시 오지 않는 것.",
        ],
      },
    },
    {
      type: "items",
      data: {
        eyebrow: "GOALS",
        title: "복귀는 사람마다 다릅니다",
        intro:
          "어떤 분에게는 계단 오르기가 목표이고, 어떤 분에게는 다시 코트로 돌아가는 것이 목표입니다.",
        items: [
          {
            eyebrow: "01",
            title: "일상 동작",
            description:
              "앉기, 서기, 걷기, 계단, 무거운 물건 들기. 다시 통증 없이 할 수 있도록 동작을 재구축합니다.",
          },
          {
            eyebrow: "02",
            title: "업무 동작",
            description:
              "오래 앉아 일하는 분, 무거운 것을 들고 내리는 분, 한쪽으로 같은 동작을 반복하는 분. 직업의 동작에 맞춰 회복을 설계합니다.",
          },
          {
            eyebrow: "03",
            title: "스포츠 · 운동 동작",
            description:
              "달리기, 점프, 회전, 라켓 동작, 무게 들기. 종목별로 필요한 동작을 단계적으로 다시 만들어 갑니다.",
          },
          {
            eyebrow: "04",
            title: "재발 방지 시스템",
            description:
              "회복이 끝난 뒤에도 같은 통증이 오지 않도록 일상에서 점검할 수 있는 자기 체크 루틴을 함께 만듭니다.",
          },
        ],
      },
      image: {
        src: "/images/director/exercise-leading.png",
        alt: "일상 · 업무 · 스포츠 복귀를 위한 단계별 운동 지도",
        aspect: "4:3",
        side: "left",
      },
    },
    {
      type: "checklist",
      data: {
        eyebrow: "LONG-TERM CARE",
        title: "회복 이후의 관리",
        intro: [
          "복귀가 끝나도 몸은 계속 변합니다. 나이, 직업, 운동 빈도, 부상 이력에 따라 관리의 방향이 달라집니다.",
          "재활의정석은 복귀 이후의 장기 관리도 함께 설계합니다.",
        ],
        items: [
          "월 1~2회 점검 (선택)",
          "재발 신호 발생 시 즉시 점검",
          "운동 종목 / 강도 변경 시 자세 재점검",
          "새로운 부상 발생 시 빠른 평가 진입",
        ],
        outro:
          "회복은 한 번으로 끝나지 않습니다. 계속 움직이는 한, 관리도 계속됩니다.",
      },
      image: {
        src: "/images/center/consultation-room.png",
        alt: "재활의정석 전문운동센터 상담 공간",
        aspect: "4:3",
        side: "right",
      },
    },
    {
      type: "next",
      data: {
        eyebrow: "SEE THE FULL FLOW",
        title: "평가 · 회복 · 복귀를 다시 봅니다",
        intro: "평가에서 시작해, 회복으로 다지고, 복귀로 마무리합니다.",
        links: [
          {
            eyebrow: "01 / ASSESSMENT",
            title: "평가 →",
            href: "/approach/assessment",
          },
          {
            eyebrow: "02 / RECOVERY",
            title: "회복 →",
            href: "/approach/recovery",
          },
        ],
      },
    },
  ],
  ctaTitle: "복귀의 시작도 평가입니다",
};

export default function PerformancePage() {
  return <ApproachDetailPage data={performancePageData} />;
}
