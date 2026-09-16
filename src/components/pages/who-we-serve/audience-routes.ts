/**
 * The five audience destinations this index routes to. Labels are the
 * manifest taxonomy strings; every href is a built route.
 */
export interface AudienceRoute {
  readonly label: string;
  readonly href: string;
}

export const AUDIENCE_ROUTES: readonly AudienceRoute[] = [
  { label: "Physicians & Specialists", href: "/physicians-specialists" },
  { label: "Surgeons", href: "/financial-planning-for-surgeons" },
  { label: "Dentists", href: "/financial-planning-for-dentists" },
  { label: "CRNAs, NPs & PAs", href: "/financial-planning-for-crnas-nps-pas" },
  {
    label: "Healthcare Executives",
    href: "/financial-planning-for-healthcare-executives",
  },
] as const;
