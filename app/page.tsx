import Nav from "@/components/Nav";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="reveal">
              <h1>
                Bangun <span className="hl">Sistem Digital</span> untuk Bisnis Anda
              </h1>
              <p className="lead">
                Website, POS, inventory, dashboard, CRM, dan sistem bisnis custom yang
                dibuat sesuai kebutuhan bisnis Anda.
              </p>
              <p className="support">
                Berhenti mengandalkan Excel, WhatsApp, dan tools yang terpisah-pisah. Kami
                membantu membangun sistem bisnis terintegrasi yang membuat operasional lebih
                rapi, data lebih mudah dikontrol, dan proses kerja lebih efisien.
              </p>
              <a href="#" className="btn wa-cta">
                Konsultasi Gratis
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className="mock reveal" aria-label="Ilustrasi tampilan dashboard bisnis" role="img">
              <div className="mock-top">
                <i /><i /><i />
              </div>
              <div className="stats">
                <div className="stat">
                  <small>Penjualan</small>
                  <div className="bar-ph o" />
                  <div className="bar-ph s" />
                </div>
                <div className="stat">
                  <small>Stok</small>
                  <div className="bar-ph" style={{ width: "75%" }} />
                  <div className="bar-ph s" />
                </div>
                <div className="stat">
                  <small>Customer</small>
                  <div className="bar-ph" style={{ width: "55%" }} />
                  <div className="bar-ph s" />
                </div>
              </div>
              <div className="chart">
                <small>Grafik penjualan</small>
                <div className="bars">
                  <span style={{ height: "40%" }} />
                  <span style={{ height: "58%" }} />
                  <span style={{ height: "46%" }} />
                  <span style={{ height: "70%" }} />
                  <span style={{ height: "62%" }} />
                  <span className="on" style={{ height: "86%" }} />
                  <span style={{ height: "66%" }} />
                </div>
              </div>
              <div className="rows">
                <div className="row-ph">
                  <b />
                  <div className="bar-ph" />
                  <em />
                </div>
                <div className="row-ph">
                  <b />
                  <div className="bar-ph" style={{ maxWidth: "70%" }} />
                  <em />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="layanan" className="services">
          <div className="container">
            <div className="head reveal">
              <h2>Apa yang Bisa <span className="hl">Kami Bangun</span></h2>
            </div>
            <div className="cards">
              <span className="ambient a1" aria-hidden="true" />
              <span className="ambient a2" aria-hidden="true" />

              <article className="card reveal">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
                  </svg>
                </div>
                <h3>Custom Website</h3>
                <p>Website profesional untuk brand dan bisnis Anda.</p>
              </article>

              <article className="card reveal">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M8 18h8" />
                  </svg>
                </div>
                <h3>POS dan Inventory</h3>
                <p>Kelola transaksi, stok, dan laporan dalam satu sistem.</p>
              </article>

              <article className="card reveal">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                  </svg>
                </div>
                <h3>Business Dashboard</h3>
                <p>Pantau penjualan dan performa bisnis secara real-time.</p>
              </article>

              <article className="card reveal">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 4h2l2.5 11h11L21 7H6.5" />
                    <circle cx="9" cy="19" r="1.5" />
                    <circle cx="17" cy="19" r="1.5" />
                  </svg>
                </div>
                <h3>E-Commerce</h3>
                <p>Toko online lengkap dari katalog sampai checkout.</p>
              </article>

              <article className="card reveal">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5c1.8.6 3 2.4 3.5 5" />
                  </svg>
                </div>
                <h3>CRM</h3>
                <p>Kelola customer, follow-up, dan aktivitas sales.</p>
              </article>

              <article className="card reveal">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
                  </svg>
                </div>
                <h3>Custom Web Application</h3>
                <p>Web app dengan workflow sesuai bisnis Anda.</p>
              </article>

              <article className="card reveal">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
                  </svg>
                </div>
                <h3>Automation dan API Integration</h3>
                <p>Hubungkan WhatsApp, payment, dan marketplace.</p>
              </article>

              <article className="card reveal">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 9h18M7 13h6M7 16h4M15 13h2v3h-2z" />
                  </svg>
                </div>
                <h3>Landing Page</h3>
                <p>Halaman promosi cepat yang fokus pada konversi.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="problem">
          <div className="container problem-grid">
            <div className="reveal">
              <h2>
                Bisnis Anda Masih Banyak <span className="hl">Proses Manual?</span>
              </h2>
              <p className="closing">Kami ubah proses tersebut menjadi sistem digital yang terintegrasi.</p>
            </div>
            <ul className="pains reveal">
              <li>
                <span className="x">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                Excel berantakan.
              </li>
              <li>
                <span className="x">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                Data tersebar.
              </li>
              <li>
                <span className="x">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                Admin input berkali-kali.
              </li>
              <li>
                <span className="x">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                Stok tidak sinkron.
              </li>
              <li>
                <span className="x">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                Laporan dibuat manual.
              </li>
              <li>
                <span className="x">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                Customer sulit dilacak.
              </li>
            </ul>
          </div>
        </section>

        {/* Custom */}
        <section className="light">
          <div className="container custom-box">
            <div className="reveal">
              <h2>
                Dibuat Sesuai <span className="hl">Bisnis Anda</span>
              </h2>
            </div>
            <div className="reveal">
              <p className="lead">
                Tidak perlu menyesuaikan bisnis dengan software yang sudah jadi. Kami yang
                menyesuaikan sistem dengan workflow bisnis Anda.
              </p>
              <p className="support2">
                Mulai dari analisis kebutuhan, desain UI/UX, development, integrasi, testing
                hingga deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section id="proses">
          <div className="container">
            <div className="head reveal">
              <h2>
                Dari Ide Menjadi <span className="hl">Sistem Siap Pakai</span>
              </h2>
            </div>
            <ol className="steps">
              <li className="step reveal">
                <span className="num">01</span>
                <h3>Konsultasi</h3>
                <p>Ceritakan bisnis dan kebutuhan Anda.</p>
              </li>
              <li className="step reveal">
                <span className="num">02</span>
                <h3>Analisis</h3>
                <p>Kami menentukan fitur, workflow, dan struktur sistem.</p>
              </li>
              <li className="step reveal">
                <span className="num">03</span>
                <h3>Development</h3>
                <p>Sistem dibangun sesuai scope project.</p>
              </li>
              <li className="step reveal">
                <span className="num">04</span>
                <h3>Testing</h3>
                <p>Fitur diuji sebelum digunakan.</p>
              </li>
              <li className="step reveal">
                <span className="num">05</span>
                <h3>Deployment</h3>
                <p>Sistem siap digunakan untuk operasional bisnis.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Tech */}
        <section id="teknologi" className="light tech">
          <div className="container">
            <div className="head center reveal">
              <h2>
                Modern Stack <span className="hl">Solid Systems</span>
              </h2>
            </div>
            <div className="pills reveal">
              <span className="pill">
                <img src="/images/nextjs-original.svg" alt="" width="18" height="18" style={{ verticalAlign: "-4px", marginRight: "8px" }} />
                Next.js
              </span>
              <span className="pill">
                <img src="/images/react-original.svg" alt="" width="18" height="18" style={{ verticalAlign: "-4px", marginRight: "8px" }} />
                React
              </span>
              <span className="pill">
                <img src="/images/typescript-original.svg" alt="" width="18" height="18" style={{ verticalAlign: "-4px", marginRight: "8px" }} />
                TypeScript
              </span>
              <span className="pill">
                <img src="/images/postgresql-original.svg" alt="" width="18" height="18" style={{ verticalAlign: "-4px", marginRight: "8px" }} />
                PostgreSQL
              </span>
              <span className="pill">
                <img src="/images/supabase-original.svg" alt="" width="18" height="18" style={{ verticalAlign: "-4px", marginRight: "8px" }} />
                Supabase
              </span>
              <span className="pill">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ verticalAlign: "-4px", marginRight: "8px" }}
                >
                  <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                  <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                API Integration
              </span>
            </div>
            <p className="lead reveal" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
              Menggunakan teknologi yang tepat untuk membangun website dan sistem yang cepat,
              fleksibel, dan mudah dikembangkan.
            </p>
          </div>
        </section>

        {/* Cost */}
        <section id="biaya">
          <div className="container">
            <div className="cost-card reveal">
              <div>
                <h2>
                  Berapa <span className="hl">Biayanya?</span>
                </h2>
                <p>
                  Tidak ada harga paket yang dipaksakan untuk semua bisnis. Harga disesuaikan
                  dengan kebutuhan dan kompleksitas sistem. Website sederhana, dashboard, POS,
                  inventory, sampai custom web application memiliki scope yang berbeda.
                </p>
              </div>
              <div>
                <a href="#" className="btn wa-cta">Minta Estimasi Project</a>
              </div>
            </div>
          </div>
        </section>

        {/* Final */}
        <section className="final">
          <div className="container reveal">
            <h2>
              Punya Ide Sistem untuk <span className="hl">Bisnis Anda?</span>
            </h2>
            <p>
              Ceritakan kebutuhan Anda. Tidak perlu tahu istilah teknis. Tidak perlu membuat
              specification sendiri. Cukup jelaskan bisnis Anda dan masalah yang ingin
              diselesaikan. Kami bantu menerjemahkannya menjadi sistem digital yang bisa
              digunakan.
            </p>
            <p className="label">Konsultasikan Project Anda</p>
            <a href="#" className="btn wa-cta">Mulai Konsultasi</a>
          </div>
        </section>
      </main>
    </>
  );
}
