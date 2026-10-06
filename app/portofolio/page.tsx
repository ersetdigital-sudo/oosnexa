import Nav from "@/components/Nav";
import Link from "next/link";
import { breadcrumb, withAbsoluteUrls } from "@/lib/jsonld";

export const metadata = {
  title: "Portofolio | OOS NEXA | Jasa Pembuatan Sistem Digital Bisnis",
  description:
    "Eksplorasi berbagai solusi digital yang kami bangun untuk membantu bisnis berkembang — sistem operasional, POS dan inventory, dashboard, dan e-commerce.",
  alternates: { canonical: "/portofolio" },
  openGraph: {
    title: "Portofolio | OOS NEXA",
    description:
      "Eksplorasi berbagai solusi digital yang kami bangun untuk membantu bisnis berkembang.",
    url: "/portofolio",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "OOS NEXA — Build Better Grow Smarter",
      },
    ],
  },
};

const ld = breadcrumb([
  { name: "Home", path: "/" },
  { name: "Portofolio", path: "/portofolio" },
]);

export default function PortfolioPage() {
  return (
    <>
      <Nav />

      <main id="top">
        <section className="pf-hero">
          <div className="container">
            <h1>
              Portofolio <span className="hl">Project</span>
            </h1>
            <p>
              Eksplorasi berbagai solusi digital yang kami bangun untuk membantu bisnis
              berkembang.
            </p>
          </div>
        </section>

        <section className="pf-list">
          <div className="container">
            <div className="pf-grid">
              <Link href="/portofolio/erlangga-rental" className="pf-card pf-real reveal">
                <div className="pf-shot pf-abs">
                  <span className="pf-abs-word" aria-hidden="true">RENTAL</span>
                  <div className="pf-abs-tags">
                    <em>Armada</em>
                    <em>Booking</em>
                    <em>Nota Thermal</em>
                  </div>
                  <span className="pf-badge pf-live">Live · Studi Kasus</span>
                </div>
                <div className="pf-body">
                  <span className="pf-cat">Sistem Operasional</span>
                  <h3>Erlangga Rental Mobil</h3>
                  <p>
                    Booking, kontrak sewa, nota thermal, sampai laporan keuangan bulanan —
                    satu sistem PWA yang dipakai langsung dari HP di lapangan.
                  </p>
                  <div className="pf-tags">
                    <em>Next.js</em>
                    <em>Supabase</em>
                    <em>PWA</em>
                  </div>
                  <span className="pf-more">Lihat studi kasus →</span>
                </div>
              </Link>

              <Link href="/portofolio/samaqu" className="pf-card pf-real reveal">
                <div className="pf-shot pf-img">
                  <img
                    src="/images/ead163be-ec6b-401f-bfb6-d30982c781de.jpg"
                    alt="Website SAMAQU"
                    loading="lazy"
                  />
                  <span className="pf-badge pf-live">Live · Studi Kasus</span>
                </div>
                <div className="pf-body">
                  <span className="pf-cat">E-Commerce</span>
                  <h3>SAMAQU: Toko Online Menswear Muslim</h3>
                  <p>
                    Katalog bertingkat, Create Your Price, checkout, verifikasi pembayaran,
                    dan integrasi kurir J&amp;T.
                  </p>
                  <div className="pf-tags">
                    <em>Next.js</em>
                    <em>Supabase</em>
                    <em>J&amp;T API</em>
                  </div>
                  <span className="pf-more">Lihat studi kasus →</span>
                </div>
              </Link>

              <Link href="/portofolio/ut-majene" className="pf-card pf-real reveal">
                <div className="pf-shot pf-abs">
                  <span className="pf-abs-word" aria-hidden="true">MAJENE</span>
                  <div className="pf-abs-tags">
                    <em>Data Pipeline</em>
                    <em>Analitik</em>
                    <em>Laporan</em>
                  </div>
                  <span className="pf-badge pf-live">Studi Kasus</span>
                </div>
                <div className="pf-body">
                  <span className="pf-cat">Dashboard</span>
                  <h3>UT Majene: Dashboard Registrasi Mahasiswa</h3>
                  <p>
                    Data Excel diubah jadi pipeline, dashboard analitik, dan laporan berbasis
                    web.
                  </p>
                  <div className="pf-tags">
                    <em>Supabase</em>
                    <em>Recharts</em>
                    <em>RBAC</em>
                  </div>
                  <span className="pf-more">Lihat studi kasus →</span>
                </div>
              </Link>

              <Link href="/portofolio/laptop-store" className="pf-card pf-real reveal">
                <div className="pf-shot pf-img">
                  <img
                    src="/images/laptop-store/dashboard.png"
                    alt="Dashboard Laptop Store Management System"
                    loading="lazy"
                  />
                  <span className="pf-badge pf-live">Studi Kasus</span>
                </div>
                <div className="pf-body">
                  <span className="pf-cat">POS &amp; Inventory</span>
                  <h3>Laptop Store Management System</h3>
                  <p>
                    Servis, jual-beli unit, stok, sampai laporan laba bersih — satu
                    dashboard untuk seluruh operasional toko laptop.
                  </p>
                  <div className="pf-tags">
                    <em>Next.js</em>
                    <em>Supabase</em>
                    <em>Recharts</em>
                  </div>
                  <span className="pf-more">Lihat studi kasus →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="container reveal">
            <h2>
              Mau Sistem Seperti Ini untuk <span className="hl">Bisnis Anda?</span>
            </h2>
            <p>Ceritakan kebutuhan Anda, kami bantu rancang solusinya.</p>
            <a href="#" className="btn wa-cta">Konsultasi Gratis</a>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withAbsoluteUrls(ld)) }}
      />
    </>
  );
}
