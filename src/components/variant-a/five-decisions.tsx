import { FIVE_DECISIONS } from "@/lib/content";

/**
 * Route continuity: enters at the top edge (x=1510, from the 04 exit),
 * travels across the quiet upper field to the headline's right edge;
 * a lower-left stub exits through the bottom edge at x=37 (seam to 06).
 */
function LedgerRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 864"
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
          d="M1510 0 V56 Q1510 88 1478 88 H740 Q716 88 716 112 V150"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M37 740 V864" vectorEffect="non-scaling-stroke" />
      </g>
      <circle cx="716" cy="154" r="4" fill="var(--color-gold)" />
    </svg>
  );
}

function DisciplineRow({
  discipline,
  index,
}: {
  discipline: (typeof FIVE_DECISIONS.disciplines)[number];
  index: number;
}): React.JSX.Element {
  const band = index % 2 === 0 ? "bg-ivory" : "bg-mist/45";
  return (
    <li
      className={`relative grid grid-cols-1 gap-2 py-5 pr-6 pl-5 sm:grid-cols-[minmax(0,44%)_minmax(0,1fr)] sm:gap-8 sm:pl-7 ${band}`}
    >
      <h3 className="font-display text-[clamp(1.3rem,1.7vw,1.7rem)] leading-tight font-semibold text-ink">
        {discipline.name}
      </h3>
      <p className="self-center font-body text-sm leading-relaxed text-charcoal">
        {discipline.summary}
      </p>
      {/* Node on the shared spine. */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-0 h-2.5 w-2.5 -translate-x-[5px] -translate-y-1/2 rounded-full border-2 border-gold bg-white sm:left-[46.5%]"
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
      <div className="relative z-10 mx-auto max-w-[1536px] px-6 pt-16 pb-20 sm:px-10 lg:px-[4%] lg:pt-24 lg:pb-28">
        <p className="font-body text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
          Orientation: {FIVE_DECISIONS.orientation}
        </p>
        <h2
          id="five-decisions-heading"
          className="va-reveal mt-4 max-w-xl font-display text-[clamp(1.8rem,2.6vw,2.5rem)] leading-[1.15] font-semibold text-ink"
        >
          {FIVE_DECISIONS.headline}
        </h2>

        {/* The ledger spans the measure. It previously sat at 46% with the
            right half left empty as a "quiet field" for the route to cross,
            but at 1440 that read as an unbalanced column rather than calm
            space, and squeezed the summaries into a cramped measure. 72%
            keeps a generous right margin for the route while letting the
            entries span the page the way a ledger's actually do. */}
        <div className="relative mt-12 w-full lg:w-[72%]">
          {/* Shared vertical spine: left rail on mobile, between columns on sm+. */}
          <span
            aria-hidden="true"
            className="absolute top-0 -bottom-6 left-0 w-[2px] bg-gold sm:left-[46.5%]"
          />
          <ol>
            {FIVE_DECISIONS.disciplines.map((discipline, index) => (
              <DisciplineRow
                key={discipline.name}
                discipline={discipline}
                index={index}
              />
            ))}
          </ol>
          {/* The spine bends into the boundary note beneath the matrix. */}
          <div className="relative mt-6 pl-5 sm:pl-[46.5%]">
            <span
              aria-hidden="true"
              className="absolute top-[13px] left-0 h-[2px] w-5 bg-gold sm:hidden"
            />
            <p className="max-w-md border-l-2 border-gold pt-1.5 pl-4 font-body text-xs leading-relaxed text-charcoal/90">
              {FIVE_DECISIONS.boundaryNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
