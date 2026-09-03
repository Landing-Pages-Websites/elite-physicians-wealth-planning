import { BRAND, LINKS, NEXT_DECISION, telHref } from "@/lib/content";
import {
  CalendarClockIcon,
  FileLockIcon,
  InfoIcon,
  MailIcon,
  MessageIcon,
  PhoneIcon,
} from "./icons";

const HEADLINE_BREAK = "that fits";

function splitHeadline(): { first: string; second: string } {
  const headline: string = NEXT_DECISION.headline;
  const breakIndex = headline.indexOf(HEADLINE_BREAK);
  if (breakIndex === -1) {
    return { first: headline, second: "" };
  }
  return {
    first: headline.slice(0, breakIndex).trim(),
    second: headline.slice(breakIndex),
  };
}

/**
 * Closing fork, drawn as flow elements so the gold route can never strike
 * live copy: a junction splits beneath the headline toward the two column
 * centers and the two branches land on the icon rings. The branches do not
 * merge again — the two paths are alternatives, not a loop, and the route
 * continues below the primary (schedule) action only.
 */
function ForkSplit(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1000 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none mx-auto mt-10 hidden h-24 w-full md:block"
    >
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M500 0 V38" vectorEffect="non-scaling-stroke" />
        <path d="M500 38 C500 82 229 66 229 120" vectorEffect="non-scaling-stroke" />
        <path d="M500 38 C500 82 771 66 771 120" vectorEffect="non-scaling-stroke" />
      </g>
      <circle cx="500" cy="38" r="5" fill="var(--color-gold)" />
    </svg>
  );
}

function PathIcon({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-ink/40 text-gold">
      {children}
    </span>
  );
}

function GoldAction({
  href,
  label,
}: {
  href: string;
  label: string;
}): React.JSX.Element {
  return (
    <a
      href={href}
      className="va-btn va-btn-gold w-full max-w-[19rem] justify-center sm:w-auto"
    >
      {label}
    </a>
  );
}

function StrategyPath(): React.JSX.Element {
  const { strategyCall } = NEXT_DECISION;
  return (
    <article className="flex flex-col items-center text-center md:grid md:row-span-6 md:grid-rows-subgrid md:items-start md:justify-items-center">
      <PathIcon>
        <CalendarClockIcon className="h-7 w-7" />
      </PathIcon>
      <h3 className="mt-6 font-display text-[clamp(1.6rem,2.2vw,2.1rem)] leading-tight font-semibold text-white">
        {strategyCall.label}
      </h3>
      <span aria-hidden="true" className="mt-4 h-px w-16 bg-gold" />
      <p className="mt-5 max-w-[40ch] font-body text-body-m leading-[1.6] text-mist/80 text-pretty">
        {strategyCall.summary}
      </p>
      <p className="mt-5 flex max-w-sm items-start gap-2 font-body text-xs text-gold/90">
        <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
        {strategyCall.expectation}
      </p>
      <div className="mt-8 flex flex-col items-center">
        <GoldAction href={LINKS.scheduleOnsite} label={strategyCall.label} />
        {/* The route leaves the primary action and continues to the booking
            form below; the guide path is a terminus, so nothing is drawn
            under it. */}
        <span
          aria-hidden="true"
          className="mt-10 hidden h-14 w-[2px] bg-gold/70 md:block"
        />
      </div>
    </article>
  );
}

function GuidePath(): React.JSX.Element {
  const { guide } = NEXT_DECISION;
  return (
    <article className="flex flex-col items-center text-center md:grid md:row-span-6 md:grid-rows-subgrid md:items-start md:justify-items-center">
      <PathIcon>
        <FileLockIcon className="h-7 w-7" />
      </PathIcon>
      <h3 className="mt-6 max-w-[23rem] font-display text-[clamp(1.6rem,2.2vw,2.1rem)] leading-tight font-semibold text-balance text-white">
        {guide.label}
      </h3>
      <span aria-hidden="true" className="mt-4 h-px w-16 bg-gold" />
      <p className="mt-5 max-w-[40ch] font-body text-body-m leading-[1.6] text-mist/80 text-pretty">
        {guide.summary}
      </p>
      {/* The approved frame reserves a dashed guide-cover slot here and fills
          it with `guide.availability` — a build instruction ("CUSTOMER INPUT
          REQUIRED: the final guide file...") set at 9px inside a wireframe
          dashed border. Three defects in one element: build spec as reader-
          facing copy, design-tool chrome shipped as UI, and sub-legible type.
          The slot is removed; `guide.requestNote` below already tells the
          reader the truth — the guide arrives by email, there is no instant
          download — which is what the hard rule actually requires. The
          availability string stays in content.ts as a build constraint and is
          deliberately not rendered. */}
      <p className="mt-5 flex max-w-sm items-start gap-2 font-body text-xs text-mist/70">
        <MessageIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold/90" />
        {guide.requestNote}
      </p>
      <div className="mt-8">
        {/* Secondary action: a text link, never a second gold fill. The copy
            ranks this path as the lower-commitment one. */}
        <a
          href={LINKS.guideRequest}
          className="va-link min-h-11 text-mist"
        >
          {guide.cta}
        </a>
      </div>
    </article>
  );
}

function ContactClose(): React.JSX.Element {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 text-center md:mt-16">
      <p className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body text-sm text-mist/85">
        <a
          href={`mailto:${NEXT_DECISION.contact}`}
          className="inline-flex min-h-11 items-center gap-2 py-2 underline-offset-4 transition-colors duration-200 hover:text-gold hover:underline"
        >
          <MailIcon className="h-4 w-4 text-gold" />
          {NEXT_DECISION.contact}
        </a>
        <a
          href={telHref()}
          className="inline-flex min-h-11 items-center gap-2 py-2 underline-offset-4 transition-colors duration-200 hover:text-gold hover:underline"
        >
          <PhoneIcon className="h-4 w-4 text-gold" />
          {BRAND.phone}
        </a>
        <span className="text-mist/60">{BRAND.hours}</span>
      </p>
      <p className="font-display text-lg font-medium text-gold">
        {NEXT_DECISION.identityLine}
      </p>
      <p className="font-body text-[11px] text-mist/50">
        {NEXT_DECISION.disclaimer}
      </p>
    </div>
  );
}

export function NextDecision(): React.JSX.Element {
  const { first, second } = splitHeadline();
  return (
    <section
      id="next-decision"
      aria-labelledby="next-decision-heading"
      className="va-decision relative overflow-hidden text-ivory"
    >
      <div className="relative z-10">
        <div className="relative mx-auto flex min-h-[min(864px,100svh)] max-w-5xl flex-col justify-center px-6 py-20 sm:px-10 lg:py-24">
          <h2
            id="next-decision-heading"
            className="va-reveal text-center text-display-l font-display leading-[1.06] font-medium tracking-[-0.02em] text-balance text-white"
          >
            <span className="block">{first}</span>
            <span className="block">{second}</span>
          </h2>

          <ForkSplit />

          <div className="mt-6 grid grid-cols-1 gap-10 md:mt-0 md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto_auto_auto] md:gap-x-20 md:gap-y-0">
            <StrategyPath />
            {/* Two alternatives, not a sequence: a rule separates the stacked
                paths on mobile — nothing connects them. */}
            <span
              aria-hidden="true"
              className="mx-auto block h-px w-full max-w-[18rem] bg-white/12 md:hidden"
            />
            <GuidePath />
          </div>

          <ContactClose />
        </div>
      </div>
    </section>
  );
}
