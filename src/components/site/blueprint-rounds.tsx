import { BLUEPRINT, LINKS } from "@/lib/content";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClipboardIcon,
  CompassIcon,
  MagnifierIcon,
  NodesIcon,
  TrendingUpIcon,
} from "./icons";

type StepIcon = (props: { className?: string }) => React.JSX.Element;

const STEP_ICONS: readonly StepIcon[] = [
  CompassIcon,
  MagnifierIcon,
  NodesIcon,
  ClipboardIcon,
  TrendingUpIcon,
  CalendarIcon,
] as const;

/** Desktop placement of each step group on the 1536x484 process field. */
const STEP_POSITIONS = [
  { left: "4%", top: "16%" },
  { left: "20.5%", top: "54%" },
  { left: "34.5%", top: "8%" },
  { left: "49.5%", top: "50%" },
  { left: "63%", top: "2%" },
  { left: "81.5%", top: "40%" },
] as const;

/**
 * The six-phase route on the lower field (y offset 380 from the NOTES
 * 1536x864 frame): enters at the left edge near the bottom-left seam
 * from 03 and exits through the bottom edge at x=1510 (seam to 05).
 */
function ProcessRoute(): React.JSX.Element {
  const nodes: ReadonlyArray<readonly [number, number]> = [
    [132, 176],
    [342, 240],
    [572, 125],
    [762, 240],
    [1023, 125],
    [1274, 295],
  ];
  return (
    <svg
      viewBox="0 0 1536 484"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 336 H104 Q132 336 132 308 V176" vectorEffect="non-scaling-stroke" />
        <path d="M342 270 V240 Q342 202 380 202 H572 V125" vectorEffect="non-scaling-stroke" />
        <path d="M762 275 V240 Q762 202 800 202 H1023 V125" vectorEffect="non-scaling-stroke" />
        <path
          d="M1274 295 V354 Q1274 379 1300 379 H1488 Q1510 379 1510 402 V472"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M1498 460 L1510 473 L1522 460" vectorEffect="non-scaling-stroke" />
      </g>
      {nodes.map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="6"
          fill="var(--color-ivory)"
          stroke="var(--color-gold)"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

function StepGroup({
  phase,
  Icon,
  compact,
}: {
  phase: (typeof BLUEPRINT.phases)[number];
  Icon: StepIcon;
  compact?: boolean;
}): React.JSX.Element {
  return (
    <div className={`flex items-start gap-4 ${compact ? "" : "w-56"}`}>
      <span className="va-medallion mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
        <Icon className="h-5.5 w-5.5 text-gold" />
      </span>
      <div>
        <p className="font-display text-2xl leading-none font-semibold text-gold">
          {phase.number}
        </p>
        <h3 className="mt-1 font-display text-xl leading-none font-semibold text-ink">
          {phase.name}
        </h3>
        <p className="mt-2 font-body text-xs leading-relaxed text-charcoal">
          {phase.summary}
        </p>
      </div>
    </div>
  );
}

function ProcessCta({ className }: { className?: string }): React.JSX.Element {
  return (
    <a
      href={LINKS.process}
      className={`inline-flex items-center gap-4 rounded-md border-2 border-gold bg-gradient-to-b from-ink-lift to-ink px-7 py-3.5 font-display text-xl font-medium text-ivory shadow-[0_10px_24px_rgba(11,31,58,0.25)] transition-all duration-200 hover:brightness-125 active:brightness-95 ${className ?? ""}`}
    >
      {BLUEPRINT.cta}
      <ArrowRightIcon className="h-5 w-5 text-gold" />
    </a>
  );
}

export function BlueprintRounds(): React.JSX.Element {
  return (
    <section
      id="blueprint-rounds"
      aria-labelledby="blueprint-rounds-heading"
      className="va-blueprint relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1536px] px-6 pt-14 pb-14 sm:px-10 lg:px-[4%] lg:pb-6">
        {/* Same removal as separate-rooms: the approved frame sets the internal
            codename "The Consult Ledger" here as a logo lockup over an invented
            "PHYSICIAN WEALTH ADVISORY" tagline. Both are build artifacts and
            neither is client brand copy, so the lockup goes and the section's
            own orientation line opens it. The gold rule is kept as the opener. */}
        <p className="inline-flex flex-col gap-1.5 font-body text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">
          {BLUEPRINT.orientation}
          <span aria-hidden="true" className="h-px w-full bg-gold" />
        </p>
        <h2
          id="blueprint-rounds-heading"
          className="va-reveal mt-4 max-w-2xl font-display text-[clamp(2.1rem,3.9vw,3.9rem)] leading-[1.05] font-semibold text-ink"
        >
          {BLUEPRINT.headline}
        </h2>
        <p className="mt-5 max-w-xl font-body text-[14px] leading-relaxed text-charcoal">
          {BLUEPRINT.body}
        </p>

        {/* Mobile: vertical connected path, 01 through 06. */}
        <ol className="mt-10 flex flex-col lg:hidden">
          {BLUEPRINT.phases.map((phase, index) => (
            <li key={phase.number} className="relative pb-8 pl-0 last:pb-0">
              {index < BLUEPRINT.phases.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-16 bottom-0 left-7 w-[2px] bg-gold/70"
                />
              )}
              <StepGroup phase={phase} Icon={STEP_ICONS[index]} compact />
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center lg:hidden">
          <ProcessCta />
        </div>
      </div>

      {/* Desktop: staggered medallions along one continuous route. */}
      <div className="relative z-10 hidden aspect-[1536/484] w-full lg:block">
        <ProcessRoute />
        {BLUEPRINT.phases.map((phase, index) => (
          <div key={phase.number} className="absolute" style={STEP_POSITIONS[index]}>
            <StepGroup phase={phase} Icon={STEP_ICONS[index]} />
          </div>
        ))}
        <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2">
          <ProcessCta />
        </div>
      </div>
    </section>
  );
}
