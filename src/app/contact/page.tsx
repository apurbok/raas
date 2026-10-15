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
        <Container className="relative">
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            {/* Form panel — same paper fill as buttons so soft shadows read correctly */}
            <div className="paper-card relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-10">
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
                className="grid gap-x-3 gap-y-4 sm:grid-cols-2"
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

                <div className="sm:col-span-2 flex justify-end pt-2">
                  <button
                    type="submit"
                    className="neo-btn min-w-[11rem] flex-row gap-2 px-8 py-3.5 text-[13px]"
                  >
                    <Send className="h-4 w-4" strokeWidth={2} />
                    <span className="leading-none">Submit Now</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Reach us — single cohesive panel, not stacked neo cards */}
            <aside className="space-y-6">
              <div className="paper-card overflow-hidden rounded-2xl">
                <div className="border-b border-black/5 px-6 py-7 sm:px-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Reach us
                  </p>
                  <h3 className="font-heading text-2xl font-semibold text-primary">Corporate channels</h3>
                  <p className="mt-2 text-sm text-text-muted">
                    Prefer a direct line? Use the details below — we are available during business hours.
                  </p>
                </div>

                <ul className="divide-y divide-black/5">
                  <li className="flex gap-3.5 px-6 py-5 sm:px-7">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paper text-primary shadow-[4px_4px_8px_#c5cedd,-4px_-4px_8px_#fff]">
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
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paper text-primary shadow-[4px_4px_8px_#c5cedd,-4px_-4px_8px_#fff]">
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
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paper text-primary shadow-[4px_4px_8px_#c5cedd,-4px_-4px_8px_#fff]">
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
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paper text-primary shadow-[4px_4px_8px_#c5cedd,-4px_-4px_8px_#fff]">
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

              <div className="paper-card overflow-hidden rounded-2xl">
                <div className="border-b border-black/5 px-5 py-3">
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
