import { FIVE_DECISIONS } from "@/lib/content";

const PULL_LINE = "One life. Five disciplines. Aligned by design.";

export default function FiveDecisions(): React.JSX.Element {
  return (
    <section
      id="five-decisions"
      aria-labelledby="five-decisions-heading"
      className="relative overflow-hidden bg-white"
    >
      {/* max-w-[92rem] px-6 is the direction's shell — 04 and 06 both use it, and
          max-w-7xl md:px-12 stepped this section's left edge 104px inward. */}
      <div className="relative mx-auto max-w-[92rem] px-6 py-20 lg:py-24">
        <p className="inline-block bg-ink px-3 py-1.5 text-body-s font-bold uppercase tracking-[0.2em] text-white">
          {FIVE_DECISIONS.orientation}
        </p>
        <h2
          id="five-decisions-heading"
          className="mt-6 max-w-[26ch] text-display-m font-bold leading-[1.1] tracking-[-0.02em] text-ink"
        >
          {FIVE_DECISIONS.headline}
        </h2>
        <p className="mt-6 font-display text-xl italic text-ink/85">{PULL_LINE}</p>

        {/* Five co-equal disciplines, five equal rows on one scale. The previous
            five-across flex row stepped the panel tops down 96/144/192/240/288
            against locked bottoms — a descending bar silhouette asserting rank
            and decline under a headline that claims one shared life — and gave
            each panel a ~11 character measure. */}
        <ol className="mt-14 border-t border-ink/12">
          {FIVE_DECISIONS.disciplines.map((discipline) => (
            <li
              key={discipline.name}
              className="relative grid gap-2 border-b border-ink/12 py-6 pl-8 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-12 lg:py-7"
            >
              {/* Abutting rows make one continuous rail, and each row carries a
                  single full-strength gold node on its heading — the calibration
                  idea the floating 25-tick ruler was gesturing at, now attached
                  to real content and present at every viewport. */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-px bg-ink/25"
              />
              <span
                aria-hidden="true"
                className="absolute top-9 left-[-3px] h-[7px] w-[7px] rounded-full bg-gold"
              />
              <h3 className="text-display-s font-bold leading-[1.15] text-ink">
                {discipline.name}
              </h3>
              <p className="max-w-[62ch] text-body-m leading-[1.6] text-pretty text-charcoal">
                {discipline.summary}
              </p>
            </li>
          ))}
        </ol>

        {/* Small print, unboxed, on the shell's left edge. It was the only
            bordered element in the section, which framed the least important
            text most heavily. */}
        <p className="mt-10 max-w-[62ch] text-body-s leading-[1.6] text-charcoal/85">
          {FIVE_DECISIONS.boundaryNote}
        </p>
      </div>
    </section>
  );
}
