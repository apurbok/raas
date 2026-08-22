import { useEffect, useRef, useState } from "react";

type EasingFn = (t: number) => number;

const easeOutCubic: EasingFn = (t) => 1 - Math.pow(1 - t, 3);

interface UseCountUpOptions {
  /** Value to animate FROM (defaults to 0). Set this to avoid incrementing from 0. */
  startValue?: number;
  /** Animation duration in milliseconds. */
  duration?: number;
  /** Delay before animation starts (ms), useful for staggering. */
  delay?: number;
  /** Easing function that receives a 0→1 progress and returns a 0→1 eased value. */
  easing?: EasingFn;
  /** IntersectionObserver threshold (0–1). */
  threshold?: number;
  /** Whether to only animate once. */
  once?: boolean;
}

/**
 * Animates a number from `startValue` to `target` when the observed element
 * enters the viewport. Returns the current count and a ref to attach to the
 * element that should be observed.
 */
export function useCountUp(
  target: number,
  options?: UseCountUpOptions,
) {
  const {
    startValue = 0,
    duration = 1500,
    delay = 0,
    easing = easeOutCubic,
    threshold = 0.3,
    once = true,
  } = options ?? {};

  const [count, setCount] = useState(startValue);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated.current)) {
          if (once) hasAnimated.current = true;

          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(Math.max(0, elapsed - delay) / duration, 1);
            const eased = easing(progress);
            setCount(Math.floor(startValue + eased * (target - startValue)));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, startValue, duration, delay, easing, threshold, once]);

  return { count, ref };
}
