import type { AudiencePageContent, RelatedPathLink } from "../content-types";
import { relatedLink } from "./shared";

const IMG = "/images/design/financial-planning-for-crnas-nps-pas/elements";

const TAX: RelatedPathLink = relatedLink("tax-planning-for-physicians");
const WEALTH: RelatedPathLink = relatedLink("wealth-management-for-physicians");
const RETIREMENT: RelatedPathLink = relatedLink(
  "retirement-planning-for-physicians",
);
const PRACTICE: RelatedPathLink = relatedLink("practice-owner-planning");
const CHECKUP: RelatedPathLink = relatedLink("checkup");

/**
 * /financial-planning-for-crnas-nps-pas — every visible string transcribed
 * from the page's section_manifest.json. The hero ledger rows, the
 * career-scenario chips, and the two-path close labels are phrases lifted
 * verbatim from the corresponding manifest bodies. The hero raster shipped
 * with baked headline/CTA/route layers on its left half; that region was
 * trimmed so only the clean corridor slice ships, and every copy layer is
 * live code. The right coordination plate's baked label and rail were
 * trimmed the same way.
 */
export const FINANCIAL_PLANNING_FOR_CRNAS_NPS_PAS_CONTENT: AudiencePageContent =
  {
    slug: "financial-planning-for-crnas-nps-pas",
    roleContext: {
      eyebrow: "CRNAs, NPs & PAs",
      eyebrowStyle: "rule",
      headline:
        "Financial planning for advanced practice professionals building long-term wealth.",
      body: "Advanced practice providers often see income rise while benefits, retirement choices, contract structures, and tax considerations grow more complex.",
      primaryCta: "Schedule a Strategy Call",
      boundary:
        "Educational information only. Not individualized tax, legal, or investment advice.",
      boundaryStyle: "framed",
      panel: {
        rows: [
          "Benefits",
          "Retirement choices",
          "Contract structures",
          "Tax considerations",
        ],
        tone: "light",
        position: "before-scene",
      },
      scene: {
        src: `${IMG}/role-context-scene.jpg`,
        alt: "Advanced-practice clinical workstation beside a corridor doorway",
        objectPosition: "50% 45%",
      },
    },
    decisionPatterns: {
      headline: "Planning questions that tend to show up for this role.",
      body: "Notice the shape of your own decisions before you ask anyone for advice.",
      items: [
        "Cash flow, reserves, and student-loan strategy",
        "Retirement-plan selection and contribution levels",
        "W-2, 1099, and locum income questions",
        "Benefits, disability, and life insurance review",
        "Family, education, and home-purchase goals",
      ],
      photoAspect: "landscape",
      photo: {
        src: `${IMG}/decision-patterns-photo.jpg`,
        alt: "Advanced practice provider in scrubs writing notes at a clinical counter",
        objectPosition: "50% 35%",
      },
      stripPhoto: {
        src: `${IMG}/window-still-life-strip.jpg`,
        alt: "Stethoscope and pale planner on a desk before a mountain-view window",
        objectPosition: "50% 60%",
      },
      stripPlacement: "full",
    },
    careerScenario: {
      headline: "The career structure changes the planning work.",
      body: "Your career is growing on its own terms: income scaling, contract variety, and benefits complexity sit at the center of the planning work.",
      linkLabel: "Review the planning process",
      variant: "desk",
      overlays: ["Income scaling", "Contract variety", "Benefits complexity"],
      scene: {
        src: `${IMG}/career-scenario-scene.jpg`,
        alt: "Advanced practice provider reviewing contract and benefits paperwork beside a laptop",
        objectPosition: "50% 40%",
      },
    },
    coordinationMap: {
      headline: "One conversation across the relevant pillars.",
      body: "Tax, wealth, retirement, practice or compensation, risk, and legacy questions are sequenced together rather than left to separate meetings.",
      variant: "edge-rail",
      edges: {
        left: { src: `${IMG}/coordination-office-edge-left.jpg`, alt: "" },
        right: { src: `${IMG}/coordination-office-edge-right.jpg`, alt: "" },
      },
      pillars: [
        { label: "Tax strategy" },
        { label: "Wealth management" },
        { label: "Retirement strategy" },
        { label: "Practice or compensation decisions" },
        { label: "Legacy and protection review" },
      ],
    },
    questionsBeforeCall: {
      headline: "Questions to bring into the first review.",
      items: [
        "Which decisions have a deadline?",
        "Which professional already owns part of the answer?",
        "What needs to be coordinated before the next tax year or benefit cycle?",
      ],
      note: "Use the financial checkup as the low-friction next step.",
      style: "material-band",
      stillLife: {
        src: `${IMG}/review-questions-still-life.jpg`,
        alt: "Gold-nibbed fountain pen and leather folio on layered ivory paper",
        objectPosition: "50% 45%",
      },
    },
    relatedPaths: {
      headline:
        "Choose the planning path that fits the decision in front of you.",
      body: "Start with the broad strategy call or read the planning area closest to the current decision.",
      variant: "two-path",
      links: [TAX, WEALTH, RETIREMENT, PRACTICE, CHECKUP],
      groups: [
        { label: "Broad strategy", links: [CHECKUP] },
        {
          label: "Read the planning area",
          links: [TAX, WEALTH, RETIREMENT, PRACTICE],
        },
      ],
      primaryCta: "Schedule a Strategy Call",
      background: {
        src: `${IMG}/related-paths-background.jpg`,
        alt: "",
        objectPosition: "50% 50%",
      },
    },
  };
