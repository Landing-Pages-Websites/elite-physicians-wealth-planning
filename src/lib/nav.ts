import { routeBySlug } from "@/lib/routes";

/**
 * Primary navigation, derived from the canonical route registry so labels and
 * paths can never drift from the inventory. The twelve insight articles are
 * deliberately reached through /insights and contextual related-reading links
 * rather than flattened into the menu.
 */
export interface NavLink {
  readonly path: string;
  readonly label: string;
}

export interface NavGroup {
  readonly label: string;
  /** Direct destination when the group itself is a single link. */
  readonly path?: string;
  readonly links: readonly NavLink[];
}

function link(slug: string, label?: string): NavLink {
  const route = routeBySlug(slug);
  return { path: route.path, label: label ?? route.navLabel };
}

export const NAV_GROUPS: readonly NavGroup[] = [
  {
    label: "Services",
    links: [
      link("services"),
      link("tax-planning-for-physicians"),
      link("wealth-management-for-physicians"),
      link("retirement-planning-for-physicians"),
      link("practice-owner-planning"),
      link("legacy-estate-planning"),
    ],
  },
  {
    label: "Who we serve",
    links: [
      link("who-we-serve", "Who we serve — overview"),
      link("physicians-specialists"),
      link("financial-planning-for-surgeons"),
      link("financial-planning-for-dentists"),
      link("financial-planning-for-crnas-nps-pas"),
      link("financial-planning-for-healthcare-executives"),
      link("physicians"),
    ],
  },
  {
    label: "Our process",
    path: routeBySlug("our-process").path,
    links: [],
  },
  {
    label: "Resources",
    links: [
      link("resources"),
      link("insights"),
      link("checkup"),
      link("physician-tax-retirement-guide"),
    ],
  },
  {
    label: "About",
    links: [
      link("about"),
      link("meet-michael-epps"),
      link("about--team"),
      link("contact"),
    ],
  },
] as const;

export const SCHEDULE_CTA: NavLink = {
  path: routeBySlug("schedule").path,
  label: "Schedule a strategy call",
};
