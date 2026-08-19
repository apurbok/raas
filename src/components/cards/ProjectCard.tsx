import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const sectorColors: Record<string, string> = {
  Power: "bg-orange-100 text-orange-800",
  Infrastructure: "bg-blue-100 text-blue-800",
  Dredging: "bg-cyan-100 text-cyan-800",
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
  const image = projectImages[project.slug] || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop&q=80";

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div>
            <span
              className={cn(
                "mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium",
                sectorColors[project.sector] ?? "bg-gray-100 text-gray-800",
              )}
            >
              {project.sector}
            </span>
            <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-1.5 text-sm text-text-muted">
          <MapPin className="h-3.5 w-3.5" />
          {project.location}
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-text-muted">{project.summary}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
          <span className="relative">
            View case study
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}