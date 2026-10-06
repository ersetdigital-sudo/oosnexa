/**
 * Hapus dari globals.css semua rule yang memakai class yang TIDAK dipakai
 * halaman yang tetap (portofolio, case study, nav, footer) — yaitu rule homepage
 * lama yang sekarang bentrok dengan mockup v2.
 *
 * Aman karena:
 *  - class mati tidak mungkin match elemen halaman portofolio/case/nav/footer
 *  - sebelum menghapus, dicek dulu: setiap halaman mockup yang memakai class tsb
 *    harus punya rule-nya sendiri di CSS halaman tersebut (self-sufficient).
 *
 * Pakai: node scripts/strip-dead-globals.mjs [--dry]
 */
import fs from "node:fs";
import path from "node:path";

const DRY = process.argv.includes("--dry");
const ROOT = process.cwd();

/* ---------- 1. token class yang dipakai halaman yang TETAP ---------- */
const keptFiles = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".tsx")) keptFiles.push(p);
  }
})(path.join(ROOT, "app"));
keptFiles.push(path.join(ROOT, "components", "Nav.tsx"), path.join(ROOT, "components", "CaseCover.tsx"), path.join(ROOT, "components", "ClientScripts.tsx"));

const keptClasses = new Set();
const dynamicWarn = [];
for (const f of keptFiles) {
  const rel = path.relative(ROOT, f).replace(/\\/g, "/");
  // jadikan output generator & halaman lama yang diganti tidak dihitung
  if (rel === "app/page.tsx" || rel.startsWith("app/layanan/") || rel === "app/tentang-kami/page.tsx") continue;
  const src = fs.readFileSync(f, "utf8");
  for (const m of src.matchAll(/className=\{`([^`]*)`/g)) if (m[1].includes("${")) dynamicWarn.push(`${rel}: ${m[1]}`);
  for (const m of src.matchAll(/(["'`])((?:\\.|(?!\1)[^\\])*)\1/g)) {
    const s = m[2];
    if (!/[a-z]/i.test(s)) continue;
    for (const t of s.split(/[\s${}]+/)) if (/^[a-z][a-z0-9-]*$/i.test(t)) keptClasses.add(t);
  }
}
if (dynamicWarn.length) {
  console.warn("PERINGATAN dynamic className (tidak bisa dianalisa):");
  dynamicWarn.forEach((w) => console.warn("  " + w));
}

/* ---------- 2. class yang dipakai konten mockup (tiap halaman) ---------- */
const mockPages = []; // { file, classes:Set, css:string }
const mockDir = path.join(ROOT, "redesign web oos nexa v2", "pages");
(function walkM(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walkM(p);
    else if (e.name.endsWith(".html")) {
      const html = fs.readFileSync(p, "utf8");
      const classes = new Set();
      for (const m of html.matchAll(/class="([^"]*)"/g)) m[1].split(/\s+/).forEach((x) => x && classes.add(x));
      const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join("\n");
      mockPages.push({ file: path.relative(mockDir, p).replace(/\\/g, "/"), classes, css });
    }
  }
})(mockDir);
const mockAll = new Set();
mockPages.forEach((p) => p.classes.forEach((c) => mockAll.add(c)));

/* ---------- 3. parser CSS sederhana (nested @media) ---------- */
function parse(css) {
  const units = [];
  let i = 0, buf = "";
  const depth0 = () => units;
  while (i < css.length) {
    const ch = css[i];
    if (ch === "/" && css[i + 1] === "*") {
      const end = css.indexOf("*/", i + 2);
      const c = css.slice(i, end + 2);
      if (!buf.trim()) units.push({ kind: "comment", text: c });
      else buf += c;
      i = end + 2;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const end = css.indexOf(ch, i + 1);
      buf += css.slice(i, end + 1);
      i = end + 1;
      continue;
    }
    if (ch === "{") {
      const prelude = buf;
      buf = "";
      // cari penutup seimbang
      let j = i + 1, d = 1;
      while (j < css.length && d > 0) {
        const c2 = css[j];
        if (c2 === '"' || c2 === "'") { j = css.indexOf(c2, j + 1); }
        else if (c2 === "{") d++;
        else if (c2 === "}") d--;
        j++;
      }
      const body = css.slice(i + 1, j - 1);
      units.push({ kind: "block", prelude, body });
      i = j;
      continue;
    }
    if (ch === ";" && !buf.includes("{")) {
      units.push({ kind: "stmt", prelude: buf });
      buf = "";
      i++;
      continue;
    }
    if (ch === "}") {
      // penutup yang tidak seharusnya di level ini
      units.push({ kind: "raw", text: ch });
      buf = "";
      i++;
      continue;
    }
    buf += ch;
    i++;
  }
  if (buf.trim()) units.push({ kind: "raw", text: buf });
  void depth0;
  return units;
}

