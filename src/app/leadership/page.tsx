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
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              <div className="lg:col-span-4">
                <div className="relative overflow-hidden rounded-2xl shadow-md">
                  <div className="relative aspect-[3/4]">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&q=80"
                      alt={mdMessage.author}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="font-bold text-lg">{mdMessage.author}</p>
                      <p className="text-sm text-white/80">{mdMessage.title}, {company.name}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  Message from the Managing Director
                </p>
                <h2 className="mb-6 text-2xl font-bold text-primary">
                  {mdMessage.author}
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  {mdMessage.content.split("\n\n").map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
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