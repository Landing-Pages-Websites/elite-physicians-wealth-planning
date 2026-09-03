import { CAREER_SIGNAL } from "@/lib/content";

const RAIL = { x1: 0, y1: 72, x2: 1440, y2: 244 } as const;
const RAIL_TICK_STEP = 30;
const RAIL_TICKS = Array.from({ length: 49 }, (_, index) => index * RAIL_TICK_STEP);

function railY(x: number): number {
  return RAIL.y1 + ((RAIL.y2 - RAIL.y1) * x) / RAIL.x2;
}

/** Milestone anchor x-positions along the 1440-unit rail (stems rise to labels). */
const MILESTONE_XS = [230, 576, 922, 1268];

const MILESTONES = CAREER_SIGNAL.signals.map((label, index) => ({
  label,
  x: MILESTONE_XS[index],
  y: railY(MILESTONE_XS[index]),
}));

const STEM_HEIGHT = 58;
const STAGE_HEIGHT = 300;

function DesktopRail(): React.JSX.Element {
  return (
    <div className="relative mt-4 hidden h-72 lg:block">
      <svg
        aria-hidden="true"
        viewBox={`0 0 1440 ${STAGE_HEIGHT}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <line
          x1={RAIL.x1}
          y1={RAIL.y1}
          x2={RAIL.x2 + 60}
          y2={railY(RAIL.x2 + 60)}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-ink/50"
        />
        {RAIL_TICKS.map((x) => (
          <line
            key={x}
            x1={x}
            y1={railY(x) - 5}
            x2={x}
            y2={railY(x) + 5}
            stroke="currentColor"
            className="text-ink/30"
          />
        ))}
        {MILESTONES.map((milestone) => (
          <g key={milestone.label}>
            <line
              x1={milestone.x}
              y1={milestone.y - STEM_HEIGHT}
              x2={milestone.x}
              y2={milestone.y}
              stroke="currentColor"
              className="text-ink/45"
            />
            <circle cx={milestone.x} cy={milestone.y} r="5" className="fill-gold" />
            <circle
              cx={milestone.x}
              cy={milestone.y}
              r="9"
              stroke="currentColor"
              className="text-gold/50"
            />
          </g>
        ))}
      </svg>
      {MILESTONES.map((milestone) => (
        <p
          key={milestone.label}
          className="absolute w-40 -translate-x-1/2 -translate-y-full text-center text-sm font-semibold leading-snug text-ink"
          style={{
            left: `${(milestone.x / 1440) * 100}%`,
            top: `${((milestone.y - STEM_HEIGHT - 8) / STAGE_HEIGHT) * 100}%`,
          }}
        >
          {milestone.label}
        </p>
      ))}
    </div>
  );
}

function MobileRail(): React.JSX.Element {
  return (
    <ol className="relative mt-10 space-y-8 border-l border-ink/40 pl-8 lg:hidden">
      {CAREER_SIGNAL.signals.map((signal) => (
        <li key={signal} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold ring-4 ring-white"
          />
          <p className="text-sm font-semibold leading-snug text-ink">{signal}</p>
        </li>
      ))}
    </ol>
  );
}

export default function CareerSignal(): React.JSX.Element {
  return (
    <section
      id="career-signal"
      aria-labelledby="career-signal-heading"
      className="relative overflow-hidden bg-white"
    >
      <div aria-hidden="true" className="h-1.5 bg-ink" />
      <div className="relative mx-auto max-w-[96rem] px-6 py-14 lg:pb-8">
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          className="pointer-events-none absolute -top-10 right-10 h-52 w-52 text-ink/10"
        >
          <circle cx="100" cy="100" r="96" />
          <circle cx="100" cy="100" r="64" />
          <circle cx="100" cy="100" r="32" />
          <path d="M100 0v200M0 100h200" />
        </svg>
        <h2
          id="career-signal-heading"
          className="relative max-w-md text-display-m tracking-[-0.02em] font-bold leading-tight tracking-tight text-ink"
        >
          {CAREER_SIGNAL.identityLine}
        </h2>
        <DesktopRail />
        <MobileRail />
      </div>
    </section>
  );
}
