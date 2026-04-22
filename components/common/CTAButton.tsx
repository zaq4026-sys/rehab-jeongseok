import Link from "next/link";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type Ref,
} from "react";

type CTAButtonVariant = "primary" | "secondary" | "text";

type CTAButtonBaseProps = {
  children: ReactNode;
  variant?: CTAButtonVariant;
  ariaLabel?: string;
  className?: string;
};

type CTAButtonLinkProps = CTAButtonBaseProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "children" | "className" | "href" | "aria-label" | "onClick" | "type"
  > & {
    href: string;
    external?: boolean;
    onClick?: never;
    type?: never;
  };

type CTAButtonActionProps = CTAButtonBaseProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className" | "aria-label" | "onClick" | "type"
  > & {
    href?: undefined;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit";
    external?: never;
  };

type CTAButtonProps = CTAButtonLinkProps | CTAButtonActionProps;

/**
 * Branded CTA that renders as Link, external anchor, or button action.
 * Use primary for booking, secondary for navigation, and text for inline CTAs.
 */
export const CTAButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  CTAButtonProps
>(
  (
    {
      children,
      variant = "primary",
      ariaLabel,
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseClass =
      "inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold transition-colors duration-300 ease-calm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50";

    const variantClass = {
      primary: "bg-brand text-white hover:bg-brand-dark active:bg-brand-dark",
      secondary:
        "border border-line bg-transparent text-charcoal hover:border-brand hover:text-brand",
      text: "min-h-0 px-0 text-brand underline-offset-[0.18em] hover:underline focus-visible:outline-offset-2",
    }[variant];

    const combinedClass = `${baseClass} ${variantClass} ${className}`;

    if ("href" in props && props.href) {
      const { href, external = false, ...linkProps } =
        props as CTAButtonLinkProps;

      if (external) {
        return (
          <a
            ref={ref as Ref<HTMLAnchorElement>}
            href={href}
            className={combinedClass}
            target="_blank"
            rel="noreferrer"
            aria-label={ariaLabel}
            {...linkProps}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClass}
          aria-label={ariaLabel}
          {...linkProps}
        >
          {children}
        </Link>
      );
    }

    const { onClick, type = "button", ...buttonProps } =
      props as CTAButtonActionProps;

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        className={combinedClass}
        aria-label={ariaLabel}
        {...buttonProps}
      >
        {children}
      </button>
    );
  },
);

CTAButton.displayName = "CTAButton";
