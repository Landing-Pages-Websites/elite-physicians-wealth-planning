import type { AudiencePageContent } from "../content-types";
import { relatedLink } from "./shared";

const IMG = "/images/design/financial-planning-for-surgeons/elements";

/**
 * /financial-planning-for-surgeons — every visible string transcribed from
 * _design_inputs/pages/financial-planning-for-surgeons/section_manifest.json.
 * The career-scenario checklist rows are lifted verbatim from that section's
 * body ("…decision timing and professional coordination stay visible…");
 * the related-paths panel label is the body's first clause, as the ref frame
 * splits it.
 */
export const FINANCIAL_PLANNING_FOR_SURGEONS_CONTENT: AudiencePageContent = {
  slug: "financial-planning-for-surgeons",
  roleContext: {
    eyebrow: "Surgeons",
    eyebrowStyle: "tab",
    headline:
      "Wealth planning for surgeons with demanding careers and complex financial lives.",
    body: "Surgeons often combine high earning potential with unpredictable schedules, tax exposure, malpractice and liability considerations, and a career arc that may shorten or change over time.",
    primaryCta: "Schedule a Strategy Call",
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    boundaryStyle: "framed",
    scene: {
      src: `${IMG}/role-context-scene.jpg`,
      alt: "Operating-room threshold behind an after-hours planning desk with an open planner, pen, and mug",
      objectPosition: "48% 68%",
    },
  },
  decisionPatterns: {
    headline: "Planning questions that tend to show up for this role.",
    body: "Recognize the shape of your own decisions before asking anyone for advice.",
    items: [
      "Salary, call pay, bonus, and 1099 income",
      "Retirement-plan contribution capacity",
      "Own-occupation disability and liability review",
      "Tax-aware asset location",
      "Flexible retirement funding and optionality",
    ],
    photo: {
      src: `${IMG}/decision-patterns-photo.jpg`,
      alt: "Gloved surgical hands selecting instruments over a draped table",
      objectPosition: "50% 40%",
    },
    stripPhoto: {
      src: `${IMG}/operating-room-strip.jpg`,
      alt: "Operating-room light above an instrument table",
      objectPosition: "50% 55%",
    },
  },
  careerScenario: {
    headline: "The career structure changes the planning work.",
    body: "Your surgical calendar leaves little margin for fragmented follow-up, so decision timing and professional coordination stay visible in one place.",
    linkLabel: "Review the planning process",
    variant: "board",
    overlays: ["Decision timing", "Professional coordination"],
    scene: {
      src: `${IMG}/career-scenario-scene.jpg`,
      alt: "Surgeon in scrubs reviewing a scheduling board at a desk",
      objectPosition: "30% 45%",
    },
  },
  coordinationMap: {
    headline: "One conversation across the relevant pillars.",
    body: "Tax, wealth, retirement, practice or compensation, risk, and legacy questions are sequenced together rather than left to separate meetings.",
    variant: "floor-plan",
    hubLabel: "One conversation",
    pillars: [
      { label: "Tax strategy", plan: "tax" },
      { label: "Wealth management", plan: "wealth" },
      { label: "Retirement strategy", plan: "retirement" },
      { label: "Practice or compensation decisions", plan: "practice" },
      { label: "Legacy and protection review", plan: "legacy" },
    ],
    stillLife: {
      src: `${IMG}/coordination-still-life.jpg`,
      alt: "Navy monogrammed notebook with a pen and mug on a marble desk",
      objectPosition: "50% 65%",
    },
  },
  questionsBeforeCall: {
    headline: "Questions to bring into the first review.",
    items: [
      "Which decisions have a deadline?",
      "Which professional already owns part of the answer?",
      "What needs to be coordinated before the next tax year or benefit cycle?",
    ],
    note: "Move naturally to tax, retirement, and protection-oriented checkup paths.",
    style: "rail",
    stillLife: {
      src: `${IMG}/review-questions-still-life.jpg`,
      alt: "Open notebook with a silver pen at the edge of warm paper",
      objectPosition: "50% 25%",
    },
  },
  relatedPaths: {
    headline: "Choose the planning path that fits the decision in front of you.",
    body: "Start with the broad strategy call or read the planning area closest to the current decision.",
    variant: "split",
    panelLabel: "Start with the broad strategy call.",
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
