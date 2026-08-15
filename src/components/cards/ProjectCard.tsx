import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const sectorColors: Record<string, string> = {
  Power: "bg-orange-100 text-orange-800",
  Infrastructure: "bg-blue-100 text-blue-800",
  Dredging: "bg-cyan-100 text-cyan-800",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/80 to-primary-dark">
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
          <div>
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
      </div>
      <div className="p-5">
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
