import { CAREER_SIGNAL } from "@/lib/content";

/** Station x positions on the 1536x512 reference frame (from NOTES). */
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
 * One continuous route: enters at the top edge (x=1510, from the hero
 * exit), sweeps down into the horizontal career line, and carries all
 * four stations. A separate bottom-center accent hands off to 03.
 */
function CareerRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 512"
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
          d="M246 244 H1248 C1270 244 1282 232 1282 210 V150 C1282 92 1325 67 1364 56 C1428 38 1472 20 1510 0"
          vectorEffect="non-scaling-stroke"
        />
        {STATION_X.map((x) => (
          <path key={x} d={`M${x} 244 V272`} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
      {STATION_X.map((x) => (
        <circle key={x} cx={x} cy="277" r="4" fill="var(--color-gold)" />
      ))}
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
      <div className="relative z-10 md:min-h-[clamp(400px,33.3vw,512px)]">
        <h2
          id="career-signal-heading"
          className="va-reveal va-shell pt-12 text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance md:pt-[4.6%]"
        >
          <span className="block text-gold">{italicizeFocused(lead)}</span>
          <span className="block text-ivory-warm">{rest}</span>
        </h2>

        {/* Desktop: labels beneath their route stations. */}
        <div className="hidden md:block">
          {CAREER_SIGNAL.signals.map((signal, index) => (
            <p
              key={signal}
              className="absolute top-[57%] w-44 -translate-x-1/2 text-center font-body text-sm leading-snug font-medium text-ivory"
              style={{ left: `${(STATION_X[index] / 1536) * 100}%` }}
            >
              {signal}
            </p>
          ))}
        </div>

        {/* Mobile: the same route redrawn as a vertical sequence. */}
        <ol className="mt-8 flex flex-col gap-0 px-10 pb-16 md:hidden">
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
              <span className="font-body text-sm font-medium text-mist/90">
                {signal}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Lower-center accent: seam into 03 separate-rooms. */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 z-10 h-14 w-[2px] -translate-x-1/2 bg-gold"
      />
    </section>
  );
}
