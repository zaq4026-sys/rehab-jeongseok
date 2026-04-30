import type { Metadata } from "next";
import {
  ApproachDetailPage,
  type ApproachDetailPageData,
} from "@/components/approach/ApproachDetailPage";

export const metadata: Metadata = {
  title: "평가 — 재활의정석 전문운동센터",
  description:
    "통증이 아닌 움직임을 봅니다. 30~45분 평가로 회복의 방향을 함께 설계합니다.",
  alternates: { canonical: "/approach/assessment" },
  openGraph: {
    title: "평가 — 재활의정석 전문운동센터",
    description:
      "통증이 아닌 움직임을 봅니다. 30~45분 평가로 회복의 방향을 함께 설계합니다.",
    url: "/approach/assessment",
  },
};

const assessmentPageData: ApproachDetailPageData = {
  hero: {
    eyebrow: "01 / ASSESSMENT",
    title: "평가",
    subtitle: "통증이 아닌 움직임을 봅니다",
    description:
      "평가 없이 시작되는 운동은, 같은 통증을 더 강하게 만듭니다.",
    image: {
      src: "/images/director/assessing.png",
      alt: "재활의정석 대표 황제원이 회원의 움직임을 평가하는 모습",
      aspect: "4:3",
    },
  },
  sections: [
    {
      type: "text",
      data: {
        eyebrow: "WHY ASSESSMENT FIRST",
        title: "같은 통증, 다른 원인",
        paragraphs: [
          "같은 허리 통증이라도 원인은 사람마다 다릅니다.",
          "골반 정렬이 무너진 사람과, 허리 코어가 제 역할을 못 하는 사람, 그리고 발목·고관절 가동성이 떨어져 허리가 대신 일하는 사람.",
          "세 사람에게 같은 운동을 처방하면, 한 사람은 회복하고, 한 사람은 그대로이며, 한 사람은 더 아파집니다.",
          "재활의정석이 평가를 먼저 놓는 이유입니다.",
        ],
      },
    },
    {
      type: "items",
      data: {
        eyebrow: "ASSESSMENT ITEMS",
        title: "30~45분 동안 함께 확인합니다",
        items: [
          {
            eyebrow: "01",
            title: "움직임 패턴",
            description:
              "앉기, 일어서기, 걷기, 들어올리기 같은 기본 동작에서 어떤 관절이 일하고 어떤 관절이 비어 있는지 확인합니다.",
          },
          {
            eyebrow: "02",
            title: "자세 · 정렬 · 좌우 비대칭",
            description:
              "서 있는 자세, 척추 정렬, 골반 위치, 어깨 높이. 그리고 좌우 어느 쪽에서 더 큰 부하가 걸리는지 측정합니다.",
          },
          {
            eyebrow: "03",
            title: "통증 유발 동작",
            description:
              "어떤 자세 / 어떤 동작에서 통증이 시작되고 어떤 자세에서 완화되는지 동작 단위로 분석합니다.",
          },
          {
            eyebrow: "04",
            title: "일상 · 업무 · 운동 습관",
            description:
              "앉아 있는 시간, 직업의 동작 패턴, 평소 운동 습관. 통증이 만들어진 환경 자체를 함께 봅니다.",
          },
          {
            eyebrow: "05",
            title: "의료 기록 · 영상 검토",
            description:
              "MRI · X-ray · 진단서 등 기존 자료가 있다면 그 위에 운동 재활 관점을 더해 해석합니다.",
          },
        ],
      },
      image: {
        src: "/images/director/correcting.png",
        alt: "평가 진행 모습",
        aspect: "4:3",
        side: "left",
      },
    },
    {
      type: "checklist",
      data: {
        eyebrow: "RECOVERY BLUEPRINT",
        title: "그 자리에서 함께 만드는 설계서",
        intro: "평가가 끝나면, 그 자리에서 회복 설계서를 함께 만듭니다.",
        items: [
          "어디서 통증이 시작되는가",
          "무엇을 먼저 회복해야 하는가",
          "어떤 순서로 단계를 밟을 것인가",
          "몇 회 정도가 필요한가",
          "일상에서 무엇을 조심해야 하는가",
        ],
        outro:
          "이 설계서는 회복 전 과정의 지도가 됩니다. 회차마다 진행 상황을 이 위에 갱신합니다.",
      },
      image: {
        src: "/images/director/consulting.png",
        alt: "재활의정석 대표가 회원과 회복 설계서를 함께 작성하는 모습",
        aspect: "4:3",
        side: "right",
      },
    },
    {
      type: "next",
      data: {
        eyebrow: "NEXT STEP",
        title: "평가가 끝나면, 회복이 시작됩니다",
        links: [
          {
            eyebrow: "02 / RECOVERY",
            title: "회복 →",
            href: "/approach/recovery",
          },
        ],
      },
    },
  ],
  ctaTitle: "첫 평가는 무료 상담 후 예약하실 수 있습니다",
};

export default function AssessmentPage() {
  return <ApproachDetailPage data={assessmentPageData} />;
}
