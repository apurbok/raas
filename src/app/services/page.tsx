import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { StaggerContainer } from "@/components/ui/ScrollReveal";
import { WordReveal } from "@/components/ui/AnimatedText";
import { company } from "@/content/company";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore the comprehensive construction and facilities management services offered by ${company.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="A full-service construction and facilities management portfolio, executed to the highest standards of quality, efficiency, and innovation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <Section>
        <Container>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerMs={100}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <WordReveal
              text="Need a Custom Solution?"
              as="h2"
              className="mb-4 text-2xl font-bold text-primary"
              staggerMs={50}
              duration={600}
            />
            <p className="mb-6 text-text-muted animate-fade-up" style={{ animationDelay: "300ms", animationDuration: "700ms" }}>
              Our team can tailor services to meet your specific project requirements. Get in touch for a
              consultation.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
