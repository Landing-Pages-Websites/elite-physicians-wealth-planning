import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { ROTH_CONVERSION_TIMING } from "@/components/pages/insights-article/content/roth-conversion-timing";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/insights-article/content/roth-conversion-timing.css";

export const metadata: Metadata = routeMetadata(
  "insights--roth-conversion-timing",
  "Roth Conversion Timing Before and After Retirement — scenarios where conversion windows may open and close. Related planning paths for this topic.",
);

/**
 * /insights/roth-conversion-timing — a truthful held-article editorial state
 * built on the shared insights-article family grammar.
 */
export default function RothConversionTimingPage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={ROTH_CONVERSION_TIMING} />
    </main>
  );
}
