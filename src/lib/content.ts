/**
 * Approved homepage copy from the section manifests (identical for
 * directions A and B). Manifest wins for text — do not edit casually.
 */

export const BRAND = {
  name: "Elite Physicians Wealth Planning",
  wordmark:
    "Elite Physicians Wealth Planning™ — Powered by Fiscal Vision Financial",
  poweredBy: "Powered by Fiscal Vision Financial",
  phone: "301-242-3929",
  email: "info@fiscalvisionfinancial.com",
  hours: "Monday–Friday, 9:00 AM–5:00 PM",
} as const;

/**
 * Homepage-only stage: interior pages do not exist yet, so CTAs point at
 * the currently available experiences on the live site, and the guide is
 * requested by email because the final guide file is not yet supplied.
 *
 * Domain note (intentional split, do not "fix"): the LIVE site today is
 * elitephysicianwealthplanning.com (singular), which these stage links
 * target; the intended LAUNCH domain used for metadata/sitemap is
 * elitephysicianswealthplanning.com (plural) per the manifest hard rules.
 */
export const LINKS = {
  schedule: "https://elitephysicianwealthplanning.com/schedule",
  process: "https://elitephysicianwealthplanning.com/our-process",
  planningPath: "https://elitephysicianwealthplanning.com/",
  meetMichael: "https://elitephysicianwealthplanning.com/",
  guideRequest:
    "mailto:info@fiscalvisionfinancial.com?subject=Physician%20Tax%20%26%20Retirement%20Planning%20Guide%20request",

  /**
   * On-site destinations, used by every in-content CTA.
   *
   * The five links above point at the LEGACY SINGULAR domain, which the
   * manifest marks reference-only and which sitemap.ts refuses to emit. Every
   * in-content CTA therefore used to send the visitor off the site, past the
   * strategy-call form, onto the old build. These anchors keep them here.
   *
   * They are stand-ins for the paths section_manifest functional_elements
   * actually contracts — /our-process, /who-we-serve, /meet-michael-epps, and
   * the Google Calendar scheduling experience. Swap each one to its contracted
   * route as that page ships; the scheduling link needs the client's Calendar
   * embed first (build/CLIENT-GAPS.md 1.3).
   */
  scheduleOnsite: "/#form",
  processOnsite: "/#blueprint-rounds",
  /** Frame annotation: what the primary action does. Rendered in the OUTCOME
      chip the approved frame draws under the strategy-call card. */
  scheduleOutcome: "Navigate to the Google Calendar scheduling experience.",
  planningPathOnsite: "/#white-coat-paths",
  meetMichaelOnsite: "/#accountable-planner",
} as const;

/** One phone href for the whole site. Strips every non-digit, so it survives
 *  dashes, spaces or parentheses in the brand constant. */
export function telHref(phone: string = BRAND.phone): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export const HERO = {
  orientation: "Wealth planning for physicians and medical professionals",
  headline: "Helping Physicians Keep More, Grow More, and Retire Better",
  body: "Elite Physicians Wealth Planning helps physicians and medical professionals coordinate tax planning, retirement planning, wealth management, practice planning, and legacy planning into one clear financial strategy.",
  primaryCta: "Schedule a strategy call",
  secondaryCta: "Explore the Wealth Blueprint™",
  proofLine: ["Coordinated strategy", "Physician-focused", "Ongoing review"],
  identityLine: "Powered by Fiscal Vision Financial",
  disclaimer:
    "Educational information only. Not individualized tax, legal, or investment advice.",
} as const;

export const CAREER_SIGNAL = {
  signals: [
    "Resident to established physician",
    "Employed to practice owner",
    "Peak earning years to retirement",
    "One strategy, reviewed as life changes",
  ],
  identityLine: "Physician-focused planning across career stages",
} as const;

export const SEPARATE_ROOMS = {
  orientation: "The coordination gap",
  headline:
    "Your financial life is too important to be managed in separate pieces.",
  body: "Many physicians make decisions about taxes, retirement plans, investments, insurance, estate planning, student loans, and practice ownership in separate conversations with separate professionals. Our role is to help bring the strategy together.",
  roles: [
    "CPA",
    "Attorney",
    "TPA",
    "Insurance professional",
    "Financial advisor",
  ],
  centerLabel: "Your priorities",
  boundaryNote:
    "Coordination does not mean one person performs every professional service.",
} as const;

