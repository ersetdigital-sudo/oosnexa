import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import { withAbsoluteUrls } from "@/lib/jsonld";
import "./page.css";

const html = readFileSync(path.join(process.cwd(), "content/layanan.html"), "utf8");
const schema: { ld: unknown[] } = JSON.parse(
  readFileSync(path.join(process.cwd(), "content/layanan.schema.json"), "utf8")
);

export const metadata: Metadata = {
  title: "Layanan Website, Sistem Bisnis & Automasi | OOS NEXA",
  description: "Layanan OOS NEXA: jasa pembuatan website custom, sistem POS dan inventory, dashboard bisnis, e-commerce, CRM, web app custom, integrasi API, dan landing page.",
  alternates: { canonical: "/layanan" },
  openGraph: {
    title: "Layanan Website, Sistem Bisnis & Automasi | OOS NEXA",
    description: "Layanan OOS NEXA: jasa pembuatan website custom, sistem POS dan inventory, dashboard bisnis, e-commerce, CRM, web app custom, integrasi API, dan landing page.",
    url: "/layanan",
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
