import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import { SITE_NAME, SITE_URL, TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang OOS NEXA | Website & Solusi Teknologi Digital",
  description:
    "Kenali OOS NEXA, partner teknologi digital untuk membangun website, sistem bisnis, e-commerce, dan solusi digital yang disesuaikan dengan kebutuhan bisnis.",
  alternates: { canonical: "/tentang-kami" },
  openGraph: {
    title: "Tentang OOS NEXA | Website & Solusi Teknologi Digital",
    description:
      "Kenali OOS NEXA, partner teknologi digital untuk membangun website, sistem bisnis, e-commerce, dan solusi digital yang disesuaikan dengan kebutuhan bisnis.",
    url: "/tentang-kami",
    siteName: SITE_NAME,
    type: "website",
    locale: "id_ID",
  },
  twitter: { card: "summary", title: "Tentang OOS NEXA", description: SITE_NAME },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/fa7f1fb9-03d1-4ee0-988b-e9a8ee0f6ee2.png`,
  slogan: TAGLINE,
  description:
    "OOS NEXA membangun website, sistem bisnis, e-commerce, dan solusi digital yang disesuaikan dengan kebutuhan bisnis di Indonesia.",
  areaServed: "ID",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Tentang Kami", item: `${SITE_URL}/tentang-kami` },
  ],
};

const WORK = [
  {
    title: "Website & Web Development",
    desc: "Website profesional yang cepat, responsif, dan disusun mengikuti cara bisnis Anda bekerja, bukan sekadar terlihat bagus di awal.",
  },
  {
    title: "Sistem Bisnis",
    desc: "Sistem digital berbasis web yang merapikan operasional: alur kerja, data, dan laporan yang dulu terpisah jadi satu tempat yang mudah dikelola.",
  },
  {
    title: "E-Commerce",
    desc: "Toko online yang mendukung proses penjualan dari katalog sampai checkout, termasuk pengalaman pelanggan di dalamnya.",
  },
  {
    title: "Integrasi & Automasi",
    desc: "Menghubungkan tools dan proses yang sudah dipakai agar pekerjaan manual berkurang dan data tetap sinkron antar tim.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Memahami Kebutuhan",
    desc: "Memahami bisnis, masalah, tujuan, dan kebutuhan pengguna sebelum menentukan solusi.",
  },
  {
    num: "02",
    title: "Menentukan Solusi",
    desc: "Menentukan pendekatan teknologi dan struktur sistem yang paling relevan dengan kebutuhan proyek.",
  },
  {
    num: "03",
    title: "Membangun & Mengembangkan",
    desc: "Mengerjakan solusi dengan fokus pada kualitas, performa, usability, dan maintainability.",
  },
  {
    num: "04",
    title: "Menyempurnakan",
    desc: "Melakukan evaluasi dan pengembangan agar solusi dapat terus mengikuti kebutuhan bisnis.",
  },
];

const REASONS = [
  "Dibangun berdasarkan kebutuhan bisnis",
  "Fokus pada solusi yang relevan",
  "Teknologi yang dapat dikembangkan",
  "Memprioritaskan performa dan pengalaman pengguna",
  "Pendekatan yang praktis dan terukur",
];

const FAQ = [
  {
    q: "Apa itu OOS NEXA?",
    a: "OOS NEXA adalah partner teknologi digital yang membantu bisnis membangun website, sistem bisnis, dan solusi digital sesuai kebutuhan mereka.",
  },
  {
    q: "Apa layanan yang ditawarkan OOS NEXA?",
    a: "Website dan web development, sistem bisnis untuk operasional harian, e-commerce, dan integrasi atau automasi antar tools yang sudah dipakai.",
  },
  {
    q: "Apakah OOS NEXA bisa membuat website custom?",
    a: "Bisa. Struktur, fitur, dan alur website dibuat mengikuti kebutuhan dan cara kerja bisnis Anda, bukan dipaksa masuk ke template yang sudah jadi.",
  },
  {
    q: "Apakah OOS NEXA bisa mengembangkan sistem bisnis?",
    a: "Bisa. Sistem yang sudah berjalan dapat dikembangkan atau dirapikan agar tetap relevan seiring bisnis bertambah besar.",
  },
  {
    q: "Bagaimana cara memulai project dengan OOS NEXA?",
    a: "Mulai dari konsultasi gratis. Ceritakan kebutuhan dan masalah bisnis Anda, lalu kami bantu tentukan langkah dan solusi yang paling masuk akal.",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      <Nav />

      <main id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* Hero */}
        <section className="ab-hero">
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Tentang Kami</li>
              </ol>
            </nav>

            <span className="ab-kicker">Tentang OOS NEXA</span>
            <h1>Teknologi yang Dibangun untuk Kebutuhan Nyata</h1>
            <p className="ab-tagline">Build Better <span className="hl">Grow Smarter</span></p>
            <p className="ab-lead">
              OOS NEXA membantu bisnis membangun dan mengembangkan solusi digital yang
              relevan dengan kebutuhan mereka — bukan sekadar membuat website yang
              berhenti di tampilan. Kami mulai dari cara bisnis Anda bekerja, lalu
              menerjemahkannya menjadi sistem yang benar-benar dipakai sehari-hari.
            </p>
            <div className="ab-cta">
              <Link href="/#layanan" className="btn">Lihat Layanan</Link>
              <a href="#" className="btn btn-ghost wa-cta">Konsultasi Gratis</a>
            </div>
          </div>
        </section>

        {/* Siapa Kami */}
        <section id="tentang">
          <div className="container ab-two">
            <div className="reveal">
              <h2>Siapa Kami</h2>
            </div>
            <div className="ab-body reveal">
              <p>
                OOS NEXA adalah partner teknologi digital yang membantu bisnis membangun
                website, sistem bisnis, dan solusi digital yang sesuai dengan kebutuhan
                nyata di lapangan.
              </p>
              <p>
                Pendekatan kami bukan hanya mengejar tampilan yang rapi. Setiap keputusan
                teknologi dipertimbangkan dari sisi kebutuhan bisnis, pengalaman pengguna,
                performa, skalabilitas, kemudahan pengelolaan, sampai tujuan jangka
                panjangnya.
              </p>
              <p>
                Hasilnya bukan sekadar produk yang jadi, tetapi fondasi yang bisa terus
                dikembangkan mengikuti perkembangan bisnis Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Apa yang Kami Kerjakan */}
        <section className="ab-alt">
          <div className="container">
            <div className="head reveal">
              <h2>Apa yang Kami Kerjakan</h2>
              <p className="lead">
                Empat fokus pekerjaan yang paling sering kami tangani.
              </p>
            </div>

            <div className="ab-work">
              {WORK.map((w) => (
                <div className="ab-work-item reveal" key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cara Kami Bekerja */}
        <section id="cara-kerja">
          <div className="container">
            <div className="head reveal">
              <h2>Cara Kami Bekerja</h2>
            </div>
            <ol className="ab-steps">
              {STEPS.map((s) => (
                <li className="ab-step reveal" key={s.num}>
                  <span className="num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Build Better Grow Smarter */}
        <section className="ab-motto">
          <div className="container">
            <div className="head center reveal">
              <h2>Build Better <span className="hl">Grow Smarter</span></h2>
            </div>
            <div className="ab-motto-grid">
              <div className="reveal">
                <h3>Build Better</h3>
                <p>
                  Membangun solusi digital yang lebih terarah, relevan, dan berdiri di atas
                  fondasi yang kuat — bukan sekadar cepat selesai.
                </p>
              </div>
              <div className="reveal">
                <h3>Grow Smarter</h3>
                <p>
                  Membantu bisnis berkembang dengan memanfaatkan teknologi secara lebih
                  efektif dan terukur, supaya setiap langkah punya arah.
                </p>
              </div>
            </div>
            <p className="ab-motto-close reveal">
              Dua hal itulah yang kami jaga di setiap pekerjaan: fondasi yang rapi saat
              dibangun, dan ruang untuk berkembang setelahnya.
            </p>
          </div>
        </section>

        {/* Kenapa OOS NEXA */}
        <section id="kenapa">
          <div className="container ab-two">
            <div className="reveal">
              <h2>Kenapa OOS NEXA</h2>
            </div>
            <ul className="ab-why reveal">
              {REASONS.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Portfolio preview */}
        <section className="ab-alt">
          <div className="container">
            <div className="head reveal">
              <h2>Beberapa Pekerjaan Kami</h2>
              <p className="lead">
                Beberapa contoh proyek yang sudah kami kerjakan, lengkap dengan studi
                kasusnya.
              </p>
            </div>

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
                    satu aplikasi PWA yang dipakai langsung dari HP di lapangan.
                  </p>
                  <span className="pf-more">Lihat studi kasus →</span>
                </div>
              </Link>

              <Link href="/portofolio/samaqu" className="pf-card pf-real reveal">
                <div className="pf-shot pf-img">
                  <img
                    src="/images/ead163be-ec6b-401f-bfb6-d30982c781de.jpg"
                    alt="Tampilan website SAMAQU, toko online menswear muslim"
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
                  <span className="pf-more">Lihat studi kasus →</span>
                </div>
              </Link>
            </div>

            <div className="ab-more reveal">
              <Link href="/portofolio" className="btn btn-ghost">Lihat Semua Portofolio</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="container ab-two">
            <div className="reveal">
              <h2>Pertanyaan Umum</h2>
              <p className="lead">Jawaban singkat untuk pertanyaan yang paling sering masuk.</p>
            </div>
            <div className="ab-faq">
              {FAQ.map((f) => (
                <div className="reveal" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final">
          <div className="container reveal">
            <h2>Punya Ide yang Ingin <span className="hl">Dibangun?</span></h2>
            <p>
              Ceritakan kebutuhan bisnis atau ide yang sedang kamu siapkan. Kami bantu
              menerjemahkannya menjadi solusi digital yang lebih jelas dan siap
              dikembangkan.
            </p>
            <a href="#" className="btn wa-cta">Konsultasi Gratis</a>
          </div>
        </section>
      </main>
    </>
  );
}
