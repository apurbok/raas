"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Boxes,
  CheckCircle2,
  Cpu,
  Download,
  Filter,
  HardHat,
  Search,
  ShieldCheck,
  Ship,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { company } from "@/content/company";
import {
  dredgingFleet,
  equipment,
  equipmentCategories,
  type EquipmentCategory,
} from "@/content/equipment";
import { cn } from "@/lib/utils";

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.specification &&
          item.specification.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.applications &&
          item.applications.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <PageHeader
        title="Resources and Equipment"
        description="Comprehensive in-house heavy machinery fleet, automated concrete batching plants, and specialized cutter suction dredging assets."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources and Equipment" }]}
      />

      {/* Fleet Overview Stats */}
      <Section className="py-12 bg-primary-dark text-white border-b border-white/10">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-accent font-heading">
                100+
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium mt-1 uppercase tracking-wider">
                Heavy Machinery Units
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-accent font-heading">
                25 m³/hr
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium mt-1 uppercase tracking-wider">
                Concrete Batching Capacity
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-accent font-heading">
                22-Inch
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium mt-1 uppercase tracking-wider">
                Heavy CSD 550 Dredger
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-accent font-heading">
                5,000 sqm
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium mt-1 uppercase tracking-wider">
                Modular Steel Shuttering
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Dredging & Marine Fleet Spotlight */}
      <Section className="py-16 md:py-24 bg-surface border-b border-border">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Marine Civil Infrastructure
            </span>
            <h2 className="text-3xl font-extrabold text-primary md:text-4xl font-heading mt-1">
              Specialized Dredging &amp; Marine Fleet
            </h2>
            <p className="mt-3 text-base text-text-muted">
              High-power cutter suction dredgers and marine logistics craft equipped for navigation
              channel maintenance and massive hydraulic land filling.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dredgingFleet.map((vessel) => (
              <div
                key={vessel.name}
                className="rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:shadow-md hover:border-accent/40 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Ship className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full bg-surface px-3 py-1 text-xs font-bold text-accent">
                      {vessel.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4">{vessel.name}</h3>
                  <ul className="space-y-2.5">
                    {vessel.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Equipment Inventory & Table */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Inventory Database
              </span>
              <h2 className="text-3xl font-extrabold text-primary md:text-4xl font-heading mt-1">
                Equipment &amp; Machinery Fleet
              </h2>
              <p className="mt-2 text-sm sm:text-base text-text-muted">
                Search and filter RASS Associates Ltd&apos;s active machinery and tooling inventory.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface pl-9 pr-4 py-2.5 text-sm focus:border-accent focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 pb-2 border-b border-border">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all",
                selectedCategory === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-surface text-text hover:bg-surface-dark",
              )}
            >
              All Categories ({equipment.length})
            </button>
            {equipmentCategories.map((cat) => {
              const count = equipment.filter((e) => e.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all",
                    selectedCategory === cat.id
                      ? "bg-primary text-white shadow-sm"
                      : "bg-surface text-text hover:bg-surface-dark",
                  )}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold text-xs sm:text-sm uppercase tracking-wider">
                      Equipment Name
                    </th>
                    <th className="px-6 py-4 font-bold text-xs sm:text-sm uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-4 font-bold text-xs sm:text-sm uppercase tracking-wider hidden md:table-cell">
                      Specifications / Capacity
                    </th>
                    <th className="px-6 py-4 font-bold text-xs sm:text-sm uppercase tracking-wider hidden lg:table-cell">
                      Primary Application
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredEquipment.length > 0 ? (
                    filteredEquipment.map((item, i) => (
                      <tr
                        key={item.name}
                        className={cn(
                          "transition-colors hover:bg-surface/80",
                          i % 2 === 0 ? "bg-white" : "bg-surface/30",
                        )}
                      >
                        <td className="px-6 py-4 font-semibold text-primary">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 font-bold text-accent">
                          {item.quantity}
                        </td>
                        <td className="px-6 py-4 text-text-muted hidden md:table-cell">
                          {item.specification || "—"}
                        </td>
                        <td className="px-6 py-4 text-text-muted text-xs hidden lg:table-cell">
                          {item.applications || "—"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-text-muted">
                        No equipment found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Maintenance & Yard Facility note */}
          <div className="mt-12 rounded-2xl bg-surface border border-border p-8 grid gap-6 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h4 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-accent" />
                Central Workshop &amp; Mobilization Yard
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                All machinery is maintained by our in-house mechanical engineering team at our central
                depots in Gazipur and Dhaka. Routine preventive servicing ensures peak operational
                reliability and immediate project site mobilization across all 64 districts of Bangladesh.
              </p>
            </div>
            <div className="text-right md:text-right">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-white shadow-md hover:bg-accent-hover transition-colors w-full sm:w-auto"
              >
                Inquire for Fleet Mobilization
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
