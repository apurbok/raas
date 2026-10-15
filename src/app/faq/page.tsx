import type { Metadata } from "next";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${company.name} services, projects, and partnerships.`,
};

const faqs = [
  {
    q: "What sectors does RASS Associates work in?",
    a: "We deliver civil construction, power infrastructure, marine dredging, and international oil & gas / energy solutions — supported by affiliated companies across regional and global markets.",
  },
  {
    q: "Do you operate outside Bangladesh?",
    a: "Yes. Through strategic affiliations and project partnerships we support energy and industrial scopes across the Middle East, China, the USA, and other international markets.",
  },
  {
    q: "Can you support both EPC and specialized works packages?",
    a: "We can engage as a construction / marine contractor or as part of a broader energy solutions partnership depending on project structure, client requirements, and affiliated capabilities.",
  },
  {
    q: "How do I request a proposal?",
    a: "Use the Contact page to share your project location, scope, and timeline. Our team typically responds within one business day.",
  },
  {
    q: "Where can I find HES and CSR information?",
    a: "Visit the HES & CSR page for our Health, Environment & Safety commitments and Corporate Social Responsibility practices.",
  },
  {
    q: "Do you own dredging equipment?",
    a: "Yes. Our marine capability includes in-house cutter suction dredgers and supporting plant for capital dredging and related civil works.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="FAQ"
        description="Quick answers about our capabilities, markets, and how to start a project discussion."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <Section className="bg-paper">
        <Container>
          <FaqAccordion items={faqs} />
        </Container>
      </Section>
    </>
  );
}
