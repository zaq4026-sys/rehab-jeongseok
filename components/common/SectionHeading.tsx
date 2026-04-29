import type { HTMLAttributes, ReactNode } from "react";

type SectionHeadingProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3";
};

/**
 * Shared heading block for the English kicker + Korean serif headline pattern.
 * Keep long body copy in `description`, not inside the serif title.
 */
export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  titleAs = "h2",
  className = "",
  ...props
}: SectionHeadingProps) {
  const TitleTag = titleAs;
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-4xl ${alignClass} ${className}`} {...props}>
      {kicker ? (
        <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {kicker}
        </p>
      ) : null}

      <TitleTag className="break-keep font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal sm:text-5xl lg:text-6xl">
        {title}
      </TitleTag>

      {description ? (
        <p className="mt-6 max-w-2xl break-keep text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
