import { LINKS, NEXT_DECISION } from "@/lib/content";
import { ArrowRightIcon, CalendarClockIcon, FileLockIcon } from "./icons";

/**
 * The closing choice.
 *
 * This band was 1,114px tall and about a third full: a centered headline, a
 * decorative SVG fork, two centered columns, a gold stub that dangled out of
 * the primary button and terminated in nothing, and a contact block repeating
 * the email, phone and hours that the form section prints 600px below and the
 * footer prints again 600px after that — three copies on one page.
 *
 * It is now an asymmetric spread: the headline holds the left, the two options
 * are real bordered cards on the right, and their ranking is carried by weight
 * (a lit card with a gold fill against a quiet card with a link) rather than by
 * an ornament drawn between them. Nothing was cut except the duplication.
 */
function PathCard({
  icon,
  title,
  summary,
  note,
  action,
  primary,
}: {
  icon: React.ReactNode;
  title: string;
  summary: string;
  note: string;
  action: React.ReactNode;
  primary: boolean;
}): React.JSX.Element {
  return (
    <article
      className={`flex flex-col rounded-sm border p-7 sm:p-8 ${
        primary ? "border-gold/40 bg-white/6" : "border-white/12 bg-white/2"
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/50 text-gold">
          {icon}
        </span>
        <h3 className="font-display text-[clamp(1.4rem,1.8vw,1.75rem)] leading-[1.15] font-medium tracking-[-0.01em] text-white">
          {title}
        </h3>
      </div>
      <p className="mt-6 font-body text-body-m leading-[1.6] text-mist/75 text-pretty">
        {summary}
      </p>
      <p
        className={`mt-4 font-body text-[13px] leading-normal ${
          primary ? "text-gold/90" : "text-mist/60"
        }`}
      >
        {note}
      </p>
      <div className="mt-8 pt-2">{action}</div>
    </article>
  );
}

export function NextDecision(): React.JSX.Element {
  const { strategyCall, guide, headline } = NEXT_DECISION;
  return (
    <section
      id="next-decision"
      aria-labelledby="next-decision-heading"
      className="va-decision relative overflow-hidden text-ivory"
    >
      <div className="va-shell relative z-10 py-16 lg:py-20">
        <h2
          id="next-decision-heading"
          className="va-reveal max-w-[17ch] text-display-l font-display leading-[1.06] font-medium tracking-[-0.02em] text-balance text-white"
        >
          {headline}
        </h2>
        <span aria-hidden="true" className="mt-8 block h-px w-16 bg-gold" />

        {/* Side by side, not stacked beside the headline: at 0.72fr/1fr the
            headline column ran 300px of type against 900px of cards and the
            band carried a 600px void down its left. Two equal columns give the
            cards a width their 46ch of copy actually fills. */}
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          <PathCard
            primary
            icon={<CalendarClockIcon className="h-5 w-5" />}
            title={strategyCall.label}
            summary={strategyCall.summary}
            note={strategyCall.expectation}
            action={
              <a
                href={LINKS.scheduleOnsite}
                className="va-btn va-btn-gold w-full justify-center sm:w-auto"
              >
                {strategyCall.label}
              </a>
            }
          />
          {/* The approved frame reserved a dashed guide-cover slot here and
              filled it with `guide.availability` — a build instruction set at
              9px inside wireframe chrome. It stays in content.ts as a build
              constraint and is deliberately not rendered; `requestNote` already
              tells the reader the truth, which is what the hard rule requires. */}
          <PathCard
            primary={false}
            icon={<FileLockIcon className="h-5 w-5" />}
            title={guide.label}
            summary={guide.summary}
            note={guide.requestNote}
            action={
              <a href={LINKS.guideRequest} className="va-link min-h-11 text-mist">
                {guide.cta}
                <ArrowRightIcon className="h-4 w-4 text-gold" />
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}
