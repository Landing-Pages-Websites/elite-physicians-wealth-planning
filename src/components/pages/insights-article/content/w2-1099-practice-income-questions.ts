import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--w2-1099-practice-income-questions/elements";

/**
 * Manifest copy for /insights/w2-1099-practice-income-questions
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 */
export const W2_1099_PRACTICE_INCOME: ArticleContent = {
  hero: {
    eyebrow: "Physician Tax Strategy",
    headline:
      "W-2, 1099, and Practice Income: Questions Physicians Should Ask Before Year-End",
    body: "Compensation-source questions that shape tax and retirement planning.",
    image: {
      src: `${IMG}/01-editorial-state-hero-desk-scene.png`,
      alt: "Navy planning volumes, a medical notebook with a fountain pen, and a wax-sealed envelope under lamplight",
      frameClass: "art-hero--w2",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "Compensation-source questions that shape tax and retirement planning.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/02-verified-teaser-pen-paper-composition.png`,
      alt: "Ballpoint pen and blank tabbed papers beside a closed cream notebook",
      frameClass: "art-frame--w2-teaser",
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
      src: `${IMG}/03-manuscript-gate-envelope-wax-seal.png`,
      alt: "White envelope closed with a navy wax seal, marked as a manuscript not for publication",
      frameClass: "art-frame--w2-gate",
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
      src: `${IMG}/04-source-and-review-gate-filing-stacks.png`,
      alt: "Navy filing box holding cream and white document dividers",
      frameClass: "art-frame--w2-review",
    },
  },
  relatedReading: {
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/tax-planning-for-physicians", label: "Tax planning" },
      { href: "/practice-owner-planning", label: "Practice owner planning" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/05-related-reading-medical-books-stethoscope.png`,
      alt: "Stethoscope coiled on a navy medical volume above a gold-ruled planning pad and pen",
      frameClass: "art-frame--w2-related",
    },
  },
} as const;
