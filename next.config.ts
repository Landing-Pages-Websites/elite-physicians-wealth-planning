import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /variant-a was the review URL for the approved direction and may
      // already be shared; it is now the homepage. In-app redirect, not a 404.
      { source: "/variant-a", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
