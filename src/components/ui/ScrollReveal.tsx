"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "blur-in" | "clip-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const variantClasses: Record<AnimationVariant, string> = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "slide-left": "animate-slide-left",
  "slide-right": "animate-slide-right",
  "scale-in": "animate-scale-in",
  "blur-in": "animate-blur-in",
  "clip-up": "animate-clip-up",
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className,
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? variantClasses[variant] : "opacity-0",
        className,
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Wrapper that staggers animations for grid children.
 * Wrap a grid/flex container and each direct child gets a staggered delay.
 */
interface StaggerContainerProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  staggerMs?: number;
  className?: string;
  childClassName?: string;
}

export function StaggerContainer({
  children,
  variant = "fade-up",
  staggerMs = 100,
  className,
  childClassName,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // We need to iterate over children and wrap each in a reveal
  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className={cn(
            isVisible ? variantClasses[variant] : "opacity-0",
            childClassName,
          )}
          style={{
            animationDelay: `${i * staggerMs}ms`,
            animationDuration: "700ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
