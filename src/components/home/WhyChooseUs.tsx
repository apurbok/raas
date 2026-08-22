"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Building2, ChevronDown, Factory, Globe2, Handshake, HeartPulse, Landmark, Leaf, ShieldCheck, Sun, Waves, Wrench } from "lucide-react";

const accordionItems = [
  {
    icon: Building2,
    title: "Civil Construction",
    description:
      "RASS Associates Ltd builds residential, industrial, and commercial projects from concept to completion. From architectural planning to structural erection, MEP integration, and interior handover, our experienced civil engineers deliver precision at scale.",
    href: "/services/civil-construction/",
  },
  {
    icon: Factory,
    title: "Civil Engineering",
    description:
      "Design and execution of complex infrastructure projects - roads, bridges, utilities, and heavy industrial structures using advanced computational modeling and modern geotechnical methods for resilient, sustainable solutions.",
    href: "/services/civil-engineering/",
  },
  {
    icon: Landmark,
    title: "Property Development",
    description:
      "End-to-end real estate development from land acquisition and feasibility studies to architectural design, construction, sales, and post-construction asset management.",
    href: "/services/property-development/",
  },
  {
    icon: Wrench,
    title: "Asset Management",
    description:
      "Comprehensive facility and property management ensuring properties retain maximum value, aesthetic appeal, and functional reliability throughout their lifecycle.",
    href: "/services/asset-management/",
  },
  {
    icon: Handshake,
    title: "Bridging & Structural Engineering",
    description:
      "Turnkey design, engineering, construction, and rehabilitation of bridges and critical transport infrastructure, engineered for longevity under extreme environmental loads.",
    href: "/services/bridging-structural/",
  },
  {
    icon: Leaf,
    title: "Landscaping",
    description:
      "Merges natural ecology with architectural elegance to create vibrant, sustainable outdoor environments for luxury resorts, corporate plazas, power plant campuses, and public parks.",
    href: "/services/landscaping/",
  },
  {
    icon: Waves,
    title: "Dredging & Excavating",
    description:
      "Leading marine and earthwork specialist operating 22-inch and 20-inch Cutter Suction Dredgers, delivering capital river dredging, land reclamation, port deepening, and anti-erosion works.",
    href: "/services/dredging-excavating/",
  },
  {
    icon: Globe2,
    title: "International Oil & Gas Services",
    description:
      "International engineering, energy, and industrial solutions platform delivering oil & gas infrastructure, green energy projects, industrial solutions, and international trading across global markets.",
    href: "/oil-gas/",
  },
  {
    icon: HeartPulse,
    title: "HES Policy — Health, Environment & Safety",
    description:
      "Our unwavering commitment to providing a safe, zero-accident, and environmentally sustainable workplace across all construction and marine projects.",
    href: "/hse/",
  },
  {
    icon: Sun,
    title: "Corporate Social Responsibility (CSR)",
    description:
      "Making a positive impact on society and the environment through ethical business practices, community development, and sustainable initiatives.",
    href: "/csr/",
  },
];

export function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {accordionItems.map((item, index) => {
        const Icon = item.icon;
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className={`rounded-xl border bg-white overflow-hidden transition-all duration-300 ${isOpen ? "border-accent/40 shadow-md" : "border-border hover:border-accent/30"}`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${isOpen ? "bg-accent text-white" : "bg-primary/10 text-primary"}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-primary">{item.title}</span>
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-5 pl-[4.75rem]">
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{item.description}</p>
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