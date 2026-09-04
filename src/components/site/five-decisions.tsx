import { FIVE_DECISIONS } from "@/lib/content";

/**
 * An editorial list, not a table.
 *
 * This section was a five-row ledger: a tinted block, table borders, a gold
 * rail down the column gutter with a hollow node on every row, and each
 * discipline's name sitting ~350px from its own sentence. Three separator
 * systems doing one job, and a name far enough from its description that the
 * eye read two unrelated lists. It looked like exported data.
 *
 * The copy is five facets of one life — not a sequence, not a dataset — so it
 * is set the way a magazine sets a list: the name large enough to carry the
 * section, its sentence beside it on a shared baseline, and a hairline between
 * entries. Hierarchy comes from the type scale instead of from chrome.
 */
function Discipline({
  discipline,
}: {
  discipline: (typeof FIVE_DECISIONS.disciplines)[number];
}): React.JSX.Element {
  return (
    <li className="grid gap-2.5 border-t border-ink/12 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:items-baseline lg:gap-x-10 lg:py-7">
      <h3 className="font-display text-[clamp(1.6rem,2.3vw,2.15rem)] leading-[1.1] font-medium tracking-[-0.015em] text-ink">
        {discipline.name}
      </h3>
      <p className="max-w-[46ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
        {discipline.summary}
      </p>
    </li>
  );
}

export function FiveDecisions(): React.JSX.Element {
  return (
    <section
      id="five-decisions"
      aria-labelledby="five-decisions-heading"
      className="relative overflow-hidden bg-white"
    >
      <div className="va-shell relative z-10 pt-16 pb-14 lg:pt-20 lg:pb-16">
        <div className="lg:grid lg:grid-cols-[minmax(0,30%)_minmax(0,1fr)] lg:items-start lg:gap-x-20">
          {/* The heading holds while the list scrolls past it, which is what
              makes the five entries read as facets of one thing rather than as
              five rows. It also removes the void that opened under a
              top-aligned heading beside a much taller list. */}
          <div className="lg:sticky lg:top-[calc(var(--header-h)+5rem)]">
            <p className="font-body text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">
              {FIVE_DECISIONS.orientation}
            </p>
            <h2
              id="five-decisions-heading"
              className="va-reveal mt-5 max-w-[18ch] text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {FIVE_DECISIONS.headline}
            </h2>
            {/* The only gold in the section, and it marks a real edge: where the
                heading ends and the list begins. */}
            <span aria-hidden="true" className="mt-7 block h-px w-14 bg-gold" />
            <p className="mt-7 max-w-[40ch] font-body text-body-s leading-[1.6] text-charcoal/90">
              {FIVE_DECISIONS.boundaryNote}
            </p>
          </div>

          <ol className="mt-12 lg:mt-0">
            {FIVE_DECISIONS.disciplines.map((discipline) => (
              <Discipline key={discipline.name} discipline={discipline} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
