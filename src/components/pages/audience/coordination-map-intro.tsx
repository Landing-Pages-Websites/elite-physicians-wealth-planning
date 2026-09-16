import type { CoordinationMapContent } from "./content-types";

/** Shared headline/body group for every coordination-map variant. */
export function MapIntro({
  content,
  centered,
}: {
  content: CoordinationMapContent;
  centered: boolean;
}): React.JSX.Element {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-md"}>
      <h2
        id="coordination-map-heading"
        className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.015em] text-balance text-ink"
      >
        {content.headline}
      </h2>
      <p className="mt-5 font-body text-body-m leading-[1.6] text-charcoal/85">
        {content.body}
      </p>
    </div>
  );
}
