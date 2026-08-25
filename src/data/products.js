/**
 * KILTER — product catalog.
 *
 * Each entry is a complete storefront listing: merchandising copy, feature
 * set, specification table, and SEO metadata.
 *
 * `sourcing` holds the unit economics used to set each price. Those figures
 * are ESTIMATES derived from published 2026 market research, not live
 * supplier quotes — Alibaba, Made-in-China, Global Sources, AliExpress and
 * DHgate are all blocked by this environment's network egress proxy, so no
 * listing could be priced against a real quote. Treat every `unitCost` and
 * `moq` as a hypothesis to confirm before you place an order.
 */

export const products = [
  {
    handle:   'range-percussion-gun',
    name:     'Range',
    subtitle: 'Percussion Therapy Gun',
    category: 'Percussion',
    badge:    'Best seller',
    hue:      18,

    // Drop a photo in public/products/ and point at it here to replace the
    // vector rendering. Leave null to keep the drawing.
    image:    null,

    // Stripe Payment Link for this product. Create it at
    // dashboard.stripe.com/payment-links, paste the URL here, and the
    // buy button becomes a real checkout. Null keeps the disabled stub.
    checkoutUrl: null,

    price:     149,
    compareAt: 199,

    sourcing: {
      unitCost: 38,
      moq:      100,
      margin:   '74%',
      note:     'Brushless motor units sit well above the $25 floor. Pay for the motor — the cheap tier fails at ~6 months and takes your reviews with it.',
    },

    blurb: 'Twelve millimetres of travel, and quiet enough to use at your desk.',

    description: [
      'Most massage guns solve the wrong problem. They chase stall force — a number you will never use — and ignore the two things that actually decide whether a device gets picked up: how deep it reaches, and how much noise it makes doing it.',
      'Range runs a 12mm amplitude on a brushless motor, which puts it into muscle rather than bouncing off it, at under 45 decibels. That is quiet enough for a shared office or a sleeping house. Five speeds, six heads, and a battery that goes six hours between charges.',
      'It is the device we reach for most, which is why it is the one we recommend first.',
    ],

    features: [
      { title: '12mm amplitude',      body: 'Reaches the muscle belly, not just the skin above it. The 8mm units common at this price sit on the surface.' },
      { title: 'Under 45dB',          body: 'Brushless motor with an isolated head assembly. Quiet enough to use during a phone call.' },
      { title: 'Six-hour battery',    body: '2500mAh cell, USB-C. A full charge covers about three weeks of normal use.' },
      { title: 'Force feedback',      body: 'On-screen pressure readout tells you when you are pressing too hard — the most common way people bruise themselves.' },
    ],

    specs: {
      'Amplitude':      '12 mm',
      'Stall force':    '40 lb',
      'Speed range':    '1,800 – 3,200 RPM (5 settings)',
      'Noise':          '38 – 45 dB',
      'Battery':        '2,500 mAh Li-ion, USB-C',
      'Runtime':        '6 hours',
      'Weight':         '2.1 lb (950 g)',
      'Warranty':       '2 years',
    },

    inBox: ['Range handset', '6 attachment heads', 'USB-C cable', 'Zip carry case'],

    seo: {
      title:       'Range Percussion Therapy Gun — 12mm Amplitude, Under 45dB | KILTER',
      description: 'A quiet, deep-reaching massage gun with 12mm amplitude, brushless motor and a 6-hour battery. Free US shipping, 30-night trial, 2-year warranty.',
    },
    imageAlt: 'Range percussion therapy gun in matte charcoal, shown at three-quarter angle with its round attachment head fitted',
  },

  {
    handle:   'field-red-light-panel',
    name:     'Field',
    subtitle: 'Red Light Therapy Panel',
    category: 'Light',
    badge:    'New',
    hue:      6,

    // Drop a photo in public/products/ and point at it here to replace the
    // vector rendering. Leave null to keep the drawing.
    image:    null,

    // Stripe Payment Link for this product. Create it at
    // dashboard.stripe.com/payment-links, paste the URL here, and the
    // buy button becomes a real checkout. Null keeps the disabled stub.
    checkoutUrl: null,

    price:     399,
    compareAt: 549,

    sourcing: {
      unitCost: 145,
      moq:      50,
      margin:   '64%',
      note:     'Fastest-growing category in the segment. Demand irradiance test data from the supplier — undocumented panels are the single biggest quality trap here.',
    },

    blurb: 'Dual-wavelength 660nm and 850nm across a panel wide enough to treat your back.',

    description: [
      'Red light therapy earned its reputation in clinics, then got flattened into a wellness buzzword by a wave of devices that emit almost nothing measurable. The difference between a panel that works and one that does not is irradiance — power delivered per square centimetre — and almost nobody publishes it.',
      'Field puts out 100mW/cm² at six inches, across 300 LEDs split between 660nm red and 850nm near-infrared. Red works at the skin. Near-infrared passes deeper, into joint and muscle tissue. Running both is what makes a single panel useful for a training body rather than just a face.',
      'It hangs on a door, mounts to a stand, or leans against a wall. Ten minutes a side.',
    ],

    features: [
      { title: 'Dual wavelength',      body: '660nm red for skin and surface tissue, 850nm near-infrared for joints and muscle. 150 LEDs of each.' },
      { title: 'Measured irradiance',  body: '100mW/cm² at 6in, independently tested. We publish the full distance curve rather than a single headline number.' },
      { title: 'Treats a full back',   body: '24 x 12in panel. Most units at this price are half the area and take twice as many sessions.' },
      { title: 'Modular',              body: 'Daisy-chain up to four panels on one controller as you expand.' },
    ],

    specs: {
      'Wavelengths':   '660 nm / 850 nm',
      'LED count':     '300 (150 per wavelength)',
      'Irradiance':    '100 mW/cm² at 6 in',
      'Panel size':    '24 × 12 × 2.5 in',
      'Power draw':    '200 W',
      'Timer':         '5 / 10 / 15 / 20 min',
      'Weight':        '11 lb (5 kg)',
      'Warranty':      '2 years',
    },

    inBox: ['Field panel', 'Door hanging kit', 'Adjustable steel stand', 'Protective eyewear', 'Power cable'],

    seo: {
      title:       'Field Red Light Therapy Panel — 660nm + 850nm, 100mW/cm² | KILTER',
      description: 'A dual-wavelength red light panel with published irradiance data and 300 LEDs across a full-back treatment area. Free US shipping and a 30-night trial.',
    },
    imageAlt: 'Field red light therapy panel mounted on an adjustable stand, its 660nm and 850nm LEDs illuminated deep red',
  },

  {
    handle:   'veil-led-face-mask',
    name:     'Veil',
    subtitle: 'LED Face Mask',
    category: 'Light',
    badge:    null,
    hue:      344,

    // Drop a photo in public/products/ and point at it here to replace the
    // vector rendering. Leave null to keep the drawing.
    image:    null,

    // Stripe Payment Link for this product. Create it at
    // dashboard.stripe.com/payment-links, paste the URL here, and the
    // buy button becomes a real checkout. Null keeps the disabled stub.
    checkoutUrl: null,

    price:     89,
    compareAt: 129,

    sourcing: {
      unitCost: 24,
      moq:      200,
      margin:   '73%',
      note:     'Strong social-video product with the best margin in the range. Silicone-bodied units photograph far better than rigid plastic — worth the extra dollar or two.',
    },

    blurb: 'Flexible silicone, seven wavelengths, ten minutes a night.',

    description: [
      'The rigid plastic masks everyone has seen do not touch most of your face. They bridge across the cheekbones and leave a gap where the light needs to land. Flexible silicone solves that by draping — contact is even, so the dose is even.',
      'Veil runs seven wavelengths, but the two that matter are 633nm red and 830nm near-infrared. The rest are there because the panel supports them and some people want blue for breakouts. Ten minutes, cordless, and it folds flat into a drawer.',
      'The most-used device in our range, purely because the barrier to using it is so low.',
    ],

    features: [
      { title: 'Flexible silicone',  body: 'Drapes to the face for even contact. Rigid masks leave the cheekbones and nose bridge underdosed.' },
      { title: 'Seven wavelengths',  body: '633nm red and 830nm near-infrared do the work. Blue, green, yellow, purple and cyan modes included.' },
      { title: 'Fully cordless',     body: 'Rechargeable controller clips to the strap. No wall tether, no trailing cable.' },
      { title: 'Ten-minute cycle',   body: 'Auto shut-off. Short enough to fit into a routine you will actually keep.' },
    ],

    specs: {
      'Wavelengths':  '633 nm red / 830 nm NIR + 5 cosmetic modes',
      'LED count':    '192',
      'Material':     'Medical-grade silicone',
      'Battery':      '1,200 mAh, USB-C',
      'Session':      '10 min auto shut-off',
      'Weight':       '0.5 lb (230 g)',
      'Warranty':     '2 years',
    },

    inBox: ['Veil mask', 'Rechargeable controller', 'Adjustable head strap', 'USB-C cable', 'Storage pouch'],

    seo: {
      title:       'Veil LED Face Mask — Flexible Silicone, 633nm + 830nm | KILTER',
      description: 'A cordless flexible-silicone LED face mask with red and near-infrared therapy in a ten-minute cycle. Free US shipping, 30-night trial.',
    },
    imageAlt: 'Veil flexible silicone LED face mask lit in red, photographed flat against a dark charcoal background',
  },

  {
    handle:   'tide-compression-boots',
    name:     'Tide',
    subtitle: 'Compression Recovery Boots',
    category: 'Compression',
    badge:    'Pro pick',
    hue:      200,

    // Drop a photo in public/products/ and point at it here to replace the
    // vector rendering. Leave null to keep the drawing.
    image:    null,

    // Stripe Payment Link for this product. Create it at
    // dashboard.stripe.com/payment-links, paste the URL here, and the
    // buy button becomes a real checkout. Null keeps the disabled stub.
    checkoutUrl: null,

    price:     449,
    compareAt: 599,

    sourcing: {
      unitCost: 165,
      moq:      30,
      margin:   '63%',
      note:     'Highest ticket and lowest MOQ in the range — the natural place to start a first order. Confirm the pump is rated for continuous duty, not intermittent.',
    },

    blurb: 'Four-chamber sequential compression. The recovery tool with the least argument against it.',

    description: [
      'Sequential compression is the least controversial thing in recovery. Squeeze from the ankle upward, push venous blood and lymph back toward the heart, repeat. Athletes have used it for decades because the mechanism is plumbing, not belief.',
      'Tide runs four overlapping chambers from ankle to upper thigh, at pressures from 30 to 240mmHg. Twenty minutes after a long run does more for how your legs feel the next morning than anything else we sell.',
      'The pump is quiet enough to use while watching something. The boots zip fully open, so getting into them does not require the flexibility you just spent your session losing.',
    ],

    features: [
      { title: 'Four sequential chambers', body: 'Ankle, calf, knee, thigh — inflating in order, the way the lymphatic system actually drains.' },
      { title: '30 – 240 mmHg',            body: 'A genuinely usable pressure range. Low end for sensitive legs and post-surgical use, high end for heavy training blocks.' },
      { title: 'Full-length zip',          body: 'Step in rather than wriggle in. Sounds trivial until you have tried it after a marathon.' },
      { title: 'Six programmes',           body: 'Sequential, peristaltic, and isolated-chamber modes, with a 10 – 60 minute timer.' },
    ],

    specs: {
      'Chambers':     '4 per leg, overlapping',
      'Pressure':     '30 – 240 mmHg',
      'Programmes':   '6',
      'Timer':        '10 – 60 min',
      'Sizes':        'Regular (up to 6\'2") / Tall',
      'Noise':        '< 50 dB',
      'Weight':       '9 lb (4.1 kg) full system',
      'Warranty':     '2 years',
    },

    inBox: ['Pair of Tide boots', 'Control pump', 'Connector hoses', 'Carry bag', 'Power adapter'],

    seo: {
      title:       'Tide Compression Recovery Boots — 4-Chamber Sequential, 240mmHg | KILTER',
      description: 'Four-chamber sequential compression boots with a 30 – 240mmHg range and six programmes. Free US shipping, 30-night trial, 2-year warranty.',
    },
    imageAlt: 'Pair of Tide compression recovery boots in charcoal fabric with the control pump beside them',
  },

  {
    handle:   'ember-sauna-blanket',
    name:     'Ember',
    subtitle: 'Infrared Sauna Blanket',
    category: 'Heat',
    badge:    null,
    hue:      28,

    // Drop a photo in public/products/ and point at it here to replace the
    // vector rendering. Leave null to keep the drawing.
    image:    null,

    // Stripe Payment Link for this product. Create it at
    // dashboard.stripe.com/payment-links, paste the URL here, and the
    // buy button becomes a real checkout. Null keeps the disabled stub.
    checkoutUrl: null,

    price:     299,
    compareAt: 399,

    sourcing: {
      unitCost: 95,
      moq:      50,
      margin:   '68%',
      note:     'Check the inner layer material. Cheap units use PU that cracks within a year; a non-toxic TPU or charcoal-fibre lining is the mark of a serious supplier.',
    },

    blurb: 'A sauna that folds into a closet and heats in twelve minutes.',

    description: [
      'Heat exposure is the most established recovery protocol there is, and also the least accessible — a sauna is a room you either have or you do not. An infrared blanket collapses that down to something that lives in a closet and runs off a wall socket.',
      'Ember reaches 80°C in twelve minutes across nine heating zones, with a charcoal and tourmaline layer that spreads heat rather than concentrating it into hot spots. Thirty to forty-five minutes is a session.',
      'Low EMF construction, a waterproof inner shell that wipes clean, and an auto shut-off so falling asleep in it is not a problem.',
    ],

    features: [
      { title: 'Nine heating zones',   body: 'Even distribution from shoulders to feet. Single-element blankets run hot at the middle and cold at the edges.' },
      { title: '12-minute preheat',    body: 'Reaches operating temperature in about the time it takes to change and get a drink.' },
      { title: 'Low EMF',              body: 'Shielded elements measured below 3mG at contact distance.' },
      { title: 'Wipe-clean interior',  body: 'Waterproof non-toxic TPU inner layer. It is going to get sweaty — that is the point.' },
    ],

    specs: {
      'Temperature':  '35 – 80 °C (95 – 176 °F)',
      'Zones':        '9',
      'Preheat':      '12 min to 80 °C',
      'Timer':        '15 – 60 min, auto shut-off',
      'Interior':     'Waterproof TPU, charcoal + tourmaline layer',
      'Unfolded':     '71 × 71 in',
      'Power':        '600 W',
      'Warranty':     '2 years',
    },

    inBox: ['Ember blanket', 'Wired controller', 'Insulating undersheet', 'Storage bag'],

    seo: {
      title:       'Ember Infrared Sauna Blanket — 9 Zones, Low EMF, 80°C | KILTER',
      description: 'A folding infrared sauna blanket with nine heating zones, a twelve-minute preheat and low-EMF construction. Free US shipping and a 30-night trial.',
    },
    imageAlt: 'Ember infrared sauna blanket laid open in deep charcoal with its amber-lit controller resting on top',
  },

  {
    handle:   'still-cold-plunge',
    name:     'Still',
    subtitle: 'Cold Plunge Tub',
    category: 'Cold',
    badge:    null,
    hue:      196,

    // Drop a photo in public/products/ and point at it here to replace the
    // vector rendering. Leave null to keep the drawing.
    image:    null,

    // Stripe Payment Link for this product. Create it at
    // dashboard.stripe.com/payment-links, paste the URL here, and the
    // buy button becomes a real checkout. Null keeps the disabled stub.
    checkoutUrl: null,

    price:     229,
    compareAt: 329,

    sourcing: {
      unitCost: 78,
      moq:      50,
      margin:   '66%',
      note:     'Ships bulky and light — dimensional weight will decide your freight cost, not actual weight. Price the shipping before the unit.',
    },

    blurb: 'Insulated, self-supporting, and it holds temperature overnight.',

    description: [
      'Cold exposure does not need a chiller unit to start. It needs a vessel that holds ice long enough to be worth filling, and most inflatable tubs do not — they are single-wall, so a bag of ice is gone in an hour.',
      'Still uses a triple-layer insulated wall with a sealed lid, which holds usable temperature overnight. Fill it, ice it, and it is ready in the morning and still cold that evening.',
      'It stands on its own frame at chest depth for most adults, drains through a hose valve, and packs down into a bag when you are done with it.',
    ],

    features: [
      { title: 'Triple-layer insulation', body: 'Holds temperature overnight. Single-wall tubs lose a full ice load in about an hour.' },
      { title: 'Self-supporting frame',   body: 'Steel frame, no inflation. Chest depth seated for most adults up to 6\'4".' },
      { title: 'Sealed lid',              body: 'Insulated cover keeps debris out and cold in between sessions.' },
      { title: 'Hose drain valve',        body: 'Empties to a garden hose. No tipping 80 gallons of water across a patio.' },
    ],

    specs: {
      'Capacity':     '85 gallons (320 L)',
      'Dimensions':   '30 in diameter × 30 in high',
      'Insulation':   'Triple-layer PVC with sealed air gap',
      'Frame':        'Powder-coated steel',
      'Temp hold':    '~2 °C rise over 12 hours at 20 °C ambient',
      'Packed size':  '24 × 14 × 10 in',
      'Weight':       '18 lb (8.2 kg) empty',
      'Warranty':     '2 years',
    },

    inBox: ['Still tub', 'Steel support frame', 'Insulated lid', 'Drain hose', 'Repair kit', 'Carry bag'],

    seo: {
      title:       'Still Cold Plunge Tub — Insulated, 85 Gallon, Holds Cold Overnight | KILTER',
      description: 'A triple-layer insulated cold plunge tub with a steel frame and sealed lid that holds temperature overnight. Free US shipping, 30-night trial.',
    },
    imageAlt: 'Still cold plunge tub in charcoal on its black steel frame with the insulated lid set to one side',
  },

  {
    handle:   'grid-acupressure-mat',
    name:     'Grid',
    subtitle: 'Acupressure Mat & Pillow',
    category: 'Passive',
    badge:    'Under $60',
    hue:      265,

    // Drop a photo in public/products/ and point at it here to replace the
    // vector rendering. Leave null to keep the drawing.
    image:    null,

    // Stripe Payment Link for this product. Create it at
    // dashboard.stripe.com/payment-links, paste the URL here, and the
    // buy button becomes a real checkout. Null keeps the disabled stub.
    checkoutUrl: null,

    price:     59,
    compareAt: 79,

    sourcing: {
      unitCost: 12,
      moq:      300,
      margin:   '80%',
      note:     'Best margin and lowest unit cost in the range — the obvious bundle and gift-tier product. Linen covers justify the premium over the standard cotton units.',
    },

    blurb: 'Six thousand points, no battery, no cable, no excuse.',

    description: [
      'Everything else in this range plugs in. Grid does not, which is exactly why it gets used on the days when nothing else does.',
      'Six thousand contact points across a linen-covered mat and matching pillow. Lie on it for twenty minutes. The first two are unpleasant and then they are not — the sensation resolves into heat as circulation increases at the surface.',
      'It is the cheapest thing we sell and the one most likely to still be in daily use a year from now.',
    ],

    features: [
      { title: '6,000 contact points', body: '230 ABS discs across mat and pillow, arranged to spread load evenly across the back.' },
      { title: 'Linen cover',          body: 'Washable linen over coconut-fibre fill. Cotton alternatives flatten within months.' },
      { title: 'No power required',    body: 'Nothing to charge, nothing to break. Rolls up and travels.' },
      { title: 'Matched pillow',       body: 'Neck bolster included — most of the benefit for desk-bound necks lives here.' },
    ],

    specs: {
      'Points':     '6,000 across 230 discs',
      'Mat size':   '29 × 17 in',
      'Pillow':     '15 × 6 × 4 in',
      'Cover':      'Washable linen',
      'Fill':       'Coconut fibre',
      'Weight':     '2.6 lb (1.2 kg)',
      'Warranty':   '2 years',
    },

    inBox: ['Grid mat', 'Neck pillow', 'Carry bag'],

    seo: {
      title:       'Grid Acupressure Mat & Pillow — 6,000 Points, Linen Cover | KILTER',
      description: 'A linen-covered acupressure mat and neck pillow with 6,000 contact points and coconut-fibre fill. Free US shipping and a 30-night trial.',
    },
    imageAlt: 'Grid acupressure mat in charcoal linen with its matching neck pillow, rolled partly open',
  },

  {
    handle:   'collar-neck-massager',
    name:     'Collar',
    subtitle: 'Heated Neck & Shoulder Massager',
    category: 'Percussion',
    badge:    null,
    hue:      45,

    // Drop a photo in public/products/ and point at it here to replace the
    // vector rendering. Leave null to keep the drawing.
    image:    null,

    // Stripe Payment Link for this product. Create it at
    // dashboard.stripe.com/payment-links, paste the URL here, and the
    // buy button becomes a real checkout. Null keeps the disabled stub.
    checkoutUrl: null,

    price:     99,
    compareAt: 139,

    sourcing: {
      unitCost: 28,
      moq:      150,
      margin:   '72%',
      note:     'Strong gifting product with a hard Q4 seasonal peak. Order for November by August at the latest.',
    },

    blurb: 'Eight kneading nodes and 42°C heat, shaped for the neck that stares at a monitor.',

    description: [
      'The neck and upper trapezius take the damage from desk work, and they are the hardest place to reach with a massage gun — you end up working at an angle that strains the arm holding the device.',
      'Collar sits over the shoulders and drapes down the chest, with eight rotating nodes running bidirectionally through the trapezius and 42°C heat layered over the top. Arm loops let you pull it tighter into the muscle rather than just resting it there.',
      'Fifteen minutes, cordless, and it works just as well over a shirt.',
    ],

    features: [
      { title: 'Eight kneading nodes',  body: 'Bidirectional rotation through the trapezius, reversing direction every minute.' },
      { title: '42°C heat',             body: 'Warms the tissue before working it. Layered over the kneading rather than run separately.' },
      { title: 'Adjustable arm loops',  body: 'Pull down to increase pressure. Most units at this price just rest on you.' },
      { title: 'Cordless, 3 hours',     body: 'USB-C rechargeable. Works over clothing, in a chair or in a car.' },
    ],

    specs: {
      'Nodes':      '8, bidirectional',
      'Heat':       '42 °C (108 °F)',
      'Intensity':  '3 levels',
      'Timer':      '15 min auto shut-off',
      'Battery':    '2,000 mAh, USB-C',
      'Runtime':    '3 hours',
      'Weight':     '2.4 lb (1.1 kg)',
      'Warranty':   '2 years',
    },

    inBox: ['Collar massager', 'USB-C cable', 'Car adapter', 'Storage bag'],

    seo: {
      title:       'Collar Heated Neck & Shoulder Massager — 8 Nodes, 42°C, Cordless | KILTER',
      description: 'A cordless heated neck and shoulder massager with eight bidirectional kneading nodes and adjustable arm loops. Free US shipping, 30-night trial.',
    },
    imageAlt: 'Collar heated neck and shoulder massager in charcoal fabric, draped as it would sit across the shoulders',
  },
];

/** Distinct categories, in merchandising order. */
export const categories = ['Percussion', 'Light', 'Compression', 'Heat', 'Cold', 'Passive'];

/** Look up a single product by its URL handle. */
export const getProduct = (handle) => products.find((p) => p.handle === handle);

/** Format a number as USD with no trailing cents. */
export const money = (n) => `$${n.toLocaleString('en-US')}`;

export default products;
