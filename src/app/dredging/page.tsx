import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container, CTABanner, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";
import { dredgingFleet, dredgingServices } from "@/content/equipment";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Dredging & Marine Civil Works",
  description: `${company.name} provides capital dredging, land reclamation, and marine civil works with a state-of-the-art dredging fleet across Bangladesh.`,
};

export default function DredgingPage() {
  const dredgingProjects = projects.filter((p) => p.sector === "Dredging" || p.slug.includes("dredging") || p.slug.includes("payra-port") || p.slug.includes("sirajganj") || p.slug.includes("madhumati"));

  return (
    <>
      <PageHeader
        title="Dredging & Marine Civil Works"
        description="Comprehensive dredging solutions aligned with Bangladesh's Delta Plan 2100 — from capital dredging to land reclamation and riverbank protection."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dredging" }]}
      />

      <Section>
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-text-muted leading-relaxed">
              RASS Associates Ltd provides specialized dredging and excavating services essential for land
              development, coastal restoration, and marine projects. We aim to deliver reliable, efficient,
              and environmentally responsible dredging solutions across Bangladesh&apos;s inland waterways.
            </p>
          </div>

          <h2 className="mb-6 text-2xl font-bold text-primary">Core Services</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dredgingServices.map((service) => (
              <div key={service} className="flex items-start gap-3 rounded-lg border border-border p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm font-medium text-text">{service}</span>
              </div>
            ))}
          </div>

          <h2 className="mb-6 text-2xl font-bold text-primary">Dredging Fleet & Equipment</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {dredgingFleet.map((item) => (
              <div key={item.name} className="rounded-xl border border-border p-6">
                <h3 className="mb-4 text-lg font-semibold text-primary">{item.name}</h3>
                <ul className="space-y-2">
                  {item.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-primary">Related Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dredgingProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services/dredging-excavating/"
              className="inline-flex items-center gap-2 font-semibold text-accent hover:underline"
            >
              View dredging service details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Need Dredging Services?"
        description="Contact us for capital dredging, land reclamation, or dredger rental inquiries."
        href="/contact/"
        buttonText="Request a Quote"
      />
    </>
  );
}
