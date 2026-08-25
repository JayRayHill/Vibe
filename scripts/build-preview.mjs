#!/usr/bin/env node
/**
 * Bundle the built storefront into one self-contained HTML file.
 *
 * The real site is a multi-page static build. A shareable preview has to be a
 * single file, so this stitches the rendered pages together and swaps server
 * routing for client-side view switching. Nothing is re-authored — the markup,
 * CSS and SVGs all come straight out of dist/, so the preview cannot drift
 * from what actually deploys.
 *
 *   npm run build && node scripts/build-preview.mjs [outfile]
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const DIST = 'dist';
const OUT = process.argv[2] ?? 'kilter-preview.html';

const grab = (html, tag) => {
  const open = html.indexOf(`<${tag}`);
  const close = html.lastIndexOf(`</${tag}>`);
  if (open === -1 || close === -1) throw new Error(`no <${tag}> found`);
  return html.slice(open, close + tag.length + 3);
};

// Shop pages all share one stylesheet; find it from the rendered page itself.
const homeHtml = await readFile(path.join(DIST, 'shop/index.html'), 'utf8');
const cssHref = homeHtml.match(/_astro\/[^"]*\.css/)[0];
const css = await readFile(path.join(DIST, '_astro', path.basename(cssHref)), 'utf8');

// Every product directory under dist/shop/ is a view.
const handles = (await readdir(path.join(DIST, 'shop'), { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const views = [
  `<div class="view" data-view="home">${grab(homeHtml, 'main')}</div>`,
];

for (const h of handles) {
  const html = await readFile(path.join(DIST, 'shop', h, 'index.html'), 'utf8');
  views.push(`<div class="view" data-view="${h}" hidden>${grab(html, 'main')}</div>`);
}

// The category filter ships as an inline module script on the home page.
// Reuse it verbatim rather than reimplementing the behaviour here.
const scriptMatch = homeHtml.match(/<script type="module">([\s\S]*?)<\/script>/);
const filterScript = scriptMatch ? scriptMatch[1] : '';
if (!filterScript) console.warn('  ! no inline module script found — filters will not work');

// Product-page scripts are deliberately skipped: each queries a single
// [data-add] button, which breaks once eight product views share one document.
// The delegated handler below covers all of them instead.

const nav = grab(homeHtml, 'header');
const footer = grab(homeHtml, 'footer');

const page = `<title>KILTER</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600&display=swap" rel="stylesheet">

<style>
${css}

/* The viewer paints its own ground behind the page. KILTER commits to a single
   dark world, so body must claim that ground rather than inherit the host's. */
html, body { background: #0a0a0b; margin: 0; }
body { min-height: 100vh; }

/* Preview-only banner: this file is a bundle, not the deployed site. */
.preview-note {
  background: #17171a;
  border-bottom: 1px solid #232327;
  color: #8a8a93;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.76rem;
  line-height: 1.5;
  padding: 0.7rem clamp(20px, 5vw, 56px);
  text-align: center;
}
.preview-note strong { color: #ff5c35; font-weight: 600; }
</style>

<div class="shop">
  <p class="preview-note">
    <strong>Preview build</strong> — the real storefront is a multi-page Astro site.
    Product links switch views in place here. Checkout is not connected.
  </p>
  ${nav}
  <div id="views">
${views.join('\n')}
  </div>
  ${footer}
</div>

<script type="module">
${filterScript}
</script>

<script>
(function () {
  var views = Array.prototype.slice.call(document.querySelectorAll('.view'));

  function show(name, anchor) {
    var found = false;
    views.forEach(function (v) {
      var match = v.dataset.view === name;
      v.hidden = !match;
      if (match) found = true;
    });
    if (!found) show('home', anchor);

    if (anchor) {
      var target = document.getElementById(anchor);
      if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Route every in-site link through the view switcher.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href) return;

    if (href.indexOf('/shop') === 0) {
      e.preventDefault();
      var rest = href.slice('/shop'.length);
      var hash = '';
      var hashAt = rest.indexOf('#');
      if (hashAt !== -1) { hash = rest.slice(hashAt + 1); rest = rest.slice(0, hashAt); }
      var handle = rest.replace(/^\\//, '').replace(/\\/$/, '');
      show(handle || 'home', hash);
      return;
    }

    // The portfolio lives at / on the real site and is not part of this bundle.
    if (href === '/') {
      e.preventDefault();
      show('home', null);
    }
  });

  // Cart badge appears once in the shared nav; keep every add in sync.
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-add]');
    if (!btn) return;

    document.querySelectorAll('[data-cart-count]').forEach(function (el) {
      el.textContent = String(Number(el.textContent || '0') + 1);
    });

    // Confirm in the view that was actually clicked, not the first in the document.
    var view = btn.closest('.view');
    var msg = view && view.querySelector('[data-add-msg]');
    if (!msg) return;
    var original = msg.dataset.original || msg.textContent;
    msg.dataset.original = original;
    msg.textContent = 'Added to cart. Checkout is not connected yet.';
    clearTimeout(msg._t);
    msg._t = setTimeout(function () { msg.textContent = original; }, 2600);
  });
})();
</script>
`;

await writeFile(OUT, page);
const kb = (Buffer.byteLength(page) / 1024).toFixed(0);
console.log(`${OUT} — ${views.length} views, ${kb} KB`);
