import { CAREER_SIGNAL } from "@/lib/content";

/** Station x positions on the 1536x400 reference frame (from NOTES). */
const STATION_X = [246, 575, 923, 1248] as const;

const HEADING_BREAK = "across";

function splitHeading(): { lead: string; rest: string } {
  const heading: string = CAREER_SIGNAL.identityLine;
  const breakIndex = heading.indexOf(HEADING_BREAK);
  if (breakIndex === -1) {
    return { lead: heading, rest: "" };
  }
  return {
    lead: heading.slice(0, breakIndex).trim(),
    rest: heading.slice(breakIndex),
  };
}

function italicizeFocused(lead: string): React.JSX.Element {
  const [before, after] = lead.split("focused");
  return (
    <>
      {before}
      <em className="font-medium">focused</em>
      {after}
    </>
  );
}

/**
 * One continuous route with exactly two ends, both leaving the frame at an
 * edge: it bleeds in off the left, carries all four stations, then lifts
 * away through the right edge. Station 4 is the resolved terminal node.
 */
function CareerRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 400"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
    >
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M0 280 H1248 C1270 280 1282 268 1282 244 V176 C1282 112 1325 82 1364 70 C1430 50 1490 36 1536 26"
          vectorEffect="non-scaling-stroke"
        />
        {STATION_X.map((x) => (
          <path key={x} d={`M${x} 280 V306`} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
      {STATION_X.map((x, index) => (
        <circle
          key={x}
          cx={x}
          cy="311"
          r={index === 3 ? 6 : 4}
          fill="var(--color-gold)"
        />
      ))}
      {/* Station 4 is the conclusion the three transitions pay into, not a
          fourth equal step: only it carries the outer ring. */}
      <circle
        cx={1248}
        cy="311"
        r="12"
        fill="none"
        stroke="var(--color-gold)"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function CareerSignal(): React.JSX.Element {
  const { lead, rest } = splitHeading();
  return (
    <section
      id="career-signal"
      aria-labelledby="career-signal-heading"
      className="va-career relative overflow-hidden"
    >
      <CareerRoute />
      <div className="relative z-10 md:min-h-[clamp(300px,26vw,400px)]">
        <h2
          id="career-signal-heading"
          className="va-reveal va-shell pt-12 text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance md:pt-16"
        >
          <span className="block text-gold">{italicizeFocused(lead)}</span>
          <span className="block text-ivory-warm">{rest}</span>
        </h2>

        {/* Desktop: labels beneath their route stations. */}
        <div className="hidden md:block">
          {CAREER_SIGNAL.signals.map((signal, index) => (
            <p
              key={signal}
              className={`absolute top-[77.75%] mt-3 w-[13.5rem] -translate-x-1/2 text-center font-body text-body-m leading-[1.4] text-balance ${
                index === 3
                  ? "font-semibold text-ivory-bright"
                  : "font-medium text-ivory/85"
              }`}
              style={{ left: `${(STATION_X[index] / 1536) * 100}%` }}
            >
              {signal}
            </p>
          ))}
        </div>

        {/* Mobile: the same route redrawn as a vertical sequence. */}
        <ol className="va-shell mt-8 flex flex-col gap-0 pb-16 md:hidden">
          {CAREER_SIGNAL.signals.map((signal, index) => (
            <li key={signal} className="relative pb-8 pl-8 last:pb-0">
              {index < CAREER_SIGNAL.signals.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-2 left-[5px] h-full w-[2px] bg-gold/80"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-0 h-3 w-3 rounded-full bg-gold"
              />
              <span className="font-body text-body-m font-medium text-ivory">
                {signal}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
