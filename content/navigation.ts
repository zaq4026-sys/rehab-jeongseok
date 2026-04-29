export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: "홈", href: "/" },
  { label: "소개", href: "/about" },
  { label: "진행 방식", href: "/approach" },
  { label: "프로그램", href: "/programs" },
  { label: "위치", href: "/#location" },
  { label: "가격·문의", href: "/contact#pricing" },
];
