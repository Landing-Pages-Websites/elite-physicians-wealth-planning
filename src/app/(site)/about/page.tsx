import type { Metadata } from "next";
import { CoordinationPhilosophy } from "@/components/pages/about/coordination-philosophy";
import { FiscalVisionRelationship } from "@/components/pages/about/fiscal-vision-relationship";
import { MichaelAnchor } from "@/components/pages/about/michael-anchor";
import { NextStep } from "@/components/pages/about/next-step";
import { OriginHero } from "@/components/pages/about/origin-hero";
import { PlanningScope } from "@/components/pages/about/planning-scope";
import { routeMetadata } from "@/lib/routes";
import "./about.css";

export const metadata: Metadata = routeMetadata(
  "about",
  "Elite Physicians Wealth Planning coordinates a medical professional's financial life into one clear strategy, powered by Fiscal Vision Financial.",
);

/**
 * /about — firm origin and coordination page. Section order is the approved
 * page_flow; the sparse gold line crosses only these adjacent seams and ends
 * inside the closing section.
 */
export default function AboutPage(): React.JSX.Element {
  return (
    <main id="main">
      <OriginHero />
      <CoordinationPhilosophy />
      <PlanningScope />
      <FiscalVisionRelationship />
      <MichaelAnchor />
      <NextStep />
    </main>
  );
}
