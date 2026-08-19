import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Layers,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer } from "@/components/ui/ScrollReveal";
import { WordReveal } from "@/components/ui/AnimatedText";
import { company } from "@/content/company";
import { projects } from "@/content/projects";
import { getService, services } from "@/content/services";

const serviceHeroImages: Record<string, string> = {
  "civil-construction": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=530&fit=crop&q=80",
  "civil-engineering": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=530&fit=crop&q=80",
  "property-development": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=530&fit=crop&q=80",
  "asset-management": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=530&fit=crop&q=80",
  "bridging-structural": "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=1600&h=530&fit=crop&q=80",
  "landscaping": "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600&h=530&fit=crop&q=80",
  "road-pavement": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&h=530&fit=crop&q=80",
  "dredging-excavating": "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1600&h=530&fit=crop&q=80",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | RASS Associates Ltd`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const relatedProjects = projects.filter(
    (p) =>
      (slug.includes("dredging") && p.sector.toLowerCase().includes("dredging")) ||
      (slug.includes("construction") && (p.sector.includes("Power") || p.sector.includes("Civil"))) ||
      (slug.includes("engineering") && (p.sector.includes("Infrastructure") || p.sector.includes("Power"))) ||
      (slug.includes("road") && p.slug.includes("terminal-road")),
  ).slice(0, 2);

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: service.title },
        ]}
      />

      {/* Service Hero Image */}
      <Section className="py-0">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg">
            <div className="relative aspect-[21/7]">
              <img
                src={serviceHeroImages[slug] || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=530&fit=crop&q=80"}
                alt={service.title}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {service.title}
                </h2>
                <p className="mt-1 text-sm sm:text-base text-white/80">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      Specialized Domain
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-primary font-heading">
                      {service.title} Overview
                    </h2>
                  </div>
                </div>

                <ScrollReveal variant="fade-up" delay={200}>
                  <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                </ScrollReveal>
                <ScrollReveal variant="fade-up" delay={350}>
                  <p className="text-base text-text-muted leading-relaxed">
                    {service.overview}
                  </p>
                </ScrollReveal>
              </div>

              {/* Detailed Sections from PDF */}
              {service.sections && service.sections.length > 0 && (
                <div className="space-y-8 pt-6 border-t border-border">
                  <h3 className="text-2xl font-bold text-primary font-heading flex items-center gap-2">
                    <Layers className="h-6 w-6 text-accent" />
                    Specialized Expertise &amp; Execution Focus
                  </h3>

                  <StaggerContainer className="space-y-6" staggerMs={80}>
                    {service.sections.map((section) => (
                      <div
                        key={section.heading}
                        className="rounded-2xl border border-border bg-surface/50 p-6 md:p-8"
                      >
                        <h4 className="text-xl font-bold text-primary mb-3">
                          {section.heading}
                        </h4>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-4">
                          {section.body}
                        </p>
                        {section.bulletPoints && (
                          <div className="space-y-2.5 pt-2">
                            {section.bulletPoints.map((bullet) => (
                              <div
                                key={bullet}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-text"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </StaggerContainer>
                </div>
              )}

              {/* 5-Step Methodology Workflow */}
              {service.methodology && service.methodology.length > 0 && (
                <div className="pt-6 border-t border-border">
                  <h3 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center gap-2">
                    <Cpu className="h-6 w-6 text-primary" />
                    Our 5-Step Project Execution Methodology
                  </h3>
                  <StaggerContainer className="space-y-4" staggerMs={80}>
                    {service.methodology.map((m) => (
                      <div
                        key={m.step}
                        className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:border-accent/40"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-base font-bold text-white shadow-sm">
                          0{m.step}
                        </span>
                        <div>
                          <h5 className="font-bold text-primary text-base mb-1">{m.title}</h5>
                          <p className="text-sm text-text-muted leading-relaxed">{m.description}</p>
                        </div>
                      </div>
                    ))}
                  </StaggerContainer>
                </div>
              )}

              {/* Core Capabilities Checklist */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-2xl font-bold text-primary font-heading mb-6">
                  Core Technical Capabilities
                </h3>
                <StaggerContainer className="grid gap-3 sm:grid-cols-2" staggerMs={60}>
                  {service.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 text-sm text-text"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </StaggerContainer>
              </div>

              {/* Standards & Compliance */}
              {service.standardsCompliance && (
                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                    Quality &amp; Safety Standards Compliance
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {service.standardsCompliance.map((std) => (
                      <span
                        key={std}
                        className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3.5 py-1.5 text-xs font-semibold text-primary"
                      >
                        <Award className="h-3.5 w-3.5 text-accent" />
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Consultation Card */}
              <div className="rounded-2xl border border-primary/20 bg-primary-dark p-7 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-2">Request Consultation</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Discuss your {service.title.toLowerCase()} requirements, tender specifications, or site
                  feasibility with our senior engineering team.
                </p>
                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${company.phone[0]}`}
                    className="flex items-center gap-3 rounded-lg bg-white/10 p-3 text-xs font-semibold hover:bg-white/20 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    <span>{company.phone[0]}</span>
                  </a>
                </div>
                <Link
                  href="/contact/"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-bold text-white shadow-md hover:bg-accent-hover transition-colors"
                >
                  Get a Proposal
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Key Equipment Deployed */}
              {service.keyEquipment && (
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-3 flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-accent" />
                    Key Equipment Fleet Deployed
                  </h4>
                  <ul className="space-y-2">
                    {service.keyEquipment.map((eq) => (
                      <li key={eq} className="text-xs sm:text-sm text-text-muted flex items-start gap-2">
                        <span className="text-accent font-bold">&bull;</span>
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/equipment/"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                  >
                    View All Resources &amp; Equipment &rarr;
                  </Link>
                </div>
              )}

              {/* Why Choose RASS */}
              {service.benefits && (
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h4 className="text-base font-bold text-primary mb-3">Why Choose RASS?</h4>
                  <ul className="space-y-2.5">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs sm:text-sm text-text">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* All Services Quick Navigation */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h4 className="text-base font-bold text-primary mb-3">All Services</h4>
                <div className="flex flex-col space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/`}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-colors ${
                        s.slug === slug
                          ? "bg-accent text-white font-bold"
                          : "text-text hover:bg-surface hover:text-accent"
                      }`}
                    >
                      <span>{s.title}</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section className="bg-surface py-16 border-t border-border">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Case Studies
                </span>
                <h3 className="text-2xl font-bold text-primary font-heading">
                  Related Projects Executed
                </h3>
              </div>
              <Link
                href="/projects/"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline"
              >
                View all projects &rarr;
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
