import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--preparing-for-practice-sale/elements";

/**
 * Manifest copy for /insights/preparing-for-practice-sale
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 * Frame-crop recipes live in the page-owned
 * content/preparing-for-practice-sale.css.
 */
export const PREPARING_FOR_PRACTICE_SALE: ArticleContent = {
  hero: {
    eyebrow: "Practice Owner Strategy",
    headline:
      "Preparing Financially for the Sale or Transition of a Medical Practice",
    body: "Personal-plan questions to bring alongside a valuation and legal team.",
    image: {
      src: `${IMG}/hero-practice-portfolio.jpg`,
      alt: "Navy desk with a valuation folder, legal pad and fountain pen, leather portfolio, stethoscope, and matching binders",
      frameClass: "",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "Personal-plan questions to bring alongside a valuation and legal team.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/verified-source-files.jpg`,
      alt: "Stacked cream ledgers with a mist source tab, a navy pen, and a handwritten planning sheet",
      frameClass: "art-frame--ps-teaser",
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
      src: `${IMG}/manuscript-gate-folder.jpg`,
      alt: "Cream string-tie manuscript envelope with review tabs over a paper stack beside a fountain pen",
      frameClass: "art-frame--ps-gate",
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
      src: `${IMG}/source-review-files.jpg`,
      alt: "Navy filing tray of labeled source tabs above a stethoscope and pen on review papers",
      frameClass: "art-frame--ps-review",
    },
  },
  relatedReading: {
    mediaSide: "left",
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/practice-owner-planning", label: "Practice owner planning" },
      { href: "/wealth-management-for-physicians", label: "Wealth management" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/related-path-files.jpg`,
      alt: "Cream folder tabs in a navy tray beside a pen on a pale desk",
      frameClass: "art-frame--ps-related",
    },
  },
} as const;
