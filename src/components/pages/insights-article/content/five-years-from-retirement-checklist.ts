import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--five-years-from-retirement-checklist/elements";

/**
 * Manifest copy for /insights/five-years-from-retirement-checklist
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 */
export const FIVE_YEARS_FROM_RETIREMENT: ArticleContent = {
  hero: {
    eyebrow: "Retirement & Income",
    headline: "Five Years From Retirement: A Physician's Planning Checklist",
    body: "The conversations to have before the transition begins.",
    image: {
      src: `${IMG}/01-editorial-state-hero-desk-hero.png`,
      alt: "Lamplit desk at dusk with a navy notebook, handwritten papers, and a stethoscope",
      frameClass: "",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "The conversations to have before the transition begins.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/02-verified-teaser-pen-notebook.png`,
      alt: "Corner of a linen-bound notebook with a dark bookmark over a cream desk",
      frameClass: "art-frame--fyr-teaser",
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
      src: `${IMG}/03-manuscript-gate-envelope.png`,
      alt: "Sealed white string-tie envelope standing upright on a pale field",
      frameClass: "art-frame--fyr-gate",
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
      src: `${IMG}/04-source-and-review-gate-documents.png`,
      alt: "File dividers tabbed tax, legal, and insurance beneath a navy folio and fountain pen",
      frameClass: "art-frame--fyr-review",
    },
  },
  relatedReading: {
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/retirement-planning-for-physicians", label: "Retirement planning" },
      { href: "/legacy-estate-planning", label: "Legacy & estate planning" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/05-related-reading-retirement-notebook.png`,
      alt: "Retirement planning book resting on a navy leather folio with a pen, beside a glass of water",
      frameClass: "art-frame--fyr-related",
    },
  },
} as const;
