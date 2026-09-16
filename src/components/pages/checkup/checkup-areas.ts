import { routeBySlug } from "@/lib/routes";

/**
 * The seven checkup areas from the approved manifest (02-seven-area-map),
 * each tied to the built route a visitor reviews next. Labels and paths come
 * from the canonical route registry so they can never drift from navigation.
 */
export interface PlanningArea {
  readonly name: string;
  readonly routePath: string;
  readonly routeLabel: string;
}

const AREA_ROUTE_SLUGS: readonly (readonly [string, string])[] = [
  ["Cash flow", "services"],
  ["Taxes", "tax-planning-for-physicians"],
  ["Retirement", "retirement-planning-for-physicians"],
  ["Investments", "wealth-management-for-physicians"],
  ["Protection", "insights--disability-insurance-review-overlooked"],
  ["Estate", "legacy-estate-planning"],
  ["Practice planning", "practice-owner-planning"],
];

export const PLANNING_AREAS: readonly PlanningArea[] = AREA_ROUTE_SLUGS.map(
  ([name, slug]) => {
    const route = routeBySlug(slug);
    return { name, routePath: route.path, routeLabel: route.navLabel };
  },
);

export function areaByName(name: string): PlanningArea | undefined {
  return PLANNING_AREAS.find((area) => area.name === name);
}
