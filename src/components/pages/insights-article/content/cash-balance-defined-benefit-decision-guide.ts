import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--cash-balance-defined-benefit-decision-guide/elements";

/**
 * Manifest copy for /insights/cash-balance-defined-benefit-decision-guide
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 */
export const CASH_BALANCE_DECISION_GUIDE: ArticleContent = {
  hero: {
    eyebrow: "Practice Owner Strategy",
    headline:
      "Cash Balance and Defined Benefit Plans: A Decision Guide for Medical Practice Owners",
    body: "How advanced qualified plans fit into a practice owner's larger picture.",
    image: {
      src: `${IMG}/01-editorial-state-hero-desk-scene.png`,
      alt: "Navy journal with a pen beside a cream clipboard folio, stethoscope, and pen cup on a dark desk by a window",
      frameClass: "",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "How advanced qualified plans fit into a practice owner's larger picture.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/02-verified-teaser-papers-pen.png`,
      alt: "Edge of a stack of ivory papers with cream divider tabs and one navy tab",
      frameClass: "art-frame--cbdb-teaser",
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
      src: `${IMG}/03-manuscript-gate-envelope-clipboard.png`,
      alt: "Cream string-tie envelope beside a clipboard folio with blank pages, file tabs, and a navy pen on a white desk",
      frameClass: "art-frame--cbdb-gate",
    },
    mediaSide: "right",
  },
  sourceReviewGate: {
    headline: "The standards this article is held to.",
    items: [
      "Tax, legal, insurance, and investment statements are published only after current source review.",
      "An expert-review note appears only when that review has actually taken place.",
      "Everything published here matches the content the practice has approved.",
    ],
    image: {
      src: `${IMG}/04-source-and-review-gate-hands-documents.png`,
      alt: "Navy leather notebook on a desk in front of a professional in a white coat",
      frameClass: "art-frame--cbdb-review",
    },
  },
  relatedReading: {
    mediaSide: "left",
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/practice-owner-planning", label: "Practice owner planning" },
      { href: "/retirement-planning-for-physicians", label: "Retirement planning" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/05-related-reading-navy-folder.png`,
      alt: "Navy expanding file folder holding cream tabbed dividers",
      frameClass: "art-frame--cbdb-related",
    },
  },
} as const;