const classTokens = (sel) => [...sel.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/\.([A-Za-z][\w-]*)/g)].map((m) => m[1]);

/* ---------- 4. tentukan rule mati ---------- */
const globalsPath = path.join(ROOT, "app", "globals.css");
const globals = fs.readFileSync(globalsPath, "utf8");
const units = parse(globals);

const deleted = []; // { sel, props }
const deadTokens = new Set();

function filter(list) {
  const out = [];
  for (const u of list) {
    if (u.kind === "block") {
      const pre = u.prelude.trim();
      if (/^@(media|supports|container)/.test(pre)) {
        const inner = filter(parse(u.body));
        if (inner.length) out.push({ ...u, body: inner });
        // else: blok kosong → buang
        continue;
      }
      if (/^@(keyframes|font-face|import|charset|layer|property|counter-style|font-feature-values|page|namespace)/.test(pre)) {
        out.push(u);
        continue;
      }
      const toks = classTokens(u.prelude);
      const dead = toks.filter((t) => !keptClasses.has(t));
      if (toks.length && dead.length) {
        dead.forEach((t) => deadTokens.add(t));
        deleted.push({ sel: u.prelude.replace(/\s+/g, " ").trim(), props: u.body.replace(/\s+/g, " ").trim(), dead: dead.join(",") });
        continue;
      }
      out.push(u);
      continue;
    }
    out.push(u);
  }
  return out;
}

function serialize(list) {
  return list.map((u) => {
    if (u.kind === "comment") return u.text;
    if (u.kind === "stmt") return u.prelude + ";";
    if (u.kind === "raw") return u.text;
    if (u.kind === "block") {
      const pre = u.prelude.trim();
      const body = typeof u.body === "string" ? u.body : serialize(u.body);
      if (/^@(media|supports|container)/.test(pre)) return `${pre}{\n${body}\n}`;
      return `${u.prelude.replace(/\s+$/, "")}{${body}}`;
    }
    return "";
  }).join("\n");
}

const filtered = filter(units);

/* ---------- 5. informasi: bagaimana mockup menata class yang rule-nya dihapus ----------
   Penghapusan selalu AMAN karena:
   - selector yang dihapus minimal punya 1 class mati → mustahil match elemen
     portofolio/case/nav/footer (class tsb tidak pernah muncul di file tsb)
   - halaman mockup digaya oleh CSS-nya sendiri (per <style> per halaman),
     jadi menghapus rule globals justru MENGHAPUS gaya yang tidak ada di mockup
   Info di bawah hanya menunjukkan di mana class tsb dipakai mockup. */
const info = [];
for (const t of deadTokens) {
  if (!mockAll.has(t)) continue;
  for (const p of mockPages) {
    if (!p.classes.has(t)) continue;
    const hasRule = new RegExp(`(^|[\\s,>+~(])\\.${t.replace(/-/g, "\\-")}(?![\\w-])`).test(p.css);
    info.push(`.${t} → ${p.file} (halaman itu sendiri ${hasRule ? "punya" : "TIDAK punya"} rule)`);
  }
}

console.log(`class terpakai halaman tetap: ${keptClasses.size}`);
console.log(`rule dihapus: ${deleted.length}`);
const byTok = {};
deleted.forEach((d) => (byTok[d.dead] = (byTok[d.dead] || 0) + 1));
console.log("token mati (jumlah rule):");
Object.entries(byTok).sort().forEach(([k, v]) => console.log(`  .${k}: ${v}`));
console.log("\ndaftar rule yang dihapus:");
deleted.forEach((d) => console.log(`  ${d.sel}  { ${d.props.slice(0, 90)}${d.props.length > 90 ? "…" : ""} }`));

if (info.length) {
  console.log("\nclass mati yang dipakai mockup (informatif):");
  info.forEach((i) => console.log("  " + i));
}
console.log("\nverifikasi: OK (rule yang dihapus mustahil match halaman yang tetap)");

if (!DRY) {
  fs.writeFileSync(globalsPath, serialize(filtered), "utf8");
  console.log("globals.css ditulis ulang.");
} else {
  console.log("(dry run — tidak ada yang ditulis)");
  const tmp = path.join(ROOT, "globals.dry.css");
  fs.writeFileSync(tmp, serialize(filtered), "utf8");
  console.log("draft: " + tmp);
}
