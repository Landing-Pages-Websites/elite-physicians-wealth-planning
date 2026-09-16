import type { Metadata } from "next";
import { AudiencePage } from "@/components/pages/audience/audience-page";
import { FINANCIAL_PLANNING_FOR_CRNAS_NPS_PAS_CONTENT } from "@/components/pages/audience/content/financial-planning-for-crnas-nps-pas";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/audience/audience.css";

export const metadata: Metadata = routeMetadata(
  "financial-planning-for-crnas-nps-pas",
  "Financial planning for advanced practice professionals building long-term wealth as benefits, retirement choices, and tax considerations grow more complex.",
);

export default function FinancialPlanningForCrnasNpsPasPage(): React.JSX.Element {
  return (
    <AudiencePage content={FINANCIAL_PLANNING_FOR_CRNAS_NPS_PAS_CONTENT} />
  );
}
