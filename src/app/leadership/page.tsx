import type { Metadata } from "next";
import { TeamCard } from "@/components/cards/TeamCard";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";
import { leaders, mdMessage } from "@/content/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description: `Meet the leadership team of ${company.name} — experienced professionals driving excellence across construction and facilities management.`,
};

export default function LeadershipPage() {
  const sortedLeaders = [...leaders].sort((a, b) => a.order - b.order);

  return (
    <>
      <PageHeader
        title="Our Leadership"
        description="Experienced professionals with decades of expertise in construction, engineering, finance, and operations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
      />

      <Section>
        <Container>
          <div className="mb-16 rounded-2xl border border-border bg-surface p-8 md:p-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              Message from the Managing Director
            </p>
            <h2 className="mb-6 text-2xl font-bold text-primary">{mdMessage.author}</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              {mdMessage.content.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 font-semibold text-primary">{mdMessage.author}</p>
            <p className="text-sm text-text-muted">{mdMessage.title}, {company.name}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedLeaders.map((leader) => (
              <TeamCard key={leader.slug} leader={leader} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
