import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import { withAbsoluteUrls } from "@/lib/jsonld";
import "./page.css";

const html = readFileSync(path.join(process.cwd(), "content/layanan/jasa-pembuatan-website-custom.html"), "utf8");
const schema: { ld: unknown[] } = JSON.parse(
  readFileSync(path.join(process.cwd(), "content/layanan/jasa-pembuatan-website-custom.schema.json"), "utf8")
);

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Custom | OOS NEXA",
  description: "Jasa pembuatan website custom untuk bisnis, mulai dari company profile, landing page hingga website dengan fitur khusus yang sesuai kebutuhan bisnis.",
  alternates: { canonical: "/layanan/jasa-pembuatan-website-custom" },
  openGraph: {
    title: "Jasa Pembuatan Website Custom | OOS NEXA",
    description: "Jasa pembuatan website custom untuk bisnis, mulai dari company profile, landing page hingga website dengan fitur khusus yang sesuai kebutuhan bisnis.",
    url: "/layanan/jasa-pembuatan-website-custom",
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
