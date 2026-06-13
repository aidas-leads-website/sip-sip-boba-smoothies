import { business } from "@/lib/business";
import { reviews } from "@/lib/content";
import { menu, snacks } from "@/lib/menu";

// Strip the "$" so JSON-LD offers carry a numeric price string.
const toPrice = (p: string) => p.replace(/[^0-9.]/g, "");

/**
 * LocalBusiness / Restaurant structured data (schema.org JSON-LD).
 * Helps Google show rich results: name, address, hours, rating, price & socials.
 */
export function LocalBusinessJsonLd() {
  const sameAs = [
    business.links.facebook,
    business.links.instagram,
    business.links.yelp,
    business.links.google,
  ].filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "CafeOrCoffeeShop", "LocalBusiness"],
    "@id": `${business.url}/#business`,
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: `+1${business.phone.href.replace(/\D/g, "").slice(-10)}`,
    priceRange: business.priceRange,
    servesCuisine: ["Bubble Tea", "Boba", "Smoothies", "Beverages"],
    image: [`${business.url}/opengraph-image`],
    logo: `${business.url}/favicon.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.links.google,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: business.rating.scale,
    },
    // Individual reviews strengthen eligibility for review-star rich results.
    // Sourced from lib/content.ts — edit the quotes there.
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.stars,
        bestRating: business.rating.scale,
      },
      reviewBody: r.quote,
    })),
    openingHoursSpecification: business.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.open,
      closes: h.close,
    })),
    menu: `${business.url}/#menu`,
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: [
        ...menu.map((cat) => ({
          "@type": "MenuSection",
          name: cat.name,
          description: cat.blurb,
          hasMenuItem: cat.items.map((item) => ({
            "@type": "MenuItem",
            name: item.note ? `${item.name} (${item.note})` : item.name,
            offers: {
              "@type": "Offer",
              price: toPrice(item.price ?? cat.price),
              priceCurrency: "USD",
            },
          })),
        })),
        {
          "@type": "MenuSection",
          name: "Snacks",
          hasMenuItem: snacks.map((s) => ({
            "@type": "MenuItem",
            name: s.name,
            offers: { "@type": "Offer", price: toPrice(s.price), priceCurrency: "USD" },
          })),
        },
      ],
    },
    acceptsReservations: false,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, static content generated from our own config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
