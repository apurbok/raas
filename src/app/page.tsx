import Link from "next/link";
import { ArrowRight, Droplets, Fuel, HardHat, Landmark } from "lucide-react";
import { SisterConcernFlipCard } from "@/components/cards/SisterConcernFlipCard";
import { HeroSlider } from "@/components/home/HeroSlider";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CardTraceBorder } from "@/components/ui/CardTraceBorder";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { company } from "@/content/company";
import { sisterConcerns } from "@/content/policies";

const highlights = [
  {
    title: "Oil & Gas",
    description: "Energy infrastructure and industrial solutions for regional and international partners.",
    href: "/oil-gas/",
    icon: Fuel,
  },
  {
    title: "Power Construction",
    description: "Campuses, civil works, and facilities for thermal and solar power projects.",
    href: "/services/civil-construction/",
    icon: HardHat,
  },
  {
    title: "Marine Dredging",
    description: "Capital dredging and land reclamation with our own cutter suction fleet.",
    href: "/dredging/",
    icon: Droplets,
  },
  {
    title: "Landmark Projects",
    description: "Payra, Madhumati, Pabna, and Sirajganj — delivery you can inspect.",
    href: "/projects/",
    icon: Landmark,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Welcome</p>
            <h2 className="mb-6 font-heading text-3xl font-semibold text-primary md:text-4xl">
              {company.name}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-muted md:text-lg">
              A Bangladesh construction company known for power-plant campuses, marine civil works, and
              heavy infrastructure — now expanding into oil &amp; gas and international energy partnerships.
            </p>
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Built for Energy & Infrastructure"
            description="From power campuses to oil & gas and marine works — clear capabilities, one delivery culture."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="card-trace group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm"
                >
                  <CardTraceBorder />
                  <span className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-accent/10 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mb-2 text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="relative text-sm leading-relaxed text-text-muted">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Us</p>
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Building trust through excellence
            </h2>
            <p className="mx-auto max-w-2xl text-text-muted leading-relaxed">
              Expand each capability to see how we deliver — from civil works and dredging to oil &amp; gas
              and HES discipline.
            </p>
          </div>
          <WhyChooseUs />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="RASS Group"
            title="Sister Concerns"
            description="Hospitality, eco materials, and green energy — hover a card to see the story."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sisterConcerns.map((concern) => (
              <SisterConcernFlipCard key={concern.slug} concern={concern} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/sister-concerns/" className="text-sm font-semibold text-primary hover:text-accent">
              View all sister concerns →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
