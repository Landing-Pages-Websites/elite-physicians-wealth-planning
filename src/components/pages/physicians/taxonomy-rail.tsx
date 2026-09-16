const RAIL_HEADLINE = "Browse by decision type.";

/**
 * Career-stage decision types. The manifest declares this rail as static
 * orientation content — the stages do not map one-to-one onto routes, so the
 * routing happens in the featured path and topic ledger below.
 */
const DECISION_TYPES = [
  "Residents and fellows foundation",
  "Established physician coordination",
  "Practice-owner decisions",
  "Approaching-retirement readiness",
  "Specialist compensation questions",
] as const;

const RAIL_PHOTO = {
  src: "/images/design/physicians/elements/02-taxonomy-rail-photo.jpg",
  alt: "Reading glasses resting on stacked planning notebooks",
} as const;

export function TaxonomyRail(): React.JSX.Element {
  return (
    <section
      id="taxonomy-rail"
      aria-labelledby="phy-rail-heading"
      className="phy-strip phy-seam-top phy-seam-bottom relative overflow-hidden"
    >
      {/* Subordinate photographic vignette at the strip's upper-right corner. */}
      <img
        src={RAIL_PHOTO.src}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 hidden h-28 w-72 rounded-bl-[6px] object-cover xl:block"
      />

      <div className="va-shell relative z-10 py-16 lg:py-24">
        <h2
          id="phy-rail-heading"
          className="font-display text-display-m leading-[1.15] font-medium tracking-[-0.01em] text-ink"
        >
          {RAIL_HEADLINE}
        </h2>
        {/* Desktop: five labels hang from one gold rail; mobile: ruled rows. */}
        <ul className="mt-9 flex max-w-xl flex-col divide-y divide-ink/10 lg:mt-12 lg:max-w-none lg:flex-row lg:justify-between lg:gap-8 lg:divide-y-0 lg:border-t lg:border-gold/70">
          {DECISION_TYPES.map((label) => (
            <li
              key={label}
              className="relative flex items-center gap-3 py-3 lg:max-w-44 lg:pt-6 lg:pb-0"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold lg:absolute lg:-top-[3.5px] lg:left-0"
              />
              <span className="font-body text-[0.95rem] leading-[1.5] font-medium text-ink">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
