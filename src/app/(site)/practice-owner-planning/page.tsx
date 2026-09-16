import type { Metadata } from "next";
import { PRACTICE_OWNER_DOCKET } from "@/components/pages/planning-docket/content/practice-owner-planning";
import { DocketPage } from "@/components/pages/planning-docket/docket-page";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/planning-docket/docket.css";
import "@/components/pages/planning-docket/docket-ext.css";

export const metadata: Metadata = routeMetadata(
  "practice-owner-planning",
  PRACTICE_OWNER_DOCKET.metaDescription,
);

export default function PracticeOwnerPlanningPage(): React.JSX.Element {
  return <DocketPage content={PRACTICE_OWNER_DOCKET} />;
}
