import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [] },
  // Dev-only: Next blocks cross-origin requests to /_next dev assets (HMR)
  // unless the preview origin is allowed. Value comes from the sandbox env,
  // never hardcoded, because it changes per environment.
  allowedDevOrigins: process.env.BASE44_PUBLIC_HOST_SUFFIX
    ? [`3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`]
    : [],
};

export default nextConfig;
