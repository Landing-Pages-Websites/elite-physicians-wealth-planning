import type { MetadataRoute } from "next";

/**
 * Launch domain per section_manifest hard_rules: the PLURAL
 * elitephysicianswealthplanning.com. The singular domain on the live site is
 * reference-only and is never emitted here.
 */
const BASE_URL = "https://elitephysicianswealthplanning.com";

/** Only routes that actually exist. Interior routes are added as they ship. */
const ROUTES = ["/", "/consult-ledger", "/decision-atlas"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
