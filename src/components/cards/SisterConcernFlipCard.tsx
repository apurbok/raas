import Link from "next/link";
import type { SisterConcern } from "@/content/policies";

const concernVisuals: Record<string, { initials: string; gradient: string }> = {
  "rass-resort": {
    initials: "RR",
    gradient: "from-emerald-500 to-teal-600",
  },
  "nrl-eco-bricks": {
    initials: "NRL",
    gradient: "from-lime-500 to-green-700",
  },
  "orbed-green-energy": {
    initials: "OG",
    gradient: "from-sky-500 to-cyan-600",
  },
};

export function SisterConcernFlipCard({ concern }: { concern: SisterConcern }) {
  const visual = concernVisuals[concern.slug] ?? {
    initials: concern.name.slice(0, 2).toUpperCase(),
    gradient: "from-primary to-accent",
  };

  return (
    <div className="flip-card h-72 w-full" tabIndex={0}>
      <div className="flip-card-inner">
        <div
          className={`flip-card-face flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${visual.gradient} p-6 text-center text-white shadow-lg`}
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 text-2xl font-bold tracking-wide backdrop-blur-sm">
            {visual.initials}
          </div>
          <h3 className="text-xl font-semibold leading-snug">{concern.name}</h3>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/80">{concern.category}</p>
          <p className="mt-6 text-[11px] font-medium text-white/70">Hover to explore</p>
        </div>

        <div className="flip-card-back flip-card-face flex flex-col rounded-2xl border border-border bg-white p-6 shadow-lg">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {concern.category}
          </p>
          <h3 className="mb-3 text-lg font-semibold text-primary">{concern.tagline}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted line-clamp-5">
            {concern.description}
          </p>
          <Link
            href={`/sister-concerns/#${concern.slug}`}
            className="text-sm font-semibold text-primary hover:text-accent"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}
