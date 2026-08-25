# KILTER — supplier search shortlist

## Read this before you click anything

**These are pre-built searches, not vetted product listings.**

Alibaba, Made-in-China, Global Sources, AliExpress and DHgate are all blocked by
the network egress proxy in the environment this was built in — every request
returns 403 at the CONNECT stage. That means no listing was opened, no supplier
was checked, and no price was read.

So this file deliberately contains **zero product links**. A specific product URL
that nobody verified is worse than no URL: it either 404s or lands you on an
unrelated item you might order from. What follows instead is the search query
for each product plus the spec checklist to hold suppliers against — which is
the part that actually protects you.

The search URLs use Alibaba's standard `trade/search?SearchText=` pattern. They
were constructed, not visited.

---

## Range — Percussion Therapy Gun

**Target unit cost:** $38 (estimated — see the sourcing brief)

**Search term:** `brushless percussion massage gun 12mm amplitude`

[Run this search on Alibaba](https://www.alibaba.com/trade/search?SearchText=brushless+percussion+massage+gun+12mm+amplitude)

**Confirm before you quote:**

- 12mm amplitude (NOT 8mm — most listings at this price are 8mm and will say so only in the spec table)
- Brushless motor, stated explicitly
- Measured noise figure in dB, at max speed
- Battery mAh and real runtime
- Pressure/force sensor — the on-screen readout the listing promises

## Field — Red Light Therapy Panel

**Target unit cost:** $145 (estimated — see the sourcing brief)

**Search term:** `660nm 850nm red light therapy panel 300 LED`

[Run this search on Alibaba](https://www.alibaba.com/trade/search?SearchText=660nm+850nm+red+light+therapy+panel+300+LED)

**Confirm before you quote:**

- Irradiance in mW/cm2 AT A STATED DISTANCE — this is the claim the storefront publishes; do not accept a bare number with no distance
- Third-party irradiance test report (ask for the PDF)
- LED split between 660nm and 850nm
- Panel dimensions and total wattage
- Whether panels daisy-chain, and the controller limit

## Veil — LED Face Mask

**Target unit cost:** $24 (estimated — see the sourcing brief)

**Search term:** `silicone LED light therapy face mask 7 color wireless`

[Run this search on Alibaba](https://www.alibaba.com/trade/search?SearchText=silicone+LED+light+therapy+face+mask+7+color+wireless)

**Confirm before you quote:**

- Medical-grade silicone, not rigid ABS
- 633nm and 830nm present (many 7-colour units are cosmetic only, no NIR)
- LED count
- Battery-powered controller, not wall-tethered
- Auto shut-off timer

## Tide — Compression Recovery Boots

**Target unit cost:** $165 (estimated — see the sourcing brief)

**Search term:** `4 chamber air compression recovery boots leg massager`

[Run this search on Alibaba](https://www.alibaba.com/trade/search?SearchText=4+chamber+air+compression+recovery+boots+leg+massager)

**Confirm before you quote:**

- 4 overlapping chambers per leg, sequential
- Pressure range in mmHg (target 30-240)
- Pump rated for CONTINUOUS duty, not intermittent
- Full-length zip
- Size range / max user height
- Pump noise in dB

## Ember — Infrared Sauna Blanket

**Target unit cost:** $95 (estimated — see the sourcing brief)

**Search term:** `far infrared sauna blanket low EMF tourmaline waterproof`

[Run this search on Alibaba](https://www.alibaba.com/trade/search?SearchText=far+infrared+sauna+blanket+low+EMF+tourmaline+waterproof)

**Confirm before you quote:**

- Inner layer material — non-toxic TPU or charcoal fibre, NOT bare PU (PU cracks inside a year)
- Number of independent heating zones
- Max temperature and preheat time
- EMF measurement at contact distance, with the report
- Auto shut-off

## Still — Cold Plunge Tub

**Target unit cost:** $78 (estimated — see the sourcing brief)

**Search term:** `insulated cold plunge tub ice bath triple layer steel frame`

[Run this search on Alibaba](https://www.alibaba.com/trade/search?SearchText=insulated+cold+plunge+tub+ice+bath+triple+layer+steel+frame)

**Confirm before you quote:**

- Triple-layer insulated wall — single-wall tubs lose an ice load in about an hour
- Temperature hold over 12h at stated ambient
- Capacity in gallons/litres and internal depth
- Steel frame included, powder-coated
- Drain valve type
- PACKED CARTON DIMENSIONS — freight on this is dimensional, and will drive landed cost more than the unit price

## Grid — Acupressure Mat & Pillow

**Target unit cost:** $12 (estimated — see the sourcing brief)

**Search term:** `acupressure mat and pillow set linen coconut fiber`

[Run this search on Alibaba](https://www.alibaba.com/trade/search?SearchText=acupressure+mat+and+pillow+set+linen+coconut+fiber)

**Confirm before you quote:**

- Linen cover, not cotton (cotton flattens)
- Coconut fibre fill
- Disc and point count
- Mat and pillow dimensions
- Whether the cover is removable and washable

## Collar — Heated Neck & Shoulder Massager

**Target unit cost:** $28 (estimated — see the sourcing brief)

**Search term:** `cordless heated neck shoulder massager 8 node kneading`

[Run this search on Alibaba](https://www.alibaba.com/trade/search?SearchText=cordless+heated+neck+shoulder+massager+8+node+kneading)

**Confirm before you quote:**

- 8 nodes, bidirectional rotation
- Heat temperature in degrees C
- Battery mAh and runtime
- Adjustable arm loops that add pressure
- Auto shut-off timer

---

## Message template for suppliers

Send this to at least three suppliers per product. Identical wording makes the
quotes comparable, which is the whole point.

```
Hello,

I am sourcing [PRODUCT] for a US direct-to-consumer brand. Before quoting,
please confirm:

1. Unit price at 50, 100 and 300 units, and your true MOQ
2. The spec points listed below, individually — not a link to the listing
3. Any third-party test reports you hold (safety, EMF, irradiance)
4. Sample cost and lead time
5. Production lead time at MOQ
6. Packed carton dimensions and gross weight per unit
7. Whether I may use your product photography on my own store, in writing

Specs to confirm:
[PASTE THE CHECKLIST]

Thank you.
```

Point 7 matters more than it looks. It is the cheapest way to settle the image
licensing question, and a supplier who will not put it in writing is telling you
the photos were not theirs to begin with.

## Red flags

- **A price far under the range in the sourcing brief.** It is a different, worse
  product, or the MOQ is unstated.
- **Specs that only appear in the images, never in text.** Images get copied
  between listings; text is what a supplier will actually stand behind.
- **No test report for the panel or the sauna blanket.** Irradiance and EMF are
  the two claims on the storefront that a customer could disprove.
- **Photography that looks like a real brand's.** It probably is. Reverse-image
  search before you build a listing on it.
- **Refusal to sell samples.** Ends the conversation.

## Order of operations

1. Three quotes per product, same questions.
2. Samples from the best two on Tide and Grid only — the phase 1 pair.
3. Photograph the samples yourself. That replaces both the drawings on the site
   and the image-licensing problem in one step.
4. Then place the first real order.
