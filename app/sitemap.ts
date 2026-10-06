import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/layanan`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/layanan/jasa-pembuatan-website-custom`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/layanan/custom-web-app`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/layanan/sistem-pos-inventory`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/layanan/business-dashboard`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/layanan/crm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/layanan/toko-online-custom`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/layanan/landing-page`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/layanan/integrasi-api-automasi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/portofolio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/portofolio/samaqu`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/portofolio/erlangga-rental`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/portofolio/laptop-store`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/portofolio/ut-majene`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
