import {
  ClipboardIcon,
  MagnifierIcon,
  NodesIcon,
  RefreshIcon,
  TrendingUpIcon,
} from "@/components/site/icons";
import { GearIcon } from "./process-icons";

/** Manifest copy for 02-six-phase-route — content contract, do not edit. */
const ROUTE = {
  headline: "From discovery to annual review.",
  body: "The process is a planning system, not a binder or a product pitch.",
} as const;

type IconComponent = (props: { className?: string }) => React.JSX.Element;

interface Phase {
  readonly number: string;
  readonly name: string;
  readonly Icon: IconComponent;
  /** Node-centre x as % of the diagram canvas. */
  readonly x: number;
  /** 0 = upper rail, 1 = lower rail — the frame's zigzag. */
  readonly row: 0 | 1;
}

/** Manifest phase order is the contract: 01–06 exactly as listed. */
const PHASES: readonly Phase[] = [
  { number: "01", name: "Discover", Icon: MagnifierIcon, x: 5, row: 0 },
  { number: "02", name: "Assess", Icon: ClipboardIcon, x: 22.5, row: 1 },
  { number: "03", name: "Strategize", Icon: NodesIcon, x: 40, row: 0 },
  { number: "04", name: "Implement", Icon: GearIcon, x: 57.5, row: 1 },
  { number: "05", name: "Optimize", Icon: TrendingUpIcon, x: 75, row: 0 },
  { number: "06", name: "Review", Icon: RefreshIcon, x: 92.5, row: 1 },
] as const;

/** Chip-centre y (viewBox 1200x360) for each rail. */
const RAIL_Y = [80, 210] as const;

/**
 * The continuous gold route: enters from the hero seam top-left, snakes
 * through all six chips upper–lower–upper, and exits the bottom-right seam
 * with an arrow into the first-meeting ledger.
 */
function RoutePath(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1200 360"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
    >
      <g
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      >
        <path
          d="M60 0 V80 H230 Q250 80 250 100 V190 Q250 210 270 210 H440 Q460 210 460 190 V100 Q460 80 480 80 H650 Q670 80 670 100 V190 Q670 210 690 210 H860 Q880 210 880 190 V100 Q880 80 900 80 H1070 Q1090 80 1090 100 V190 Q1090 210 1110 210 H1150 Q1170 210 1170 230 V356"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M1158 344 L1170 357 L1182 344" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

function PhaseNode({ phase }: { phase: Phase }): React.JSX.Element {
  const centreY = RAIL_Y[phase.row];
  return (
    <li
      className="absolute flex w-36 -translate-x-1/2 flex-col items-center text-center"
      style={{
        left: `${phase.x}%`,
        top: `calc(${(centreY / 360) * 100}% - 18px)`,
      }}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-ivory font-body text-[12px] font-semibold text-gold-text">
        {phase.number}
      </span>
      <span className="mt-3 font-display text-[1.45rem] leading-none font-medium text-ink">
        {phase.name}
      </span>
      <phase.Icon className="mt-3 h-5 w-5 text-gold-text" />
    </li>
  );
}

/** Mobile recomposition: one vertical rail in source order. */
function PhaseRail(): React.JSX.Element {
  return (
    <ol className="relative mt-10 space-y-8 border-l border-gold/70 pl-6 lg:hidden">
      {PHASES.map(({ number, name, Icon }) => (
        <li key={number} className="relative flex items-center gap-4">
          <span
            aria-hidden="true"
            className="absolute top-1/2 -left-6 block h-px w-6 bg-gold/70"
          />
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold bg-white font-body text-[12px] font-semibold text-gold-text">
            {number}
          </span>
          <span className="font-display text-display-s leading-none font-medium text-ink">
            {name}
          </span>
          <Icon className="ml-auto h-5 w-5 shrink-0 text-gold-text" />
        </li>
      ))}
    </ol>
  );
}

/**
 * 02-six-phase-route. Ivory field, heading upper-left, zigzag route diagram
 * with functional 01–06 numbering (the only section allowed to carry it),
 * ledger-corner accent top-right, boxed boundary note lower-left.
 */
export function SixPhaseRoute(): React.JSX.Element {
  return (
    <section
      id="six-phase-route"
      aria-labelledby="six-phase-route-heading"
      className="prc-route relative overflow-hidden"
    >
      <img
        src="/images/design/our-process/elements/02-six-phase-route-photo.jpg"
        alt=""
        aria-hidden="true"
        width={264}
        height={288}
        className="prc-route-corner hidden h-auto lg:block"
      />
      <div className="va-shell relative pt-16 pb-16 lg:pt-20 lg:pb-14">
        <h2
          id="six-phase-route-heading"
          className="prc-reveal max-w-[16ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-ink"
        >
          {ROUTE.headline}
        </h2>

        <div className="relative mt-14 hidden aspect-[1200/360] lg:block">
          <RoutePath />
          <ol>
            {PHASES.map((phase) => (
              <PhaseNode key={phase.number} phase={phase} />
            ))}
          </ol>
        </div>
        <PhaseRail />

        <p className="prc-route-note mt-12 max-w-md px-5 py-4 font-body text-body-s leading-[1.6] text-charcoal lg:mt-4">
          {ROUTE.body}
        </p>
      </div>
    </section>
  );
}
