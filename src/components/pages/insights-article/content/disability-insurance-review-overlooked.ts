import type { ArticleContent } from "../content-types";

const IMG = "/images/design/insights--disability-insurance-review-overlooked/elements";

/**
 * Manifest copy for /insights/disability-insurance-review-overlooked
 * (revision-2026-09-15-image-first). Content strings are verbatim from
 * required_sections[].content; link labels are the route registry navLabels.
 * Frame-crop recipes live in the page-owned
 * content/disability-insurance-review-overlooked.css.
 */
export const DISABILITY_INSURANCE_REVIEW: ArticleContent = {
  hero: {
    eyebrow: "Wealth & Risk",
    headline: "Disability Insurance Review: Questions Physicians Often Overlook",
    body: "Own-occupation, portability, and definition questions worth revisiting.",
    image: {
      src: `${IMG}/01-editorial-state-hero-policy-documents.png`,
      alt: "Navy disability insurance policy binder with a fountain pen, clipped rider cards, and a brass lamp on a dark desk",
      frameClass: "",
    },
  },
  verifiedTeaser: {
    headline: "What is confirmed so far.",
    body: "Own-occupation, portability, and definition questions worth revisiting.",
    items: [
      "The topic and its planning category are confirmed.",
      "It is written for physicians and practice owners.",
      "The full text is still being prepared for publication.",
    ],
    image: {
      src: `${IMG}/02-verified-teaser-folder-files.png`,
      alt: "Corner of a manila tabbed folder over layered navy and mist papers on an ivory desk",
      frameClass: "art-frame--dis-teaser",
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
      src: `${IMG}/03-manuscript-gate-folder.png`,
      alt: "Cream string-tie envelope with a navy folder edge behind it on a white field",
      frameClass: "art-frame--dis-gate",
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
      src: `${IMG}/04-source-review-gate-filing-cabinet.png`,
      alt: "Navy filing box of cream and mist folder tabs beside a stethoscope and fountain pen",
      frameClass: "art-frame--dis-review",
    },
  },
  relatedReading: {
    headline: "Related planning paths for this topic.",
    body: "While the full article is being prepared, these planning pages already carry the verified context behind this topic.",
    links: [
      { href: "/wealth-management-for-physicians", label: "Wealth management" },
      { href: "/physicians-specialists", label: "Physicians & specialists" },
      { href: "/insights", label: "Insights" },
    ],
    image: {
      src: `${IMG}/05-related-reading-notebook-stethoscope.png`,
      alt: "White notepad and pen on a navy leather folio with a stethoscope on a dark desk",
      frameClass: "art-frame--dis-related",
    },
  },
} as const;
