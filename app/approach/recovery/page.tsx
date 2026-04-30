import type { Metadata } from "next";
import {
  ApproachDetailPage,
  type ApproachDetailPageData,
} from "@/components/approach/ApproachDetailPage";

export const metadata: Metadata = {
  title: "회복 — 재활의정석 전문운동센터",
  description:
    "덜어내고 정렬부터, 그 다음 강화. 4단계 회복 시스템으로 통증 없이 다시 움직이게 합니다.",
  alternates: { canonical: "/approach/recovery" },
  openGraph: {
    title: "회복 — 재활의정석 전문운동센터",
    description:
      "덜어내고 정렬부터, 그 다음 강화. 4단계 회복 시스템으로 통증 없이 다시 움직이게 합니다.",
    url: "/approach/recovery",
  },
};

const recoveryPageData: ApproachDetailPageData = {
  hero: {
    eyebrow: "02 / RECOVERY",
    title: "회복",
    subtitle: "덜어내고 정렬부터, 그 다음 강화",
    description: "운동의 강도가 아니라, 운동의 순서가 회복을 만듭니다.",
  },
  sections: [
    {
      type: "text",
      data: {
        eyebrow: "PRINCIPLE",
        title: "순서가 회복을 만듭니다",
        paragraphs: [
          "다친 조직은 시간이 지나면 어느 정도 아뭅니다. 하지만 그 위에 무너진 정렬과 잘못된 움직임이 남으면, 같은 부위는 다시 아파지고, 다른 부위까지 무너집니다.",
          "회복은 네 단계로 진행됩니다. 한 단계가 끝나기 전에 다음 단계로 넘어가지 않습니다.",
        ],
      },
    },
    {
      type: "items",
      data: {
        eyebrow: "4 STAGES",
        title: "단계를 건너뛰지 않습니다",
        items: [
          {
            eyebrow: "Stage 1",
            title: "조직 회복",
            description:
              "조직의 염증과 부하를 먼저 덜어냅니다. 이 단계에서는 강한 운동을 하지 않습니다. 가동성 회복, 호흡 패턴, 신경 안정화에 집중합니다.",
          },
          {
            eyebrow: "Stage 2",
            title: "정렬 회복",
            description:
              "좌우 균형, 척추 정렬, 골반 위치를 다시 잡습니다. 정렬이 무너진 상태에서 강한 운동을 하면, 강해지는 게 아니라 잘못된 패턴이 강해집니다.",
          },
          {
            eyebrow: "Stage 3",
            title: "기본 움직임 재학습",
            description:
              "앉기, 일어서기, 들어올리기, 걷기 같은 기본 동작을 새로 가르칩니다. 통증 없이 움직일 수 있는 패턴을 신경계에 다시 입력합니다.",
          },
          {
            eyebrow: "Stage 4",
            title: "안정화",
            description:
              "회복된 움직임을 일상 동작 안에서 유지할 수 있도록 근지구력과 자세 안정성을 만듭니다. 이 단계가 끝나면 복귀 단계로 넘어갑니다.",
          },
        ],
      },
    },
    {
      type: "text",
      data: {
        eyebrow: "INDIVIDUALIZED",
        title: "그날의 몸에 맞춥니다",
        paragraphs: [
          "같은 회원도 그날의 컨디션에 따라 강도가 다릅니다. 잠을 못 잤거나, 통증이 더 있거나, 평소보다 피로한 날.",
          "매 회차마다 그날의 상태를 다시 평가합니다. 계획표대로가 아니라, 그날의 몸에 맞춰 진행합니다.",
          "이게 운동 재활과 일반 PT의 가장 큰 차이입니다.",
        ],
      },
    },
    {
      type: "checklist",
      data: {
        eyebrow: "BEYOND EXERCISE",
        title: "운동만으로는 충분하지 않습니다",
        intro: "회복 단계에서는 운동만 하지 않습니다.",
        items: [
          "일상에서 피해야 할 자세 교정",
          "직업 동작에서 부하 줄이는 법",
          "수면 자세 / 의자 / 신발 점검",
          "재발 신호를 알아차리는 법",
        ],
        outro:
          "운동만으로는 충분하지 않습니다. 일상이 바뀌어야 회복이 유지됩니다.",
      },
    },
    {
      type: "next",
      data: {
        eyebrow: "NEXT STEP",
        title: "회복이 안정되면, 복귀가 시작됩니다",
        links: [
          {
            eyebrow: "03 / PERFORMANCE",
            title: "복귀 →",
            href: "/approach/performance",
          },
        ],
      },
    },
  ],
  ctaTitle: "회복은 평가에서 시작됩니다",
};

export default function RecoveryPage() {
  return <ApproachDetailPage data={recoveryPageData} />;
}
