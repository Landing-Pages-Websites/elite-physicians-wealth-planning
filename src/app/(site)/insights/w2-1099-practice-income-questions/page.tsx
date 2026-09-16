import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { W2_1099_PRACTICE_INCOME } from "@/components/pages/insights-article/content/w2-1099-practice-income-questions";
import { routeMetadata } from "@/lib/routes";

export const metadata: Metadata = routeMetadata(
  "insights--w2-1099-practice-income-questions",
  "W-2, 1099, and Practice Income: Questions Physicians Should Ask Before Year-End — compensation-source questions that shape tax and retirement planning.",
);

/**
 * /insights/w2-1099-practice-income-questions — a truthful held-article
 * editorial state built on the shared insights-article family grammar.
 */
export default function W2PracticeIncomePage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={W2_1099_PRACTICE_INCOME} />
    </main>
  );
}
