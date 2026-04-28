export type ProgramSlug =
  | "lower-back"
  | "neck-shoulder"
  | "knee"
  | "post-surgery"
  | "parkinsons"
  | "athlete";

export type Program = {
  slug: ProgramSlug;
  cardLabel: string;
  title: string;
  cardOneLiner: string;
  heroHeadline: string;
  heroSubtext: string;
  audience: string[];
  approach: {
    evaluation: string;
    recovery: string;
    performance: string;
  };
  milestone: {
    reset10: string;
    zero30: string;
    beyond50: string;
  };
  assetSlots: {
    hero: string;
    assessmentGif: string;
    exerciseGif: string;
  };
  firstEval: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

function createProgramAssetSlots(slug: ProgramSlug) {
  return {
    hero: `/images/programs/${slug}/assessment.png`,
    assessmentGif: `/images/programs/${slug}/assessment.png`,
    exerciseGif: `/images/programs/${slug}/exercise-01.png`,
  };
}

export const PROGRAMS: Program[] = [
  {
    slug: "lower-back",
    cardLabel: "LOWER BACK",
    title: "허리 통증",
    cardOneLiner: "허리가 대신 감당하던 부하를 걷어냅니다.",
    heroHeadline: "허리는 버텨서 낫는 곳이 아닙니다",
    heroSubtext:
      "디스크, 협착, 만성 요통 — 이름은 달라도 공통점은 하나입니다. 허리가 감당하지 않아도 될 부하를 대신 받고 있다는 것. 그 부하를 걷어내는 것이 재활의정석의 시작입니다.",
    audience: [
      "앉아 있으면 허리가 뻐근해진다",
      "허리를 숙이거나 펼 때 통증이 있다",
      "디스크·협착 진단을 받았지만 수술은 피하고 싶다",
      "허리 운동을 했는데 오히려 아파졌다",
      "MRI에는 큰 이상이 없는데 계속 아프다",
    ],
    approach: {
      evaluation:
        "허리 통증의 진짜 원인은 허리에 있지 않은 경우가 많습니다. 고관절 가동성, 복부·둔근 기능, 호흡 패턴까지 함께 평가합니다.",
      recovery:
        "통증을 유발하는 자세와 동작을 먼저 걷어내고, 허리 대신 일해줘야 할 근육들이 일하도록 재학습시킵니다.",
      performance:
        "앉기·서기·들기 같은 일상 동작에서 허리에 부하가 실리지 않는 몸을 만듭니다. 다시 운동을 해도 괜찮은 상태까지.",
    },
    milestone: {
      reset10:
        "통증 강도와 빈도의 명확한 감소. 특정 자세에서 나타나던 통증이 줄어듭니다.",
      zero30:
        "일상 동작에서 허리가 더 이상 걸림돌이 되지 않는 상태. 장시간 앉기·서기가 가능해집니다.",
      beyond50:
        "코어와 둔근이 허리를 대신 지탱하는 몸. 재발 없이 운동까지 복귀합니다.",
    },
    assetSlots: createProgramAssetSlots("lower-back"),
    firstEval: [
      "통증이 발생하는 정확한 자세·방향·타이밍",
      "고관절 가동 범위와 좌우 비대칭",
      "복부·둔근의 활성화 능력",
      "호흡 패턴과 복압 유지 능력",
      "앉기·서기·보행 시 골반 정렬",
    ],
    seo: {
      title: "허리 통증 재활 프로그램 — 광주 재활의정석",
      description:
        "광주에서 허리 통증, 디스크, 만성 요통을 근본부터 다루는 재활 프로그램. 대표 물리치료사가 직접 평가하고 관리합니다.",
      keywords: [
        "광주 허리 재활",
        "광주 디스크 운동",
        "광주 만성 요통",
        "광주 허리통증 운동치료",
      ],
    },
  },
  {
    slug: "neck-shoulder",
    cardLabel: "NECK & SHOULDER",
    title: "목·어깨 통증",
    cardOneLiner: "목·어깨가 따로가 아닌, 같은 원인에서 풀립니다.",
    heroHeadline: "목과 어깨는 따로 아픈 곳이 아닙니다",
    heroSubtext:
      "거북목, 라운드숄더, 만성 뭉침은 대개 같은 뿌리에서 자랍니다. 앉는 자세, 호흡, 견갑의 움직임까지 함께 풀어야 통증이 다시 돌아오지 않습니다.",
    audience: [
      "오후만 되면 목·어깨가 무겁고 두통이 동반된다",
      "마사지를 받아도 금방 다시 뭉친다",
      "팔을 들거나 뒤로 돌릴 때 불편하다",
      "거북목·라운드숄더라는 말을 자주 듣는다",
      "자고 일어나면 목이 더 아프다",
    ],
    approach: {
      evaluation:
        "경추의 문제인지, 견갑의 문제인지, 흉추의 문제인지를 구분합니다. 호흡 패턴과 앉는 자세도 함께 봅니다.",
      recovery:
        "과사용된 상부 승모근의 긴장을 낮추고, 일해야 할 심부 경추 굴곡근과 견갑 안정근이 제 역할을 하도록 다시 가르칩니다.",
      performance:
        "컴퓨터·스마트폰 환경에서도 자세가 무너지지 않는 몸. 장시간 업무 후에도 목·어깨가 무너지지 않습니다.",
    },
    milestone: {
      reset10: "아침·저녁 통증 강도 감소. 두통 빈도가 눈에 띄게 줄어듭니다.",
      zero30:
        "업무 중 통증으로 일이 끊기지 않는 상태. 팔 가동 범위가 정상화됩니다.",
      beyond50:
        "자세가 무너져도 스스로 회복할 수 있는 어깨·흉추 가동성. 재발하지 않는 몸.",
    },
    assetSlots: createProgramAssetSlots("neck-shoulder"),
    firstEval: [
      "경추 가동 범위와 통증 유발 방향",
      "견갑골 움직임 패턴 (Scapular rhythm)",
      "흉추 신전 가동성",
      "호흡 시 목·어깨 보조근 과사용 여부",
      "앉은 자세에서의 머리·견갑 정렬",
    ],
    seo: {
      title: "목·어깨 통증 재활 프로그램 — 광주 재활의정석",
      description:
        "거북목, 라운드숄더, 만성 뭉침. 광주에서 목·어깨 통증의 근본 원인을 다루는 재활 프로그램. 대표 물리치료사가 직접 관리합니다.",
      keywords: [
        "광주 목통증 재활",
        "광주 거북목 교정",
        "광주 어깨통증 운동",
        "광주 라운드숄더",
      ],
    },
  },
  {
    slug: "knee",
    cardLabel: "KNEE",
    title: "무릎 통증",
    cardOneLiner: "무릎이 아닌, 엉덩이와 발목에서 시작합니다.",
    heroHeadline: "무릎은 엉덩이와 발목 사이에서 눌립니다",
    heroSubtext:
      "무릎이 아픈 이유의 대부분은 무릎 자체가 아닙니다. 위에서 고관절이, 아래에서 발목이 제 역할을 못 할 때 무릎이 대신 감당합니다. 그 흐름을 되돌리는 것부터 시작합니다.",
    audience: [
      "계단을 오르내릴 때 무릎이 시큰하다",
      "오래 걷거나 뛰면 무릎이 붓는다",
      "앉았다 일어날 때 무릎에서 소리가 나고 아프다",
      "연골 연화증·반월상연골 문제 진단을 받았다",
      "무릎 수술 이후 운동 복귀가 두렵다",
    ],
    approach: {
      evaluation:
        "무릎뿐 아니라 고관절·발목의 정렬과 가동성, 대퇴사두·둔근의 균형을 함께 평가합니다.",
      recovery:
        "무릎에 실리는 비정상적 부하를 줄이고, 주변 근육이 무릎을 지켜줄 수 있도록 다시 만듭니다.",
      performance:
        "계단·등산·러닝처럼 하중이 실리는 활동에서도 무릎이 흔들리지 않는 몸을 만듭니다.",
    },
    milestone: {
      reset10: "계단·기립 시 통증 감소. 붓기 빈도가 줄어듭니다.",
      zero30:
        "일상 보행과 장시간 서기에서 무릎이 걸림돌이 되지 않습니다.",
      beyond50: "러닝·등산·스포츠 활동 복귀. 무릎이 다시 아프지 않을 몸.",
    },
    assetSlots: createProgramAssetSlots("knee"),
    firstEval: [
      "무릎 가동 범위와 통증 유발 동작",
      "고관절 외전·외회전 근력 (둔중근)",
      "발목 배측굴곡 가동성",
      "스쿼트·런지 시 무릎 정렬 (Knee-in 여부)",
      "좌우 대퇴사두 근력 비대칭",
    ],
    seo: {
      title: "무릎 통증 재활 프로그램 — 광주 재활의정석",
      description:
        "계단·보행·러닝 시 무릎 통증. 광주에서 무릎 재활을 고관절·발목까지 통합해 다루는 전문 프로그램. 대표 물리치료사 직접 관리.",
      keywords: [
        "광주 무릎 재활",
        "광주 무릎통증 운동",
        "광주 연골연화증",
        "광주 슬개건염",
      ],
    },
  },
  {
    slug: "post-surgery",
    cardLabel: "POST-SURGERY",
    title: "수술 후 재활",
    cardOneLiner: "수술이 복원한 구조에, 기능을 되돌립니다.",
    heroHeadline: "수술은 끝이 아니라 재활의 시작입니다",
    heroSubtext:
      "수술이 구조를 복원했다면, 재활은 기능을 복원합니다. 적절한 시기에 적절한 자극이 들어가지 않으면, 구조가 아무리 잘 복원되어도 몸은 수술 전보다 약해집니다.",
    audience: [
      "디스크·협착 수술 후 운동이 두렵다",
      "반월상연골·십자인대 수술 후 복귀를 앞두고 있다",
      "어깨 회전근개 수술 후 가동 범위가 돌아오지 않는다",
      "병원 재활이 끝났지만 일상 복귀가 완전하지 않다",
      "수술 전 상태보다 더 약해지고 싶지 않다",
    ],
    approach: {
      evaluation:
        "수술 부위의 현재 상태, 의료진이 허용한 활동 범위, 주변 관절·근육의 보상 패턴을 모두 확인합니다.",
      recovery:
        "조직 회복 단계에 맞춰 자극의 강도와 방향을 조절합니다. 무리도, 과소 자극도 피합니다.",
      performance:
        "수술 전 수준을 넘어, 같은 부상이 재발하지 않을 몸을 목표로 합니다.",
    },
    milestone: {
      reset10:
        "수술 부위의 가동 범위와 기본 근력 회복. 일상 동작에서의 불안감 감소.",
      zero30: "일상 복귀 완료. 수술 전에 하던 활동 대부분이 가능해집니다.",
      beyond50: "수술 전보다 강한 몸. 재부상 예방 패턴까지 장착합니다.",
    },
    assetSlots: createProgramAssetSlots("post-surgery"),
    firstEval: [
      "수술 부위 가동 범위와 조직 상태",
      "의료진 소견서·운동 제한 범위 확인",
      "수술 부위 주변 근육의 위축 정도",
      "반대측·연결 관절의 보상 패턴",
      "통증 회피 동작 습관",
    ],
    seo: {
      title: "수술 후 재활 프로그램 — 광주 재활의정석",
      description:
        "디스크·십자인대·회전근개 등 수술 후 재활. 광주에서 조직 회복 단계에 맞춘 전문 재활 프로그램을 대표가 직접 관리합니다.",
      keywords: [
        "광주 수술 후 재활",
        "광주 디스크 수술 재활",
        "광주 십자인대 재활",
        "광주 회전근개 재활",
      ],
    },
  },
  {
    slug: "parkinsons",
    cardLabel: "PARKINSON'S",
    title: "파킨슨 재활",
    cardOneLiner: "움직임의 크기와 속도를 다시 가르칩니다.",
    heroHeadline: "움직임의 속도와 크기를 다시 가르칩니다",
    heroSubtext:
      "파킨슨병은 움직임이 '작아지고 느려지는' 병입니다. 재활은 움직임을 '다시 크고 분명하게' 만드는 작업입니다. 약물이 증상을 조절한다면, 운동은 기능을 지킵니다.",
    audience: [
      "파킨슨병 진단을 받고 운동을 시작하고 싶다",
      "걸음이 점점 좁아지고 느려지는 것을 느낀다",
      "돌아설 때 불안정하고 넘어진 적이 있다",
      "보호자가 함께 운동 방향을 잡고 싶다",
      "병원 재활 외에 꾸준한 운동 파트너가 필요하다",
    ],
    approach: {
      evaluation:
        "보행 속도·보폭, 균형, 자세 정렬, 움직임의 크기(amplitude)를 객관적으로 평가합니다. 현재 복용 약물과 의료진 소견도 함께 참고합니다.",
      recovery:
        "파킨슨 재활에 근거가 있는 '크고 빠른 움직임' 원칙을 기반으로, 일상에서 줄어든 움직임의 크기와 속도를 회복시킵니다.",
      performance:
        "낙상 위험을 낮추고, 일상 활동을 최대한 오래 유지할 수 있는 몸을 목표로 합니다.",
    },
    milestone: {
      reset10: "보폭과 보행 속도의 측정 가능한 개선. 움직임의 크기 회복.",
      zero30:
        "일상 동작의 안정성 확보. 낙상 위험 동작(돌기·일어서기)에서의 불안감 감소.",
      beyond50:
        "장기적으로 기능을 유지할 수 있는 운동 습관 내재화. 보호자 동반 가능.",
    },
    assetSlots: createProgramAssetSlots("parkinsons"),
    firstEval: [
      "보행 속도·보폭·좌우 대칭",
      "정적·동적 균형 능력",
      "자세 정렬과 체간 회전 가동성",
      "일어서기·앉기·돌기 동작의 안정성",
      "현재 복용 약물과 의료진 권고 활동 범위",
    ],
    seo: {
      title: "파킨슨 재활 운동 — 광주 재활의정석",
      description:
        "파킨슨병 환자를 위한 전문 재활 운동. 광주에서 보행·균형·낙상 예방을 근거 기반으로 관리합니다. 대표 물리치료사 1:1 직접 진행.",
      keywords: [
        "광주 파킨슨 재활",
        "광주 파킨슨 운동",
        "광주 파킨슨병 물리치료",
        "광주 노인 균형 운동",
      ],
    },
  },
  {
    slug: "athlete",
    cardLabel: "ATHLETE",
    title: "선수 재활",
    cardOneLiner: "'안 아프다'가 아닌, '다시 뛸 수 있다'까지.",
    heroHeadline: "복귀는 통증이 사라진 순간이 아닙니다",
    heroSubtext:
      "선수에게 '안 아프다'는 출발선일 뿐입니다. 경기장에서 요구되는 속도·방향 전환·반복 부하를 견뎌낼 때 비로소 복귀입니다. 그 마지막 구간을 설계합니다.",
    audience: [
      "부상 이후 훈련으로 복귀하려는 선수·운동 경력자",
      "통증은 사라졌지만 경기 감각이 돌아오지 않는다",
      "같은 부상이 반복되고 있다",
      "병원 재활은 마쳤지만 현장 복귀가 불안하다",
      "시즌을 앞두고 컨디션과 부상 위험을 동시에 점검하고 싶다",
    ],
    approach: {
      evaluation:
        "종목 특이적 동작 분석과 함께, 좌우 근력·가동성 비대칭, 감속·방향전환 능력을 평가합니다.",
      recovery:
        "남아 있는 기능 결손을 정밀하게 메웁니다. 통증 유무가 아니라 '경기 요구 수준'을 기준으로 판단합니다.",
      performance:
        "경기장 복귀에 필요한 스피드·파워·반응성까지 단계적으로 재구축합니다.",
    },
    milestone: {
      reset10: "통증·불안감 없이 기본 훈련 동작 수행. 좌우 비대칭 지표 개선.",
      zero30: "종목 특이적 동작 복귀. 감속·방향전환 시 안정성 확보.",
      beyond50: "경기 강도 복귀. 재부상 예방 패턴 내재화.",
    },
    assetSlots: createProgramAssetSlots("athlete"),
    firstEval: [
      "종목 특이적 핵심 동작 수행력",
      "좌우 근력·점프·가동성 비대칭",
      "감속·방향 전환 시 하지 정렬",
      "이전 부상 부위의 잔존 기능 결손",
      "훈련 스케줄과 복귀 목표 시점",
    ],
    seo: {
      title: "선수 재활 프로그램 — 광주 재활의정석",
      description:
        "부상 후 경기 복귀를 앞둔 선수·운동 경력자를 위한 재활. 광주에서 종목 특이적 복귀 프로토콜을 대표가 직접 설계·관리합니다.",
      keywords: [
        "광주 선수 재활",
        "광주 스포츠 재활",
        "광주 십자인대 복귀",
        "광주 운동선수 물리치료",
      ],
    },
  },
];

export function getProgramBySlug(slug: ProgramSlug) {
  return PROGRAMS.find((program) => program.slug === slug);
}
