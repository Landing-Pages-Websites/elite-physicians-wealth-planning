import { CalendarIcon } from "@/components/site/icons";

/** Manifest copy for 05-ongoing-review — content contract, do not edit. */
const REVIEW = {
  headline: "Annual review keeps the plan active.",
  body: "Each year, the plan is reviewed against changes in career, family, income, tax rules, markets, and retirement projections.",
} as const;

/**
 * 05-ongoing-review. Quiet ivory strip: gold entry rule and ringed calendar
 * mark beside the heading, framed ledger photograph right, and a navy base
 * band that hands the line into the closing section.
 */
export function OngoingReview(): React.JSX.Element {
  return (
    <section
      id="ongoing-review"
      aria-labelledby="ongoing-review-heading"
      className="prc-review relative overflow-hidden"
    >
      <div className="va-shell relative grid items-center gap-10 py-14 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,17rem)] lg:gap-14 lg:py-16">
        <div className="flex items-center gap-6">
          {/* The strip's gold entry rule, continuing the line from the
              coordination band above. */}
          <span aria-hidden="true" className="hidden h-24 w-px bg-gold/70 lg:block" />
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold text-gold-text">
            <CalendarIcon className="h-6 w-6" />
          </span>
        </div>
        <div>
          <h2
            id="ongoing-review-heading"
            className="prc-reveal max-w-[24ch] font-display text-display-m leading-[1.12] font-medium tracking-[-0.01em] text-ink"
          >
            {REVIEW.headline}
          </h2>
          <p className="mt-4 max-w-[58ch] font-body text-body-m leading-[1.62] text-charcoal">
            {REVIEW.body}
          </p>
        </div>
        <img
          src="/images/design/our-process/elements/05-ongoing-review-photo.jpg"
          alt=""
          aria-hidden="true"
          width={309}
          height={318}
          className="prc-review-photo hidden h-auto w-full rounded-[4px] lg:block"
        />
      </div>
      {/* Navy base band: the seam into the closing office. */}
      <div className="relative h-12 bg-ink">
        <span
          aria-hidden="true"
          className="absolute -top-6 left-1/2 h-18 w-px -translate-x-1/2 bg-gold/80"
        />
      </div>
    </section>
  );
}
