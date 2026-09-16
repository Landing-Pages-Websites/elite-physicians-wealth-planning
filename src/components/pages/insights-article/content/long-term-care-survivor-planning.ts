import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--long-term-care-survivor-planning/elements";

/**
 * Manifest copy for /insights/long-term-care-survivor-planning
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 * Frame recipes live in content/long-term-care-survivor-planning.css.
 */
export const LONG_TERM_CARE_SURVIVOR_PLANNING: ArticleContent = {
  hero: {
    eyebrow: "Estate & Family",
    headline: "Long-Term Care and Survivor Planning for Physician Families",
    body: "Preparing the household for scenarios wealth alone may not solve.",
    image: {
      src: `${IMG}/hero-survivor-planning-desk.jpg`,
      alt: "Navy leather planning ledgers, eyeglasses, and a cream envelope on a desk under lamplight",
      frameClass: "art-hero--ltc",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "Preparing the household for scenarios wealth alone may not solve.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/verified-source-gate-ledger.jpg`,
      alt: "Navy string-tied source ledger with a fine gold border over a pale blue folio and cream file tabs",
      frameClass: "art-frame--ltc-teaser",
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
      src: `${IMG}/survivor-manuscript-envelope.jpg`,
      alt: "Large cream envelope with folded corner supports, marked as the manuscript gate",
      frameClass: "art-frame--ltc-gate",
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
      src: `${IMG}/survivor-source-review-desk.jpg`,
      alt: "Navy document box with staggered cream file dividers on a pale blue desk",
      frameClass: "art-frame--ltc-review",
    },
  },
  relatedReading: {
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/legacy-estate-planning", label: "Legacy & estate planning" },
      { href: "/retirement-planning-for-physicians", label: "Retirement planning" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/survivor-related-notebook.jpg`,
      alt: "Navy leather binder beside a cream note card and a black-and-gold pen on a charcoal desk",
      frameClass: "art-frame--ltc-related",
    },
  },
} as const;
