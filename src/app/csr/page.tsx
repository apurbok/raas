import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/components/ui/Section";
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
          <div className="mx-auto max-w-4xl space-y-8">
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
          </div>
        </Container>
      </Section>
    </>
  );
}
