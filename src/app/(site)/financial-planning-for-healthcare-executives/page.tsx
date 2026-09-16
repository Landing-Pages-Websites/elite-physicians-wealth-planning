import type { Metadata } from "next";
import { AudiencePage } from "@/components/pages/audience/audience-page";
import { FINANCIAL_PLANNING_FOR_HEALTHCARE_EXECUTIVES_CONTENT } from "@/components/pages/audience/content/financial-planning-for-healthcare-executives";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/audience/audience.css";

export const metadata: Metadata = routeMetadata(
  "financial-planning-for-healthcare-executives",
  "Wealth planning for healthcare executives with complex compensation and benefits: incentives, deferred compensation, and supplemental retirement plans.",
);

export default function FinancialPlanningForHealthcareExecutivesPage(): React.JSX.Element {
  return (
    <AudiencePage
      content={FINANCIAL_PLANNING_FOR_HEALTHCARE_EXECUTIVES_CONTENT}
    />
  );
}
