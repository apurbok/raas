import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "@/components/ui/BrandIcons";
import { company } from "@/content/company";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: FacebookLogo,
    bg: "#1877F2",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: LinkedinLogo,
    bg: "#0A66C2",
  },
  {
    label: "X",
    href: "https://x.com",
    icon: TwitterLogo,
    bg: "#000000",
  },
  {
    label: "Email",
    href: `mailto:${company.email}`,
    icon: Mail,
    bg: "#EA4335",
  },
];

export function Footer() {
  const fullAddress = `${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.country}`;

  return (
    <footer className="bg-paper">
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="container-wide py-12 md:py-14">
        <div className="paper-card grid gap-10 rounded-2xl p-6 sm:p-8 md:grid-cols-[1.2fr_1fr] md:p-10">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Connect
            </p>
            <div className="mb-6">
              <Image
                src="/logo.svg"
                alt="RASS Associates"
                width={160}
                height={48}
                className="h-12 w-auto"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-[5px_5px_10px_#c5cedd,-5px_-5px_10px_#fff] transition-shadow hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)]"
                    style={{ backgroundColor: link.bg }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Corporate Office
            </p>
            <ul className="space-y-3.5 text-sm text-text">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-relaxed text-text-muted">{fullAddress}</span>
              </li>
              {company.phone.map((phone) => (
                <li key={phone} className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:${phone}`} className="font-medium text-text hover:text-primary">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-text hover:text-primary"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 bg-surface-dark/60">
        <div className="container-wide py-5 text-center text-xs font-medium text-text-muted">
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
