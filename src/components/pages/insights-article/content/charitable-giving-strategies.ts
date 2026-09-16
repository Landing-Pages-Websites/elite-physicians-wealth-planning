import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--charitable-giving-strategies/elements";

/**
 * Manifest copy for /insights/charitable-giving-strategies
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 * Frame recipes live in content/charitable-giving-strategies.css.
 */
export const CHARITABLE_GIVING_STRATEGIES: ArticleContent = {
  hero: {
    eyebrow: "Physician Tax Strategy",
    headline: "Charitable Giving Strategies for High-Income Medical Professionals",
    body: "Vehicles and timing decisions worth reviewing with a tax professional.",
    image: {
      src: `${IMG}/hero-donor-intent.jpg`,
      alt: "Navy Donor Intent folio titled A Legacy of Purpose over a cream manuscript folder with a fountain pen",
      frameClass: "art-hero--chg",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "Vehicles and timing decisions worth reviewing with a tax professional.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/verified-charitable-files.jpg`,
      alt: "Layered cream planning folders with a notched tab on an ivory desk",
      frameClass: "art-frame--chg-teaser",
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
      src: `${IMG}/charitable-manuscript-envelope.jpg`,
      alt: "Cream string-and-button envelope stamped Manuscript Hold",
      frameClass: "art-frame--chg-gate",
    },
    mediaSide: "right",
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
      src: `${IMG}/charitable-source-files.jpg`,
      alt: "Physician in a white coat filing cream source folders into a navy file box beside a stethoscope and fountain pen",
      frameClass: "art-frame--chg-review",
    },
  },
  relatedReading: {
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/tax-planning-for-physicians", label: "Tax planning" },
      { href: "/legacy-estate-planning", label: "Legacy & estate planning" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/charitable-related-ledgers.jpg`,
      alt: "Navy Tax Planning for Physicians ledger with a Legacy Planning tab and a ruled Insights worksheet on a cream desk",
      frameClass: "art-frame--chg-related",
    },
  },
} as const;
