import { FIVE_DECISIONS } from "@/lib/content";

/**
 * The disciplines ledger, built to the approved frame.
 *
 * The frame is a banded table: alternating warm and cool rows, the discipline
 * set in display serif on the left, its sentence on the right, and one gold
 * rule down the column gutter carrying a node on every row. Two gold elbow
 * brackets frame it — one leaving the headline and running off the top edge,
 * one wrapping the disclaimer at the foot.
 *
 * The build had replaced all of it with hairlines and a sticky heading. The
 * reviewer's note was "these disconnected lines look sloppy" — they were
 * disconnected because the brackets they belong to had been removed.
 *
 * Geometry measured from public/design/a/refs/05-five-decisions.png at its
 * native 1536x864: the table runs x 122-861, i.e. from the shell's left edge to
 * 56.05% of the frame, and the gutter rule sits at x 447 — 44% across the table
 * itself, which is how it is expressed below so it holds at any width.
 */
function DisciplineRow({
  discipline,
  index,
}: {
  discipline: (typeof FIVE_DECISIONS.disciplines)[number];
  index: number;
}): React.JSX.Element {
  return (
    <li
      className={`relative grid grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] items-center gap-x-8 px-6 py-6 lg:px-8 ${
        index % 2 === 0 ? "bg-ledger-warm" : "bg-ledger-cool"
      }`}
    >
      <h3 className="font-display text-[clamp(1.25rem,1.75vw,1.75rem)] leading-[1.15] font-medium text-ink">
        {discipline.name}
      </h3>
      <p className="max-w-[34ch] font-body text-body-s leading-[1.5] text-charcoal">
        {discipline.summary}
      </p>
      {/* The node the gutter rule carries on every row. */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-[46.5%] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold lg:block"
      />
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
      <div className="va-shell relative z-10 pt-14 pb-16 lg:pt-16 lg:pb-20">
        <p className="font-body text-[11px] font-semibold tracking-[0.22em] text-gold-text uppercase">
          Orientation: {FIVE_DECISIONS.orientation}
        </p>
        <div className="relative">
          <h2
            id="five-decisions-heading"
            className="va-reveal mt-5 max-w-[26ch] text-display-m font-display leading-[1.12] font-medium tracking-[-0.01em] text-ink"
          >
            {FIVE_DECISIONS.headline}
          </h2>
          {/* Out of the headline's first line, up, and off the right edge. */}
          <span
            aria-hidden="true"
            className="absolute top-[1.1rem] right-[-3.5rem] left-[46%] hidden h-[3.4rem] rounded-tl-[20px] border-t-[1.5px] border-l-[1.5px] border-gold lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute top-[calc(1.1rem+3.4rem)] left-[46%] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold lg:block"
          />
        </div>

        <div className="relative mt-8 lg:w-[54%] lg:max-w-none">
          {/* One rule down the column gutter, the full height of the table. */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-[46.5%] z-10 hidden w-px bg-gold/80 lg:block"
          />
          <ol>
            {FIVE_DECISIONS.disciplines.map((discipline, index) => (
              <DisciplineRow key={discipline.name} discipline={discipline} index={index} />
            ))}
          </ol>
        </div>

        {/* The foot bracket wraps the disclaimer: in from the table's right
            edge, round the corner, and down the left margin. */}
        <div className="relative mt-0 pt-8 lg:pl-6">
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 hidden h-[calc(100%+2.5rem)] w-[62%] rounded-tl-[20px] border-t-[1.5px] border-l-[1.5px] border-gold lg:block"
          />
          <p className="relative max-w-[62ch] font-body text-body-s leading-[1.6] text-charcoal">
            {FIVE_DECISIONS.boundaryNote}
          </p>
        </div>
      </div>
    </section>
  );
}
