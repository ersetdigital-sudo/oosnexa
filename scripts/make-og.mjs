/**
 * Generate aset gambar sekali jalan:
 *  - public/images/og-1200x630.png        (Open Graph 1200x630)
 *  - public/images/apple-touch-icon-180.png (apple-touch-icon 180x180)
 *
 * Jalankan: node scripts/make-og.mjs
 * Verifikasi non-visual: sampling piksel memastikan teks/logo benar-benar ter-render.
 */
import sharp from "sharp";

const W = 1200;
const H = 630;
const BG = "#0E0E11";
const AC = "#FF6B35";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0E0E11"/>
      <stop offset="1" stop-color="#17171D"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${AC}" stop-opacity="0.30"/>
      <stop offset="1" stop-color="${AC}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#FFFFFF" stroke-opacity="0.03" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <circle cx="1060" cy="70" r="360" fill="url(#glow)"/>

  <!-- glyph mark raksasa (dari app/icon.svg) -->
  <g transform="translate(770,150) scale(5.6)" opacity="0.16">
    <path d="M17 47V17h7l16 19V17h7v30h-7L24 28v19z" fill="${AC}"/>
  </g>

  <!-- aksen -->
  <rect x="72" y="272" width="6" height="170" rx="3" fill="${AC}"/>

  <!-- headline (tagline resmi) -->
  <text x="104" y="345" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="74" font-weight="800" fill="#FFFFFF" letter-spacing="-1.5">Build Better</text>
  <text x="104" y="430" font-family="Plus Jakarta Sans, Segoe UI, Arial, sans-serif" font-size="74" font-weight="800" fill="${AC}" letter-spacing="-1.5">Grow Smarter</text>

  <!-- sub + domain -->
  <text x="106" y="494" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="27" font-weight="500" fill="#9A9AA3">Website &#183; Sistem Bisnis &#183; Custom Web App</text>
  <text x="106" y="556" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="25" font-weight="700" fill="#FFFFFF">oosnexa.com</text>
</svg>`;

// ---------- 1. OG image ----------
const bgBuf = await sharp(Buffer.from(svg)).png().toBuffer();
const logo = await sharp("public/images/logo-on.png")
  .resize({ width: 300 })
  .png()
  .toBuffer();

const og = await sharp(bgBuf)
  .composite([{ input: logo, left: 72, top: 56 }])
  .png()
  .toFile("public/images/og-1200x630.png");

// ---------- sampling piksel ----------
const { data, info } = await sharp("public/images/og-1200x630.png")
  .raw()
  .toBuffer({ resolveWithObject: true });
const px = (x, y) => {
  const i = (y * info.width + x) * info.channels;
  return [data[i], data[i + 1], data[i + 2]];
};
const count = (x0, x1, y0, y1, pred) => {
  let n = 0;
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) if (pred(px(x, y))) n++;
  return n;
};
const isWhite = ([r, g, b]) => r > 210 && g > 210 && b > 210;
const isOrange = ([r, g, b]) => r > 200 && g > 70 && g < 170 && b < 110;
const isNotBg = ([r, g, b]) => Math.abs(r - 14) + Math.abs(g - 14) + Math.abs(b - 17) > 40;

const checks = [
  ["dimensi 1200x630", info.width === 1200 && info.height === 630],
  ["headline putih ('Build Better')", count(104, 640, 285, 360, isWhite) > 2500],
  ["headline oranye ('Grow Smarter')", count(104, 640, 370, 450, isOrange) > 2500],
  ["logo ter-composite", count(72, 372, 56, 224, isNotBg) > 3000],
  ["sub teks abu", count(106, 900, 470, 505, ([r, g, b]) => r > 130 && r < 200 && g > 130) > 500],
];

console.log("og-1200x630.png:", og.width + "x" + og.height, Math.round(og.size / 1024) + "KB");
let fail = 0;
for (const [k, v] of checks) {
  console.log("  ", v ? "✓" : "✗", k);
  if (!v) fail++;
}

// ---------- 2. apple-touch-icon ----------
const apple = await sharp("app/icon.svg")
  .resize(180, 180)
  .flatten({ background: "#0E0E10" })
  .png()
  .toFile("public/images/apple-touch-icon-180.png");
const ainfo = await sharp("public/images/apple-touch-icon-180.png").metadata();
console.log("\napple-touch-icon-180.png:", ainfo.width + "x" + ainfo.height, Math.round(apple.size / 1024) + "KB");
console.log("  ", ainfo.width === 180 && ainfo.height === 180 ? "✓ 180x180" : "✗ salah ukuran");
if (ainfo.width !== 180 || ainfo.height !== 180) fail++;

console.log("\n" + (fail ? `✗ ${fail} CEK GAGAL` : "✓ semua aset OK"));
process.exit(fail ? 1 : 0);
