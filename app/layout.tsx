import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import ClientScripts from "@/components/ClientScripts";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "OOS NEXA | Jasa Pembuatan Sistem Digital Bisnis",
  description:
    "OOS NEXA membangun website, POS, inventory, dashboard, CRM, dan sistem bisnis custom sesuai kebutuhan UMKM dan bisnis di Indonesia. Konsultasi gratis.",
  openGraph: {
    title: "OOS NEXA | Bangun Sistem Digital untuk Bisnis Anda",
    description:
      "Website, POS, inventory, dashboard, CRM, dan sistem bisnis custom yang dibuat sesuai kebutuhan bisnis Anda.",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/api/v2/images/ref/2acebc35-9e60-470d-9279-813f33d60f4f?v=ea032d0f8bc9dc33", width: 1200, height: 640 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap"
          rel="stylesheet"
        />
        {/* icon: Next auto-generate dari app/icon.svg */}
        <link
          rel="apple-touch-icon"
          href="/images/Favicon.png"
        />
        {/* static Google Fonts fallback kept inline */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <style data-moda-export-fonts="true">{fontFaceStyles}</style>
      </head>
      <body>
        <ClientScripts />
        {children}
        <FooterGlobal />
      </body>
    </html>
  );
}


const fontFaceStyles = `
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-thin.ttf') format('truetype'); font-style: normal; font-weight: 100; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-thinitalic.ttf') format('truetype'); font-style: italic; font-weight: 100; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-extralight.ttf') format('truetype'); font-style: normal; font-weight: 200; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-extralightitalic.ttf') format('truetype'); font-style: italic; font-weight: 200; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-light.ttf') format('truetype'); font-style: normal; font-weight: 300; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-lightitalic.ttf') format('truetype'); font-style: italic; font-weight: 300; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-regular.ttf') format('truetype'); font-style: normal; font-weight: 400; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-italic.ttf') format('truetype'); font-style: italic; font-weight: 400; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-medium.ttf') format('truetype'); font-style: normal; font-weight: 500; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-mediumitalic.ttf') format('truetype'); font-style: italic; font-weight: 500; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-semibold.ttf') format('truetype'); font-style: normal; font-weight: 600; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-semibolditalic.ttf') format('truetype'); font-style: italic; font-weight: 600; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-bold.ttf') format('truetype'); font-style: normal; font-weight: 700; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-bolditalic.ttf') format('truetype'); font-style: italic; font-weight: 700; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-extrabold.ttf') format('truetype'); font-style: normal; font-weight: 800; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-extrabolditalic.ttf') format('truetype'); font-style: italic; font-weight: 800; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-black.ttf') format('truetype'); font-style: normal; font-weight: 900; font-display: swap; }
@font-face { font-family: 'Inter'; src: url('/fonts/inter_24pt-blackitalic.ttf') format('truetype'); font-style: italic; font-weight: 900; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-extralight.ttf') format('truetype'); font-style: normal; font-weight: 200; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-extralightitalic.ttf') format('truetype'); font-style: italic; font-weight: 200; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-light.ttf') format('truetype'); font-style: normal; font-weight: 300; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-lightitalic.ttf') format('truetype'); font-style: italic; font-weight: 300; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-regular.ttf') format('truetype'); font-style: normal; font-weight: 400; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-italic.ttf') format('truetype'); font-style: italic; font-weight: 400; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-medium.ttf') format('truetype'); font-style: normal; font-weight: 500; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-mediumitalic.ttf') format('truetype'); font-style: italic; font-weight: 500; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-semibold.ttf') format('truetype'); font-style: normal; font-weight: 600; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-semibolditalic.ttf') format('truetype'); font-style: italic; font-weight: 600; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-bold.ttf') format('truetype'); font-style: normal; font-weight: 700; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-bolditalic.ttf') format('truetype'); font-style: italic; font-weight: 700; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-extrabold.ttf') format('truetype'); font-style: normal; font-weight: 800; font-display: swap; }
@font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/plusjakartasans-extrabolditalic.ttf') format('truetype'); font-style: italic; font-weight: 800; font-display: swap; }
`;

function FooterGlobal() {
  return (
    <footer style={{ position: "relative", overflow: "hidden", padding: "72px 0 28px", background: "linear-gradient(180deg,#0E0E0E,#0A0A0B)", borderTop: "1px solid rgba(255,255,255,.08)" }}>
      <div style={{ position: "absolute", width: "900px", height: "500px", left: "50%", top: "-320px", transform: "translateX(-50%)", borderRadius: "50%", background: "radial-gradient(ellipse,rgba(255,107,53,.10),rgba(40,40,46,.35) 40%,transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative" }}>
        <div className="f-grid">
          <div className="f-brand">
            <a href="#top" className="logo" aria-label="OOS NEXA">
              <img src="/images/fa7f1fb9-03d1-4ee0-988b-e9a8ee0f6ee2.png" alt="OOS NEXA" className="logo-img logo-lg" />
            </a>
            <p className="tagline">
              Build Better <span className="hl">Grow Smarter</span>
            </p>
            <p>
              Website, POS, inventory, dashboard, CRM, dan sistem bisnis custom yang dibuat
              sesuai kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="f-col">
            <h4>Navigasi</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#layanan">Layanan</Link></li>
              <li><Link href="/portofolio">Portofolio</Link></li>
              <li><Link href="/tentang-kami">Tentang Kami</Link></li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Kontak</h4>
            <a href="#" className="wa-card wa-cta">
              <span className="wi">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6-.3.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.6-.1 1.1z" />
                </svg>
              </span>
              <span>
                <small>Chat via WhatsApp</small>
                <b>Konsultasi Gratis</b>
              </span>
            </a>
          </div>
        </div>
        <div className="f-bottom">
          <span>© <span id="yr"></span> OOS NEXA. All rights reserved.</span>
          <span>Build Better. Grow Smarter.</span>
        </div>
      </div>
    </footer>
  );
}
