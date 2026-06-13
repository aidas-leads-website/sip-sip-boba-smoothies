/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH — edit your business info, links, hours & menu here.
 *  Almost everything visible on the site reads from this file, so you can
 *  rebrand and update content without touching component code.
 * ============================================================================
 */

// Production URL — drives canonical links, sitemap, robots & Open Graph.
// On Vercel, set the `NEXT_PUBLIC_SITE_URL` env var to your real domain
// (e.g. https://sipsipboba.com); it falls back to the value below for local dev.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sipsipboba.com").replace(/\/+$/, "");

export const business = {
  name: "Sip Sip Boba & Smoothies",
  shortName: "Sip Sip Boba",
  tagline: "Hand-crafted boba, smoothies & specialty drinks in Dallas, GA.",
  // Kept to ~155 chars so it isn't truncated in Google results.
  description:
    "Vibrant boba tea shop in Dallas, GA — fresh milk teas, fruit teas, real-fruit smoothies & specialty drinks, made to order. Rated 4.9 stars. Order online!",

  url: SITE_URL,

  phone: {
    display: "(770) 999-1152",
    href: "+17709991152",
  },

  address: {
    street: "10172 Dallas Acworth Hwy, Suite 103",
    city: "Dallas",
    region: "GA",
    regionName: "Georgia",
    postalCode: "30132",
    country: "US",
    full: "10172 Dallas Acworth Hwy, Suite 103, Dallas, GA 30132",
  },

  // NOTE: approximate coordinates for the JSON-LD geo + map fallback.
  // Verify/replace with the exact lat/lng from your Google Business listing.
  geo: {
    latitude: 33.9526,
    longitude: -84.7999,
  },

  rating: {
    value: 4.9,
    count: 114, // Real Google review count
    scale: 5,
  },

  priceRange: "$",

  // Open 7 days, 11:00 AM – 8:00 PM. Edit per-day below if hours differ.
  hours: [
    { day: "Monday", open: "11:00", close: "20:00" },
    { day: "Tuesday", open: "11:00", close: "20:00" },
    { day: "Wednesday", open: "11:00", close: "20:00" },
    { day: "Thursday", open: "11:00", close: "20:00" },
    { day: "Friday", open: "11:00", close: "20:00" },
    { day: "Saturday", open: "11:00", close: "20:00" },
    { day: "Sunday", open: "11:00", close: "20:00" },
  ],

  // ---- Ordering & social links --------------------------------------------
  // Set any value to "" to hide that button automatically.
  links: {
    // Verified live ordering links:
    doordash: "https://www.doordash.com/store/sip-sip-boba-smoothies-dallas-44130377/",
    ubereats: "https://www.ubereats.com/store/sipsip-boba-&-smoothies/YbeP_bxhQcSk2tm_DvpVtw",
    // PLACEHOLDER — no Grubhub listing was found. Add the URL if you create one.
    grubhub: "",

    // Social / business profiles:
    facebook: "https://www.facebook.com/share/18iGmcPDk7/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/sipsipbobasmoothies/",
    yelp: "https://www.yelp.com/biz/sip-sip-boba-and-smoothies-dallas",
    google: "https://www.google.com/maps?cid=11722993035128717295",
  },

  // Directions deep-link (opens Google Maps with the destination pre-filled).
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Sip+Sip+Boba+%26+Smoothies+10172+Dallas+Acworth+Hwy+Suite+103+Dallas+GA+30132",

  // Embedded map (place-query embed — no API key required).
  mapEmbedUrl:
    "https://www.google.com/maps?q=Sip+Sip+Boba+%26+Smoothies+10172+Dallas+Acworth+Hwy+Suite+103+Dallas+GA+30132&output=embed",
} as const;

export type Business = typeof business;
