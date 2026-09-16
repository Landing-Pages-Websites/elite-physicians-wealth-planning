import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { LONG_TERM_CARE_SURVIVOR_PLANNING } from "@/components/pages/insights-article/content/long-term-care-survivor-planning";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/insights-article/content/long-term-care-survivor-planning.css";

export const metadata: Metadata = routeMetadata(
  "insights--long-term-care-survivor-planning",
  "Long-Term Care and Survivor Planning for Physician Families — preparing the household for scenarios wealth alone may not solve. What is verified now.",
);

/**
 * /insights/long-term-care-survivor-planning — a truthful held-article
 * editorial state built on the shared insights-article family grammar.
 */
export default function LongTermCareSurvivorPlanningPage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={LONG_TERM_CARE_SURVIVOR_PLANNING} />
    </main>
  );
}
