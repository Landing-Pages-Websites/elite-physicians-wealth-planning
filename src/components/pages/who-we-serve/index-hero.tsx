import { ArrowRightIcon, CalendarIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";
import { AUDIENCE_ROUTES } from "./audience-routes";

const HERO = {
  eyebrow: "Who We Serve",
  headline:
    "Find the professional path closest to your career, compensation, and ownership structure.",
  body: "Use the index to choose a more specific planning page or resource before requesting a strategy call.",
  primaryCta: "Schedule a Strategy Call",
} as const;

/** The frame's right rail: ivory audience markers hung from one gold spine. */
function AudienceRail(): React.JSX.Element {
  return (
    <nav aria-label="Audience index" className="wws-rail-spine">
      <ul className="flex flex-col gap-3">
      {AUDIENCE_ROUTES.map((route) => (
        <li key={route.href}>
          <a
            href={route.href}
            className="group flex min-h-11 w-full items-center justify-between gap-4 rounded-[3px] bg-ivory px-5 py-3 font-body text-body-s font-medium text-ink shadow-[0_14px_30px_-18px_rgba(2,10,22,0.7)] transition-all duration-200 hover:translate-x-1 hover:bg-white lg:w-64"
          >
            {route.label}
            <ArrowRightIcon className="h-4 w-4 shrink-0 text-gold-text opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
          </a>
        </li>
      ))}
      </ul>
    </nav>
  );
}

export function IndexHero(): React.JSX.Element {
  return (
    <section
      id="index-hero"
      aria-labelledby="wws-hero-heading"
      data-dark-band
      className="wws-hero wws-seam-bottom relative overflow-hidden text-ivory"
    >
      <div
        className="va-shell relative z-10 grid gap-14 pb-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-20 lg:pb-28"
        style={{ paddingTop: "calc(var(--header-h) + 4.5rem)" }}
      >
        <div className="max-w-[36rem]">
          <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
            {HERO.eyebrow}
          </p>
          <h1
            id="wws-hero-heading"
            className="va-reveal mt-6 font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {HERO.headline}
          </h1>
          <p className="mt-7 max-w-[46ch] font-body text-body-l leading-[1.62] text-mist/85 text-pretty">
            {HERO.body}
          </p>
          <div className="mt-10">
            <a href={LINKS.scheduleOnsite} className="va-btn va-btn-gold">
              <CalendarIcon className="h-4 w-4" />
              {HERO.primaryCta}
            </a>
          </div>
        </div>

        <div className="lg:pt-24">
          <AudienceRail />
        </div>
      </div>
    </section>
  );
}
