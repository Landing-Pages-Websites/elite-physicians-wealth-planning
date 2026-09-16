import { PLANNING_AREAS } from "./checkup-areas";

const MAP_HEADLINE = "Seven areas to review together.";

/**
 * Chip centre coordinates on the desktop diagram canvas, in percent.
 * Geometry contract: every spur leaves the spine (x=50) at its own y, at
 * least 7% below the previous junction, and no spur's horizontal run passes
 * through another chip's box (chips span roughly ±6% x and ±6% y here).
 */
const CHIP_POSITIONS: readonly { x: number; y: number }[] = [
  { x: 40, y: 12 }, // Cash flow — left of spine, top band
  { x: 65, y: 27 }, // Taxes — right
  { x: 22, y: 42 }, // Retirement — far left; spur lane clear of Investments
  { x: 38, y: 62 }, // Investments — left, own band below Retirement
  { x: 70, y: 55 }, // Protection — far right
  { x: 27, y: 84 }, // Estate — left, bottom band
  { x: 64, y: 76 }, // Practice planning — right, above Estate's spur lane
];

/**
 * The one coordination route of this section: the spine continues the hero's
 * exit line at the top seam, runs the canvas, and leaves into 03. Spurs reach
 * each area chip; no independent restarts, no branching network.
 */
function MapRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
    >
      <g
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      >
        <path d="M50 0 V100" vectorEffect="non-scaling-stroke" />
        {CHIP_POSITIONS.map(({ x, y }) => (
          <path
            key={`${x}-${y}`}
            d={`M50 ${y} H${x}`}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
    </svg>
  );
}

function AreaChip({ name }: { name: string }): React.JSX.Element {
  return (
    <span className="chk-chip inline-block rounded-[3px] px-5 py-2.5 font-body text-body-m font-medium whitespace-nowrap text-ink">
      {name}
    </span>
  );
}

/**
 * 02-seven-area-map — the checkup taxonomy as a live-text diagram on warm
 * paper. Desktop keeps the ref's connected constellation; mobile converts it
 * to one vertical reading rail in source order.
 */
export function SevenAreaMap(): React.JSX.Element {
  return (
    <section
      id="seven-area-map"
      aria-labelledby="seven-area-map-heading"
      className="chk-map relative overflow-hidden"
    >
      {/* Route enters from the hero seam, breaks for the heading (as the
          homepage hero route breaks for text), then the canvas spine resumes. */}
      <span aria-hidden="true" className="chk-seam top-0 h-8" />
      <div className="relative z-10 va-shell py-16 lg:py-20">
        <h2
          id="seven-area-map-heading"
          className="mx-auto max-w-[24ch] text-center text-display-m font-display leading-[1.12] font-medium tracking-[-0.02em] text-balance text-ink"
        >
          {MAP_HEADLINE}
        </h2>

        {/* Desktop constellation. */}
        <div className="relative mx-auto mt-6 hidden aspect-[1536/520] w-full max-w-6xl lg:block">
          <MapRoute />
          <ul className="relative h-full w-full list-none">
            {PLANNING_AREAS.map((area, index) => {
              const { x, y } = CHIP_POSITIONS[index];
              return (
                <li
                  key={area.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <AreaChip name={area.name} />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile rail: same order, one left-running gold route. */}
        <ul className="relative mx-auto mt-10 grid max-w-sm list-none gap-4 border-l-[1.5px] border-gold/70 pl-6 lg:hidden">
          {PLANNING_AREAS.map((area) => (
            <li key={area.name}>
              <AreaChip name={area.name} />
            </li>
          ))}
        </ul>
      </div>

      {/* Route continues into the interactive surface. */}
      <span aria-hidden="true" className="chk-seam bottom-0 h-10 lg:h-20" />
    </section>
  );
}
