/**
 * 01-utility-title. Restrained white opener: display title, the powered-by
 * line, and a short gold rule closing the group. No photography — pure
 * utility typography per the manifest.
 */
export function UtilityTitle(): React.JSX.Element {
  return (
    <section
      id="utility-title"
      aria-labelledby="utility-title-heading"
      className="pvd-seam-out relative bg-white"
    >
      <div className="va-shell pt-[calc(var(--header-h)+5rem)] pb-16 lg:pb-20">
        <h1
          id="utility-title-heading"
          className="max-w-[16ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-ink"
        >
          Privacy &amp; Website Disclosures.
        </h1>
        <p className="mt-6 font-body text-body-m leading-[1.6] text-charcoal">
          Elite Physicians Wealth Planning is powered by Fiscal Vision
          Financial.
        </p>
        <div aria-hidden="true" className="mt-10 h-px w-40 bg-gold" />
      </div>
    </section>
  );
}
