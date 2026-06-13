"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { business } from "@/lib/business";
import { ArrowIcon } from "./icons";

type Platform = { key: string; label: string; href: string; emoji: string };

// Build the list of available ordering platforms (skips any empty link).
const platforms: Platform[] = [
  { key: "doordash", label: "DoorDash", href: business.links.doordash, emoji: "🛵" },
  { key: "ubereats", label: "Uber Eats", href: business.links.ubereats, emoji: "🥡" },
  { key: "grubhub", label: "Grubhub", href: business.links.grubhub, emoji: "🍴" },
].filter((p) => p.href);

type OrderNowProps = {
  variant?: "primary" | "light";
  size?: "md" | "lg";
  className?: string;
  label?: string;
};

type Coords = { top: number; left: number; placement: "below" | "above" };

/**
 * "Order Online" button. If multiple delivery platforms exist it opens a
 * popover so the customer can pick one; if only one exists it links straight
 * through. The popover is rendered in a portal so it is never clipped by a
 * parent with `overflow-hidden`. Edit links in lib/business.ts.
 */
export function OrderNow({
  variant = "primary",
  size = "lg",
  className = "",
  label = "Order Online",
}: OrderNowProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0, placement: "below" });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const reposition = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const gap = 10;
    const estHeight = 70 + platforms.length * 58;
    const openAbove = r.bottom + gap + estHeight > window.innerHeight && r.top > estHeight + gap;
    setCoords({
      top: openAbove ? r.top - gap : r.bottom + gap,
      left: r.left + r.width / 2,
      placement: openAbove ? "above" : "below",
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    reposition();

    function onPointerDown(e: MouseEvent) {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", reposition);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", reposition, true);
      window.removeEventListener("resize", reposition);
    };
  }, [open, reposition]);

  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-display font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-taro/40";
  const sizes = size === "lg" ? "px-7 py-3.5 text-lg" : "px-5 py-2.5 text-base";
  const variants =
    variant === "primary"
      ? "bg-gradient-to-r from-berry to-peach-dark text-white shadow-pop-peach hover:-translate-y-0.5 hover:shadow-lg"
      : "bg-white text-taro-dark shadow-soft hover:-translate-y-0.5";

  // No platforms configured — fall back to a click-to-call prompt.
  if (platforms.length === 0) {
    return (
      <a href={`tel:${business.phone.href}`} className={`${base} ${sizes} ${variants} ${className}`}>
        Call to Order
        <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  // Exactly one platform — link directly, no popover needed.
  if (platforms.length === 1) {
    return (
      <a
        href={platforms[0].href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${sizes} ${variants} ${className}`}
      >
        {label}
        <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`${base} ${sizes} ${variants} ${className}`}
      >
        {label}
        <ArrowIcon
          className={`h-5 w-5 transition-transform ${open ? "rotate-90" : "group-hover:translate-x-1"}`}
        />
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            aria-label="Choose a delivery app"
            className="animate-rise-in fixed z-[200] w-60 rounded-3xl border border-taro/10 bg-white p-2 text-left shadow-pop"
            style={{
              top: coords.top,
              left: coords.left,
              transform:
                coords.placement === "above" ? "translate(-50%, -100%)" : "translate(-50%, 0)",
            }}
          >
            <p className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wide text-ink/50">
              Choose a delivery app
            </p>
            {platforms.map((p) => (
              <a
                key={p.key}
                role="menuitem"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-2xl px-3 py-3 font-body font-bold text-ink transition-colors hover:bg-cream"
              >
                <span className="text-xl" aria-hidden="true">
                  {p.emoji}
                </span>
                {p.label}
                <ArrowIcon className="ml-auto h-4 w-4 text-taro" />
              </a>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
