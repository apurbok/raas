import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navigation } from "@/content/company";

export function Footer() {
  const fullAddress = `${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.country}`;

  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="container-wide section-padding grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">RASS Associates Ltd</h3>
          <p className="mb-4 text-sm leading-relaxed text-white/70">{company.slogan}</p>
          <p className="text-sm text-white/70">{company.description.slice(0, 120)}...</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navigation.footer.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{fullAddress}</span>
            </li>
            {company.phone.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${phone}`} className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Civil Construction</li>
            <li>Civil Engineering</li>
            <li>Property Development</li>
            <li>Dredging & Excavating</li>
            <li>Asset Management</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-2 py-6 text-sm text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
