import {
  ArrowRightIcon,
  CalendarClockIcon,
  CalendarIcon,
  FileLockIcon,
} from "@/components/site/icons";
import { LINKS } from "@/lib/content";

const CLOSE = {
  headline: "Choose the next step that matches your readiness.",
  bodyLead: "Schedule a confidential strategy call, or use the ",
  bodyLinkText: "resource path",
  bodyTail: " when you want more context first.",
  primaryCta: "Schedule a Strategy Call",
  secondaryCta: "Request the Physician Tax & Retirement Planning Guide",
  boundary:
    "Educational information only. Not individualized tax, legal, or investment advice.",
  resourcesPath: "/resources",
} as const;

/**
 * The frame's fork: one stem splitting toward the two choices. The SVG
 * stretches across the full two-column row (preserveAspectRatio none), so
 * the branch termini at x=100/300 land exactly on the centers of the two
 * equal grid columns below — each descending into its icon ring.
 */
function ForkLine(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 400 88"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="mt-2 hidden h-[88px] w-full lg:block"
      fill="none"
    >
      <g stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <path vectorEffect="non-scaling-stroke" d="M200 0 V34" />
        <path vectorEffect="non-scaling-stroke" d="M200 34 Q200 52 182 52 H118 Q100 52 100 70 V88" />
        <path vectorEffect="non-scaling-stroke" d="M200 34 Q200 52 218 52 H282 Q300 52 300 70 V88" />
      </g>
    </svg>
  );
}

/** A ringed mark above each choice, as the frame draws them. */
function ChoiceRing({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-gold text-gold lg:flex">
      {children}
    </span>
  );
}

export function NextBestStep(): React.JSX.Element {
  return (
    <section
      id="next-best-step"
      aria-labelledby="phy-close-heading"
      data-dark-band
      className="phy-close phy-seam-top relative overflow-hidden text-ivory"
    >
      <div className="va-shell relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="phy-close-heading"
            className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {CLOSE.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] font-body text-body-m leading-[1.65] text-mist/85 text-pretty">
            {CLOSE.bodyLead}
            <a
              href={CLOSE.resourcesPath}
              className="text-gold underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
            >
              {CLOSE.bodyLinkText}
            </a>
            {CLOSE.bodyTail}
          </p>
          <ForkLine />
          <div className="mt-10 flex flex-col items-center gap-6 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-start lg:gap-0">
            <div className="flex w-full max-w-md flex-col items-center gap-4 lg:max-w-none lg:px-6">
              <ChoiceRing>
                <CalendarClockIcon className="h-5 w-5" />
              </ChoiceRing>
              <a href={LINKS.scheduleOnsite} className="va-btn va-btn-gold w-full justify-center lg:w-auto">
                <CalendarIcon className="h-4 w-4" />
                {CLOSE.primaryCta}
              </a>
            </div>
            <div className="flex w-full max-w-md flex-col items-center gap-4 lg:max-w-none lg:px-6">
              <ChoiceRing>
                <FileLockIcon className="h-5 w-5" />
              </ChoiceRing>
              <a
                href={LINKS.guideRequest}
                className="va-btn w-full justify-center border border-gold/60 text-center text-ivory transition-colors duration-200 hover:border-gold hover:text-gold lg:w-auto"
              >
                {CLOSE.secondaryCta}
                <ArrowRightIcon className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
          <p className="mx-auto mt-14 max-w-[60ch] border-t border-white/15 pt-6 font-body text-body-s leading-[1.5] text-mist/70">
            {CLOSE.boundary}
          </p>
          {/* The page-local coordination line ends cleanly on this node. */}
          <span aria-hidden="true" className="mx-auto mt-8 block h-2 w-2 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
