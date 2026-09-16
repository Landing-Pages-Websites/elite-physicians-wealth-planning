import type { Metadata } from "next";
import { ContentStateLedger } from "@/components/pages/resources/content-state-ledger";
import { EditorialHero } from "@/components/pages/resources/editorial-hero";
import { FeaturedIndex } from "@/components/pages/resources/featured-index";
import { SubscribeOrSchedule } from "@/components/pages/resources/subscribe-or-schedule";
import { TopicTaxonomy } from "@/components/pages/resources/topic-taxonomy";
import { routeMetadata } from "@/lib/routes";
import "./resources.css";

export const metadata: Metadata = routeMetadata(
  "resources",
  // Assembled from the manifest hero copy; 157 chars.
  "Browse educational guides, checklists, articles, and webinars by planning topic, and choose a more specific planning page or resource before a strategy call.",
);

/**
 * /resources — the Physician Resource Center hub. Section order is the
 * manifest page_flow: index hero, taxonomy rail, featured paths, route
 * ledger, then the navy choice band. Every listed destination is a real
 * built route.
 */
export default function ResourcesPage(): React.JSX.Element {
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
