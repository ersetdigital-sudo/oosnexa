import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import { withAbsoluteUrls } from "@/lib/jsonld";
import "./page.css";

const html = readFileSync(path.join(process.cwd(), "content/layanan/integrasi-api-automasi.html"), "utf8");
const schema: { ld: unknown[] } = JSON.parse(
  readFileSync(path.join(process.cwd(), "content/layanan/integrasi-api-automasi.schema.json"), "utf8")
);

export const metadata: Metadata = {
  title: "Jasa Integrasi API & Automasi | OOS NEXA",
  description: "Jasa integrasi API dan automasi workflow untuk bisnis di Indonesia. Hubungkan website, toko online, pembayaran, dan laporan agar data mengalir otomatis.",
  alternates: { canonical: "/layanan/integrasi-api-automasi" },
  openGraph: {
    title: "Jasa Integrasi API & Automasi | OOS NEXA",
    description: "Jasa integrasi API dan automasi workflow untuk bisnis di Indonesia. Hubungkan website, toko online, pembayaran, dan laporan agar data mengalir otomatis.",
    url: "/layanan/integrasi-api-automasi",
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
