import type { Metadata } from "next";
import { FeaturedPath } from "@/components/pages/who-we-serve/featured-path";
import { IndexHero } from "@/components/pages/who-we-serve/index-hero";
import { NextBestStep } from "@/components/pages/who-we-serve/next-best-step";
import { TaxonomyRail } from "@/components/pages/who-we-serve/taxonomy-rail";
import { TopicLedger } from "@/components/pages/who-we-serve/topic-ledger";
import { routeMetadata } from "@/lib/routes";
import "./who-we-serve.css";

export const metadata: Metadata = routeMetadata(
  "who-we-serve",
  "Find the professional path closest to your career, compensation, and ownership structure. Use the index to choose a more specific planning page or resource.",
);

/**
 * /who-we-serve — the audience-selector atlas. Section order is the approved
 * page_flow; the sparse gold coordination line crosses adjacent seams only:
 * hero rail → taxonomy strip → featured path → topic ledger → close.
 */
export default function WhoWeServePage(): React.JSX.Element {
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
