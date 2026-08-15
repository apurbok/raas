import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Layers,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";
import { getProject, projects } from "@/content/projects";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | RASS Associates Ltd`,
    description: project.summary,
  };
}

const statusStyles = {
  completed: "bg-green-100 text-green-800 border-green-200",
  ongoing: "bg-blue-100 text-blue-800 border-blue-200",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <PageHeader
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects/" },
          { label: project.title },
        ]}
      />

      <Section className="py-16 md:py-24">
        <Container>
          {/* Back link and metadata badges */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Projects
            </Link>

            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-bold capitalize",
                  statusStyles[project.status],
                )}
              >
                {project.status}
              </span>
              <span className="rounded-full bg-surface border border-border px-3 py-1 text-xs font-semibold text-primary">
                {project.sector}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-surface border border-border px-3 py-1 text-xs font-medium text-text-muted">
                <MapPin className="h-3 w-3 text-accent" />
                {project.location.split(",")[0]}
              </span>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-12 rounded-2xl bg-primary-dark p-6 sm:p-8 text-white shadow-xl">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:divide-x sm:divide-white/15">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="text-center px-3">
                    <div className="text-2xl sm:text-3xl font-extrabold text-accent font-heading">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Grid */}
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Project Background & Scope */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Case Study Details
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary font-heading mt-1 mb-4">
                  Project Overview &amp; Execution Scope
                </h2>
                <p className="text-base sm:text-lg text-text-muted leading-relaxed font-medium mb-4">
                  {project.overview}
                </p>
                <p className="text-base text-text-muted leading-relaxed">
                  {project.scope}
                </p>
              </div>

              {/* Challenge vs Solution Cards */}
              {(project.theChallenge || project.theSolution) && (
                <div className="grid gap-6 sm:grid-cols-2 pt-6 border-t border-border">
                  {project.theChallenge && (
                    <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
                      <div className="mb-3 flex items-center gap-2 text-amber-800 font-bold text-base">
                        <ShieldCheck className="h-5 w-5 text-amber-600" />
                        The Engineering Challenge
                      </div>
                      <p className="text-sm text-amber-900/80 leading-relaxed">
                        {project.theChallenge}
                      </p>
                    </div>
                  )}

                  {project.theSolution && (
                    <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
                      <div className="mb-3 flex items-center gap-2 text-blue-800 font-bold text-base">
                        <Award className="h-5 w-5 text-blue-600" />
                        The RASS Solution
                      </div>
                      <p className="text-sm text-blue-900/80 leading-relaxed">
                        {project.theSolution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Key Deliverables & Scope Checklist from PDF */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center gap-2">
                  <Layers className="h-6 w-6 text-accent" />
                  Key Completed Scope &amp; Deliverables
                </h3>
                <div className="space-y-3">
                  {project.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3.5 rounded-xl border border-border bg-surface/50 p-4 transition-all hover:bg-white hover:shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-sm sm:text-base font-medium text-text leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Deployed on Site */}
              {project.equipmentDeployed && project.equipmentDeployed.length > 0 && (
                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Major Equipment Fleet Deployed on Site
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {project.equipmentDeployed.map((eq) => (
                      <span
                        key={eq}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-surface border border-border px-3.5 py-2 text-xs font-semibold text-primary"
                      >
                        <Cpu className="h-3.5 w-3.5 text-accent" />
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Project Metadata Card */}
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm space-y-4">
                <h4 className="text-lg font-bold text-primary border-b border-border pb-3">
                  Project Specifications
                </h4>

                {project.client && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Client / Project Owner
                    </span>
                    <p className="text-sm font-semibold text-primary mt-0.5">{project.client}</p>
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-primary mt-0.5">{project.location}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Industry Sector
                  </span>
                  <p className="text-sm font-semibold text-primary mt-0.5">{project.sector}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Execution Status
                  </span>
                  <p className="text-sm font-semibold text-primary capitalize mt-0.5">
                    {project.status}
                  </p>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="rounded-2xl border border-primary/20 bg-primary-dark p-7 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-2">Partner With Us</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Looking for a proven EPC partner for mega civil construction, power generation, or
                  dredging infrastructure?
                </p>
                <Link
                  href="/contact/"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-bold text-white shadow-md hover:bg-accent-hover transition-colors"
                >
                  Contact Our Engineering Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* All Projects Quick Links */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h4 className="text-base font-bold text-primary mb-3">All Projects</h4>
                <div className="flex flex-col space-y-1">
                  {projects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}/`}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-colors ${
                        p.slug === slug
                          ? "bg-accent text-white font-bold"
                          : "text-text hover:bg-surface hover:text-accent"
                      }`}
                    >
                      <span className="line-clamp-1">{p.title}</span>
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Next / Previous Project Navigation */}
          <div className="mt-16 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}/`}
                className="group flex flex-col p-5 rounded-xl border border-border bg-surface hover:bg-white hover:border-accent/40 transition-all text-left"
              >
                <span className="text-xs font-bold text-text-muted group-hover:text-accent flex items-center gap-1 mb-1">
                  &larr; Previous Project
                </span>
                <span className="font-bold text-primary text-sm sm:text-base line-clamp-1">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}/`}
                className="group flex flex-col p-5 rounded-xl border border-border bg-surface hover:bg-white hover:border-accent/40 transition-all text-right sm:text-right"
              >
                <span className="text-xs font-bold text-text-muted group-hover:text-accent flex items-center justify-end gap-1 mb-1">
                  Next Project &rarr;
                </span>
                <span className="font-bold text-primary text-sm sm:text-base line-clamp-1">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
