import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import { withAbsoluteUrls } from "@/lib/jsonld";
import "./page.css";

const html = readFileSync(path.join(process.cwd(), "content/layanan/business-dashboard.html"), "utf8");
const schema: { ld: unknown[] } = JSON.parse(
  readFileSync(path.join(process.cwd(), "content/layanan/business-dashboard.schema.json"), "utf8")
);

export const metadata: Metadata = {
  title: "Jasa Pembuatan Business Dashboard | OOS NEXA",
  description: "Jasa pembuatan business dashboard custom berbasis web. Satukan data penjualan, stok, keuangan, dan operasional dalam satu tampilan yang mudah dipantau.",
  alternates: { canonical: "/layanan/business-dashboard" },
  openGraph: {
    title: "Jasa Pembuatan Business Dashboard | OOS NEXA",
    description: "Jasa pembuatan business dashboard custom berbasis web. Satukan data penjualan, stok, keuangan, dan operasional dalam satu tampilan yang mudah dipantau.",
    url: "/layanan/business-dashboard",
    type: "website",
    locale: "id_ID",
    siteName: "OOS NEXA",
    images: [{ url: "/images/logo-on.png", width: 1679, height: 937 }],
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
