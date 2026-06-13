/**
 * ============================================================================
 *  EDITABLE CONTENT — reviews & gallery.
 *
 *  Reviews below are REAL customer reviews of Sip Sip Boba & Smoothies, pulled
 *  from the business's Yelp listing (Google Maps reviews are not machine-
 *  readable, so these stand in — edit freely or paste your Google favorites).
 *
 *  Gallery photos are REAL photos of the shop, downloaded from the listing
 *  into /public/gallery. Swap in newer finals anytime by replacing those files.
 * ============================================================================
 */

export type Review = {
  quote: string;
  author: string;
  source: "Google" | "Yelp" | "Facebook";
  stars: number;
};

// Real 5-star customer reviews (lightly tidied for punctuation). Source: Yelp.
export const reviews: Review[] = [
  {
    quote:
      "I love the strawberry banana milk tea! It tastes like a smoothie and is just the sweetest perfect little sweet treat.",
    author: "Eric H.",
    source: "Yelp",
    stars: 5,
  },
  {
    quote:
      "My biggest complaint when ordering boba elsewhere is how watery they are — with Sip Sip, I never have that issue.",
    author: "Bella S.",
    source: "Yelp",
    stars: 5,
  },
  {
    quote: "This place was sooo cute on the inside. I ordered a honeydew milk tea boba and I loved it!",
    author: "Mari F.",
    source: "Yelp",
    stars: 5,
  },
  {
    quote:
      "The aesthetic is super cute. My 13-year-old daughter was in awe — and she's not an easy critic, lol.",
    author: "Janelle W.",
    source: "Yelp",
    stars: 5,
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
};

/**
 * Gallery photos — real shots of Sip Sip Boba & Smoothies (in /public/gallery).
 * To update, just drop new images into that folder and point `src` at them,
 * or replace the existing files with the same names.
 */
export const gallery: GalleryImage[] = [
  {
    src: "/gallery/photo-3.jpg",
    alt: "Three iced milk tea lattes with boba in Sip Sip cups beside cherry blossoms at Sip Sip Boba & Smoothies in Dallas, GA",
  },
  {
    src: "/gallery/photo-1.jpg",
    alt: "Mango fruit tea, classic boba milk tea, and strawberry milk tea lined up with fresh flowers at Sip Sip Boba in Dallas, GA",
  },
  {
    src: "/gallery/photo-2.jpg",
    alt: "Layered strawberry matcha latte in a Sip Sip Boba & Smoothies branded cup",
  },
  {
    src: "/gallery/photo-5.jpg",
    alt: "Bright pastel seating area with a floral swing and cherry-blossom wall art inside Sip Sip Boba & Smoothies",
  },
  {
    src: "/gallery/photo-4.jpg",
    alt: "Iced coffee milk tea with brown sugar boba pearls in a Sip Sip branded cup",
  },
  {
    src: "/gallery/photo-6.jpg",
    alt: "Strawberry milk smoothie held beside a vase of colorful gerbera daisies in the Sip Sip Boba cafe",
  },
];
