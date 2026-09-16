import type { DocketPageContent } from "../content-types";

const IMG = "/images/design/practice-owner-planning/elements";

/**
 * Copy source: practice-owner-planning section_manifest.json
 * (revision-2026-09-15-image-first-page-mode). Manifest wins for every
 * string; refs win for the variant choices (split opening with the arc
 * seam, card ledger, bottom document fan with stacked circled checks,
 * niche-band boundary, cascade adjacent field, media-left close).
 */
export const PRACTICE_OWNER_DOCKET: DocketPageContent = {
  slug: "practice-owner-planning",
  metaDescription:
    "Your practice is a major part of your wealth strategy: retirement-plan design, cash flow, entity questions, succession planning, and practice exit decisions.",
  opening: {
    variant: "split",
    seam: "arc",
    eyebrow: "Practice & Business Planning",
    headline:
      "Your practice is more than a business. It is a major part of your wealth strategy.",
    body: "Practice owners face retirement-plan design, business cash flow, employee benefits, entity questions, buy-sell coordination, succession planning, and practice exit decisions that employed physicians may never encounter.",
    primaryCta: { label: "Schedule a Strategy Call", href: "/schedule" },
    secondaryLink: {
      label: "See adjacent planning areas",
      href: "#adjacent-planning",
    },
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    image: {
      src: `${IMG}/01-opening-docket-practice-owner-worktable.jpg`,
      alt: "Practice owner reviewing retirement-plan design notes over operating summaries and a cash-flow plan at a navy worktable",
      objectPosition: "50% 100%",
    },
  },
  demand: {
    variant: "card",
    headline: "Situations that should trigger a review.",
    body: "Use this page when a decision is approaching, not only after a deadline has passed.",
    items: [
      "Owner compensation decisions",
      "Cash balance or defined benefit plan evaluation",
      "Employee-benefit and payroll coordination",
      "Buy-sell or key-person protection review",
      "Succession or sale preparation",
    ],
    image: {
      src: `${IMG}/02-demand-situations-practice-review-still-life.jpg`,
      alt: "Practice operating notes and a benefits summary beside a laptop and coffee on a navy review desk",
      objectPosition: "40% 50%",
    },
  },
  documents: {
    mediaPosition: "bottom",
    itemIcon: "circled-check",
    itemStyle: "stacked",
    headline: "What to have in view.",
    body: "The first conversation can stay high-level; sensitive documents should not be sent through the website.",
    items: [
      "Practice cash-flow profile",
      "Employee demographics for retirement-plan design",
      "Existing buy-sell or entity documents",
      "CPA, attorney, TPA, payroll, and benefits contact roles",
    ],
    image: {
      src: `${IMG}/03-documents-needed-practice-document-fan.jpg`,
      alt: "",
    },
  },
  boundary: {
    layout: "niches",
    headline: "What Elite coordinates and what stays with the right professional.",
    body: "Planning coordinates questions with CPAs, attorneys, TPAs, payroll providers, and benefits professionals; it does not replace those professionals.",
    roles: [
      {
        label: "Elite Physicians Wealth Planning",
        kind: "hub",
        image: {
          src: `${IMG}/04-coordination-boundary-elite-niche.jpg`,
          alt: "",
          aspectRatio: "280 / 220",
        },
      },
      {
        label: "CPA or tax professional",
        kind: "partner",
        image: {
          src: `${IMG}/04-coordination-boundary-cpa-niche.jpg`,
          alt: "",
          aspectRatio: "250 / 320",
        },
      },
      {
        label: "Attorney where legal documents are involved",
        kind: "partner",
        image: {
          src: `${IMG}/04-coordination-boundary-attorney-niche.jpg`,
          alt: "",
          aspectRatio: "235 / 320",
        },
      },
      {
        label: "TPA, payroll, benefits, or insurance professionals when relevant",
        kind: "partner",
        image: {
          src: `${IMG}/04-coordination-boundary-tpa-niche.jpg`,
          alt: "",
          aspectRatio: "260 / 320",
        },
      },
    ],
  },
  adjacent: {
    layout: "cascade",
    headline: "The neighboring decisions.",
    body: "This topic rarely stands alone. The related pages help a physician see what changes when one decision moves.",
    explore: {
      label: "Explore related planning",
      href: "/tax-planning-for-physicians",
    },
    routes: [
      {
        href: "/tax-planning-for-physicians",
        name: "Tax planning for physicians",
        image: {
          src: `${IMG}/05-adjacent-planning-tax-route.jpg`,
          alt: "",
          aspectRatio: "280 / 70",
        },
      },
      {
        href: "/retirement-planning-for-physicians",
        name: "Retirement planning for physicians",
        image: {
          src: `${IMG}/05-adjacent-planning-retirement-route.jpg`,
          alt: "",
          aspectRatio: "280 / 70",
        },
      },
      {
        href: "/insights/cash-balance-defined-benefit-decision-guide",
        name: "Cash balance and defined benefit decision guide",
        image: {
          src: `${IMG}/05-adjacent-planning-cash-balance-route.jpg`,
          alt: "",
          aspectRatio: "280 / 70",
        },
      },
      {
        href: "/insights/preparing-for-practice-sale",
        name: "Preparing for a practice sale",
        image: {
          src: `${IMG}/05-adjacent-planning-sale-route.jpg`,
          alt: "",
          aspectRatio: "280 / 70",
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
      src: `${IMG}/06-next-step-practice-closing-office.jpg`,
      alt: "Night practice office with a leather chair, city skyline, and an open coordination folder on the desk",
      objectPosition: "50% 60%",
    },
  },
};
