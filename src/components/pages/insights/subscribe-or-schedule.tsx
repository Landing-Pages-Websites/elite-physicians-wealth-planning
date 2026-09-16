import { ArrowRightIcon, CalendarIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

const CLOSE = {
  headline: "Choose the next step that matches your readiness.",
  body: "Schedule a confidential strategy call, or use the resource path when you want more context first.",
  primaryCta: { label: "Schedule a Strategy Call", href: LINKS.scheduleOnsite },
  secondaryCta: { label: "Browse held article topics", href: "/resources" },
  boundary:
    "Educational information only. Not individualized tax, legal, or investment advice.",
} as const;

/**
 * 05-subscribe-or-schedule — the navy closing field over the approved
 * closing-office atmosphere: one conversion path, one lower-commitment path,
 * and the editorial boundary. The page-local gold line ends here on a node.
 */
export function SubscribeOrSchedule(): React.JSX.Element {
  return (
    <section
      id="subscribe-or-schedule"
      aria-labelledby="insights-close-heading"
      data-dark-band
      className="ins-close ins-seam-top relative overflow-hidden text-ivory"
    >
      <div className="va-shell relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="insights-close-heading"
            className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {CLOSE.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] font-body text-body-m leading-[1.65] text-mist/85 text-pretty">
            {CLOSE.body}
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-8">
            <a
              href={CLOSE.primaryCta.href}
              className="va-btn va-btn-gold w-full max-w-md justify-center lg:w-auto"
            >
              <CalendarIcon className="h-4 w-4" />
              {CLOSE.primaryCta.label}
            </a>
            <a
              href={CLOSE.secondaryCta.href}
              className="va-btn w-full max-w-md justify-center border border-gold/60 text-ivory transition-colors duration-200 hover:border-gold hover:text-gold lg:w-auto"
            >
              {CLOSE.secondaryCta.label}
              <ArrowRightIcon className="h-4 w-4 shrink-0" />
            </a>
          </div>
          <p className="mx-auto mt-14 inline-flex max-w-[60ch] items-center rounded-[3px] border border-white/15 px-5 py-3 font-body text-body-s leading-[1.5] text-mist/75">
            {CLOSE.boundary}
          </p>
          {/* The page-local coordination line ends here, on a closing node. */}
          <span aria-hidden="true" className="mx-auto mt-8 block h-2 w-2 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
