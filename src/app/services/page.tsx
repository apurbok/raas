import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: `Energy infrastructure, construction, and marine civil works from ${company.name}.`,
};

export default function ServicesPage() {
  const oilGas = services.find((service) => service.slug === "oil-gas-services");
  const rest = services.filter((service) => service.slug !== "oil-gas-services");

  return (
    <>
      <PageHeader
        title="Services"
        description="Oil & gas infrastructure sits alongside the civil, marine, and facilities work that built our record."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {oilGas && <ServiceCard service={oilGas} featured />}
            {rest.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
