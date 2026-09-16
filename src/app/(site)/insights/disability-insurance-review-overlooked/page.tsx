import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { DISABILITY_INSURANCE_REVIEW } from "@/components/pages/insights-article/content/disability-insurance-review-overlooked";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/insights-article/content/disability-insurance-review-overlooked.css";

export const metadata: Metadata = routeMetadata(
  "insights--disability-insurance-review-overlooked",
  "Disability Insurance Review: Questions Physicians Often Overlook. Own-occupation, portability, and definition questions worth revisiting. What is verified now.",
);

/**
 * /insights/disability-insurance-review-overlooked — a truthful held-article
 * editorial state built on the shared insights-article family grammar.
 */
export default function DisabilityInsuranceReviewPage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={DISABILITY_INSURANCE_REVIEW} />
    </main>
  );
}
