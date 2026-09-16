/** Manifest copy for 04-professional-coordination — content contract, do not edit. */
const COORDINATION = {
  headline: "A shared strategy across your professional team.",
  body: "Implementation may require coordination with your CPA, attorney, TPA, payroll provider, insurance professional, or other advisor.",
  centreLabel: "Shared strategy",
} as const;

interface RoomPlate {
  readonly label: string;
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

const PLATE_DIR = "/images/design/our-process/elements";

/** Manifest role order; the live navy strategy panel sits at the centre. */
const LEFT_ROOMS: readonly RoomPlate[] = [
  {
    label: "Financial planner",
    src: `${PLATE_DIR}/04-professional-coordination-financial-planner.png`,
    width: 411,
    height: 278,
  },
  {
    label: "CPA",
    src: `${PLATE_DIR}/04-professional-coordination-cpa.png`,
    width: 422,
    height: 278,
  },
] as const;

const RIGHT_ROOMS: readonly RoomPlate[] = [
  {
    label: "Attorney",
    src: `${PLATE_DIR}/04-professional-coordination-attorney.png`,
    width: 494,
    height: 278,
  },
  {
    label: "TPA or payroll",
    src: `${PLATE_DIR}/04-professional-coordination-tpa-payroll.png`,
    width: 316,
    height: 260,
  },
  {
    label: "Insurance professional",
    src: `${PLATE_DIR}/04-professional-coordination-insurance-professional.png`,
    width: 388,
    height: 261,
  },
] as const;

function Room({ room }: { room: RoomPlate }): React.JSX.Element {
  return (
    <li className="prc-coord-room flex h-full flex-col px-3 pt-3 pb-0">
      <p className="pb-3 text-center font-body text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
        {room.label}
      </p>
      <img
        src={room.src}
        alt=""
        aria-hidden="true"
        width={room.width}
        height={room.height}
        className="mt-auto h-auto w-full"
      />
    </li>
  );
}

function CentrePanel(): React.JSX.Element {
  return (
    <li className="prc-coord-center relative flex min-h-44 items-center justify-center px-4 py-10 lg:-my-4">
      <p className="text-center font-display text-display-s leading-[1.2] font-medium text-ivory-bright">
        {COORDINATION.centreLabel}
      </p>
      {/* The route drops from the shared panel into the navy closing strip. */}
      <span
        aria-hidden="true"
        className="absolute -bottom-24 left-1/2 hidden h-24 w-px -translate-x-1/2 bg-gold/80 lg:block"
      />
    </li>
  );
}

/**
 * 04-professional-coordination. Mist band: centred heading, five room plates
 * around a live navy shared-strategy panel, gold hairline joining the row,
 * and a full-bleed navy strip at the base that carries the line onward.
 */
export function ProfessionalCoordination(): React.JSX.Element {
  return (
    <section
      id="professional-coordination"
      aria-labelledby="professional-coordination-heading"
      className="prc-coord relative overflow-hidden"
    >
      <div className="va-shell pt-16 lg:pt-20">
        <h2
          id="professional-coordination-heading"
          className="prc-reveal mx-auto max-w-[24ch] text-center font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ink"
        >
          {COORDINATION.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-[62ch] text-center font-body text-body-m leading-[1.62] text-charcoal">
          {COORDINATION.body}
        </p>

        <div className="relative mt-14">
          {/* The gold coordination rule running behind the whole row. */}
          <span
            aria-hidden="true"
            className="absolute top-0 -right-6 -left-6 hidden h-px bg-gold/60 lg:block"
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.15fr_1fr_1fr_1fr] lg:items-end lg:gap-0 lg:divide-x lg:divide-gold/40">
            {LEFT_ROOMS.map((room) => (
              <Room key={room.label} room={room} />
            ))}
            <CentrePanel />
            {RIGHT_ROOMS.map((room) => (
              <Room key={room.label} room={room} />
            ))}
          </ul>
        </div>
      </div>
      <div className="relative z-10 mt-12 h-16 bg-ink lg:mt-0" />
    </section>
  );
}
