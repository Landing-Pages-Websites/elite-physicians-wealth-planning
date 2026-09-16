import type { Metadata } from "next";
import { AudiencePage } from "@/components/pages/audience/audience-page";
import { FINANCIAL_PLANNING_FOR_DENTISTS_CONTENT } from "@/components/pages/audience/content/financial-planning-for-dentists";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/audience/audience.css";

export const metadata: Metadata = routeMetadata(
  "financial-planning-for-dentists",
  "Wealth strategy for dentists and dental specialists managing practice ownership, equipment and practice debt, uneven cash flow, and practice transition.",
);

export default function FinancialPlanningForDentistsPage(): React.JSX.Element {
  return <AudiencePage content={FINANCIAL_PLANNING_FOR_DENTISTS_CONTENT} />;
}
