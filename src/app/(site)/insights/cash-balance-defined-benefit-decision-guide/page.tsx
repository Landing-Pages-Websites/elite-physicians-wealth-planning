import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { CASH_BALANCE_DECISION_GUIDE } from "@/components/pages/insights-article/content/cash-balance-defined-benefit-decision-guide";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/insights-article/content/cash-balance-defined-benefit-decision-guide.css";

export const metadata: Metadata = routeMetadata(
  "insights--cash-balance-defined-benefit-decision-guide",
  "Practice Owner Strategy: how advanced qualified plans fit into a practice owner's larger picture. A decision guide for medical practice owners.",
);

/**
 * /insights/cash-balance-defined-benefit-decision-guide — a truthful
 * held-article editorial state built on the shared insights-article family.
 */
export default function CashBalanceDecisionGuidePage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={CASH_BALANCE_DECISION_GUIDE} />
    </main>
  );
}
