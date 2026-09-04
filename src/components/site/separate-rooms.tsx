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

type RoomSpec = {
  role: (typeof SEPARATE_ROOMS.roles)[number];
  src: string;
  alt: string;
  width: number;
  height: number;
  Icon: (props: { className?: string }) => React.JSX.Element;
  /** Desktop placement on the 1536x864 canvas. */
  desktop: { left: string; top: string };
};

/**
 * Every room gets the same box.
 *
 * The five plans are 422x278, 494x278, 316x260, 388x261 and 411x278, and each
 * was previously given its own hand-tuned width — so they rendered at five
 * different sizes in five hand-picked positions, and read as five accidents
 * rather than five peers of one network. One width, one aspect, `object-contain`
 * inside it, and the arrangement is a radial rule: two above the hub, two
 * flanking it, one below.
 */
const ROOM_WIDTH = "17%";

const ROOM_DIR = "/images/design/a/03-separate-rooms";

const ROOMS: readonly RoomSpec[] = [
  {
    role: "CPA",
    src: `${ROOM_DIR}/room-cpa.png`,
    alt: "Hand-drawn floor plan of a CPA’s separate office",
    width: 422,
    height: 278,
    Icon: CalculatorIcon,
    desktop: { left: "31%", top: "5.5%" },
  },
  {
    role: "Attorney",
    src: `${ROOM_DIR}/room-attorney.png`,
    alt: "Hand-drawn floor plan of an attorney’s separate office",
    width: 494,
    height: 278,
    Icon: ScalesIcon,
    desktop: { left: "75%", top: "5.5%" },
  },
  {
    role: "TPA",
    src: `${ROOM_DIR}/room-tpa.png`,
    alt: "Hand-drawn floor plan of a third-party administrator’s separate office",
    width: 316,
    height: 260,
    Icon: ShieldPlusIcon,
    desktop: { left: "26.5%", top: "40%" },
  },
  {
    role: "Insurance professional",
    src: `${ROOM_DIR}/room-insurance-professional.png`,
    alt: "Hand-drawn floor plan of an insurance professional’s separate office",
    width: 388,
    height: 261,
    Icon: UmbrellaIcon,
    desktop: { left: "79.5%", top: "40%" },
  },
  {
    role: "Financial advisor",
    src: `${ROOM_DIR}/room-financial-advisor.png`,
    alt: "Hand-drawn floor plan of a financial advisor’s separate office",
    width: 411,
    height: 278,
    Icon: ChartBarIcon,
    desktop: { left: "53%", top: "68%" },
  },
] as const;

/**
 * Gold network on the 1536x864 canvas.
 *
 * Two solid routes only: the arrival from 02, which enters top-centre and runs
 * an orthogonal corridor down the gutter between the CPA and Attorney plans
 * (it used to cut diagonally through the CPA's walls), and the exit to 04,
 * which now leaves the hub it arrived at and clears every plan's box on its
 * way to the left edge.
 *
 * The five spokes are drawn BROKEN, and each one lands on its room's outer
 * wall. The section is titled "the coordination gap" — a solid, fully wired
 * hub drew the state the firm sells, not the problem the copy describes.
 */
function NetworkRoute(): React.JSX.Element {
  const node = (cx: number, cy: number): React.JSX.Element => (
    <g key={`${cx}-${cy}`}>
      <circle cx={cx} cy={cy} r="6" fill="var(--color-ivory)" stroke="var(--color-gold)" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="2" fill="var(--color-gold)" />
    </g>
  );
  return (
    <svg
      viewBox="0 0 1536 864"
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
        {/* Arrival from 02, straight down the clear channel between the two
            upper plans and onto the hub's top. */}
        <path d="M960 0 V292" vectorEffect="non-scaling-stroke" />
        {/* Exit to 04, leaving the lowest plan's left edge and dropping out of
            the section clear of the boundary note, which occupies x 0-400. */}
        <path d="M872 674 H470 Q440 674 440 704 V864" vectorEffect="non-scaling-stroke" />
        {/* Five spokes, drawn BROKEN. The section is titled "the coordination
            gap"; a solid, fully wired hub would draw the state the firm sells
            rather than the problem the copy describes. Each one starts on the
            hub's rim and stops short of its plan's edge. */}
        <g strokeDasharray="2 10">
          <path d="M891 334 L664 216" vectorEffect="non-scaling-stroke" />
          <path d="M1028 331 L1228 217" vectorEffect="non-scaling-stroke" />
          <path d="M884 386 L682 430" vectorEffect="non-scaling-stroke" />
          <path d="M1036 388 L1207 430" vectorEffect="non-scaling-stroke" />
          <path d="M954 448 L943 573" vectorEffect="non-scaling-stroke" />
        </g>
      </g>
      <circle cx="960" cy="370" r="78" fill="var(--color-ivory)" stroke="var(--color-gold)" strokeWidth="2" />
      <circle cx="960" cy="370" r="68" fill="none" stroke="var(--color-gold)" strokeWidth="1" />
      {node(664, 216)}
      {node(1228, 217)}
      {node(682, 430)}
      {node(1207, 430)}
      {node(943, 573)}
    </svg>
  );
}

