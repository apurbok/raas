import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SisterConcernFlipCard } from "@/components/cards/SisterConcernFlipCard";
import { HeroSlider } from "@/components/home/HeroSlider";
import { CTABanner, Container, Section, SectionHeading } from "@/components/ui/Section";
import { StickyStatsBar } from "@/components/ui/StickyStatsBar";
import { company, values } from "@/content/company";
import { mdMessage } from "@/content/leadership";
import { sisterConcerns } from "@/content/policies";
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
                title="Building Bangladesh's Mega Infrastructure Future"
                description="RASS Associates Ltd is a premier construction and facilities management company renowned for delivering large-scale, complex projects across power, marine, industrial, residential, and transport sectors."
                centered={false}
              />
              <p className="mb-6 text-text-muted leading-relaxed">
                With decades of proven engineering expertise, we manage projects from initial site
                feasibility through architectural modeling, structural erection, and long-term facility
                management, consistently exceeding client expectations on budget and on schedule.
              </p>
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
                  Our Mission &amp; Vision
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-surface p-8 border border-border/80 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-primary flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                Corporate Excellence
              </h3>
              <ul className="space-y-3.5">
                {[
                  "On-time project delivery with zero compromise on safety",
                  "Turnkey execution from soil investigation to facility handover",
                  "High-capacity in-house equipment fleet and batching operations",
                  "Deep-water dredging aligned with Bangladesh Delta Plan 2100",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Core Services Showcase */}
      <Section className="bg-surface py-16 md:py-24 border-y border-border">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive Engineering &amp; Construction Services"
            description="End-to-end solutions spanning civil construction, structural engineering, property development, and specialized marine civil works."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Featured Landmark Projects */}
      <Section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Proven Track Record"
            title="Featured Landmark Projects"
            description="Delivering critical national power generation complexes, solar farms, deep-sea port terminals, and river dredging works."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-7 py-3 font-bold text-primary transition-all hover:bg-primary hover:text-white shadow-sm"
            >
              Browse Complete Projects Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 6. Dredging Division Spotlight */}
      <Section className="bg-primary text-white py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-accent">
                Specialized Marine Division
              </span>
              <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
                Capital Dredging &amp; Marine Civil Works
              </h2>
              <p className="mb-6 text-base text-white/85 leading-relaxed">
                Equipped with 22-inch CSD 550 and 20-inch Cutter Suction Dredgers, support vessels, and
                thousands of feet of HDPE discharge lines, RASS Associates actively revitalizes
                Bangladesh&apos;s river network and reclaims vital land under Delta Plan 2100.
              </p>
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
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              {[
                { title: "Capital Dredging", desc: "Channel deepening & silt clearing" },
                { title: "Land Reclamation", desc: "Hydraulic backfill for power parks" },
                { title: "Bank Protection", desc: "Scour revetment & anti-erosion" },
                { title: "Fleet Rental", desc: "22-inch & 20-inch CSD dredgers" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/15 bg-white/10 p-4.5 backdrop-blur-sm"
                >
                  <div className="font-bold text-white text-sm sm:text-base">{item.title}</div>
                  <div className="text-xs text-white/70 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Managing Director Message */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4 flex flex-col items-center text-center p-8 rounded-2xl bg-surface border border-border">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-3xl font-extrabold text-white shadow-md mb-4">
                SA
              </div>
              <h4 className="text-xl font-bold text-primary">{mdMessage.author}</h4>
              <p className="text-sm font-semibold text-accent mb-2">{mdMessage.title}</p>
              <p className="text-xs text-text-muted">33+ Years National &amp; Multinational Leadership</p>
            </div>
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Executive Leadership"
                title="Message from the Managing Director"
                centered={false}
              />
              <blockquote className="mb-6 border-l-4 border-accent pl-6 text-base text-text-muted leading-relaxed italic">
                &ldquo;{mdMessage.content.split("\n\n")[0]}&rdquo;
              </blockquote>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                {mdMessage.content.split("\n\n")[1]}
              </p>
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

      {/* 8. Sister Concerns 3D Flip Cards (Reference ss-2) */}
      <Section className="bg-surface py-16 md:py-24 border-t border-border">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              RASS GROUP
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-primary md:text-4xl font-heading">
              Sister Concerns
            </h2>
            <p className="mt-3 text-base text-text-muted">
              Part of a diversified group of companies across construction, hospitality,
              manufacturing, and renewable energy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {sisterConcerns.map((concern) => (
              <SisterConcernFlipCard key={concern.slug} concern={concern} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/sister-concerns/"
              className="inline-flex items-center gap-1.5 font-bold text-accent hover:underline text-sm md:text-base"
            >
              View all sister concerns &rarr;
            </Link>
          </div>
        </Container>
      </Section>

      {/* 9. Final CTA */}
      <CTABanner
        title="Ready to Partner on Your Next Mega Project?"
        description="Contact our senior engineering and project management team today for technical consultation and tenders."
        href="/contact/"
        buttonText="Get in Touch with Us"
      />
    </>
  );
}
