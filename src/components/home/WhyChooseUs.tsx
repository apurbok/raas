"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Factory,
  Globe2,
  Handshake,
  HeartPulse,
  Landmark,
  Leaf,
  Sun,
  Waves,
  Wrench,
} from "lucide-react";

const accordionItems = [
  {
    icon: Building2,
    title: "Civil Construction",
    description:
      "Residential, industrial, and commercial projects from concept to completion — architectural planning through structural erection, MEP, and handover.",
    href: "/services/civil-construction/",
  },
  {
    icon: Factory,
    title: "Civil Engineering",
    description:
      "Roads, bridges, utilities, and heavy industrial structures using advanced modeling and geotechnical methods for resilient delivery.",
    href: "/services/civil-engineering/",
  },
  {
    icon: Landmark,
    title: "Property Development",
    description:
      "End-to-end real estate from land acquisition and feasibility to design, construction, and post-handover asset care.",
    href: "/services/property-development/",
  },
  {
    icon: Wrench,
    title: "Asset Management",
    description:
      "Facility and property management that protects value, performance, and reliability across the asset lifecycle.",
    href: "/services/asset-management/",
  },
  {
    icon: Handshake,
    title: "Bridging & Structural Engineering",
    description:
      "Design, construction, and rehabilitation of bridges and transport structures engineered for longevity.",
    href: "/services/bridging-structural/",
  },
  {
    icon: Leaf,
    title: "Landscaping",
    description:
      "Sustainable outdoor environments for campuses, resorts, plazas, and public spaces.",
    href: "/services/landscaping/",
  },
  {
    icon: Waves,
    title: "Dredging & Excavating",
    description:
      "Capital dredging and land reclamation with owned cutter suction dredgers and marine support craft.",
    href: "/services/dredging-excavating/",
  },
  {
    icon: Globe2,
    title: "International Oil & Gas Services",
    description:
      "Energy infrastructure, industrial solutions, and international partnerships across oil & gas markets.",
    href: "/oil-gas/",
  },
  {
    icon: HeartPulse,
    title: "HES Policy — Health, Environment & Safety",
    description:
      "Zero-harm culture, environmental stewardship, and disciplined site safety across every project.",
    href: "/hes-csr/#hes",
  },
  {
    icon: Sun,
    title: "Corporate Social Responsibility (CSR)",
    description:
      "Community development, ethical practice, and sustainable initiatives where we work.",
    href: "/hes-csr/#csr",
  },
];

export function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {accordionItems.map((item, index) => {
        const Icon = item.icon;
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
              isOpen
                ? "border-primary/30 shadow-[0_12px_30px_rgba(21,101,168,0.12)]"
                : "border-border hover:border-accent/40"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen
                      ? "bg-gradient-to-br from-primary to-accent text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-primary">{item.title}</span>
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pl-[4.75rem] sm:px-6">
                  <p className="mb-4 text-sm leading-relaxed text-text-muted">{item.description}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline"
                  >
                    View {item.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
