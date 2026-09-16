import type { CoordinationMapContent } from "./content-types";
import { MapIntro } from "./coordination-map-intro";

const LOOP_AREAS = ["tax", "wealth", "retirement", "practice", "legacy"];

/**
 * One meandering gold route joining the five scattered room vignettes
 * (dentists ref). Coordinates approximate the grid-area cell centres; the
 * line stays sparse and terminates at the last room, no branching.
 */
function LoopRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 800 520"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      fill="none"
    >
      <path
        d="M120 260 Q120 120 260 96 Q400 76 400 96 Q560 60 660 130 Q740 190 660 260 Q560 330 400 420 Q300 470 250 420"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="120" cy="260" r="4.5" fill="var(--color-gold)" />
    </svg>
  );
}

/**
 * "vignette-loop" — copy-left with the five section-owned room vignettes
 * scattered on one looping gold route (dentists ref). DOM keeps the exact
 * manifest pillar order; grid areas place the scatter without reordering.
 * Mobile collapses to a single vertical rail on a left gold rule.
 */
export function CoordinationMapLoop({
  content,
}: {
  content: CoordinationMapContent;
}): React.JSX.Element {
  return (
    <div className="grid gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-10">
      <div className="flex flex-col justify-center">
        <MapIntro content={content} centered={false} />
      </div>
      <div className="relative">
        <LoopRoute />
        <ul className="aud-loop-grid relative flex flex-col gap-8 border-l border-gold/60 pl-6 lg:border-l-0 lg:pl-0">
          {content.pillars.map((pillar, index) => (
            <li
              key={pillar.label}
              className={`z-10 flex w-full max-w-[230px] flex-col gap-3 aud-loop-${LOOP_AREAS[index] ?? "tax"}`}
            >
              <figure className="aud-map-vignette flex h-[110px] items-center justify-center p-2">
                {pillar.image ? (
                  <img
                    src={pillar.image.src}
                    alt=""
                    aria-hidden="true"
                    width={230}
                    height={140}
                    className="h-full w-full object-contain"
                  />
                ) : null}
              </figure>
              <span className="text-center font-body text-body-s font-medium leading-snug text-ink">
                {pillar.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
