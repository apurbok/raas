"use client";

import { useEffect, useId, useRef } from "react";

/** Draws a theme-colored stroke that grows around the card perimeter on hover. */
export function CardTraceBorder({ radius = 16 }: { radius?: number }) {
  const uid = useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const rect = rectRef.current;
    if (!svg || !rect) return;

    const sync = () => {
      const { width, height } = svg.getBoundingClientRect();
      const pad = 2;
      rect.setAttribute("x", String(pad));
      rect.setAttribute("y", String(pad));
      rect.setAttribute("width", String(Math.max(0, width - pad * 2)));
      rect.setAttribute("height", String(Math.max(0, height - pad * 2)));
      rect.setAttribute("rx", String(radius));
      rect.setAttribute("ry", String(radius));
    };

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(svg);
    return () => observer.disconnect();
  }, [radius]);

  return (
    <svg ref={svgRef} className="card-trace-svg" aria-hidden="true">
      <defs>
        <linearGradient id={`ctg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1565a8" />
          <stop offset="50%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      <rect
        ref={rectRef}
        className="card-trace-path"
        pathLength={100}
        fill="none"
        stroke={`url(#ctg-${uid})`}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
