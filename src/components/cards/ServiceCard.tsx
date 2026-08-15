import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-primary">{service.title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted">
        {service.shortDescription}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
