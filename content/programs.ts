export type ProgramPageData = {
  slug: string;
  title: string;
  kicker: string;
  targetSymptoms: string[];
  differentiators: string[];
  processApplication: {
    step: string;
    description: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const chronicPainPrograms = {
  "lower-back": {
    slug: "lower-back",
    title: "광주 허리 재활",
    kicker: "CHRONIC LOW BACK PAIN REHABILITATION",
    targetSymptoms: [],
    differentiators: [],
    processApplication: [],
    faqs: [],
    metadata: {
      title: "광주 허리 재활 | 재활의정석 전문운동센터",
      description:
        "광주 허리 재활, 요통 재활, 디스크 재활운동을 평가 후 단계별로 설계합니다.",
      keywords: ["광주 허리 재활", "광주 요통 재활", "광주 디스크 재활운동"],
    },
  },
  shoulder: {
    slug: "shoulder",
    title: "광주 어깨 재활",
    kicker: "CHRONIC SHOULDER PAIN REHABILITATION",
    targetSymptoms: [],
    differentiators: [],
    processApplication: [],
    faqs: [],
    metadata: {
      title: "광주 어깨 재활 | 재활의정석 전문운동센터",
      description:
        "광주 어깨 재활과 회전근개 손상 후 관리를 움직임 평가 기반으로 설계합니다.",
      keywords: ["광주 어깨 재활", "광주 회전근개 재활"],
    },
  },
  elbow: {
    slug: "elbow",
    title: "광주 팔꿈치 재활",
    kicker: "ELBOW PAIN REHABILITATION",
    targetSymptoms: [],
    differentiators: [],
    processApplication: [],
    faqs: [],
    metadata: {
      title: "광주 팔꿈치 재활 | 재활의정석 전문운동센터",
      description:
        "광주 팔꿈치 재활, 테니스엘보와 골프엘보 관리를 평가 후 단계별로 안내합니다.",
      keywords: ["광주 팔꿈치 재활", "광주 테니스엘보"],
    },
  },
  ankle: {
    slug: "ankle",
    title: "광주 발목 재활",
    kicker: "ANKLE INSTABILITY REHABILITATION",
    targetSymptoms: [],
    differentiators: [],
    processApplication: [],
    faqs: [],
    metadata: {
      title: "광주 발목 재활 | 재활의정석 전문운동센터",
      description:
        "광주 발목 재활과 발목 염좌 후 관리를 회복 단계에 맞춰 설계합니다.",
      keywords: ["광주 발목 재활", "광주 발목 염좌"],
    },
  },
} satisfies Record<string, ProgramPageData>;

export const neuroPrograms = {
  parkinson: {
    slug: "parkinson",
    title: "광주 파킨슨 재활",
    kicker: "PARKINSON'S DISEASE REHABILITATION",
    targetSymptoms: [],
    differentiators: [],
    processApplication: [],
    faqs: [],
    metadata: {
      title: "광주 파킨슨 재활 | 재활의정석 전문운동센터",
      description:
        "광주 파킨슨 재활과 파킨슨 운동을 기능 평가 후 단계별로 안내합니다.",
      keywords: ["광주 파킨슨 재활", "광주 파킨슨 운동"],
    },
  },
  stroke: {
    slug: "stroke",
    title: "광주 뇌졸중 재활",
    kicker: "STROKE REHABILITATION",
    targetSymptoms: [],
    differentiators: [],
    processApplication: [],
    faqs: [],
    metadata: {
      title: "광주 뇌졸중 재활 | 재활의정석 전문운동센터",
      description:
        "광주 뇌졸중 재활과 뇌경색 재활운동을 기능 회복 단계에 맞춰 안내합니다.",
      keywords: ["광주 뇌졸중 재활", "광주 뇌경색 재활운동"],
    },
  },
} satisfies Record<string, ProgramPageData>;
