import { FadeUp } from "@/components/common/FadeUp";
import { SectionHeading } from "@/components/common/SectionHeading";
import { site } from "@/content/site";

const phoneHref = `tel:${site.phone.replaceAll("-", "")}`;

/**
 * Final location and consultation closer for the home page.
 * Turns the accumulated service story into booking, call, and map actions.
 */
export function LocationCTA() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="bg-ivory py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <FadeUp delayMs={0}>
          <SectionHeading
            id="location-heading"
            kicker="VISIT · CONSULT"
            title="평가는 방문에서 시작됩니다."
            description={
              <>
                전화 한 통, 또는 네이버 예약.
                <br className="hidden sm:block" />
                증상과 일정에 맞춰 첫 방문일을 함께 조율합니다.
              </>
            }
            align="left"
          />
        </FadeUp>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <FadeUp delayMs={100} className="lg:col-span-7">
            <div className="h-full border border-line bg-white p-8 lg:p-12">
              <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                LOCATION
              </p>
              <h3 className="break-keep font-serif text-4xl font-semibold tracking-[-0.025em] text-charcoal lg:text-5xl">
                오시는 길
              </h3>

              <dl className="mt-10 grid gap-6">
                <div className="grid gap-2 border-b border-line pb-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <dt className="font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    ADDRESS
                  </dt>
                  <dd className="break-keep font-sans text-base leading-8 text-charcoal">
                    {site.address.road}
                    <br />
                    {site.address.detail}
                  </dd>
                </div>

                <div className="grid gap-2 border-b border-line pb-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <dt className="font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    CONTACT
                  </dt>
                  <dd>
                    <a
                      href={phoneHref}
                      aria-label={`전화로 상담 문의: ${site.phoneDisplay}`}
                      className="font-sans text-base font-semibold leading-8 text-charcoal transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>

                <div className="grid gap-2 border-b border-line pb-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <dt className="font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    HOURS
                  </dt>
                  <dd className="font-sans text-base leading-8 text-charcoal">
                    <div className="grid gap-1">
                      {site.hours.map((hour) => (
                        <span key={hour.label}>
                          {hour.label} {hour.value}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>

                <div className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <dt className="font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    PARKING
                  </dt>
                  <dd className="break-keep font-sans text-base leading-8 text-charcoal">
                    {site.parking}
                  </dd>
                </div>
              </dl>

              {/* TODO: 네이버 지도 iframe 승인 후 실제 임베드로 교체. */}
              <a
                href={site.links.naverMap}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="네이버 지도에서 센터 위치 보기 (새 창)"
                className="group relative mt-10 block aspect-[16/9] overflow-hidden border border-line bg-[#EFEBE4] transition-colors duration-500 ease-calm hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:mt-12"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.52)_0%,rgba(232,244,244,0.38)_48%,rgba(26,26,26,0.04)_100%)]" />
                <div className="absolute inset-x-8 top-8 h-px bg-charcoal/10" />
                <div className="absolute inset-y-8 left-8 w-px bg-charcoal/10" />
                <div className="absolute inset-x-8 bottom-8 h-px bg-charcoal/10" />
                <div className="absolute inset-y-8 right-8 w-px bg-charcoal/10" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <p className="font-serif text-5xl font-semibold tracking-[-0.025em] text-charcoal/20 sm:text-6xl">
                    MAP
                  </p>
                  <p className="mt-4 font-sans text-sm font-semibold text-charcoal transition-colors duration-500 ease-calm group-hover:text-brand sm:text-base">
                    네이버 지도에서 위치 보기 →
                  </p>
                  <p className="absolute bottom-6 left-6 right-6 truncate font-sans text-xs text-muted">
                    {site.address.road}
                  </p>
                </div>
              </a>
            </div>
          </FadeUp>

          <FadeUp delayMs={200} className="lg:col-span-5">
            <aside className="h-full bg-charcoal p-10 text-ivory lg:p-12">
              <p className="mb-6 font-en text-xs font-semibold uppercase tracking-[0.18em] text-ivory/70">
                CONSULT NOW
              </p>
              <h3 className="break-keep font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-ivory lg:text-4xl">
                첫 상담은
                <br />
                가볍게 시작하세요.
              </h3>

              <p className="mt-8 break-keep font-sans text-sm leading-7 text-ivory/75 lg:text-base lg:leading-8">
                현재 증상과 궁금한 점을 먼저 듣습니다.
                <br />
                이후 방문 평가 일정을 함께 조율합니다.
                <br />
                상담만으로는 비용이 발생하지 않습니다.
              </p>

              <div className="mt-10 grid gap-3 lg:mt-12">
                <a
                  href={site.links.naverBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="네이버 예약 페이지로 이동 (새 창)"
                  className="inline-flex min-h-14 items-center justify-between bg-ivory px-5 font-sans text-sm font-semibold text-charcoal transition-colors duration-300 ease-calm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <span>네이버 예약</span>
                  <span aria-hidden="true">→</span>
                </a>

                {site.kakaoChannelUrl ? (
                  <a
                    href={site.kakaoChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="카카오톡 채널 상담 페이지로 이동 (새 창)"
                    className="inline-flex min-h-14 items-center justify-between border border-ivory/40 px-5 font-sans text-sm font-semibold text-ivory transition-colors duration-300 ease-calm hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    <span>카카오톡 상담</span>
                    <span aria-hidden="true">→</span>
                  </a>
                ) : null}

                <a
                  href={phoneHref}
                  aria-label={`전화로 상담 문의: ${site.phoneDisplay}`}
                  className="group border border-ivory/50 px-5 py-4 text-ivory transition-colors duration-300 ease-calm hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <span className="mb-2 block font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/60 transition-colors duration-300 ease-calm group-hover:text-brand">
                    CALL DIRECTLY
                  </span>
                  <span className="font-en text-sm font-semibold tracking-[0.12em]">
                    {site.phoneDisplay}
                  </span>
                </a>

                <a
                  href={site.links.daangn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="당근마켓에서 상담 문의하기 (새 창)"
                  className="inline-flex items-center gap-2 pt-3 font-sans text-sm font-semibold text-ivory/70 underline underline-offset-[0.18em] transition-colors duration-300 ease-calm hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  당근마켓에서 문의
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </aside>
          </FadeUp>
        </div>

        <FadeUp delayMs={300}>
          <div className="mt-24 text-center lg:mt-32">
            <p className="break-keep font-serif text-2xl font-semibold leading-[1.35] tracking-[-0.02em] text-charcoal lg:text-3xl">
              아프지 않은 내일을 돌려드리는 게 저희의 일입니다.
            </p>
            <p className="mt-6 font-en text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              — 재활의정석 전문운동센터
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
