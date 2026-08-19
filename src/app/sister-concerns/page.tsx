import type { Metadata } from "next";
import { CheckCircle2, Cog, ExternalLink, Globe2, Hotel, Layers, Mail, MapPin, Phone, SunMedium } from "lucide-react";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { StaggerContainer } from "@/components/ui/ScrollReveal";
import { company } from "@/content/company";
import { affiliatedCompanies, sisterConcerns } from "@/content/policies";

export const metadata: Metadata = {
  title: "Sister Concerns & Affiliated Companies | RASS Group",
  description: `Explore the diversified companies of RASS Group — RASS Resort, NRL Eco Bricks Limited, Orbed Green Energy Limited (OGEL), DenZai Group, and Conveyor Bangladesh.`,
};

const concernIcons = {
  "rass-resort": Hotel,
  "nrl-eco-bricks": Layers,
  "orbed-green-energy": SunMedium,
};

const affiliatedIcons = {
  "denzai-group": Globe2,
  "conveyor-bangladesh": Cog,
};

export default function SisterConcernsPage() {
  return (
    <>
      <PageHeader
        title="Sister Concerns & Affiliated Companies"
        description="A diversified group of companies spanning construction, luxury hospitality, eco-friendly manufacturing, renewable energy, and international industrial solutions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sister Concerns" }]}
      />

      {/* Affiliated Companies Section */}
      <Section id="affiliated" className="py-16 md:py-24 bg-surface border-b border-border">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              International Affiliations
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary font-heading">
              Affiliated Companies
            </h2>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              Strategic international brands and industrial solutions platforms expanding our global
              footprint across the Middle East, China, USA, and emerging markets.
            </p>
          </div>

          <StaggerContainer className="space-y-12" staggerMs={100}>
            {affiliatedCompanies.map((company) => {
              const Icon = affiliatedIcons[company.slug as keyof typeof affiliatedIcons] || Globe2;
              return (
                <article
                  key={company.slug}
                  className="rounded-3xl border border-border bg-white shadow-sm transition-all hover:shadow-lg hover:border-accent/40 overflow-hidden"
                >
                  <div className="relative aspect-[16/5]">
                    <img
                      src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&h=375&fit=crop&q=80"
                      alt={company.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-800 text-white shadow-md">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <span className="rounded-full bg-surface px-3 py-1 text-xs font-bold text-accent">
                          {company.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary font-heading mt-1">
                          {company.name}
                        </h2>
                        <p className="text-sm sm:text-base font-semibold text-accent mt-0.5">
                          {company.tagline}
                        </p>
                      </div>
                    </div>

                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-accent-hover transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="text-base text-text-muted leading-relaxed mb-6 font-medium">
                    {company.description}
                  </p>

                  <div className="mb-6 rounded-2xl bg-surface/70 p-6 border border-border/60">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                      Key Capabilities
                    </h3>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {company.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-text">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                </article>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Sister Concerns Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              RASS Group Companies
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary font-heading">
              Our Sister Concerns
            </h2>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              A diversified group of companies spanning construction, luxury hospitality, eco-friendly
              manufacturing, and renewable energy.
            </p>
          </div>

          <StaggerContainer className="space-y-12" staggerMs={100}>
            {sisterConcerns.map((concern) => {
              const Icon = concernIcons[concern.slug as keyof typeof concernIcons] || Layers;
              const concernImages: Record<string, string> = {
                "rass-resort": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=375&fit=crop&q=80",
                "nrl-eco-bricks": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=375&fit=crop&q=80",
                "orbed-green-energy": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=375&fit=crop&q=80",
              };
              const concernImage = concernImages[concern.slug] || "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&h=375&fit=crop&q=80";
              return (
                <article
                  key={concern.slug}
                  className="rounded-3xl border border-border bg-white shadow-sm transition-all hover:shadow-lg hover:border-accent/40 overflow-hidden"
                >
                  <div className="relative aspect-[16/5]">
                    <img
                      src={concernImage}
                      alt={concern.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12">
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

                  {concern.highlights && concern.highlights.length > 0 && (
                    <div className="mb-6 rounded-2xl bg-surface/70 p-6 border border-border/60">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                        Key Features & Capabilities
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
                  </div>
                </article>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  );
}