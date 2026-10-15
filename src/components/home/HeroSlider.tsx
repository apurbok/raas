"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Typewriter } from "@/components/ui/AnimatedText";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  buttonHref: string;
  bgImage: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Oil & Gas",
    subtitle:
      "Energy infrastructure, terminals, and industrial solutions for clients expanding across Bangladesh and international markets.",
    buttonHref: "/oil-gas/",
    bgImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Power Infrastructure",
    subtitle:
      "Turnkey civil works for landmark thermal and solar power plants — built on time, to specification, and to international safety standards.",
    buttonHref: "/projects/payra-1320mw/",
    bgImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Marine & Dredging",
    subtitle:
      "Capital dredging, hydraulic filling, and riverine works with in-house cutter suction dredgers aligned to Delta Plan 2100.",
    buttonHref: "/dredging/",
    bgImage:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&h=1080&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Engineering Excellence",
    subtitle:
      "A construction company delivering power campuses and marine civil works — now expanding as an international energy infrastructure partner.",
    buttonHref: "/about/",
    bgImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=80",
  },
];

const SLIDE_MS = 10000;

export function HeroSlider() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 50) nextSlide();
    else if (diffX < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative -mt-16 flex min-h-[88svh] w-full items-center justify-center overflow-hidden bg-primary md:-mt-[4.5rem]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              isActive ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={!isActive}
          >
            <img
              src={slide.bgImage}
              alt={slide.title}
              className={cn("absolute inset-0 h-full w-full object-cover", isActive && "animate-ken-burns")}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/25 to-black/40" />
          </div>
        );
      })}

      <div className="relative z-10 container-wide flex items-center justify-center px-4 py-28">
        <div
          key={current}
          className="animate-hero-panel w-full max-w-xl rounded-xl border border-white/15 bg-black/35 px-5 py-7 text-center text-white sm:max-w-2xl sm:px-8 sm:py-9"
        >
          <div className="min-h-[2.75rem] sm:min-h-[3.5rem]">
            <Typewriter
              text={slides[current].title}
              as="h1"
              speed={55}
              startDelay={120}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-4xl"
              cursorClassName="text-white/80"
            />
          </div>
          <p className="mx-auto mb-6 mt-3 max-w-lg animate-fade-up text-sm leading-relaxed text-white/85 sm:text-[0.95rem]">
            {slides[current].subtitle}
          </p>
          <Link
            href={slides[current].buttonHref}
            className="inline-flex rounded-full bg-white px-7 py-2.5 text-sm font-semibold tracking-wide text-primary shadow-lg transition-all hover:bg-accent hover:text-white"
          >
            {t("More Details")}
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white transition hover:bg-white hover:text-primary sm:left-6"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white transition hover:bg-white hover:text-primary sm:right-6"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              current === index ? "w-8 bg-white" : "w-2 bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
