import { CTAButton } from "@/components/common/CTAButton";
import { FadeUp } from "@/components/common/FadeUp";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { customerReviews, reviewStats } from "@/content/reviews";
import { site } from "@/content/site";

const reviewStatItems = [
  {
    label: "NAVER PLACE REVIEWS",
    value: reviewStats.naverPlaceCount,
    description: "누적 후기",
  },
  {
    label: "AVERAGE RATING",
    value: reviewStats.averageRating,
    description: "네이버 플레이스 기준",
  },
  {
    label: "REVIEW CHANNELS",
    value: reviewStats.channels
      .map((channel) => channel.replace(" 플레이스", "").replace("마켓", ""))
      .join(" · "),
    description: "두 채널에서 실시간 누적",
  },
];

/**
 * Customer review section backed by selected consented reviews.
 * Shows social proof from public review channels without fabricating testimonials.
 */
export function CustomerReviews() {
  return (
    <Section tone="white" aria-labelledby="reviews-heading">
      <FadeUp delayMs={0}>
        <SectionHeading
          id="reviews-heading"
          kicker="VOICES"
          title="실제 방문하신 분들의 이야기입니다."
          description="가짜 후기를 만들지 않습니다. 네이버 플레이스와 당근마켓에 쌓인 실제 후기 중, 대표가 게재 동의를 받아 선별한 이야기입니다."
          align="left"
        />
      </FadeUp>

      <FadeUp delayMs={120}>
        <div className="mt-16 grid grid-cols-1 border border-line bg-ivory md:grid-cols-3 lg:mt-20">
          {reviewStatItems.map((item, index) => {
            const isLast = index === reviewStatItems.length - 1;

            return (
              <div
                key={item.label}
                className={`p-8 lg:p-10 ${
                  isLast ? "" : "border-b border-line md:border-b-0 md:border-r"
                }`}
              >
                <p className="mb-4 font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </p>
                <p className="font-serif text-5xl font-semibold leading-none tracking-[-0.025em] text-brand lg:text-6xl">
                  {item.value}
                </p>
                <p className="mt-4 font-sans text-sm text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </FadeUp>

      <div className="mt-20 grid grid-cols-1 gap-6 lg:mt-24 lg:grid-cols-3 lg:gap-8">
        {customerReviews.map((review, index) => (
          <FadeUp key={review.id} delayMs={240 + index * 120}>
            <article className="flex h-full flex-col border border-line bg-ivory p-8 lg:p-10">
              <div className="mb-6 font-serif text-5xl leading-none text-brand lg:text-6xl">
                &quot;
              </div>

              <blockquote className="flex-1 whitespace-pre-line break-keep font-serif text-base leading-8 text-charcoal lg:text-lg">
                {review.quote}
              </blockquote>

              <div className="my-8 h-px w-12 bg-line" />

              <footer className="grid gap-2">
                <p className="font-sans text-sm font-semibold text-charcoal">
                  — {review.ageGender} · {review.condition}
                </p>
                <p className="font-en text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  출처: {review.source}
                </p>
              </footer>
            </article>
          </FadeUp>
        ))}
      </div>

      <FadeUp delayMs={600}>
        <div className="mt-16 flex flex-col items-start gap-4 sm:flex-row sm:gap-5 lg:mt-20">
          <CTAButton
            href={site.links.naverPlace}
            external
            ariaLabel="네이버 플레이스에서 전체 후기 보기"
          >
            네이버 플레이스 후기 전체 보기 →
          </CTAButton>

          <CTAButton
            href={site.links.daangn}
            external
            variant="secondary"
            ariaLabel="당근마켓에서 후기 보기"
          >
            당근마켓 후기 보기
          </CTAButton>
        </div>
      </FadeUp>
    </Section>
  );
}
