import { BLUEPRINT, LINKS } from "@/lib/content";
import GoldArrow from "./gold-arrow";

const MAXIM_LINES = ["A structured process.", "A coordinated plan.", "A life of purpose."];

/** Panel placement (percent of the square stage) and its spoke anchor in ring space. */
const PANEL_SLOTS = [
  { position: "left-0 top-[15%]", spoke: { x: 190, y: 236 } },
  { position: "left-[35%] top-0", spoke: { x: 300, y: 130 } },
  { position: "right-0 top-[20%]", spoke: { x: 412, y: 244 } },
  { position: "right-0 top-[58%]", spoke: { x: 420, y: 368 } },
  { position: "left-[35%] bottom-0", spoke: { x: 300, y: 470 } },
  { position: "left-0 top-[56%]", spoke: { x: 186, y: 360 } },
] as const;

const RING_RADII = [80, 128, 176, 224, 264];
const OUTER_TICKS = Array.from({ length: 48 }, (_, index) => (index * 360) / 48);

function RadialInstrument(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      fill="none"
    >
      {RING_RADII.map((radius, index) => (
        <circle
          key={radius}
          cx="300"
          cy="300"
          r={radius}
          stroke="currentColor"
          strokeDasharray={index === 2 ? "3 6" : undefined}
          className={index % 2 === 0 ? "text-ink/25" : "text-ink/15"}
        />
      ))}
      <path d="M300 20v560M20 300h560" stroke="currentColor" className="text-ink/15" />
      {OUTER_TICKS.map((angle) => (
        <line
          key={angle}
          x1="300"
          y1="42"
          x2="300"
          y2="50"
          stroke="currentColor"
          className="text-ink/30"
          transform={`rotate(${angle} 300 300)`}
        />
      ))}
      <circle cx="300" cy="300" r="4" className="fill-gold" />
      <circle cx="300" cy="300" r="14" stroke="currentColor" className="text-ink/40" />
      <circle cx="300" cy="172" r="3" className="fill-gold" />
      <circle cx="428" cy="300" r="3" className="fill-gold" />
      <circle cx="300" cy="428" r="3" className="fill-gold" />
      <circle cx="172" cy="300" r="3" className="fill-gold" />
      {PANEL_SLOTS.map((slot) => (
        <g key={`${slot.spoke.x}-${slot.spoke.y}`}>
          <line
            x1="300"
            y1="300"
            x2={slot.spoke.x}
            y2={slot.spoke.y}
            stroke="currentColor"
            className="text-ink/30"
          />
          <circle cx={slot.spoke.x} cy={slot.spoke.y} r="3.5" className="fill-gold" />
        </g>
      ))}
    </svg>
  );
}

function PhasePanel({
  phase,
  className,
}: {
  phase: (typeof BLUEPRINT.phases)[number];
  className?: string;
}): React.JSX.Element {
  return (
    <article className={`vb-panel-clip bg-white p-4 shadow-[0_14px_30px_rgba(11,31,58,0.14)] ${className ?? ""}`}>
      <p className="text-lg font-bold leading-none text-gold">{phase.number}</p>
      <h3 className="mt-1.5 text-sm font-bold text-ink">{phase.name}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-charcoal">{phase.summary}</p>
    </article>
  );
}

function PerimeterRulers(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 864"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-ink/30"
      fill="none"
    >
      <line x1="24" y1="16" x2="1512" y2="16" stroke="currentColor" />
      <line x1="24" y1="848" x2="1512" y2="848" stroke="currentColor" />
      {Array.from({ length: 32 }, (_, index) => 24 + index * 48).map((x) => (
        <g key={x}>
          <line x1={x} y1="12" x2={x} y2="20" stroke="currentColor" />
          <line x1={x} y1="844" x2={x} y2="852" stroke="currentColor" />
        </g>
      ))}
      <path d="M12 40v-28h28M1524 40v-28h-28M12 824v28h28M1524 824v28h-28" stroke="currentColor" />
    </svg>
  );
}

function ProcessCta({ className }: { className: string }): React.JSX.Element {
  return (
    <div className={className}>
      <a
        href={LINKS.process}
        className="group va-btn va-btn-navy whitespace-nowrap"
      >
        {BLUEPRINT.cta}
        <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

function DesktopInstrumentStage(): React.JSX.Element {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[44rem] lg:block">
      <RadialInstrument />
      {BLUEPRINT.phases.map((phase, index) => (
        <PhasePanel
          key={phase.number}
          phase={phase}
          className={`absolute w-[29%] ${PANEL_SLOTS[index].position}`}
        />
      ))}
    </div>
  );
}

function MobileProcessSpine(): React.JSX.Element {
  return (
    <ol className="relative mt-10 space-y-5 border-l border-dashed border-ink/40 pl-6 lg:hidden">
      {BLUEPRINT.phases.map((phase) => (
        <li key={phase.number} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-6 top-5 h-2 w-2 -translate-x-1/2 rounded-full bg-gold"
          />
          <PhasePanel phase={phase} />
        </li>
      ))}
    </ol>
  );
}

export default function BlueprintRounds(): React.JSX.Element {
  return (
    <section
      id="blueprint-rounds"
      aria-labelledby="blueprint-rounds-heading"
      className="relative overflow-hidden bg-gradient-to-br from-mist/70 via-mist/40 to-mist/80"
    >
      <PerimeterRulers />
      <div className="relative mx-auto max-w-[92rem] px-6 py-16 lg:grid lg:min-h-[52rem] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-12 lg:py-20">
        <div className="relative">
          <svg
            aria-hidden="true"
            viewBox="0 0 120 120"
            fill="none"
            stroke="currentColor"
            className="absolute -top-6 left-0 h-24 w-24 text-ink/15 lg:hidden"
          >
            <circle cx="60" cy="60" r="56" />
            <circle cx="60" cy="60" r="34" />
            <path d="M60 4v112M4 60h112" />
          </svg>
          <p className="relative font-display text-xl italic text-ink/90">{BLUEPRINT.orientation}</p>
          <h2
            id="blueprint-rounds-heading"
            className="relative mt-5 max-w-[13ch] text-display-m tracking-[-0.02em] font-bold leading-[1.08] tracking-tight text-ink"
          >
            {BLUEPRINT.headline}
          </h2>
          <p className="relative mt-6 max-w-lg text-sm leading-relaxed text-charcoal">{BLUEPRINT.body}</p>
          <p className="relative mt-8 font-display text-lg italic leading-relaxed text-ink/80">
            {MAXIM_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <div>
          <DesktopInstrumentStage />
          <MobileProcessSpine />
          <ProcessCta className="mt-10 lg:mt-4 lg:text-right" />
        </div>
      </div>
    </section>
  );
}
