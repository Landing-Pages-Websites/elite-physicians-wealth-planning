import type { Metadata } from "next";
import { LEGACY_ESTATE_DOCKET } from "@/components/pages/planning-docket/content/legacy-estate-planning";
import { DocketPage } from "@/components/pages/planning-docket/docket-page";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/planning-docket/docket.css";
import "@/components/pages/planning-docket/docket-ext.css";

export const metadata: Metadata = routeMetadata(
  "legacy-estate-planning",
  LEGACY_ESTATE_DOCKET.metaDescription,
);

export default function LegacyEstatePlanningPage(): React.JSX.Element {
  return <DocketPage content={LEGACY_ESTATE_DOCKET} />;
}
