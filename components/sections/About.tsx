import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const highlights = [
  { emoji: "🌱", title: "Fresh, real ingredients", text: "Real fruit, quality teas & toppings cooked fresh daily." },
  { emoji: "🎨", title: "Made your way", text: "Adjust sweetness, ice & toppings on every single drink." },
  { emoji: "💜", title: "Community first", text: "A cozy, colorful hangout for friends, families & study sessions." },
  { emoji: "⭐", title: "4.9-star loved", text: "Our neighbors keep coming back — and we don't take it for granted." },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-20 md:py-28">
      <div className="bg-pearls pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-blob bg-gradient-to-br from-matcha-light to-taro-light blur-sm" />
            <div className="relative grid grid-cols-2 gap-4 rounded-[2.5rem] bg-white p-5 shadow-pop">
              <Stat big="4.9★" small="Google rating" className="bg-taro/10 text-taro-dark" />
              <Stat big="20+" small="Drinks & flavors" className="bg-berry/10 text-berry" />
              <Stat big="100%" small="Made to order" className="bg-matcha/15 text-matcha-dark" />
              <Stat big="7 days" small="Open every week" className="bg-peach/20 text-peach-dark" />
            </div>
            <span className="absolute -right-3 -top-3 animate-float text-4xl" aria-hidden="true">🧋</span>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title={
              <>
                Big flavor, <span className="text-gradient">good vibes</span>, made fresh in Dallas.
              </>
            }
          />
          <Reveal className="mt-5 space-y-4 text-lg text-ink/75">
            <p>
              Sip Sip Boba &amp; Smoothies started with a simple idea: bring a fresh, fun and
              genuinely delicious boba experience to Dallas, Georgia. Every milk tea, fruit tea and
              smoothie is crafted by hand the moment you order it.
            </p>
            <p>
              Step inside our bright, colorful shop and you&apos;ll find chewy tapioca pearls, real
              fruit, and a friendly crew who love helping you discover your new go-to drink. Whether
              you&apos;re grabbing a quick sip or settling in with friends, there&apos;s always a
              cup with your name on it.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <span className="text-2xl" aria-hidden="true">{h.emoji}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{h.title}</h3>
                    <p className="text-sm text-ink/65">{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ big, small, className }: { big: string; small: string; className: string }) {
  return (
    <div className={`rounded-3xl p-5 text-center ${className}`}>
      <div className="font-display text-3xl font-extrabold">{big}</div>
      <div className="mt-1 text-sm font-bold text-ink/60">{small}</div>
    </div>
  );
}
