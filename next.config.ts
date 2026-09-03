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
      // The old review URLs may already be shared. Both directions now live at
      // named routes off the root, so redirect rather than 404.
      { source: "/variant-a", destination: "/consult-ledger", permanent: true },
      { source: "/variant-b", destination: "/decision-atlas", permanent: true },
    ];
  },
};

export default nextConfig;
