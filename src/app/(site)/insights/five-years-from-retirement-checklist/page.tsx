import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { FIVE_YEARS_FROM_RETIREMENT } from "@/components/pages/insights-article/content/five-years-from-retirement-checklist";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/insights-article/content/five-years-from-retirement-checklist.css";

export const metadata: Metadata = routeMetadata(
  "insights--five-years-from-retirement-checklist",
  "Retirement & Income: the conversations to have before the transition begins. Five Years From Retirement is a physician's planning checklist.",
);

/**
 * /insights/five-years-from-retirement-checklist — a truthful held-article
 * editorial state built on the shared insights-article family grammar.
 */
export default function FiveYearsFromRetirementPage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={FIVE_YEARS_FROM_RETIREMENT} />
    </main>
  );
}
