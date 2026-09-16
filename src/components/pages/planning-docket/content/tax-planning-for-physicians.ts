import type { DocketPageContent } from "../content-types";

const IMG = "/images/design/tax-planning-for-physicians/elements";

/**
 * Copy source: _design_inputs/pages/tax-planning-for-physicians/
 * section_manifest.json (revision-2026-09-15-image-first-page-mode).
 * Manifest wins for every string; refs win for the variant choices.
 */
export const TAX_PLANNING_DOCKET: DocketPageContent = {
  slug: "tax-planning-for-physicians",
  metaDescription:
    "Tax planning for physicians should be proactive, coordinated, and year-round. For many medical professionals, taxes are one of the largest lifetime expenses.",
  opening: {
    variant: "split",
    eyebrow: "Tax Strategy",
    headline:
      "Tax planning for physicians should be proactive, coordinated, and year-round.",
    body: "For many medical professionals, taxes are one of the largest lifetime expenses, and tax decisions often touch retirement plans, practice structure, compensation timing, charitable giving, and estate coordination.",
    primaryCta: { label: "Schedule a Strategy Call", href: "/schedule" },
    secondaryLink: {
      label: "See adjacent planning areas",
      href: "#adjacent-planning",
    },
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    image: {
      src: `${IMG}/01-opening-docket-tax-worktable.jpg`,
      alt: "Physician tax-planning worktable with annotated source documents, a CPA coordination note, a pen, and a stethoscope",
      objectPosition: "46% 50%",
    },
  },
  demand: {
    variant: "stacked",
    headline: "Situations that should trigger a review.",
    body: "Use this page when a decision is approaching, not only after a deadline has passed.",
    items: [
      "Year-end compensation decisions",
      "Retirement-plan contribution design",
      "Roth conversion analysis",
      "Charitable-giving timing",
      "Business-owner compensation and entity questions",
    ],
    image: {
      src: `${IMG}/02-demand-situations-tax-review-still-life.jpg`,
      alt: "Navy clinical portfolio with tabbed files, a fountain pen, and a stethoscope on a planning desk",
    },
  },
  documents: {
    mediaPosition: "bottom",
    itemIcon: "document",
    headline: "What to have in view.",
    body: "The first conversation can stay high-level; sensitive documents should not be sent through the website.",
    items: [
      "Recent tax return summary for discussion with a CPA",
      "Retirement-plan options and employer benefits",
      "W-2, 1099, or practice income sources",
      "Known year-end decisions or planned charitable gifts",
    ],
    image: {
      src: `${IMG}/03-documents-needed-document-strip.jpg`,
      alt: "",
    },
  },
  boundary: {
    layout: "rooms",
    headline: "What Elite coordinates and what stays with the right professional.",
    body: "Elite coordinates planning questions with the physician's CPA; it does not prepare tax returns or replace professional tax advice.",
    roles: [
      {
        label: "Elite Physicians Wealth Planning",
        kind: "hub",
        image: {
          src: `${IMG}/04-coordination-boundary-elite-room-detail.jpg`,
          alt: "",
          aspectRatio: "285 / 130",
        },
      },
      {
        label: "CPA or tax professional",
        kind: "partner",
        image: {
          src: `${IMG}/04-coordination-boundary-cpa-room-detail.jpg`,
          alt: "",
          aspectRatio: "340 / 155",
        },
      },
      {
        label: "Attorney where legal documents are involved",
        kind: "partner",
        image: {
          src: `${IMG}/04-coordination-boundary-attorney-room-detail.jpg`,
          alt: "",
          aspectRatio: "300 / 100",
        },
      },
      {
        label: "TPA, payroll, benefits, or insurance professionals when relevant",
        kind: "partner",
        image: {
          src: `${IMG}/04-coordination-boundary-tpa-room-detail.jpg`,
          alt: "",
          aspectRatio: "130 / 200",
        },
      },
    ],
  },
  adjacent: {
    layout: "stair",
    headline: "The neighboring decisions.",
    body: "This topic rarely stands alone. The related pages help a physician see what changes when one decision moves.",
    explore: {
      label: "Explore related planning",
      href: "/retirement-planning-for-physicians",
    },
    routes: [
      {
        href: "/retirement-planning-for-physicians",
        name: "Retirement planning for physicians",
        image: {
          src: `${IMG}/05-adjacent-planning-retirement-route.jpg`,
          alt: "",
          aspectRatio: "214 / 72",
        },
      },
      {
        href: "/wealth-management-for-physicians",
        name: "Wealth management for physicians",
        image: {
          src: `${IMG}/05-adjacent-planning-wealth-route.jpg`,
          alt: "",
          aspectRatio: "230 / 80",
        },
      },
      {
        href: "/practice-owner-planning",
        name: "Practice owner planning",
        image: {
          src: `${IMG}/05-adjacent-planning-practice-route.jpg`,
          alt: "",
          aspectRatio: "235 / 77",
        },
      },
      {
        href: "/legacy-estate-planning",
        name: "Legacy and estate planning",
        image: {
          src: `${IMG}/05-adjacent-planning-legacy-route.jpg`,
          alt: "",
          aspectRatio: "250 / 80",
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
      src: `${IMG}/06-next-step-closing-office.jpg`,
      alt: "Private advisory office at dusk with an empty leather chair, a city window, and an open planning dossier",
      objectPosition: "60% 50%",
    },
  },
};
