/**
 * Section CTA (#kontak) homepage — versi JSX, menggantikan markup statis
 * di content/home.html supaya bisa dirancang ulang sebagai komponen Next.js.
 * Link `href="#kontak"` dari section lain tetap mengarah ke sini.
 * Tombol `.wa-cta` diisi URL WhatsApp oleh ClientScripts saat hydration.
 */
export default function HomeCta() {
  return (
    <section id="kontak" aria-labelledby="cta">
      <div className="wrap">
        <div className="cta-box cta-hero">
          <div className="cta-hero-main rv">
            <div className="eyebrow">Konsultasi</div>
            <h2 id="cta">
              Punya Ide Sistem atau Masalah yang <em>Ingin Dibereskan?</em>
            </h2>
            <p>
              Tidak perlu tahu istilah teknis. Cukup jelaskan bisnis Anda, bagaimana
              prosesnya berjalan sekarang, dan bagian mana yang masih terasa merepotkan.
              Kami akan membantu melihat kebutuhan tersebut dari sisi sistem dan
              menentukan langkah yang masuk akal untuk dikerjakan.
            </p>
            <div className="ctas">
              <a href="#" className="btn btn-p wa-cta">
                Mulai Konsultasi Anda{" "}
                <svg
                  className="i"
                  style={{ stroke: "#FFFFFF", width: 18, height: 18 }}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="/portofolio" className="btn btn-g">
                Jelajahi Portofolio Kami
              </a>
            </div>
            <p className="closing">
              Mulai dari masalahnya. Kita cari bentuk sistem yang paling masuk akal
              untuk bisnis Anda.
            </p>
          </div>

          <div className="cta-hero-side rv">
            <div className="cta-hero-label">Alurnya sederhana</div>
            <ol className="cta-hero-steps">
              <li>
                <span className="n">01</span>
                <div>
                  <b>Ceritakan proses bisnisnya</b>
                  <p>Bagaimana kerja berjalan sekarang dan bagian mana yang masih merepotkan.</p>
                </div>
              </li>
              <li>
                <span className="n">02</span>
                <div>
                  <b>Kami petakan dari sisi sistem</b>
                  <p>Kebutuhan dilihat sebagai alur sistem, bukan istilah teknis.</p>
                </div>
              </li>
              <li>
                <span className="n">03</span>
                <div>
                  <b>Langkah disepakati dulu</b>
                  <p>Baru scope dan estimasi dibahas setelah arahnya jelas.</p>
                </div>
              </li>
            </ol>
            <div className="cta-hero-chips">
              <em>Website</em>
              <em>Sistem Bisnis</em>
              <em>E-Commerce</em>
              <em>Integrasi &amp; Automasi</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}