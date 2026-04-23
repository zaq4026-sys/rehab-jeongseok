"use client";

import {
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import { site } from "@/content/site";

type NaverBookingLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href" | "rel" | "target"
> & {
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

/**
 * Device-aware Naver booking link.
 * Renders the desktop URL on SSR, then swaps to the mobile URL after mount.
 */
export function NaverBookingLink({
  className,
  ariaLabel,
  children,
  ...props
}: NaverBookingLinkProps) {
  const [href, setHref] = useState(site.links.naverBooking.desktop);

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(
      navigator.userAgent,
    );

    setHref(
      isMobile
        ? site.links.naverBooking.mobile
        : site.links.naverBooking.desktop,
    );
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </a>
  );
}
