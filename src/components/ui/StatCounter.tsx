"use client";

import { useCountUp } from "@/hooks/useCountUp";

export function StatCounter({
  value,
  suffix = "",
  label,
  startValue = 0,
  duration = 1500,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  /** Value to animate FROM (defaults to 0). Set this to avoid incrementing from 0. */
  startValue?: number;
  /** Animation duration in milliseconds. */
  duration?: number;
  /** Delay before animation starts (ms), useful for staggering. */
  delay?: number;
}) {
  const { count, ref } = useCountUp(value, { startValue, duration, delay });

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold text-white md:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}
