import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <Container className="py-24 text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-8 text-lg text-text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex rounded-md bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover"
        >
          Back to Home
        </Link>
      </Container>
    </Section>
  );
}
