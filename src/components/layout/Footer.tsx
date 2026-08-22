import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "@/components/ui/BrandIcons";
import { company, navigation } from "@/content/company";

const shareLinks = [
  { label: "Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=https://rassassociates.com", icon: FacebookLogo, bg: "#1877F2" },
  { label: "X", href: "https://twitter.com/intent/tweet?url=https://rassassociates.com", icon: TwitterLogo, bg: "#000000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/sharing/share-offsite/?url=https://rassassociates.com", icon: LinkedinLogo, bg: "#0A66C2" },
  { label: "Mail", href: "mailto:?subject=RASS Associates Ltd&body=https://rassassociates.com", icon: Mail, bg: "#EA4335" },
];

export function Footer() {
  const fullAddress = `${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.country}`;

  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="container-wide section-padding grid gap-10 md:grid-cols-2 lg:grid-cols-5">
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
            <li>
              <Link href="/services/civil-construction/" className="transition-colors hover:text-white">
                Civil Construction
              </Link>
            </li>
            <li>
              <Link href="/services/civil-engineering/" className="transition-colors hover:text-white">
                Civil Engineering
              </Link>
            </li>
            <li>
              <Link href="/services/property-development/" className="transition-colors hover:text-white">
                Property Development
              </Link>
            </li>
            <li>
              <Link href="/services/dredging-excavating/" className="transition-colors hover:text-white">
                Dredging & Excavating
              </Link>
            </li>
            <li>
              <Link href="/services/asset-management/" className="transition-colors hover:text-white">
                Asset Management
              </Link>
            </li>
            <li>
              <Link href="/oil-gas/" className="transition-colors hover:text-white">
                International Oil & Gas Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Share
          </h4>
          <div className="flex items-center gap-3">
            {shareLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${link.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform hover:scale-110 hover:shadow-md"
                  style={{ backgroundColor: link.bg }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
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
