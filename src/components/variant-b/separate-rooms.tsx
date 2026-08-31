import Image from "next/image";
import { SEPARATE_ROOMS } from "@/lib/content";

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

const CROSSHAIRS: StagePoint[] = [
  { label: "cpa", x: 728, y: 192 },
  { label: "attorney", x: 1166, y: 164 },
  { label: "tpa", x: 1364, y: 381 },
  { label: "insurance", x: 655, y: 520 },
  { label: "advisor", x: 1012, y: 617 },
];

/** Dotted routes drawn in stage-local coordinates (frame x minus 480). */
const ROUTES = [
  { d: "M285 292 C 340 330, 390 352, 436 376", node: [392, 356] },
  { d: "M652 268 C 610 306, 570 336, 532 362", node: [576, 332] },
  { d: "M846 452 C 760 444, 690 436, 626 428", node: [706, 438] },
  { d: "M222 556 C 290 516, 350 480, 408 452", node: [326, 500] },
  { d: "M534 626 C 520 578, 508 536, 498 496", node: [516, 564] },
] as const;

const CONTOUR_TOP = [
  "M-20 6 C 220 46, 420 -8, 660 30 S 1100 62 1340 18 S 1560 40 1580 24",
  "M-20 36 C 240 74, 440 22, 680 58 S 1120 90 1360 46 S 1560 68 1580 52",
];

const CONTOUR_BOTTOM = [
  "M-20 96 C 240 56, 460 108, 700 72 S 1140 40 1380 84 S 1560 62 1580 78",
  "M-20 66 C 220 28, 440 80, 680 44 S 1120 12 1360 56 S 1560 34 1580 50",
];

function CompassIcon({ className }: { className: string }): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="m14.5 9.5-1.6 4.4-4.4 1.6 1.6-4.4z" />
    </svg>
  );
}

function CrosshairMark(): React.JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-ink/70">
      <circle cx="10" cy="10" r="6" />
      <path d="M10 0v6M10 14v6M0 10h6M14 10h6" />
    </svg>
  );
}

function TerrainBand({ paths, position }: { paths: string[]; position: string }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 110"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 h-20 w-full text-ink/15 ${position}`}
      fill="none"
    >
      {paths.map((d) => (
        <path key={d} d={d} stroke="currentColor" />
      ))}
    </svg>
  );
}

function CoordinationNote({ className }: { className: string }): React.JSX.Element {
  return (
    <div className={`flex items-stretch gap-4 border border-ink/30 bg-white/80 p-4 ${className}`}>
      <CompassIcon className="h-6 w-6 shrink-0 self-center text-ink/70" />
      <span aria-hidden="true" className="w-px shrink-0 self-stretch bg-gold" />
      <p className="text-xs leading-relaxed text-charcoal">{SEPARATE_ROOMS.boundaryNote}</p>
    </div>
  );
}

function DesktopMapStage(): React.JSX.Element {
  return (
    <div className="relative hidden aspect-[1056/864] lg:block">
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
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {ROUTES.map((route) => (
          <g key={route.d}>
            <path
              d={route.d}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="2 7"
              className="text-ink/60"
            />
            <circle cx={route.node[0]} cy={route.node[1]} r="4" className="fill-gold stroke-white" />
          </g>
        ))}
      </svg>
      {CROSSHAIRS.map((mark) => (
        <span
          key={mark.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={toStage(mark.x, mark.y)}
        >
          <CrosshairMark />
        </span>
      ))}
      {ROLE_LABELS.map((role) => (
        <p
          key={role.label}
          className="absolute max-w-36 -translate-x-1/2 -translate-y-1/2 text-center text-sm font-semibold leading-snug text-ink"
          style={toStage(role.x, role.y)}
        >
          {role.label}
        </p>
      ))}
      <p
        className="absolute -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold text-ink"
        style={toStage(974, 407)}
      >
        {SEPARATE_ROOMS.centerLabel}
      </p>
      <CoordinationNote className="absolute bottom-[5%] right-[1%] max-w-sm" />
    </div>
  );
}

/** Irregular satellite treatment so the mobile map keeps the authored
 * island character instead of collapsing into a uniform pill stack. */
const MOBILE_ISLANDS = [
  { shift: "-translate-x-14 -rotate-2", radius: "62% 38% 54% 46% / 44% 60% 40% 56%", stem: "rotate-[14deg]" },
  { shift: "translate-x-16 rotate-1", radius: "40% 60% 45% 55% / 58% 42% 60% 40%", stem: "-rotate-[16deg]" },
  { shift: "-translate-x-8 rotate-2", radius: "55% 45% 62% 38% / 50% 54% 46% 50%", stem: "rotate-[9deg]" },
  { shift: "translate-x-10 -rotate-1", radius: "48% 52% 42% 58% / 62% 40% 58% 38%", stem: "-rotate-[11deg]" },
  { shift: "-translate-x-12", radius: "58% 42% 50% 50% / 45% 58% 42% 55%", stem: "rotate-[12deg]" },
] as const;

function MobileMap(): React.JSX.Element {
  return (
    <div className="mt-10 lg:hidden">
      <div className="vb-island-blob mx-auto flex aspect-[5/4] w-60 items-center justify-center bg-mist shadow-[0_18px_36px_rgba(11,31,58,0.18)]">
        <p className="max-w-[10ch] text-center text-xl font-bold text-ink">{SEPARATE_ROOMS.centerLabel}</p>
      </div>
      <ul className="mx-auto mt-4 max-w-sm">
        {SEPARATE_ROOMS.roles.map((role, index) => {
          const island = MOBILE_ISLANDS[index % MOBILE_ISLANDS.length];
          return (
            <li key={role} className="flex flex-col items-center">
              <span
                aria-hidden="true"
                className={`h-9 w-px origin-top border-l border-dashed border-ink/50 ${island.stem}`}
              />
              <span aria-hidden="true" className="-mt-1 mb-1 h-2 w-2 rounded-full bg-gold" />
              <p
                className={`border border-ink/15 bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_24px_rgba(11,31,58,0.12)] ${island.shift}`}
                style={{ borderRadius: island.radius }}
              >
                {role}
              </p>
            </li>
          );
        })}
      </ul>
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
      <TerrainBand paths={CONTOUR_TOP} position="top-0" />
      <TerrainBand paths={CONTOUR_BOTTOM} position="bottom-0" />
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="absolute right-[38%] top-10 hidden h-4 w-4 text-ink/40 lg:block"
      >
        <path d="M12 4v16M4 12h16" />
      </svg>
      <div className="relative mx-auto max-w-[96rem] px-6 py-16 lg:grid lg:grid-cols-[31%_minmax(0,1fr)] lg:gap-6 lg:py-0">
        <div className="lg:self-center lg:py-16">
          <p className="inline-flex items-center gap-2 border border-ink/40 bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
            <CompassIcon className="h-4 w-4 text-ink/70" />
            {SEPARATE_ROOMS.orientation}
          </p>
          <h2
            id="separate-rooms-heading"
            className="mt-6 max-w-[16ch] text-[clamp(1.9rem,3.2vw,2.9rem)] font-bold leading-[1.12] tracking-tight text-ink"
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
