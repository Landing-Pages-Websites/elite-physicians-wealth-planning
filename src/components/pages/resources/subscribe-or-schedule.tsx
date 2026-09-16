import {
  ArrowRightIcon,
  CalendarClockIcon,
  FileLockIcon,
  InfoIcon,
  ShieldIcon,
} from "@/components/site/icons";
import { LINKS, NEXT_DECISION } from "@/lib/content";

/** Manifest copy for 05-subscribe-or-schedule — content contract, do not edit. */
const CHOICE = {
  headline: "Choose the next step that matches your readiness.",
  body: "Schedule a confidential strategy call, or use the resource path when you want more context first.",
  primaryCta: "Schedule a Strategy Call",
  secondaryCta: "Request the Physician Tax & Retirement Planning Guide",
  resourceAction: "Open resource path",
  boundary:
    "Educational information only. Not individualized tax, legal, or investment advice.",
} as const;

function ScheduleCard(): React.JSX.Element {
  return (
    <div className="res-choice-card flex flex-col items-center rounded-[4px] px-7 py-9 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
        <CalendarClockIcon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 max-w-[14ch] font-display text-display-s leading-[1.2] font-medium text-ivory-bright">
        {CHOICE.primaryCta}
      </h3>
      <a
        href={LINKS.scheduleOnsite}
        className="va-btn va-btn-gold mt-7 w-full justify-center"
      >
        {CHOICE.primaryCta}
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

function GuideCard(): React.JSX.Element {
  return (
    <div className="res-choice-card flex flex-col items-center rounded-[4px] px-7 py-9 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
        <FileLockIcon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 max-w-[24ch] font-display text-display-s leading-[1.2] font-medium text-ivory-bright">
        {CHOICE.secondaryCta}
      </h3>
      <p className="mt-4 flex items-start gap-2.5 text-left font-body text-body-s leading-[1.55] text-mist/80">
        <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
        {NEXT_DECISION.guide.requestNote}
      </p>
      <a
        href={LINKS.guideRequest}
        className="res-ghost-btn va-btn mt-7 w-full justify-center"
      >
        {CHOICE.resourceAction}
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

/**
 * 05-subscribe-or-schedule. Navy conversion band on the approved closing
 * office: one centred choice headline, the strategy-call path and the
 * lower-commitment resource path, and the page-local line ending cleanly.
 */
export function SubscribeOrSchedule(): React.JSX.Element {
  return (
    <section
      id="subscribe-or-schedule"
      aria-labelledby="subscribe-or-schedule-heading"
      data-dark-band
      className="res-close relative overflow-hidden text-ivory"
    >
      <img
        src="/images/design/resources/elements/05-subscribe-or-schedule-canvas.jpg"
        alt=""
        aria-hidden="true"
        width={2560}
        height={1440}
      />
      <div className="va-shell relative z-10 flex flex-col items-center py-20 text-center lg:py-28">
        {/* Terminal stroke of the page-local coordination line. */}
        <span aria-hidden="true" className="flex flex-col items-center">
          <span className="block h-10 w-px bg-gold/80" />
          <span className="mt-1 block h-[7px] w-[7px] rounded-full bg-gold" />
        </span>
        <h2
          id="subscribe-or-schedule-heading"
          className="res-reveal mt-8 max-w-[22ch] font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
        >
          {CHOICE.headline}
        </h2>
        <p className="mt-5 max-w-[52ch] font-body text-body-l leading-[1.62] text-mist/85 text-pretty">
          {CHOICE.body}
        </p>
        <div className="mt-12 grid w-full max-w-3xl gap-6 text-left sm:grid-cols-2 sm:gap-8">
          <ScheduleCard />
          <GuideCard />
        </div>
        <p className="mt-12 flex items-center justify-center gap-2.5 font-body text-body-s leading-[1.5] text-mist/70">
          <ShieldIcon className="h-4 w-4 shrink-0 text-gold" />
          {CHOICE.boundary}
        </p>
      </div>
    </section>
  );
}
