import type { Metadata } from "next";
import { AudiencePage } from "@/components/pages/audience/audience-page";
import { FINANCIAL_PLANNING_FOR_SURGEONS_CONTENT } from "@/components/pages/audience/content/financial-planning-for-surgeons";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/audience/audience.css";

export const metadata: Metadata = routeMetadata(
  "financial-planning-for-surgeons",
  "Wealth planning for surgeons with demanding careers and complex financial lives. Surgeons often combine high earning potential with unpredictable schedules.",
);

export default function FinancialPlanningForSurgeonsPage(): React.JSX.Element {
  return <AudiencePage content={FINANCIAL_PLANNING_FOR_SURGEONS_CONTENT} />;
}
