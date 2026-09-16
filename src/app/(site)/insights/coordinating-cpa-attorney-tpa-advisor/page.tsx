import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { COORDINATING_ADVISORS } from "@/components/pages/insights-article/content/coordinating-cpa-attorney-tpa-advisor";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/insights-article/content/coordinating-cpa-attorney-tpa-advisor.css";

export const metadata: Metadata = routeMetadata(
  "insights--coordinating-cpa-attorney-tpa-advisor",
  "Career-Stage Planning: a practical model for keeping outside professionals aligned around one plan — coordinating a CPA, attorney, TPA, and financial advisor.",
);

/**
 * /insights/coordinating-cpa-attorney-tpa-advisor — a truthful held-article
 * editorial state built on the shared insights-article family grammar.
 */
export default function CoordinatingAdvisorsPage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={COORDINATING_ADVISORS} />
    </main>
  );
}