export const BLUEPRINT = {
  orientation: "The Elite Physician Wealth Blueprint™",
  headline: "A planning system built to move with your career.",
  body: "A structured process designed to help busy medical professionals identify planning gaps, prioritize action steps, coordinate advisors, and update the plan as career, family, income, and tax laws change.",
  phases: [
    {
      number: "01",
      name: "Discover",
      summary:
        "Learn your goals, priorities, income structure, benefits, and current decisions.",
    },
    {
      number: "02",
      name: "Assess",
      summary:
        "Evaluate how the financial pieces interact and where gaps remain.",
    },
    {
      number: "03",
      name: "Strategize",
      summary: "Build one connected plan across the decisions that matter.",
    },
    {
      number: "04",
      name: "Implement",
      summary:
        "Organize action steps and coordinate the appropriate professionals.",
    },
    {
      number: "05",
      name: "Optimize",
      summary:
        "Monitor changes in income, family, practice, markets, and tax rules.",
    },
    {
      number: "06",
      name: "Review",
      summary: "Keep the plan aligned, current, and actionable over time.",
    },
  ],
  cta: "See the full process",
} as const;

export const FIVE_DECISIONS = {
  orientation: "Five planning disciplines",
  headline: "Every recommendation is organized around the same life.",
  disciplines: [
    {
      name: "Tax strategy",
      summary:
        "Forward-looking, multi-year tax planning coordinated with your CPA.",
    },
    {
      name: "Wealth management",
      summary:
        "Investment decisions structured to support your wider income strategy.",
    },
    {
      name: "Retirement strategy",
      summary:
        "Retirement readiness and income design for physician households.",
    },
    {
      name: "Practice & business planning",
      summary:
        "Ownership, benefit, and retirement-plan decisions for practice owners.",
    },
    {
      name: "Legacy planning",
      summary:
        "Estate coordination organized around family and long-term goals.",
    },
  ],
  boundaryNote:
    "Elite Physicians Wealth Planning coordinates strategy and related professionals; it does not claim unverified tax preparation, legal drafting, or CPA services.",
} as const;

export const WHITE_COAT_PATHS = {
  orientation: "Who we serve",
  headline:
    "Built for the financial decisions behind a demanding medical career.",
  body: "Planning paths reflect different compensation structures, ownership responsibilities, career stages, and retirement horizons.",
  pathways: [
    {
      audience: "Physicians & specialists",
      decision:
        "Coordinate compensation, benefits, investments, protection, and family priorities.",
    },
    {
      audience: "Surgeons",
      decision:
        "Connect high-income years, risk, time constraints, and long-term independence.",
    },
    {
      audience: "Dentists & dental specialists",
      decision:
        "Align personal wealth with practice ownership, equipment, benefits, and transition choices.",
    },
    {
      audience: "Practice owners & partners",
      decision:
        "Join business cash flow, retirement-plan design, succession, and personal wealth.",
    },
    {
      audience: "CRNAs, NPs, PAs & healthcare executives",
      decision:
        "Build a coordinated strategy around complex income and benefits.",
    },
  ],
  cta: "Find your planning path",
} as const;

export const ACCOUNTABLE_PLANNER = {
  orientation: "Meet the planner",
  headline:
    "One planning relationship. A shared strategy across your professional team.",
  name: "Michael A. Epps, ChFC®, RICP®",
  body: "Michael helps organize the questions, priorities, and action steps that sit across a physician’s financial life, coordinating with the appropriate CPA, attorney, TPA, insurance professionals, and other advisors.",
  credentialNote:
    "Use only ChFC® and RICP®. Do not add badges, awards, fiduciary claims, licenses, or other credentials.",
  cta: "Meet Michael",
} as const;

export const NEXT_DECISION = {
  headline: "Choose the next step that fits where you are.",
  strategyCall: {
    label: "Schedule a strategy call",
    summary:
      "A confidential introductory conversation about your priorities, current planning concerns, and whether a coordinated relationship may fit.",
    expectation: "The first conversation is not a product pitch.",
  },
  guide: {
    label: "Physician Tax & Retirement Planning Guide",
    summary:
      "A lower-commitment way to start organizing the questions that connect tax and retirement planning.",
    cta: "Request the guide",
    availability:
      "CUSTOMER INPUT REQUIRED: the final guide file and approved delivery workflow must be supplied before delivery is represented as available.",
    requestNote:
      "Requests are answered personally by email once the approved guide is available — no instant download.",
  },
  contact: BRAND.email,
  identityLine: BRAND.wordmark,
  disclaimer: HERO.disclaimer,
} as const;

export const PORTRAIT = {
  src: "/images/design/shared/hero-founder.png",
  alt: "Michael A. Epps, ChFC®, RICP®, financial planner, standing in his office with arms crossed",
  width: 485,
  height: 640,
} as const;
