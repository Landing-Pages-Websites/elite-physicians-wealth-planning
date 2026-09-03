import { FIVE_DECISIONS } from "@/lib/content";

const PULL_LINE = "One life. Five disciplines. Aligned by design.";

/** Top edges step downward left-to-right; bottoms stay aligned via stretch. */
const DESKTOP_STEPS = ["lg:mt-0", "lg:mt-12", "lg:mt-24", "lg:mt-36", "lg:mt-48"];
const MOBILE_STEPS = ["ml-0", "ml-3", "ml-6", "ml-9", "ml-12"];

function EdgeTickRail(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 864"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-6 left-3 hidden h-[calc(100%-3rem)] w-4 text-ink/30 md:block"
      fill="none"
    >
      <line x1="12" y1="0" x2="12" y2="864" stroke="currentColor" />
      {Array.from({ length: 25 }, (_, index) => index * 36).map((y) => (
        <line key={y} x1="7" y1={y} x2="17" y2={y} stroke="currentColor" />
      ))}
      <circle cx="12" cy="432" r="3" className="fill-gold" />
    </svg>
  );
}

function DisciplinePanel({
  discipline,
  stepClasses,
}: {
  discipline: (typeof FIVE_DECISIONS.disciplines)[number];
  stepClasses: string;
}): React.JSX.Element {
  return (
    <article
      className={`relative flex-1 border border-ink/10 bg-mist/50 p-5 pl-9 pt-7 lg:ml-0 ${stepClasses}`}
    >
      <span aria-hidden="true" className="absolute left-5 top-0 h-3 w-0.5 bg-gold" />
      <span aria-hidden="true" className="absolute bottom-6 left-5 top-5 w-px bg-gold/40" />
      <h3 className="text-lg font-bold leading-snug text-ink">{discipline.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-charcoal">{discipline.summary}</p>
    </article>
  );
}

export default function FiveDecisions(): React.JSX.Element {
  return (
    <section
      id="five-decisions"
      aria-labelledby="five-decisions-heading"
      className="relative overflow-hidden bg-white"
    >
      <EdgeTickRail />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 lg:grid lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14 lg:py-24">
        <div>
          <p className="inline-block bg-ink px-3 py-1.5 text-body-s font-bold uppercase tracking-[0.2em] text-white">
            {FIVE_DECISIONS.orientation}
          </p>
          <h2
            id="five-decisions-heading"
            className="mt-6 max-w-[13ch] text-display-m tracking-[-0.02em] font-bold leading-[1.1] tracking-tight text-ink"
          >
            {FIVE_DECISIONS.headline}
          </h2>
          <p className="mt-6 font-display text-xl italic text-ink/85">{PULL_LINE}</p>
        </div>
        <div className="mt-12 flex flex-col gap-4 lg:mt-0 lg:min-h-[30rem] lg:flex-row lg:items-stretch lg:gap-3">
          {FIVE_DECISIONS.disciplines.map((discipline, index) => (
            <DisciplinePanel
              key={discipline.name}
              discipline={discipline}
              stepClasses={`${MOBILE_STEPS[index]} ${DESKTOP_STEPS[index]}`}
            />
          ))}
        </div>
        <p className="mt-12 max-w-xs border border-ink/25 bg-white p-4 text-xs leading-relaxed text-charcoal lg:mt-10">
          {FIVE_DECISIONS.boundaryNote}
        </p>
      </div>
    </section>
  );
}
