import type { DocketPageContent } from "../content-types";

const IMG = "/images/design/wealth-management-for-physicians/elements";

/**
 * Copy source: _design_inputs/pages/wealth-management-for-physicians/
 * section_manifest.json (revision-2026-09-15-image-first-page-mode).
 * Manifest wins for every string; refs win for the variant choices.
 * One adaptation: the manifest's 04 body ends "…belongs in the design
 * reference", internal production jargon the truth contract bars from
 * public pages; the clause is dropped, nothing is added.
 */
export const WEALTH_MANAGEMENT_DOCKET: DocketPageContent = {
  slug: "wealth-management-for-physicians",
  metaDescription:
    "Portfolio decisions should reflect taxes, risk tolerance, time horizon, cash-flow needs, retirement income goals, estate objectives, and concentration risk.",
  opening: {
    variant: "canvas",
    eyebrow: "Wealth Management",
    headline:
      "Investment management should support your total financial strategy.",
    body: "Portfolio decisions should reflect taxes, risk tolerance, time horizon, cash-flow needs, retirement income goals, estate objectives, and concentration risk.",
    primaryCta: { label: "Schedule a Strategy Call", href: "/schedule" },
    secondaryLink: {
      label: "See adjacent planning areas",
      href: "#adjacent-planning",
    },
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    image: {
      src: `${IMG}/01-opening-docket-portfolio-policy-desk.jpg`,
      alt: "Advisory desk at dusk with a portfolio policy ledger, a stethoscope, coffee, and books by a window",
      objectPosition: "58% 45%",
    },
  },
  demand: {
    variant: "columns",
    headline: "Situations that should trigger a review.",
    body: "Use this page when a decision is approaching, not only after a deadline has passed.",
    items: [
      "New attending income or bonus cycles",
      "Taxable versus retirement-account placement",
      "Concentrated position review",
      "Retirement-income portfolio questions",
      "Market volatility decisions during a demanding schedule",
    ],
    image: {
      src: `${IMG}/02-demand-situations-portfolio-review-still-life.jpg`,
      alt: "Dark portfolio folder, a note card, an open notebook, and a fountain pen on a review desk",
    },
  },
  documents: {
    mediaPosition: "top",
    itemIcon: "check",
    headline: "What to have in view.",
    body: "The first conversation can stay high-level; sensitive documents should not be sent through the website.",
    items: [
      "Investment-account inventory",
      "Retirement-account list",
      "Savings-rate and liquidity goals",
      "Known tax constraints and charitable intent",
    ],
    image: {
      /* Raster re-cropped 2026-09-16 from the original 886x288 extraction to
         its clean photographic band (box 0,88 -> 886,256): the source carried
         a baked text fragment, a cream canvas band, and a stray frame line.
         The declared rectangle below sizes the strip slot 1:1. */
      src: `${IMG}/03-documents-needed-portfolio-document-strip.jpg`,
      alt: "",
      aspectRatio: "886 / 168",
    },
  },
  boundary: {
    layout: "hub",
    headline: "What Elite coordinates and what stays with the right professional.",
    body: "Educational planning frames only; no model portfolio, performance claim, or individualized investment advice.",
    roles: [
      { label: "Elite Physicians Wealth Planning", kind: "hub" },
      { label: "CPA or tax professional", kind: "partner", glyph: "cpa" },
      {
        label: "Attorney where legal documents are involved",
        kind: "partner",
        glyph: "attorney",
      },
      {
        label: "TPA, payroll, benefits, or insurance professionals when relevant",
        kind: "partner",
        glyph: "tpa",
      },
    ],
  },
  adjacent: {
    layout: "shelf",
    headline: "The neighboring decisions.",
    body: "This topic rarely stands alone. The related pages help a physician see what changes when one decision moves.",
    explore: {
      label: "Explore related planning",
      href: "/tax-planning-for-physicians",
    },
    edgeImage: {
      src: `${IMG}/05-adjacent-planning-office-edge.jpg`,
      alt: "",
      objectPosition: "50% 30%",
    },
    routes: [
      {
        href: "/tax-planning-for-physicians",
        name: "Tax planning for physicians",
        image: {
          src: `${IMG}/05-adjacent-planning-tax-route.jpg`,
          alt: "",
          aspectRatio: "195 / 86",
        },
      },
      {
        href: "/retirement-planning-for-physicians",
        name: "Retirement planning for physicians",
        image: {
          src: `${IMG}/05-adjacent-planning-retirement-route.jpg`,
          alt: "",
          aspectRatio: "195 / 89",
        },
      },
      {
        href: "/legacy-estate-planning",
        name: "Legacy and estate planning",
        image: {
          src: `${IMG}/05-adjacent-planning-legacy-route.jpg`,
          alt: "",
          aspectRatio: "195 / 89",
        },
      },
      {
        href: "/checkup",
        name: "Physician financial checkup",
        image: {
          src: `${IMG}/05-adjacent-planning-checkup-route.jpg`,
          alt: "",
          aspectRatio: "195 / 92",
        },
      },
    ],
  },
  nextStep: {
    mediaSide: "left",
    headline: "Bring the decision into one coordinated strategy.",
    body: "Schedule a confidential strategy call to review the questions that are active for your role, timeline, and professional team.",
    primaryCta: { label: "Schedule a Strategy Call", href: "/schedule" },
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    image: {
      src: `${IMG}/06-next-step-closing-consultation-desk.jpg`,
      alt: "Night consultation desk with an open planning ledger, a leather chair, a lamp, and bookshelves",
      objectPosition: "45% 50%",
    },
  },
};
