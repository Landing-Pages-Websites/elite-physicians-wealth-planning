import Image from "next/image";
import { HERO, LINKS, PORTRAIT } from "@/lib/content";
import { PortraitCaption } from "./portrait-caption";
import {
  CalendarIcon,
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

function PortraitCard(): React.JSX.Element {
  return (
    <figure className="va-card-paper va-reveal relative mx-auto w-64 max-w-full p-3 shadow-[0_24px_60px_rgba(2,10,22,0.55)] ring-1 ring-ink/10 sm:w-72 lg:mx-0 lg:w-80">
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
      <div className="relative z-10 va-shell flex min-h-[min(864px,100svh)] flex-col py-8">
        {/* The masthead that sat here has been LIFTED into the global
            SiteHeader — not copied. The approved frame shows this lockup at the
            hero's top-left; the fixed header now renders it in that same
            position on every route. Leaving it here as well would stack two
            wordmarks. The spacer below reserves the header's height so the
            hero's internal rhythm and its 1536x864 fold grouping are unchanged. */}
        <div aria-hidden="true" style={{ height: "var(--header-h)" }} />

        <div className="mt-10 flex items-center gap-5 lg:mt-14">
          <p className="font-body text-[11px] font-medium tracking-[0.18em] text-mist/80 uppercase">
            {HERO.orientation}
          </p>
          <span
            aria-hidden="true"
            className="hidden h-px flex-1 bg-gradient-to-r from-gold/45 to-transparent lg:block"
          />
        </div>

        <div className="mt-7 grid items-start gap-12 lg:mt-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="max-w-2xl">
            <h1
              id="one-plan-heading"
              className="va-reveal text-display-xl font-display leading-[1.06] font-medium tracking-[-0.02em] text-ivory-bright"
            >
              {headlineLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-7 max-w-[52ch] font-body text-body-l leading-[1.62] text-mist/80 text-pretty">
              {HERO.body}
            </p>
            <div className="mt-11 flex flex-wrap items-center gap-x-9 gap-y-4">
              <a
                href={LINKS.scheduleOnsite}
                className="va-btn va-btn-gold"
              >
                <CalendarIcon className="h-4 w-4" />
                {HERO.primaryCta}
              </a>
              <a
                href={LINKS.processOnsite}
                className="va-link border-mist/35 text-mist hover:border-gold hover:text-ivory"
              >
                {HERO.secondaryCta}
              </a>
            </div>
          </div>

          <PortraitCard />
        </div>

        <ul className="mt-auto flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7">
          {HERO.proofLine.map((proof, index) => {
            const ProofIcon = PROOF_ICONS[index];
            return (
              <li
                key={proof}
                className="flex items-center gap-2.5 font-body text-[13px] font-medium text-mist/90"
              >
                <ProofIcon className="h-4 w-4 text-mist/45" />
                {proof}
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-col gap-2 pb-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 font-body text-body-s font-medium tracking-[0.16em] text-mist/55 uppercase">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-gold/70" />
            {HERO.identityLine}
          </p>
          <p className="font-body text-[11px] text-mist/70">{HERO.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
