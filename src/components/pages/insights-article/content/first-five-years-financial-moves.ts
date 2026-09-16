import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--first-five-years-financial-moves/elements";

/**
 * Manifest copy for /insights/first-five-years-financial-moves
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 */
export const FIRST_FIVE_YEARS: ArticleContent = {
  hero: {
    eyebrow: "Career-Stage Planning",
    headline:
      "Seven Financial Moves to Consider in the First Five Years of Practice",
    body: "Foundational decisions to consider between residency and mid-career.",
    image: {
      src: `${IMG}/01-editorial-state-hero-photo.jpg`,
      alt: "Closed navy notebook and pen on a dark desk beside a draped white physician coat",
      frameClass: "",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "Foundational decisions to consider between residency and mid-career.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/02-verified-teaser-photo.jpg`,
      alt: "Unmarked ivory tabbed folder resting on pale blue and cream papers",
      frameClass: "art-frame--ff-teaser",
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
      src: `${IMG}/03-manuscript-gate-photo.jpg`,
      alt: "Cream string-tie document envelope above a mist-blue filing tray",
      frameClass: "art-frame--ff-gate",
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
      alt: "Fanned row of cream, white, and navy file folders on a clinical desk",
      frameClass: "art-frame--ff-review",
    },
  },
  relatedReading: {
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/physicians", label: "Who we help" },
      { href: "/tax-planning-for-physicians", label: "Tax planning" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/05-related-reading-photo.jpg`,
      alt: "Navy pen on a cream notebook at a marble desk, books and a white coat behind",
      frameClass: "art-frame--ff-related",
    },
  },
} as const;
