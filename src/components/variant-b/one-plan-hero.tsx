import Image from "next/image";
import { HERO, LINKS, PORTRAIT } from "@/lib/content";
import { PortraitCaption } from "@/components/site/portrait-caption";
import GoldArrow from "./gold-arrow";

const CONTOUR_PATHS = [
  "M-40 700 C 180 660, 360 726, 560 692 S 940 640 1140 704 S 1440 668 1580 700",
  "M-40 728 C 200 690, 380 750, 580 718 S 960 668 1160 730 S 1460 696 1580 726",
  "M-40 756 C 220 722, 400 776, 600 746 S 980 700 1180 758 S 1480 726 1580 754",
  "M-40 784 C 240 754, 420 802, 620 776 S 1000 734 1200 786 S 1500 758 1580 782",
];

/**
 * Ground texture only. The dashed "blueprint" rect, the four corner
 * registration ticks and the two gold dots were removed: at 1440 the slice
 * transform pushed the rect's left edge off-canvas and drove its right and
 * bottom edges straight through the headline, the ticks clipped entirely, and
 * the dots were endpoints of no line. Gated to lg so the slice cannot stretch
 * the contours into diagonal scratches across the mobile portrait caption.
 */
function HeroFieldOrnaments(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 820"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      fill="none"
    >
      {CONTOUR_PATHS.map((d) => (
        <path key={d} d={d} stroke="currentColor" className="text-ink/10" />
      ))}
    </svg>
  );
}

function StrategyPlaque(): React.JSX.Element {
  return (
    <div className="relative z-10 mt-6 w-full max-w-xs border border-ink/15 bg-ivory p-6 shadow-[0_18px_40px_-18px_rgba(11,31,58,0.30)] lg:absolute lg:top-[38%] lg:left-0 lg:mt-0 lg:w-64">
      <ul className="relative">
        {HERO.proofLine.map((item, index) => (
          <li
            key={item}
            className={`flex items-center gap-3 py-3 ${index > 0 ? "border-t border-gold/40" : ""}`}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="text-sm font-semibold tracking-wide text-ink">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroActions(): React.JSX.Element {
  return (
    <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
      <a
        href={LINKS.schedule}
        className="group va-btn va-btn-navy w-full justify-center whitespace-nowrap sm:w-auto sm:justify-start"
      >
        {HERO.primaryCta}
        <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <a
        href={LINKS.process}
        className="group va-link border-ink/35 whitespace-nowrap text-ink hover:border-ink hover:opacity-100"
      >
        {HERO.secondaryCta}
        {/* The same glyph as the primary, in currentColor: gold on white is
            2.32:1, so the affordance was the least visible part of the control. */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-4 w-4 text-ink transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}

export default function OnePlanHero(): React.JSX.Element {
  return (
    <section id="one-plan" aria-labelledby="one-plan-heading" className="relative overflow-hidden bg-white">
      {/* The navy wordmark bar that sat here is now the global SiteHeader —
          lifted, not duplicated, exactly as on the Consult Ledger. The spacer
          reserves the fixed header's height so the hero keeps its rhythm. */}
      <div aria-hidden="true" style={{ height: "var(--header-h)" }} />

      <div className="relative bg-gradient-to-b from-white via-white to-mist/40">
        <HeroFieldOrnaments />
        <div className="va-shell relative pb-14 pt-12 lg:grid lg:min-h-[42rem] lg:grid-cols-12 lg:gap-12 lg:pt-16">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 text-body-s font-semibold tracking-[0.06em] text-ink">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-gold" />
              {HERO.orientation}
            </p>
            <h1
              id="one-plan-heading"
              className="mt-6 max-w-none text-balance text-display-l tracking-[-0.02em] font-bold leading-[1.06] text-ink md:max-w-[21ch] md:text-display-xl"
            >
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal">{HERO.body}</p>
            <HeroActions />
          </div>

          <div className="relative mt-12 lg:col-span-6 lg:mt-0">
            <div className="relative ml-auto aspect-[526/317] w-full max-w-[34rem] overflow-hidden bg-mist [filter:saturate(0.82)_contrast(1.02)] lg:w-[94%]">
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
            <div className="mt-8 flex flex-col-reverse items-start gap-3 sm:flex-row sm:items-end sm:justify-end sm:gap-4 lg:mt-10">
              <PortraitCaption className="max-w-none px-0 pt-0 pb-0 text-left text-body-s text-charcoal sm:max-w-[13rem] sm:text-right" />
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

        <div className="va-shell relative flex flex-wrap items-baseline gap-x-10 gap-y-2 pb-10">
          <p className="text-xs font-semibold tracking-[0.06em] text-ink/80">{HERO.identityLine}</p>
          <p className="text-body-s leading-relaxed text-charcoal/70">{HERO.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
