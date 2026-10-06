import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import { withAbsoluteUrls } from "@/lib/jsonld";
import "./page.css";

const html = readFileSync(path.join(process.cwd(), "content/layanan/crm.html"), "utf8");
const schema: { ld: unknown[] } = JSON.parse(
  readFileSync(path.join(process.cwd(), "content/layanan/crm.schema.json"), "utf8")
);

export const metadata: Metadata = {
  title: "Jasa Pembuatan CRM Custom untuk Bisnis | OOS NEXA",
  description: "Jasa pembuatan CRM custom berbasis web. Kelola data pelanggan, pipeline penjualan, follow-up, dan riwayat transaksi dalam satu sistem sesuai alur bisnis Anda.",
  alternates: { canonical: "/layanan/crm" },
  openGraph: {
    title: "Jasa Pembuatan CRM Custom untuk Bisnis | OOS NEXA",
    description: "Jasa pembuatan CRM custom berbasis web. Kelola data pelanggan, pipeline penjualan, follow-up, dan riwayat transaksi dalam satu sistem sesuai alur bisnis Anda.",
    url: "/layanan/crm",
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
