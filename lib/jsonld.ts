import { SITE_URL } from "@/lib/site";

/**
 * JSON-LD mockup disimpan dengan URL relatif ("/layanan/crm") supaya gampang diedit.
 * Google minta URL absolut untuk `item`/`url`/`logo`, jadi di-rewrite saat render.
 */
export function withAbsoluteUrls<T>(value: T): T {
  if (typeof value === "string") {
    if (value.startsWith("/") && !value.startsWith("//")) {
      return (SITE_URL + value) as unknown as T;
    }
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((v) => withAbsoluteUrls(v)) as unknown as T;
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = withAbsoluteUrls(v);
    }
    return out as unknown as T;
  }
  return value;
}
