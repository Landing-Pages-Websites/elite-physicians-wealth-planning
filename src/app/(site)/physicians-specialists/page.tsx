import type { Metadata } from "next";
import { AudiencePage } from "@/components/pages/audience/audience-page";
import { PHYSICIANS_SPECIALISTS_CONTENT } from "@/components/pages/audience/content/physicians-specialists";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/audience/audience.css";

export const metadata: Metadata = routeMetadata(
  "physicians-specialists",
  "Physicians & Specialists: Specialists often need one plan across compensation, tax, retirement, insurance, family goals, and professional-team coordination.",
);

export default function PhysiciansSpecialistsPage(): React.JSX.Element {
  return <AudiencePage content={PHYSICIANS_SPECIALISTS_CONTENT} />;
}
