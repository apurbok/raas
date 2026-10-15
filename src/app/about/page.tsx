import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Compass, ShieldCheck, Target } from "lucide-react";
import { Container, PageHeader } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer } from "@/components/ui/ScrollReveal";
import { WordReveal } from "@/components/ui/AnimatedText";
import { company, values } from "@/content/company";
import { mdMessage } from "@/content/leadership";

export const metadata: Metadata = {
  title: "About Us | RASS Associates Ltd",
  description: `Learn about ${company.name} — an international engineering, energy, and industrial solutions platform backed by 42+ years of combined international experience in oil & gas, green energy, and industrial infrastructure.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About RASS Associates"
        description="An international engineering, energy, and industrial solutions platform delivering blended expertise across oil & gas, green energy, industrial solutions, project management, and trading — backed by 42+ years of combined international experience."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Who We Are Section */}
      <section id="who-we-are" className="scroll-mt-28 bg-paper py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent uppercase tracking-wider mb-4">
                <ShieldCheck className="h-4 w-4" />
                Who We Are
              </div>
              <WordReveal
                text="Engineering Excellence Built on Trust & Innovation"
                as="h2"
                className="mb-10 text-3xl font-bold text-primary md:text-4xl"
                staggerMs={50}
                duration={600}
              />
              <ScrollReveal variant="fade-up" delay={200}>
              <p className="mb-4 text-base text-text-muted leading-relaxed">
                <strong className="text-primary font-semibold">RASS Associates Ltd</strong> is an international
                engineering, energy, and industrial solutions platform delivering blended expertise across green
                energy, oil & gas infrastructure, industrial solutions, project management, and international
                trading. Backed by <strong className="text-primary font-semibold">42+ years of combined international
                experience</strong> through strategic affiliations including BlueArc (www.bluearchl.com), we present
                ourselves not simply as a solar or energy company, but as a comprehensive solutions provider with
                proven capabilities across the Middle East, China, USA, and other global markets.
              </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={350}>
              <p className="mb-6 text-base text-text-muted leading-relaxed">
                Our team has extensive experience working in the Oil & Gas sector, with a track record of
                delivering complex energy infrastructure projects across international markets. Through strategic
                affiliations with international technology providers, manufacturers, EPC contractors, and business
                partners, we deliver solutions that meet the highest global standards. Whether it&apos;s oil & gas
                infrastructure, renewable energy projects, industrial facilities, or cross-border trading ventures,
                RASS Associates Ltd has consistently delivered projects that exceed expectations.
              </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={500}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/oil-gas/"
                  className="neo-btn-primary px-5 py-2.5 text-sm"
                >
                  <Compass className="h-4 w-4" />
                  Explore Oil & Gas Capabilities
                </Link>
                <Link
                  href="/projects/"
                  className="neo-btn px-5 py-2.5 text-sm"
                >
                  Explore Completed Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="slide-right" delay={200} className="lg:col-span-5">
              <div className="space-y-6">
                <div className="paper-card overflow-hidden rounded-2xl">
                  <div className="relative aspect-[16/10]">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop&q=80"
                      alt="RASS Associates construction site"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
                <div className="paper-card rounded-2xl p-8">
                  <h3 className="mb-4 text-xl font-bold text-primary flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Our Commitment
                  </h3>
                  <p className="mb-6 text-sm text-text-muted leading-relaxed">
                    We are committed to delivering projects on time, within budget, and with the highest
                    quality standards. Through our strategic affiliation with BlueArc and 42+ years of combined
                    international experience, we bring global best practices to every project while maintaining
                    the highest standards of safety, sustainability, and client satisfaction.
                  </p>
                  <div className="space-y-3">
                    {[
                      "42+ years of combined international experience in oil & gas and engineering",
                      "Proven execution on mega-scale oil & gas, power plant, and industrial projects",
                      "Strategic affiliations with international technology providers and EPC contractors",
                      "Rigorous Health, Environment & Safety (HES) zero-accident protocols",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-text">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Message from the Managing Director */}
      <section className="bg-paper py-16 md:py-24">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="paper-card overflow-hidden rounded-2xl">
              <div className="grid items-stretch gap-0 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
                <div className="relative mx-auto w-full max-w-xs overflow-hidden lg:mx-0 lg:max-w-[20rem]">
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&q=80"
                      alt={mdMessage.author}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                      <p className="font-heading text-lg font-semibold">{mdMessage.author}</p>
                      <p className="text-sm text-white/85">
                        {mdMessage.title}, {company.name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex min-w-0 flex-col justify-center px-6 py-8 sm:px-8 md:px-10 lg:py-10">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Message from the Managing Director
                  </p>
                  <h2 className="mb-6 font-heading text-2xl font-semibold text-primary md:text-3xl">
                    {mdMessage.author}
                  </h2>
                  <div className="space-y-4 text-sm leading-relaxed text-text-muted sm:text-base">
                    {mdMessage.content.split("\n\n").map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/leadership/"
                      className="neo-btn-primary px-5 py-2.5 text-sm"
                    >
                      Meet our leadership
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Mission & Vision — floating imagery */}
      <section className="overflow-hidden bg-paper py-16 md:py-24">
        <Container>
          <div className="grid gap-16">
            <div id="mission" className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80"
                  alt="Engineering and construction mission"
                  className="animate-float-soft relative z-10 aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl ring-4 ring-paper"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-md">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-primary">Our Mission</h2>
                <p className="mb-4 text-base leading-relaxed text-text-muted">
                  To be the preferred international engineering, energy, and industrial solutions partner —
                  delivering oil &amp; gas, green energy, industrial solutions, project management, and trading
                  through strategic global affiliations and a culture of collaboration.
                </p>
                <p className="text-base leading-relaxed text-text-muted">
                  We prioritize innovation, safety, and sustainability in every phase — building enduring
                  relationships based on trust and exceptional performance across international markets.
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent">
                  Delivering Excellence · Building Trust
                </p>
              </div>
            </div>

            <div id="vision" className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary text-white shadow-md">
                  <Compass className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-primary">Our Vision</h2>
                <p className="mb-4 text-base leading-relaxed text-text-muted">
                  To lead international engineering, energy, and industrial solutions across the Middle East,
                  China, USA, and other global markets — recognized for execution excellence, sustainability,
                  and client satisfaction.
                </p>
                <p className="text-base leading-relaxed text-text-muted">
                  By investing in modern construction, dredging, and energy technologies, we aim to shape the
                  infrastructural landscape for generations to come.
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-primary">
                  Market Leadership · Sustainable Future
                </p>
              </div>
              <div className="relative order-1 mx-auto w-full max-w-md lg:order-2">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/25 to-primary/15 blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80"
                  alt="Renewable energy and sustainable vision"
                  className="animate-float-soft-alt relative z-10 aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl ring-4 ring-paper"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section id="values" className="scroll-mt-28 bg-paper py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider mb-3">
              Guiding Principles
            </div>
            <WordReveal
              text="Our Core Values"
              as="h2"
              className="mb-6 text-3xl font-bold text-primary md:text-4xl"
              staggerMs={50}
              duration={600}
            />
            <ScrollReveal variant="fade-up" delay={300}>
              <p className="mt-3 text-base text-text-muted">
                The foundational pillars that guide every decision, design, and construction milestone
                we undertake.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerMs={100}>
            {values.map((value, i) => (
              <div
                key={value.title}
                className="paper-card group rounded-xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_24px_#c5cedd,-12px_-12px_24px_#fff]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    0{i + 1}
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-primary group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

    </>
  );
}
