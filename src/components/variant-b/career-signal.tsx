import { CAREER_SIGNAL } from "@/lib/content";

/** Flat datum: a career axis that falls reads as decline, so the rail is level
    and every milestone label shares one baseline. */
const RAIL = { x1: 0, y1: 120, x2: 1440, y2: 120 } as const;

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
const STAGE_HEIGHT = 200;

function DesktopRail(): React.JSX.Element {
  return (
    <div className="relative mt-8 hidden h-48 lg:block lg:-mr-6">
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
        {MILESTONES.map((milestone, index) => (
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
            {index === MILESTONES.length - 1 && (
              <circle
                cx={milestone.x}
                cy={milestone.y}
                r="9"
                stroke="currentColor"
                className="text-gold/50"
              />
            )}
          </g>
        ))}
      </svg>
      {MILESTONES.map((milestone, index) => (
        <p
          key={milestone.label}
          className={`absolute w-[12.5rem] -translate-x-1/2 -translate-y-full text-center leading-snug text-balance ${
            index === MILESTONES.length - 1
              ? "text-body-m font-semibold text-ink"
              : "text-body-s font-semibold text-ink/75"
          }`}
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
    <div className="relative mt-10 lg:hidden">
      {/* Rail drawn dot-centre to dot-centre: no butt ends past the sequence,
          and the dots paint over it instead of punching holes in it. */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-[0.688rem] h-[calc(100%-1.375rem)] w-px bg-ink/40"
      />
      <ol className="space-y-8 pl-8">
        {CAREER_SIGNAL.signals.map((signal, index) => (
          <li key={signal} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold"
            />
            <p
              className={`leading-snug ${
                index === CAREER_SIGNAL.signals.length - 1
                  ? "text-body-m font-semibold text-ink"
                  : "text-body-s font-semibold text-ink/75"
              }`}
            >
              {signal}
            </p>
          </li>
        ))}
      </ol>
    </div>
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
        <h2
          id="career-signal-heading"
          className="relative max-w-[19ch] text-display-m font-bold leading-[1.08] tracking-[-0.02em] text-balance text-ink"
        >
          {CAREER_SIGNAL.identityLine}
        </h2>
        <DesktopRail />
        <MobileRail />
      </div>
    </section>
  );
}
