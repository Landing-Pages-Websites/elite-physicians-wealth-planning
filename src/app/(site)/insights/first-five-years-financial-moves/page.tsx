import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { FIRST_FIVE_YEARS } from "@/components/pages/insights-article/content/first-five-years-financial-moves";
import { routeMetadata } from "@/lib/routes";

export const metadata: Metadata = routeMetadata(
  "insights--first-five-years-financial-moves",
  "Seven Financial Moves to Consider in the First Five Years of Practice — foundational decisions to consider between residency and mid-career.",
);

/**
 * /insights/first-five-years-financial-moves — a truthful held-article
 * editorial state built on the shared insights-article family grammar.
 */
export default function FirstFiveYearsPage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={FIRST_FIVE_YEARS} />
    </main>
  );
}
