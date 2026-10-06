import Nav from "@/components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Portofolio | OOS NEXA | Jasa Pembuatan Sistem Digital Bisnis",
};

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
    </>
  );
}
