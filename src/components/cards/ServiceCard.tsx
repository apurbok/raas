import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";

const serviceImages: Record<string, string> = {
  "civil-construction": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80",
  "civil-engineering": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80",
  "property-development": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
  "asset-management": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80",
  "bridging-structural": "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&h=600&fit=crop&q=80",
  "landscaping": "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop&q=80",
  "road-pavement": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop&q=80",
  "dredging-excavating": "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop&q=80",
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const image = serviceImages[service.slug] || serviceImages["civil-construction"];

  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-md animate-scale-in"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-primary shadow-md backdrop-blur-sm">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold text-primary transition-colors group-hover:text-accent">
          {service.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted">
          {service.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
          <span className="relative">
            Learn more
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}