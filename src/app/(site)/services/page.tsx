import type { Metadata } from "next";
import { FeaturedPath } from "@/components/pages/services/featured-path";
import { IndexHero } from "@/components/pages/services/index-hero";
import { NextBestStep } from "@/components/pages/services/next-best-step";
import { TaxonomyRail } from "@/components/pages/services/taxonomy-rail";
import { TopicLedger } from "@/components/pages/services/topic-ledger";
import { routeMetadata } from "@/lib/routes";
import "./services.css";

export const metadata: Metadata = routeMetadata(
  "services",
  "One coordinated service map: tax strategy, wealth management, retirement strategy, practice and business planning, and legacy planning for physicians.",
);

/**
 * /services — the planning-pillar index. Section order is the approved
 * page_flow (hero → taxonomy strip → featured path → topic ledger → close);
 * the sparse gold coordination line crosses each seam in this sequence.
 */
export default function ServicesPage(): React.JSX.Element {
  return (
    <main id="main">
      <IndexHero />
      <TaxonomyRail />
      <FeaturedPath />
      <TopicLedger />
      <NextBestStep />
    </main>
  );
}
