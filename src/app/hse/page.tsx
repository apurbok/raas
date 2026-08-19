import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Award,
  CheckCircle2,
  FileCheck,
  HeartPulse,
  Leaf,
  Phone,
  Recycle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer } from "@/components/ui/ScrollReveal";
import { WordReveal } from "@/components/ui/AnimatedText";
import { company } from "@/content/company";
import { hsePolicy } from "@/content/policies";

export const metadata: Metadata = {
  title: "Health, Environment & Safety Policy (HES) | RASS Associates Ltd",
  description: `${company.name} Health, Safety, and Environmental policy — our commitment to safe, zero-accident, sustainable operations.`,
};

const pillarIcons = [
  HeartPulse,
  Leaf,
  Users,
  AlertTriangle,
  FileCheck,
  Award,
];

export default function HSEPage() {
  return (
    <>
      <PageHeader
        title={hsePolicy.title}
        description="Our unwavering commitment to providing a safe, zero-accident, and environmentally sustainable workplace across all construction and marine projects."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "HES Policy" }]}
      />

      {/* Safety Track Record Stats */}
      <Section className="py-12 bg-primary-dark text-white border-b border-white/10">
        <Container>
          <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/20 shadow-lg">
            <div className="relative aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=685&fit=crop&q=80"
                alt="Construction site safety"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Safety Stats */}
      <Section className="py-12 bg-primary-dark text-white border-b border-white/10">
        <Container>
          <StaggerContainer className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center" staggerMs={100}>
            {hsePolicy.stats.map((stat) => (
              <div key={stat.label} className="p-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-accent font-heading">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-white/70 mt-0.5">{stat.note}</div>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Executive Overview */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent uppercase tracking-wider mb-4">
              <ShieldCheck className="h-4 w-4" />
              Corporate HES Charter
            </div>
            <WordReveal
              text="Our Safety Philosophy & Environmental Stewardship"
              as="h2"
              className="text-3xl font-extrabold text-primary md:text-4xl font-heading mb-10"
              staggerMs={50}
              duration={600}
            />
            <ScrollReveal variant="fade-up" delay={300}>
              <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-6 font-medium">
                {hsePolicy.overview}
              </p>
            </ScrollReveal>
          </div>

          {/* 6 Core Policy Commitments from PDF */}
          <StaggerContainer className="mx-auto max-w-4xl space-y-8 mt-12" staggerMs={100}>
            {hsePolicy.commitments.map((commitment, index) => {
              const Icon = pillarIcons[index] || ShieldCheck;
              return (
                <div
                  key={commitment.title}
                  className="rounded-2xl border border-border bg-white p-7 sm:p-9 shadow-sm transition-all hover:shadow-md hover:border-accent/40"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        {commitment.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary">
                        {commitment.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
                    {commitment.content}
                  </p>

                  {commitment.points && commitment.points.length > 0 && (
                    <div className="grid gap-4 sm:grid-cols-1 pt-4 border-t border-border/70">
                      {commitment.points.map((point) => (
                        <div
                          key={point.label}
                          className="rounded-xl bg-surface/70 p-4 border border-border/50"
                        >
                          <h4 className="font-bold text-primary text-sm sm:text-base mb-1 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                            {point.label}
                          </h4>
                          <p className="text-xs sm:text-sm text-text-muted leading-relaxed ml-6">
                            {point.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </StaggerContainer>

          {/* Compliance Framework Card */}
          <div className="mx-auto max-w-4xl mt-12 rounded-2xl bg-surface border border-border p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">
                Questions Regarding Our Safety Standards?
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Our certified safety engineers can provide site-specific HSE plans and risk mitigation
                documents for your project tenders.
              </p>
            </div>
            <Link
              href="/contact/"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-white shadow-md hover:bg-accent-hover transition-colors"
            >
              Contact HSE Officer
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
