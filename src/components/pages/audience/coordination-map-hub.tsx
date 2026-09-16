import { NodesIcon } from "@/components/site/icons";
import type { CoordinationMapContent } from "./content-types";
import { EdgePlateInline } from "./coordination-edge-plates";
import { MapIntro } from "./coordination-map-intro";

const HUB_AREAS = ["tax", "wealth", "retirement", "practice", "legacy"];

/**
 * Exactly five equal-length gold spokes, anchored to the hub itself (fixed
 * pixel geometry, never stretched with the grid), one per pillar direction:
 * up to tax, level to wealth/retirement, and down-diagonal to
 * practice/legacy. Each terminal dot is a true endpoint of the motif.
 */
function HubSpokes(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 176 176"
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 hidden h-44 w-44 -translate-x-1/2 -translate-y-1/2 lg:block"
      fill="none"
    >
      <g stroke="var(--color-gold)" strokeWidth="1.5" opacity="0.75">
        <path d="M88 32 V8" />
        <path d="M32 88 H8" />
        <path d="M144 88 H168" />
        <path d="M39.5 116 L18.7 128" />
        <path d="M136.5 116 L157.3 128" />
      </g>
      <g fill="var(--color-gold)">
        <circle cx="88" cy="8" r="3.5" />
        <circle cx="8" cy="88" r="3.5" />
        <circle cx="168" cy="88" r="3.5" />
        <circle cx="18.7" cy="128" r="3.5" />
        <circle cx="157.3" cy="128" r="3.5" />
      </g>
    </svg>
  );
}

/**
 * "hub-spokes" — the five pillar labels radiating from one central gold hub
 * between two edge-touching executive floor plans (execs ref). DOM keeps the
 * exact manifest pillar order via named grid areas; mobile collapses to a
 * vertical rail with the hub ring first.
 */
export function CoordinationMapHub({
  content,
}: {
  content: CoordinationMapContent;
}): React.JSX.Element {
  return (
    <>
      <div className="relative z-10 lg:px-[12%]">
        <MapIntro content={content} centered={false} />
        <div className="relative mt-14 lg:mt-6">
          <div className="aud-hub-grid relative flex flex-col gap-8 border-l border-gold/60 pl-6 lg:border-l-0 lg:pl-0">
            <div className="aud-map-hub aud-hub-center relative z-10 flex h-24 w-24 items-center justify-center rounded-full">
              <HubSpokes />
              <NodesIcon aria-hidden="true" className="h-8 w-8 text-gold" />
            </div>
            {content.pillars.map((pillar, index) => (
              <span
                key={pillar.label}
                className={`z-10 max-w-[10rem] font-body text-body-s font-medium leading-snug text-ink aud-hub-${HUB_AREAS[index] ?? "tax"}`}
              >
                {pillar.label}
              </span>
            ))}
          </div>
        </div>
        {content.edges ? <EdgePlateInline edges={content.edges} /> : null}
      </div>
    </>
  );
}