function RoomFigure({
  room,
  className,
  style,
}: {
  room: RoomSpec;
  className?: string;
  style?: React.CSSProperties;
}): React.JSX.Element {
  const { Icon } = room;
  return (
    <figure className={className} style={style}>
      <div className="relative aspect-3/2 w-full">
        <Image
          src={room.src}
          alt={room.alt}
          fill
          sizes="(min-width: 1024px) 18vw, 256px"
          className="object-contain"
        />
      </div>
      {/* The name used to sit INSIDE the plan, pinned to its top-left quadrant
          on a knocked-out ivory plate — so on every room it cut a notch out of
          the drawn wall it was sitting on, and two of the five were unreadable
          against the hatching. It sits under its own drawing now, with the
          mark that says what kind of office it is. */}
      <figcaption className="mt-3 flex flex-col items-center gap-1.5 text-center">
        <Icon className="h-5 w-5 text-gold" />
        <span className="font-display text-[1.15rem] leading-tight font-semibold text-ink">
          {room.role}
        </span>
      </figcaption>
    </figure>
  );
}

function BoundaryNote({ className }: { className?: string }): React.JSX.Element {
  return (
    // A dashed rectangle is wireframe chrome — the reader sees an unfinished
    // placeholder, not a scope boundary. The note is real and load-bearing
    // (it is the section's disclaimer), so it gets an editorial sidenote rule
    // in the accent that already marks edges everywhere else on the page.
    <aside
      className={`flex items-start gap-3 border-l-2 border-gold bg-ivory/70 py-3 pr-4 pl-5 ${className ?? ""}`}
    >
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
        <AlertIcon className="h-4 w-4" />
      </span>
      <p className="font-body text-body-s leading-[1.55] text-charcoal">
        {SEPARATE_ROOMS.boundaryNote}
      </p>
    </aside>
  );
}

function CopyBlock(): React.JSX.Element {
  return (
    <div className="max-w-md px-6 pt-10 sm:px-10 lg:absolute lg:top-[9%] lg:left-0 lg:z-20 lg:w-[26%] lg:max-w-none lg:px-0 lg:pt-0">
      <p className="font-body text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">
        {SEPARATE_ROOMS.orientation}
      </p>
      <h2
        id="separate-rooms-heading"
        className="va-reveal mt-5 text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
      >
        {SEPARATE_ROOMS.headline}
      </h2>
      <p className="mt-5 max-w-[52ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
        {SEPARATE_ROOMS.body}
      </p>
    </div>
  );
}

function HubCircle({ className }: { className?: string }): React.JSX.Element {
  return (
    <p
      className={`flex items-center justify-center rounded-full text-center font-display font-semibold text-ink ${className ?? ""}`}
    >
      {SEPARATE_ROOMS.centerLabel}
    </p>
  );
}

export function SeparateRooms(): React.JSX.Element {
  return (
    <section
      id="separate-rooms"
      aria-labelledby="separate-rooms-heading"
      className="va-rooms relative overflow-hidden"
    >
      <div className="va-shell relative z-10">
        {/* The approved frame carries a navy notch tab here reading "The
            Consult Ledger" — the internal A/B direction codename, not the
            client's brand. Publishing it would ship a build artifact as the
            practice's identity, so the tab is removed rather than refilled:
            inventing replacement brand furniture is not ours to do. The
            orientation eyebrow and headline below now open the section, which
            is how every other section on the page opens. */}
        <CopyBlock />

        {/* Desktop: radial network on the native 1536x864 canvas. */}
        <div className="relative hidden aspect-[1536/864] w-full lg:block">
          <NetworkRoute />
          {ROOMS.map((room) => (
            <RoomFigure
              key={room.role}
              room={room}
              className="absolute"
              style={{ ...room.desktop, width: ROOM_WIDTH }}
            />
          ))}
          <HubCircle className="absolute top-[42.8%] left-[62.5%] h-[18%] w-[10.2%] -translate-x-1/2 -translate-y-1/2 px-3 text-[clamp(1rem,1.5vw,1.45rem)] leading-tight" />
          <BoundaryNote className="absolute bottom-[7%] left-0 w-[26%] max-w-none" />
        </div>

        {/* Mobile: the desktop topology rotated — one trunk off the hub with
            five branches. The old stack chained room to room, which read as a
            referral pipeline, i.e. the opposite of what the copy claims. */}
        <div className="px-6 pb-14 sm:px-10 lg:hidden">
          <div className="mt-10 flex flex-col items-center">
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-2 border-gold bg-ivory">
              <span
                aria-hidden="true"
                className="absolute inset-2 rounded-full border border-gold"
              />
              <HubCircle className="h-full w-full px-6 text-xl leading-tight" />
            </div>
            <div className="relative mt-8 w-full pl-10">
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-10 left-[19px] w-[2px] bg-gold"
              />
              {ROOMS.map((room) => (
                <div key={room.role} className="relative flex w-full items-center py-4">
                  <RoomFigure room={room} className="relative w-full max-w-[16rem]" />
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-[-21px] h-[2px] w-10 -translate-y-1/2 bg-gold"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-[-27px] h-3 w-3 -translate-y-1/2 rounded-full border-2 border-gold bg-ivory"
                  />
                </div>
              ))}
            </div>
            <BoundaryNote className="mt-10 w-full max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
