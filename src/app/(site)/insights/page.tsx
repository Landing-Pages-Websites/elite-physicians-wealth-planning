import type { Metadata } from "next";
import { ContentStateLedger } from "@/components/pages/insights/content-state-ledger";
import { EditorialHero } from "@/components/pages/insights/editorial-hero";
import { FeaturedIndex } from "@/components/pages/insights/featured-index";
import { SubscribeOrSchedule } from "@/components/pages/insights/subscribe-or-schedule";
import { TopicTaxonomy } from "@/components/pages/insights/topic-taxonomy";
import { routeMetadata } from "@/lib/routes";
import "./insights.css";

export const metadata: Metadata = routeMetadata(
  "insights",
  "Use the index to choose a more specific planning page or resource before requesting a strategy call. Choose the next step that matches your readiness.",
);

/**
 * /insights — the editorial journal index. Section order is the approved
 * page_flow (hero → taxonomy strip → featured path → route ledger → close);
 * the sparse gold coordination line crosses each seam in this sequence.
 */
export default function InsightsPage(): React.JSX.Element {
  return (
    <main id="main">
      <EditorialHero />
      <TopicTaxonomy />
      <FeaturedIndex />
      <ContentStateLedger />
      <SubscribeOrSchedule />
    </main>
  );
}
