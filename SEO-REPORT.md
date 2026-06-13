# SEO Readiness Report — Sip Sip Boba & Smoothies

**Audited:** 2026-06-13 · **Build:** Next.js 15.5.19 (App Router) · **Method:** production build (`next start`) with the rendered HTML, structured data, and SEO routes inspected directly.

## Verdict

**Technically launch-ready — 9.5 / 10.** Every core on-page and technical SEO element is implemented correctly and verified in the rendered output, now including individual `Review` markup and a SERP-length meta description. The only remaining blockers are **placeholder data values** (domain, review count, coordinates) that must be set to real values before go-live. None are code defects.

---

## ✅ What's working (verified in rendered HTML)

### Metadata (Next.js Metadata API)
| Element | Status | Value found |
|---|---|---|
| `<title>` | ✅ | "Sip Sip Boba & Smoothies \| Boba Tea & Smoothies in Dallas, GA" (~60 chars, ideal) |
| Meta description | ✅ | Present, keyword-rich (see note — slightly long) |
| Canonical | ✅ | `<link rel="canonical">` set |
| Title template | ✅ | `%s \| Sip Sip Boba & Smoothies` for future pages |
| `<html lang="en">` | ✅ | |
| Viewport | ✅ | `width=device-width, initial-scale=1` |
| Theme color | ✅ | `#9B6FD6` |
| Web manifest | ✅ | `/manifest.webmanifest` linked + serving |
| Favicon | ✅ | SVG icon linked |
| `keywords` meta | ✅ | Local terms included |

### Open Graph & Twitter (social sharing)
- ✅ `og:title`, `og:description`, `og:type=website`, `og:url`, `og:site_name`, `og:locale=en_US`
- ✅ `og:image` → **1200×630 PNG generated on the fly** (`/opengraph-image`, returns `200`, 250 KB), plus `og:image:width/height/alt`
- ✅ `twitter:card=summary_large_image`, `twitter:title/description/image`

### Structured data (JSON-LD) — **valid**
- ✅ `@type`: `Restaurant`, `CafeOrCoffeeShop`, `LocalBusiness`
- ✅ Name, full **PostalAddress**, **GeoCoordinates**, `telephone` (E.164 `+17709991152`)
- ✅ `priceRange`, `servesCuisine`, `image`, `logo`, `hasMap`, `menu`, `acceptsReservations`
- ✅ **AggregateRating** 4.9 (reviewCount 120 — *placeholder*)
- ✅ **7 OpeningHoursSpecification** entries (Mon–Sun 11:00–20:00)
- ✅ **4 `sameAs`** links (Google, Facebook, Instagram, Yelp)

### Crawl & indexing
- ✅ `robots` meta: `index, follow` + `googleBot` `max-image-preview:large`, `max-snippet:-1`
- ✅ `/robots.txt` — valid, allows all, declares `Host` + `Sitemap`
- ✅ `/sitemap.xml` — valid XML with `loc`, `lastmod`, `changefreq`, `priority`

### Content structure & accessibility
- ✅ **Exactly one `<h1>`** ("Your daily dose of boba bliss in Dallas.") — correct hierarchy with 5 × `<h2>` and 15 × `<h3>`
- ✅ **All 6 gallery images have descriptive, keyword-rich `alt`** (0 missing, 0 empty)
- ✅ Map `<iframe>` has a `title` attribute (a11y)
- ✅ Skip-to-content link, `prefers-reduced-motion` honored, semantic landmarks (`header`/`main`/`footer`/`nav`)

### Performance / Core Web Vitals
- ✅ **Statically prerendered** (all routes `○ Static`)
- ✅ **~114 kB First Load JS** — lean
- ✅ Images served through **`next/image`** with **responsive `srcset`**, `loading="lazy"`, `decoding="async"` (AVIF/WebP via the optimizer)
- ✅ Fonts via `next/font` with `display: swap` (no layout shift, self-hosted)
- ✅ LCP is text/SVG hero (no heavy LCP image to optimize)

---

## 🔴 Must fix before launch (placeholder data, not bugs)

All live in [`lib/business.ts`](lib/business.ts):

1. **Production domain** — `url` is the placeholder `https://sipsipboba.com`. This single value drives the **canonical, `og:url`, sitemap `loc`, robots `Host`/`Sitemap`, and JSON-LD `url`/`image`**. Set it to the real deployed domain. *(Highest priority — wrong canonical/OG URLs hurt indexing and sharing.)*
2. **Review count** — `rating.count: 120` is a placeholder. Set it to the real Google review count so the `aggregateRating` is truthful (inaccurate rich-result data can be penalized).
3. **Geo coordinates** — `geo` (33.9526, −84.7999) is approximate. Replace with the exact lat/lng from your Google Business Profile for map accuracy and local ranking.

---

## 🟡 Recommended enhancements

1. ✅ **`Review` items added to the JSON-LD** *(done 2026-06-13).* The 4 real reviews from `lib/content.ts` now emit as `Review` objects (author, `reviewRating`, `reviewBody`) alongside the `aggregateRating`, strengthening eligibility for review-star rich results. Verified valid in rendered output.
2. ✅ **Full menu structured data added** *(done 2026-06-13).* `hasMenu` → 7 `MenuSection`s → 61 `MenuItem`s with USD `Offer` prices, generated from `lib/menu.ts` (the real in-store menu). Verified valid in rendered output.
3. ✅ **Meta description trimmed** *(done 2026-06-13).* Now ~153 chars (was ~195) — no longer truncated in the SERP, keywords intact.
4. **Real photo OG image (optional).** The generated branded card is good; a real product photo sometimes lifts social CTR.
5. **PNG `apple-touch-icon`.** iOS home-screen icons prefer a 180×180 PNG over the current SVG. Minor.

---

## 📋 Post-deploy checklist

- [ ] Set the real domain in `lib/business.ts` and redeploy
- [ ] Verify the domain in **Google Search Console**; submit `/sitemap.xml`
- [ ] Run the [Rich Results Test](https://search.google.com/test/rich-results) on the live URL (expect "Local Business / Restaurant" detected)
- [ ] Validate share cards in the Facebook Sharing Debugger & X Card Validator
- [ ] Run **Lighthouse** on the live URL (expect 90+ across the board)
- [ ] Confirm the Google Business Profile is claimed and the website link points here (local-pack signal)

---

## Local keyword coverage

Targeted in title, description, headings, alt text & keywords meta:
`boba tea Dallas GA` · `bubble tea near me Acworth` · `smoothies Dallas Georgia` · `milk tea Dallas Georgia` · `taro milk tea Acworth` · `fruit tea Dallas GA`. Good on-page coverage for a single-page local site; a future `/menu` or short blog posts would widen long-tail reach.
