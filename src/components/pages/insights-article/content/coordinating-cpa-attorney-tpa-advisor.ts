import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--coordinating-cpa-attorney-tpa-advisor/elements";

/**
 * The approved teaser frame for this article is pure typography — no owner
 * raster exists for it. The family media slot is suppressed by the page CSS
 * recipe, so this transparent placeholder is never painted or fetched over
 * the network.
 */
const TEASER_BLANK =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

/**
 * Manifest copy for /insights/coordinating-cpa-attorney-tpa-advisor
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 */
export const COORDINATING_ADVISORS: ArticleContent = {
  hero: {
    eyebrow: "Career-Stage Planning",
    headline:
      "How Physicians Can Coordinate a CPA, Attorney, TPA, and Financial Advisor",
    body: "A practical model for keeping outside professionals aligned around one plan.",
    image: {
      src: `${IMG}/01-editorial-state-hero-kraft-envelope-portfolio.png`,
      alt: "Kraft string-tie envelope on a dark desk beside a navy confidential folder, fountain pen, and stethoscope",
      frameClass: "",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "A practical model for keeping outside professionals aligned around one plan.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: TEASER_BLANK,
      alt: "",
      frameClass: "art-frame--cpa-teaser",
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
      src: `${IMG}/03-manuscript-gate-kraft-envelope-folder.png`,
      alt: "Sealed kraft string-tie envelope with tabbed dividers for tax, legal, insurance, and investments",
      frameClass: "art-frame--cpa-gate",
    },
    mediaSide: "left",
  },
  sourceReviewGate: {
    headline: "The standards this article is held to.",
    items: [
      "Tax, legal, insurance, and investment statements are published only after current source review.",
      "An expert-review note appears only when that review has actually taken place.",
      "Everything published here matches the content the practice has approved.",
    ],
    image: {
      src: `${IMG}/04-source-and-review-gate-advisor-reviewing-documents.png`,
      alt: "Hands paging through a bound stack of planning documents beside a navy folder and pen",
      frameClass: "art-frame--cpa-review",
    },
  },
  relatedReading: {
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/our-process", label: "Our process" },
      { href: "/services", label: "All services" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/05-related-reading-documents-books-surface.png`,
      alt: "Planning overview document with a gold paperclip resting on books and a navy leather notebook",
      frameClass: "art-frame--cpa-related",
    },
  },
} as const;
