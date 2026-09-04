import Image from "next/image";
import { SEPARATE_ROOMS } from "@/lib/content";
import SectionEyebrow from "./section-eyebrow";

/**
 * Stage coordinates come from the extraction notes in frame space (1536x864)
 * with the copy column occupying x 0-480; stage-local space is 1056x864.
 */
const STAGE = { width: 1056, height: 864 } as const;
const FRAME_OFFSET_X = 480;

type StagePoint = { label: string; x: number; y: number };

function toStage(x: number, y: number): { left: string; top: string } {
  return {
    left: `${(((x - FRAME_OFFSET_X) / STAGE.width) * 100).toFixed(2)}%`,
    top: `${((y / STAGE.height) * 100).toFixed(2)}%`,
  };
}

const ROLE_LABELS: StagePoint[] = [
  { label: SEPARATE_ROOMS.roles[0], x: 728, y: 243 },
  { label: SEPARATE_ROOMS.roles[1], x: 1160, y: 217 },
  { label: SEPARATE_ROOMS.roles[2], x: 1364, y: 428 },
  { label: SEPARATE_ROOMS.roles[3], x: 660, y: 570 },
  { label: SEPARATE_ROOMS.roles[4], x: 1020, y: 670 },
];

/**
 * Dotted routes drawn in stage-local coordinates (frame x minus 480). Each
 * cubic is truncated at the island's measured shoreline and its node moved to
 * that endpoint — the routes used to run a third of their length inland and
 * drop the node on solid ground, so nothing terminated at a landing point.
 */
const ROUTES = [
  { d: "M285 292 C 308 308, 330 321, 352 333", node: [352, 333] },
  { d: "M652 268 C 624 293, 597 315, 571 334", node: [571, 334] },
  { d: "M846 452 C 779 446, 722 440, 669 433", node: [669, 433] },
  { d: "M222 556 C 265 531, 305 507, 343 486", node: [343, 486] },
  { d: "M534 626 C 524 592, 515 562, 508 533", node: [508, 533] },
] as const;

function CrosshairMark(): React.JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-ink/70">
      <circle cx="10" cy="10" r="6" />
      <path d="M10 0v6M10 14v6M0 10h6M14 10h6" />
    </svg>
  );
}

function CoordinationNote({ className }: { className: string }): React.JSX.Element {
  return (
    <div className={`flex items-stretch gap-4 border border-ink/30 bg-white/80 p-4 ${className}`}>
      <span aria-hidden="true" className="w-px shrink-0 self-stretch bg-gold" />
      <p className="font-body text-body-s leading-[1.55] text-charcoal">{SEPARATE_ROOMS.boundaryNote}</p>
    </div>
  );
}

function DesktopMapStage(): React.JSX.Element {
  return (
    <div className="relative hidden aspect-[1056/864] lg:my-16 lg:block">
      <Image
        src="/images/design/b/03-separate-rooms/map-islands-overlay.png"
        alt=""
        aria-hidden="true"
        width={1039}
        height={781}
        sizes="(min-width: 1024px) 66vw, 0px"
        className="vb-island-shadow absolute h-auto"
        style={{ left: "0%", top: "3.59%", width: "98.39%" }}
      />
      <svg
        viewBox={`0 0 ${STAGE.width} ${STAGE.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-gold"
        fill="none"
      >
        {ROUTES.map((route) => (
          <g key={route.d}>
            <path
              d={route.d}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 7"
            />
            <circle cx={route.node[0]} cy={route.node[1]} r="4" className="fill-gold stroke-white" />
          </g>
        ))}
      </svg>
      {/* One survey mark, on the priorities island, doing a job: "you are
          here". Five identical crosshairs surveyed nothing. */}
      <span
        aria-hidden="true"
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={toStage(974, 358)}
      >
        <CrosshairMark />
      </span>
      {ROLE_LABELS.map((role) => (
        <p
          key={role.label}
          className="absolute max-w-36 -translate-x-1/2 -translate-y-1/2 text-center text-body-l font-semibold leading-snug text-ink"
          style={toStage(role.x, role.y)}
        >
          {role.label}
        </p>
      ))}
      <p
        className="absolute -translate-x-1/2 -translate-y-1/2 text-center text-display-s font-bold text-ink"
        style={toStage(974, 407)}
      >
        {SEPARATE_ROOMS.centerLabel}
      </p>
      <CoordinationNote className="absolute right-[1.6%] bottom-[4%] w-[22rem]" />
    </div>
  );
}

/**
 * Mobile: a left spine with five branches. The old stack gave every role a
 * rotated stem and a sideways shift, which read as a sequential referral
 * chain — the opposite of the copy — and left ten terminations in mid-air.
 * The roles are siblings hanging off one spine, and the plates are square:
 * a rectangle is honest, a squashed ellipse pretending to be an island is not.
 */
function MobileMap(): React.JSX.Element {
  return (
    <div className="mt-10 lg:hidden">
      <div className="vb-island-blob relative mx-auto -mb-2 flex aspect-[5/4] w-60 items-center justify-center bg-mist shadow-[0_18px_36px_rgba(11,31,58,0.18)]">
        <p className="max-w-[10ch] text-center text-xl font-bold text-ink">{SEPARATE_ROOMS.centerLabel}</p>
      </div>
      <div className="relative mx-auto mt-6 max-w-sm pl-16">
        <span
          aria-hidden="true"
          className="absolute top-0 bottom-6 left-8 w-px border-l border-dashed border-ink/45"
        />
        <ul>
          {SEPARATE_ROOMS.roles.map((role) => (
            <li key={role} className="relative flex items-center py-3">
              <p className="w-full border border-ink/15 bg-white px-5 py-3 text-body-m font-semibold text-ink">
                {role}
              </p>
              <span
                aria-hidden="true"
                className="absolute top-1/2 -left-8 h-px w-8 -translate-y-1/2 bg-gold"
              />
              <span
                aria-hidden="true"
                className="absolute top-1/2 left-[-2.15rem] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold"
              />
            </li>
          ))}
        </ul>
      </div>
      <CoordinationNote className="mx-auto mt-10 max-w-sm" />
    </div>
  );
}

export default function SeparateRooms(): React.JSX.Element {
  return (
    <section
      id="separate-rooms"
      aria-labelledby="separate-rooms-heading"
      className="relative overflow-hidden bg-white"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-ivory/50" />
      <div className="vb-shell relative py-16 lg:grid lg:grid-cols-[31%_minmax(0,1fr)] lg:gap-6 lg:py-0">
        <div className="lg:self-start lg:pt-16">
          <SectionEyebrow>{SEPARATE_ROOMS.orientation}</SectionEyebrow>
{/* One heading family for the direction. This section and blueprint-rounds
              set their H2 in Cormorant Garamond — one at 600, one at 500 —
              while career-signal, five-decisions, pathways, planner,
              next-decision and the form all set theirs in Inter Bold. Two
              families and three weights, tracking nothing: not the surface, not
              the section's weight, not anything a reader could learn. B's
              language is the bold sans; the serif stays in the wordmark. */}
            <h2
            id="separate-rooms-heading"
            className="mt-6 text-display-m font-bold leading-[1.1] tracking-[-0.02em] text-balance text-ink"
          >
            {SEPARATE_ROOMS.headline}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-charcoal">{SEPARATE_ROOMS.body}</p>
        </div>
        <DesktopMapStage />
        <MobileMap />
      </div>
    </section>
  );
}
