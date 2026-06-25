"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on devices that support hover (not touch devices)
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
            containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Hidden entirely on server to avoid hydration mismatches, 
  // and hidden via CSS media queries on small/touch screens.
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 hidden md:block"
      style={{
        background: `radial-gradient(
          600px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh),
          rgba(74, 111, 165, 0.05),
          transparent 40%
        )`
      }}
      aria-hidden="true"
    />
  );
}
