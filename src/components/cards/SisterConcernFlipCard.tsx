"use client";

import { useState } from "react";
import {
  ArrowRight,
  Building,
  CheckCircle2,
  ExternalLink,
  Hotel,
  Layers,
  RotateCw,
  SunMedium,
  Trees,
} from "lucide-react";
import type { SisterConcern } from "@/content/policies";
import { cn } from "@/lib/utils";

const concernIcons = {
  "rass-resort": Hotel,
  "nrl-eco-bricks": Layers,
  "orbed-green-energy": SunMedium,
};

const concernGradients = {
  "rass-resort": "from-emerald-600 to-teal-800",
  "nrl-eco-bricks": "from-amber-600 to-orange-800",
  "orbed-green-energy": "from-blue-600 to-cyan-800",
};

export function SisterConcernFlipCard({ concern }: { concern: SisterConcern }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = concernIcons[concern.slug as keyof typeof concernIcons] || Building;
  const gradient =
    concernGradients[concern.slug as keyof typeof concernGradients] || "from-primary to-primary-dark";

  return (
    <div
      className="group relative h-[420px] w-full [perspective:1200px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : "",
        )}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 h-full w-full rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow group-hover:shadow-xl [backface-visibility:hidden] flex flex-col justify-between overflow-hidden">
          {/* Subtle decorative background accent */}
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-surface-dark/50 pointer-events-none" />

          <div>
            {/* Logo / Badge */}
            <div className="mb-6 flex items-center justify-between">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md transition-transform group-hover:scale-105",
                  gradient,
                )}
              >
                <Icon className="h-8 w-8 text-white" />
              </div>
              <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-text-muted">
                {concern.category}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="mb-2 text-2xl font-bold text-primary font-heading tracking-tight">
              {concern.name}
            </h3>
            <p className="text-sm font-semibold text-accent leading-snug mb-4">
              {concern.tagline}
            </p>

            {/* Preview Description snippet */}
            <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
              {concern.description}
            </p>
          </div>

          {/* Bottom Flip Indicator */}
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-accent">
            <span className="flex items-center gap-1.5">
              <RotateCw className="h-3.5 w-3.5 animate-spin duration-3000" />
              Hover or tap to flip card
            </span>
            <span className="text-text-muted group-hover:text-accent transition-colors">
              Details &rarr;
            </span>
          </div>
        </div>

        {/* BACK SIDE (180deg rotated) */}
        <div className="absolute inset-0 h-full w-full rounded-2xl border border-primary/20 bg-primary-dark p-6 sm:p-7 text-white shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between overflow-hidden">
          {/* Glowing gradient backdrop */}
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                {concern.category}
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                <Icon className="h-4 w-4" />
              </div>
            </div>

            <h4 className="text-xl font-bold text-white mb-1">{concern.name}</h4>
            <p className="text-xs text-white/80 italic mb-3">{concern.tagline}</p>

            <p className="text-xs text-white/90 leading-relaxed mb-4 line-clamp-4">
              {concern.description}
            </p>

            {/* Key Specs / Highlights */}
            {concern.specs && concern.specs.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {concern.specs.slice(0, 2).map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-lg bg-white/10 p-2 text-left backdrop-blur-sm"
                  >
                    <div className="text-[10px] text-white/60 uppercase">{spec.label}</div>
                    <div className="text-xs font-bold text-white truncate">{spec.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="pt-3 border-t border-white/15 flex items-center justify-between">
            {concern.website ? (
              <a
                href={concern.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-xs font-bold text-white transition-all hover:bg-accent-hover active:scale-95"
              >
                Visit Website
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="text-xs text-white/60">Sister Concern of RASS</span>
            )}

            {concern.phone && (
              <a
                href={`tel:${concern.phone}`}
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-white/80 hover:text-accent transition-colors"
              >
                {concern.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
