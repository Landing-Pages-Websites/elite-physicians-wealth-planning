import type { Metadata } from "next";
import { CalendarEmbedState } from "@/components/pages/schedule/calendar-embed-state";
import { CallExpectations } from "@/components/pages/schedule/call-expectations";
import { FallbackContact } from "@/components/pages/schedule/fallback-contact";
import { PrivacyBoundary } from "@/components/pages/schedule/privacy-boundary";
import { ScheduleHero } from "@/components/pages/schedule/schedule-hero";
import { routeMetadata } from "@/lib/routes";
import "./schedule.css";

export const metadata: Metadata = routeMetadata(
  "schedule",
  "Schedule a private strategy call — a confidential introductory conversation to review planning priorities and whether a coordinated relationship makes sense.",
);

/**
 * /schedule — section order, seams and background progression follow the
 * approved page_flow: navy hero → ivory ledger → mist scheduler → white
 * fallback → ivory privacy strip.
 */
export default function SchedulePage(): React.JSX.Element {
  return (
    <main id="main">
      <ScheduleHero />
      <CallExpectations />
      <CalendarEmbedState />
      <FallbackContact />
      <PrivacyBoundary />
    </main>
  );
}
