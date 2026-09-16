import { ArrowRightIcon } from "@/components/site/icons";

/**
 * 01-schedule-hero. Navy image-as-canvas: copy owns the quiet left field,
 * the extracted scheduling still life owns the right. The photograph's own
 * gold thread runs to the section foot and becomes the page line the later
 * seams continue at the same x (59%).
 */
const HERO = {
  eyebrow: "Strategy Call",
  headline: "Schedule a private strategy call.",
  body: "A confidential introductory conversation to review planning priorities, decisions currently in front of you, and whether a coordinated planning relationship makes sense.",
  cta: "Open Booking Calendar",
} as const;

const MEDIA = {
  src: "/images/design/schedule/media/schedule-hero-desk-right.jpg",
  alt: "Navy notebook embossed “Private Scheduling” beside a fountain pen and a planning priorities card on a dark desk",
} as const;

export function ScheduleHero(): React.JSX.Element {
  return (
    <section
      id="schedule-hero"
      aria-labelledby="schedule-hero-heading"
      data-dark-band
      className="sch-hero relative overflow-hidden"
    >
      <div className="sch-hero-media hidden lg:block" aria-hidden="true">
        <img src={MEDIA.src} alt="" width={836} height={740} />
      </div>
      <div className="sch-hero-veil hidden lg:block" aria-hidden="true" />

      <div className="va-shell relative z-10 pt-[calc(var(--header-h)+4.5rem)] pb-20 lg:pb-28">
        <div className="max-w-[30rem]">
          <p className="font-body text-[12px] font-semibold tracking-[0.28em] text-gold uppercase">
            {HERO.eyebrow}
          </p>
          <h1
            id="schedule-hero-heading"
            className="mt-5 font-display text-display-l leading-[1.06] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-[46ch] font-body text-body-l leading-[1.65] text-ivory/75">
            {HERO.body}
          </p>
          <a href="#calendar-embed-state" className="va-btn va-btn-gold mt-9">
            {HERO.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="sch-hero-media-mobile lg:hidden">
        <img src={MEDIA.src} alt={MEDIA.alt} width={836} height={740} />
      </div>
    </section>
  );
}
