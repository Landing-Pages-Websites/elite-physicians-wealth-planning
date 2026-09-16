import Link from "next/link";
import { ArrowRightIcon, CalendarIcon } from "@/components/site/icons";

/**
 * 05-booking-alternative. Ivory decision panel: copy and the /schedule
 * route at left, a large calendar cue at center, and the extracted desk
 * rail touching the section's top and bottom edges at right — its navy
 * foot meets the navy disclosure strip below, per the edge contract.
 *
 * The manifest wrote this body while the scheduler was still a gate
 * ("when the Google Calendar embed is supplied and active"); the embed is
 * now live on /schedule, so the copy states the resolved truth without
 * production jargon.
 */
const COPY = {
  headline: "Prefer to choose a time directly?",
  body: "Use the strategy-call page to choose a real appointment time through the Google Calendar scheduler.",
  route: "/schedule",
  link: "Open scheduling page",
} as const;

const RAIL = {
  src: "/images/design/contact/media/booking-alternative-desk-right.jpg",
  alt: "Navy folio and blank paper with a pen on a marble desk edge",
} as const;

export function BookingAlternative(): React.JSX.Element {
  return (
    <section
      id="booking-alternative"
      aria-labelledby="booking-alternative-heading"
      className="cnt-booking cnt-seam-in cnt-seam-out relative overflow-hidden"
    >
      <div className="cnt-booking-rail" aria-hidden="true">
        <img src={RAIL.src} alt="" width={256} height={584} />
      </div>

      <div className="va-shell grid items-center gap-12 py-20 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:py-24 xl:pr-[280px]">
        <div>
          <h2
            id="booking-alternative-heading"
            className="font-display text-display-m leading-[1.08] font-medium tracking-[-0.02em] text-ink"
          >
            {COPY.headline}
          </h2>
          <p className="mt-5 max-w-[46ch] font-body text-body-m leading-[1.65] text-charcoal">
            {COPY.body}
          </p>
          <p className="mt-7 flex items-center gap-3 font-body text-body-s font-medium text-charcoal/80">
            <ArrowRightIcon className="h-4 w-4 text-gold-text" />
            {COPY.route}
          </p>
          <Link
            href={COPY.route}
            className="va-link mt-4 min-h-11 text-ink hover:text-gold-text"
          >
            {COPY.link}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="hidden justify-center lg:flex">
          <span className="grid h-44 w-44 place-items-center rounded-sm border border-ink/15 bg-white/60 text-ink">
            <CalendarIcon className="h-24 w-24 [stroke-width:1]" />
          </span>
        </div>
      </div>
    </section>
  );
}
