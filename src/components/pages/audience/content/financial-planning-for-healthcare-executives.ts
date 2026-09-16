import type { AudiencePageContent } from "../content-types";
import { relatedLink } from "./shared";

const IMG = "/images/design/financial-planning-for-healthcare-executives/elements";

/**
 * /financial-planning-for-healthcare-executives — every visible string
 * transcribed from the page's section_manifest.json. The hero panel heading
 * and its six rows are lifted verbatim from the role-context body ("…a
 * compensation package rather than a paycheck: base salary, incentives…"),
 * per the composition map's rule that the compensation table remains live
 * HTML. The hero raster's baked headline fragment and gold line were
 * trimmed, as were the ledger photo's baked rule and the still life's baked
 * rail lines; the career-scenario raster ships with its approved baked gold
 * gesture, so that section draws no second live route.
 */
export const FINANCIAL_PLANNING_FOR_HEALTHCARE_EXECUTIVES_CONTENT: AudiencePageContent =
  {
    slug: "financial-planning-for-healthcare-executives",
    roleContext: {
      eyebrow: "Healthcare Executives",
      eyebrowStyle: "rule",
      headline:
        "Wealth planning for healthcare executives with complex compensation and benefits.",
      body: "Healthcare executives may manage a compensation package rather than a paycheck: base salary, incentives, equity or phantom equity, deferred compensation, supplemental retirement plans, and negotiated benefits.",
      primaryCta: "Schedule a Strategy Call",
      boundary:
        "Educational information only. Not individualized tax, legal, or investment advice.",
      boundaryStyle: "sweep",
      seamSweep: true,
      panel: {
        heading: "A compensation package rather than a paycheck",
        rows: [
          "Base salary",
          "Incentives",
          "Equity or phantom equity",
          "Deferred compensation",
          "Supplemental retirement plans",
          "Negotiated benefits",
        ],
        tone: "dark",
        position: "after-scene",
      },
      scene: {
        src: `${IMG}/role-context-scene.jpg`,
        alt: "Compensation election calendar and executive compensation folio on a boardroom table",
        objectPosition: "50% 35%",
      },
    },
    decisionPatterns: {
      headline: "Planning questions that tend to show up for this role.",
      body: "Recognize the shape of your own decisions before bringing them to an advisor.",
      items: [
        "Equity and incentive compensation planning",
        "Deferred compensation elections",
        "Supplemental and qualified retirement coordination",
        "Concentration risk and diversification",
        "Election windows and benefit deadlines",
      ],
      photo: {
        src: `${IMG}/decision-patterns-photo.jpg`,
        alt: "Executive benefits overview binder beside a stethoscope and a suited forearm",
        objectPosition: "50% 40%",
      },
    },
    careerScenario: {
      headline: "The career structure changes the planning work.",
      body: "Your year runs on a decision calendar: compensation choices can be time-bound and difficult to reverse.",
      linkLabel: "Review the planning process",
      variant: "canvas",
      overlays: [],
      scene: {
        src: `${IMG}/career-scenario-scene.jpg`,
        alt: "Advisor pointing a pen across planning papers during an executive review",
        objectPosition: "65% 40%",
      },
    },
    coordinationMap: {
      headline: "One conversation across the relevant pillars.",
      body: "Tax, wealth, retirement, practice or compensation, risk, and legacy questions are sequenced together rather than left to separate meetings.",
      variant: "hub-spokes",
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
      note: "Move to wealth management, retirement planning, and schedule for a strategy call.",
      style: "centered-rail",
      stillLife: {
        src: `${IMG}/review-questions-still-life.jpg`,
        alt: "Navy and gold pen across ivory planning folios",
        objectPosition: "50% 50%",
      },
    },
    relatedPaths: {
      headline:
        "Choose the planning path that fits the decision in front of you.",
      body: "Start with the broad strategy call or read the planning area closest to the current decision.",
      variant: "columns",
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
