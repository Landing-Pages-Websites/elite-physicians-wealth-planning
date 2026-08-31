import type { MetadataRoute } from "next";

const BASE_URL = "https://elitephysicianswealthplanning.com";
const REVIEW_ROUTES = ["/", "/variant-a", "/variant-b"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return REVIEW_ROUTES.map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-08-31"),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
