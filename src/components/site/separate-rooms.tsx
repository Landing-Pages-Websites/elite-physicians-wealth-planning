import Image from "next/image";
import { SEPARATE_ROOMS } from "@/lib/content";
import {
  AlertIcon,
  CalculatorIcon,
  ChartBarIcon,
  ScalesIcon,
  ShieldPlusIcon,
  UmbrellaIcon,
} from "./icons";

/**
 * The coordination gap, built to the approved frame.
 *
 * The frame draws five large floor plans around a ringed hub, each carrying its
 * own name INSIDE the plan — an icon above it and a short gold rule under it —
 * with solid gold spokes running hub-to-plan and a ring node at both ends of
 * every spoke. A gold route enters top centre and leaves bottom left under an
 * arrow.
 *
 * Two earlier judgment calls are reversed here. The plans had been shrunk and
 * their names moved outside, which is why the reviewer could not read them; and
 * the spokes had been drawn BROKEN on the argument that a fully wired hub
 * "draws the state the firm sells rather than the problem the copy describes."
 * The frame draws them solid.
 *
 * The one thing not reproduced is the navy masthead tab, which sets "The
 * Consult Ledger" — the internal A/B direction codename, not the client's
 * brand. Shipping it would publish a build artifact as the practice's identity.
 *
 * Boxes measured from public/design/a/refs/03-separate-rooms.png at 1536x864.
 */
type RoomSpec = {
  role: (typeof SEPARATE_ROOMS.roles)[number];
  src: string;
  alt: string;
  width: number;
  height: number;
  Icon: (props: { className?: string }) => React.JSX.Element;
  /** Plan box and spoke endpoints, percentages of the frame. */
  box: { left: number; top: number; width: number; height: number };
  /** Where the spoke meets this plan, and where it leaves the hub. */
  spoke: { x1: number; y1: number; x2: number; y2: number };
};

const ROOM_DIR = "/images/design/a/03-separate-rooms";

const ROOMS: readonly RoomSpec[] = [
  {
    role: "CPA",
    src: `${ROOM_DIR}/room-cpa.png`,
    alt: "Hand-drawn floor plan of a CPA\u2019s separate office",
    width: 422,
    height: 278,
    Icon: CalculatorIcon,
    box: { left: 34.8, top: 9.8, width: 25.7, height: 24.9 },
    spoke: { x1: 906, y1: 350, x2: 742, y2: 256 },
  },
  {
    role: "Attorney",
    src: `${ROOM_DIR}/room-attorney.png`,
    alt: "Hand-drawn floor plan of an attorney\u2019s separate office",
    width: 494,
    height: 278,
    Icon: ScalesIcon,
    box: { left: 68.4, top: 9, width: 28, height: 25.7 },
    spoke: { x1: 1038, y1: 350, x2: 1232, y2: 256 },
  },
  {
    role: "TPA",
    src: `${ROOM_DIR}/room-tpa.png`,
    alt: "Hand-drawn floor plan of a third-party administrator\u2019s separate office",
    width: 316,
    height: 260,
    Icon: ShieldPlusIcon,
    box: { left: 34.8, top: 39.4, width: 19.2, height: 22.6 },
    spoke: { x1: 877, y1: 425, x2: 790, y2: 425 },
  },
  {
    role: "Insurance professional",
    src: `${ROOM_DIR}/room-insurance-professional.png`,
    alt: "Hand-drawn floor plan of an insurance professional\u2019s separate office",
    width: 388,
    height: 261,
    Icon: UmbrellaIcon,
    box: { left: 75.2, top: 38.8, width: 21.2, height: 24.3 },
    spoke: { x1: 1067, y1: 425, x2: 1155, y2: 425 },
  },
  {
    role: "Financial advisor",
    src: `${ROOM_DIR}/room-financial-advisor.png`,
    alt: "Hand-drawn floor plan of a financial advisor\u2019s separate office",
    width: 411,
    height: 278,
    Icon: ChartBarIcon,
    box: { left: 43.3, top: 66, width: 24.4, height: 26 },
    spoke: { x1: 972, y1: 520, x2: 972, y2: 592 },
  },
] as const;

