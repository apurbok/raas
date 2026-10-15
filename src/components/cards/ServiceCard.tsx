import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";
import { CardTraceBorder } from "@/components/ui/CardTraceBorder";

const serviceImages: Record<string, string> = {
  "civil-construction": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80",
  "civil-engineering": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80",
  "property-development": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
  "asset-management": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80",
  "bridging-structural": "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&h=600&fit=crop&q=80",
  landscaping: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop&q=80",
  "road-pavement": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop&q=80",
  "dredging-excavating": "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop&q=80",
  "oil-gas-services": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop&q=80",
};

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  const Icon = service.icon;
  const image = serviceImages[service.slug] || serviceImages["civil-construction"];
  const href = service.href || `/services/${service.slug}/`;

  return (
    <Link
      href={href}
      className={`card-trace paper-card group relative flex flex-col overflow-hidden rounded-2xl ${
        featured ? "lg:col-span-3 lg:flex-row" : ""
      }`}
    >
      <CardTraceBorder />
      <span className="absolute -right-6 -top-6 z-10 h-24 w-24 rounded-full bg-accent/10 transition-transform duration-500 group-hover:scale-150" />
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/9] lg:aspect-auto lg:w-1/2" : "aspect-[16/10]"}`}>
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
      <div className={`relative flex flex-1 flex-col justify-center p-6 ${featured ? "lg:p-10" : ""}`}>
        {featured && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Energy</p>
        )}
        <h3 className="mb-2 text-lg font-semibold text-primary transition-colors group-hover:text-accent">
          {service.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted">{service.shortDescription}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
