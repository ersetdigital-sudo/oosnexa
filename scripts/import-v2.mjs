/**
 * Konversi mockup HTML statis (redesign web oos nexa v2) → halaman Next.js App Router.
 *
 * Jalankan: node scripts/import-v2.mjs
 *
 * Output per halaman:
 *   content/<key>.html            → isi <main> (tanpa nav/footer/script mockup)
 *   content/<key>.schema.json     → JSON-LD (Breadcrumb + FAQ), URL relatif
 *   app/<route>/page.css          → CSS mockup (rule chrome nav/footer dibuang)
 *   app/<route>/page.tsx          → komponen + metadata (title/desc/canonical/OG)
 *
 * Sumber bisa diganti ulang (mis. hasil revisi ChatGPT) lalu jalankan lagi.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "redesign web oos nexa v2", "pages");

/** route: [file sumber, direktori tujuan, canonical path] */
const PAGES = [
  ["index.html", "app", "/", "content/home.html"],
  ["layanan/index.html", "app/layanan", "/layanan", "content/layanan.html"],
  ["layanan/business-dashboard/index.html", "app/layanan/business-dashboard", "/layanan/business-dashboard", "content/layanan/business-dashboard.html"],
  ["layanan/crm/index.html", "app/layanan/crm", "/layanan/crm", "content/layanan/crm.html"],
  ["layanan/custom-web-app/index.html", "app/layanan/custom-web-app", "/layanan/custom-web-app", "content/layanan/custom-web-app.html"],
  ["layanan/integrasi-api-automasi/index.html", "app/layanan/integrasi-api-automasi", "/layanan/integrasi-api-automasi", "content/layanan/integrasi-api-automasi.html"],
  ["layanan/jasa-pembuatan-website-custom/index.html", "app/layanan/jasa-pembuatan-website-custom", "/layanan/jasa-pembuatan-website-custom", "content/layanan/jasa-pembuatan-website-custom.html"],
  ["layanan/landing-page/index.html", "app/layanan/landing-page", "/layanan/landing-page", "content/layanan/landing-page.html"],
  ["layanan/sistem-pos-inventory/index.html", "app/layanan/sistem-pos-inventory", "/layanan/sistem-pos-inventory", "content/layanan/sistem-pos-inventory.html"],
  ["layanan/toko-online-custom/index.html", "app/layanan/toko-online-custom", "/layanan/toko-online-custom", "content/layanan/toko-online-custom.html"],
  ["tentang-kami/index.html", "app/tentang-kami", "/tentang-kami", "content/tentang-kami.html"],
];

const dec = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");

/** Nama file gambar mockup (UUID export) → aset yang sudah ada di public/images
 *  (kedua file identik byte-per-byte; dipetakan biar tidak ada duplikasi aset). */
const IMG_ALIAS = {
  "1b71a29f-2d81-4b98-aef3-7ee175760889.svg": "react-original.svg",
  "236c8e99-5d8c-4f9a-93db-79ef481f881e.svg": "supabase-original.svg",
  "910db086-669f-45c3-83d3-1e6899890315.svg": "postgresql-original.svg",
  "de235f71-5d90-43f1-ac7c-8df5777a8e7f.svg": "typescript-original.svg",
  "e4220ddf-dd9c-47d4-8f8d-9ae070e3ed4f.svg": "nextjs-original.svg",
};

