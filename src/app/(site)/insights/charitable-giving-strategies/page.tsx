import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { CHARITABLE_GIVING_STRATEGIES } from "@/components/pages/insights-article/content/charitable-giving-strategies";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/insights-article/content/charitable-giving-strategies.css";

export const metadata: Metadata = routeMetadata(
  "insights--charitable-giving-strategies",
  "Charitable Giving Strategies for High-Income Medical Professionals: vehicles and timing decisions worth reviewing with a tax professional. What is verified now.",
);

/**
 * /insights/charitable-giving-strategies — a truthful held-article editorial
 * state built on the shared insights-article family grammar.
 */
export default function CharitableGivingStrategiesPage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={CHARITABLE_GIVING_STRATEGIES} />
    </main>
  );
}
