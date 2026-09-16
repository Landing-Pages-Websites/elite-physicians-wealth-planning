import type { MetadataRoute } from "next";
import { INTERIOR_ROUTES } from "@/lib/routes";

const BASE_URL = "https://elitephysicianswealthplanning.com";
const LAST_MODIFIED = new Date("2026-09-16");

/**
 * Customer-site sitemap: the homepage first, then the 36 interior routes in
 * the approved inventory order. Review-only and campaign surfaces (/landing,
 * /site-design, design-review sheets) are deliberately absent.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...INTERIOR_ROUTES.map((route) => ({
      url: `${BASE_URL}${route.path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
