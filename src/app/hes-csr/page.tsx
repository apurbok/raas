import type { Metadata } from "next";
import { CheckCircle2, HeartPulse, Leaf } from "lucide-react";
import { CardTraceBorder } from "@/components/ui/CardTraceBorder";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer } from "@/components/ui/ScrollReveal";
import { company } from "@/content/company";
import { csrPolicy, hsePolicy } from "@/content/policies";

export const metadata: Metadata = {
  title: "HES & CSR",
  description: `${company.name} Health, Environment & Safety policy and Corporate Social Responsibility commitments.`,
};

export default function HesCsrPage() {
  return (
    <>
      <PageHeader
        title="HES & CSR"
        description="Health, Environment & Safety together with our responsibility to the communities where we work."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "HES & CSR" }]}
      />

      <Section id="hes" className="scroll-mt-24">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-10 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-md">
                <HeartPulse className="h-6 w-6" />
              </span>
              <h2 className="text-3xl font-semibold text-primary">{hsePolicy.title}</h2>
            </div>
            <p className="mb-10 max-w-4xl text-text-muted leading-relaxed">{hsePolicy.overview}</p>
          </ScrollReveal>

          <StaggerContainer className="space-y-6" staggerMs={100}>
            {hsePolicy.commitments.map((commitment) => (
              <article
                key={commitment.title}
                className="card-trace relative overflow-hidden rounded-2xl bg-white p-6 md:p-8"
              >
                <CardTraceBorder />
                <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10" />
                <p className="relative mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {commitment.subtitle}
                </p>
                <h3 className="relative mb-3 text-xl font-semibold text-primary">{commitment.title}</h3>
                <p className="relative mb-4 text-sm leading-relaxed text-text-muted">{commitment.content}</p>
                {commitment.points?.length > 0 && (
                  <ul className="relative space-y-3">
                    {commitment.points.map((point) => (
                      <li key={point.label} className="flex gap-2 text-sm text-text-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>
                          <strong className="text-primary">{point.label}.</strong> {point.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section id="csr" className="scroll-mt-24 bg-surface">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-10 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary text-white shadow-md">
                <Leaf className="h-6 w-6" />
              </span>
              <h2 className="text-3xl font-semibold text-primary">{csrPolicy.title}</h2>
            </div>
            <p className="mb-10 max-w-4xl text-text-muted leading-relaxed">{csrPolicy.description}</p>
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerMs={90}>
            {csrPolicy.sections.map((section) => (
              <article
                key={section.title}
                className="card-trace relative overflow-hidden rounded-2xl bg-white p-6"
              >
                <CardTraceBorder />
                <span className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-primary/10" />
                <h3 className="relative mb-3 text-lg font-semibold text-primary">{section.title}</h3>
                <p className="relative text-sm leading-relaxed text-text-muted">{section.content}</p>
              </article>
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  );
}
