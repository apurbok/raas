"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

const searchIndex = [
  { title: "Home", href: "/", keywords: "rass associates energy" },
  { title: "About", href: "/about/", keywords: "company mission vision" },
  { title: "Services", href: "/services/", keywords: "civil construction engineering" },
  { title: "Oil & Gas", href: "/oil-gas/", keywords: "energy infrastructure" },
  { title: "Projects", href: "/projects/", keywords: "payra solar dredging" },
  { title: "Resources and Equipments", href: "/resources-equipment/", keywords: "fleet vessels" },
  { title: "HES & CSR", href: "/hes-csr/", keywords: "safety environment csr" },
  { title: "FAQ", href: "/faq/", keywords: "questions help" },
  { title: "Contact", href: "/contact/", keywords: "email phone inquiry" },
  { title: "Sister Concerns", href: "/sister-concerns/", keywords: "affiliations bluearc" },
];

export function SiteSearch({ overlay }: { overlay?: boolean }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex;
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    inputRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
          overlay
            ? "text-white/90 hover:bg-white/15 hover:text-white"
            : "text-primary hover:bg-surface",
        )}
        aria-label={t("Search")}
      >
        <Search className="h-4 w-4" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-primary-dark/45 px-4 pt-[12vh] backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t("Search")}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Search className="h-4 w-4 shrink-0 text-text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("Search the site…")}
                className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-muted"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-text-muted hover:bg-surface hover:text-primary"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="max-h-72 overflow-y-auto py-2">
              {results.length === 0 ? (
                <li className="px-4 py-6 text-center text-sm text-text-muted">{t("No results")}</li>
              ) : (
                results.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                      className="block px-4 py-2.5 text-sm text-primary transition-colors hover:bg-surface"
                    >
                      {t(item.title) !== item.title ? t(item.title) : item.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
