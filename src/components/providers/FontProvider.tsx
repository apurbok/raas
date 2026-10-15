"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/** Maps ?font=1..8 to body typefaces. */
export const BODY_FONT_KEYS = [
  "josefin",
  "advent",
  "poiret",
  "handlee",
  "anonymous",
  "badscript",
  "turret",
  "iceland",
] as const;

/** Maps ?header-font=1..10 to heading typefaces. */
export const HEADER_FONT_KEYS = [
  "oswald",
  "unbounded",
  "caacupe",
  "breeserif",
  "chicle",
  "alata",
  "rubikmono",
  "audiowide",
  "concert",
  "goldman",
] as const;

const BODY_STORAGE = "rass-body-font";
const HEADER_STORAGE = "rass-header-font";

function clampIndex(raw: string | null | undefined, max: number, fallback = 1) {
  const n = raw ? Number.parseInt(raw, 10) : NaN;
  if (!Number.isFinite(n) || n < 1 || n > max) return fallback;
  return n;
}

function readStored(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function applyFonts(bodyIndex: number, headerIndex: number) {
  document.documentElement.dataset.bodyFont = BODY_FONT_KEYS[bodyIndex - 1];
  document.documentElement.dataset.headerFont = HEADER_FONT_KEYS[headerIndex - 1];
}

function withFontParams(url: URL, bodyIndex: number, headerIndex: number) {
  url.searchParams.set("font", String(bodyIndex));
  url.searchParams.set("header-font", String(headerIndex));
  return url;
}

function syncUrl(bodyIndex: number, headerIndex: number) {
  const url = withFontParams(new URL(window.location.href), bodyIndex, headerIndex);
  const next = `${url.pathname}${url.search}${url.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (next !== current) {
    window.history.replaceState(window.history.state, "", next);
  }
}

/** Persists ?font and ?header-font across navigations and applies typefaces. */
export function FontProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const bodyIndex = clampIndex(
      searchParams.get("font") ?? readStored(BODY_STORAGE),
      BODY_FONT_KEYS.length,
    );
    const headerIndex = clampIndex(
      searchParams.get("header-font") ?? readStored(HEADER_STORAGE),
      HEADER_FONT_KEYS.length,
    );

    writeStored(BODY_STORAGE, String(bodyIndex));
    writeStored(HEADER_STORAGE, String(headerIndex));
    applyFonts(bodyIndex, headerIndex);
    syncUrl(bodyIndex, headerIndex);

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = (event.target as Element | null)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }
      if (target.target && target.target !== "_self") return;

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      withFontParams(url, bodyIndex, headerIndex);
      const nextHref = `${url.pathname}${url.search}${url.hash}`;
      if (target.getAttribute("href") !== nextHref) {
        target.setAttribute("href", nextHref);
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname, searchParams]);

  return null;
}
