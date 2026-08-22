import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Factory, Landmark, ShieldCheck, Sparkles, Sun, Waves } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SisterConcernFlipCard } from "@/components/cards/SisterConcernFlipCard";
import { HeroSlider } from "@/components/home/HeroSlider";
import { CTABanner, Container, Section, SectionHeading } from "@/components/ui/Section";
import { StickyStatsBar } from "@/components/ui/StickyStatsBar";
import { ScrollReveal, StaggerContainer } from "@/components/ui/ScrollReveal";
import { GradientText, WordReveal } from "@/components/ui/AnimatedText";
import { company, values } from "@/content/company";
import { mdMessage } from "@/content/leadership";
import { getFeaturedProjects } from "@/content/projects";
import { services } from "@/content/services";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* 1. Hero Image Slider (Reference ss-4 & Mazada Group) */}
      <HeroSlider />

      {/* 2. Sticky Scroll-Scaled Stats Bar (Reference ss-3) */}
      <StickyStatsBar />

      {/* 3. About Teaser Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="About RASS Associates"
                title="Who We Work For!"
                description="RASS Associates Ltd is a premier construction and facilities management company renowned for delivering large-scale, complex projects across power, marine, industrial, residential, and transport sectors."
                centered={false}
              />
              <ScrollReveal variant="fade-up" delay={200}>
                <p className="mb-6 text-text-muted leading-relaxed">
                  With decades of proven engineering expertise, we manage projects from initial site
                  feasibility through architectural modeling, structural erection, and long-term facility
                  management, consistently exceeding client expectations on budget and on schedule.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={350}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about/"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark shadow-sm"
                  >
                    Explore Our Heritage
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/about/#mission"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-surface"
                  >
                    Our Mission & Vision
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="slide-right" delay={200} className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <div className="relative aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80"
                    alt="RASS Associates construction site"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-xl bg-white/90 backdrop-blur-sm p-4">
                      <h3 className="mb-2 text-base font-bold text-primary flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-accent" />
                        Corporate Excellence
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "On-time project delivery with zero compromise on safety",
                          "Turnkey execution from soil investigation to facility handover",
                          "High-capacity in-house equipment fleet and batching operations",
                          "Deep-water dredging aligned with Bangladesh Delta Plan 2100",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-text">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* 4. Who We Worked For - Client Logos Grid */}
      <Section className="bg-surface py-16 md:py-24 border-y border-border">
        <Container>
          <SectionHeading
            eyebrow="Who We Worked For"
            title="Trusted by Leading Organizations"
            description="From national power utilities to international developers, we deliver critical infrastructure for Bangladesh's most important projects."
          />
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:gap-x-14">
              {[
                { logo: "https://images.seeklogo.com/logo-png/25/1/dhaka-electric-supply-company-logo-png_seeklogo-258514.png", label: "DESCO", full: "Dhaka Electric Supply Co." },
                { logo: "https://images.seeklogo.com/logo-png/42/1/bpdb-rpcl-powergen-ltd-logo-png_seeklogo-428610.png", label: "BPDB", full: "Bangladesh Power Development Board" },
                { logo: "https://images.seeklogo.com/logo-png/11/2/reb-logo-png_seeklogo-116569.png", label: "REB", full: "Rural Electrification Board" },
                { logo: "https://images.seeklogo.com/logo-png/34/1/biwta-logo-png_seeklogo-342197.png", label: "BIWTA", full: "Bangladesh Inland Water Transport Authority" },
                { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I5KC6FcPLGcE5g8Mnk3FZ95udKMd5ttZ4xPCyyXdSw&s", label: "BCPCL", full: "Bangladesh China Power Co. Ltd." },
                { wordmark: true, label: "NWPGCL", full: "North West Power Generation Co." },
                { wordmark: true, label: "PAYRA PORT", full: "Payra Port Authority" },
                { logo: "https://vectorseek.com/wp-content/uploads/2023/09/Nesco-Logo-Vector.svg-.png", label: "ICC", full: "International Contracts Co." },
              ].map((client) => (
                <div key={client.label} className="flex flex-col items-center justify-center text-center">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.label} logo`}
                      className="h-24 sm:h-28 w-auto object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <p className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight text-text-muted/70 transition-colors hover:text-primary cursor-default select-none">
                      {client.label}
                    </p>
                  )}
                  <p className="mt-3 text-sm font-bold text-text-muted/70">{client.full}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* 5. Core Services Showcase */}
      <Section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive Engineering & Construction Services"
            description="End-to-end solutions spanning civil construction, structural engineering, property development, and advanced marine civil works."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerMs={100}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* 5. Why Choose Us? - Replaces Featured Landmark Projects */}
      <Section className="bg-primary text-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-white/5 p-8 md:p-12 shadow-sm text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-base text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Decades of proven track record on national landmark mega-projects (e.g. Payra 1320MW).
              Complete in-house machinery fleet eliminating subcontractor delays. Turnkey delivery from conceptual
              design to final handover. Uncompromising focus on structural safety and durability.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <p className="text-xs font-bold text-white uppercase">Decades of Experience</p>
                <p className="text-white/70">25+ years</p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <p className="text-xs font-bold text-white uppercase">In-house Fleet</p>
                <p className="text-white/70">100+ units</p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <p className="text-xs font-bold text-white uppercase">Zero Compromise</p>
                <p className="text-white/70">On-time delivery</p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <p className="text-xs font-bold text-white uppercase">Structural Safety</p>
                <p className="text-white/70">Durability guaranteed</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Dredging Division Spotlight */}
      <Section className="bg-primary text-white py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 flex flex-col">
              <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-accent">
                Specialized Marine Division
              </span>
              <WordReveal
                text="Capital Dredging & Marine Civil Works"
                as="h2"
                className="mb-4 text-3xl font-extrabold text-white md:text-4xl"
                staggerMs={60}
                duration={600}
              />
              <ScrollReveal variant="fade-up" delay={300}>
                <p className="mb-6 text-base text-white/85 leading-relaxed">
                  Equipped with 22-inch CSD 550 and 20-inch Cutter Suction Dredgers, support vessels, and
                  thousands of feet of HDPE discharge lines, RASS Associates actively revitalizes
                  Bangladesh{"'"}s river network and reclaims vital land under Delta Plan 2100.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={450}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/dredging/"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-white hover:bg-accent-hover transition-colors shadow-md"
                  >
                    Explore Dredging Capabilities
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/equipment/"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    View Marine Fleet Specs
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/20 shadow-lg">
                <div className="relative aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop&q=80"
                    alt="Dredging vessel at work"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { title: "Capital Dredging", desc: "Channel deepening & silt clearing" },
                        { title: "Land Reclamation", desc: "Hydraulic backfill for power parks" },
                        { title: "Bank Protection", desc: "Scour revetment & anti-erosion" },
                        { title: "Fleet Rental", desc: "22-inch & 20-inch CSD dredgers" },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="rounded-lg border border-white/15 bg-black/40 backdrop-blur-sm p-3"
                        >
                          <div className="font-bold text-white text-xs sm:text-sm">{item.title}</div>
                          <div className="text-[10px] sm:text-xs text-white/70 mt-0.5">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Managing Director Message */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4 flex flex-col items-center text-center p-8 rounded-2xl bg-surface border border-border">
              <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80"
                  alt={mdMessage.author}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-bold text-primary">{mdMessage.author}</h4>
              <p className="text-sm font-semibold text-accent mb-2">{mdMessage.title}</p>
              <p className="text-xs text-text-muted">33+ Years National & Multinational Leadership</p>
            </div>
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Executive Leadership"
                title="Message from the Managing Director"
                centered={false}
              />
              <ScrollReveal variant="fade-up" delay={200}>
                <blockquote className="mb-6 border-l-4 border-accent pl-6 text-base text-text-muted leading-relaxed italic">
                  &ldquo;{mdMessage.content.split("\n\n")[0]}&rdquo;
                </blockquote>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={350}>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {mdMessage.content.split("\n\n")[1]}
                </p>
              </ScrollReveal>
              <Link
                href="/leadership/"
                className="inline-flex items-center gap-2 font-bold text-accent hover:underline"
              >
                Meet our full Board of Directors and General Managers &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Final CTA - Replaces Sister Concerns */}
      <CTABanner
        title="Why Choose Us?"
        description="Contact our senior engineering and project management team today for technical consultation and tenders."
        href="/contact/"
        buttonText="Get in Touch with Us"
      />
    </>
  );
}