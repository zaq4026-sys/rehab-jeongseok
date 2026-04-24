import type { HTMLAttributes } from "react";

type PlaceholderAspect = "3:4" | "4:3" | "1:1" | "16:9";

type PlaceholderImageProps = HTMLAttributes<HTMLDivElement> & {
  aspect?: PlaceholderAspect;
  label?: string;
  futureSrc?: string;
};

/**
 * Desaturated placeholder for profile, center, and program imagery.
 * Use until approved photography replaces the visual slot.
 */
export function PlaceholderImage({
  aspect = "3:4",
  label,
  futureSrc,
  className = "",
  ...props
}: PlaceholderImageProps) {
  const aspectClass = {
    "3:4": "aspect-[3/4]",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "16:9": "aspect-video",
  }[aspect];

  return (
    <div
      role="img"
      aria-label={
        label
          ? `${label}${futureSrc ? `, 추후 ${futureSrc} 로 교체` : ""}`
          : futureSrc
            ? `추후 ${futureSrc} 로 교체될 이미지`
            : "이미지 준비 중"
      }
      className={`relative overflow-hidden border border-line ${aspectClass} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f4f4f1_0%,#eff4f3_45%,#e6eeed_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(28,154,153,0.14),transparent_38%)]" />
      <div className="absolute inset-x-6 top-6 h-px bg-line" />
      <div className="absolute inset-y-6 left-6 w-px bg-line" />
      <div className="absolute inset-x-6 bottom-6 h-px bg-line" />
      <div className="absolute inset-y-6 right-6 w-px bg-line" />

      {label || futureSrc ? (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div className="max-w-[18rem]">
            {label ? (
              <span className="block break-keep font-en text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                {label}
              </span>
            ) : null}

            {futureSrc ? (
              <span className="mt-2 block break-all font-en text-[9px] tracking-[0.16em] text-muted/70">
                FUTURE: {futureSrc}
              </span>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
