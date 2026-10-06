import Nav from "@/components/Nav";
import Link from "next/link";
import { breadcrumb, withAbsoluteUrls } from "@/lib/jsonld";

const SOURCE_URL = "https://surya32.vercel.app/laptop-store";

export const metadata = {
  title: "Studi Kasus Laptop Store Management System | OOS NEXA",
  description:
    "Studi kasus sistem POS dan inventory: servis, jual-beli unit, dan stok dalam satu dashboard, lengkap dengan nota PDF ke WhatsApp dan laporan laba bersih.",
  alternates: { canonical: "/portofolio/laptop-store" },
  openGraph: {
    title: "Studi Kasus Laptop Store Management System | OOS NEXA",
    description:
      "Servis, jual-beli unit, dan stok barang dalam satu dashboard, dengan nota PDF ke WhatsApp dan laporan laba bersih.",
    url: "/portofolio/laptop-store",
    type: "article",
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
  { name: "Laptop Store Management System", path: "/portofolio/laptop-store" },
]);

export default function LaptopStoreCaseStudyPage() {
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
            <span className="cs-kicker">Studi Kasus · Sistem POS &amp; Inventory · 2026</span>
            <h1>Laptop Store Management System</h1>
            <p className="lead">
              Servis, jual-beli unit, dan stok barang dijadikan satu dashboard — dengan nota
              PDF yang dikirim langsung ke WhatsApp pelanggan dan laporan laba bersih yang
              dihitung dari transaksi berjalan.
            </p>

            <div className="cs-meta">
              <div>
                <small>Peran</small>
                <b>Full-Stack Developer</b>
              </div>
              <div>
                <small>Tahun</small>
                <b>2026</b>
              </div>
              <div>
                <small>Tipe</small>
                <b>Software Engineering Project</b>
              </div>
              <div>
                <small>Lingkup</small>
                <b>Servis · Unit · Stok · Laporan</b>
              </div>
            </div>

            <div className="cs-shot reveal">
              <div className="cs-bar">
                <b /><b /><b />
                <span>dashboard · omzet, profit &amp; biaya operasional</span>
              </div>
              <img
                src="/images/laptop-store/dashboard.png"
                alt="Dashboard Laptop Store Management System"
              />
            </div>
            <p className="dm-note">Screenshot asli dari sistem.</p>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="container">
            <div className="cs-stats">
              <div className="cs-stat reveal">
                <b>3</b>
                <span>Lini bisnis dalam satu sistem</span>
              </div>
              <div className="cs-stat reveal">
                <b>2</b>
                <span>Role: admin &amp; karyawan</span>
              </div>
              <div className="cs-stat reveal">
                <b>PDF</b>
                <span>Nota servis &amp; invoice unit</span>
              </div>
              <div className="cs-stat reveal">
                <b>WhatsApp</b>
                <span>Nota langsung ke pelanggan</span>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="cs-sec">
          <div className="container cs-2">
            <div>
              <span className="num-l">01 — TANTANGAN</span>
              <h2>Tiga lini bisnis, satu angka yang harus cocok.</h2>
              <p className="desc">
                Toko laptop menjalankan jasa servis, jual-beli unit, dan inventory barang
                sekaligus. Ketika tiap lini dicatat di tempat terpisah, stok dan angka
                keuangan gampang selisih — dan laba bersih di akhir bulan jadi perkiraan,
                bukan angka.
              </p>
            </div>
            <div className="cs-card reveal">
              <span className="num-l">SEBELUM → SESUDAH</span>
              <h3>Pencatatan manual per lini → Satu dashboard yang saling terhubung</h3>
              <p>
                Semua transaksi tercatat real-time: stok ikut bergerak otomatis, dan laba
                bersih dihitung dari transaksi berjalan — omzet dikurangi biaya operasional,
                bukan cuma omzet kotor.
              </p>
            </div>
          </div>
        </section>

        {/* Alur */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">02 — ALUR OPERASIONAL</span>
            <h2>Dari meja servis sampai laba bersih.</h2>
            <p className="desc">
              Satu transaksi menggerakkan stok, dokumen, dan laporan sekaligus, sehingga
              tidak ada angka yang dihitung ulang manual.
            </p>
            <ol className="cs-flow">
              <li>
                <b>01</b>
                <div>
                  Servis pelanggan
                  <small>
                    Input servis beserta sparepart yang dipakai — stok terpotong otomatis.
                    Selesai dan dibayar, nota PDF ter-generate lalu dikirim ke WhatsApp
                    pelanggan lewat satu tombol.
                  </small>
                </div>
              </li>
              <li>
                <b>02</b>
                <div>
                  Beli &amp; jual unit
                  <small>
                    Pembelian menambah stok unit, penjualan memotongnya. Margin per unit dan
                    invoice ikut terhitung sendiri dari harga beli, harga jual, dan biaya
                    reparasi.
                  </small>
                </div>
              </li>
              <li>
                <b>03</b>
                <div>
                  Stok &amp; mutasi barang
                  <small>
                    Kartu stok mencatat setiap masuk dan keluar beserta keterangannya,
                    lengkap dengan penyesuaian stok dan peringatan saat barang menipis.
                  </small>
                </div>
              </li>
              <li>
                <b>04</b>
                <div>
                  Laporan &amp; laba bersih
                  <small>
                    Biaya operasional — sewa, listrik, gaji — masuk ke dalam hitungan, jadi
                    laporan harian dan bulanan menampilkan laba bersih, bukan sekadar omzet.
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
                <h3>Dashboard analitik</h3>
                <p>
                  Omzet, profit, dan biaya operasional per periode — lengkap dengan tren
                  bulanan, profit per kategori, serta produk dan customer teratas.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>02</i>
                <h3>Manajemen servis</h3>
                <p>
                  Status tracking dari proses ke selesai, pemakaian sparepart yang memotong
                  stok otomatis, nota PDF, dan notifikasi WhatsApp.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>03</i>
                <h3>Unit laptop</h3>
                <p>
                  Pembelian dan penjualan multi-item dengan keranjang, down payment,
                  garansi, bonus, serta margin yang terhitung per unit.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>04</i>
                <h3>Stok barang</h3>
                <p>
                  Sparepart dan unit laptop dengan kartu stok, penyesuaian, kategori, dan
                  peringatan stok menipis.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>05</i>
                <h3>Kwitansi pembelian supplier</h3>
                <p>
                  Beberapa item dalam satu kwitansi dengan nomor otomatis, update stok dan
                  pengeluaran, cetak PDF — dan pembatalan yang me-rollback stok sendiri.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>06</i>
                <h3>Laporan keuangan</h3>
                <p>
                  Laba bersih harian, bulanan, dan tahunan dengan rincian laba rugi, plus
                  riwayat penjualan dan invoice PDF.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Otomasi */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">04 — OTOMASI &amp; DETAIL TEKNIS</span>
            <h2>Angka yang tidak dihitung ulang.</h2>
            <div className="cs-cards cs-4">
              <div className="cs-card reveal">
                <h3>Stok bergerak sendiri</h3>
                <p>
                  Servis memotong stok, pembelian menambah, pembatalan melakukan rollback —
                  tanpa hitung ulang manual.
                </p>
              </div>
              <div className="cs-card reveal">
                <h3>Dokumen PDF</h3>
                <p>
                  Nota servis, kwitansi supplier, invoice penjualan, dan laporan digenerate
                  langsung dari sistem.
                </p>
              </div>
              <div className="cs-card reveal">
                <h3>Hak akses per role</h3>
                <p>
                  Admin mengakses semuanya; karyawan hanya input servis dan kirim nota, data
                  keuangan unit tetap terjaga.
                </p>
              </div>
              <div className="cs-card reveal">
                <h3>Notifikasi WhatsApp</h3>
                <p>
                  Perubahan status servis dan notanya dikirim ke pelanggan tanpa keluar dari
                  sistem.
                </p>
              </div>
            </div>
            <p className="desc" style={{ marginTop: "30px" }}>
              Dibangun sebagai web yang nyaman dibuka dari HP atau tablet di meja servis,
              lengkap dengan log aktivitas transaksi sebagai jejak audit sederhana.
            </p>
          </div>
        </section>

        {/* Tech */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">05 — TEKNOLOGI</span>
            <h2>Tech stack.</h2>
            <div className="cs-stack">
              <em>Next.js 16 (App Router)</em>
              <em>React 19</em>
              <em>TypeScript</em>
              <em>Supabase / PostgreSQL</em>
              <em>Supabase Auth</em>
              <em>Row Level Security</em>
              <em>Tailwind CSS 4</em>
              <em>shadcn/ui</em>
              <em>Recharts</em>
              <em>@react-pdf/renderer</em>
            </div>
            <p className="desc" style={{ marginTop: "28px" }}>
              Sumber:{" "}
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--orange)" }}
              >
                surya32.vercel.app/laptop-store
              </a>
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final">
          <div className="container reveal">
            <h2>
              Catatan Toko Anda Masih <span className="hl">Terpisah-pisah?</span>
            </h2>
            <p>
              Servis, penjualan, stok, sampai laba bersih bisa jalan dari satu sistem.
              Ceritakan alur bisnisnya, kami bantu petakan dan bangun.
            </p>
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
