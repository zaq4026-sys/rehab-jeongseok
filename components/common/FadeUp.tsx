"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type FadeUpProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delayMs?: number;
};

/**
 * Minimal Intersection Observer fade-up wrapper.
 * Respects reduced motion and reveals content once it enters the viewport.
 */
export const FadeUp = forwardRef<HTMLDivElement, FadeUpProps>(
  ({ children, delayMs = 0, className = "", style, ...props }, forwardedRef) => {
    const localRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const node = localRef.current;
      if (!node) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        setIsVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -80px 0px",
        },
      );

      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    }, []);

    return (
      <div
        ref={(node) => {
          localRef.current = node;

          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={`transition-all duration-700 ease-calm ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        } ${className}`}
        style={{
          transitionDelay: isVisible ? `${delayMs}ms` : "0ms",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FadeUp.displayName = "FadeUp";
