import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { StaggerContainer } from "@/components/ui/ScrollReveal";
import { company } from "@/content/company";
import { csrPolicy } from "@/content/policies";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility",
  description: `${company.name} CSR initiatives — community development, environmental sustainability, and ethical business practices.`,
};

export default function CSRPage() {
  return (
    <>
      <PageHeader
        title={csrPolicy.title}
        description="Making a positive impact on society and the environment through ethical business practices and community development."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "CSR" }]}
      />

      <Section>
        <Container>
          <div className="relative mb-12 overflow-hidden rounded-2xl border border-border shadow-lg">
            <div className="relative aspect-[21/8]">
              <img
                src="https://images.unsplash.com/photo-1559027619-0676a3a99a4b?w=1600&h=610&fit=crop&q=80"
                alt="Community development and corporate social responsibility"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
          <StaggerContainer className="mx-auto max-w-4xl space-y-8" staggerMs={80}>
            {csrPolicy.sections.map((section, i) => (
              <div key={section.title} className="rounded-xl border border-border p-6 md:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
                </div>
                <p className="text-text-muted leading-relaxed">{section.content}</p>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  );
}
