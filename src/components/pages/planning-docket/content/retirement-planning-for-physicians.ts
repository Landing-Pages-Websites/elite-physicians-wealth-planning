import type { DocketPageContent } from "../content-types";

const IMG = "/images/design/retirement-planning-for-physicians/elements";

/**
 * Copy source: retirement-planning-for-physicians section_manifest.json
 * (revision-2026-09-15-image-first-page-mode). Manifest wins for every
 * string; refs win for the variant choices. The ledger and checklist kickers
 * are the manifest's own interaction labels ("Decision trigger ledger",
 * "Preparation checklist", "Professional boundary map").
 */
export const RETIREMENT_PLANNING_DOCKET: DocketPageContent = {
  slug: "retirement-planning-for-physicians",
  metaDescription:
    "Retirement planning for physicians is more than choosing a retirement date: one coordinated income strategy across employer plans, IRAs, pensions, and taxes.",
  opening: {
    variant: "canvas",
    eyebrow: "Retirement Strategy",
    headline:
      "Retirement planning for physicians is more than choosing a retirement date.",
    body: "The planning task is turning employer plans, IRAs, brokerage accounts, practice interests, pensions, insurance arrangements, taxes, healthcare, inflation, family goals, and legacy priorities into a coordinated income strategy.",
    primaryCta: { label: "Schedule a Strategy Call", href: "/schedule" },
    secondaryLink: {
      label: "See adjacent planning areas",
      href: "#adjacent-planning",
    },
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    image: {
      src: `${IMG}/01-opening-docket-retirement-dossier.jpg`,
      alt: "Physician-household retirement dossier with tabbed planning categories beside a caduceus notebook and coffee on a navy desk",
      objectPosition: "50% 22%",
    },
  },
  demand: {
    variant: "ambient",
    ledgerKicker: "Decision trigger ledger",
    headline: "Situations that should trigger a review.",
    body: "Use this page when a decision is approaching, not only after a deadline has passed.",
    items: [
      "Five-year retirement window",
      "Withdrawal sequencing questions",
      "Medicare and healthcare-cost timing",
      "Practice exit planning",
      "Lifestyle and family legacy decisions",
    ],
    image: {
      src: `${IMG}/02-demand-situations-retirement-book-and-glasses.jpg`,
      alt: "Navy retirement-strategy book with reading glasses and a fountain pen on a planning calendar in window light",
    },
  },
  documents: {
    mediaPosition: "flank",
    itemIcon: "circled-check",
    itemStyle: "inline",
    kicker: "Preparation checklist",
    headline: "What to have in view.",
    body: "The first conversation can stay high-level; sensitive documents should not be sent through the website.",
    items: [
      "Projected retirement date range",
      "Retirement-account and taxable-account inventory",
      "Expected lifestyle and spending ranges",
      "Practice ownership or pension details",
    ],
    image: {
      src: `${IMG}/03-documents-needed-retirement-documents.jpg`,
      alt: "",
      aspectRatio: "350 / 372",
    },
    secondImage: {
      src: `${IMG}/03-documents-needed-practice-documents.jpg`,
      alt: "",
      aspectRatio: "246 / 324",
    },
  },
  boundary: {
    layout: "plan",
    kicker: "Professional boundary map",
    headline: "What Elite coordinates and what stays with the right professional.",
    body: "Do not imply guaranteed income, tax savings, Medicare outcomes, or portfolio longevity.",
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
    layout: "ledger",
    headline: "The neighboring decisions.",
    body: "This topic rarely stands alone. The related pages help a physician see what changes when one decision moves.",
    explore: {
      label: "Explore related planning",
      href: "/wealth-management-for-physicians",
    },
    routes: [
      {
        href: "/wealth-management-for-physicians",
        name: "Wealth management for physicians",
        image: {
          src: `${IMG}/05-adjacent-planning-wealth-route.jpg`,
          alt: "",
          aspectRatio: "234 / 83",
        },
      },
      {
        href: "/tax-planning-for-physicians",
        name: "Tax planning for physicians",
        image: {
          src: `${IMG}/05-adjacent-planning-tax-route.jpg`,
          alt: "",
          aspectRatio: "234 / 78",
        },
      },
      {
        href: "/legacy-estate-planning",
        name: "Legacy and estate planning",
        image: {
          src: `${IMG}/05-adjacent-planning-legacy-route.jpg`,
          alt: "",
          aspectRatio: "234 / 75",
        },
      },
      {
        href: "/insights/five-years-from-retirement-checklist",
        name: "Five years from retirement checklist",
        image: {
          src: `${IMG}/05-adjacent-planning-checklist-route.jpg`,
          alt: "",
          aspectRatio: "234 / 79",
        },
      },
    ],
  },
  nextStep: {
    mediaSide: "right",
    headline: "Bring the decision into one coordinated strategy.",
    body: "Schedule a confidential strategy call to review the questions that are active for your role, timeline, and professional team.",
    primaryCta: { label: "Schedule a Strategy Call", href: "/schedule" },
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    image: {
      src: `${IMG}/06-next-step-lamp-lit-retirement-desk.jpg`,
      alt: "Lamp-lit library desk at night with a leather chair and an open planning notebook",
      objectPosition: "50% 62%",
    },
  },
};
