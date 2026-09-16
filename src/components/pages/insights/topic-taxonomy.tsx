const RAIL = {
  headline: "Browse by decision type.",
  items: [
    "Career-stage planning",
    "Physician tax strategy",
    "Practice-owner strategy",
    "Retirement and income",
    "Estate and family",
  ],
} as const;

const RAIL_PHOTO = {
  src: "/images/design/insights/elements/02-topic-taxonomy-photo.jpg",
  alt: "Stethoscope resting on an open medical chart over a navy folder",
} as const;

/**
 * 02-topic-taxonomy — the mist index rail: five static decision-type labels
 * on one gold line (the manifest declares this strip static content, not
 * controls), with a small clinical crop on the right edge.
 */
export function TopicTaxonomy(): React.JSX.Element {
  return (
    <section
      id="topic-taxonomy"
      aria-labelledby="insights-rail-heading"
      className="ins-rail ins-seam-top ins-seam-bottom relative overflow-hidden"
    >
      <div className="ins-frame ins-frame--taxonomy absolute top-0 right-0 hidden w-56 rounded-tr-none rounded-br-none shadow-[0_18px_40px_-24px_rgba(11,31,58,0.5)] xl:block">
        <img src={RAIL_PHOTO.src} alt="" aria-hidden="true" />
      </div>

      <div className="va-shell relative z-10 py-14 lg:py-18">
        <h2
          id="insights-rail-heading"
          className="font-display text-display-m leading-[1.15] font-medium tracking-[-0.01em] text-ink"
        >
          {RAIL.headline}
        </h2>
        <ul className="mt-8 flex flex-col divide-y divide-ink/10 lg:mt-10 lg:flex-row lg:items-center lg:divide-y-0">
          {RAIL.items.map((item, index) => (
            <li key={item} className="flex items-center lg:flex-1 lg:gap-0">
              <span className="flex min-h-11 items-center gap-3 py-2 font-body text-[0.95rem] font-medium text-ink lg:min-h-0">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                {item}
              </span>
              {index < RAIL.items.length - 1 ? (
                <span aria-hidden="true" className="mx-5 hidden h-px flex-1 bg-gold/70 lg:block" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
