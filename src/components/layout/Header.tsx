"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import { SiteSearch } from "@/components/layout/SiteSearch";
import { useLanguage, type LangCode } from "@/components/providers/LanguageProvider";
import { navigation, type NavItem } from "@/content/company";
import { cn } from "@/lib/utils";

const languages: { code: LangCode; labelKey: string }[] = [
  { code: "en", labelKey: "English" },
  { code: "ar", labelKey: "Saudi Arabia" },
  { code: "zh", labelKey: "Chinese" },
];

export function Header() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/" || pathname === "";
  const overlay = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [langOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 160);
  };

  const toggleMobileAccordion = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const linkActive = (href: string, children?: NavItem["children"]) =>
    pathname === href ||
    (href !== "/" && pathname.startsWith(href)) ||
    Boolean(children?.some((c) => pathname.startsWith(c.href.split("#")[0])));

  const currentLangLabel = t(languages.find((l) => l.code === lang)?.labelKey ?? "English");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        overlay
          ? "bg-transparent"
          : "border-b border-border bg-white/95 shadow-md backdrop-blur-md",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-3 md:h-[4.5rem]">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold tracking-[0.12em] shadow-sm",
              overlay
                ? "border border-white/50 bg-white/20 text-white"
                : "bg-gradient-to-br from-primary to-accent text-white",
            )}
          >
            RA
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-heading text-base font-semibold tracking-wide md:text-lg",
                overlay ? "text-white" : "text-primary",
              )}
            >
              RASS Associates
            </span>
            <span
              className={cn(
                "hidden text-[10px] font-medium uppercase tracking-[0.18em] sm:block",
                overlay ? "text-white/75" : "text-text-muted",
              )}
            >
              Energy · Infrastructure
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {navigation.header.map((item) => {
            const children = "children" in item ? item.children : undefined;
            const hasChildren = Boolean(children && children.length > 0);
            const isActive = linkActive(item.href, children);
            const itemClass = cn(
              "rounded-lg px-2.5 py-2 text-[12px] font-medium tracking-wide transition-colors 2xl:px-3 2xl:text-sm",
              overlay
                ? isActive
                  ? "bg-white/20 text-white"
                  : "text-white/90 hover:bg-white/15 hover:text-white"
                : isActive
                  ? "bg-primary/10 text-primary"
                  : "text-text hover:bg-surface hover:text-primary",
            );

            if (!hasChildren) {
              return (
                <Link key={item.href} href={item.href} className={itemClass}>
                  {t(item.label)}
                </Link>
              );
            }

            const isOpen = openDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={cn(itemClass, "inline-flex items-center gap-1")}
                  aria-expanded={isOpen}
                >
                  {t(item.label)}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} />
                </Link>

                {isOpen && (
                  <div className="absolute left-0 top-full z-50 pt-2">
                    <div className="min-w-64 overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-[#1a6fb8] to-[#0f4f8a] py-2 shadow-2xl">
                      {children?.map((subItem) => {
                        const featured = "featured" in subItem && subItem.featured;
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-white/15 hover:text-white",
                              featured
                                ? "mx-2 mb-1 rounded-lg bg-white/15 font-semibold text-cyan-200 ring-1 ring-cyan-300/40"
                                : "text-white/90",
                            )}
                          >
                            <span>{subItem.label}</span>
                            {featured && (
                              <span className="rounded-full bg-cyan-300/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-100">
                                Special
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <SiteSearch overlay={overlay} />

          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors sm:px-2.5",
                overlay
                  ? "text-white/90 hover:bg-white/15 hover:text-white"
                  : "text-primary hover:bg-surface",
              )}
              aria-expanded={langOpen}
              aria-label={t("Language")}
            >
              <Globe2 className="h-3.5 w-3.5" />
              <span className="hidden max-w-[7rem] truncate sm:inline">{currentLangLabel}</span>
              <ChevronDown className={cn("h-3 w-3 transition-transform", langOpen && "rotate-180")} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-[#1a6fb8] to-[#0f4f8a] py-1.5 shadow-2xl">
                {languages.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => {
                      setLang(option.code);
                      setLangOpen(false);
                    }}
                    className={cn(
                      "block w-full px-4 py-2 text-left text-sm text-white/90 transition-colors hover:bg-white/15 hover:text-white",
                      lang === option.code && "bg-white/15 font-semibold text-white",
                    )}
                  >
                    {t(option.labelKey)}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex rounded-lg p-2 xl:hidden",
              overlay ? "text-white hover:bg-white/15" : "text-primary hover:bg-surface",
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="max-h-[85vh] overflow-y-auto border-t border-border bg-white px-4 py-4 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navigation.header.map((item: NavItem) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = !!mobileExpanded[item.label];

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-primary"
                  >
                    {t(item.label)}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion(item.label)}
                    className="flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-primary"
                  >
                    <span>{t(item.label)}</span>
                    <ChevronDown className={cn("h-4 w-4", isExpanded && "rotate-180")} />
                  </button>
                  {isExpanded && (
                    <div className="flex flex-col pb-2">
                      {item.children?.map((subItem) => {
                        const featured = "featured" in subItem && subItem.featured;
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "mx-2 flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm",
                              featured
                                ? "bg-primary/10 font-semibold text-primary"
                                : "text-text-muted",
                            )}
                          >
                            <span>{subItem.label}</span>
                            {featured && (
                              <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                                Special
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
