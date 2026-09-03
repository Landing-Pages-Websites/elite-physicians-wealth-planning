import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Verification builds MUST NOT share a build directory with `next dev`.
   * They did, and running `next build` while the dev server was live replaced
   * .next with production output underneath it — dev then loaded production
   * server bundles and threw "a[d] is not a function" on every request.
   * Verification sets NEXT_DIST_DIR=.next-verify so the two can never collide.
   */
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      // /variant-a was the review URL for the approved direction and may
      // already be shared; it is now the homepage. In-app redirect, not a 404.
      { source: "/variant-a", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
