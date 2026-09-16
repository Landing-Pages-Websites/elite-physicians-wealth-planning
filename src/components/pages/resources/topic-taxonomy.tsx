/** Manifest copy for 02-topic-taxonomy — content contract, do not edit. */
const TAXONOMY = {
  headline: "Browse by decision type.",
  railLabel: "Topic taxonomy",
  stops: [
    "Featured tax and retirement guide",
    "Latest available insights",
    "Educational updates",
    "Strategy-call path",
  ],
} as const;

/**
 * 02-topic-taxonomy. True mist strip: heading upper-left, the "Topic
 * taxonomy" rail running the width with four diamond stops, and the tilted
 * document accent cropped at the right edge. The rail is a scan path, not a
 * control — the linked destinations follow in the featured spread and ledger.
 */
export function TopicTaxonomy(): React.JSX.Element {
  return (
    <section
      id="topic-taxonomy"
      aria-labelledby="topic-taxonomy-heading"
      className="res-taxonomy relative overflow-hidden"
    >
      <img
        src="/images/design/resources/elements/02-topic-taxonomy-photo.jpg"
        alt=""
        aria-hidden="true"
        width={394}
        height={248}
        className="res-taxonomy-corner hidden h-auto lg:block"
      />
      <div className="va-shell relative py-14 lg:py-16">
        <h2
          id="topic-taxonomy-heading"
          className="res-reveal max-w-[26ch] font-display text-display-m leading-[1.1] font-medium tracking-[-0.01em] text-ink"
        >
          {TAXONOMY.headline}
        </h2>
        <p className="mt-8 font-body text-[11px] font-semibold tracking-[0.24em] text-gold-text uppercase">
          {TAXONOMY.railLabel}
        </p>

        {/* Desktop rail: one continuous gold line through four stops. */}
        <ul className="relative mt-5 hidden border-t border-gold/70 pt-5 md:grid md:grid-cols-4 md:gap-6">
          {TAXONOMY.stops.map((stop) => (
            <li key={stop} className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-[26px] left-0 block h-2 w-2 rotate-45 border border-gold bg-ivory"
              />
              <p className="max-w-[24ch] font-body text-[12px] font-semibold tracking-[0.14em] text-ink uppercase">
                {stop}
              </p>
            </li>
          ))}
        </ul>

        {/* Mobile rail: the same stops on one vertical line. */}
        <ul className="mt-5 space-y-5 border-l border-gold/70 pl-5 md:hidden">
          {TAXONOMY.stops.map((stop) => (
            <li key={stop} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[25px] block h-2 w-2 rotate-45 border border-gold bg-ivory"
              />
              <p className="font-body text-[12px] font-semibold tracking-[0.14em] text-ink uppercase">
                {stop}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
