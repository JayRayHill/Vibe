#!/usr/bin/env node
/**
 * Prepare supplier product photos for the storefront.
 *
 *   1. Drop raw images into  public/products/raw/
 *      Name each file after the product handle, e.g. range-percussion-gun.jpg
 *   2. Run  npm run images
 *   3. Paste the printed `image:` lines into src/data/products.js
 *
 * Output is 1200x960 WebP at quality 82 — above Google Shopping's 1000px
 * minimum, and small enough not to hurt Largest Contentful Paint.
 */
import { readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const RAW = 'public/products/raw';
const OUT = 'public/products';
const W = 1200, H = 960;

if (!existsSync(RAW)) {
  await mkdir(RAW, { recursive: true });
  console.log(`Created ${RAW}. Drop supplier images there and re-run.`);
  process.exit(0);
}

const files = (await readdir(RAW)).filter((f) => /\.(jpe?g|png|webp|avif|tiff?)$/i.test(f));

if (!files.length) {
  console.log(`No images in ${RAW}/.`);
  console.log('Name each file after its product handle, e.g. range-percussion-gun.jpg');
  process.exit(0);
}

const lines = [];
let warned = 0;

for (const file of files) {
  const handle = path.parse(file).name;
  const src = path.join(RAW, file);
  const dest = path.join(OUT, `${handle}.webp`);

  const meta = await sharp(src).metadata();
  if (meta.width < W || meta.height < H) {
    console.warn(
      `  ! ${file} is ${meta.width}x${meta.height} — below ${W}x${H}. ` +
      `Upscaling will look soft, and Google Shopping rejects under 1000px. Ask the supplier for the original.`
    );
    warned++;
  }

  await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(dest);

  console.log(`  ✓ ${file} -> ${dest}`);
  lines.push(`    image:    '/products/${handle}.webp',`);
}

console.log(`\n${files.length} image(s) processed${warned ? `, ${warned} below target resolution` : ''}.`);
console.log('\nPaste into the matching product in src/data/products.js:\n');
lines.forEach((l) => console.log(l));
