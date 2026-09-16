import type { Metadata } from "next";
import { RETIREMENT_PLANNING_DOCKET } from "@/components/pages/planning-docket/content/retirement-planning-for-physicians";
import { DocketPage } from "@/components/pages/planning-docket/docket-page";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/planning-docket/docket.css";
import "@/components/pages/planning-docket/docket-ext.css";

export const metadata: Metadata = routeMetadata(
  "retirement-planning-for-physicians",
  RETIREMENT_PLANNING_DOCKET.metaDescription,
);

export default function RetirementPlanningForPhysiciansPage(): React.JSX.Element {
  return <DocketPage content={RETIREMENT_PLANNING_DOCKET} />;
}
