import type {
  CoordinationMapContent,
  CoordinationPillar,
  FloorPlanKey,
} from "./content-types";
import { EdgePlates } from "./coordination-edge-plates";
import { CoordinationMapHub } from "./coordination-map-hub";
import { MapIntro } from "./coordination-map-intro";
import { CoordinationMapLoop } from "./coordination-map-loop";
import { CoordinationMapRail } from "./coordination-map-rail";

/**
 * Hand-drawn floor-plan line work for the surgeons-style map: five distinct
 * rooms, navy strokes on a faint blueprint grid, per the extraction plan's
 * CODE verdict ("rebuild the complete room perimeter and furnishings as a
 * responsive inline SVG"). Each plan keeps one door gap in its perimeter.
 */
/*
 * Furniture vocabulary is one system across all five rooms: tables are rects
 * (round tables are circles), chairs are r=4.5 circles seated against their
 * table, storage is a rect with shelf rules. No glyph-like symbols.
 */
const FLOOR_PLANS: Record<FloorPlanKey, React.JSX.Element> = {
  tax: (
    <>
      <path d="M50 74 H6 V6 H114 V74 H66" />
      <rect x="30" y="30" width="44" height="18" />
      <circle cx="42" cy="22" r="4.5" />
      <circle cx="62" cy="22" r="4.5" />
      <circle cx="42" cy="56" r="4.5" />
      <circle cx="62" cy="56" r="4.5" />
      <path d="M88 14 H104 V46 H88 Z M88 30 H104" />
    </>
  ),
  wealth: (
    <>
      <path d="M6 26 V6 H114 V74 H6 V42" />
      <path d="M18 52 H58 V64 H18 Z" />
      <path d="M18 32 H30 V52" />
      <circle cx="38" cy="44" r="4.5" />
      <circle cx="90" cy="32" r="11" />
      <circle cx="76" cy="22" r="4.5" />
      <circle cx="104" cy="42" r="4.5" />
    </>
  ),
  retirement: (
    <>
      <path d="M70 6 H6 V74 H114 V6 H86" />
      <path d="M22 48 Q22 36 34 36 H46 Q58 36 58 48 V60 H22 Z" />
      <circle cx="74" cy="52" r="7" />
      <rect x="88" y="40" width="16" height="16" rx="3" />
      <rect x="24" y="14" width="16" height="10" />
    </>
  ),
  practice: (
    <>
      <path d="M114 44 V6 H6 V74 H114 V60" />
      <rect x="32" y="28" width="56" height="22" />
      <circle cx="24" cy="39" r="4.5" />
      <circle cx="96" cy="39" r="4.5" />
      <circle cx="48" cy="20" r="4.5" />
      <circle cx="72" cy="20" r="4.5" />
      <circle cx="48" cy="58" r="4.5" />
      <circle cx="72" cy="58" r="4.5" />
    </>
  ),
  legacy: (
    <>
      <path d="M72 74 H114 V6 H6 V74 H56" />
      <rect x="18" y="16" width="20" height="44" />
      <path d="M18 30 H38 M18 44 H38" />
      <rect x="70" y="26" width="32" height="18" />
      <circle cx="79" cy="18" r="4.5" />
      <circle cx="93" cy="52" r="4.5" />
    </>
  ),
};

function FloorPlan({ plan }: { plan: FloorPlanKey }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 120 80"
      aria-hidden="true"
      className="h-auto w-full"
      fill="none"
      stroke="var(--color-ink)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {FLOOR_PLANS[plan]}
    </svg>
  );
}

