import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true as any, // Enable app directory support
  },
};

export default nextConfig;
