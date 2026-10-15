import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { WordReveal } from "@/components/ui/AnimatedText";

export default function NotFound() {
  return (
    <Section className="bg-paper">
      <Container className="py-24 text-center">
        <WordReveal
          text="404"
          as="h1"
          className="mb-4 text-6xl font-bold text-primary"
          staggerMs={100}
          duration={600}
        />
        <p className="mb-8 text-lg text-text-muted animate-fade-up" style={{ animationDelay: "300ms", animationDuration: "700ms" }}>
          The page you{"'"}re looking for doesn{"'"}t exist.
        </p>
        <Link
          href="/"
          className="neo-btn-primary px-6 py-3 text-sm"
        >
          Back to Home
        </Link>
      </Container>
    </Section>
  );
}
