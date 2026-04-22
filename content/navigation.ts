export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "만성통증 재활", href: "/programs/chronic-pain" },
  { label: "뇌질환 재활", href: "/programs/neuro" },
  { label: "상담·예약", href: "/contact" },
];
