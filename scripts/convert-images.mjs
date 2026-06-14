/**
 * Converts all used images to WebP with appropriate resize targets.
 * Run once: node scripts/convert-images.mjs
 * Deletes originals after successful conversion.
 */
import sharp from 'sharp';
import { readdir, rm, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src', 'images');

// Per-file overrides (max dimension, quality). Files not listed fall into a category below.
const STAFF_DIR = join(SRC, 'gnnot', 'wetransfer_2025-01-30_1603');
const GALLERY_DIR = join(SRC, 'kids');

const CATEGORIES = {
  // Staff portraits shown at 100px circles — convert at 320px, q=78
  staff: { maxDim: 320, quality: 78 },
  // Gallery kids photos shown in 400px grid — 800px max, q=80
  gallery: { maxDim: 800, quality: 80 },
  // Large hero / background images — 1600px max, q=82
  hero: { maxDim: 1600, quality: 82 },
  // Smaller icons, decorative, logos — 600px max, q=80
  small: { maxDim: 600, quality: 80 },
};

// Map each file to its category
function categorise(filePath) {
  if (filePath.startsWith(STAFF_DIR)) return CATEGORIES.staff;
  if (filePath.startsWith(GALLERY_DIR)) return CATEGORIES.gallery;
  const name = basename(filePath).toLowerCase();
  const heroFiles = [
    'swimming11', 'yoga11', 'music11', 'exploringnature11',
    'aboutphone', 'aboutphone11', 'active', 'annan1',
    'tele2', 'tele4', 'they', 'aact9', 'safa2',
    'kid122', 'diver2', 'bird422',
  ];
  const stem = name.replace(/\.[^.]+$/, '');
  if (heroFiles.includes(stem)) return CATEGORIES.hero;
  return CATEGORIES.small;
}

async function collectFiles(dir) {
  const EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.avif']);
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  for (const e of entries) {
    if (e.isFile() && EXTS.has(extname(e.name).toLowerCase())) {
      results.push(join(e.parentPath ?? e.path, e.name));
    }
  }
  return results;
}

async function convert(filePath) {
  const { maxDim, quality } = categorise(filePath);
  const ext = extname(filePath);
  const dest = filePath.slice(0, -ext.length) + '.webp';

  try {
    const meta = await sharp(filePath).metadata();
    const needsResize = (meta.width > maxDim) || (meta.height > maxDim);

    let pipeline = sharp(filePath);
    if (needsResize) {
      pipeline = pipeline.resize(maxDim, maxDim, { fit: 'inside', withoutEnlargement: true });
    }
    await pipeline.webp({ quality }).toFile(dest);

    const [origStat, newStat] = await Promise.all([stat(filePath), stat(dest)]);
    const ratio = Math.round((newStat.size / origStat.size) * 100);
    console.log(
      `✓ ${basename(filePath).padEnd(30)} ${Math.round(origStat.size / 1024)}KB → ${Math.round(newStat.size / 1024)}KB (${ratio}%)`
    );
    await rm(filePath);
  } catch (err) {
    console.error(`✗ ${basename(filePath)}: ${err.message}`);
  }
}

const files = await collectFiles(SRC);
console.log(`Converting ${files.length} images…\n`);
// Process sequentially to avoid OOM on large images
for (const f of files) {
  await convert(f);
}

// Also handle ymca1.webp — already webp, just check/compress if oversized
const existingWebp = join(SRC, 'ymca1.webp');
if (existsSync(existingWebp)) {
  const s = await stat(existingWebp);
  if (s.size > 200 * 1024) {
    const tmp = existingWebp + '.tmp';
    await sharp(existingWebp).resize(1600, 1600, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(tmp);
    await rm(existingWebp);
    const { rename } = await import('fs/promises');
    await rename(tmp, existingWebp);
    const newS = await stat(existingWebp);
    console.log(`✓ ymca1.webp (recompressed) → ${Math.round(newS.size / 1024)}KB`);
  } else {
    console.log(`✓ ymca1.webp already small (${Math.round(s.size / 1024)}KB), kept as-is`);
  }
}

console.log('\nDone.');
