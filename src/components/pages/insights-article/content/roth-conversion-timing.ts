import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--roth-conversion-timing/elements";

/**
 * Manifest copy for /insights/roth-conversion-timing
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 * Frame-crop recipes live in the page-owned content/roth-conversion-timing.css.
 *
 * This page's extraction set carries no manuscript-gate raster (the plan
 * declared that frame pure-code), so the gate frame shows the page's own hero
 * still life recropped to its sealed-envelope subject — attested as an imagery
 * gap in the section implementation contract.
 */
export const ROTH_CONVERSION_TIMING: ArticleContent = {
  hero: {
    eyebrow: "Physician Tax Strategy",
    headline: "Roth Conversion Timing Before and After Retirement",
    body: "Scenarios where conversion windows may open and close.",
    image: {
      src: `${IMG}/01-editorial-state-hero-hero-photography.png`,
      alt: "Ivory string-tie envelope embossed with a caduceus beneath a fountain pen and a navy medical journal",
      frameClass: "",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "Scenarios where conversion windows may open and close.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/02-verified-teaser-right-col-photography.png`,
      alt: "Manila folder with a navy ballpoint pen and soft plant shadows on a cream desk",
      frameClass: "art-frame--roth-teaser",
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
      src: `${IMG}/01-editorial-state-hero-hero-photography.png`,
      alt: "Ivory manuscript envelope embossed with a caduceus, closed with brass buttons and navy string",
      frameClass: "art-frame--roth-gate",
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
      src: `${IMG}/04-source-and-review-gate-books-photography.png`,
      alt: "Hands sorting cream index tabs in a navy file box on a mist-blue desk",
      frameClass: "art-frame--roth-review",
    },
  },
  relatedReading: {
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/tax-planning-for-physicians", label: "Tax planning" },
      { href: "/retirement-planning-for-physicians", label: "Retirement planning" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/05-related-reading-stethoscope-photography.png`,
      alt: "Fountain pen resting on an open notebook beside a stethoscope head on an ivory desk",
      frameClass: "art-frame--roth-related",
    },
  },
} as const;
