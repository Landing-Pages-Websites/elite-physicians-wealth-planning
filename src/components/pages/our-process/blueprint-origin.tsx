import { CalendarIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

/** Manifest copy for 01-blueprint-origin — content contract, do not edit. */
const ORIGIN = {
  eyebrow: "Our Process",
  headline: "The Elite Physician Wealth Blueprint.",
  body: "A structured advisory process helps medical professionals evaluate their financial life, identify opportunities, coordinate advisors, and maintain a plan that evolves over time.",
  primaryCta: "Schedule a Strategy Call",
} as const;

/**
 * The gold coordination stitch the frame draws across the panel seam at
 * mid-height, ending in a node on the photo side.
 */
function SeamStitch(): React.JSX.Element {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-[52%] left-[55%] z-10 hidden -translate-x-1/2 items-center lg:flex"
    >
      <span className="block h-px w-28 bg-gold/80" />
      <span className="-ml-px block h-[7px] w-[7px] rounded-full bg-gold" />
    </span>
  );
}

/**
 * 01-blueprint-origin. Two-column full-bleed hero: navy text panel left,
 * warm desk still-life column right, one gold stitch across the seam and a
 * short exit line into the six-phase route below.
 */
export function BlueprintOrigin(): React.JSX.Element {
  return (
    <section
      id="blueprint-origin"
      aria-labelledby="blueprint-origin-heading"
      data-dark-band
      className="prc-hero relative overflow-hidden text-ivory"
    >
      <div className="relative lg:grid lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)]">
        <div
          className="va-shell relative z-10 pb-16 lg:min-h-[600px] lg:w-auto lg:max-w-none lg:pb-20"
          style={{ paddingTop: "calc(var(--header-h) + 4rem)" }}
        >
          <p className="flex items-center gap-4 font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
            <span aria-hidden="true" className="block h-px w-10 bg-gold/70" />
            {ORIGIN.eyebrow}
          </p>
          <h1
            id="blueprint-origin-heading"
            className="prc-reveal mt-6 max-w-[15ch] font-display text-display-xl leading-[1.06] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {ORIGIN.headline}
          </h1>
          <p className="mt-6 max-w-[46ch] font-body text-body-l leading-[1.62] text-mist/85 text-pretty">
            {ORIGIN.body}
          </p>
          <div className="mt-10">
            <a
              href={LINKS.scheduleOnsite}
              className="va-btn va-btn-gold max-sm:w-full max-sm:justify-center"
            >
              <CalendarIcon className="h-4 w-4" />
              {ORIGIN.primaryCta}
            </a>
          </div>
          {/* Exit of the page-local gold line: down through the bottom seam
              into the six-phase route. */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[4.5rem] hidden h-14 w-px bg-gold/80 lg:block"
          />
        </div>

        <div className="prc-hero-media max-lg:aspect-[3/2] lg:min-h-full">
          <img
            src="/images/design/our-process/elements/01-blueprint-origin-canvas.jpg"
            alt=""
            aria-hidden="true"
            width={1600}
            height={900}
          />
        </div>
        <SeamStitch />
      </div>
    </section>
  );
}
