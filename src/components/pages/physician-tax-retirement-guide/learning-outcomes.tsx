const OUTCOMES = {
  headline: "What the guide is expected to cover.",
  items: [
    "Retirement-plan design and contribution decisions",
    "Physician compensation structures",
    "Withdrawal sequencing questions",
    "CPA questions before year-end",
    "Practice ownership and estate coordination",
  ],
} as const;

/**
 * 02-learning-outcomes — warm paper band: heading and the notebook anchor on
 * the left, the framed live-text outcome ledger across the right, gold route
 * continuing through both seams.
 */
export function LearningOutcomes(): React.JSX.Element {
  return (
    <section
      id="learning-outcomes"
      aria-labelledby="learning-outcomes-heading"
      className="ptg-outcomes relative overflow-hidden"
    >
      <span aria-hidden="true" className="ptg-seam top-0 h-10" />
      <div className="relative z-10 va-shell grid gap-10 py-16 lg:grid-cols-[minmax(0,34%)_minmax(0,1fr)] lg:gap-16 lg:py-24">
        <div className="flex flex-col justify-between gap-10">
          <h2
            id="learning-outcomes-heading"
            className="max-w-[16ch] text-display-m font-display leading-[1.12] font-medium tracking-[-0.02em] text-balance text-ink"
          >
            {OUTCOMES.headline}
          </h2>
          <img
            src="/images/design/physician-tax-retirement-guide/media/learning-outcomes-notebook.jpg"
            alt=""
            aria-hidden="true"
            width={376}
            height={349}
            className="hidden w-56 self-start rounded-[3px] lg:block"
          />
        </div>

        <ul className="ptg-ledger grid list-none gap-0 rounded-[3px] px-7 py-3 sm:px-10">
          {OUTCOMES.items.map((item, index) => (
            <li
              key={item}
              className={`flex items-baseline gap-5 py-5 font-body text-body-l leading-[1.5] text-charcoal sm:py-6 ${
                index > 0 ? "border-t border-ink/12" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="mt-1 block h-px w-8 shrink-0 self-center bg-gold"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <span aria-hidden="true" className="ptg-seam bottom-0 h-10" />
    </section>
  );
}
