import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Fuel,
  Globe2,
  Handshake,
  Power,
  Truck,
  Wrench,
} from "lucide-react";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer } from "@/components/ui/ScrollReveal";
import { oilGas } from "@/content/oil-gas";

export const metadata: Metadata = {
  title: "Oil & Gas | RASS Associates Ltd",
  description:
    "International engineering, energy, and industrial solutions platform delivering oil & gas infrastructure, green energy, and EPC services across Bangladesh, the Middle East, China, and USA.",
};

const capabilityIcons = [Fuel, Power, Factory, Truck, Handshake];

export default function OilGasPage() {
  return (
    <>
      <PageHeader
        title="Oil & Gas"
        description="International engineering, energy, and industrial solutions platform delivering blended expertise across green energy, oil & gas infrastructure, project management, and trading."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Oil & Gas" }]}
      />

      {/* Global Positioning Banner */}
      <Section className="bg-paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <div className="paper-card relative mb-8 overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/9]">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=675&fit=crop&q=80"
                    alt="Oil and gas energy infrastructure"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                International Energy & Engineering Platform
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-primary font-heading leading-tight">
                Global Reach. Local Mastery. International Energy & Industrial Solutions.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed">
                {oilGas.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact/"
                  className="neo-btn-primary px-6 py-3 text-sm"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/sister-concerns/"
                  className="neo-btn px-6 py-3 text-sm"
                >
                  <Globe2 className="h-4 w-4" />
                  Explore Affiliated Companies
                </Link>
              </div>
            </div>

            {/* International Markets */}
            <div className="lg:col-span-5">
              <div className="paper-card relative mb-6 overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=500&fit=crop&q=80"
                    alt="Global energy infrastructure"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
              <div className="paper-card rounded-2xl p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-5">
                  International Market Presence
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {oilGas.internationalMarkets.map((market) => (
                    <div
                      key={market.region}
                      className="rounded-xl bg-paper p-4 shadow-[inset_4px_4px_8px_#c5cedd,inset_-4px_-4px_8px_#fff]"
                    >
                      <div className="font-bold text-primary text-sm">{market.region}</div>
                      <div className="text-xs text-text-muted mt-1">{market.focus}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Market Positioning */}
      <Section className="bg-paper py-16 md:py-20">
        <Container>
          <div className="paper-card mx-auto max-w-4xl rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Wrench className="h-6 w-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading">
                International Engineering, Energy & Industrial Solutions Platform
              </h2>
            </div>
            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-text-muted leading-relaxed font-medium">
                {oilGas.marketPositioning}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Core Capabilities */}
      <Section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 inline-block">
              What We Deliver
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">
              Comprehensive Energy & Industrial Capabilities
            </h2>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerMs={100}>
            {oilGas.capabilities.map((capability, i) => {
              const Icon = capabilityIcons[i % capabilityIcons.length] || Factory;
              const capabilityImages = [
                "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
              ];
              const capImage = capabilityImages[i % capabilityImages.length];
              return (
                <div
                  key={capability.title}
                  className="paper-card flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-[12px_12px_24px_#c5cedd,-12px_-12px_24px_#fff]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={capImage}
                      alt={capability.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-paper text-primary shadow-[6px_6px_12px_#c5cedd,-6px_-6px_12px_#fff]">
                      <Icon className="h-6 w-6" />
                    </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{capability.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-5">{capability.description}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {capability.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-text">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Strategic Partnerships */}
      <Section className="bg-paper py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Strategic Affiliations
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary font-heading">
              Building Global Partnerships
            </h2>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              We build strategic affiliations with international technology providers, manufacturers,
              and EPC contractors to deliver world-class solutions across global markets.
            </p>
          </div>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerMs={100}>
            {oilGas.strategicPartners.map((partner, i) => (
              <div key={partner} className="paper-card flex items-center gap-3 rounded-xl p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper text-accent shadow-[4px_4px_8px_#c5cedd,-4px_-4px_8px_#fff]">
                  <Handshake className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-accent">0{i + 1}</div>
                  <div className="text-sm font-semibold text-primary">{partner}</div>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-paper">
        <Container>
          <div className="paper-card flex flex-col items-center justify-between gap-6 rounded-2xl p-8 md:p-12 text-center md:text-left md:flex-row">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading mb-2">
                Partner with Our International Energy Platform
              </h2>
              <p className="text-base text-text-muted leading-relaxed max-w-2xl">
                From oil & gas infrastructure to green energy projects, industrial solutions, and
                international trading — we build strategic affiliations to deliver world-class
                energy infrastructure together.
              </p>
            </div>
            <Link
              href="/contact/"
              className="neo-btn-primary shrink-0 px-8 py-4 text-sm"
            >
              Contact Our Energy Division
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}