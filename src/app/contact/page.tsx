"use client";

import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { FloatingInput, FloatingSelect, FloatingTextarea } from "@/components/ui/FloatingField";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";

const countries = [
  "Bangladesh",
  "Saudi Arabia",
  "United Arab Emirates",
  "Singapore",
  "India",
  "China",
  "United States",
  "United Kingdom",
  "Other",
];

export default function ContactPage() {
  const fullAddress = `${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.country}`;

  return (
    <>
      <PageHeader
        title="Contact"
        description="Tell us about your energy, construction, or marine project — our team will respond promptly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section className="relative overflow-hidden bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        />

        <Container className="relative">
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            {/* Form panel */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-[0_18px_50px_-28px_rgba(21,101,168,0.35)] sm:p-8 md:p-10">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
              />
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Project inquiry
              </p>
              <h2 className="mb-2 font-heading text-3xl font-semibold text-primary">
                Start a conversation
              </h2>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-text-muted">
                Share a few details about your scope and location. We typically reply within one business day.
              </p>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="grid gap-5 sm:grid-cols-2"
              >
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                <input type="hidden" name="subject" value="New inquiry from RASS Associates website" />

                <FloatingInput name="name" label="Name" required autoComplete="name" />
                <FloatingInput name="company" label="Company" autoComplete="organization" />
                <FloatingInput
                  name="address"
                  label="Address"
                  className="sm:col-span-2"
                  autoComplete="street-address"
                />
                <FloatingInput name="city" label="City" autoComplete="address-level2" />
                <FloatingInput name="zip" label="Zip Code" autoComplete="postal-code" />
                <FloatingSelect name="country" label="Select Country" options={countries} required />
                <FloatingInput name="phone" label="Phone Number" type="tel" autoComplete="tel" />
                <FloatingInput
                  name="email"
                  label="Email"
                  type="email"
                  required
                  className="sm:col-span-2"
                  autoComplete="email"
                />
                <FloatingTextarea name="message" label="Message" required className="sm:col-span-2" />

                <div className="sm:col-span-2 flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 rounded accent-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-text-muted">
                    I read and agree with the Privacy Policy
                  </label>
                </div>

                <div className="sm:col-span-2 pt-3">
                  <div className="neo-surface inline-flex rounded-2xl p-3">
                    <button
                      type="submit"
                      className="neo-btn inline-flex min-w-[11rem] flex-row items-center justify-center gap-1.5 px-8 py-5 text-sm font-semibold tracking-wide"
                    >
                      <Send className="h-4 w-4" strokeWidth={2} />
                      <span className="leading-tight">Submit Now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Reach us — single cohesive panel, not stacked neo cards */}
            <aside className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_50px_-28px_rgba(13,148,136,0.3)]">
                <div className="bg-gradient-to-br from-primary via-primary-dark to-accent px-6 py-7 text-white sm:px-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                    Reach us
                  </p>
                  <h3 className="font-heading text-2xl font-semibold">Corporate channels</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Prefer a direct line? Use the details below — we are available during business hours.
                  </p>
                </div>

                <ul className="divide-y divide-border">
                  <li className="flex gap-3.5 px-6 py-5 sm:px-7">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-primary ring-1 ring-border">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Corporate Office
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">{fullAddress}</p>
                    </div>
                  </li>

                  <li className="flex gap-3.5 px-6 py-5 sm:px-7">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-primary ring-1 ring-border">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">Phone</p>
                      <div className="mt-1 space-y-1">
                        {company.phone.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone}`}
                            className="block text-sm font-medium text-primary transition-colors hover:text-accent"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-3.5 px-6 py-5 sm:px-7">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-primary ring-1 ring-border">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">Email</p>
                      <a
                        href={`mailto:${company.email}`}
                        className="mt-1 block text-sm font-medium text-primary transition-colors hover:text-accent"
                      >
                        {company.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-3.5 px-6 py-5 sm:px-7">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-primary ring-1 ring-border">
                      <Clock3 className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Response window
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">
                        Sunday – Thursday, 9:00 – 18:00 (BST)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_50px_-28px_rgba(21,101,168,0.28)]">
                <div className="border-b border-border px-5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Office map
                  </p>
                </div>
                <iframe
                  title="RASS Associates office location"
                  src="https://maps.google.com/maps?ll=23.6137,90.3786&z=14&output=embed&q=Mirpur+DOHS+Dhaka+1216+Bangladesh"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
