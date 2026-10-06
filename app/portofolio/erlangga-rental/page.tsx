import Nav from "@/components/Nav";
import Link from "next/link";
import CaseCover from "@/components/CaseCover";

export const metadata = {
  title: "Studi Kasus Erlangga Rental Mobil | OOS NEXA | Jasa Pembuatan Sistem Digital Bisnis",
};

export default function ErlanggaRentalCaseStudyPage() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* Hero */}
        <section className="cs-hero">
          <div className="container">
            <Link href="/portofolio" className="cs-back">
              ← Kembali ke Portofolio
            </Link>
            <span className="cs-kicker">Studi Kasus · Sistem Operasional · Rental Mobil</span>
            <h1>Erlangga Rental Mobil</h1>
            <p className="lead">
              Satu sistem untuk menjalankan operasional harian rental mobil: dari booking
              dan kontrak sewa, sampai nota thermal dan laporan keuangan bulanan. Dipakai
              langsung dari HP, di lapangan.
            </p>
            <div className="cs-meta">
              <div>
                <small>Klien</small>
                <b>Erlangga Rental Mobil</b>
              </div>
              <div>
                <small>Layanan</small>
                <b>Sistem Operasional &amp; Web App</b>
              </div>
              <div>
                <small>Status</small>
                <b>Production — dipakai harian</b>
              </div>
              <div>
                <small>Peran</small>
                <b>Full-Stack Developer</b>
              </div>
            </div>

            <CaseCover
              ghost="RENTAL"
              label="Kenapa tanpa tampilan sistem?"
              chips={["Armada & Pelanggan", "Booking & Kontrak", "Nota Thermal", "Laporan Keuangan"]}
              note="Sistem ini menangani data pelanggan dan transaksi operasional yang
              sebenarnya. Untuk menghormati privasi klien, tampilan sistem dan tautan
              aksesnya tidak kami tampilkan — yang dibagikan di halaman ini adalah cara
              kerja dan keputusan teknisnya."
            />
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="container">
            <div className="cs-stats">
              <div className="cs-stat reveal">
                <b>10</b>
                <span>Modul operasional</span>
              </div>
              <div className="cs-stat reveal">
                <b>4</b>
                <span>Jenis laporan siap cetak</span>
              </div>
              <div className="cs-stat reveal">
                <b>80mm</b>
                <span>Cetak nota thermal</span>
              </div>
              <div className="cs-stat reveal">
                <b>Asia/Jakarta</b>
                <span>Zona waktu laporan terkunci</span>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="cs-sec">
          <div className="container cs-2">
            <div>
              <span className="num-l">01 — TANTANGAN</span>
              <h2>Operasional rental yang masih manual.</h2>
              <p className="desc">
                Data pelanggan ditulis ulang dari KTP, kontrak dan nota dicetak manual,
                pelanggan bermasalah hanya diingat-ingat, dan denda keterlambatan dihitung
                pakai perkiraan. Di akhir bulan, laba bersih jadi tebakan.
              </p>
            </div>
            <div className="cs-card reveal">
              <span className="num-l">SEBELUM → SESUDAH</span>
              <h3>Catat di banyak tempat → Satu sistem terhubung</h3>
              <p>
                Armada, pelanggan, booking, kas, dan laporan saling terhubung: satu
                transaksi langsung mengubah status mobil, kas, dan laporan sekaligus.
              </p>
            </div>
          </div>
        </section>

        {/* Alur */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">02 — ALUR OPERASIONAL</span>
            <h2>Dari booking sampai laporan.</h2>
            <p className="desc">
              Seluruh alur harian ditutup dalam satu sistem, sehingga tidak ada data yang
              menumpuk di buku catatan atau chat tim.
            </p>
            <ol className="cs-flow">
              <li>
                <b>01</b>
                <div>
                  Armada &amp; pelanggan
                  <small>
                    Tarif harian, status ketersediaan, dan foto unit — plus data pelanggan
                    dengan scan KTP (OCR) serta daftar blacklist otomatis.
                  </small>
                </div>
              </li>
              <li>
                <b>02</b>
                <div>
                  Booking &amp; kontrak sewa
                  <small>
                    Durasi dan total biaya terhitung otomatis mengikuti tarif unit; denda
                    keterlambatan dihitung otomatis saat mobil dikembalikan.
                  </small>
                </div>
              </li>
              <li>
                <b>03</b>
                <div>
                  Pembayaran, nota &amp; QRIS
                  <small>
                    Status lunas atau belum bayar, cetak nota thermal 80mm dan PDF, sampai
                    halaman QRIS untuk pembayaran cashless.
                  </small>
                </div>
              </li>
              <li>
                <b>04</b>
                <div>
                  Pengeluaran &amp; laporan
                  <small>
                    Servis, pajak, dan biaya lain tercatat sebagai pengeluaran sehingga laba
                    bersih diambil dari angka nyata.
                  </small>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Modul */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">03 — SOLUSI</span>
            <h2>Modul yang dibangun.</h2>
            <div className="cs-cards">
              <div className="cs-card reveal">
                <i>01</i>
                <h3>Dashboard operasional</h3>
                <p>
                  Ringkasan real-time: armada tersedia dan sedang disewa, booking aktif,
                  serta pendapatan bulan berjalan.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>02</i>
                <h3>Manajemen armada</h3>
                <p>CRUD mobil beserta tarif harian, status ketersediaan, dan foto unit.</p>
              </div>
              <div className="cs-card reveal">
                <i>03</i>
                <h3>Data pelanggan + scan KTP</h3>
                <p>
                  NIK unik, foto KTP diunggah, OCR membaca NIK, nama, dan alamat — form
                  terisi sendiri tanpa ketik ulang.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>04</i>
                <h3>Blacklist otomatis</h3>
                <p>
                  Saat NIK pelanggan bermasalah muncul di form booking, sistem memberi
                  peringatan sebelum transaksi berjalan.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>05</i>
                <h3>Booking &amp; kontrak sewa</h3>
                <p>
                  Pilih mobil dan pelanggan, durasi serta total biaya dihitung otomatis
                  mengikuti tarif unit.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>06</i>
                <h3>Laporan &amp; keuangan</h3>
                <p>
                  Laporan bulanan, tahunan, pengeluaran, dan riwayat rental — siap cetak
                  dengan filter waktu terkunci ke Asia/Jakarta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Keamanan */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">04 — KEAMANAN &amp; DETAIL TEKNIS</span>
            <h2>Aman dipakai di lapangan.</h2>
            <div className="cs-cards cs-4">
              <div className="cs-card reveal">
                <h3>Row Level Security</h3>
                <p>Aktif di seluruh tabel, jadi database menjaga dirinya sendiri.</p>
              </div>
              <div className="cs-card reveal">
                <h3>Auth guard di middleware</h3>
                <p>Seluruh route privat dijaga sebelum halaman dirender.</p>
              </div>
              <div className="cs-card reveal">
                <h3>Proses berat di server</h3>
                <p>OCR dan upload diproses di server, kredensial tidak pernah sampai ke browser.</p>
              </div>
              <div className="cs-card reveal">
                <h3>Timezone safety</h3>
                <p>Filter dashboard dan laporan dikunci ke Asia/Jakarta tanpa drift.</p>
              </div>
            </div>
            <p className="desc" style={{ marginTop: "30px" }}>
              Dibangun mobile-first sebagai PWA: bisa di-install ke home screen HP dan
              berjalan mulus seperti web app, tanpa perlu lewat app store.
            </p>
          </div>
        </section>

        {/* Tech */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">05 — TEKNOLOGI</span>
            <h2>Tech stack.</h2>
            <div className="cs-stack">
              <em>Next.js (App Router)</em>
              <em>React 19</em>
              <em>TypeScript</em>
              <em>Tailwind CSS</em>
              <em>Supabase / PostgreSQL</em>
              <em>Supabase Auth</em>
              <em>Row Level Security</em>
              <em>Cloudinary</em>
              <em>OCR.space</em>
              <em>PWA</em>
              <em>Vercel</em>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final">
          <div className="container reveal">
            <h2>
              Operasional Anda Masih <span className="hl">Dikerjakan Manual?</span>
            </h2>
            <p>
              Booking, stok, nota, sampai laporan keuangan bisa jalan dari satu sistem.
              Ceritakan alur bisnisnya, kami bantu petakan dan bangun.
            </p>
            <a href="#" className="btn wa-cta">Konsultasi Gratis</a>
          </div>
        </section>
      </main>
    </>
  );
}
