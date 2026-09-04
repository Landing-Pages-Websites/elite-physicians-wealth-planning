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
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element {
  return (
    <p
      className={`inline-flex items-center gap-3 font-body text-[11px] font-bold tracking-[0.22em] text-ink uppercase ${className}`}
    >
      <span aria-hidden="true" className="inline-block h-px w-8 shrink-0 bg-gold" />
      {children}
    </p>
  );
}
