# Vibe — portfolio + KILTER storefront

Two independent sites in one Astro project. They share a build and nothing else.

- **`/`** — Jaron Hill's design portfolio. Dark, GSAP-animated, neon-green accent.
- **`/shop`** — KILTER, a personal recovery-tech storefront. Dark, ember accent.

Keep them separate. The portfolio predates the storefront and must not regress
when the shop changes.

## Commands

```
npm install
npm run dev              # localhost:4321
npm run build            # static output to dist/
npm run images           # process supplier photos (see below)
npm run preview:bundle   # stitch the built shop into one shareable HTML file
```

Node 20+. Netlify pins 20; developed against 22.

## Layout

```
src/data/brand.js          KILTER identity — rename the store by editing this alone
src/data/products.js       all 8 product listings + internal sourcing data
src/styles/global.css      portfolio tokens
src/styles/shop.css        storefront tokens, scoped to .shop
src/components/shop/       storefront components
src/pages/shop/            /shop and /shop/[handle]
docs/                      sourcing brief, supplier searches, checkout setup
scripts/                   image prep, preview bundler
```

## Things that will bite you

**`global.css` sets `cursor: none`** for the portfolio's custom cursor. Anything
outside the portfolio must restore it or the page renders with no pointer.
`shop.css` already does this — don't remove it.

**`[hidden]` needs `display: none !important`** in shop.css, because `.k-card`
sets `display: flex` and would otherwise override the attribute. The category
filter depends on this.

**`netlify.toml` has a catch-all `/*` → `/index.html` 200 redirect.** Left over
from when this was a single-page portfolio. Real files still win, so `/shop`
routes resolve — but every genuine 404 serves the portfolio homepage with a 200
status. Should be removed and replaced with a real `404.astro`. Not yet done.

**`p.sourcing` in products.js is internal** — unit cost, MOQ, margin. It must
never render on a public page. There is a leak check: after building, grep
`dist/` for `unitCost` and expect zero hits.

## Product data

Each product carries merchandising copy, features, specs, SEO metadata, alt
text, plus two optional fields:

- `image` — path under `/public` (e.g. `/products/range.webp`). Null falls back
  to a hand-drawn SVG rendering of the device in `ProductImage.astro`.
- `checkoutUrl` — a Stripe Payment Link. Null renders a disabled stub button;
  set it and the buy button becomes a real checkout.

Both default to null, so products can go live one at a time.

## Current state — read before continuing

The site builds and works. It is **not** ready to take money.

1. **Every spec is invented.** Amplitude, irradiance, decibels, mmHg — all
   plausible targets written to make the listings read as real merchandising.
   No product exists behind them. They must be replaced with real supplier
   specs before launch or the store is advertising falsely. This is the single
   biggest blocker.
2. **Unit costs are estimates** from published market research, not quotes.
   See `docs/kilter-sourcing-brief.md`.
3. **No checkout.** All 8 `checkoutUrl` are null. See
   `docs/kilter-checkout-setup.md` — Stripe Payment Links, $0/month.
4. **No images.** All 8 render as SVG drawings. Real photos drop into
   `public/products/raw/` and run through `npm run images`.
5. **No legal pages.** The site promises a 30-night trial, 2-year warranty and
   free US shipping with nothing behind them. Stripe requires refund and privacy
   policies to activate.
6. **Site gaps:** no 404 page, footer links all point at a non-existent
   `#support`, the newsletter form silently discards emails, social links are
   placeholders, `hello@kilter.co` does not exist.
7. **Not deployed.** No linked Netlify site, no domain.

## Why it was built in the cloud with drawings instead of photos

Claude Code on the web runs behind an egress allowlist. Alibaba,
Made-in-China, Global Sources, AliExpress, DHgate, every stock-photo host, and
`api.stripe.com` are all blocked — 403 at the CONNECT stage. Git and npm are
open. So no supplier could be read, no photo downloaded, and no Stripe link
created from that environment.

Running locally removes that wall. See `docs/kilter-local-setup.md`.
