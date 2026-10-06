import Nav from "@/components/Nav";
import Link from "next/link";
import { breadcrumb, withAbsoluteUrls } from "@/lib/jsonld";

export const metadata = {
  title: "Studi Kasus SAMAQU | OOS NEXA",
  description:
    "Studi kasus platform e-commerce menswear muslim: katalog bertingkat, harga fleksibel, checkout, verifikasi pembayaran, dan pengiriman multi-kurir.",
  alternates: { canonical: "/portofolio/samaqu" },
  openGraph: {
    title: "Studi Kasus SAMAQU | OOS NEXA",
    description:
      "Katalog bertingkat, harga fleksibel, checkout, verifikasi pembayaran, dan pengiriman multi-kurir.",
    url: "/portofolio/samaqu",
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
  { name: "SAMAQU", path: "/portofolio/samaqu" },
]);

export default function SamaquCaseStudyPage() {
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
            <span className="cs-kicker">Studi Kasus · E-Commerce · 2026</span>
            <h1>SAMAQU</h1>
            <p className="lead">
              Platform e-commerce untuk brand menswear muslim (Thobe, Kandora, Koko, Vest,
              Kabak), mulai dari katalog bertingkat, harga fleksibel, checkout, verifikasi
              pembayaran, sampai pengiriman multi-kurir.
            </p>
            <div className="cs-meta">
              <div>
                <small>Klien</small>
                <b>SAMAQU</b>
              </div>
              <div>
                <small>Layanan</small>
                <b>E-Commerce + Admin</b>
              </div>
              <div>
                <small>Status</small>
                <b>Live di samaqu.id</b>
              </div>
              <div>
                <small>Tipe</small>
                <b>Client Project</b>
              </div>
            </div>
            <div className="cs-shot reveal">
              <div className="cs-bar">
                <b /><b /><b />
                <span>samaqu.id</span>
              </div>
              <img
                src="/images/ead163be-ec6b-401f-bfb6-d30982c781de.jpg"
                alt="Halaman utama SAMAQU"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="container">
            <div className="cs-stats">
              <div className="cs-stat reveal">
                <b>12</b>
                <span>Modul inti dibangun</span>
              </div>
              <div className="cs-stat reveal">
                <b>13</b>
                <span>Panel admin, dikelola tim sendiri</span>
              </div>
              <div className="cs-stat reveal">
                <b>7.128</b>
                <span>Data area dipetakan ke J&amp;T</span>
              </div>
              <div className="cs-stat reveal">
                <b>~5 mnt</b>
                <span>Waktu hemat per order</span>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="cs-sec">
          <div className="container cs-2">
            <div>
              <span className="num-l">01 — TANTANGAN</span>
              <h2>Bukan toko online biasa.</h2>
              <p className="desc">
                Produknya bertingkat: kategori, jenis kain, series desain, lalu warna dan
                ukuran. Bisnisnya juga punya kebutuhan unik: pelanggan boleh{" "}
                <strong>menentukan harga sendiri</strong>, pembayaran berjalan manual (transfer,
                QRIS, COD), dan ongkir harus dihitung dari dua penyedia berbeda, tanpa admin
                mengetik ulang di panel kurir.
              </p>
            </div>
            <div className="cs-phone reveal">
              <img
                src="/images/8e046719-b59a-4504-8e25-32eb42471de0.png"
                alt="Tampilan mobile SAMAQU"
              />
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">02 — SOLUSI</span>
            <h2>9 fitur utama, satu sistem.</h2>
            <p className="desc">
              Semua kebutuhan dari etalase sampai pengiriman dibangun terintegrasi,
              responsif dari layar HP 430px sampai desktop.
            </p>
            <div className="cs-cards">
              <div className="cs-card reveal">
                <i>01</i>
                <h3>Katalog bertingkat</h3>
                <p>
                  Kategori → jenis kain → series → ukuran, ganti pilihan tanpa reload.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>02</i>
                <h3>Create Your Price</h3>
                <p>
                  Pelanggan menentukan harga sendiri, minimum tetap dijaga server.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>03</i>
                <h3>Checkout multi-step</h3>
                <p>
                  Alamat tersimpan, ongkir real-time, dan voucher langsung di checkout.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>04</i>
                <h3>Pembayaran &amp; verifikasi</h3>
                <p>
                  Transfer, QRIS/E-Wallet, dan COD dengan upload bukti bayar.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>05</i>
                <h3>Voucher</h3>
                <p>
                  Diskon persen/nominal dengan batas pemakaian dan minimum belanja.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>06</i>
                <h3>Integrasi J&amp;T + RajaOngkir</h3>
                <p>
                  Cek tarif, buat resi, batalkan, dan lacak paket dari dashboard.
                </p>
              </div>
              <div className="cs-card reveal">
                <i>07</i>
                <h3>Stok atomik</h3>
                <p>Dua checkout bersamaan tidak bisa membuat stok minus.</p>
              </div>
              <div className="cs-card reveal">
                <i>08</i>
                <h3>Admin dashboard</h3>
                <p>13 panel: pesanan, produk, pelanggan, konten, voucher, dan lainnya.</p>
              </div>
              <div className="cs-card reveal">
                <i>09</i>
                <h3>Dua bahasa &amp; tracking</h3>
                <p>
                  ID/EN penuh, plus Meta Pixel dan CAPI untuk iklan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Order flow */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">03 — ALUR ORDER</span>
            <h2>Dari klik sampai resi.</h2>
            <p className="desc">
              Titik kritisnya di validasi server: harga, ongkir, dan stok selalu diperiksa ulang
              sebelum order dibuat.
            </p>
            <ol className="cs-flow">
              <li className="">
                <b>01</b>
                <div>
                  Pilih produk
                  <small>
                    Tentukan harga lewat Create Your Price (≥ minimum).
                  </small>
                </div>
              </li>
              <li className="">
                <b>02</b>
                <div>
                  Checkout
                  <small>
                    Data pembeli, alamat, ongkir real-time, metode bayar, voucher.
                  </small>
                </div>
              </li>
              <li className="crit">
                <b>03</b>
                <div>
                  Validasi server
                  <small>
                    Harga, ongkir, dan stok dicek ulang ke sumber aslinya.
                  </small>
                </div>
              </li>
              <li className="">
                <b>04</b>
                <div>
                  Order dibuat
                  <small>
                    Resi J&amp;T otomatis terbit, pelanggan masuk halaman sukses.
                  </small>
                </div>
              </li>
              <li className="">
                <b>05</b>
                <div>
                  Admin
                  <small>
                    Verifikasi pembayaran → proses → kirim → tracking.
                  </small>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Order management */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">04 — ORDER MANAGEMENT</span>
            <h2>Setiap order, terkendali.</h2>
            <p className="desc">
              Order, pembayaran, data pelanggan, resi, dan label pengiriman terpusat di satu
              dashboard.
            </p>

            <div className="cs-shot reveal">
              <div className="cs-bar">
                <b /><b /><b />
                <span>samaqu.id/admin</span>
              </div>
              <img
                src="/images/675c7ed4-910c-4802-8a3b-f8f248db6853.png"
                alt="Admin dashboard SAMAQU"
              />
            </div>

            <div className="cs-2" style={{ marginTop: "60px" }}>
              <div>
                <h2>
                  Dari order ke label cetak. Otomatis.
                </h2>
                <p className="desc">
                  Setelah pembayaran diverifikasi, sistem langsung membuat pengiriman di J&amp;T,
                  menyimpan nomor resi, dan mencetak label lengkap dengan barcode. Tidak perlu
                  buka panel J&amp;T sama sekali.
                </p>
              </div>
              <div className="cs-label reveal">
                <img
                  src="/images/5fc51ef8-ef40-4c5c-92f4-61cff7a8b7cb.png"
                  alt="Label pengiriman otomatis"
                />
              </div>
            </div>

            <div className="cs-shot reveal" style={{ marginTop: "60px" }}>
              <div className="cs-bar">
                <b /><b /><b />
                <span>samaqu.id/akun/dashboard</span>
              </div>
              <img
                src="/images/d00f65d7-e8ec-4a63-960a-fae1a2b5c09d.png"
                alt="Dashboard pelanggan SAMAQU"
              />
            </div>
          </div>
        </section>

        {/* Tech */}
        <section className="cs-sec">
          <div className="container">
            <span className="num-l">05 — TEKNOLOGI</span>
            <h2>Tech stack.</h2>
            <div className="cs-stack">
              <em>Next.js 16</em>
              <em>React 19</em>
              <em>TypeScript</em>
              <em>Tailwind CSS 4</em>
              <em>Supabase / PostgreSQL</em>
              <em>Row Level Security</em>
              <em>Cloudinary</em>
              <em>J&amp;T Express API</em>
              <em>RajaOngkir API V2</em>
              <em>next-intl</em>
              <em>Meta Pixel + CAPI</em>
              <em>Vercel</em>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final">
          <div className="container reveal">
            <h2>
              Butuh Sistem Seperti <span className="hl">SAMAQU?</span>
            </h2>
            <p>
              Katalog, pembayaran, sampai integrasi kurir, dikerjakan end-to-end sampai jalan di
              production.
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
