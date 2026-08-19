import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Compass, ShieldCheck, Target, Users } from "lucide-react";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer } from "@/components/ui/ScrollReveal";
import { WordReveal } from "@/components/ui/AnimatedText";
import { company, values } from "@/content/company";

export const metadata: Metadata = {
  title: "About Us | RASS Associates Ltd",
  description: `Learn about ${company.name} — our mission, vision, values, and commitment to engineering excellence across Bangladesh.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About RASS Associates"
        description="A premier construction and facilities management leader in Bangladesh, transforming client visions into durable, landmark reality."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Who We Are Section */}
      <section id="who-we-are" className="scroll-mt-28 py-16 md:py-24">
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
                <strong className="text-primary font-semibold">RASS Associates Ltd</strong> is a premier
                construction and facilities management company based in Bangladesh, renowned for its
                unwavering commitment to excellence and its extensive experience in delivering
                large-scale, complex projects. With nearly decades of experience in the industry, RASS
                Associates Ltd has built a stellar reputation for transforming client visions into
                reality, managing projects from initial conceptualization through to completion, and
                maintaining the highest standards of quality and service throughout the project lifecycle.
              </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={350}>
              <p className="mb-6 text-base text-text-muted leading-relaxed">
                We pride ourselves on being a versatile player in the construction sector, with a
                diverse portfolio that spans a wide array of industries. Our expertise covers
                residential, commercial, industrial, and infrastructure projects, making us a go-to
                partner for clients seeking reliable, innovative, and cost-effective solutions. Whether
                {"it's"} a multi-story office building, a luxury residential complex, a power plant, or
                public infrastructure like roads and bridges, RASS Associates Ltd has consistently
                delivered projects that exceed expectations.
              </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={500}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/leadership/"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
                >
                  <Users className="h-4 w-4" />
                  Meet Our Leadership Team
                </Link>
                <Link
                  href="/projects/"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-surface"
                >
                  Explore Completed Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="slide-right" delay={200} className="lg:col-span-5">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
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
                <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold text-primary flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Our Commitment
                  </h3>
                  <p className="mb-6 text-sm text-text-muted leading-relaxed">
                    We are committed to delivering projects on time, within budget, and with the highest
                    quality standards. Our vision is to be the preferred partner for clients, setting
                    benchmarks for others to follow.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Over 25+ years of combined engineering and leadership mastery",
                      "Proven execution on mega-scale thermal and solar power plants",
                      "Full in-house machinery, concrete batching, and marine dredging fleet",
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

      {/* Mission & Vision Section */}
      <section className="bg-surface py-16 md:py-24 border-y border-border">
        <Container>
          <StaggerContainer className="grid gap-10 md:grid-cols-2" staggerMs={150}>
            {/* Our Mission */}
            <div
              id="mission"
              className="scroll-mt-28 rounded-2xl bg-white p-8 md:p-10 shadow-sm border border-border flex flex-col justify-between"
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <div className="relative aspect-[16/9]">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=450&fit=crop&q=80"
                    alt="Engineering and construction mission"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-primary">Our Mission</h2>
                <p className="text-base text-text-muted leading-relaxed mb-4">
                  Our mission at RASS Associates Ltd is to consistently exceed our client&apos;s
                  expectations by delivering high-quality construction services. We achieve this through
                  a strong commitment to teamwork, fostering a culture of collaboration and mutual
                  support among our professionals, clients, and partners.
                </p>
                <p className="text-base text-text-muted leading-relaxed">
                  We prioritize innovation in every phase of our work, from design to execution,
                  ensuring that our solutions are always ahead of industry trends. Above all, we
                  emphasize safety and sustainability in every aspect of our operations. Our mission is
                  not only to meet the immediate needs of our clients but to build enduring
                  relationships based on trust, reliability, and exceptional performance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-accent uppercase tracking-wider">
                Delivering Excellence &bull; Building Trust
              </div>
            </div>

            {/* Our Vision */}
            <div
              id="vision"
              className="scroll-mt-28 rounded-2xl bg-white p-8 md:p-10 shadow-sm border border-border flex flex-col justify-between"
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <div className="relative aspect-[16/9]">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop&q=80"
                    alt="Renewable energy and sustainable vision"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Compass className="h-6 w-6 text-accent" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-primary">Our Vision</h2>
                <p className="text-base text-text-muted leading-relaxed mb-4">
                  Our vision is to be the market leader in construction and facilities management in
                  Bangladesh. We aim to be recognized not just for our excellence in project execution
                  but also for our commitment to sustainability, innovation, and client satisfaction.
                </p>
                <p className="text-base text-text-muted leading-relaxed">
                  By aligning our engineering capabilities with national development initiatives and
                  investing in state-of-the-art construction and dredging technologies, we aim to shape
                  the modern infrastructural landscape of Bangladesh for generations to come.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-primary uppercase tracking-wider">
                Market Leadership &bull; Sustainable Future
              </div>
            </div>
          </StaggerContainer>
        </Container>
      </section>

      {/* Core Values Section */}
      <section id="values" className="scroll-mt-28 py-16 md:py-24">
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
                className="group rounded-xl border border-border bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary group-hover:bg-accent group-hover:text-white transition-colors">
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

      {/* Slogan Banner */}
      <section className="bg-primary text-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
              Our Corporate Slogan
            </p>
            <ScrollReveal variant="blur-in" delay={200}>
              <blockquote className="text-2xl md:text-3xl font-bold leading-snug">
                &ldquo;Innovating the Future of Construction & Facilities Management&rdquo;
              </blockquote>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
