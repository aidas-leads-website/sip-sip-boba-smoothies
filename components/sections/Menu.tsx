import { menu, teaBases, toppings, toppingsPrice, snacks } from "@/lib/menu";
import { business } from "@/lib/business";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { OrderNow } from "@/components/OrderNow";

export function Menu() {
  return (
    <section id="menu" className="relative scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Menu"
          title={
            <>
              Find your <span className="text-gradient">favorite sip</span>
            </>
          }
          subtitle="Every drink is made to order — pick your tea base, sweetness, ice level & toppings to make it yours."
        />

        {/* Tea bases */}
        <Reveal className="mx-auto mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-cream/70 px-5 py-3 text-center">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-taro-dark">
              Choose your tea:
            </span>
            {teaBases.map((t) => (
              <span key={t.name} className="text-sm text-ink/70">
                <span className="font-bold text-ink">{t.name}</span>{" "}
                <span className="text-ink/45">({t.note})</span>
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {menu.map((category, ci) => (
            <Reveal key={category.id} delay={ci * 70}>
              <article className="flex h-full flex-col rounded-[2rem] border border-ink/5 bg-cream/60 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <header className="flex items-center gap-4">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${category.accent} text-2xl shadow-pop`}
                    aria-hidden="true"
                  >
                    {category.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-extrabold text-ink">{category.name}</h3>
                      <span className="shrink-0 rounded-full bg-taro/10 px-3 py-1 font-display text-sm font-extrabold text-taro-dark">
                        {category.price}
                      </span>
                    </div>
                    <p className="text-sm text-ink/60">{category.blurb}</p>
                  </div>
                </header>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold shadow-sm ${
                        item.tag === "Popular"
                          ? "bg-berry/15 text-berry"
                          : "bg-white text-ink/75"
                      }`}
                    >
                      {item.tag === "Popular" && <span aria-hidden="true">⭐</span>}
                      <span>{item.name}</span>
                      {item.note && <span className="font-normal text-ink/45">· {item.note}</span>}
                      {item.price && (
                        <span className="text-taro-dark">{item.price}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Toppings + snacks */}
        <Reveal className="mt-12">
          <div className="rounded-[2rem] bg-gradient-to-r from-taro to-berry p-8 text-center text-white shadow-pop sm:p-10">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
              Build your perfect cup 🧋
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-white/85">
              Add any topping for just <span className="font-bold">{toppingsPrice}</span> each:
            </p>
            <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2.5">
              {toppings.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur-sm"
                >
                  {t}
                </li>
              ))}
            </ul>

            {snacks.length > 0 && (
              <p className="mt-6 text-white/90">
                🥐 Hungry?{" "}
                {snacks.map((s, i) => (
                  <span key={s.name} className="font-bold">
                    {s.name} {s.price}
                    {i < snacks.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            )}

            <div className="mt-7">
              <OrderNow variant="light" />
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-sm text-ink/50">
          Questions about the menu? Call{" "}
          <a href={`tel:${business.phone.href}`} className="font-bold text-taro-dark hover:underline">
            {business.phone.display}
          </a>{" "}
          — we&apos;re happy to help you find your new favorite.
        </p>
      </div>
    </section>
  );
}
