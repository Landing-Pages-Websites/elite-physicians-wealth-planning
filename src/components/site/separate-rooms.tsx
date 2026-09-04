import Image from "next/image";
import { SEPARATE_ROOMS } from "@/lib/content";
import { AlertIcon } from "./icons";

type RoomSpec = {
  role: (typeof SEPARATE_ROOMS.roles)[number];
  src: string;
  alt: string;
  width: number;
  height: number;
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
    desktop: { left: "37.5%", top: "6%", width: "25%" },
  },
  {
    role: "Attorney",
    src: `${ROOM_DIR}/room-attorney.png`,
    alt: "Hand-drawn floor plan of an attorney’s separate office",
    width: 494,
    height: 278,
    desktop: { left: "66.5%", top: "5%", width: "27%" },
  },
  {
    role: "TPA",
    src: `${ROOM_DIR}/room-tpa.png`,
    alt: "Hand-drawn floor plan of a third-party administrator’s separate office",
    width: 316,
    height: 260,
    desktop: { left: "33.5%", top: "44%", width: "19%" },
  },
  {
    role: "Insurance professional",
    src: `${ROOM_DIR}/room-insurance-professional.png`,
    alt: "Hand-drawn floor plan of an insurance professional’s separate office",
    width: 388,
    height: 261,
    desktop: { left: "75.5%", top: "42%", width: "22.5%" },
  },
  {
    role: "Financial advisor",
    src: `${ROOM_DIR}/room-financial-advisor.png`,
    alt: "Hand-drawn floor plan of a financial advisor’s separate office",
    width: 411,
    height: 278,
    desktop: { left: "44.5%", top: "67%", width: "24%" },
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
        <path
          d="M768 0 V22 Q768 40 786 40 H970 Q988 40 988 58 V300 Q988 344 975 370"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M955 523 V545 Q955 566 976 566 H1060 Q1082 566 1082 588 V822 Q1082 844 1060 844 H0"
          vectorEffect="non-scaling-stroke"
        />
        <g strokeDasharray="2 10">
          <path d="M918 382 Q866 350 806 276" vectorEffect="non-scaling-stroke" />
          <path d="M1006 390 Q1036 330 1053 251" vectorEffect="non-scaling-stroke" />
          <path d="M877 446 H781" vectorEffect="non-scaling-stroke" />
          <path d="M1033 452 Q1112 466 1184 487" vectorEffect="non-scaling-stroke" />
          <path d="M950 523 Q936 556 903 583" vectorEffect="non-scaling-stroke" />
        </g>
      </g>
      <circle cx="955" cy="445" r="78" fill="var(--color-ivory)" stroke="var(--color-gold)" strokeWidth="2" />
      <circle cx="955" cy="445" r="68" fill="none" stroke="var(--color-gold)" strokeWidth="1" />
      {node(806, 276)}
      {node(1053, 251)}
      {node(781, 446)}
      {node(1184, 487)}
      {node(903, 583)}
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
        sizes="(min-width: 1024px) 26vw, 256px"
        className="h-auto w-full"
      />
      {/* Drafting-style room callout pinned to the plan's empty top-left
          quadrant. Centred, it sat on the drawn furniture; the ivory plate
          knocks it out of the hatching so both drawing and label survive. */}
      <figcaption className="absolute top-[9%] left-[7%]">
        <span className="inline-block bg-ivory px-2 py-0.5 font-display text-display-s leading-none font-semibold tracking-[0.01em] text-ink">
          {room.role}
        </span>
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
              style={room.desktop}
            />
          ))}
          <HubCircle className="absolute top-[51.5%] left-[62.2%] h-[17%] w-[9.6%] -translate-x-1/2 -translate-y-1/2 px-3 text-[clamp(1rem,1.5vw,1.45rem)] leading-tight" />
          <BoundaryNote className="absolute bottom-[9%] left-[max(1.5rem,calc((100vw-var(--page-max))/2+var(--page-pad)))] w-[26%] max-w-none" />
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
