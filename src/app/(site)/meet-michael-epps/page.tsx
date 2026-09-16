import type { Metadata } from "next";
import { FirstConversation } from "@/components/pages/meet-michael-epps/first-conversation";
import { PlanningPhilosophy } from "@/components/pages/meet-michael-epps/planning-philosophy";
import { PortraitDossier } from "@/components/pages/meet-michael-epps/portrait-dossier";
import { RelatedTrustPaths } from "@/components/pages/meet-michael-epps/related-trust-paths";
import { VerifiedCredentials } from "@/components/pages/meet-michael-epps/verified-credentials";
import { WhyPhysicians } from "@/components/pages/meet-michael-epps/why-physicians";
import { routeMetadata } from "@/lib/routes";
import "./meet-michael-epps.css";

export const metadata: Metadata = routeMetadata(
  "meet-michael-epps",
  "Michael A. Epps, ChFC®, RICP®, founded Elite Physician Wealth Planning to give physicians a more coordinated way to approach taxes, retirement, and wealth.",
);

/**
 * /meet-michael-epps — planner profile dossier. Section order is the
 * approved page_flow; the sparse gold line crosses only adjacent seams and
 * ends inside the trust-path close.
 */
export default function MeetMichaelEppsPage(): React.JSX.Element {
  return (
    <main id="main">
      <PortraitDossier />
      <PlanningPhilosophy />
      <VerifiedCredentials />
      <WhyPhysicians />
      <FirstConversation />
      <RelatedTrustPaths />
    </main>
  );
}