function VignetteRow({
  pillars,
}: {
  pillars: readonly CoordinationPillar[];
}): React.JSX.Element {
  return (
    <div className="relative mt-16">
      {/* One gold route runs behind the five anchors. */}
      <div
        aria-hidden="true"
        className="absolute top-[64px] right-0 left-0 hidden h-px bg-gold/70 lg:block"
      />
      <ul className="relative grid gap-x-6 gap-y-10 border-l border-gold/60 pl-6 lg:grid-cols-5 lg:border-l-0 lg:pl-0">
        {pillars.map((pillar) => (
          <li
            key={pillar.label}
            className="flex items-center gap-5 lg:flex-col lg:gap-4 lg:text-center"
          >
            <figure className="aud-map-vignette flex h-[104px] w-[132px] shrink-0 items-center justify-center p-2 lg:h-[128px] lg:w-full lg:max-w-[210px]">
              {pillar.image ? (
                <img
                  src={pillar.image.src}
                  alt=""
                  aria-hidden="true"
                  width={230}
                  height={158}
                  className="h-full w-full object-contain"
                />
              ) : null}
            </figure>
            <span className="font-body text-body-s font-medium leading-snug text-ink">
              {pillar.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Connectors from the central hub to the five plan cells (desktop). Every line
 * starts at the hub centre and ends deep inside its room cell; the hub plate
 * and the white room cells sit above the SVG, so each visible connector runs
 * unbroken from the hub ring to the room edge at every viewport width.
 */
function PlanRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 600 460"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      fill="none"
    >
      <g stroke="var(--color-gold)" strokeWidth="1.5" opacity="0.7">
        <path d="M300 230 V70" vectorEffect="non-scaling-stroke" />
        <path d="M300 230 H140" vectorEffect="non-scaling-stroke" />
        <path d="M300 230 H460" vectorEffect="non-scaling-stroke" />
        <path d="M300 230 L111 394" vectorEffect="non-scaling-stroke" />
        <path d="M300 230 L489 394" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

function PlanGrid({
  content,
}: {
  content: CoordinationMapContent;
}): React.JSX.Element {
  return (
    <div className="relative">
      <PlanRoute />
      <div className="aud-plan-grid relative flex flex-col gap-8 border-l border-gold/60 pl-6 lg:border-l-0 lg:pl-0">
        {/* aud-map-hub gives the hub the ref's solid white plate + gold ring,
            which also masks the connector origins at the centre. */}
        <div className="aud-map-hub aud-plan-hub z-10 flex h-32 w-32 items-center justify-center rounded-full text-center">
          <span className="max-w-[6.5rem] font-display text-[1.2rem] leading-tight font-medium text-ink">
            {content.hubLabel}
          </span>
        </div>
        {content.pillars.map((pillar) => (
          <figure
            key={pillar.label}
            className={`z-10 w-full max-w-[230px] aud-plan-${pillar.plan ?? "tax"}`}
          >
            <div className="aud-map-plan p-3">
              {pillar.plan ? <FloorPlan plan={pillar.plan} /> : null}
            </div>
            {/* bg-white lets the tax connector pass behind the caption. */}
            <figcaption className="mx-auto mt-3 w-fit bg-white px-2 text-center font-body text-body-s font-medium leading-snug text-ink">
              {pillar.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function PlanVariant({
  content,
}: {
  content: CoordinationMapContent;
}): React.JSX.Element {
  return (
    <div className="grid gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
      <div className="flex flex-col gap-10">
        <MapIntro content={content} centered={false} />
        {content.stillLife ? (
          <figure className="relative mt-auto hidden aspect-[5/4] w-full max-w-xs overflow-hidden lg:block">
            <img
              src={content.stillLife.src}
              alt={content.stillLife.alt}
              width={500}
              height={400}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: content.stillLife.objectPosition }}
            />
          </figure>
        ) : null}
      </div>
      <PlanGrid content={content} />
    </div>
  );
}

function MapVariant({
  content,
}: {
  content: CoordinationMapContent;
}): React.JSX.Element {
  switch (content.variant) {
    case "vignette-row":
      return (
        <>
          <MapIntro content={content} centered />
          <VignetteRow pillars={content.pillars} />
        </>
      );
    case "vignette-loop":
      return <CoordinationMapLoop content={content} />;
    case "edge-rail":
      return <CoordinationMapRail content={content} />;
    case "hub-spokes":
      return <CoordinationMapHub content={content} />;
    default:
      return <PlanVariant content={content} />;
  }
}

/**
 * 04-coordination-map — quiet white diagram section. "vignette-row" joins the
 * five extracted room vignettes on one gold route (physicians-specialists);
 * "floor-plan" arranges five drawn SVG rooms around a central hub
 * (surgeons); "vignette-loop" scatters the vignettes on one looping route
 * (dentists); "edge-rail" and "hub-spokes" draw the five labels between
 * edge-touching plates (CRNAs / execs). Pillar DOM order always follows the
 * manifest; on mobile every variant collapses to one vertical rail.
 */
export function CoordinationMap({
  content,
}: {
  content: CoordinationMapContent;
}): React.JSX.Element {
  return (
    <section
      id="coordination-map"
      aria-labelledby="coordination-map-heading"
      className="aud-map relative overflow-hidden"
    >
      {content.edges ? <EdgePlates edges={content.edges} /> : null}
      <div className="va-shell relative z-10 py-20 pb-28 lg:py-28 lg:pb-32">
        <MapVariant content={content} />
      </div>
      {/* The route becomes the spine of the question strip below. */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-14 w-px bg-gold/70"
      />
    </section>
  );
}
