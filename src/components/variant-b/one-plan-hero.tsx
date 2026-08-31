import Image from "next/image";
import { ACCOUNTABLE_PLANNER, BRAND, HERO, LINKS, PORTRAIT } from "@/lib/content";
import GoldArrow from "./gold-arrow";

const RULER_TICK_COUNT = 64;
const RULER_TICKS = Array.from(
  { length: RULER_TICK_COUNT },
  (_, index) => (index * 1536) / (RULER_TICK_COUNT - 1),
);

const CONTOUR_PATHS = [
  "M-40 700 C 180 660, 360 726, 560 692 S 940 640 1140 704 S 1440 668 1580 700",
  "M-40 728 C 200 690, 380 750, 580 718 S 960 668 1160 730 S 1460 696 1580 726",
  "M-40 756 C 220 722, 400 776, 600 746 S 980 700 1180 758 S 1480 726 1580 754",
  "M-40 784 C 240 754, 420 802, 620 776 S 1000 734 1200 786 S 1500 758 1580 782",
];

function HeroFieldOrnaments(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 820"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
    >
      <rect
        x="36"
        y="36"
        width="560"
        height="330"
        stroke="currentColor"
        strokeDasharray="4 4"
        className="text-ink/15"
      />
      <path d="M20 20h20M20 20v20" stroke="currentColor" className="text-ink/40" />
      <path d="M1516 20h-20M1516 20v20" stroke="currentColor" className="text-ink/40" />
      <path d="M20 800h20M20 800v-20" stroke="currentColor" className="text-ink/40" />
      <path d="M1516 800h-20M1516 800v-20" stroke="currentColor" className="text-ink/40" />
      {CONTOUR_PATHS.map((d) => (
        <path key={d} d={d} stroke="currentColor" className="text-ink/10" />
      ))}
      <circle cx="618" cy="120" r="2.5" className="fill-gold" />
      <circle cx="640" cy="392" r="2.5" className="fill-gold" />
    </svg>
  );
}

function RulerStrip(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 28"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="h-5 w-full"
      fill="none"
    >
      <line x1="0" y1="14" x2="1536" y2="14" stroke="currentColor" className="text-white/25" />
      {RULER_TICKS.map((x, index) => (
        <line
          key={x}
          x1={x}
          y1={index % 8 === 0 ? 4 : 9}
          x2={x}
          y2={index % 8 === 0 ? 24 : 19}
          stroke="currentColor"
          className="text-white/30"
        />
      ))}
      <line x1="1080" y1="14" x2="1260" y2="14" stroke="currentColor" strokeWidth="2" className="text-gold" />
      <circle cx="1080" cy="14" r="3" className="fill-gold" />
      <path d="M1490 8l10 6-10 6" stroke="currentColor" strokeWidth="1.5" className="text-gold" />
    </svg>
  );
}

function StrategyPlaque(): React.JSX.Element {
  return (
    <div className="relative z-10 mt-6 w-full max-w-xs border border-white/20 bg-ink p-6 shadow-[0_24px_48px_rgba(11,31,58,0.35)] lg:absolute lg:-left-16 lg:top-[47%] lg:mt-0 lg:w-64">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="absolute left-2 top-2 h-3 w-3 text-gold/80">
        <path d="M2 2h8M2 2v8" stroke="currentColor" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="absolute bottom-2 right-2 h-3 w-3 text-gold/80">
        <path d="M22 22h-8M22 22v-8" stroke="currentColor" />
      </svg>
      <ul className="relative">
        {HERO.proofLine.map((item, index) => (
          <li
            key={item}
            className={`flex items-center gap-3 py-3 ${index > 0 ? "border-t border-gold/40" : ""}`}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="text-sm font-semibold tracking-wide text-white">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroActions(): React.JSX.Element {
  return (
    <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-8">
      <div>
        <a
          href={LINKS.schedule}
          className="group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-ink/85 active:bg-ink"
        >
          {HERO.primaryCta}
          <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
        <p className="mt-2 max-w-[26ch] text-[10px] font-semibold leading-snug text-charcoal/70">
          Outcome: Navigate to the Google Calendar scheduling experience
        </p>
      </div>
      <div>
        <a
          href={LINKS.process}
          className="group inline-flex items-center gap-2.5 border border-ink px-6 py-3.5 text-sm font-bold text-ink transition-colors duration-200 hover:bg-ink hover:text-white active:bg-ink/90"
        >
          {HERO.secondaryCta}
          <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
        <p className="mt-2 max-w-[26ch] text-[10px] font-semibold leading-snug text-charcoal/70">
          Outcome: Navigate to /our-process
        </p>
      </div>
    </div>
  );
}

export default function OnePlanHero(): React.JSX.Element {
  return (
    <section id="one-plan" aria-labelledby="one-plan-heading" className="relative overflow-hidden bg-white">
      <div className="bg-ink px-6 py-3">
        <p className="mx-auto max-w-[96rem] text-[11px] font-semibold tracking-[0.08em] text-white/90">
          {BRAND.wordmark}
        </p>
      </div>

      <div className="relative bg-gradient-to-b from-white via-white to-mist/40">
        <HeroFieldOrnaments />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-12 lg:grid lg:min-h-[42rem] lg:grid-cols-12 lg:gap-12 lg:pt-16">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 border border-ink/30 bg-white/70 px-3 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-ink">
              {HERO.orientation}
            </p>
            <h1
              id="one-plan-heading"
              className="mt-6 max-w-[21ch] text-[clamp(2.4rem,4.6vw,4rem)] font-bold leading-[1.06] tracking-tight text-ink"
            >
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal">{HERO.body}</p>
            <HeroActions />
          </div>

          <div className="relative mt-12 lg:col-span-6 lg:mt-0">
            <div className="vb-clinical-clip relative ml-auto aspect-[526/317] w-full max-w-[34rem] overflow-hidden bg-mist lg:w-[94%]">
              <Image
                src="/images/design/b/01-one-plan/medical-office-scene.jpg"
                alt="Clinician reviewing diagnostic imaging at a medical workstation"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <StrategyPlaque />
            <div className="mt-8 flex items-end justify-end gap-4 lg:mt-10">
              <p className="max-w-[18ch] text-right text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-charcoal/70">
                {ACCOUNTABLE_PLANNER.name}
              </p>
              <div className="vb-portrait-clip shrink-0 bg-ink/60 p-px">
                <div className="vb-portrait-clip relative aspect-[270/315] w-44 overflow-hidden bg-mist/50 sm:w-52">
                  <Image
                    src={PORTRAIT.src}
                    alt={PORTRAIT.alt}
                    fill
                    sizes="208px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-wrap items-baseline gap-x-10 gap-y-2 px-6 pb-10">
          <p className="text-xs font-semibold tracking-[0.06em] text-ink/80">{HERO.identityLine}</p>
          <p className="text-[11px] leading-relaxed text-charcoal/70">{HERO.disclaimer}</p>
        </div>
      </div>

      <div className="bg-ink px-6 py-4">
        <RulerStrip />
      </div>
    </section>
  );
}
