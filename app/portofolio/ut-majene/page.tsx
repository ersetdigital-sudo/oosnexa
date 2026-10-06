import Nav from "@/components/Nav";
import Link from "next/link";
import CaseCover from "@/components/CaseCover";

export const metadata = {
  title: "Studi Kasus UT Majene | OOS NEXA | Jasa Pembuatan Sistem Digital Bisnis",
};

export default function UTMajeneCaseStudyPage() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* Hero */}
        <section className="cs-hero">
          <div className="container">
            <a href="/portofolio" className="cs-back">
              ← Kembali ke Portofolio
            </a>
            <span className="cs-kicker">Studi Kasus · Dashboard · 2026</span>
            <h1>UT Majene</h1>
            <p className="lead">
              Dashboard monitoring registrasi mahasiswa yang mengubah tumpukan file Excel menjadi
              data pipeline, dashboard analitik, dan sistem laporan berbasis web.
            </p>
            <div className="cs-meta">
              <div>
                <small>Klien</small>
                <b>UT Majene</b>
              </div>
              <div>
                <small>Layanan</small>
                <b>Business Dashboard</b>
              </div>
              <div>
                <small>Status</small>
                <b>Production &amp; maintenance</b>
              </div>
              <div>
                <small>Tipe</small>
                <b>Institutional Project</b>
              </div>
            </div>

            <CaseCover
              ghost="MAJENE"
              label="Kenapa tanpa tampilan aplikasi?"
              chips={["Upload Excel", "Data Pipeline", "Analitik", "Laporan Ekspor"]}
              note="Dashboard ini memuat data registrasi mahasiswa milik institusi. Karena
              datanya bersifat internal, tampilan sistem dan tautan aksesnya tidak kami
              tampilkan — yang dibagikan di halaman ini adalah alur datanya dan keputusan
              teknis di baliknya."
            />
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="container">
            <div className="cs-stats">
              <div className="cs-stat reveal">
                <b>5</b>
                <span>Modul dashboard</span>
              </div>
              <div className="cs-stat reveal">
                <b>4</b>
                <span>Tahap data pipeline</span>
              </div>
              <div className="cs-stat reveal">
                <b>2</b>
                <span>Level akses: admin &amp; viewer</span>
              </div>
              <div className="cs-stat reveal">
                <b>1</b>
                <span>Sumber data tunggal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="cs-sec">
          <div className="container cs-2">
            <div>
              <span className="num-l">01 — TANTANGAN</span>
              <h2>Data penting, terjebak di Excel.</h2>
              <p className="desc">
                Data registrasi mahasiswa awalnya tersebar di banyak file Excel. Untuk memantau
                admisi, pembayaran, registrasi, realisasi mahasiswa baru, dan performa SALUT,
                tim harus membuka file satu per satu. Datanya perlu bisa dibaca cepat, difilter,
                dan diekspor.
              </p>
            </div>
            <div className="cs-card reveal">
              <span className="num-l">SEBELUM → SESUDAH</span>
              <h3>Buka file satu-satu → Satu dashboard</h3>
              <p>Upload Excel, sistem yang merapikan, dan dashboard langsung terisi.</p>
            </div>
          </div>
        </section>

        {/* Data flow */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">02 — ALUR DATA</span>
            <h2>Dari Excel ke dashboard.</h2>
            <p className="desc">
              Alur kerja manual diubah jadi pipeline otomatis: upload → parsing → transformasi →
              database → dashboard.
            </p>
            <ol className="cs-flow">
              <li>
                <b>01</b>
                <div>
                  Upload
                  <small>
                    File Excel diunggah lewat web app, diproses dengan SheetJS.
                  </small>
                </div>
              </li>
              <li>
                <b>02</b>
                <div>
                  Parsing &amp; transformasi
                  <small>
                    Data dibersihkan dan dipetakan ke struktur tabel yang konsisten.
                  </small>
                </div>
              </li>
              <li>
                <b>03</b>
                <div>
                  PostgreSQL via Supabase
                  <small>Satu sumber data untuk seluruh modul.</small>
                </div>
              </li>
              <li>
                <b>04</b>
                <div>
                  Dashboard &amp; laporan
                  <small>
                    Grafik, filter, export Excel/PDF, dan print.
                  </small>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Moduls */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">03 — SOLUSI</span>
            <h2>Modul yang dibangun.</h2>
            <div className="cs-cards">
              <div className="cs-card reveal">
                <i>01</i>
                <h3>Monitoring utama</h3>
                <p>
                  Admisi, pembayaran, registrasi, realisasi mahasiswa baru, dan performa SALUT.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>02</i>
                <h3>Data &amp; Ranking SALUT</h3>
                <p>Modul khusus untuk melihat dan memeringkat performa SALUT.</p>
              </div>
              <div className="cs-card reveal">
                <i>03</i>
                <h3>Data Table</h3>
                <p>Tampilan tabel dengan filter untuk menelusuri data detail.</p>
              </div>
              <div className="cs-card reveal">
                <i>04</i>
                <h3>Charts &amp; Analytics</h3>
                <p>Visualisasi tren dan komposisi data dengan Recharts.</p>
              </div>
              <div className="cs-card reveal">
                <i>05</i>
                <h3>Reports</h3>
                <p>Export Excel/PDF dan print untuk kebutuhan pelaporan.</p>
              </div>
              <div className="cs-card reveal">
                <i>06</i>
                <h3>Akses bertingkat</h3>
                <p>Hak akses admin dan viewer dipisah, dilindungi sampai level database.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">04 — AKSES &amp; KEAMANAN</span>
            <h2>Data institusi tetap aman.</h2>
            <div className="cs-cards cs-4">
              <div className="cs-card reveal">
                <h3>Supabase Auth</h3>
                <p>Autentikasi pengguna untuk seluruh sistem.</p>
              </div>
              <div className="cs-card reveal">
                <h3>Role-based access</h3>
                <p>Pemisahan hak akses admin dan viewer.</p>
              </div>
              <div className="cs-card reveal">
                <h3>Middleware protection</h3>
                <p>Halaman dilindungi sebelum dirender.</p>
              </div>
              <div className="cs-card reveal">
                <h3>Row Level Security</h3>
                <p>Pembatasan akses langsung di level database.</p>
              </div>
            </div>
            <p className="desc" style={{ marginTop: "30px" }}>
              Setelah rilis, kami menangani deployment, maintenance, dan pengembangan lanjutan
              sesuai kebutuhan monitoring yang terus berkembang.
            </p>
          </div>
        </section>

        {/* Tech */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">05 — TEKNOLOGI</span>
            <h2>Tech stack.</h2>
            <div className="cs-stack">
              <em>Next.js</em>
              <em>TypeScript</em>
              <em>Supabase / PostgreSQL</em>
              <em>Supabase Auth</em>
              <em>Row Level Security</em>
              <em>SheetJS</em>
              <em>Recharts</em>
              <em>Export Excel/PDF</em>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final">
          <div className="container reveal">
            <h2>
              Data Bisnis Anda Masih <span className="hl">Tersebar di Excel?</span>
            </h2>
            <p>
              Kami ubah jadi dashboard yang rapi, aman, dan siap dipakai untuk mengambil
              keputusan.
            </p>
            <a href="#" className="btn wa-cta">Konsultasi Gratis</a>
          </div>
        </section>
      </main>
    </>
  );
}
