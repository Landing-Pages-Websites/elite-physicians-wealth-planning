import type { Metadata } from "next";
import { BioInputGate } from "@/components/pages/about-team/bio-input-gate";
import { TeamNextStep } from "@/components/pages/about-team/next-step";
import { TeamModel } from "@/components/pages/about-team/team-model";
import { TeamStateHero } from "@/components/pages/about-team/team-state-hero";
import { VerifiedLeadership } from "@/components/pages/about-team/verified-leadership";
import { routeMetadata } from "@/lib/routes";
import "./about--team.css";

/**
 * The manifest holds this route from indexing until the full roster and
 * bios are approved (seo_contract.indexing_state), so the page carries a
 * noindex while remaining a polished, truthful destination for visitors.
 */
export const metadata: Metadata = {
  ...routeMetadata(
    "about--team",
    "Elite Physicians Wealth Planning works as a coordinated team. Full team biographies and portraits are published here as each is confirmed and approved.",
  ),
  robots: { index: false, follow: true },
};

export default function AboutTeamPage(): React.JSX.Element {
  return (
    <main id="main">
      <TeamStateHero />
      <VerifiedLeadership />
      <BioInputGate />
      <TeamModel />
      <TeamNextStep />
    </main>
  );
}
