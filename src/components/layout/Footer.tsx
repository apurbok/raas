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
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
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
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform hover:scale-110 hover:shadow-md"
                  style={{ backgroundColor: link.bg }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Corporate Office
          </p>
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
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
