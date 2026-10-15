import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/content/projects";
import { CardTraceBorder } from "@/components/ui/CardTraceBorder";
import { cn } from "@/lib/utils";

const sectorColors: Record<string, string> = {
  "Power & Infrastructure": "bg-orange-100 text-orange-800",
  "Renewable Energy & Civil Works": "bg-emerald-100 text-emerald-800",
  "Power & Marine Engineering": "bg-sky-100 text-sky-800",
  "Renewable Energy & Dredging": "bg-teal-100 text-teal-800",
  "Port Infrastructure & Marine Works": "bg-blue-100 text-blue-800",
  "Dredging & Marine Works": "bg-cyan-100 text-cyan-800",
};

const projectImages: Record<string, string> = {
  "payra-1320mw": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop&q=80",
  "pabna-solar-64mw": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop&q=80",
  "madhumati-100mw": "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=500&fit=crop&q=80",
  "sirajganj-solar-68mw": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=500&fit=crop&q=80",
  "payra-port-terminal-road": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=500&fit=crop&q=80",
  "payra-water-intake-dredging": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop&q=80",
};

export function ProjectCard({ project }: { project: Project }) {
  const image =
    projectImages[project.slug] ||
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop&q=80";

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="card-trace project-focus-shadow paper-card group relative overflow-hidden rounded-2xl"
    >
      <CardTraceBorder />
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span
            className={cn(
              "mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium",
              sectorColors[project.sector] ?? "bg-gray-100 text-gray-800",
            )}
          >
            {project.sector}
          </span>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>
      </div>
      <div className="relative p-5">
        <div className="mb-2 flex items-center gap-1.5 text-sm text-text-muted">
          <MapPin className="h-3.5 w-3.5" />
          {project.location}
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-text-muted">{project.summary}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
          View case study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
