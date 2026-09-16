import { ArrowRightIcon, CalendarIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

const CLOSE = {
  headline: "Choose the next step that matches your readiness.",
  body: "Schedule a confidential strategy call, or begin with the planning discipline closest to the decision in front of you.",
  primaryCta: "Schedule a Strategy Call",
  secondaryCta: "Request the Physician Tax & Retirement Planning Guide",
  boundary:
    "Educational information only. Not individualized tax, legal, or investment advice.",
} as const;

const AMBIENCE = {
  lamp: "/images/design/services/elements/05-next-best-step-lamp-and-chair.jpg",
  shelf: "/images/design/services/elements/05-next-best-step-shelf-ambience.jpg",
} as const;

/** The page-local line resolves into a two-branch fork over the actions. */
function ForkLine(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 320 88"
      aria-hidden="true"
      className="mx-auto mt-2 hidden h-[88px] w-[320px] lg:block"
      fill="none"
    >
      <g stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <path d="M160 0 V38" />
        <path d="M160 38 Q160 54 144 54 H56 Q40 54 40 70 V88" />
        <path d="M160 38 Q160 54 176 54 H264 Q280 54 280 70 V88" />
      </g>
    </svg>
  );
}

export function NextBestStep(): React.JSX.Element {
  return (
    <section
      id="next-best-step"
      aria-labelledby="services-close-heading"
      data-dark-band
      className="svc-close svc-seam-top relative overflow-hidden text-ivory"
    >
      {/* Office ambience crops frame the dark field without touching the CTAs. */}
      <img
        src={AMBIENCE.lamp}
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-[150px] object-cover object-top lg:block xl:w-[180px]"
      />
      <img
        src={AMBIENCE.shelf}
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[170px] object-cover object-top lg:block xl:w-[210px]"
      />

      <div className="va-shell relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="services-close-heading"
            className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {CLOSE.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-[54ch] font-body text-body-m leading-[1.65] text-mist/85 text-pretty">
            {CLOSE.body}
          </p>
          <ForkLine />
          <div className="mt-10 flex flex-col items-center justify-center gap-5 lg:mt-4 lg:flex-row lg:items-stretch lg:gap-8">
            <a href={LINKS.scheduleOnsite} className="va-btn va-btn-gold w-full max-w-md justify-center lg:w-auto">
              <CalendarIcon className="h-4 w-4" />
              {CLOSE.primaryCta}
            </a>
            <a
              href={LINKS.guideRequest}
              className="va-btn w-full max-w-md justify-center border border-gold/60 text-center text-ivory transition-colors duration-200 hover:border-gold hover:text-gold lg:w-auto"
            >
              {CLOSE.secondaryCta}
              <ArrowRightIcon className="h-4 w-4 shrink-0" />
            </a>
          </div>
          <p className="mx-auto mt-14 inline-flex max-w-[60ch] items-center rounded-[3px] border border-white/15 px-5 py-3 font-body text-body-s leading-[1.5] text-mist/70">
            {CLOSE.boundary}
          </p>
          {/* The page-local coordination line ends here, on a closing node. */}
          <span aria-hidden="true" className="mx-auto mt-8 block h-2 w-2 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
