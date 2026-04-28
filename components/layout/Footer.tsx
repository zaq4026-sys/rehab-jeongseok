import Image from "next/image";
import Link from "next/link";
import { NaverBookingLink } from "@/components/ui/NaverBookingLink";
import { mainNavigation } from "@/content/navigation";
import { site } from "@/content/site";

/**
 * Site footer with center information, sitemap, and external booking channels.
 * Keeps business details semantic while JSON-LD handles structured data elsewhere.
 */
export function Footer() {
  const externalLinks = [
    { label: "네이버 플레이스", href: site.links.naverPlace },
    { label: "카카오톡", href: site.kakaoChannelUrl },
    { label: "당근", href: site.links.daangn },
  ].filter(
    (item): item is { label: string; href: string } => Boolean(item.href),
  );

  return (
    <footer role="contentinfo" className="border-t border-line bg-ivory">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-8 border-b border-line pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              REHAB JEONGSEOK
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal sm:text-5xl lg:text-6xl">
              재활의정석
              <br />
              전문운동센터
            </h2>
          </div>

          <p className="max-w-2xl font-serif text-2xl leading-relaxed tracking-[-0.02em] text-charcoal sm:text-3xl">
            아프지 않은 내일을 돌려드리는 게 저희의 일입니다.
          </p>
        </div>

        <div className="grid gap-12 border-b border-line py-14 md:grid-cols-2 lg:grid-cols-3">
          <section aria-labelledby="footer-center-info">
            <div className="mb-8 inline-block border border-brand bg-brand p-2">
              <Image
                src="/images/brand/logo-horizontal-dark-card.png"
                alt="재활의정석 전문운동센터"
                width={1565}
                height={716}
                sizes="240px"
                className="h-auto w-56 sm:w-60"
              />
            </div>

            <h3 id="footer-center-info" className="sr-only">
              센터 정보
            </h3>

            <dl className="grid gap-5 text-sm leading-7">
              <div>
                <dt className="mb-1 font-en text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Address
                </dt>
                <dd className="text-charcoal">
                  {site.address.road}
                  <br />
                  {site.address.detail}
                </dd>
              </div>

              <div>
                <dt className="mb-1 font-en text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Tel
                </dt>
                <dd>
                  <a
                    href={`tel:${site.phone.replaceAll("-", "")}`}
                    aria-label={`재활의정석 전문운동센터 전화 ${site.phone}`}
                    className="text-charcoal transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="mb-1 font-en text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Hours
                </dt>
                <dd>
                  <div className="grid gap-1 text-charcoal">
                    {site.hours.map((hour) => (
                      <div key={hour.label}>
                        {hour.label} {hour.value}
                      </div>
                    ))}
                  </div>
                </dd>
              </div>
            </dl>
          </section>

          <nav aria-label="사이트맵">
            <h3 className="mb-6 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Sitemap
            </h3>
            <ul className="grid gap-4">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-charcoal transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="외부 채널">
            <h3 className="mb-6 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Channels
            </h3>
            <ul className="grid gap-4">
              <li>
                <NaverBookingLink
                  ariaLabel="네이버 예약 외부 페이지 열기"
                  className="text-sm font-medium text-charcoal transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  네이버 예약
                </NaverBookingLink>
              </li>
              {externalLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.label} 외부 페이지 열기`}
                    className="text-sm font-medium text-charcoal transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 재활의정석 전문운동센터. All rights reserved.</p>

          <div className="flex gap-5">
            {/* TODO: 개인정보처리방침 페이지 생성 후 href 교체 */}
            <Link
              href="#"
              className="transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              개인정보처리방침
            </Link>

            {/* TODO: 이용약관 페이지 생성 후 href 교체 */}
            <Link
              href="#"
              className="transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
