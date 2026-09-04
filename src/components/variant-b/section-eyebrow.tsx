/**
 * One eyebrow for the direction.
 *
 * There were five treatments for the same element: a navy chip with white caps
 * (five-decisions, separate-rooms), a 20px italic serif that was not an eyebrow
 * at all (blueprint-rounds), a gold-dash lockup at 0.06em (the hero), 0.24em
 * caps at body-s (planner), and 0.22em caps at 12px (pathways). Nobody reading
 * the page can name that, and everybody feels it — it is the difference between
 * a site that was designed and one that was assembled section by section.
 *
 * The hero's gold dash sets the direction's tone, so it wins and carries
 * everywhere.
 */
export default function SectionEyebrow({
  children,
  mark = "dash",
  className = "",
}: {
  children: React.ReactNode;
  /** Some frames open on a compass rosette rather than the gold dash. */
  mark?: "dash" | "rosette";
  className?: string;
}): React.JSX.Element {
  return (
    <p
      className={`inline-flex items-center gap-3 font-body text-[11px] font-bold tracking-[0.22em] text-ink uppercase ${className}`}
    >
      {mark === "rosette" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-6 w-6 shrink-0 text-ink/70"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="16" cy="16" r="9" />
          <circle cx="16" cy="16" r="3.2" />
          <path d="M16 1 L18.4 13.6 L31 16 L18.4 18.4 L16 31 L13.6 18.4 L1 16 L13.6 13.6 Z" />
        </svg>
      ) : (
        <span aria-hidden="true" className="inline-block h-px w-8 shrink-0 bg-gold" />
      )}
      {children}
    </p>
  );
}
