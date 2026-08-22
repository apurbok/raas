import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { HeroSlider } from "@/components/home/HeroSlider";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTABanner, Container, Section, SectionHeading } from "@/components/ui/Section";
import { StickyStatsBar } from "@/components/ui/StickyStatsBar";
import { ScrollReveal, StaggerContainer } from "@/components/ui/ScrollReveal";
import { WordReveal } from "@/components/ui/AnimatedText";
import { mdMessage } from "@/content/leadership";
import { services } from "@/content/services";

const clientLogos = [
  { logo: "https://images.seeklogo.com/logo-png/25/1/dhaka-electric-supply-company-logo-png_seeklogo-258514.png", label: "DESCO" },
  { logo: "https://images.seeklogo.com/logo-png/42/1/bpdb-rpcl-powergen-ltd-logo-png_seeklogo-428610.png", label: "BPDB" },
  { logo: "https://images.seeklogo.com/logo-png/25/1/dhaka-electric-supply-company-logo-png_seeklogo-258514.png", label: "DESCO 2" },
  { logo: "https://images.seeklogo.com/logo-png/34/1/biwta-logo-png_seeklogo-342197.png", label: "BIWTA" },
  { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I5KC6FcPLGcE5g8Mnk3FZ95udKMd5ttZ4xPCyyXdSw&s", label: "BCPCL" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/North-West_Power_Generation_Company_Ltd_logo.svg/1200px-North-West_Power_Generation_Company_Ltd_logo.svg.png", label: "NWPGCL" },
  { logo: "https://images.seeklogo.com/logo-png/11/2/reb-logo-png_seeklogo-116569.png", label: "REB" },
  { logo: "https://vectorseek.com/wp-content/uploads/2023/09/Nesco-Logo-Vector.svg-.png", label: "ICC" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Image Slider */}
      <HeroSlider />

      {/* 2. Sticky Scroll-Scaled Stats Bar */}
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

      {/* 4. Trusted by Leading Organizations - Logos left-aligned, larger, colored */}
      <Section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Trusted by"
            title="Leading Organizations"
            description="From national power utilities to international developers, delivering critical infrastructure for Bangladesh's most important projects."
            centered={false}
          />
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 items-center">
              {clientLogos.map((client) => (
                <div key={client.label} className="flex items-center justify-start">
                  <img
                    src={client.logo}
                    alt={`${client.label} logo`}
                    className="h-24 sm:h-28 lg:h-32 w-auto object-contain transition-all duration-300 hover:scale-110"
                    loading="lazy"
                  />
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

      {/* 6. Why Choose Us - Accordion with centered title/description */}
      <Section className="bg-surface py-16 md:py-24 border-y border-border overflow-hidden">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted leading-relaxed">
              Building Trust Through Excellence — decades of proven success, comprehensive in-house
              capabilities, and an unwavering commitment to safety, quality, and innovation define every
              project we deliver.
            </p>
          </div>

          <WhyChooseUs />
        </Container>
      </Section>

      {/* 7. Dredging Division Spotlight */}
      <Section className="bg-primary text-white py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-accent">
                Specialized Marine Division
              </span>
              <WordReveal
                text="Capital Dredging & Marine Civil Works"
                as="h2"
                className="mb-4 text-3xl font-extrabold text-white md:text-4xl font-heading"
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-white hover:bg-accent-hover transition-colors shadow-md"
                  >
                    Explore Dredging Capabilities
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/equipment/"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Managing Director Message */}
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

      {/* 6.5 ISO Certification Banner - centered before footer */}
      <Section className="bg-white py-16">
        <Container>
          <div className="flex justify-center">
            <img
              src="https://mazadagroup.com/wp-content/uploads/2025/03/download.png"
              alt="ISO 9001:2015 Certified"
              className="h-40 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </Container>
      </Section>

      {/* 9. Final CTA */}
      <CTABanner
        title="Partner with Us on Your Next Project"
        description="Contact our senior engineering and project management team today for technical consultation and tenders."
        href="/contact/"
        buttonText="Get in Touch with Us"
      />
    </>
  );
}