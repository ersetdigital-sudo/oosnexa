import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import { withAbsoluteUrls } from "@/lib/jsonld";
import "./page.css";

const html = readFileSync(path.join(process.cwd(), "content/layanan/toko-online-custom.html"), "utf8");
const schema: { ld: unknown[] } = JSON.parse(
  readFileSync(path.join(process.cwd(), "content/layanan/toko-online-custom.schema.json"), "utf8")
);

export const metadata: Metadata = {
  title: "Jasa Pembuatan Toko Online Custom | OOS NEXA",
  description: "Jasa pembuatan toko online custom untuk bisnis. Website e-commerce milik sendiri dengan katalog produk, checkout, pembayaran, ongkir, dan manajemen pesanan sesuai kebutuhan.",
  alternates: { canonical: "/layanan/toko-online-custom" },
  openGraph: {
    title: "Jasa Pembuatan Toko Online Custom | OOS NEXA",
    description: "Jasa pembuatan toko online custom untuk bisnis. Website e-commerce milik sendiri dengan katalog produk, checkout, pembayaran, ongkir, dan manajemen pesanan sesuai kebutuhan.",
    url: "/layanan/toko-online-custom",
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
