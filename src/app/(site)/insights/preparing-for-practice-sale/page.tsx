import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { PREPARING_FOR_PRACTICE_SALE } from "@/components/pages/insights-article/content/preparing-for-practice-sale";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/insights-article/content/preparing-for-practice-sale.css";

export const metadata: Metadata = routeMetadata(
  "insights--preparing-for-practice-sale",
  "Preparing Financially for the Sale or Transition of a Medical Practice — personal-plan questions to bring alongside a valuation and legal team.",
);

/**
 * /insights/preparing-for-practice-sale — a truthful held-article editorial
 * state built on the shared insights-article family grammar.
 */
export default function PreparingForPracticeSalePage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={PREPARING_FOR_PRACTICE_SALE} />
    </main>
  );
}
