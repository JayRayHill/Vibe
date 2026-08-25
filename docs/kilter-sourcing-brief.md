# KILTER — sourcing brief

Internal. None of this renders on the storefront; the `sourcing` block in
`src/data/products.js` exists for buying decisions only, and the product page
template asserts it is never printed.

## Where the numbers came from — and what to distrust

Alibaba, Made-in-China, Global Sources, AliExpress and DHgate are **all blocked
by the network egress proxy** in the environment this was built in. No listing
below was priced against a live supplier quote.

Unit costs are derived from published 2026 market research on this category:
massage guns source at **$25–45** and retail at **$70–120** for a 55–65% margin;
red light face masks source at **$18–25** against a **$59–89** retail. Everything
else is interpolated from those anchors by build complexity.

**Treat every `unitCost` and `moq` as a hypothesis.** Get three real quotes per
product before committing. The prices are plausible, not verified — and margin
is the one number where being approximately right is worth nothing.

## The range

| Product | Retail | Est. unit cost | Est. MOQ | Margin | Category |
|---|---|---|---|---|---|
| Range — Percussion Therapy Gun | $149 | $38 | 100 | 74% | Percussion |
| Field — Red Light Therapy Panel | $399 | $145 | 50 | 64% | Light |
| Veil — LED Face Mask | $89 | $24 | 200 | 73% | Light |
| Tide — Compression Recovery Boots | $449 | $165 | 30 | 63% | Compression |
| Ember — Infrared Sauna Blanket | $299 | $95 | 50 | 68% | Heat |
| Still — Cold Plunge Tub | $229 | $78 | 50 | 66% | Cold |
| Grid — Acupressure Mat & Pillow | $59 | $12 | 300 | 80% | Passive |
| Collar — Heated Neck & Shoulder Massager | $99 | $28 | 150 | 72% | Percussion |

Blended margin across the range: **~70%**. Price ladder runs $59 → $449, so
there is an entry point under $60 and a genuine anchor product at the top.

## Why this category

- Red light therapy is growing at a **9.8% CAGR through 2033**, and is the
  fastest-moving niche in the wellness device segment.
- The massage gun market runs **$491.6M (2025) → $529.4M (2026)**, an 8.2% CAGR
  to $921.4M by 2033. Mature, not saturated.
- Health and wellness supports **40–60% margins** against a $6.3T market, with
  the highest premium-price tolerance of the categories considered.

Compression was included despite thinner margin because it is the most
evidence-backed modality in the range and the highest-ticket item — it does the
work on average order value.

## Before you place a first order

1. **Get three quotes per product.** Ask each supplier for the same spec sheet
   so the quotes are actually comparable.
2. **Order samples before volume. Every time.** Especially the panel — irradiance
   is the one claim on the storefront that is falsifiable, and the listing
   commits to publishing a distance curve. Do not ship that claim untested.
3. **Price the freight before the unit.** Still (the tub) ships bulky and light,
   so dimensional weight will drive its landed cost more than the unit price.
4. **Model the duty.** A 20% import duty on a $3.80 landed unit adds $0.76 —
   about $380 of gross profit across a 500-unit MOQ. At Tide's $165 unit cost
   the effect is far larger. Landed cost, not quoted cost, sets the margin.
5. **Small batches carry a 20–40% premium** over bulk, and OEM/custom-branded
   runs add another 20–35%. Budget for it: the first order will not hit the
   margins in the table above.
6. **Start with Tide.** Lowest MOQ (≈30) and highest ticket, so it tests demand
   at the smallest capital exposure. Grid is the natural second — lowest unit
   cost, best margin, and the obvious bundle attachment.

## Sequencing

- **Phase 1** — Tide and Grid. Roughly $8,600 at the estimated costs, and it
  covers both ends of the price ladder.
- **Phase 2** — Range and Collar. Both percussion, so they can often be sourced
  from one supplier and consolidated into a single shipment.
- **Phase 3** — Field, Veil, Ember, Still. The capital-heavy tail, funded from
  phase 1–2 revenue rather than up front.

## Sources

- [Alibaba trending products 2026](https://www.accio.com/business/alibaba_trending_products)
- [Best Alibaba products for dropshipping 2026](https://dodropshipping.com/best-alibaba-products-for-dropshipping/)
- [Red light therapy market report 2026–2033](https://www.grandviewresearch.com/industry-analysis/red-light-therapy-market-report)
- [Massage gun market trends 2026](https://express-press-release.net/news/2026/08/24/1768992)
- [Most profitable Shopify niches 2026](https://easyappsecom.com/guides/top-shopify-niches-2026)
- [MOQ negotiation guide](https://en.blog.refundy.co/alibaba-moq-negotiation)
