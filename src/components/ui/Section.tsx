import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
};

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding", dark ? "bg-primary text-white" : "", className)}
    >
      {children}
    </section>
  );
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("container-wide", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12 max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-2 text-sm font-semibold uppercase tracking-wider",
            light ? "text-accent" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={cn("mb-4 text-3xl font-bold md:text-4xl", light ? "text-white" : "text-primary")}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-lg leading-relaxed", light ? "text-white/80" : "text-text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <div className="border-b border-border bg-surface">
      <Container className="py-12 md:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-text-muted" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-accent">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">{title}</h1>
        {description && <p className="max-w-3xl text-lg text-text-muted">{description}</p>}
      </Container>
    </div>
  );
}

export function CTABanner({
  title,
  description,
  href,
  buttonText = "Contact Us",
}: {
  title: string;
  description: string;
  href: string;
  buttonText?: string;
}) {
  return (
    <Section dark>
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">{title}</h2>
            <p className="text-white/80">{description}</p>
          </div>
          <Link
            href={href}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
