"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
 * WordReveal — Splits text into words, each word
 * animates in with staggered delay (fade-up + blur)
 * ───────────────────────────────────────────── */
interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerMs?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  light?: boolean;
  once?: boolean;
}

export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  staggerMs = 80,
  duration = 600,
  as: Tag = "span",
  light = false,
  once = true,
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
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
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  const words = text.split(" ");

  return (
    <Tag ref={ref as any} className={cn("block", className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn(
            "inline-block whitespace-pre transition-all will-change-transform",
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-5 blur-[6px]",
            wordClassName,
          )}
          style={{
            transitionDelay: `${delay + i * staggerMs}ms`,
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
 * CharReveal — Splits text into individual characters
 * for letter-by-letter animation
 * ───────────────────────────────────────────── */
interface CharRevealProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  staggerMs?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  light?: boolean;
  once?: boolean;
}

export function CharReveal({
  text,
  className,
  charClassName,
  delay = 0,
  staggerMs = 30,
  duration = 500,
  as: Tag = "span",
  light = false,
  once = true,
}: CharRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
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
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  const chars = text.split("");

  return (
    <Tag ref={ref as any} className={cn("inline", className)}>
      {chars.map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={cn(
            "inline-block transition-all will-change-transform",
            char === " " ? "w-[0.25em]" : "",
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-3 blur-[4px]",
            charClassName,
          )}
          style={{
            transitionDelay: `${delay + i * staggerMs}ms`,
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
 * Typewriter — Types text character-by-character
 * with configurable speed and blinking cursor
 * ───────────────────────────────────────────── */
interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
  cursorClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  light?: boolean;
}

export function Typewriter({
  text,
  className,
  speed = 50,
  startDelay = 300,
  showCursor = true,
  cursorClassName,
  as: Tag = "span",
  light = false,
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);

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
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let charIndex = 0;
    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        charIndex++;
        setDisplayed(text.slice(0, charIndex));
        if (charIndex >= text.length) {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [isVisible, text, speed, startDelay]);

  return (
    <Tag ref={ref as any} className={cn("inline", className)}>
      {displayed}
      {showCursor && (
        <span
          className={cn(
            "inline-block w-[2px] h-[1em] align-middle ml-0.5 animate-blink",
            light ? "bg-white" : "bg-accent",
            isDone && "opacity-0",
            cursorClassName,
          )}
        />
      )}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
 * GradientText — Applies an animated gradient
 * background to text (background-position shift)
 * ───────────────────────────────────────────── */
interface GradientTextProps {
  text: string;
  className?: string;
  gradient?: string;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function GradientText({
  text,
  className,
  gradient = "linear-gradient(90deg, #e87722, #f5a623, #e87722, #f5a623)",
  duration = 4,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-clip-text text-transparent animate-gradient-shift",
        className,
      )}
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% 100%",
        animationDuration: `${duration}s`,
      }}
    >
      {text}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
 * LineReveal — Splits multi-line text and animates
 * each line with a clip-path / translateY reveal
 * ───────────────────────────────────────────── */
interface LineRevealProps {
  text: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
  staggerMs?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  light?: boolean;
  once?: boolean;
}

export function LineReveal({
  text,
  className,
  lineClassName,
  delay = 0,
  staggerMs = 150,
  duration = 700,
  as: Tag = "span",
  light = false,
  once = true,
}: LineRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
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
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  const lines = text.split("\n");

  return (
    <Tag ref={ref as any} className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <span
            className={cn(
              "block transition-all will-change-transform",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full",
              lineClassName,
            )}
            style={{
              transitionDelay: `${delay + i * staggerMs}ms`,
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
 * AnimatedUnderline — Draws an underline from
 * left-to-right on scroll into view
 * ───────────────────────────────────────────── */
interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  height?: number;
  delay?: number;
  duration?: number;
}

export function AnimatedUnderline({
  children,
  className,
  color = "currentColor",
  height = 2,
  delay = 0,
  duration = 800,
}: AnimatedUnderlineProps) {
  const ref = useRef<HTMLSpanElement>(null);
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
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={cn("relative inline-block", className)}>
      {children}
      <span
        className="absolute left-0 bottom-0 w-full origin-left transition-transform"
        style={{
          height: `${height}px`,
          backgroundColor: color,
          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          transitionDelay: `${delay}ms`,
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </span>
  );
}

/* ─────────────────────────────────────────────
 * HoverUnderline — Draws an underline on hover
 * (for links, nav items, etc.)
 * ───────────────────────────────────────────── */
interface HoverUnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  height?: number;
}

export function HoverUnderline({
  children,
  className,
  color = "currentColor",
  height = 2,
}: HoverUnderlineProps) {
  return (
    <span className={cn("relative inline-block group/underline", className)}>
      {children}
      <span
        className="absolute left-0 bottom-0 w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/underline:scale-x-100"
        style={{
          height: `${height}px`,
          backgroundColor: color,
        }}
      />
    </span>
  );
}