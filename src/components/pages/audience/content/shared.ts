import { routeBySlug } from "@/lib/routes";
import type { RelatedPathLink } from "../content-types";

/**
 * Builds a related-path link from the canonical route registry so the visible
 * path text, the accessible name, and the destination can never drift apart.
 * The manifests list the links as literal route paths; the close frames also
 * draw them as live path text.
 */
export function relatedLink(slug: string): RelatedPathLink {
  const route = routeBySlug(slug);
  return { href: route.path, ariaLabel: route.title };
}
