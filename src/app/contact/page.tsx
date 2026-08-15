"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export default function ContactPage() {
  const fullAddress = `${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.country}`;

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team to discuss your construction, engineering, or dredging project requirements."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-primary">Send Us a Message</h2>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                <input type="hidden" name="subject" value="New inquiry from RASS Associates website" />

                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="+880 ..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-subject" className="mb-1.5 block text-sm font-medium text-text">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="inquiry-subject"
                    name="inquiry_subject"
                    className="w-full rounded-md border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-md border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-primary">Office Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-primary">Corporate Office</h3>
                    <p className="text-sm text-text-muted">{fullAddress}</p>
                  </div>
                </div>

                {company.phone.map((phone) => (
                  <div key={phone} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-primary">Phone</h3>
                      <a href={`tel:${phone}`} className="text-sm text-text-muted hover:text-accent">
                        {phone}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-primary">Email</h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm text-text-muted hover:text-accent"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-border">
                <iframe
                  title="RASS Associates office location"
                  src="https://maps.google.com/maps?q=Mirpur+DOHS+Dhaka+1216+Bangladesh&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
