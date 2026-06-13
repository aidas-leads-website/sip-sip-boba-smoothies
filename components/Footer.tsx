import { business } from "@/lib/business";
import { OrderNow } from "./OrderNow";
import {
  BobaCupIcon,
  ClockIcon,
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  YelpIcon,
} from "./icons";

const socials = [
  { key: "google", href: business.links.google, label: "Google Business", Icon: GoogleIcon },
  { key: "facebook", href: business.links.facebook, label: "Facebook", Icon: FacebookIcon },
  { key: "instagram", href: business.links.instagram, label: "Instagram", Icon: InstagramIcon },
  { key: "yelp", href: business.links.yelp, label: "Yelp", Icon: YelpIcon },
].filter((s) => s.href);

export function Footer() {
  const year = 2026; // Static to keep build output deterministic; bump as needed.

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-taro/20 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-berry/20 blur-2xl" />

      <div className="container-page relative py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-taro to-berry text-white">
                <BobaCupIcon className="h-7 w-7" />
              </span>
              <span className="font-display text-xl font-extrabold">{business.shortName}</span>
            </div>
            <p className="mt-4 max-w-xs text-cream/70">{business.tagline}</p>
            <div className="mt-5">
              <OrderNow />
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="font-display text-lg font-bold text-peach-light">Explore</h3>
            <ul className="mt-4 space-y-2 text-cream/80">
              {[
                { href: "#menu", label: "Menu" },
                { href: "#about", label: "Our Story" },
                { href: "#gallery", label: "Gallery" },
                { href: "#reviews", label: "Reviews" },
                { href: "#location", label: "Visit Us" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit */}
          <div>
            <h3 className="font-display text-lg font-bold text-peach-light">Visit Us</h3>
            <ul className="mt-4 space-y-3 text-cream/80">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-matcha-light" />
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region} {business.address.postalCode}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-matcha-light" />
                <a href={`tel:${business.phone.href}`} className="transition-colors hover:text-white">
                  {business.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-matcha-light" />
                <span>Open daily · 11:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-lg font-bold text-peach-light">Follow the Sip</h3>
            <p className="mt-4 text-cream/70">Tag us in your boba pics!</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-cream transition-all hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-cream/60 sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <span className="text-berry">♥</span> in Dallas, Georgia
          </p>
        </div>
      </div>
    </footer>
  );
}
