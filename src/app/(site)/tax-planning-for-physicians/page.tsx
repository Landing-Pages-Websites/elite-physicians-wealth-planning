import type { Metadata } from "next";
import { TAX_PLANNING_DOCKET } from "@/components/pages/planning-docket/content/tax-planning-for-physicians";
import { DocketPage } from "@/components/pages/planning-docket/docket-page";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/planning-docket/docket.css";

export const metadata: Metadata = routeMetadata(
  "tax-planning-for-physicians",
  TAX_PLANNING_DOCKET.metaDescription,
);

export default function TaxPlanningForPhysiciansPage(): React.JSX.Element {
  return <DocketPage content={TAX_PLANNING_DOCKET} />;
}
