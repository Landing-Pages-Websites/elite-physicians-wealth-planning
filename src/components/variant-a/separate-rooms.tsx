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
  desktop: { left: string; top: string; width: string };
};

const ROOM_DIR = "/images/design/a/03-separate-rooms";

const ROOMS: readonly RoomSpec[] = [
  {
    role: "CPA",
    src: `${ROOM_DIR}/room-cpa.png`,
    alt: "Hand-drawn floor plan of a CPA’s separate office",
    width: 422,
    height: 278,
    Icon: CalculatorIcon,
    desktop: { left: "37.5%", top: "6%", width: "25%" },
  },
  {
    role: "Attorney",
    src: `${ROOM_DIR}/room-attorney.png`,
    alt: "Hand-drawn floor plan of an attorney’s separate office",
    width: 494,
    height: 278,
    Icon: ScalesIcon,
    desktop: { left: "66.5%", top: "5%", width: "27%" },
  },
  {
    role: "TPA",
    src: `${ROOM_DIR}/room-tpa.png`,
    alt: "Hand-drawn floor plan of a third-party administrator’s separate office",
    width: 316,
    height: 260,
    Icon: ShieldPlusIcon,
    desktop: { left: "29.5%", top: "44%", width: "19%" },
  },
  {
    role: "Insurance professional",
    src: `${ROOM_DIR}/room-insurance-professional.png`,
    alt: "Hand-drawn floor plan of an insurance professional’s separate office",
    width: 388,
    height: 261,
    Icon: UmbrellaIcon,
    desktop: { left: "75.5%", top: "42%", width: "22.5%" },
  },
  {
    role: "Financial advisor",
    src: `${ROOM_DIR}/room-financial-advisor.png`,
    alt: "Hand-drawn floor plan of a financial advisor’s separate office",
    width: 411,
    height: 278,
    Icon: ChartBarIcon,
    desktop: { left: "44.5%", top: "70.5%", width: "24%" },
  },
] as const;

/**
 * Gold network: enters top-center (x=768, from the 02 seam), reaches the
 * hub, connects each room to the hub only, and the financial-advisor
 * branch bends into the long arrow exiting at the lower left (seam to 04).
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
        <path d="M768 0 V44 Q768 90 806 128 Q882 204 920 302 Q934 344 940 368" vectorEffect="non-scaling-stroke" />
        <path d="M918 382 Q868 360 812 336" vectorEffect="non-scaling-stroke" />
        <path d="M1006 390 Q1030 350 1050 306" vectorEffect="non-scaling-stroke" />
        <path d="M877 446 H790" vectorEffect="non-scaling-stroke" />
        <path d="M1033 452 Q1090 462 1140 481" vectorEffect="non-scaling-stroke" />
        <path d="M950 523 Q940 570 906 611" vectorEffect="non-scaling-stroke" />
        <path d="M683 780 C520 806 300 828 96 846 Q56 850 30 864" vectorEffect="non-scaling-stroke" />
        <path d="M118 830 L96 846 L120 856" vectorEffect="non-scaling-stroke" />
        <path d="M60 598 H330 Q362 598 382 584" vectorEffect="non-scaling-stroke" />
      </g>
      <circle cx="955" cy="445" r="78" fill="var(--color-ivory)" stroke="var(--color-gold)" strokeWidth="2" />
      <circle cx="955" cy="445" r="68" fill="none" stroke="var(--color-gold)" strokeWidth="1" />
      {node(806, 333)}
      {node(1053, 301)}
      {node(784, 446)}
      {node(1146, 483)}
      {node(903, 615)}
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
  return (
    <figure className={className} style={style}>
      <Image
        src={room.src}
        alt={room.alt}
        width={room.width}
        height={room.height}
        sizes="(min-width: 1024px) 26vw, 288px"
        className="h-auto w-full"
      />
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        <room.Icon className="h-7 w-7 text-gold" />
        <span className="font-display text-lg leading-none font-semibold text-ink lg:text-[clamp(1rem,1.4vw,1.4rem)]">
          {room.role}
        </span>
        <span aria-hidden="true" className="h-px w-10 bg-gold" />
      </figcaption>
    </figure>
  );
}

function BoundaryNote({ className }: { className?: string }): React.JSX.Element {
  return (
    <aside
      className={`flex items-start gap-3 rounded-md border border-dashed border-ink/40 bg-ivory/70 p-4 ${className ?? ""}`}
    >
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
        <AlertIcon className="h-4 w-4" />
      </span>
      <p className="font-body text-xs leading-relaxed text-charcoal">
        {SEPARATE_ROOMS.boundaryNote}
      </p>
    </aside>
  );
}

function CopyBlock(): React.JSX.Element {
  return (
    <div className="max-w-md px-6 pt-10 sm:px-10 lg:absolute lg:top-[19%] lg:left-[4%] lg:z-20 lg:w-[26%] lg:max-w-none lg:p-0">
      <p className="font-body text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
        Orientation: {SEPARATE_ROOMS.orientation}
      </p>
      <h2
        id="separate-rooms-heading"
        className="va-reveal mt-4 font-display text-[clamp(1.9rem,2.9vw,2.8rem)] leading-[1.12] font-semibold text-ink"
      >
        {SEPARATE_ROOMS.headline}
      </h2>
      <p className="mt-5 font-body text-[13.5px] leading-relaxed text-charcoal">
        {SEPARATE_ROOMS.body}
      </p>
      <span aria-hidden="true" className="mt-6 block h-[2px] w-20 bg-gold lg:hidden" />
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
      <div className="relative z-10">
        <p className="va-notch inline-block bg-ink py-3 pr-14 pl-8 font-display text-xs font-semibold tracking-[0.34em] text-gold uppercase lg:ml-[3%]">
          The Consult Ledger
        </p>

        <CopyBlock />

        {/* Desktop: radial network on the native 1536x864 canvas. */}
        <div className="relative -mt-4 hidden aspect-[1536/864] w-full lg:block">
          <NetworkRoute />
          {ROOMS.map((room) => (
            <RoomFigure
              key={room.role}
              room={room}
              className="absolute"
              style={room.desktop}
            />
          ))}
          <HubCircle className="absolute top-[51.5%] left-[62.2%] h-[17%] w-[9.6%] -translate-x-1/2 -translate-y-1/2 px-3 text-[clamp(1rem,1.5vw,1.45rem)] leading-tight" />
          <BoundaryNote className="absolute right-[3%] bottom-[5%] w-[300px]" />
        </div>

        {/* Mobile: vertical convergence — hub first, rooms stacked. */}
        <div className="px-6 pb-14 sm:px-10 lg:hidden">
          <div className="mt-10 flex flex-col items-center">
            <span aria-hidden="true" className="h-10 w-[2px] bg-gold" />
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-2 border-gold bg-ivory">
              <span
                aria-hidden="true"
                className="absolute inset-2 rounded-full border border-gold"
              />
              <HubCircle className="h-full w-full px-6 text-xl leading-tight" />
            </div>
            {ROOMS.map((room) => (
              <div key={room.role} className="flex w-full flex-col items-center">
                <span aria-hidden="true" className="h-10 w-[2px] bg-gold" />
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full border-2 border-gold bg-ivory"
                />
                <RoomFigure room={room} className="relative w-72 max-w-full" />
              </div>
            ))}
            <BoundaryNote className="mt-10 w-full max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
