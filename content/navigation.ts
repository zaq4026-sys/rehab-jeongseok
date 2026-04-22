export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Programs", href: "/programs" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/contact" },
];
