import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { PHYSICIAN_FINANCIAL_CHECKUP } from "@/components/pages/insights-article/content/physician-financial-checkup-seven-areas";
import { routeMetadata } from "@/lib/routes";

export const metadata: Metadata = routeMetadata(
  "insights--physician-financial-checkup-seven-areas",
  "Career-Stage Planning: a framework for looking at cash flow, taxes, retirement, investments, protection, estate, and practice planning as one system.",
);

/**
 * /insights/physician-financial-checkup-seven-areas — a truthful held-article
 * editorial state built on the shared insights-article family grammar.
 */
export default function PhysicianFinancialCheckupPage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={PHYSICIAN_FINANCIAL_CHECKUP} />
    </main>
  );
}
