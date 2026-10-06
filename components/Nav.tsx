"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MENU = [
  { href: "/", label: "Home" },
  { href: "/#layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/tentang-kami", label: "Tentang Kami" },
];

export default function Nav() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // navbar: transparan di atas, gelap + blur saat di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // menu aktif mengikuti halaman / section yang sedang dibuka
  useEffect(() => {
    setOpen(false);

    if (pathname.startsWith("/portofolio")) {
      setActive("/portofolio");
      return;
    }
    if (pathname.startsWith("/tentang-kami")) {
      setActive("/tentang-kami");
      return;
    }
    if (pathname !== "/") {
      setActive("");
      return;
    }

    const update = () => {
      const layanan = document.getElementById("layanan");
      const inLayanan =
        Boolean(layanan) &&
        (layanan as HTMLElement).getBoundingClientRect().top <= window.innerHeight * 0.45;
      setActive(inLayanan ? "/#layanan" : "/");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  return (
    <header
      className={scrolled ? "nav scrolled" : "nav"}
      style={{ position: "sticky", top: 0, zIndex: 50 }}
    >
      <div className="container">
        <a href="#top" className="logo" aria-label="OOS NEXA beranda"><img src="/images/fa7f1fb9-03d1-4ee0-988b-e9a8ee0f6ee2.png" alt="OOS NEXA" className="logo-img" /></a>
        <nav aria-label="Menu utama"><ul className="menu">
          {MENU.map((m) => (
            <li key={m.href}>
              <Link href={m.href} className={active === m.href ? "active" : undefined}>
                {m.label}
              </Link>
            </li>
          ))}
        </ul></nav>
        <div className="nav-right">
          <a href="#" className="btn btn-sm wa-cta">Konsultasi Gratis</a>
          <button
            className="burger"
            aria-label="Buka menu"
            aria-expanded={open ? "true" : "false"}
            aria-controls="mmenu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
      <div className={open ? "m-menu open" : "m-menu"} id="mmenu"><ul>
        {MENU.map((m) => (
          <li key={m.href}>
            <Link
              href={m.href}
              className={active === m.href ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {m.label}
            </Link>
          </li>
        ))}
        <li><a href="#" className="wa-cta" onClick={() => setOpen(false)}>Konsultasi Gratis</a></li>
      </ul></div>
    </header>
  );
}
