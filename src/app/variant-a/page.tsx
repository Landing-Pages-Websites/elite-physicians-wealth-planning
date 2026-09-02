import type { Metadata } from "next";
import { AccountablePlanner } from "@/components/variant-a/accountable-planner";
import { BlueprintRounds } from "@/components/variant-a/blueprint-rounds";
import { CareerSignal } from "@/components/variant-a/career-signal";
import { FiveDecisions } from "@/components/variant-a/five-decisions";
import { NextDecision } from "@/components/variant-a/next-decision";
import { OnePlan } from "@/components/variant-a/one-plan";
import { StrategyCall } from "@/components/variant-a/strategy-call";
import { SeparateRooms } from "@/components/variant-a/separate-rooms";
import { WhiteCoatPaths } from "@/components/variant-a/white-coat-paths";
import "./variant-a.css";

export const metadata: Metadata = {
  title: "Direction A — The Consult Ledger",
  description:
    "The Consult Ledger: a consultation-led editorial homepage direction for Elite Physicians Wealth Planning, connected by one continuous gold coordination route.",
};

export default function VariantAPage(): React.JSX.Element {
  return (
    <main>
      <OnePlan />
      <CareerSignal />
      <SeparateRooms />
      <BlueprintRounds />
      <FiveDecisions />
      <WhiteCoatPaths />
      <AccountablePlanner />
      <NextDecision />
      <StrategyCall />
    </main>
  );
}
