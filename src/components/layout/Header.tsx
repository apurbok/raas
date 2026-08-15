"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Building2,
  ChevronDown,
  Compass,
  FileCheck,
  FolderGit2,
  HardHat,
  Menu,
  Phone,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { company, navigation, type NavItem } from "@/content/company";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const toggleMobileAccordion = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const targetHash = `#${hash}`;
      const currentPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
      const expectedPath = path.endsWith("/") ? path : `${path}/`;

      if (currentPath === expectedPath || (path === "/about/" && pathname.startsWith("/about"))) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", targetHash);
        }
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/95 shadow-md backdrop-blur-md"
          : "border-b border-border/50 bg-white",
      )}
    >
      {/* Top micro bar */}
      <div className="border-b border-white/10 bg-primary-dark text-white">
        <div className="container-wide flex items-center justify-between py-1.5 text-xs sm:text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${company.phone[0]}`}
              className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-accent"
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent" />
              <span>{company.phone[0]}</span>
            </a>
            <span className="hidden text-white/40 md:inline">|</span>
            <a
              href={`mailto:${company.email}`}
              className="hidden text-white/80 transition-colors hover:text-accent md:inline"
            >
              {company.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="hidden sm:inline text-white/70">
              House 482, Mirpur DOHS, Dhaka
            </span>
            <Link
              href="/hse/"
              className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-accent hover:bg-white/20"
            >
              <ShieldCheck className="h-3 w-3" />
              HES Certified
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary text-white font-bold text-lg md:text-xl shadow-inner group-hover:bg-accent transition-colors">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-primary md:text-xl group-hover:text-accent transition-colors">
              RASS Associates
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-wider text-text-muted sm:block">
              {company.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label="Main navigation">
          {navigation.header.map((item: NavItem) => {
            const hasChildren = item.children && item.children.length > 0;
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href)) ||
              (item.children && item.children.some((c) => pathname.startsWith(c.href.split("#")[0])));

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-2.5 py-2 text-[13px] xl:text-sm font-semibold transition-all hover:bg-surface hover:text-accent",
                    isActive ? "text-accent bg-accent/5 font-bold" : "text-primary/90",
                  )}
                >
                  {item.label}
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
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] xl:text-sm font-semibold transition-all hover:bg-surface hover:text-accent",
                    isActive || isOpen ? "text-accent bg-accent/5 font-bold" : "text-primary/90",
                  )}
                  aria-expanded={isOpen}
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isOpen && "rotate-180 text-accent",
                    )}
                  />
                </button>

                {/* Dropdown Panel matching ss-1 style */}
                {isOpen && (
                  <div className="absolute left-0 top-full pt-1.5 w-72 xl:w-80 animate-in fade-in-50 slide-in-from-top-2 duration-200 z-50">
                    <div className="rounded-xl border border-primary/20 bg-[#0092db] p-2 shadow-2xl text-white">
                      <div className="flex flex-col space-y-0.5">
                        {item.children?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={(e) => handleAnchorClick(e, subItem.href)}
                            className="group flex flex-col rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all hover:bg-white hover:text-[#0092db]"
                          >
                            <span className="font-semibold text-white group-hover:text-[#0092db] flex items-center justify-between">
                              {subItem.label}
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">
                                →
                              </span>
                            </span>
                            {subItem.description && (
                              <span className="text-xs text-white/80 group-hover:text-text-muted mt-0.5 line-clamp-1">
                                {subItem.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow active:scale-95 sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-primary hover:bg-surface lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Accordion Menu */}
      {mobileOpen && (
        <nav
          className="max-h-[85vh] overflow-y-auto border-t border-border bg-white px-4 py-4 lg:hidden shadow-lg"
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
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-semibold transition-colors hover:bg-surface",
                      pathname === item.href ? "text-accent bg-accent/10" : "text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="rounded-lg border border-border/60 bg-surface/50">
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion(item.label)}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-base font-semibold text-primary"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-text-muted transition-transform duration-200",
                        isExpanded && "rotate-180 text-accent",
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border/40 bg-white px-2 py-2 flex flex-col space-y-1">
                      {item.children?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={(e) => {
                            handleAnchorClick(e, subItem.href);
                            setMobileOpen(false);
                          }}
                          className="rounded-md px-3 py-2 text-sm font-medium text-text hover:bg-accent/10 hover:text-accent"
                        >
                          <div className="font-semibold">{subItem.label}</div>
                          {subItem.description && (
                            <div className="text-xs text-text-muted">{subItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/contact/"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-lg bg-accent px-4 py-3 text-center text-sm font-bold text-white shadow-md hover:bg-accent-hover"
            >
              Get a Quote / Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
