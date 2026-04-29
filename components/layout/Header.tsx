"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CTAButton } from "@/components/common/CTAButton";
import { NaverBookingLink } from "@/components/ui/NaverBookingLink";
import { mainNavigation } from "@/content/navigation";
import { site } from "@/content/site";

const programMenuGroups = [
  {
    title: "통증·수술 후 재활",
    items: [
      { label: "허리 통증", href: "/programs/lower-back" },
      { label: "목·어깨 통증", href: "/programs/neck-shoulder" },
      { label: "무릎 통증", href: "/programs/knee" },
      { label: "수술 후 재활", href: "/programs/post-surgery" },
    ],
  },
  {
    title: "파킨슨·선수 재활",
    items: [
      { label: "파킨슨 재활", href: "/programs/parkinsons" },
      { label: "선수 재활", href: "/programs/athlete" },
    ],
  },
] as const;

const navigationLinkClass =
  "text-sm font-medium text-charcoal transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

/**
 * Sticky site header with desktop navigation and an accessible mobile overlay menu.
 * Uses a pure brand symbol plus crisp HTML brand text on the ivory background.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[100] border-b border-line bg-ivory/95 backdrop-blur transition-shadow duration-300 ease-calm ${
        hasScrolled ? "shadow-soft" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label={`${site.name} 홈`}
          className="inline-flex items-center gap-2 sm:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          onClick={closeMenu}
        >
          <Image
            src="/images/brand/logo-symbol-pure.png"
            alt="재활의정석 전문운동센터"
            width={512}
            height={512}
            priority
            sizes="56px"
            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-sans text-base font-semibold tracking-[-0.02em] text-charcoal lg:text-lg">
              재활의정석
            </span>
            <span className="font-sans text-xs font-medium tracking-[0.04em] text-muted lg:text-sm">
              전문운동센터
            </span>
          </span>
        </Link>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-8 lg:flex">
          {mainNavigation.map((item) =>
            item.href === "/programs" ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={navigationLinkClass}>
                  {item.label}
                </Link>

                <div className="pointer-events-none absolute left-1/2 top-full z-[120] w-[36rem] -translate-x-1/2 translate-y-2 pt-5 opacity-0 transition-all duration-200 ease-calm group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="border border-line bg-white p-8 shadow-lg">
                    <div className="grid grid-cols-2 gap-8">
                      {programMenuGroups.map((group) => (
                        <div key={group.title}>
                          <p className="mb-4 font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                            {group.title}
                          </p>
                          <ul className="grid gap-3">
                            {group.items.map((program) => (
                              <li key={program.href}>
                                <Link
                                  href={program.href}
                                  className="block text-sm font-medium text-charcoal transition-colors duration-200 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                                >
                                  {program.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 border-t border-line pt-5">
                      <Link
                        href="/programs"
                        className="inline-flex items-center gap-2 font-en text-[11px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors duration-200 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                      >
                        전체 프로그램 보기
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={navigationLinkClass}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phone.replaceAll("-", "")}`}
            className="font-en text-xs font-semibold tracking-[0.14em] text-muted transition-colors duration-300 ease-calm hover:text-brand"
          >
            {site.phone}
          </a>
          <NaverBookingLink
            ariaLabel="네이버 예약 페이지 열기"
            className="inline-flex min-h-12 items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors duration-300 ease-calm hover:bg-brand-dark active:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            1:1 상담 예약
          </NaverBookingLink>
        </div>

        <CTAButton
          variant="text"
          ariaLabel={isMenuOpen ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="lg:hidden"
        >
          <span className="font-en text-xs font-semibold tracking-[0.18em]">
            {isMenuOpen ? "CLOSE" : "MENU"}
          </span>
        </CTAButton>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] bg-ivory transition-all duration-500 ease-calm lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav
          aria-label="모바일 주요 메뉴"
          className="flex h-full flex-col justify-between px-5 pb-8 pt-10 sm:px-8"
        >
          <div className="grid gap-2">
            {mainNavigation.map((item, index) =>
              item.href === "/programs" ? (
                <div key={item.href} className="border-b border-line py-5">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    <span className="mb-2 block font-en text-[11px] font-semibold tracking-[0.18em] text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-3xl font-semibold text-charcoal transition-colors duration-300 ease-calm group-hover:text-brand">
                      {item.label}
                    </span>
                  </Link>

                  <div className="mt-5 grid gap-5 border-l border-line pl-4">
                    {programMenuGroups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-3 font-sans text-xs font-semibold text-muted">
                          {group.title}
                        </p>
                        <div className="grid gap-3">
                          {group.items.map((program) => (
                            <Link
                              key={program.href}
                              href={program.href}
                              onClick={closeMenu}
                              className="font-sans text-base font-medium text-charcoal transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                            >
                              {program.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href="/programs"
                      onClick={closeMenu}
                      className="font-en text-[11px] font-semibold uppercase tracking-[0.18em] text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      전체 프로그램 보기 →
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group border-b border-line py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <span className="mb-2 block font-en text-[11px] font-semibold tracking-[0.18em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-3xl font-semibold text-charcoal transition-colors duration-300 ease-calm group-hover:text-brand">
                    {item.label}
                  </span>
                </Link>
              ),
            )}
          </div>

          <div className="grid gap-4">
            <NaverBookingLink
              ariaLabel="네이버 예약 페이지 열기"
              onClick={closeMenu}
              className="inline-flex min-h-12 w-full items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors duration-300 ease-calm hover:bg-brand-dark active:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              1:1 상담 예약
            </NaverBookingLink>
            <a
              href={`tel:${site.phone.replaceAll("-", "")}`}
              className="text-center font-en text-xs font-semibold tracking-[0.14em] text-muted"
            >
              TEL {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
