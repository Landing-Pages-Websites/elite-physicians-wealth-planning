import type { Metadata } from "next";
import { routeMetadata } from "@/lib/routes";
import { GuideHero } from "@/components/pages/physician-tax-retirement-guide/guide-hero";
import { LearningOutcomes } from "@/components/pages/physician-tax-retirement-guide/learning-outcomes";
import { WhoItIsFor } from "@/components/pages/physician-tax-retirement-guide/who-it-is-for";
import { LeadCapture } from "@/components/pages/physician-tax-retirement-guide/lead-capture";
import { DeliveryGate } from "@/components/pages/physician-tax-retirement-guide/delivery-gate";
import { RelatedPaths } from "@/components/pages/physician-tax-retirement-guide/related-paths";
import "./ptg.css";

export const metadata: Metadata = routeMetadata(
  "physician-tax-retirement-guide",
  "A structured framework for physicians: how tax, retirement, investment, practice, and legacy decisions connect before a deadline forces the issue.",
);

export default function PhysicianTaxRetirementGuidePage(): React.JSX.Element {
  return (
    <main id="main">
      <GuideHero />
      <LearningOutcomes />
      <WhoItIsFor />
      <LeadCapture />
      <DeliveryGate />
      <RelatedPaths />
    </main>
  );
}
