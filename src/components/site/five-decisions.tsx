import { FIVE_DECISIONS } from "@/lib/content";

/**
 * Route continuity. The viewBox is 1:1 with the 1440 layout (it used to be
 * 1536x864 under preserveAspectRatio="none", which scaled y by 0.86, turned
 * every Q corner into an ellipse and made it impossible to aim a coordinate at
 * a DOM element). The entry drops from the 04 exit onto the ledger spine at
 * x=943 and overruns behind the opaque first row on purpose; the exit leaves
 * the spine's foot and crosses to x=34, where 06's `M37 0` entry picks it up.
 */
function LedgerRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1440 740"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    >
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M1415 0 V48 Q1415 76 1387 76 H971 Q943 76 943 104 V150"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M943 536 V572 Q943 600 915 600 H62 Q34 600 34 628 V740"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}

function DisciplineRow({
  discipline,
}: {
  discipline: (typeof FIVE_DECISIONS.disciplines)[number];
}): React.JSX.Element {
  return (
    <li className="relative grid grid-cols-1 gap-2 border-t border-ink/10 py-5 pr-6 pl-5 first:border-t-0 sm:grid-cols-[minmax(0,44%)_minmax(0,1fr)] sm:gap-8 sm:pl-7">
      <h3 className="font-display text-display-s leading-tight font-semibold tracking-[-0.01em] text-ink">
        {discipline.name}
      </h3>
      <p className="self-center max-w-[44ch] font-body text-body-m leading-[1.6] text-pretty text-charcoal">
        {discipline.summary}
      </p>
      {/* Node on the shared spine. z-20 is load-bearing: the rail carries z-10
          against the opaque rows, so without it the 2px gold bar paints through
          the node's white fill and every stop reads as crossed out. */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-0 z-20 h-2.5 w-2.5 -translate-x-[5px] -translate-y-1/2 rounded-full border-2 border-gold bg-white sm:left-[46.5%]"
      />
    </li>
  );
}

export function FiveDecisions(): React.JSX.Element {
  return (
    <section
      id="five-decisions"
      aria-labelledby="five-decisions-heading"
      className="relative overflow-hidden bg-white"
    >
      <LedgerRoute />
      <div className="relative z-10 va-shell pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* 34% gives the headline a 438px measure — exactly enough to set
            "Every recommendation" on one line, so the block is three lines with
            no one-word orphan. items-center kills the 400x365 void that opened
            under a top-aligned sticky heading beside a 560px ledger. */}
        <div className="lg:grid lg:grid-cols-[minmax(0,34%)_minmax(0,1fr)] lg:items-center lg:gap-x-16">
          <div>
            <p className="font-body text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">
              {FIVE_DECISIONS.orientation}
            </p>
            <h2
              id="five-decisions-heading"
              className="va-reveal mt-5 max-w-[20ch] text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {FIVE_DECISIONS.headline}
            </h2>
            {/* The boundary note used to hang off the end of the spine behind a
                2px gold border, which made the disclaimer a sixth stop on the
                route. It is small print: plain text, in the header column. */}
            <p className="mt-10 max-w-[38ch] font-body text-body-s leading-[1.6] text-charcoal/90">
              {FIVE_DECISIONS.boundaryNote}
            </p>
          </div>
          <div className="relative mt-12 w-full lg:mt-0">
            {/* Shared vertical spine: left rail on mobile, in the column gutter
                on sm+. z-10 is load-bearing — the ledger is opaque ivory and
                later in DOM order, so without it the rows erase the spine and
                the motif becomes unattached fragments. */}
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 z-10 w-[2px] bg-gold sm:left-[46.5%]"
            />
            {/* One continuous tinted field. The alternating ivory/mist zebra
                was a third separator on top of the spine and the nodes, and it
                is what made the ledger read as a generated data table. */}
            <ol className="bg-ivory">
              {FIVE_DECISIONS.disciplines.map((discipline) => (
                <DisciplineRow key={discipline.name} discipline={discipline} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
