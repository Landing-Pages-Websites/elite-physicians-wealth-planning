import { LINKS, NEXT_DECISION } from "@/lib/content";
import GoldArrow from "./gold-arrow";

const SUBHEAD = "Two calibrated paths. One clear decision.";

/**
 * The fork spans the same box as the card grid, so each branch lands on the
 * centre of the card it opens into and dies on that card's top edge rather
 * than in a floating dot. The box is 1288 wide now that the direction has one
 * shell, which puts the two 612px cards' centres at 306 and 982 — the old
 * 260/844 were measured against a max-w-6xl container that no longer exists.
 * `preserveAspectRatio="none"` keeps the endpoints on the card centres at
 * every width instead of only at the one this was drawn for. Stacked cards
 * need no fork, so there is no mobile variant.
 */
function DecisionFork(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1288 110"
      preserveAspectRatio="none"
      aria-hidden="true"
      fill="none"
      className="mx-auto mt-8 hidden h-[110px] w-full lg:block"
    >
      <circle cx="644" cy="12" r="5" className="fill-gold" />
      <circle cx="644" cy="12" r="10" stroke="currentColor" className="text-gold/50" />
      <path
        d="M644 22 C644 70, 306 62, 306 110"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 7"
        className="text-gold/80"
      />
      <path
        d="M644 22 C644 70, 982 62, 982 110"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 7"
        className="text-gold/80"
      />
    </svg>
  );
}

function StrategyCallPath(): React.JSX.Element {
  return (
    <div className="flex h-full flex-col border border-white/40 bg-white p-7 text-left sm:p-9">
      <h3 className="text-xl font-bold text-ink">{NEXT_DECISION.strategyCall.label}</h3>
      <p className="mt-3 text-sm leading-relaxed text-charcoal">
        {NEXT_DECISION.strategyCall.summary}
      </p>
      <p className="mt-4 text-sm font-bold text-ink">{NEXT_DECISION.strategyCall.expectation}</p>
      <div className="mt-auto pt-6">
        <a
          href={LINKS.schedule}
          className="group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-ink/85 active:bg-ink"
        >
          {NEXT_DECISION.strategyCall.label}
          <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function GuidePath(): React.JSX.Element {
  return (
    <div className="flex h-full flex-col border border-white/40 bg-white p-7 text-left sm:p-9">
      <h3 className="text-xl font-bold text-ink">{NEXT_DECISION.guide.label}</h3>
      <p className="mt-3 text-sm leading-relaxed text-charcoal">{NEXT_DECISION.guide.summary}</p>
      {/* The delivery note belongs to the guide, so it lives in the guide's
          card — not in a second container on the dark ground. */}
      <p className="mt-4 flex items-start gap-2.5 text-body-s leading-relaxed text-charcoal/85">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          className="mt-0.5 h-4 w-4 shrink-0 text-ink/45"
        >
          <rect x="2" y="5" width="20" height="14" rx="1" />
          <path d="m2 7 10 7 10-7" />
        </svg>
        {NEXT_DECISION.guide.requestNote}
      </p>
      <div className="mt-auto pt-6">
        <a
          href={LINKS.guideRequest}
          className="group inline-flex items-center gap-2.5 border border-ink px-6 py-3.5 text-sm font-bold text-ink transition-colors duration-200 hover:bg-ink hover:text-white active:bg-ink/90"
        >
          {NEXT_DECISION.guide.cta}
          <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

/**
 * The calibration ruler, on the seam. It used to sit above a contact block
 * that repeated the page's email, phone and hours for the third time; with
 * that gone it was a divider dividing nothing, floating in 190px of empty
 * navy. It is the band's bottom edge now — full-bleed, marking the seam into
 * the form section — which is a job a rule can actually hold.
 */
function CalibratedRule(): React.JSX.Element {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <svg
        viewBox="0 0 1536 16"
        preserveAspectRatio="none"
        aria-hidden="true"
        fill="none"
        className="h-3 w-full text-white/30"
      >
        <line x1="0" y1="8" x2="1536" y2="8" stroke="currentColor" />
        {Array.from({ length: 33 }, (_, index) => index * 48).map((x) => (
          <line key={x} x1={x} y1="3" x2={x} y2="13" stroke="currentColor" />
        ))}
      </svg>
    </div>
  );
}

export default function NextDecision(): React.JSX.Element {
  return (
    <section
      id="next-decision"
      aria-labelledby="next-decision-heading"
      className="relative overflow-hidden bg-ink"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="absolute left-10 top-8 h-3 w-3 text-gold/60"
      >
        <path d="M2 2h8M2 2v8" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="absolute bottom-8 right-10 h-3 w-3 text-gold/60"
      >
        <path d="M22 22h-8M22 22v-8" />
      </svg>
      <div className="vb-shell relative pt-20 pb-24 text-center lg:pt-24">
        <h2
          id="next-decision-heading"
          className="mx-auto max-w-[24ch] text-display-l font-bold leading-[1.15] tracking-[-0.02em] text-balance text-white"
        >
          {NEXT_DECISION.headline}
        </h2>
        <p className="mt-5 flex items-center justify-center gap-3 text-body-s font-semibold uppercase tracking-[0.3em] text-white/85">
          <span aria-hidden="true" className="hidden h-1.5 w-1.5 rounded-full bg-gold lg:inline-block" />
          {SUBHEAD}
          <span aria-hidden="true" className="hidden h-1.5 w-1.5 rounded-full bg-gold lg:inline-block" />
        </p>
        <DecisionFork />
        <div className="mt-6 grid items-start gap-10 lg:mt-0 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <StrategyCallPath />
          <GuidePath />
        </div>
      </div>
      <CalibratedRule />
    </section>
  );
}
