import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--beneficiaries-trusts-ownership-checklist/elements";

/**
 * Manifest copy for /insights/beneficiaries-trusts-ownership-checklist
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 * Frame recipes live in content/beneficiaries-trusts-ownership-checklist.css.
 */
export const BENEFICIARIES_TRUSTS_OWNERSHIP: ArticleContent = {
  hero: {
    eyebrow: "Estate & Family",
    headline:
      "Beneficiaries, Trusts, and Account Ownership: A Physician Estate-Plan Coordination Checklist",
    body: "Where estate documents and account titling most often disconnect.",
    image: {
      src: `${IMG}/hero-estate-plan-ledgers.jpg`,
      alt: "Navy Estate Plan binder with beneficiary, account, and trust index tabs beside a Revocable Living Trust folio and a fountain pen",
      frameClass: "",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "Where estate documents and account titling most often disconnect.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/verified-estate-binder.jpg`,
      alt: "Cream tabbed estate binder pages fanned across an ivory desk",
      frameClass: "art-frame--est-teaser",
    },
    mediaSide: "right",
  },
  manuscriptGate: {
    headline: "Before this article is published.",
    items: [
      "A complete, approved manuscript",
      "Author and date attribution only once confirmed",
      "A financial-compliance review of significant claims",
      "Only approved copy, conclusions, examples, and citations",
    ],
    image: {
      src: `${IMG}/estate-manuscript-files.jpg`,
      alt: "Cream string-tied manuscript folder beneath a navy Manuscript Gate plaque, with tabbed source dividers, a fountain pen, and reading glasses",
      frameClass: "art-frame--est-gate",
    },
    mediaSide: "left",
  },
  sourceReviewGate: {
    mediaSide: "left",
    headline: "The standards this article is held to.",
    items: [
      "Tax, legal, insurance, and investment statements are published only after current source review.",
      "An expert-review note appears only when that review has actually taken place.",
      "Everything published here matches the content the practice has approved.",
    ],
    image: {
      src: `${IMG}/estate-source-review-desk.jpg`,
      alt: "Stethoscope coiled on a pale blue medical desk",
      frameClass: "art-frame--est-review",
    },
  },
  relatedReading: {
    mediaSide: "left",
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/legacy-estate-planning", label: "Legacy & estate planning" },
      { href: "/wealth-management-for-physicians", label: "Wealth management" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/estate-related-still-life.jpg`,
      alt: "Navy Estate & Family volume stacked on a linen book beside a Family Trust document, fountain pen, and brass tray",
      frameClass: "art-frame--est-related",
    },
  },
} as const;
