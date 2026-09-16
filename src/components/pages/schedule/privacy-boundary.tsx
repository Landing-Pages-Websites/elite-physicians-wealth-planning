/**
 * 05-privacy-boundary. Quiet ivory strip: a ringed calendar-lock cue opens
 * the reading line; the page's gold line enters at the contracted 59% seam,
 * drops its final stub, and ends on a terminal dot above the copy — it does
 * not continue into the footer.
 */
const COPY = {
  headline: "Keep sensitive information out of the scheduler.",
  body: "Please do not submit Social Security numbers, account numbers, health details, tax returns, legal documents, or other sensitive records through the booking flow.",
} as const;

/** Calendar with a lock, in the site's 24-grid stroke family. */
function CalendarLockIcon(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-10 w-10"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 9h18" />
      <rect x="9.5" y="14" width="5" height="4" rx="0.8" />
      <path d="M10.5 14v-1.2a1.5 1.5 0 0 1 3 0V14" />
    </svg>
  );
}

export function PrivacyBoundary(): React.JSX.Element {
  return (
    <section
      id="privacy-boundary"
      aria-labelledby="privacy-boundary-heading"
      className="sch-privacy sch-seam-in relative overflow-hidden"
    >
      <span aria-hidden="true" className="sch-privacy-dot" />

      <div className="va-shell flex flex-col items-start gap-7 py-16 sm:flex-row sm:items-center sm:gap-10 lg:py-20">
        <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full border border-gold/70 text-ink">
          <CalendarLockIcon />
        </span>
        <div>
          <h2
            id="privacy-boundary-heading"
            className="font-display text-display-s leading-[1.2] font-medium tracking-[-0.01em] text-ink sm:text-[1.75rem]"
          >
            {COPY.headline}
          </h2>
          <p className="mt-3 max-w-[64ch] font-body text-body-s leading-[1.65] text-charcoal">
            {COPY.body}
          </p>
        </div>
      </div>
    </section>
  );
}
