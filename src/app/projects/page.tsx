"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { StaggerContainer } from "@/components/ui/ScrollReveal";
import { projects, type ProjectStatus } from "@/content/projects";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Power", value: "Power" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "Dredging", value: "Dredging" },
] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "completed" || activeFilter === "ongoing") {
      return projects.filter((p) => p.status === (activeFilter as ProjectStatus));
    }
    return projects.filter((p) => p.sector.toLowerCase().includes(activeFilter.toLowerCase()));
  }, [activeFilter]);

  return (
    <>
      <PageHeader
        title="Our Projects"
        description="A track record of delivering high-volume capital dredging, power plant infrastructure, and civil engineering projects across Bangladesh."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <Section className="bg-paper">
        <Container>
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={activeFilter === filter.value}
                className={cn(
                  "cursor-filter rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeFilter === filter.value
                    ? "bg-paper text-primary font-semibold shadow-[inset_4px_4px_8px_#c5cedd,inset_-4px_-4px_8px_#fff]"
                    : "paper-card text-text-muted hover:text-primary",
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerMs={100}>
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-text-muted">No projects match this filter.</p>
          )}
        </Container>
      </Section>
    </>
  );
}
