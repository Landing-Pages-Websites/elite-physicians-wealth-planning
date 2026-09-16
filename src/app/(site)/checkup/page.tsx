import type { Metadata } from "next";
import { routeMetadata } from "@/lib/routes";
import { CheckupHero } from "@/components/pages/checkup/checkup-hero";
import { SevenAreaMap } from "@/components/pages/checkup/seven-area-map";
import { CheckupTool } from "@/components/pages/checkup/checkup-tool";
import { PrivacyBoundary } from "@/components/pages/checkup/privacy-boundary";
import { NextStep } from "@/components/pages/checkup/next-step";
import "./checkup.css";

export const metadata: Metadata = routeMetadata(
  "checkup",
  "A structured checkup can help a medical professional identify which planning areas deserve a deeper conversation. Seven areas to review together.",
);

export default function CheckupPage(): React.JSX.Element {
  return (
    <main id="main">
      <CheckupHero />
      <SevenAreaMap />
      <CheckupTool />
      <PrivacyBoundary />
      <NextStep />
    </main>
  );
}
