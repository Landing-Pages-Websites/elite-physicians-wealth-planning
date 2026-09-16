import { ArrowRightIcon, CalendarIcon } from "@/components/site/icons";
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

const OFFICE_STRIP = {
  src: "/images/design/who-we-serve/elements/office-strip.jpg",
  alt: "Quiet advisory office with a brass lamp and leather chair",
} as const;

export function NextBestStep(): React.JSX.Element {
  return (
    <section
      id="next-best-step"
      aria-labelledby="wws-close-heading"
      data-dark-band
      className="wws-close wws-seam-top relative overflow-hidden text-ivory"
    >
      {/* The frame's quiet office strip sits above the conversion fork. */}
      <img
        src={OFFICE_STRIP.src}
        alt={OFFICE_STRIP.alt}
        className="h-40 w-full object-cover object-left md:h-56"
      />

      <div className="va-shell relative z-10 pt-14 pb-20 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="wws-close-heading"
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
          <div className="mt-11 flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-stretch lg:gap-8">
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
