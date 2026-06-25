"use client";

import { useEffect, useRef, useCallback } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
  driftAngle: number;
  driftSpeed: number;
}

// ── Palette (from CSS vars) ────────────────────────────────────────────────
const COLORS = [
  "rgba(74, 128, 166, 0.40)",   // steel-blue
  "rgba(74, 128, 166, 0.30)",   // steel-blue faint
  "rgba(100, 140, 170, 0.25)",  // muted teal-gray
  "rgba(198, 138, 83, 0.18)",   // copper accent — subtle
  "rgba(74, 128, 166, 0.20)",   // steel-blue extra faint
  "rgba(140, 160, 180, 0.15)",  // cool gray dust
];

const PARTICLE_COUNT = 65;
const POINTER_RADIUS = 180;       // px — interaction zone
const POINTER_STRENGTH = 0.012;   // gentle push factor
const DRIFT_SPEED_RANGE = [0.06, 0.20] as const;
const RETURN_EASE = 0.003;        // how fast particles return after pointer leaves
const LINE_DISTANCE = 110;       // max distance for connection lines

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef({ x: -9999, y: -9999 });
  const sizeRef = useRef({ w: 0, h: 0 });
  const activeRef = useRef(true);
  const enabledRef = useRef(false);

  // ── Build particles ──────────────────────────────────────────────────────
  const initParticles = useCallback((w: number, h: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        radius: Math.random() * 1.6 + 0.5,          // 0.5 – 2.1 px
        opacity: Math.random() * 0.55 + 0.15,        // 0.15 – 0.70
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        driftAngle: Math.random() * Math.PI * 2,
        driftSpeed:
          DRIFT_SPEED_RANGE[0] +
          Math.random() * (DRIFT_SPEED_RANGE[1] - DRIFT_SPEED_RANGE[0]),
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    // ── Gate: desktop only, no reduced motion ────────────────────────────
    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!supportsHover || prefersReducedMotion) {
      enabledRef.current = false;
      return;
    }
    enabledRef.current = true;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Size canvas ──────────────────────────────────────────────────────
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
      initParticles(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Pointer tracking (via ref — no state) ────────────────────────────
    const onPointer = (e: PointerEvent) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
    };
    const onPointerLeave = () => {
      pointerRef.current.x = -9999;
      pointerRef.current.y = -9999;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    // ── Visibility API ───────────────────────────────────────────────────
    const onVisibility = () => {
      activeRef.current = !document.hidden;
      if (activeRef.current) {
        animRef.current = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    // ── Draw loop ────────────────────────────────────────────────────────
    const draw = () => {
      if (!activeRef.current) return;

      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      const px = pointerRef.current.x;
      const py = pointerRef.current.y;

      for (const p of particlesRef.current) {
        // Organic drift
        p.driftAngle += 0.0015 + Math.random() * 0.0008;
        const driftX = Math.cos(p.driftAngle) * p.driftSpeed;
        const driftY = Math.sin(p.driftAngle) * p.driftSpeed;

        // Pointer interaction — gentle displacement
        let pushX = 0;
        let pushY = 0;
        const dx = p.x - px;
        const dy = p.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < POINTER_RADIUS && dist > 0) {
          const force =
            ((POINTER_RADIUS - dist) / POINTER_RADIUS) * POINTER_STRENGTH;
          pushX = (dx / dist) * force * POINTER_RADIUS;
          pushY = (dy / dist) * force * POINTER_RADIUS;
        }

        // Ease back toward base position
        const returnX = (p.baseX - p.x) * RETURN_EASE;
        const returnY = (p.baseY - p.y) * RETURN_EASE;

        p.vx = p.vx * 0.96 + driftX + pushX + returnX;
        p.vy = p.vy * 0.96 + driftY + pushY + returnY;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      // Draw faint connection lines between close particles
      ctx.globalAlpha = 1;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            const alpha = (1 - dist / LINE_DISTANCE) * 0.055;
            ctx.strokeStyle = `rgba(74, 128, 166, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
