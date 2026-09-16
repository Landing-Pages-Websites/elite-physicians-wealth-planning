import type { CoordinationMapContent } from "./content-types";
import { EdgePlateInline } from "./coordination-edge-plates";
import { MapIntro } from "./coordination-map-intro";

/**
 * "edge-rail" — the five pillar labels ticked along one horizontal gold rail
 * between the two edge-touching office plates (CRNAs ref). DOM keeps the
 * exact manifest pillar order; mobile collapses the rail to a vertical
 * gold-ruled list and shows the right room fragment inline.
 */
export function CoordinationMapRail({
  content,
}: {
  content: CoordinationMapContent;
}): React.JSX.Element {
  return (
    <>
      <div className="relative z-10 lg:px-[12%]">
        <MapIntro content={content} centered={false} />
        <div className="relative mt-16 lg:mt-24">
          <div
            aria-hidden="true"
            className="absolute top-[5px] right-0 left-0 hidden h-px bg-gold/70 lg:block"
          />
          <ul className="relative flex flex-col gap-7 border-l border-gold/60 pl-6 lg:flex-row lg:justify-between lg:gap-6 lg:border-l-0 lg:pl-0">
            {content.pillars.map((pillar) => (
              <li
                key={pillar.label}
                className="flex items-center gap-4 lg:max-w-[9.5rem] lg:flex-col lg:items-start lg:gap-4"
              >
                <span
                  aria-hidden="true"
                  className="h-[11px] w-[11px] shrink-0 -translate-x-[5px] rotate-45 border border-gold bg-white lg:translate-x-0"
                />
                <span className="font-body text-body-s font-medium leading-snug text-ink">
                  {pillar.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {content.edges ? <EdgePlateInline edges={content.edges} /> : null}
      </div>
    </>
  );
}
