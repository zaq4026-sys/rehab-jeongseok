import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

type SectionTone = "ivory" | "white" | "brand-light";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: SectionTone;
  innerClassName?: string;
};

/**
 * Page section wrapper with the project spacing rhythm.
 * Use `brand-light` only for restrained emphasis blocks, not broad page backgrounds.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      tone = "ivory",
      className = "",
      innerClassName = "",
      ...props
    },
    ref,
  ) => {
    const toneClass = {
      ivory: "bg-ivory",
      white: "bg-white",
      "brand-light": "bg-brand-light",
    }[tone];

    return (
      <section
        ref={ref}
        className={`${toneClass} py-section ${className}`}
        {...props}
      >
        <div
          className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${innerClassName}`}
        >
          {children}
        </div>
      </section>
    );
  },
);

Section.displayName = "Section";
