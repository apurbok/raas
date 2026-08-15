import type { Metadata } from "next";
import { CheckCircle2, ExternalLink, Hotel, Layers, Mail, MapPin, Phone, SunMedium } from "lucide-react";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";
import { sisterConcerns } from "@/content/policies";

export const metadata: Metadata = {
  title: "Sister Concerns | RASS Group",
  description: `Explore the diversified companies of RASS Group — RASS Resort, NRL Eco Bricks Limited, and Orbed Green Energy Limited (OGEL).`,
};

const concernIcons = {
  "rass-resort": Hotel,
  "nrl-eco-bricks": Layers,
  "orbed-green-energy": SunMedium,
};

export default function SisterConcernsPage() {
  return (
    <>
      <PageHeader
        title="Our Sister Concerns"
        description="A diversified group of companies spanning construction, luxury hospitality, eco-friendly manufacturing, and renewable energy."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sister Concerns" }]}
      />

      <Section className="py-16 md:py-24">
        <Container>
          <div className="space-y-12">
            {sisterConcerns.map((concern) => {
              const Icon = concernIcons[concern.slug as keyof typeof concernIcons] || Layers;
              return (
                <article
                  key={concern.slug}
                  className="rounded-3xl border border-border bg-white p-8 md:p-12 shadow-sm transition-all hover:shadow-lg hover:border-accent/40"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <span className="rounded-full bg-surface px-3 py-1 text-xs font-bold text-accent">
                          {concern.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary font-heading mt-1">
                          {concern.name}
                        </h2>
                        <p className="text-sm sm:text-base font-semibold text-accent mt-0.5">
                          {concern.tagline}
                        </p>
                      </div>
                    </div>

                    {concern.website && (
                      <a
                        href={concern.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-accent-hover transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-base text-text-muted leading-relaxed mb-6 font-medium">
                    {concern.description}
                  </p>

                  {/* Highlights from PDF */}
                  {concern.highlights && concern.highlights.length > 0 && (
                    <div className="mb-6 rounded-2xl bg-surface/70 p-6 border border-border/60">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                        Key Features &amp; Capabilities
                      </h3>
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {concern.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-text">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact Info Footer */}
                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border text-xs sm:text-sm text-text-muted">
                    {concern.address && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent shrink-0" />
                        <span>{concern.address}</span>
                      </div>
                    )}
                    {concern.email && (
                      <a
                        href={`mailto:${concern.email}`}
                        className="flex items-center gap-2 hover:text-accent transition-colors"
                      >
                        <Mail className="h-4 w-4 text-accent shrink-0" />
                        <span>{concern.email}</span>
                      </a>
                    )}
                    {concern.phone && (
                      <a
                        href={`tel:${concern.phone}`}
                        className="flex items-center gap-2 hover:text-accent transition-colors"
                      >
                        <Phone className="h-4 w-4 text-accent shrink-0" />
                        <span>{concern.phone}</span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
