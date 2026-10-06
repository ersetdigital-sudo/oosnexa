"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Pengganti <script> vanilla dari versi HTML statis.
 * Jalan setelah hydration (useEffect) supaya tidak bikin hydration mismatch.
 */
export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const WA_NUMBER = "62XXXXXXXXXX";
    const WA_MESSAGE = "Halo, saya ingin konsultasi pembuatan sistem untuk bisnis saya.";
    const waLink =
      "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MESSAGE);

    document.querySelectorAll<HTMLAnchorElement>(".wa-cta").forEach((a) => {
      a.href = waLink;
      a.target = "_blank";
      a.rel = "noopener";
    });

    const yr = document.getElementById("yr");
    if (yr) yr.textContent = String(new Date().getFullYear());

    // reveal on scroll
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }

    els.forEach((el) => el.classList.add("in"));
  }, [pathname]);

  return null;
}
