import { MailIcon, PhoneIcon } from "@/components/site/icons";
import { BRAND, telHref } from "@/lib/content";

/**
 * 03-calendar-embed-state. The manifest's publication gate resolves here:
 * the client-supplied Google Calendar appointment scheduler is live, so the
 * real iframe replaces the reserved held-state panel exactly as the
 * manifest's treatment prescribes. Only Google-served real availability is
 * shown — no slot UI is rendered by this site.
 */
const SCHEDULER_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1XzgTC3NXfS_7N29pKDedRFdvkkgbtV7Iefh3-YdDxs32o0YQF9tY7Njc4yluUru3kYgM9OhCl?gv=true";

const COPY = {
  eyebrow: "Booking Calendar",
  headline: "Choose a verified appointment time.",
  body: "The booking calendar will display only real appointment times supplied through Elite Physicians Wealth Planning’s approved scheduler.",
} as const;

const STILL = {
  src: "/images/design/schedule/media/scheduler-state-notebook.jpg",
  alt: "Closed navy appointment book and pen resting on a mist-blue desk",
} as const;

function FallbackCard(): React.JSX.Element {
  const link =
    "-my-1 inline-flex min-h-11 items-center gap-2 font-body text-body-m font-medium text-ink underline underline-offset-4 transition-colors duration-150 hover:text-gold-text";
  return (
    <div className="rounded-sm border border-ink/15 bg-white p-6">
      <p className="font-body text-body-s leading-[1.6] text-charcoal">
        If the booking calendar does not load, call or email instead:
      </p>
      <ul className="mt-4 grid gap-1">
        <li>
          <a href={telHref()} className={link}>
            <PhoneIcon className="h-4 w-4 text-gold-text" />
            {BRAND.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${BRAND.email}`} className={link}>
            <MailIcon className="h-4 w-4 text-gold-text" />
            {BRAND.email}
          </a>
        </li>
      </ul>
    </div>
  );
}

export function CalendarEmbedState(): React.JSX.Element {
  return (
    <section
      id="calendar-embed-state"
      aria-labelledby="calendar-embed-heading"
      className="sch-embed sch-seam-in sch-seam-out relative"
    >
      <div className="va-shell grid gap-10 py-20 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:py-24">
        <header>
          <p className="font-body text-[12px] font-semibold tracking-[0.28em] text-gold-text uppercase">
            {COPY.eyebrow}
          </p>
          <h2
            id="calendar-embed-heading"
            className="mt-4 font-display text-display-m leading-[1.08] font-medium tracking-[-0.02em] text-ink"
          >
            {COPY.headline}
          </h2>
          <p className="mt-5 font-body text-body-m leading-[1.65] text-charcoal">
            {COPY.body}
          </p>
        </header>

        {/* Fallback route first in flow: at mobile widths the actionable
            phone/email card renders above the embed so a visitor always sees
            a bookable path before the third-party frame. */}
        <div className="grid content-start gap-8 lg:col-start-1 lg:row-start-2">
          <FallbackCard />
          <figure className="sch-embed-still hidden rounded-sm border border-ink/10 lg:block">
            <img src={STILL.src} alt={STILL.alt} width={510} height={590} />
          </figure>
        </div>

        {/* Card sized to the scheduler content on desktop — no dead white
            field beside the calendar. */}
        <div className="sch-embed-frame rounded-sm lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-[34rem]">
          <div className="sch-embed-slot overflow-hidden rounded-sm">
            <iframe
              src={SCHEDULER_URL}
              title="Google Calendar appointment scheduler — book a strategy call with Elite Physicians Wealth Planning"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
