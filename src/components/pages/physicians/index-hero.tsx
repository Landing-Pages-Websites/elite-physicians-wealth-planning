import { CalendarIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

const HERO = {
  eyebrow: "Who We Help",
  headline:
    "Start with your physician career stage, then move into the planning discipline that needs attention.",
  body: "Use the index to choose a more specific planning page or resource before requesting a strategy call.",
  primaryCta: "Schedule a Strategy Call",
} as const;

export function IndexHero(): React.JSX.Element {
  return (
    <section
      id="index-hero"
      aria-labelledby="phy-hero-heading"
      data-dark-band
      className="phy-hero phy-seam-bottom relative overflow-hidden text-ivory"
    >
      <div
        className="va-shell relative z-10 flex flex-col pb-24 lg:min-h-[720px] lg:pb-32"
        style={{ paddingTop: "calc(var(--header-h) + 4.5rem)" }}
      >
        <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
          {HERO.eyebrow}
        </p>
        <div className="mt-6 max-w-[34rem] xl:max-w-[37rem]">
          <h1
            id="phy-hero-heading"
            className="va-reveal font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {HERO.headline}
          </h1>
          {/* The frame's gold underline segment beneath the headline block. */}
          <span aria-hidden="true" className="mt-7 block h-px w-24 bg-gold" />
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
      </div>
      <div aria-hidden="true" className="phy-hero-fade pointer-events-none absolute inset-x-0 bottom-0 h-16 lg:h-24" />
    </section>
  );
}
