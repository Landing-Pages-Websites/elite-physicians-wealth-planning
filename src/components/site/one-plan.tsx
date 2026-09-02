import Image from "next/image";
import { HERO, LINKS, PORTRAIT } from "@/lib/content";
import { PortraitCaption } from "./portrait-caption";
import {
  CalendarIcon,
  FileTextIcon,
  RefreshIcon,
  ShieldIcon,
  StethoscopeIcon,
} from "./icons";

const PROOF_ICONS = [ShieldIcon, StethoscopeIcon, RefreshIcon] as const;

/** The three-line monumental break of the manifest headline. */
function headlineLines(): readonly string[] {
  const headline: string = HERO.headline;
  const secondStart = headline.indexOf("Keep");
  const thirdStart = headline.indexOf("and Retire");
  if (secondStart === -1 || thirdStart === -1) {
    return [headline];
  }
  return [
    headline.slice(0, secondStart).trim(),
    headline.slice(secondStart, thirdStart).trim(),
    headline.slice(thirdStart).trim(),
  ];
}

/**
 * Desktop gold route: enters at the left edge, crosses behind the
 * strapline pill, bends down and terminates against the portrait card;
 * a second segment resumes lower right and exits the bottom edge at
 * x=1510 to meet the 02 career-signal entry curve.
 */
function HeroRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 864"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    >
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M0 148 H920 Q952 148 972 170 L1042 232" vectorEffect="non-scaling-stroke" />
        <path
          d="M1180 668 C1260 700 1350 756 1420 812 Q1478 850 1510 864"
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <circle cx="1046" cy="236" r="4" fill="var(--color-gold)" />
    </svg>
  );
}

function PortraitCard(): React.JSX.Element {
  return (
    <figure className="va-card-paper va-reveal relative mx-auto w-64 max-w-full p-3 shadow-[0_24px_60px_rgba(2,10,22,0.55)] ring-1 ring-gold sm:w-72 lg:mx-0 lg:w-80">
      <div className="relative aspect-[485/610] overflow-hidden">
        <Image
          src={PORTRAIT.src}
          alt={PORTRAIT.alt}
          fill
          priority
          sizes="(min-width: 1024px) 320px, 288px"
          className="object-cover"
        />
      </div>
      <PortraitCaption className="text-[11px]" />
    </figure>
  );
}

export function OnePlan(): React.JSX.Element {
  return (
    <section
      id="one-plan"
      aria-labelledby="one-plan-heading"
      className="va-hero relative overflow-hidden text-ivory"
    >
      <HeroRoute />
      <div className="relative z-10 mx-auto flex min-h-[min(864px,100svh)] max-w-[1400px] flex-col px-6 py-8 sm:px-10 lg:px-14">
        {/* The masthead that sat here has been LIFTED into the global
            SiteHeader — not copied. The approved frame shows this lockup at the
            hero's top-left; the fixed header now renders it in that same
            position on every route. Leaving it here as well would stack two
            wordmarks. The spacer below reserves the header's height so the
            hero's internal rhythm and its 1536x864 fold grouping are unchanged. */}
        <div aria-hidden="true" style={{ height: "var(--header-h)" }} />

        <p className="mt-8 self-start rounded-full border border-mist/50 bg-ink/50 px-5 py-2 font-body text-[11px] font-medium tracking-[0.14em] text-mist/90 uppercase backdrop-blur-sm lg:mt-10 lg:self-center lg:-translate-x-16">
          {HERO.orientation}
        </p>

        <div className="mt-10 grid flex-1 items-start gap-12 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="max-w-2xl">
            <h1
              id="one-plan-heading"
              className="va-reveal font-display text-[clamp(2.5rem,5.3vw,4.5rem)] leading-[1.02] font-semibold tracking-tight text-ivory-bright"
            >
              {headlineLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl font-body text-[15px] leading-relaxed text-mist/75">
              {HERO.body}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={LINKS.scheduleOnsite}
                className="va-gold-btn inline-flex items-center gap-2.5 rounded-md px-6 py-3.5 font-body text-sm font-bold tracking-wide text-ink"
              >
                <CalendarIcon className="h-4 w-4" />
                {HERO.primaryCta}
              </a>
              <a
                href={LINKS.processOnsite}
                className="inline-flex items-center gap-2.5 rounded-md border border-mist/70 px-6 py-3.5 font-body text-sm font-semibold tracking-wide text-ivory transition-colors duration-200 hover:border-gold hover:text-gold active:opacity-80"
              >
                <FileTextIcon className="h-4 w-4" />
                {HERO.secondaryCta}
              </a>
            </div>
          </div>

          <PortraitCard />
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6 lg:mt-8">
          {HERO.proofLine.map((proof, index) => {
            const ProofIcon = PROOF_ICONS[index];
            return (
              <li
                key={proof}
                className="flex items-center gap-2.5 font-body text-[13px] font-medium text-mist/90"
              >
                <ProofIcon className="h-4.5 w-4.5 text-gold" />
                {proof}
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-col gap-2 pb-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 font-body text-xs font-medium tracking-[0.16em] text-gold/90 uppercase">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-gold/70" />
            {HERO.identityLine}
          </p>
          <p className="font-body text-[11px] text-mist/70">{HERO.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
