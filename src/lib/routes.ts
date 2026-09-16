import type { Metadata } from "next";

/**
 * Canonical ordered route inventory for the customer site. Order matches
 * page-index.json (revision-2026-09-15-image-first) exactly and drives the
 * sitemap, the review-route registry, and navigation. Titles are the exact
 * manifest SEO strings — including the singular "Physician" wordmark variant
 * some pages carry — and must not be normalised.
 */
export interface SiteRoute {
  /** Design-input slug; `--` marks one level of nesting. */
  readonly slug: string;
  readonly path: string;
  readonly title: string;
  readonly navLabel: string;
}

export const INTERIOR_ROUTES: readonly SiteRoute[] = [
  {
    slug: "services",
    path: "/services",
    title: "Services for Physicians — Elite Physician Wealth Planning™",
    navLabel: "All services",
  },
  {
    slug: "tax-planning-for-physicians",
    path: "/tax-planning-for-physicians",
    title: "Tax Planning for Physicians — Elite Physician Wealth Planning™",
    navLabel: "Tax planning",
  },
  {
    slug: "wealth-management-for-physicians",
    path: "/wealth-management-for-physicians",
    title:
      "Wealth Management for Physicians — Elite Physician Wealth Planning™",
    navLabel: "Wealth management",
  },
  {
    slug: "retirement-planning-for-physicians",
    path: "/retirement-planning-for-physicians",
    title:
      "Retirement Planning for Physicians — Elite Physician Wealth Planning™",
    navLabel: "Retirement planning",
  },
  {
    slug: "practice-owner-planning",
    path: "/practice-owner-planning",
    title: "Practice Owner Planning — Elite Physician Wealth Planning™",
    navLabel: "Practice owner planning",
  },
  {
    slug: "legacy-estate-planning",
    path: "/legacy-estate-planning",
    title:
      "Legacy & Estate Planning Coordination — Elite Physician Wealth Planning™",
    navLabel: "Legacy & estate planning",
  },
  {
    slug: "who-we-serve",
    path: "/who-we-serve",
    title: "Who We Serve — Elite Physician Wealth Planning™",
    navLabel: "Who we serve",
  },
  {
    slug: "physicians-specialists",
    path: "/physicians-specialists",
    title:
      "Financial Planning for Physicians & Specialists — Elite Physician Wealth Planning™",
    navLabel: "Physicians & specialists",
  },
  {
    slug: "financial-planning-for-surgeons",
    path: "/financial-planning-for-surgeons",
    title: "Financial Planning for Surgeons — Elite Physician Wealth Planning™",
    navLabel: "Surgeons",
  },
  {
    slug: "financial-planning-for-dentists",
    path: "/financial-planning-for-dentists",
    title: "Financial Planning for Dentists — Elite Physician Wealth Planning™",
    navLabel: "Dentists",
  },
  {
    slug: "financial-planning-for-crnas-nps-pas",
    path: "/financial-planning-for-crnas-nps-pas",
    title:
      "Financial Planning for CRNAs, NPs & PAs — Elite Physician Wealth Planning™",
    navLabel: "CRNAs, NPs & PAs",
  },
  {
    slug: "financial-planning-for-healthcare-executives",
    path: "/financial-planning-for-healthcare-executives",
    title:
      "Financial Planning for Healthcare Executives — Elite Physician Wealth Planning™",
    navLabel: "Healthcare executives",
  },
  {
    slug: "physicians",
    path: "/physicians",
    title: "Who We Help — Elite Physician Wealth Planning™",
    navLabel: "Who we help",
  },
  {
    slug: "our-process",
    path: "/our-process",
    title: "The Elite Physician Wealth Blueprint™ | Our Process",
    navLabel: "Our process",
  },
  {
    slug: "resources",
    path: "/resources",
    title: "Physician Resource Center — Elite Physician Wealth Planning™",
    navLabel: "Resource center",
  },
  {
    slug: "insights",
    path: "/insights",
    title: "Insights — Elite Physician Wealth Planning™",
    navLabel: "Insights",
  },
  {
    slug: "insights--physician-financial-checkup-seven-areas",
    path: "/insights/physician-financial-checkup-seven-areas",
    title:
      "The Physician Financial Checkup: Seven Areas That Should Work Together — Elite Physician Wealth Planning™",
    navLabel: "The physician financial checkup",
  },
  {
    slug: "insights--first-five-years-financial-moves",
    path: "/insights/first-five-years-financial-moves",
    title:
      "Seven Financial Moves to Consider in the First Five Years of Practice — Elite Physician Wealth Planning™",
    navLabel: "First five years of practice",
  },
  {
    slug: "insights--w2-1099-practice-income-questions",
    path: "/insights/w2-1099-practice-income-questions",
    title:
      "W-2, 1099, and Practice Income: Questions Physicians Should Ask Before Year-End — Elite Physician Wealth Planning™",
    navLabel: "W-2, 1099 & practice income",
  },
  {
    slug: "insights--cash-balance-defined-benefit-decision-guide",
    path: "/insights/cash-balance-defined-benefit-decision-guide",
    title:
      "Cash Balance and Defined Benefit Plans: A Decision Guide for Medical Practice Owners — Elite Physician Wealth Planning™",
    navLabel: "Cash balance & defined benefit plans",
  },
  {
    slug: "insights--coordinating-cpa-attorney-tpa-advisor",
    path: "/insights/coordinating-cpa-attorney-tpa-advisor",
    title:
      "How Physicians Can Coordinate a CPA, Attorney, TPA, and Financial Advisor — Elite Physician Wealth Planning™",
    navLabel: "Coordinating your advisors",
  },
  {
    slug: "insights--five-years-from-retirement-checklist",
    path: "/insights/five-years-from-retirement-checklist",
    title:
      "Five Years From Retirement: A Physician's Planning Checklist — Elite Physician Wealth Planning™",
    navLabel: "Five years from retirement",
  },
  {
    slug: "insights--disability-insurance-review-overlooked",
    path: "/insights/disability-insurance-review-overlooked",
    title:
      "Disability Insurance Review: Questions Physicians Often Overlook — Elite Physician Wealth Planning™",
    navLabel: "Disability insurance review",
  },
  {
    slug: "insights--roth-conversion-timing",
    path: "/insights/roth-conversion-timing",
    title:
      "Roth Conversion Timing Before and After Retirement — Elite Physician Wealth Planning™",
    navLabel: "Roth conversion timing",
  },
  {
    slug: "insights--preparing-for-practice-sale",
    path: "/insights/preparing-for-practice-sale",
    title:
      "Preparing Financially for the Sale or Transition of a Medical Practice — Elite Physician Wealth Planning™",
    navLabel: "Preparing for a practice sale",
  },
  {
    slug: "insights--beneficiaries-trusts-ownership-checklist",
    path: "/insights/beneficiaries-trusts-ownership-checklist",
    title:
      "Beneficiaries, Trusts, and Account Ownership: A Physician Estate-Plan Coordination Checklist — Elite Physician Wealth Planning™",
    navLabel: "Beneficiaries, trusts & ownership",
  },
  {
    slug: "insights--charitable-giving-strategies",
    path: "/insights/charitable-giving-strategies",
    title:
      "Charitable Giving Strategies for High-Income Medical Professionals — Elite Physician Wealth Planning™",
    navLabel: "Charitable giving strategies",
  },
  {
    slug: "insights--long-term-care-survivor-planning",
    path: "/insights/long-term-care-survivor-planning",
    title:
      "Long-Term Care and Survivor Planning for Physician Families — Elite Physician Wealth Planning™",
    navLabel: "Long-term care & survivor planning",
  },
  {
    slug: "about",
    path: "/about",
    title: "About Elite Physician Wealth Planning",
    navLabel: "About the firm",
  },
  {
    slug: "meet-michael-epps",
    path: "/meet-michael-epps",
    title:
      "Meet Michael A. Epps, ChFC®, RICP® | Elite Physician Wealth Planning",
    navLabel: "Meet Michael Epps",
  },
  {
    slug: "about--team",
    path: "/about/team",
    title: "Meet the Team — Elite Physician Wealth Planning™",
    navLabel: "Meet the team",
  },
  {
    slug: "checkup",
    path: "/checkup",
    title: "Physician Financial Checkup — Elite Physician Wealth Planning™",
    navLabel: "Financial checkup",
  },
  {
    slug: "physician-tax-retirement-guide",
    path: "/physician-tax-retirement-guide",
    title:
      "Physician Tax & Retirement Planning Guide — Elite Physician Wealth Planning™",
    navLabel: "Tax & retirement guide",
  },
  {
    slug: "schedule",
    path: "/schedule",
    title: "Schedule a Strategy Call — Elite Physician Wealth Planning™",
    navLabel: "Schedule a call",
  },
  {
    slug: "contact",
    path: "/contact",
    title: "Contact — Elite Physician Wealth Planning™",
    navLabel: "Contact",
  },
  {
    slug: "privacy-disclosures",
    path: "/privacy-disclosures",
    title:
      "Privacy & Website Disclosures — Elite Physician Wealth Planning™",
    navLabel: "Privacy & disclosures",
  },
] as const;

const ROUTES_BY_SLUG = new Map(INTERIOR_ROUTES.map((r) => [r.slug, r]));

export function routeBySlug(slug: string): SiteRoute {
  const route = ROUTES_BY_SLUG.get(slug);
  if (!route) throw new Error(`Unknown route slug: ${slug}`);
  return route;
}

/**
 * Page metadata from the route registry: exact manifest title (absolute, so
 * the root template never double-brands it), page-owned description, and a
 * self-canonical URL.
 */
export function routeMetadata(slug: string, description: string): Metadata {
  const route = routeBySlug(slug);
  return {
    title: { absolute: route.title },
    description,
    alternates: { canonical: route.path },
  };
}
