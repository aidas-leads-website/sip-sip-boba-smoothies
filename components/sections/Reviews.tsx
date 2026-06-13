import { reviews } from "@/lib/content";
import { business } from "@/lib/business";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, FacebookIcon, GoogleIcon, StarIcon, YelpIcon } from "@/components/icons";

const sourceMeta = {
  Google: { Icon: GoogleIcon, href: business.links.google },
  Yelp: { Icon: YelpIcon, href: business.links.yelp },
  Facebook: { Icon: FacebookIcon, href: business.links.facebook },
} as const;

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-taro-dark via-taro to-berry py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-peach/20 blur-2xl" />

      <div className="container-page relative">
        {/* Big rating banner */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-[0.16em]">
            Loved by locals
          </span>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <span className="font-display text-7xl font-extrabold leading-none">{business.rating.value}</span>
            <div className="flex flex-col items-center sm:items-start">
              <span className="flex text-peach-light" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-7 w-7" />
                ))}
              </span>
              <span className="mt-1 text-white/85">
                {business.rating.value} out of 5 on Google
              </span>
            </div>
          </div>
          <p className="mt-4 text-lg text-white/85">
            Don&apos;t just take our word for it — here&apos;s what the neighborhood is saying.
          </p>
        </Reveal>

        {/* Review cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => {
            const meta = sourceMeta[review.source];
            const Icon = meta.Icon;
            return (
              <Reveal key={review.author} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-[1.75rem] bg-white/95 p-6 text-ink shadow-pop backdrop-blur-sm">
                  <span className="flex text-peach-dark" aria-label={`${review.stars} out of 5 stars`}>
                    {Array.from({ length: review.stars }).map((_, s) => (
                      <StarIcon key={s} className="h-5 w-5" aria-hidden="true" />
                    ))}
                  </span>
                  <blockquote className="mt-3 flex-1 text-ink/80">“{review.quote}”</blockquote>
                  <figcaption className="mt-4 flex items-center gap-2 border-t border-ink/5 pt-4">
                    <Icon className="h-5 w-5" />
                    <span className="font-display font-bold">{review.author}</span>
                    <span className="ml-auto text-sm text-ink/50">via {review.source}</span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={business.links.google}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-lg font-bold text-taro-dark shadow-pop transition-all hover:-translate-y-0.5"
          >
            Read & leave a review
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
