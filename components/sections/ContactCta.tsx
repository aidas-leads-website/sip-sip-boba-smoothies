import { business } from "@/lib/business";
import { OrderNow } from "@/components/OrderNow";
import { Reveal } from "@/components/Reveal";
import { PhoneIcon } from "@/components/icons";

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white pb-20 pt-4 md:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-peach via-berry to-taro px-6 py-14 text-center text-white shadow-pop sm:px-12">
            {/* Floating pearls */}
            <span className="absolute left-8 top-8 animate-float text-4xl" aria-hidden="true">🧋</span>
            <span className="absolute right-10 top-12 animate-float-slow text-3xl" aria-hidden="true">🍓</span>
            <span className="absolute bottom-8 left-1/4 animate-bobble text-3xl" aria-hidden="true">🥭</span>

            <h2 className="heading-display relative text-3xl sm:text-4xl md:text-5xl">
              Thirsty yet? Let&apos;s fix that.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/90">
              Order online for pickup or delivery, or give us a call. Your next favorite drink is
              minutes away.
            </p>

            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <OrderNow variant="light" />
              <a
                href={`tel:${business.phone.href}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 font-display text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
                {business.phone.display}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
