import sharp from 'sharp';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');
const LOGO = join(__dirname, '..', 'src', 'images', 'kglogo.webp');

const W = 1200, H = 630;

// Logo: resize to 200px tall, centred left
const logoBuffer = await sharp(LOGO)
  .resize(null, 200, { fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 90 })
  .toBuffer();
const logoMeta = await sharp(logoBuffer).metadata();
const logoX = Math.round((W * 0.28) - (logoMeta.width / 2)); // 28% from left
const logoY = Math.round((H - logoMeta.height) / 2) - 20;   // vertically centred, nudge up

// SVG text layer (right-side text + bottom bar)
const textSvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark band at bottom -->
  <rect x="0" y="${H - 90}" width="${W}" height="90" fill="#394244"/>
  <!-- Thin accent line above band -->
  <rect x="0" y="${H - 92}" width="${W}" height="3" fill="#5AA9EB"/>

  <!-- Right-side main text -->
  <text x="${W * 0.58}" y="200" font-family="Arial, Helvetica, sans-serif"
    font-size="52" font-weight="bold" fill="#394244" text-anchor="middle">
    Jerusalem YMCA
  </text>
  <text x="${W * 0.58}" y="270" font-family="Arial, Helvetica, sans-serif"
    font-size="52" font-weight="bold" fill="#394244" text-anchor="middle">
    Peace Preschool
  </text>

  <!-- Tagline -->
  <text x="${W * 0.58}" y="340" font-family="Arial, Helvetica, sans-serif"
    font-size="28" fill="#394244" text-anchor="middle" opacity="0.85">
    Bilingual · Arabic &amp; Hebrew · Jerusalem
  </text>

  <!-- Divider -->
  <line x1="${W * 0.36}" y1="170" x2="${W * 0.36}" y2="380"
    stroke="#394244" stroke-width="2" opacity="0.3"/>

  <!-- Bottom bar text -->
  <text x="${W / 2}" y="${H - 32}" font-family="Arial, Helvetica, sans-serif"
    font-size="22" fill="#5BDBB0" text-anchor="middle" letter-spacing="2">
    jlmymcakg.com
  </text>
</svg>`;

// Build the image: mint background + SVG text + logo composite
await sharp({
  create: { width: W, height: H, channels: 3, background: { r: 91, g: 219, b: 176 } }
})
  .composite([
    { input: Buffer.from(textSvg), top: 0, left: 0 },
    { input: logoBuffer, top: logoY, left: logoX },
  ])
  .png({ quality: 90 })
  .toFile(join(PUBLIC, 'og-image.png'));

console.log('Created public/og-image.png (1200×630)');
