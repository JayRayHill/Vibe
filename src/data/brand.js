/**
 * KILTER — brand configuration.
 *
 * Single source of truth for store identity. Renaming the store is a
 * one-line change here: every nav, footer, <title>, meta tag and JSON-LD
 * block reads from this object.
 */
export const brand = {
  name:      'KILTER',
  nameCased: 'Kilter',
  domain:    'kilter.co',

  // "Back on kilter" — restored to balance. Recovery, without saying "recovery".
  tagline:  'Recovery, engineered.',
  strapline: 'Train hard. Return to baseline.',

  description:
    'Kilter builds recovery technology for people who take training seriously — ' +
    'percussion therapy, red light, compression and contrast, without the clinic price tag.',

  // Positioning
  promise:  'Clinical-grade recovery hardware, priced for the home.',
  audience: 'Serious amateurs — lifters, runners, cyclists, and desk-bound bodies that need repair.',

  email:  'hello@kilter.co',
  social: {
    instagram: 'https://instagram.com/',
    youtube:   'https://youtube.com/',
    tiktok:    'https://tiktok.com/',
  },

  // Trust bar — shown under the hero
  guarantees: [
    { label: '30-night trial',   detail: 'Sleep on it. Send it back if it is not for you.' },
    { label: '2-year warranty',  detail: 'Every device, no registration required.' },
    { label: 'Free US shipping', detail: 'On everything. No threshold.' },
  ],
};

export default brand;
