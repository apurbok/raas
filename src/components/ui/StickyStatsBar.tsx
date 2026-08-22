"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/company";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

/**
 * Individual animated stat cell. Uses `useCountUp` to increment the value
 * gradually from a `startValue` of 1 rather than from 0.
 */
function AnimatedStat({
  stat,
  isSticky,
  index,
}: {
  stat: (typeof stats)[number];
  isSticky: boolean;
  index: number;
}) {
  // Start from 1 so the number increments gradually while displaying,
  // but never counts up from zero.
  const startValue = 1;
  const { count, ref } = useCountUp(stat.value, {
    startValue,
    duration: 1600,
    delay: index * 150,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center transition-all duration-300",
        index > 0 && "md:border-l md:border-white/15",
        isSticky ? "py-1" : "py-2",
      )}
    >
      <div className="flex items-baseline gap-0.5 leading-none">
        <span
          className={cn(
            "font-extrabold text-white font-heading tracking-tight transition-all duration-300",
            isSticky ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl md:text-5xl",
          )}
        >
          {count.toLocaleString()}
        </span>
        <span
          className={cn(
            "font-bold text-accent transition-all duration-300",
            isSticky ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl md:text-4xl",
          )}
        >
          {stat.suffix}
        </span>
      </div>
      <span
        className={cn(
          "font-medium text-white/80 uppercase tracking-wider transition-all duration-300",
          isSticky ? "text-[11px] sm:text-xs mt-1" : "text-xs sm:text-sm mt-2",
        )}
      >
        {stat.label}
      </span>
    </div>
  );
}

export function StickyStatsBar() {
  const [scrollY, setScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(116);
  const barRef = useRef<HTMLDivElement>(null);

  // Measure dynamic header height accurately
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerEl = document.querySelector("header");
      if (headerEl) {
        setHeaderHeight(headerEl.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  // Track scroll position to calculate stickiness and scale-down factor
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          setScrollY(currentScroll);
          setIsSticky(currentScroll > 450);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Calculate gradual scale factor based on scroll depth past the hero (between 450px and 1200px)
  // Starts at scale 1.0, gradually shrinks to 0.90 for a sleek dock feel
  const scrollOffset = Math.max(0, scrollY - 450);
  const scaleProgress = Math.min(1, scrollOffset / 750);
  const currentScale = 1 - scaleProgress * 0.10; // ranges from 1.00 down to 0.90

  return (
    <div
      ref={barRef}
      className={cn(
        "sticky z-40 w-full transition-all duration-300 pointer-events-auto",
        isSticky
          ? "py-3 sm:py-4 bg-primary-dark/95 backdrop-blur-md shadow-2xl border-b border-white/15"
          : "py-6 sm:py-8 md:py-10 bg-primary-dark border-y border-white/10",
      )}
      style={{
        top: `${headerHeight}px`,
        transformOrigin: "top center",
      }}
    >
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-transform duration-300 hover:scale-100"
        style={{
          transform: isSticky ? `scale(${currentScale})` : "none",
        }}
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 items-center text-center">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              stat={stat}
              isSticky={isSticky}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
