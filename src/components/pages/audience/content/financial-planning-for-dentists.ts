import type { AudiencePageContent } from "../content-types";
import { relatedLink } from "./shared";

const IMG = "/images/design/financial-planning-for-dentists/elements";

/**
 * /financial-planning-for-dentists — every visible string transcribed from
 * the page's section_manifest.json. Career-scenario chip labels are lifted
 * verbatim from that section's body ("…when the practice is both workplace
 * and wealth engine"). The hero raster's baked headline fragment and the
 * baked gold seams on the ledger, scenario and room rasters were trimmed;
 * those layers are live code.
 */
export const FINANCIAL_PLANNING_FOR_DENTISTS_CONTENT: AudiencePageContent = {
  slug: "financial-planning-for-dentists",
  roleContext: {
    eyebrow: "Dentists & Dental Specialists",
    eyebrowStyle: "display",
    headline: "Wealth strategy for dentists and dental specialists.",
    body: "Dentists and dental specialists often manage practice ownership, equipment and practice debt, staffing costs, uneven cash flow, retirement-plan decisions, and eventual practice transition.",
    primaryCta: "Schedule a Strategy Call",
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    boundaryStyle: "framed",
    seamSweep: true,
    scene: {
      src: `${IMG}/role-context-scene.jpg`,
      alt: "Dental operatory behind a desk holding an equipment investment plan, a practice-debt binder, and a practice cash-flow notebook",
      objectPosition: "45% 55%",
    },
  },
  decisionPatterns: {
    headline: "Planning questions that tend to show up for this role.",
    body: "See the shape of your own decisions before you ask anyone for advice.",
    items: [
      "Associate compensation and future buy-in",
      "Equipment, expansion, and debt decisions",
      "Owner compensation and staff benefits",
      "Buy-sell and continuity planning",
      "Practice valuation, succession, and exit planning",
    ],
    rowStyle: "staircase",
    photoPlacement: "top",
    photo: {
      src: `${IMG}/decision-patterns-scene.jpg`,
      alt: "Gloved hands selecting dental instruments above a clipboard of notes",
      objectPosition: "50% 25%",
    },
  },
  careerScenario: {
    headline: "The career structure changes the planning work.",
    body: "Personal and business planning are rarely separate when the practice is both workplace and wealth engine.",
    linkLabel: "Review the planning process",
    variant: "paths",
    overlays: ["Workplace", "Wealth engine"],
    scene: {
      src: `${IMG}/career-scenario-scene.jpg`,
      alt: "Glass-walled dental operatory corridor behind a consultation table with a navy notebook and pen",
      objectPosition: "50% 45%",
    },
  },
  coordinationMap: {
    headline: "One conversation across the relevant pillars.",
    body: "Tax, wealth, retirement, practice or compensation, risk, and legacy questions are sequenced together rather than left to separate meetings.",
    variant: "vignette-loop",
    pillars: [
      { label: "Tax strategy", image: { src: `${IMG}/room-tax.jpg`, alt: "" } },
      {
        label: "Wealth management",
        image: { src: `${IMG}/room-wealth.jpg`, alt: "" },
      },
      {
        label: "Retirement strategy",
        image: { src: `${IMG}/room-retirement.jpg`, alt: "" },
      },
      {
        label: "Practice or compensation decisions",
        image: { src: `${IMG}/room-practice.jpg`, alt: "" },
      },
      {
        label: "Legacy and protection review",
        image: { src: `${IMG}/room-legacy.jpg`, alt: "" },
      },
    ],
  },
  questionsBeforeCall: {
    headline: "Questions to bring into the first review.",
    items: [
      "Which decisions have a deadline?",
      "Which professional already owns part of the answer?",
      "What needs to be coordinated before the next tax year or benefit cycle?",
    ],
    note: "Move from dental-specific ownership economics into practice-owner planning and the guide.",
    style: "navy-band",
    stillLife: {
      src: `${IMG}/review-questions-still-life.jpg`,
      alt: "Fountain pen resting at the edge of warm ivory paper",
      objectPosition: "20% 15%",
    },
  },
  relatedPaths: {
    headline: "Choose the planning path that fits the decision in front of you.",
    body: "Start with the broad strategy call or read the planning area closest to the current decision.",
    variant: "ladder",
    links: [
      relatedLink("tax-planning-for-physicians"),
      relatedLink("wealth-management-for-physicians"),
      relatedLink("retirement-planning-for-physicians"),
      relatedLink("practice-owner-planning"),
      relatedLink("checkup"),
    ],
    primaryCta: "Schedule a Strategy Call",
    background: {
      src: `${IMG}/related-paths-background.jpg`,
      alt: "",
      objectPosition: "50% 50%",
    },
  },
};
