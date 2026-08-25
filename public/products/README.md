# Product images

The storefront renders a **vector drawing** of each device by default. Drop a real
photo here and it takes over — no component changes needed.

## Adding real photos

1. Put the raw file in `public/products/raw/`, named after the product handle:

   ```
   public/products/raw/range-percussion-gun.jpg
   ```

   Handles are the `handle` field in `src/data/products.js`:
   `range-percussion-gun`, `field-red-light-panel`, `veil-led-face-mask`,
   `tide-compression-boots`, `ember-sauna-blanket`, `still-cold-plunge`,
   `grid-acupressure-mat`, `collar-neck-massager`.

2. Run the prep script — it resizes to 1200×960 and converts to WebP:

   ```
   npm run images
   ```

3. Paste the printed `image:` lines into the matching products.

Products can be mixed freely: photographed ones use the photo, the rest keep
their drawing. There is no half-migrated state to manage.

## Using supplier images from Alibaba — read this first

Supplier listing photos are **not automatically yours to use.**

- **Ask for rights explicitly.** Most suppliers grant them to actual buyers
  without hesitation. Request the image pack in writing during MOQ negotiation
  and keep the reply in the message thread — that thread is your evidence.
- **Check where the photo came from.** A large share of Alibaba listing images
  were lifted from Therabody, Hyperice, RENPHO and similar brands. Those are not
  the supplier's to license, and reusing them invites a DMCA takedown against
  your store. Reverse-image-search anything that looks too polished.
- **Reject watermarks and low resolution.** Google Shopping and Meta both reject
  watermarked imagery and anything under 1000px, so poor supplier photos will
  close your paid channels regardless of the legal question.
- **Shoot your own as soon as samples land.** It is the only way to get imagery
  that is unambiguously licensed, matches what actually ships, and looks
  different from every competitor selling the same white-label unit. This is
  usually the single highest-leverage upgrade available to a store like this.

Until then the vector renderings are safe: they are original artwork, carry no
licensing risk, and will not appear on a competitor's page.
