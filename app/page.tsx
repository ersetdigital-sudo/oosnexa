import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import HomeCta from "@/components/HomeCta";
import { withAbsoluteUrls } from "@/lib/jsonld";
import "./page.css";

// Section #kontak dirender oleh <HomeCta /> (JSX) — buang versi statisnya
// dari content/home.html supaya tidak muncul dua kali.
const html = readFileSync(path.join(process.cwd(), "content/home.html"), "utf8").replace(
  /<section id="kontak"[\s\S]*?<\/section>/,
  ""
);
const schema: { ld: unknown[] } = JSON.parse(
  readFileSync(path.join(process.cwd(), "content/home.schema.json"), "utf8")
);

export const metadata: Metadata = {
  title: "OOS NEXA | Website, Sistem Bisnis & Web App Custom",
  description: "OOS NEXA membangun website, sistem bisnis, custom web app, e-commerce, serta integrasi dan automasi yang disesuaikan dengan workflow bisnis Anda.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OOS NEXA | Website, Sistem Bisnis & Web App Custom",
    description: "OOS NEXA membangun website, sistem bisnis, custom web app, e-commerce, serta integrasi dan automasi yang disesuaikan dengan workflow bisnis Anda.",
    url: "/",
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
      <main id="top">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <HomeCta />
      </main>
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
