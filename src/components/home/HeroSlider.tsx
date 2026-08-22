"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CharReveal, GradientText, Typewriter, WordReveal } from "@/components/ui/AnimatedText";

export type Slide = {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  buttonText: string;
  buttonHref: string;
  bgImage: string;
  badge: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "RASS Associates Ltd",
    tagline: "Heavy Civil & Power Infrastructure",
    subtitle:
      "Premier engineering & construction excellence delivering landmark thermal power plant townships, industrial complexes, and critical infrastructure across Bangladesh.",
    buttonText: "More Details",
    buttonHref: "/projects/payra-1320mw/",
    bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=80",
    badge: "Landmark Mega-Projects",
  },
  {
    id: 2,
    title: "Specialized Dredging & Marine Works",
    tagline: "22-Inch & 20-Inch Cutter Suction Fleet",
    subtitle:
      "Aligning with Bangladesh Delta Plan 2100 with heavy capital dredging, hydraulic land reclamation, riverbank revetment, and sub-river crossing support.",
    buttonText: "More Details",
    buttonHref: "/dredging/",
    bgImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&h=1080&fit=crop&q=80",
    badge: "Marine & Delta Plan 2100",
  },
  {
    id: 3,
    title: "Renewable Energy & Solar Parks",
    tagline: "64 MW Pabna & 68 MW Sirajganj Solar Infrastructure",
    subtitle:
      "Pioneering clean energy transition through turnkey civil engineering, deep soil compaction, dormitory campuses, and solar farm foundation developments.",
    buttonText: "More Details",
    buttonHref: "/projects/pabna-solar-64mw/",
    bgImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop&q=80",
    badge: "Clean Energy Infrastructure",
  },
  {
    id: 4,
    title: "Resources & Heavy Equipment Fleet",
    tagline: "100+ Owned Machinery, Batching Plants & Support Vessels",
    subtitle:
      "Empowered with in-house automated concrete batching plants, transit mixers, mobile power generators, and precision digital surveying instruments.",
    buttonText: "More Details",
    buttonHref: "/equipment/",
    bgImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&q=80",
    badge: "Complete Fleet Superiority",
  },
  {
    id: 5,
    title: "Oil & Gas Infrastructure",
    tagline: "International Energy & Industrial Solutions Platform",
    subtitle:
      "Delivering world-class energy infrastructure, oil & gas facilities, and green energy transition projects across Bangladesh, the Middle East, China, and global markets.",
    buttonText: "More Details",
    buttonHref: "/oil-gas/",
    bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop&q=80",
    badge: "Energy & Infrastructure",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

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
      className="relative w-full overflow-hidden bg-primary-dark select-none min-h-[480px] sm:min-h-[540px] md:min-h-[620px] lg:min-h-[680px] flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none",
            )}
          >
            {/* Real Background Image */}
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          </div>
        );
      })}

      {/* Center Frosted Glass Content Panel (Exact reference to ss-4 & mazadagroup.com) */}
      <div className="relative z-20 container-wide flex items-center justify-center px-4 sm:px-6 py-12 md:py-20">
        <div className="w-full max-w-4xl rounded-2xl md:rounded-3xl border border-white/20 bg-black/45 md:bg-black/50 p-6 sm:p-10 md:p-14 text-center text-white backdrop-blur-md shadow-2xl transition-all duration-500">
          {/* Key wrapper re-triggers animations on slide change */}
          <div key={current} className="">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-3 py-1 text-xs font-bold text-accent uppercase tracking-widest mb-4 animate-fade-up" style={{ animationDelay: "0ms", animationDuration: "600ms" }}>
              {slides[current].badge}
            </div>

            <WordReveal
              text={slides[current].title}
              as="h1"
              className="mb-2 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading"
              staggerMs={80}
              duration={600}
              delay={100}
            />

            <p className="text-sm sm:text-base md:text-lg font-medium text-accent mb-4 animate-fade-up" style={{ animationDelay: "500ms", animationDuration: "700ms" }}>
              {slides[current].tagline}
            </p>

            <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-white/85 leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "700ms", animationDuration: "800ms" }}>
              {slides[current].subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "900ms", animationDuration: "800ms" }}>
              <Link
                href={slides[current].buttonHref}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-sm md:text-base font-bold text-white transition-all duration-200 hover:bg-white hover:text-primary hover:shadow-lg active:scale-95"
              >
                {slides[current].buttonText}
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm md:text-base font-bold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg active:scale-95"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows (< and >) matching ss-4 */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/30 border border-white/20 text-white backdrop-blur-sm transition-all hover:bg-black/60 hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/30 border border-white/20 text-white backdrop-blur-sm transition-all hover:bg-black/60 hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      {/* Slide Indicators / Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              current === index ? "w-8 bg-accent" : "w-2.5 bg-white/40 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}