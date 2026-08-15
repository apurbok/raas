import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, Mail, Scale } from "lucide-react";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";
import { termsOfUse } from "@/content/policies";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use and legal conditions for using the official website and services of ${company.name}.`,
};

export default function TermsOfUsePage() {
  return (
    <>
      <PageHeader
        title={termsOfUse.title}
        description={termsOfUse.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Header info badge */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-primary">Legal Agreement</h2>
                  <p className="text-xs text-text-muted">Applies to all visitors, clients, and partners</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-text-muted border border-border shadow-xs">
                <span>Last Updated:</span>
                <span className="font-semibold text-primary">{termsOfUse.lastUpdated}</span>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-6">
              {termsOfUse.sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-xs md:p-8"
                >
                  <h3 className="mb-3 text-lg font-semibold text-primary md:text-xl">
                    {section.title}
                  </h3>
                  <p className="leading-relaxed text-text-muted">
                    {section.content}
                  </p>
                </article>
              ))}
            </div>

            {/* Legal Support Box */}
            <div className="mt-12 rounded-2xl bg-primary-dark p-8 text-white">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-accent">
                    <Shield className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Have Questions?</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Questions About Our Terms?</h3>
                  <p className="mt-1 text-sm text-white/80">
                    Reach out to our legal and administrative team for any clarifications or compliance queries.
                  </p>
                </div>
                <div className="flex shrink-0 gap-3">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Office
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