const HUB = { cx: 972, cy: 425, r: 95 } as const;

/** Solid spokes with a ring node at both ends, plus the seam route. */
function NetworkRoute(): React.JSX.Element {
  const node = (cx: number, cy: number, key: string): React.JSX.Element => (
    <g key={key}>
      <circle cx={cx} cy={cy} r="7" fill="var(--color-ivory)" stroke="var(--color-gold)" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="2.5" fill="var(--color-gold)" />
    </g>
  );
  return (
    <svg
      viewBox="0 0 1536 864"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
    >
      <g stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Arrival from 02: in at the top edge, down the clear channel between
            the two upper plans, onto the hub's crown. */}
        <path d="M730 0 V22 Q730 40 748 40 H954 Q972 40 972 58 V330" vectorEffect="non-scaling-stroke" />
        {ROOMS.map((room) => (
          <path
            key={room.role}
            d={`M${room.spoke.x1} ${room.spoke.y1} L${room.spoke.x2} ${room.spoke.y2}`}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {/* Exit to 04 under the lowest plan and out to the left edge. */}
        <path d="M880 795 Q862 795 862 813 V828 H104" vectorEffect="non-scaling-stroke" />
        <path d="M116 816 L104 828 L116 840" vectorEffect="non-scaling-stroke" />
      </g>
      <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r} fill="var(--color-ivory)" stroke="var(--color-gold)" strokeWidth="2" />
      <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r - 9} fill="none" stroke="var(--color-gold)" strokeWidth="1" />
      {node(730, 40, "entry")}
      {ROOMS.flatMap((room) => [
        node(room.spoke.x1, room.spoke.y1, `${room.role}-hub`),
        node(room.spoke.x2, room.spoke.y2, `${room.role}-plan`),
      ])}
    </svg>
  );
}

/** The plan, with its name set inside as the frame does. */
function RoomFigure({ room }: { room: RoomSpec }): React.JSX.Element {
  const { Icon } = room;
  return (
    <figure
      className="absolute"
      style={{
        left: `${room.box.left}%`,
        top: `${room.box.top}%`,
        width: `${room.box.width}%`,
        height: `${room.box.height}%`,
      }}
    >
      <Image
        src={room.src}
        alt={room.alt}
        fill
        sizes="(min-width: 1024px) 26vw, 256px"
        className="object-contain"
      />
      {/* Centred on the plan: mark, name, rule — the frame's own lockup. */}
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center">
        <Icon className="h-[1.9cqw] w-[1.9cqw] text-gold" />
        <span className="mt-[0.5cqw] max-w-[8ch] text-center font-display text-[1.75cqw] leading-[1.1] font-medium text-ink">
          {room.role}
        </span>
        <span aria-hidden="true" className="mt-[0.55cqw] block h-px w-[3.4cqw] bg-gold" />
      </figcaption>
    </figure>
  );
}

function BoundaryNote({ className }: { className?: string }): React.JSX.Element {
  return (
    <aside className={`flex items-start gap-3 border-l-2 border-gold bg-ivory/70 py-3 pr-4 pl-5 ${className ?? ""}`}>
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
        <AlertIcon className="h-4 w-4" />
      </span>
      <p className="font-body text-body-s leading-[1.55] text-charcoal">
        {SEPARATE_ROOMS.boundaryNote}
      </p>
    </aside>
  );
}

function CopyBlock({ compact }: { compact?: true }): React.JSX.Element {
  return (
    <>
      <p
        className={`font-body font-semibold tracking-[0.2em] uppercase ${
          compact ? "text-[11px]" : "text-[0.78cqw]"
        }`}
      >
        <span className="text-gold-text">Orientation: </span>
        <span className="text-ink">{SEPARATE_ROOMS.orientation}</span>
      </p>
      <h2
        id="separate-rooms-heading"
        className={`va-reveal font-display leading-[1.14] font-medium tracking-[-0.01em] text-ink ${
          compact ? "mt-5 text-display-m text-balance" : "mt-[1.5cqw] text-[3.05cqw]"
        }`}
      >
        {SEPARATE_ROOMS.headline}
      </h2>
      <span
        aria-hidden="true"
        className={`flex items-center ${compact ? "mt-6 w-40" : "mt-[1.8cqw] w-[88%]"}`}
      >
        <span className="h-px flex-1 bg-gold" />
        <span className={`ml-1 block shrink-0 rounded-full bg-gold ${compact ? "h-1.5 w-1.5" : "h-[0.5cqw] w-[0.5cqw]"}`} />
      </span>
      <p
        className={`font-body leading-[1.6] text-charcoal ${
          compact ? "mt-6 text-body-m" : "mt-[1.8cqw] text-[1.02cqw]"
        }`}
      >
        {SEPARATE_ROOMS.body}
      </p>
    </>
  );
}

export function SeparateRooms(): React.JSX.Element {
  return (
    <section
      id="separate-rooms"
      aria-labelledby="separate-rooms-heading"
      className="va-rooms relative overflow-hidden"
    >
      {/* Desktop: the frame's own canvas. */}
      <div className="@container relative hidden aspect-1536/864 w-full lg:block">
        <NetworkRoute />
        {ROOMS.map((room) => (
          <RoomFigure key={room.role} room={room} />
        ))}
        <p className="absolute top-[45.5%] left-[63.3%] w-[10.5%] -translate-x-1/2 -translate-y-1/2 text-center font-display text-[1.6cqw] leading-[1.15] font-medium text-ink">
          {SEPARATE_ROOMS.centerLabel}
        </p>
        <div className="absolute top-[18%] left-[3.6%] w-[30%]">
          <CopyBlock />
        </div>
        <BoundaryNote className="absolute right-[4%] bottom-[11%] w-[21%]" />
      </div>

      <div className="va-shell relative z-10 lg:hidden">
        <div className="px-6 pt-10 sm:px-10">
          <CopyBlock compact />
        </div>
        {/* Mobile: one trunk off the hub with five branches. The old stack
            chained room to room, which read as a referral pipeline — the
            opposite of what the copy claims. */}
        <div className="px-6 pb-14 sm:px-10">
          <div className="mt-10 flex flex-col items-center">
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-2 border-gold bg-ivory">
              <span aria-hidden="true" className="absolute inset-2 rounded-full border border-gold" />
              <p className="px-6 text-center font-display text-xl leading-tight font-medium text-ink">
                {SEPARATE_ROOMS.centerLabel}
              </p>
            </div>
            <ul className="relative mt-8 w-full space-y-6 border-l-2 border-gold pl-8">
              {ROOMS.map((room) => {
                const { Icon } = room;
                return (
                  <li key={room.role} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 left-[-2.35rem] h-[2px] w-8 -translate-y-1/2 bg-gold"
                    />
                    <figure className="relative w-full max-w-[18rem]">
                      <Image
                        src={room.src}
                        alt={room.alt}
                        width={room.width}
                        height={room.height}
                        sizes="256px"
                        className="h-auto w-full"
                      />
                      <figcaption className="absolute inset-0 flex flex-col items-center justify-center">
                        <Icon className="h-5 w-5 text-gold" />
                        <span className="mt-1 max-w-[9ch] bg-ivory/80 px-1 text-center font-display text-lg leading-tight font-medium text-ink">
                          {room.role}
                        </span>
                        <span aria-hidden="true" className="mt-1 block h-px w-10 bg-gold" />
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
          <BoundaryNote className="mt-10" />
        </div>
      </div>
    </section>
  );
}
