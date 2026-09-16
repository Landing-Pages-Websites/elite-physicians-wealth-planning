import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--physician-financial-checkup-seven-areas/elements";

/**
 * Manifest copy for /insights/physician-financial-checkup-seven-areas
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 */
export const PHYSICIAN_FINANCIAL_CHECKUP: ArticleContent = {
  hero: {
    eyebrow: "Career-Stage Planning",
    headline:
      "The Physician Financial Checkup: Seven Areas That Should Work Together",
    body: "A framework for looking at cash flow, taxes, retirement, investments, protection, estate, and practice planning as one system.",
    image: {
      src: `${IMG}/01-editorial-state-hero-photo.jpg`,
      alt: "Navy journal with a gold wax seal beside a stethoscope and imaging film on a dark desk",
      frameClass: "",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "A framework for looking at cash flow, taxes, retirement, investments, protection, estate, and practice planning as one system.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/02-verified-teaser-photo.jpg`,
      alt: "Fountain pen resting on a fan of unmarked ivory envelopes",
      frameClass: "art-frame--checkup-teaser",
    },
    mediaSide: "left",
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
      src: `${IMG}/03-manuscript-gate-photo.jpg`,
      alt: "Sealed navy document sleeve tied with string on a white desk beside a fountain pen",
      frameClass: "art-frame--checkup-gate",
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
      src: `${IMG}/04-source-and-review-gate-photo.jpg`,
      alt: "Hands reviewing planning documents with a pen, in a cool blue tone",
      frameClass: "art-frame--checkup-review",
    },
  },
  relatedReading: {
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/checkup", label: "Financial checkup" },
      { href: "/services", label: "All services" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/05-related-reading-photo.jpg`,
      alt: "Open lined notebook in a navy folio with divider tabs, a stethoscope resting above",
      frameClass: "art-frame--checkup-related",
    },
  },
} as const;
