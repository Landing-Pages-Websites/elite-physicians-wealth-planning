import { FIVE_DECISIONS } from "@/lib/content";
import SectionEyebrow from "./section-eyebrow";

const PULL_LINE = "One life. Five disciplines. Aligned by design.";

export default function FiveDecisions(): React.JSX.Element {
  return (
    <section
      id="five-decisions"
      aria-labelledby="five-decisions-heading"
      className="relative overflow-hidden bg-white"
    >
      <div className="vb-shell relative py-20 lg:py-24">
        <SectionEyebrow>{FIVE_DECISIONS.orientation}</SectionEyebrow>
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
        {/* Three separator systems were doing one job: a continuous left rail,
            a border above and below every row, and a gold node per row — with
            the borders drawn across 430px of empty space to the right of the
            longest description, which is what made the emptiness loud. The rail
            and its nodes are the direction's calibration idea and they stay; the
            row borders go, and the list stops where its content does. */}
        <ol className="mt-14 max-w-[62rem]">
          {FIVE_DECISIONS.disciplines.map((discipline) => (
            <li
              key={discipline.name}
              className="relative grid gap-2 py-6 pl-8 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-12 lg:py-7"
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
                className="absolute top-9 left-[-3px] h-1.75 w-1.75 rounded-full bg-gold"
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
