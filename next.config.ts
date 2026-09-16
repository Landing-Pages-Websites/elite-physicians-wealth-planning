import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/landing" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
