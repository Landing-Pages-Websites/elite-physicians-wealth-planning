const PRIVACY = {
  headline: "No sensitive records in the tool.",
  body: "Do not submit Social Security numbers, account numbers, health details, tax returns, or legal documents through the checkup.",
} as const;

/** The strip's lock mark, drawn in the site icon family's stroke language. */
function LockIcon({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v3" />
    </svg>
  );
}

/**
 * 05-privacy-boundary — the quiet ivory utility strip: ringed lock, thin gold
 * rule, one live message with conspicuous negative space around it.
 */
export function PrivacyBoundary(): React.JSX.Element {
  return (
    <section
      id="privacy-boundary"
      aria-labelledby="privacy-boundary-heading"
      className="chk-privacy relative overflow-hidden"
    >
      <span aria-hidden="true" className="chk-seam top-0 h-8" />
      <div className="relative z-10 va-shell flex flex-col items-start gap-7 py-16 sm:flex-row sm:items-center sm:justify-center sm:gap-10 lg:py-24">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold text-gold-text">
          <LockIcon className="h-7 w-7" />
        </span>
        <span
          aria-hidden="true"
          className="hidden h-16 w-px bg-gold/60 sm:block"
        />
        <div className="max-w-xl">
          <h2
            id="privacy-boundary-heading"
            className="text-display-s font-display leading-[1.2] font-medium tracking-[-0.01em] text-ink"
          >
            {PRIVACY.headline}
          </h2>
          <p className="mt-3 font-body text-body-m leading-[1.62] text-charcoal/85 text-pretty">
            {PRIVACY.body}
          </p>
        </div>
      </div>
      <span aria-hidden="true" className="chk-seam bottom-0 h-8" />
    </section>
  );
}
