import { BRAND, LINKS, NEXT_DECISION } from "@/lib/content";
import GoldArrow from "./gold-arrow";

const SUBHEAD = "Two calibrated paths. One clear decision.";
const PHONE_HREF = `tel:+1${BRAND.phone.replace(/-/g, "")}`;

function SideRuler({ side }: { side: "left-4" | "right-4" }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 16 600"
      preserveAspectRatio="none"
      aria-hidden="true"
      fill="none"
      className={`pointer-events-none absolute inset-y-12 hidden w-3 text-white/10 lg:block ${side}`}
    >
      <line x1="8" y1="0" x2="8" y2="600" stroke="currentColor" />
      {Array.from({ length: 21 }, (_, index) => index * 30).map((y) => (
        <line key={y} x1="3" y1={y} x2="13" y2={y} stroke="currentColor" />
      ))}
    </svg>
  );
}

function DecisionFork(): React.JSX.Element {
  return (
    <>
      <svg
        viewBox="0 0 640 110"
        aria-hidden="true"
        fill="none"
        className="mx-auto mt-8 hidden h-24 w-full max-w-2xl lg:block"
      >
        <circle cx="320" cy="12" r="5" className="fill-gold" />
        <circle cx="320" cy="12" r="10" stroke="currentColor" className="text-gold/50" />
        <path
          d="M320 22 C 320 60, 180 62, 168 104"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 7"
          className="text-gold/80"
        />
        <path
          d="M320 22 C 320 60, 460 62, 472 104"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 7"
          className="text-gold/80"
        />
        <circle cx="168" cy="104" r="3" className="fill-gold" />
        <circle cx="472" cy="104" r="3" className="fill-gold" />
      </svg>
      <div aria-hidden="true" className="mx-auto mt-6 flex flex-col items-center lg:hidden">
        <span className="h-2.5 w-2.5 rounded-full bg-gold" />
        <span className="h-10 w-px border-l border-dashed border-gold/70" />
      </div>
    </>
  );
}

function StrategyCallPath(): React.JSX.Element {
  return (
    <div className="text-left">
      <div className="border border-white/40 bg-white p-7 sm:p-9 lg:min-h-[21rem]">
        <h3 className="text-xl font-bold text-ink">{NEXT_DECISION.strategyCall.label}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal">
          {NEXT_DECISION.strategyCall.summary}
        </p>
        <p className="mt-4 text-sm font-bold text-ink">{NEXT_DECISION.strategyCall.expectation}</p>
        <a
          href={LINKS.schedule}
          className="group mt-6 inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-ink/85 active:bg-ink"
        >
          {NEXT_DECISION.strategyCall.label}
          <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
      <span aria-hidden="true" className="ml-10 block h-4 w-px border-l border-dashed border-white/40" />
    </div>
  );
}

function GuidePath(): React.JSX.Element {
  return (
    <div className="text-left">
      <div className="border border-white/40 bg-white p-7 sm:p-9">
        <h3 className="text-xl font-bold text-ink">{NEXT_DECISION.guide.label}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal">{NEXT_DECISION.guide.summary}</p>
        <a
          href={LINKS.guideRequest}
          className="group mt-6 inline-flex items-center gap-2.5 border border-ink px-6 py-3.5 text-sm font-bold text-ink transition-colors duration-200 hover:bg-ink hover:text-white active:bg-ink/90"
        >
          {NEXT_DECISION.guide.cta}
          <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
      <span aria-hidden="true" className="ml-10 block h-4 w-px border-l border-dashed border-white/40" />
      <div className="flex items-start gap-3 border border-white/30 p-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
        >
          <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" strokeLinecap="round" />
        </svg>
        <div className="text-xs leading-relaxed">
          <p className="mt-1.5 text-white/60">{NEXT_DECISION.guide.requestNote}</p>
        </div>
      </div>
    </div>
  );
}

function CalibratedFooter(): React.JSX.Element {
  return (
    <footer className="mt-20">
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
      <div className="mt-6 grid gap-6 text-xs leading-relaxed text-white/70 sm:grid-cols-3">
        <div className="text-left">
          <p className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-gold"
            >
              <rect x="2" y="5" width="20" height="14" rx="1" />
              <path d="m2 7 10 7 10-7" />
            </svg>
            <a
              href={`mailto:${NEXT_DECISION.contact}`}
              className="underline decoration-white/30 underline-offset-2 transition-colors duration-200 hover:text-white"
            >
              {NEXT_DECISION.contact}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={PHONE_HREF}
              className="underline decoration-white/30 underline-offset-2 transition-colors duration-200 hover:text-white"
            >
              {BRAND.phone}
            </a>
            <span className="mx-2" aria-hidden="true">
              &middot;
            </span>
            {BRAND.hours}
          </p>
        </div>
        <p className="self-center text-center font-semibold text-white/80">
          {NEXT_DECISION.identityLine}
        </p>
        <p className="self-center sm:text-right">{NEXT_DECISION.disclaimer}</p>
      </div>
    </footer>
  );
}

export default function NextDecision(): React.JSX.Element {
  return (
    <section
      id="next-decision"
      aria-labelledby="next-decision-heading"
      className="relative overflow-hidden bg-ink"
    >
      <SideRuler side="left-4" />
      <SideRuler side="right-4" />
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
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center lg:py-24">
        <h2
          id="next-decision-heading"
          className="mx-auto max-w-[24ch] text-display-l tracking-[-0.02em] font-bold leading-[1.15] tracking-tight text-white"
        >
          {NEXT_DECISION.headline}
        </h2>
        <p className="mt-5 flex items-center justify-center gap-3 text-body-s font-semibold uppercase tracking-[0.3em] text-white/85">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
          {SUBHEAD}
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
        </p>
        <DecisionFork />
        <div className="mt-6 grid items-start gap-10 lg:mt-2 lg:grid-cols-2 lg:gap-16">
          <StrategyCallPath />
          <GuidePath />
        </div>
        <CalibratedFooter />
      </div>
    </section>
  );
}
