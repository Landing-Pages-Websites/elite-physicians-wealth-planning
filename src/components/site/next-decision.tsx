import { BRAND, LINKS, NEXT_DECISION } from "@/lib/content";
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
 * live copy: the route enters at the top edge (x≈686/1536, from the 07
 * exit), a junction splits beneath the headline toward the two column
 * centers, and a merge rejoins them beneath the actions.
 */
function ForkEntry(): React.JSX.Element {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-[44.66%] hidden h-14 w-[2px] bg-gold/80 md:block"
    />
  );
}

function ForkSplit(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1000 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none mx-auto mt-10 hidden h-24 w-full max-w-4xl md:block"
    >
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M500 0 V38" vectorEffect="non-scaling-stroke" />
        <path d="M500 38 C500 82 250 66 250 120" vectorEffect="non-scaling-stroke" />
        <path d="M500 38 C500 82 750 66 750 120" vectorEffect="non-scaling-stroke" />
      </g>
      <circle cx="500" cy="38" r="5" fill="var(--color-gold)" />
    </svg>
  );
}

function ForkMerge(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none mx-auto mt-8 hidden h-20 w-full max-w-4xl md:block"
    >
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M250 0 C250 52 500 40 500 66" vectorEffect="non-scaling-stroke" />
        <path d="M750 0 C750 52 500 40 500 66" vectorEffect="non-scaling-stroke" />
        <path d="M500 66 V100" vectorEffect="non-scaling-stroke" />
      </g>
      <circle cx="500" cy="66" r="4" fill="var(--color-gold)" />
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
      className="va-gold-btn inline-flex items-center justify-center rounded-md px-8 py-4 font-body text-xs font-bold tracking-[0.08em] text-ink uppercase"
    >
      {label}
    </a>
  );
}

function StrategyPath(): React.JSX.Element {
  const { strategyCall } = NEXT_DECISION;
  return (
    <article className="flex flex-col items-center text-center">
      <PathIcon>
        <CalendarClockIcon className="h-7 w-7" />
      </PathIcon>
      <h3 className="mt-6 font-display text-[clamp(1.6rem,2.2vw,2.1rem)] leading-tight font-semibold text-white">
        {strategyCall.label}
      </h3>
      <span aria-hidden="true" className="mt-4 h-px w-16 bg-gold" />
      <p className="mt-5 max-w-sm font-body text-[13px] leading-relaxed text-mist/80">
        {strategyCall.summary}
      </p>
      <p className="mt-5 flex max-w-sm items-start gap-2 font-body text-xs text-gold/90">
        <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
        {strategyCall.expectation}
      </p>
      <div className="mt-8">
        <GoldAction href={LINKS.schedule} label={strategyCall.label} />
      </div>
    </article>
  );
}

function GuidePath(): React.JSX.Element {
  const { guide } = NEXT_DECISION;
  return (
    <article className="flex flex-col items-center text-center">
      <PathIcon>
        <FileLockIcon className="h-7 w-7" />
      </PathIcon>
      <h3 className="mt-6 max-w-xs font-display text-[clamp(1.6rem,2.2vw,2.1rem)] leading-tight font-semibold text-white">
        {guide.label}
      </h3>
      <span aria-hidden="true" className="mt-4 h-px w-16 bg-gold" />
      <p className="mt-5 max-w-sm font-body text-[13px] leading-relaxed text-mist/80">
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
        <GoldAction href={LINKS.guideRequest} label={guide.cta} />
      </div>
    </article>
  );
}

function ContactClose(): React.JSX.Element {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 text-center md:mt-4">
      <p className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body text-sm text-mist/85">
        <a
          href={`mailto:${NEXT_DECISION.contact}`}
          className="inline-flex items-center gap-2 underline-offset-4 transition-colors duration-200 hover:text-gold hover:underline"
        >
          <MailIcon className="h-4 w-4 text-gold" />
          {NEXT_DECISION.contact}
        </a>
        <a
          href={`tel:+1${BRAND.phone.replaceAll("-", "")}`}
          className="inline-flex items-center gap-2 underline-offset-4 transition-colors duration-200 hover:text-gold hover:underline"
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
        <ForkEntry />
        <div className="relative mx-auto flex min-h-[min(864px,100svh)] max-w-5xl flex-col justify-center px-6 py-20 sm:px-10 lg:py-24">
          <h2
            id="next-decision-heading"
            className="va-reveal text-center font-display text-[clamp(2.1rem,3.9vw,3.7rem)] leading-[1.1] font-semibold text-white"
          >
            <span className="block">{first}</span>
            <span className="block">{second}</span>
          </h2>

          <ForkSplit />

          <div className="mt-6 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-10">
            <StrategyPath />
            {/* Mobile fork: vertical connector between the stacked paths. */}
            <span
              aria-hidden="true"
              className="mx-auto -my-4 h-12 w-[2px] bg-gold/70 md:hidden"
            />
            <GuidePath />
          </div>

          <ForkMerge />
          <ContactClose />
        </div>
      </div>
    </section>
  );
}
