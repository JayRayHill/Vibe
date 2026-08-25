# Connecting checkout — the free option

**Stripe Payment Links. $0/month.** You pay 2.9% + 30¢ per sale and nothing else —
no subscription, no per-product fee, no platform cut. For a personal project with
eight products, nothing else comes close.

## Why this over the alternatives

| Option | Monthly | Per sale | Needs a server? |
|---|---|---|---|
| **Stripe Payment Links** | **$0** | 2.9% + 30¢ | No |
| Shopify Starter | $5 | 2.9% + 30¢ | No |
| Snipcart | $10 floor once live | 2% + Stripe's fee | No |
| Stripe Checkout (API) | $0 | 2.9% + 30¢ | Yes |

Payment Links win because they are the only genuinely free option that also needs
no backend. Stripe hosts the checkout page; your site just links to it. That suits
a static Astro build on Netlify exactly — there is no server to write, deploy, or
keep alive.

## Setup

1. Create a Stripe account and finish activation (bank details and ID — Stripe
   will not release funds otherwise).
2. Go to **dashboard.stripe.com/payment-links** → **New link** → **Product**.
3. For each product, enter the name and price from `src/data/products.js`.
4. Under **Options**, turn on **Collect shipping address** and add a shipping rate.
   The storefront promises free US shipping, so add a $0 rate limited to the US.
5. Copy the resulting `https://buy.stripe.com/...` URL.
6. Paste it into that product's `checkoutUrl` in `src/data/products.js`.

The buy button switches from a disabled stub to a real checkout link the moment
`checkoutUrl` is set. Products without one keep the stub, so you can go live one
product at a time.

## Turn on Stripe Tax

US sales tax has economic nexus rules in 45+ states, and it is the single worst
thing to hand-roll. Stripe Tax registers, calculates and files for you at **0.5%
per transaction** — a rounding error against the cost of getting it wrong. Enable
it in the dashboard before your first real sale.

## What this setup does not do

Payment Links are one product per checkout. There is no multi-item cart, so a
customer buying two things checks out twice.

That is a real limitation and worth being honest about — but at eight products and
an unproven demand signal, it is the right trade. It costs nothing, it works today,
and it tells you whether anyone actually buys. Move to Shopify Starter ($5/mo) or
Snipcart when multi-item orders start costing you real money — not before.

## Before going live

- [ ] Stripe account activated, bank account connected
- [ ] Stripe Tax enabled
- [ ] Shipping rate set on every link, US-only
- [ ] Refund policy written — the site promises a 30-night trial, so honour it
- [ ] Test each link in Stripe test mode
- [ ] Confirm every price matches `products.js` (the site and Stripe do not sync)
