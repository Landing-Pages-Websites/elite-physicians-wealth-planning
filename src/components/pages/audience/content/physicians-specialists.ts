import type { AudiencePageContent } from "../content-types";
import { relatedLink } from "./shared";

const IMG = "/images/design/physicians-specialists/elements";

/**
 * /physicians-specialists — every visible string transcribed from
 * _design_inputs/pages/physicians-specialists/section_manifest.json.
 * Career-scenario chip labels are lifted verbatim from that section's body
 * ("Employed, group-practice, and independent-specialist paths…").
 */
export const PHYSICIANS_SPECIALISTS_CONTENT: AudiencePageContent = {
  slug: "physicians-specialists",
  roleContext: {
    eyebrow: "Physicians & Specialists",
    eyebrowStyle: "rule",
    headline:
      "Planning for physicians whose income, benefits, and career decisions rarely stay simple.",
    body: "Specialists often need one plan across compensation, tax, retirement, insurance, family goals, and professional-team coordination.",
    primaryCta: "Schedule a Strategy Call",
    boundary:
      "Educational information only. Not individualized tax, legal, or investment advice.",
    boundaryStyle: "plain",
    scene: {
      src: `${IMG}/role-context-scene.jpg`,
      alt: "Specialist consultation corridor behind a planning desk holding a stethoscope, planner, and reading lamp",
      objectPosition: "42% 64%",
    },
  },
  decisionPatterns: {
    headline: "Planning questions that tend to show up for this role.",
    body: "Recognize the shape of your own decisions before you ask anyone for advice.",
    items: [
      "Specialty income and benefits review",
      "Tax strategy around higher income",
      "Protection and liability planning",
      "Career-stage retirement funding",
      "Estate and beneficiary coordination",
    ],
    photo: {
      src: `${IMG}/decision-patterns-photo.jpg`,
      alt: "Physician's white-coated forearm beside handwritten planning notes and a dark case-plan notebook",
      objectPosition: "50% 60%",
    },
  },
  careerScenario: {
    headline: "The career structure changes the planning work.",
    body: "Employed, group-practice, and independent-specialist paths all need a planning review that respects clinical time and competing advisors.",
    linkLabel: "Review the planning process",
    variant: "paths",
    overlays: ["Employed", "Group-practice", "Independent specialist"],
    scene: {
      src: `${IMG}/career-scenario-scene.jpg`,
      alt: "Physician in a white coat writing notes at a desk",
      objectPosition: "50% 42%",
    },
  },
  coordinationMap: {
    headline: "One conversation across the relevant pillars.",
    body: "Tax, wealth, retirement, practice or compensation, risk, and legacy questions are sequenced together rather than left to separate meetings.",
    variant: "vignette-row",
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
    note: "Start with the broad physician path, then narrow into tax, retirement, wealth, or legacy questions.",
    style: "cards",
    stillLife: {
      src: `${IMG}/review-questions-still-life.jpg`,
      alt: "Gold-and-black fountain pen resting on warm ivory paper",
      objectPosition: "50% 30%",
    },
  },
  relatedPaths: {
    headline: "Choose the planning path that fits the decision in front of you.",
    body: "Start with the broad strategy call or read the planning area closest to the current decision.",
    variant: "route-row",
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
