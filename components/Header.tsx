"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/business";
import { OrderNow } from "./OrderNow";
import { BobaCupIcon, FacebookIcon, GoogleIcon, InstagramIcon, PhoneIcon, YelpIcon } from "./icons";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label={`${business.name} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-taro to-berry text-white shadow-pop transition-transform group-hover:-rotate-6">
            <BobaCupIcon className="h-7 w-7" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold text-ink">Sip Sip</span>
            <span className="-mt-1 block font-display text-xs font-bold uppercase tracking-[0.18em] text-taro">
              Boba &amp; Smoothies
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-body font-bold text-ink/80 transition-colors hover:bg-white/70 hover:text-taro-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${business.phone.href}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 font-body font-bold text-ink/80 transition-colors hover:text-taro-dark sm:inline-flex"
          >
            <PhoneIcon className="h-5 w-5 text-taro" />
            <span className="hidden xl:inline">{business.phone.display}</span>
          </a>
          <div className="hidden sm:block">
            <OrderNow size="md" />
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-ink shadow-soft lg:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`fixed inset-0 top-[4.5rem] bg-ink/30 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          aria-label="Mobile"
          className={`fixed inset-x-0 top-[4.5rem] origin-top border-t border-taro/10 bg-cream px-5 pb-8 pt-4 shadow-soft transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-display text-xl font-bold text-ink transition-colors hover:bg-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-3">
            <OrderNow className="w-full" />
            <a
              href={`tel:${business.phone.href}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-display font-bold text-taro-dark shadow-soft"
            >
              <PhoneIcon className="h-5 w-5" />
              {business.phone.display}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <SocialLink href={business.links.google} label="Google"><GoogleIcon className="h-5 w-5" /></SocialLink>
            <SocialLink href={business.links.facebook} label="Facebook"><FacebookIcon className="h-5 w-5" /></SocialLink>
            <SocialLink href={business.links.instagram} label="Instagram"><InstagramIcon className="h-5 w-5" /></SocialLink>
            <SocialLink href={business.links.yelp} label="Yelp"><YelpIcon className="h-5 w-5" /></SocialLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-ink shadow-soft transition-transform hover:-translate-y-0.5 hover:text-taro"
    >
      {children}
    </a>
  );
}
