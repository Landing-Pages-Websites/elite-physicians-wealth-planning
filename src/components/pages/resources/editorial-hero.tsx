import { CalendarIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

/** Manifest copy for 01-editorial-hero — content contract, do not edit. */
const HERO = {
  eyebrow: "Physician Resource Center",
  headline:
    "Browse educational guides, checklists, articles, and webinars by planning topic without implying every asset is finished.",
  body: "Use the index to choose a more specific planning page or resource before requesting a strategy call.",
  primaryCta: "Schedule a Strategy Call",
} as const;

/**
 * 01-editorial-hero. Wide cinematic planning-room canvas: eyebrow, index
 * headline and one gold action on the dark left field, the lamp-lit desk
 * holding the right, and a mist fade handing into the taxonomy rail.
 */
export function EditorialHero(): React.JSX.Element {
  return (
    <section
      id="editorial-hero"
      aria-labelledby="editorial-hero-heading"
      data-dark-band
      className="res-hero relative overflow-hidden text-ivory"
    >
      <img
        src="/images/design/resources/elements/01-editorial-hero-canvas.jpg"
        alt=""
        aria-hidden="true"
        width={2560}
        height={1440}
      />
      <div
        className="va-shell relative z-10 pb-24 lg:pb-28"
        style={{ paddingTop: "calc(var(--header-h) + 4rem)" }}
      >
        <p className="flex items-center gap-4 font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
          <span aria-hidden="true" className="block h-px w-10 bg-gold/70" />
          {HERO.eyebrow}
        </p>
        <h1
          id="editorial-hero-heading"
          className="res-reveal mt-6 max-w-[26ch] font-display text-display-l leading-[1.12] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
        >
          {HERO.headline}
        </h1>
        <p className="mt-6 max-w-[44ch] font-body text-body-l leading-[1.62] text-mist/85 text-pretty">
          {HERO.body}
        </p>
        <div className="mt-10">
          <a
            href={LINKS.scheduleOnsite}
            className="va-btn va-btn-gold max-sm:w-full max-sm:justify-center"
          >
            <CalendarIcon className="h-4 w-4" />
            {HERO.primaryCta}
          </a>
        </div>
        {/* The page-local gold line begins quietly here and exits into the
            taxonomy rail below. */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[4.5rem] hidden h-14 w-px bg-gold/80 lg:block"
        />
      </div>
      <span aria-hidden="true" className="res-hero-fade z-10" />
    </section>
  );
}
