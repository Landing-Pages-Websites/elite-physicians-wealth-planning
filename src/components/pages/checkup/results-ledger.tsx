"use client";

import { BRAND } from "@/lib/content";
import { RefreshIcon, ArrowRightIcon } from "@/components/site/icons";
import { areaByName, PLANNING_AREAS } from "./checkup-areas";

export type EmailDelivery = "not-requested" | "sent" | "unavailable";

export interface CheckupOutcome {
  primary: string;
  others: readonly string[];
  emailDelivery: EmailDelivery;
}

/** Mailto fallback so an email summary is never silently lost. */
export function summaryMailto(outcome: CheckupOutcome): string {
  const body = [
    "Physician Financial Checkup summary",
    `Priority for discussion: ${outcome.primary}`,
    outcome.others.length > 0
      ? `Also selected: ${outcome.others.join(", ")}`
      : "",
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${BRAND.email}?subject=${encodeURIComponent(
    "Financial checkup summary",
  )}&body=${encodeURIComponent(body)}`;
}

function LedgerRow({
  areaName,
  groupLabel,
}: {
  areaName: string;
  groupLabel: string;
}): React.JSX.Element | null {
  const area = areaByName(areaName);
  if (!area) return null;
  return (
    <li className="chk-ledger-row flex flex-col gap-2 rounded-[3px] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-body text-[11px] font-semibold tracking-[0.14em] text-gold-text uppercase">
          {groupLabel}
        </p>
        <p className="mt-1 font-display text-display-s font-medium text-ink">
          {area.name}
        </p>
      </div>
      <a
        href={area.routePath}
        className="va-link shrink-0 self-start text-ink sm:self-center"
      >
        {area.routeLabel}
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </a>
    </li>
  );
}

function EmailNote({
  outcome,
}: {
  outcome: CheckupOutcome;
}): React.JSX.Element | null {
  if (outcome.emailDelivery === "sent") {
    return (
      <p className="font-body text-body-s leading-[1.55] text-charcoal/80">
        Summary received. {BRAND.name} follows up by email — usually within one
        business day.
      </p>
    );
  }
  if (outcome.emailDelivery === "unavailable") {
    return (
      <p role="alert" className="font-body text-body-s leading-[1.55] text-danger">
        The email option could not send just now. Your summary still appears
        above — you can{" "}
        <a
          className="underline underline-offset-4"
          href={summaryMailto(outcome)}
        >
          email it instead
        </a>
        .
      </p>
    );
  }
  return null;
}

/**
 * 04-results-guidance's live ledger: the completed checkup grouped into
 * discussion priorities with links to the relevant planning pages — framing a
 * conversation, never prescribing a decision.
 */
export function ResultsLedger({
  outcome,
  onRestart,
}: {
  outcome: CheckupOutcome;
  onRestart: () => void;
}): React.JSX.Element {
  const unselected = PLANNING_AREAS.map((area) => area.name).filter(
    (name) => name !== outcome.primary && !outcome.others.includes(name),
  );
  return (
    <div>
      <ul className="grid list-none gap-3">
        <LedgerRow areaName={outcome.primary} groupLabel="Priority for discussion" />
        {outcome.others.map((name) => (
          <LedgerRow key={name} areaName={name} groupLabel="Also selected to review" />
        ))}
      </ul>
      {unselected.length > 0 ? (
        <p className="mt-5 font-body text-body-s leading-[1.6] text-charcoal/70">
          Not selected this time: {unselected.join(", ")}. Any of these can join
          the conversation later.
        </p>
      ) : null}
      <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a href="/schedule" className="va-btn va-btn-navy">
          Schedule a strategy call
        </a>
        <button type="button" onClick={onRestart} className="va-link text-ink">
          <RefreshIcon className="h-3.5 w-3.5" />
          Start over
        </button>
      </div>
      <div className="mt-6">
        <EmailNote outcome={outcome} />
      </div>
    </div>
  );
}
