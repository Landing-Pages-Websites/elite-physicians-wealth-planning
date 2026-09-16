import { ArrowRightIcon, ShieldIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

/** Manifest copy for 06-start-blueprint — content contract, do not edit. */
const START = {
  headline: "Start with a strategy conversation.",
  body: "Discuss your goals, current planning concerns, and whether the Blueprint process is appropriate for your situation.",
  primaryCta: "Schedule a Strategy Call",
  boundary:
    "Educational information only. Not individualized tax, legal, or investment advice.",
} as const;

/**
 * 06-start-blueprint. Full-bleed closing office canvas: centred invitation
 * over the approved dark advisory room, a thin gold interior frame, and the
 * page-local line ending cleanly in a node above the headline.
 */
export function StartBlueprint(): React.JSX.Element {
  return (
    <section
      id="start-blueprint"
      aria-labelledby="start-blueprint-heading"
      data-dark-band
      className="prc-close relative overflow-hidden text-ivory"
    >
      <img
        src="/images/design/our-process/elements/06-start-blueprint-canvas.jpg"
        alt=""
        aria-hidden="true"
        width={2560}
        height={1440}
      />
      {/* The frame's thin gold border inset from the section edges. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 z-10 rounded-[2px] border border-gold/30 sm:inset-6"
      />
      <div className="va-shell relative z-10 flex flex-col items-center py-24 text-center lg:py-32">
        {/* The page-local coordination line ends here: a short entry stroke
            from the review band and a terminal node. */}
        <span aria-hidden="true" className="flex flex-col items-center">
          <span className="block h-10 w-px bg-gold/80" />
          <span className="mt-1 block h-[7px] w-[7px] rounded-full bg-gold" />
        </span>
        <h2
          id="start-blueprint-heading"
          className="prc-reveal mt-8 max-w-[18ch] font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
        >
          {START.headline}
        </h2>
        <p className="mt-6 max-w-[48ch] font-body text-body-l leading-[1.62] text-mist/85 text-pretty">
          {START.body}
        </p>
        <div className="mt-10">
          <a
            href={LINKS.scheduleOnsite}
            className="prc-ghost-btn va-btn max-sm:w-full max-sm:justify-center"
          >
            {START.primaryCta}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-12 flex items-center justify-center gap-2.5 font-body text-body-s leading-[1.5] text-mist/70">
          <ShieldIcon className="h-4 w-4 shrink-0 text-gold" />
          {START.boundary}
        </p>
      </div>
    </section>
  );
}
