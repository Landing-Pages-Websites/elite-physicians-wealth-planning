import type { Metadata } from "next";
import { FeaturedPath } from "@/components/pages/physicians/featured-path";
import { IndexHero } from "@/components/pages/physicians/index-hero";
import { NextBestStep } from "@/components/pages/physicians/next-best-step";
import { TaxonomyRail } from "@/components/pages/physicians/taxonomy-rail";
import { TopicLedger } from "@/components/pages/physicians/topic-ledger";
import { routeMetadata } from "@/lib/routes";
import "./physicians.css";

export const metadata: Metadata = routeMetadata(
  "physicians",
  "Start with your physician career stage, then move into the planning discipline that needs attention. Choose a more specific planning page or resource.",
);

/**
 * /physicians — the career-stage "Who We Help" index. Section order is the
 * approved page_flow; the sparse gold coordination line crosses adjacent
 * seams only and ends inside the closing band.
 */
export default function PhysiciansPage(): React.JSX.Element {
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
