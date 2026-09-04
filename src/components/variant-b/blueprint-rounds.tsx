import { BLUEPRINT, LINKS } from "@/lib/content";
import GoldArrow from "./gold-arrow";
import SectionEyebrow from "./section-eyebrow";

const MAXIM_LINES = ["A structured process.", "A coordinated plan.", "A life of purpose."];

/**
 * One circuit, read clockwise from 12 o'clock. `node` is the phase's point on
 * the r=120 ring (exact 60 degree steps) and `leader` is where its connector
 * lands inside the panel, so no line or dot in this instrument terminates in
 * open space. `position` places the panel on the square stage.
 */
const PANEL_SLOTS = [
  { position: "left-[35.5%] top-0", node: { x: 300, y: 180 }, leader: { x: 300, y: 70 } },
  { position: "right-0 top-[20%]", node: { x: 404, y: 240 }, leader: { x: 440, y: 219 } },
  { position: "right-0 top-[58%]", node: { x: 404, y: 360 }, leader: { x: 440, y: 381 } },
  { position: "left-[35.5%] bottom-0", node: { x: 300, y: 420 }, leader: { x: 300, y: 530 } },
  { position: "left-0 top-[56%]", node: { x: 196, y: 360 }, leader: { x: 160, y: 381 } },
  { position: "left-0 top-[19%]", node: { x: 196, y: 240 }, leader: { x: 160, y: 219 } },
] as const;

function RadialInstrument(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      fill="none"
    >
      <circle cx="300" cy="300" r="120" stroke="currentColor" className="text-ink/20" />
      <circle cx="300" cy="300" r="14" stroke="currentColor" className="text-ink/40" />
      {PANEL_SLOTS.map((slot) => (
        <g key={`${slot.node.x}-${slot.node.y}`}>
          <line
            x1="300"
            y1="300"
            x2={slot.node.x}
            y2={slot.node.y}
            stroke="currentColor"
            className="text-ink/25"
          />
          <line
            x1={slot.node.x}
            y1={slot.node.y}
            x2={slot.leader.x}
            y2={slot.leader.y}
            stroke="var(--color-gold)"
            strokeWidth="1.5"
            opacity="0.55"
          />
        </g>
      ))}
      {/* 01 to 06 clockwise: the arc states where the sequence starts, which
          way it runs, and that the last 60 degrees is not part of the route. */}
      <path
        d="M300 180 A120 120 0 1 1 196 240"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M196 255 L196 240 L183 247"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {PANEL_SLOTS.map((slot) => (
        <circle
          key={`n-${slot.node.x}-${slot.node.y}`}
          cx={slot.node.x}
          cy={slot.node.y}
          r="4"
          className="fill-gold"
        />
      ))}
    </svg>
  );
}

function PhasePanel({
  phase,
  bare,
  className,
}: {
  phase: (typeof BLUEPRINT.phases)[number];
  bare?: boolean;
  className?: string;
}): React.JSX.Element {
  return (
    <article
      className={`${bare ? "" : "vb-panel-clip bg-white p-4 shadow-[0_14px_30px_rgba(11,31,58,0.14)]"} ${className ?? ""}`}
    >
      <p className="font-body text-body-s leading-none font-semibold tracking-[0.14em] text-ink/70">
        {phase.number}
      </p>
      <h3 className="mt-2 font-body text-body-m font-semibold text-ink">{phase.name}</h3>
      <p className="mt-1.5 font-body text-body-s leading-[1.55] text-charcoal">{phase.summary}</p>
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
    <ol className="relative mt-10 space-y-4 lg:hidden">
      {BLUEPRINT.phases.map((phase, index) => (
        <li key={phase.number} className="relative pl-7">
          {index < BLUEPRINT.phases.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute top-6 bottom-[-1rem] left-[3px] w-px bg-gold/60"
            />
          )}
          <span
            aria-hidden="true"
            className="absolute top-[0.45rem] left-0 h-2 w-2 rounded-full bg-gold"
          />
          <PhasePanel phase={phase} bare />
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
      <div className="vb-shell relative py-16 lg:grid lg:min-h-[52rem] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-12 lg:py-20">
        <div className="relative lg:pt-4">
          <SectionEyebrow className="relative">{BLUEPRINT.orientation}</SectionEyebrow>
          <h2
            id="blueprint-rounds-heading"
            className="relative mt-5 max-w-[13ch] text-display-m leading-[1.08] font-bold tracking-[-0.02em] text-balance text-ink"
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
          {/* Mobile only: the phase spine reads here, between the argument and
              the action, so the CTA still closes the section at 390px while it
              sits directly under the maxims on desktop. */}
          <MobileProcessSpine />
          <ProcessCta className="mt-10" />
        </div>
        <DesktopInstrumentStage />
      </div>
    </section>
  );
}
