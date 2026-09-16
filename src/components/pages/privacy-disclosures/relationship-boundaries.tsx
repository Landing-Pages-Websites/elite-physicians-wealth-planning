/**
 * 03-relationship-boundaries. White band: three full-width boundary rows,
 * each opened by a short gold dash, the middle row on a mist surface —
 * the ref's rule-separated ledger, verbatim.
 */
const ITEMS = [
  "Visiting the website, downloading a resource, submitting a form, or attending a webinar does not create an advisory relationship.",
  "Elite does not prepare tax returns or draft legal documents.",
  "No content should be interpreted as a guarantee of tax savings, investment results, retirement outcomes, or financial performance.",
] as const;

export function RelationshipBoundaries(): React.JSX.Element {
  return (
    <section
      id="relationship-boundaries"
      aria-labelledby="relationship-boundaries-heading"
      className="pvd-seam-in pvd-seam-out relative bg-white"
    >
      <div className="va-shell py-20 lg:py-24">
        <h2
          id="relationship-boundaries-heading"
          className="font-display text-display-m leading-[1.08] font-medium tracking-[-0.02em] text-ink"
        >
          Relationship and professional boundaries.
        </h2>
        <ul className="mt-10 border-t border-ink/10">
          {ITEMS.map((item, index) => (
            <li
              key={item}
              className={`flex items-start gap-6 border-b border-ink/10 px-2 py-6 sm:gap-10 sm:px-6 ${
                index === 1 ? "bg-mist/50" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="mt-3 h-px w-8 shrink-0 bg-gold sm:w-12"
              />
              <p className="max-w-[72ch] font-body text-body-m leading-[1.65] text-charcoal">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
