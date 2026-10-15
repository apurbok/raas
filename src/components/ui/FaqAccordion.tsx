"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = {
  q: string;
  a: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className={cn(
              "paper-card overflow-hidden rounded-2xl transition-all duration-300",
              isOpen && "shadow-[inset_6px_6px_12px_#c5cedd,inset_-6px_-6px_12px_#fff]",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-base font-semibold text-primary sm:text-lg">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-text-muted sm:px-6">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
