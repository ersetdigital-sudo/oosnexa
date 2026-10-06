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
            <h2 id="cta">
              Butuh Sistem Digital untuk <em>Bisnis?</em>
            </h2>
            <p>
              Ceritakan kebutuhan bisnis Anda. OOS NEXA membantu membangun website, web
              app, dan sistem bisnis sesuai kebutuhan dan alur kerja Anda.
            </p>
            <div className="ctas">
              <a href="#" className="btn btn-p wa-cta">
                Mulai Konsultasi Anda
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
        </div>
      </div>
    </section>
  );
}