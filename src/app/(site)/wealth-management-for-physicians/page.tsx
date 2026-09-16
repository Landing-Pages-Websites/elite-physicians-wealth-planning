import type { Metadata } from "next";
import { WEALTH_MANAGEMENT_DOCKET } from "@/components/pages/planning-docket/content/wealth-management-for-physicians";
import { DocketPage } from "@/components/pages/planning-docket/docket-page";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/planning-docket/docket.css";

export const metadata: Metadata = routeMetadata(
  "wealth-management-for-physicians",
  WEALTH_MANAGEMENT_DOCKET.metaDescription,
);

export default function WealthManagementForPhysiciansPage(): React.JSX.Element {
  return <DocketPage content={WEALTH_MANAGEMENT_DOCKET} />;
}
