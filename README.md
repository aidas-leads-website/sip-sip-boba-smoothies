# Sip Sip Boba & Smoothies — Website

A vibrant, mobile-first marketing site for **Sip Sip Boba & Smoothies** in Dallas, GA.
Built with **Next.js (App Router) + Tailwind CSS + TypeScript**. Fast, accessible, SEO-ready.

---

## 🚀 Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

> **Windows note:** the folder name contains an `&`, which breaks npm's default
> script runner. The scripts in `package.json` already call Next via `node`
> directly so `npm run dev/build/start` work fine. If you ever hit a path error,
> the simplest fix is to **rename the folder to remove the `&`** (e.g.
> `SipSipBobaSmoothies`).

---

## ✏️ Editing content (no code needed)

Almost everything lives in three plain-data files:

| File | What you edit |
|------|---------------|
| [`lib/business.ts`](lib/business.ts) | Name, phone, address, hours, rating, **ordering & social links**, map. |
| [`lib/menu.ts`](lib/menu.ts) | Menu categories, drinks, descriptions, prices, toppings. |
| [`lib/content.ts`](lib/content.ts) | Review snippets and gallery photos. |

Change a value, save, and the site updates. Set any link to `""` to hide its button automatically.

### Rebranding the colors
All brand colors live in [`tailwind.config.ts`](tailwind.config.ts) under `theme.extend.colors`
(`taro`, `matcha`, `peach`, `cream`, `berry`). Edit the hex values to recolor the whole site.

---

## 🔗 Ordering & social links (status)

Wired up and verified live:

- ✅ **DoorDash** — `https://www.doordash.com/store/sip-sip-boba-smoothies-dallas-44130377/`
- ✅ **Uber Eats** — store URL is set (note: was showing as temporarily closed on Uber Eats during research — confirm it's active)
- ✅ **Facebook**, **Instagram**, **Yelp**, **Google Business** — all set

Placeholders you may want to fill in `lib/business.ts`:

- ⚠️ **Grubhub** — left empty (`""`); no listing found. Add a URL if you create one and the button appears automatically.
- ⚠️ **`geo.latitude` / `geo.longitude`** — approximate. Replace with the exact coordinates from your Google Business listing for best map/SEO accuracy.
- ⚠️ **`rating.count`** — set to your real Google review count.
- ⚠️ **`url`** — change `https://sipsipboba.com` to your real domain before deploying (used for canonical URLs, sitemap & Open Graph).

---

## 🖼️ Gallery photos & reviews

**Photos** — the gallery uses **real photos of the shop** (your branded panda cups
and pastel interior), saved in [`public/gallery/`](public/gallery/) as `photo-1.jpg … photo-6.jpg`.
To update: replace those files (keep the names) or drop new images in and point `src`
at them in [`lib/content.ts`](lib/content.ts). Keep the `alt` text descriptive — it
helps accessibility and local SEO.

**Reviews** — the snippets in [`lib/content.ts`](lib/content.ts) are **real 5-star
customer reviews** from your Yelp listing. (Google Maps reviews are rendered by
JavaScript and can't be pulled programmatically, so these stand in.) Want the exact
text from a specific Google review? Just copy/paste it over a quote in `lib/content.ts`
and set `source: "Google"`.

---

## 📈 SEO built in

- **Metadata API** — per-page title, description, Open Graph & Twitter cards ([`app/layout.tsx`](app/layout.tsx)).
- **Structured data** — `Restaurant` / `LocalBusiness` JSON-LD with address, geo, phone,
  hours, aggregate rating, price range & `sameAs` social links ([`components/JsonLd.tsx`](components/JsonLd.tsx)).
- **`sitemap.xml`** and **`robots.txt`** generated automatically ([`app/sitemap.ts`](app/sitemap.ts), [`app/robots.ts`](app/robots.ts)).
- **Auto social image** — `/opengraph-image` is generated at build time ([`app/opengraph-image.tsx`](app/opengraph-image.tsx)).
- **Semantic HTML**, descriptive alt text, `next/image`, system + Google fonts with `display: swap`.
- Targets local keywords: *boba tea Dallas GA*, *bubble tea near me Acworth*, *smoothies Dallas Georgia*.

After deploying, submit your sitemap (`/sitemap.xml`) in **Google Search Console** and verify
your structured data with the [Rich Results Test](https://search.google.com/test/rich-results).

---

## 🗂️ Project structure

```
app/
  layout.tsx          Root layout, fonts, global metadata, JSON-LD
  page.tsx            Homepage (assembles all sections)
  globals.css         Tailwind layers, animations, helpers
  opengraph-image.tsx Auto-generated social share image
  sitemap.ts robots.ts manifest.ts
components/
  Header.tsx Footer.tsx OrderNow.tsx Reveal.tsx SectionHeading.tsx
  icons.tsx JsonLd.tsx
  sections/           Hero, Menu, About, Gallery, Reviews, Location, ContactCta
lib/
  business.ts menu.ts content.ts   ← edit these
public/
  favicon.svg
```

---

## ☁️ Deploy to Vercel

This is a standard Next.js App Router app — Vercel deploys it **zero-config** (no
`vercel.json` needed; the framework, build command, and output are auto-detected).

### Option A — Git + Vercel dashboard (recommended)
1. Push this folder to a GitHub/GitLab/Bitbucket repo (an initial commit is already made — just add a remote and push).
2. In [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Add an **Environment Variable**: `NEXT_PUBLIC_SITE_URL` = your domain
   (e.g. `https://sipsipboba.com`, or your `*.vercel.app` URL until a custom domain is attached).
4. Click **Deploy**. Every push to `main` redeploys automatically.

### Option B — Vercel CLI (no Git host needed)
```bash
npm i -g vercel
vercel            # first run links/creates the project (preview)
vercel --prod     # production deploy
```
Set `NEXT_PUBLIC_SITE_URL` with `vercel env add NEXT_PUBLIC_SITE_URL` (or in the dashboard).

### Why the env var?
`NEXT_PUBLIC_SITE_URL` drives your canonical links, `sitemap.xml`, `robots.txt`, and
Open Graph image URLs. Set it once in Vercel and those all point at the right domain —
no code edits. Locally it defaults to the value in [`lib/business.ts`](lib/business.ts).

### Final pre-launch checklist
1. Set `NEXT_PUBLIC_SITE_URL` in Vercel to your real domain.
2. Confirm `geo` coordinates in [`lib/business.ts`](lib/business.ts) (exact lat/lng from Google Business).
3. Swap in any final gallery photos.
4. After deploy: submit `/sitemap.xml` in Google Search Console & run the [Rich Results Test](https://search.google.com/test/rich-results).

### Note on the folder name (`&`)
Vercel builds on Linux from your repo's clean path, so the `&` in this local folder
name is **not** an issue there. The `package.json` scripts invoke Next via `node …/next`
so `npm run build` also works locally on Windows despite the `&`. (See the Windows note
near the top.)