const stripTags = (s) => dec(s.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

/* ---------------- CSS: parser sederhana yang mempertahankan @media ---------------- */

// selector yang mengatur chrome BERSAMA (Nav.tsx + FooterGlobal di layout) → dibuang
const CHROME = [
  /(^|[\s,>+~(])\.nav(\s|\.|:|,|$)/,
  /(^|[\s,>+~(])\.menu(\s|\.|:|,|$)/,
  /(^|[\s,>+~(])\.burger(\s|\.|:|,|$)/,
  /(^|[\s,>+~(])\.mob(\s|\.|:|,|$)/,
  /(^|[\s,>+~(])\.m-menu(\s|\.|:|,|$)/,
  /(^|[\s,>+~(])\.nav-right(\s|\.|:|,|$)/,
  /(^|[\s,>+~(])\.logo(\s|\.|:|,|$)/,
  /(^|[\s,>+~(])footer(\s|\.|:|,|,|$)/,
  /(^|[\s,>+~(])\.ft(\s|\.|:|,|$)/,
  /(^|[\s,>+~(])\.tag-l(\s|\.|:|,|$)/,
  /(^|[\s,>+~(])\.copy(\s|\.|:|,|$)/,
];
const isChrome = (sel) => CHROME.some((re) => re.test(sel));

function filterSelectors(selectorList) {
  return selectorList
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s && !isChrome(s))
    .join(", ");
}

/** Kembalikan CSS dengan rule chrome dibuang; pertahankan @media/@supports/@keyframes. */
function cleanCss(css) {
  let out = "";
  let i = 0;
  while (i < css.length) {
    const open = css.indexOf("{", i);
    if (open === -1) {
      out += css.slice(i);
      break;
    }
    const selector = css.slice(i, open);
    // cari pasangan kurung tutup
    let depth = 1;
    let j = open + 1;
    while (j < css.length && depth > 0) {
      if (css[j] === "{") depth++;
      else if (css[j] === "}") depth--;
      j++;
    }
    const body = css.slice(open + 1, j - 1);
    const sel = selector.trim();

    if (sel.startsWith("@")) {
      if (/@media|@supports/.test(sel)) {
        const inner = cleanCss(body);
        if (inner.trim()) out += `${sel}{${inner}}`;
      } else {
        out += `${sel}{${body}}`; // @keyframes / @font-face: pertahankan
      }
    } else {
      const kept = filterSelectors(selector);
      if (kept) out += `${kept}{${body}}`;
    }
    i = j;
  }
  return out;
}

/* ---------------- netralisasi sisa globals.css ----------------
 * globals.css tetap dibutuhkan halaman portofolio/case study/nav/footer.
 * Beberapa rule elemennya ikut menempel ke halaman v2 (page.css dimuat SETELAH
 * globals — sudah diverifikasi). Blok ini mengembalikan hasilnya persis seperti
 * mockup standalone. Ditaruh di AKHIR page.css supaya menang di cascade.       */
const COMPAT = `/* kompatibilitas vs globals.css — jangan dihapus */
h2{font-weight:700}
section{scroll-margin-top:0}
.lead{font-size:1rem}
.btn-g{background:transparent}
.btn-g:hover{background:transparent}`;

/* ---------------- ekstraksi per halaman ---------------- */

const result = [];

for (const [srcRel, dir, canonical, contentRel] of PAGES) {
  const raw = fs.readFileSync(path.join(SRC, srcRel), "utf8");

  // 1. konten utama
  const mainMatch = raw.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!mainMatch) throw new Error(`main tidak ditemukan: ${srcRel}`);
  let content = mainMatch[1]
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/\.\.\/images\//g, "/images/")
    .replace(/\.\.\/fonts\//g, "/fonts/");
  for (const [uuid, name] of Object.entries(IMG_ALIAS)) {
    content = content.split(`/images/${uuid}`).join(`/images/${name}`);
  }
  content = content.trim();

  // 2. metadata
  const title = dec((raw.match(/<title>([\s\S]*?)<\/title>/) || [, ""])[1].trim());
  const desc = dec((raw.match(/<meta name="description" content="([^"]*)"/) || [, ""])[1]);

  // 3. JSON-LD mockup (breadcrumb) — sering ada di <head>
  const ldRaw = (raw.match(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/) || [])[1];
  const ld = [];
  if (ldRaw) {
    try {
      const parsed = JSON.parse(ldRaw);
      (Array.isArray(parsed) ? parsed : [parsed]).forEach((s) => {
        // FAQPage selalu digenerate ulang dari <details> yang terlihat di halaman,
        // supaya schema tidak pernah beda dengan konten yang dilihat Google.
        if (s && s["@type"] === "FAQPage") return;
        ld.push(s);
      });
    } catch {
      console.warn(`  ! JSON-LD gagal parse: ${srcRel}`);
    }
  }

  // 4. FAQPage dari <details>
  const faqs = [];
  for (const d of content.match(/<details[^>]*>([\s\S]*?)<\/details>/g) || []) {
    const q = d.match(/<summary[^>]*>([\s\S]*?)<\/summary>/);
    if (!q) continue;
    const a = d.slice(q.index + q[0].length).replace(/<\/details>[\s\S]*$/, "");
    const question = stripTags(q[1]);
    const answer = stripTags(a);
    if (question && answer) faqs.push({ question, answer });
  }
  if (faqs.length) {
    ld.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  // homepage = entity utama → Organization + WebSite
  if (canonical === "/") {
    ld.unshift(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "OOS NEXA",
        url: "/",
        logo: "/images/logo-on.png",
        slogan: "Build Better Grow Smarter",
      },
      { "@context": "https://schema.org", "@type": "WebSite", name: "OOS NEXA", url: "/" }
    );
  }

  // 5. CSS mockup (block pertama; block kedua = @font-face, sudah ada di layout)
  const styles = [...raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]);
  const css =
    cleanCss(styles[0] || "") +
    "\n" +
    COMPAT +
    "\n/* pertahankan ukuran tombol nav (globals) — page CSS menang di cascade */\n.btn-sm{padding:9px 12px;font-size:.82rem}\n";

  // 6. tulis file
  const contentAbs = path.join(ROOT, contentRel);
  fs.mkdirSync(path.dirname(contentAbs), { recursive: true });
  fs.writeFileSync(contentAbs, content, "utf8");

  const schemaAbs = path.join(ROOT, contentRel.replace(/\.html$/, ".schema.json"));
  fs.writeFileSync(schemaAbs, JSON.stringify({ ld }, null, 2), "utf8");

  const dirAbs = path.join(ROOT, dir);
  fs.mkdirSync(dirAbs, { recursive: true });
  fs.writeFileSync(path.join(dirAbs, "page.css"), css, "utf8");

  // 7. page.tsx
  const tsx = `import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import { withAbsoluteUrls } from "@/lib/jsonld";
import "./page.css";

const html = readFileSync(path.join(process.cwd(), "${contentRel}"), "utf8");
const schema: { ld: unknown[] } = JSON.parse(
  readFileSync(path.join(process.cwd(), "${contentRel.replace(/\.html$/, ".schema.json")}"), "utf8")
);

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
  alternates: { canonical: ${JSON.stringify(canonical)} },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(desc)},
    url: ${JSON.stringify(canonical)},
    type: "website",
    locale: "id_ID",
    siteName: "OOS NEXA",
    images: [
      {
        url: "/images/og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "OOS NEXA — Build Better Grow Smarter",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top" dangerouslySetInnerHTML={{ __html: html }} />
      {schema.ld.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(withAbsoluteUrls(s)) }}
        />
      ))}
    </>
  );
}
`;
  fs.writeFileSync(path.join(dirAbs, "page.tsx"), tsx, "utf8");

  result.push({
    canonical,
    title: `${title} (${title.length})`,
    descLen: desc.length,
    htmlKb: +(content.length / 1024).toFixed(1),
    cssKb: +(css.length / 1024).toFixed(1),
    faq: faqs.length,
    ld: ld.map((s) => s["@type"] || (Array.isArray(s) ? "array" : "?")).join(","),
    chromeLeft: (css.match(/\.nav\b|footer\b|\.burger\b/g) || []).length,
  });
}

console.table(result);

// cek kelas chrome yang masih dipakai konten
let uses = 0;
for (const [, , , contentRel] of PAGES) {
  const c = fs.readFileSync(path.join(ROOT, contentRel), "utf8");
  const m = c.match(/class="[^"]*\b(nav|menu|burger|mob|logo|ft|copy)\b[^"]*"/g);
  if (m) {
    uses += m.length;
    console.log(`  ! kelas chrome dipakai konten ${contentRel}:`, m.slice(0, 4));
  }
}
if (!uses) console.log("✓ tidak ada konten yang memakai kelas chrome (nav/footer)");
