"use client";

import { useRef, useState } from "react";

// Base positions of each boba pearl in the SVG's 300×360 coordinate space.
const PEARLS: Array<[number, number]> = [
  [120, 300],
  [150, 312],
  [182, 302],
  [134, 322],
  [166, 326],
  [110, 318],
  [196, 318],
  [150, 290],
  [128, 290],
  [176, 286],
];

const VIEW_W = 300;
const VIEW_H = 360;
const INFLUENCE = 78; // radius (in SVG units) the cursor affects
const MAX_PUSH = 30; // how far a pearl can be shoved
const PEARL_R = 9; // pearl radius — keeps pearls fully inside the walls

// Vertical liquid bounds (below the foam, above the rounded base).
const TOP_Y = 140;
const BOTTOM_Y = 324;

/**
 * Clamp a point to the inside of the cup. The cup body is the SVG path
 * "M74 92 h152 l-16 224 ...": a trapezoid (74→90 left wall, 226→210 right wall
 * over y 92→316) that then curves inward to the rounded base. We mirror that
 * here so a shoved pearl can never escape the glass.
 */
function clampInsideCup(x: number, y: number): { x: number; y: number } {
  const fy = Math.max(TOP_Y, Math.min(BOTTOM_Y, y));
  const t = Math.max(0, Math.min(1, (fy - 92) / 224));
  let left = 74 + 16 * t + PEARL_R;
  let right = 226 - 16 * t - PEARL_R;
  // Extra inset where the base rounds in (below y=316).
  if (fy > 316) {
    const inset = fy - 316;
    left += inset;
    right -= inset;
  }
  return { x: Math.max(left, Math.min(right, x)), y: fy };
}

type Offset = { x: number; y: number };
const ZERO: Offset[] = PEARLS.map(() => ({ x: 0, y: 0 }));

/**
 * Pure-CSS/SVG boba cup illustration. Moving the cursor near the cup gently
 * shoves the tapioca pearls away from the pointer; they spring back on leave.
 * Respects prefers-reduced-motion (the effect simply no-ops there).
 */
export function HeroDrink() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [offsets, setOffsets] = useState<Offset[]>(ZERO);

  function handleMove(e: React.PointerEvent) {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = svg.getBoundingClientRect();
    // Map the pointer from screen pixels into the SVG's coordinate space.
    const px = ((e.clientX - rect.left) / rect.width) * VIEW_W;
    const py = ((e.clientY - rect.top) / rect.height) * VIEW_H;

    setOffsets(
      PEARLS.map(([cx, cy]) => {
        const dx = cx - px;
        const dy = cy - py;
        const dist = Math.hypot(dx, dy) || 0.0001;
        // Repel away from the cursor, then clamp so the pearl stays in the cup.
        let fx = cx;
        let fy = cy;
        if (dist < INFLUENCE) {
          const force = ((INFLUENCE - dist) / INFLUENCE) * MAX_PUSH;
          fx = cx + (dx / dist) * force;
          fy = cy + (dy / dist) * force;
        }
        const clamped = clampInsideCup(fx, fy);
        return { x: clamped.x - cx, y: clamped.y - cy };
      })
    );
  }

  function handleLeave() {
    setOffsets(ZERO);
  }

  return (
    <div
      className="relative aspect-square cursor-pointer"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {/* Halo */}
      <div className="absolute inset-4 animate-spin-slow rounded-blob bg-gradient-to-br from-taro-light via-peach-light to-matcha-light opacity-70 blur-[2px]" />
      <div className="absolute inset-8 rounded-[42%_58%_60%_40%/45%_45%_55%_55%] bg-white/60 backdrop-blur-sm" />

      {/* Cup */}
      <svg
        ref={svgRef}
        viewBox="0 0 300 360"
        className="relative z-10 mx-auto h-full w-auto drop-shadow-xl"
        role="img"
        aria-label="A cup of boba milk tea topped with cream and tapioca pearls. Move your cursor near it to nudge the pearls."
      >
        <defs>
          <linearGradient id="tea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9A8F0" />
            <stop offset="55%" stopColor="#9B6FD6" />
            <stop offset="100%" stopColor="#6E45A8" />
          </linearGradient>
          <linearGradient id="cup" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Straw */}
        <rect x="171" y="6" width="22" height="150" rx="11" fill="#FF6FA5" transform="rotate(8 182 80)" />

        {/* Lid dome */}
        <path d="M70 86c0-10 8-18 18-18h124c10 0 18 8 18 18v6H70Z" fill="#F6EAD9" />
        {/* Cup body */}
        <path d="M74 92h152l-16 224a26 26 0 0 1-26 23H116a26 26 0 0 1-26-23L74 92Z" fill="url(#tea)" />
        {/* Cream foam top */}
        <path d="M82 92h136l-5 40c-20 10-40 14-63 14s-43-4-63-14l-5-40Z" fill="#FFF8EF" />
        {/* Glass sheen */}
        <path d="M74 92h152l-16 224a26 26 0 0 1-26 23H116a26 26 0 0 1-26-23L74 92Z" fill="url(#cup)" />
        <rect x="96" y="150" width="14" height="150" rx="7" fill="#ffffff" opacity="0.25" />

        {/* Boba pearls — each reacts to the cursor */}
        {PEARLS.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="9"
            fill="#3A2E4A"
            style={{
              transform: `translate(${offsets[i].x}px, ${offsets[i].y}px)`,
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        ))}
      </svg>

      {/* Floating mini fruit */}
      <span className="absolute -left-2 top-10 animate-float text-4xl" aria-hidden="true">🍓</span>
      <span className="absolute right-0 top-24 animate-float-slow text-4xl" aria-hidden="true">🥭</span>
      <span className="absolute bottom-6 -left-4 animate-bobble text-3xl" aria-hidden="true">🍃</span>
    </div>
  );
}
