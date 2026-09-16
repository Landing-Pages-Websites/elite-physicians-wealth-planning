import type { Metadata } from "next";
import { BlueprintOrigin } from "@/components/pages/our-process/blueprint-origin";
import { FirstMeetingInputs } from "@/components/pages/our-process/first-meeting-inputs";
import { OngoingReview } from "@/components/pages/our-process/ongoing-review";
import { ProfessionalCoordination } from "@/components/pages/our-process/professional-coordination";
import { SixPhaseRoute } from "@/components/pages/our-process/six-phase-route";
import { StartBlueprint } from "@/components/pages/our-process/start-blueprint";
import { routeMetadata } from "@/lib/routes";
import "./our-process.css";

export const metadata: Metadata = routeMetadata(
  "our-process",
  // Assembled from the manifest hero copy; 147 chars.
  "A structured advisory process helps medical professionals evaluate their financial life, identify opportunities, and coordinate advisors over time.",
);

/**
 * /our-process — the Elite Physician Wealth Blueprint™ process page.
 * Section order is the manifest page_flow; the gold coordination line crosses
 * exactly these seams and the functional 01–06 numbering lives only in the
 * six-phase route.
 */
export default function OurProcessPage(): React.JSX.Element {
  return (
    <main id="main">
      <BlueprintOrigin />
      <SixPhaseRoute />
      <FirstMeetingInputs />
      <ProfessionalCoordination />
      <OngoingReview />
      <StartBlueprint />
    </main>
  );
}
