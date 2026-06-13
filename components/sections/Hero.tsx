import { business } from "@/lib/business";
import { OrderNow } from "@/components/OrderNow";
import { HeroDrink } from "@/components/HeroDrink";
import { ArrowIcon, PhoneIcon, StarIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 md:pb-24 md:pt-36">
      {/* Soft gradient wash + floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-taro-light/40 via-cream to-cream" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 animate-float-slow rounded-full bg-peach/30 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 top-32 -z-10 h-80 w-80 animate-float rounded-full bg-matcha/30 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-60 w-60 rounded-full bg-berry/20 blur-2xl" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="animate-rise-in text-center lg:text-left">
          <a
            href={business.links.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <span className="flex text-peach-dark" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-taro-dark">{business.rating.value} on Google</span>
            <span className="text-ink/50">· Dallas, GA</span>
          </a>

          <h1 className="heading-display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl">
            Your daily dose of <span className="text-gradient animate-gradient-pan">boba bliss</span> in Dallas.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/75 lg:mx-0 md:text-xl">
            Hand-crafted milk teas, real-fruit smoothies & playful specialty drinks — made fresh,
            packed with pearls, and ready when you are.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <OrderNow />
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-lg font-bold text-taro-dark shadow-soft transition-all hover:-translate-y-0.5"
            >
              See the Menu
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-bold text-ink/60 lg:justify-start">
            <a href={`tel:${business.phone.href}`} className="inline-flex items-center gap-1.5 hover:text-taro-dark">
              <PhoneIcon className="h-4 w-4 text-taro" /> {business.phone.display}
            </a>
            <span className="hidden sm:inline">·</span>
            <span>Open daily 11 AM – 8 PM</span>
            <span className="hidden sm:inline">·</span>
            <span>Dine-in & delivery</span>
          </div>
        </div>

        {/* Illustrated drink */}
        <div className="relative mx-auto w-full max-w-md">
          <HeroDrink />
        </div>
      </div>

      {/* Wavy divider into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 110" className="h-auto w-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0 64L60 58.7C120 53 240 43 360 48C480 53 600 75 720 80C840 85 960 75 1080 64C1200 53 1320 43 1380 37.3L1440 32V110H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
