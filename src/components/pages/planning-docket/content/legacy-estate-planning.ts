import type { DocketPageContent } from "../content-types";

const IMG = "/images/design/legacy-estate-planning/elements";

/**
 * Copy source: legacy-estate-planning section_manifest.json
 * (revision-2026-09-15-image-first-page-mode). Manifest wins for every
 * string; refs win for the variant choices (deep-veil canvas opening,
 * mirrored glyph ledger, top document strip on a gold thread, card
 * boundary diagram, stair adjacent field exiting on a dot).
 */
export const LEGACY_ESTATE_DOCKET: DocketPageContent = {
  slug: "legacy-estate-planning",
  metaDescription:
    "Legacy planning connects your wealth to the people and causes that matter most: estate documents, beneficiary designations, titling, and charitable giving.",
  opening: {
    variant: "canvas",
    veil: "deep",
    eyebrow: "Legacy Planning",
    headline:
      "Legacy planning helps connect your wealth to the people and causes that matter most.",
    body: "Legacy coordination connects estate documents, beneficiary designations, asset titling, insurance, charitable giving, family wealth transfer, and liquidity needs.",
    primaryCta: { label: "Schedule a Strategy Call", href: "/schedule" },
    secondaryLink: {
      label: "See adjacent planning areas",
      href: "#adjacent-planning",
    },
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    image: {
      src: `${IMG}/01-opening-docket-estate-coordination-ledger.jpg`,
      alt: "Beneficiary coordination ledger with family-document, titling, and attorney-coordination tabs beside a framed photograph and physician coat",
      objectPosition: "100% 45%",
    },
  },
  demand: {
    variant: "mirror",
    headline: "Situations that should trigger a review.",
    body: "Use this page when a decision is approaching, not only after a deadline has passed.",
    items: [
      "Beneficiary and account-titling review",
      "Trust-funding coordination",
      "Charitable intent and giving vehicles",
      "Practice or real-estate transfer questions",
      "Family communication and survivor planning",
    ],
    itemGlyphs: ["beneficiary", "trust", "giving", "property", "family"],
    image: {
      src: `${IMG}/02-demand-situations-estate-review-still-life.jpg`,
      alt: "Estate-planning binder with transfer tabs beside a physician coat and a handwritten note reading review before major decisions",
      objectPosition: "50% 40%",
    },
  },
  documents: {
    mediaPosition: "top",
    itemIcon: "circled-check",
    itemStyle: "thread",
    headline: "What to have in view.",
    body: "The first conversation can stay high-level; sensitive documents should not be sent through the website.",
    items: [
      "Estate-document status for attorney discussion",
      "Beneficiary designations and titling inventory",
      "Insurance and liquidity needs",
      "Family, charitable, and succession priorities",
    ],
    image: {
      /* Slot-cropped: the 556x230 source shows generated gibberish ("FUNOOR
         TRUST") below y167. The declared rectangle + top anchor keep only
         the clean Estate Plan Summary heading band in frame. */
      src: `${IMG}/03-documents-needed-estate-summary-strip.jpg`,
      alt: "",
      aspectRatio: "556 / 167",
      objectPosition: "50% 0%",
    },
  },
  boundary: {
    layout: "cards",
    headline: "What Elite coordinates and what stays with the right professional.",
    body: "Elite helps organize financial information and coordinate with qualified estate-planning attorneys; it does not draft legal documents.",
    roles: [
      { label: "Elite Physicians Wealth Planning", kind: "hub" },
      { label: "CPA or tax professional", kind: "partner" },
      { label: "Attorney where legal documents are involved", kind: "partner" },
      {
        label: "TPA, payroll, benefits, or insurance professionals when relevant",
        kind: "partner",
      },
    ],
  },
  adjacent: {
    layout: "stair",
    exploreAlign: "end",
    exitNode: "dot",
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
          aspectRatio: "210 / 68",
        },
      },
      {
        href: "/retirement-planning-for-physicians",
        name: "Retirement planning for physicians",
        image: {
          src: `${IMG}/05-adjacent-planning-retirement-route.jpg`,
          alt: "",
          aspectRatio: "220 / 67",
        },
      },
      {
        href: "/insights/beneficiaries-trusts-ownership-checklist",
        name: "Beneficiaries, trusts, and ownership checklist",
        image: {
          src: `${IMG}/05-adjacent-planning-ownership-route.jpg`,
          alt: "",
          aspectRatio: "224 / 69",
        },
      },
      {
        href: "/insights/long-term-care-survivor-planning",
        name: "Long-term care and survivor planning",
        image: {
          src: `${IMG}/05-adjacent-planning-survivor-route.jpg`,
          alt: "",
          aspectRatio: "232 / 67",
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
      src: `${IMG}/06-next-step-legacy-closing-office.jpg`,
      alt: "Lamp-lit study with a leather wingback chair and an open confidential planning dossier listing topics for review",
      objectPosition: "60% 55%",
    },
  },
};
