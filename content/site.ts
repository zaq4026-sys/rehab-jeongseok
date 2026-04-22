type SiteHour = {
  label: string;
  value: string;
  dayOfWeek?: string | string[];
  opens?: string;
  closes?: string;
};

type SiteConfig = {
  name: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  address: {
    text: string;
    road: string;
    detail: string;
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    lat: number;
    lng: number;
  };
  hours: SiteHour[];
  parking: string;
  kakaoChannelUrl: string | null;
  links: {
    naverBooking: string;
    naverPlace: string;
    naverMap: string;
    daangn: string;
  };
};

export const site: SiteConfig = {
  name: "재활의정석 전문운동센터",
  url: "https://rehab-jeongseok.vercel.app",
  phone: "062-447-7377",
  phoneDisplay: "062-447-7377",
  address: {
    text: "광주광역시 서구 하남대로 706, 5층 재활의정석 전문운동센터",
    road: "광주광역시 서구 하남대로 706, 5층",
    detail: "재활의정석 전문운동센터",
    streetAddress: "하남대로 706, 5층",
    locality: "서구",
    region: "광주광역시",
    postalCode: "",
    lat: 35.1713434,
    lng: 126.8698829,
  },
  hours: [
    {
      label: "평일",
      value: "07:00 – 23:00",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "23:00",
    },
    {
      label: "토요일",
      value: "09:00 – 18:00",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      label: "일요일 · 공휴일",
      value: "휴무",
    },
  ],
  parking: "건물 앞 한샘 주차장 2시간 무료",
  kakaoChannelUrl: null,
  links: {
    naverBooking:
      "https://map.naver.com/p/entry/place/2049088805?placePath=/ticket?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604220234&locale=ko&svcName=map_pcv5&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604220234&locale=ko&svcName=map_pcv5&searchType=place&lng=126.8698829&lat=35.1713434&c=15.00,0,0,0,dh",
    naverPlace:
      "https://map.naver.com/p/entry/place/2049088805?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604220234&locale=ko&svcName=map_pcv5&searchType=place&lng=126.8698829&lat=35.1713434&c=15.00,0,0,0,dh",
    naverMap: "https://map.naver.com/p/entry/place/2049088805",
    daangn: "https://www.daangn.com/kr/local-profile/pbht2g5gtkc7/",
  },
};
