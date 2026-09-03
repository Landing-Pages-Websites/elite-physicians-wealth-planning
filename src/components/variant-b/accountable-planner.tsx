import Image from "next/image";
import { ACCOUNTABLE_PLANNER, LINKS, PORTRAIT } from "@/lib/content";
import GoldArrow from "./gold-arrow";

const DESK_IMAGE = "/images/design/b/07-accountable-planner/medical-finance-desk-background.jpg";


function RegistrationMarks(): React.JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      className="pointer-events-none absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)]"
    >
      <g stroke="currentColor" className="text-ink/50" vectorEffect="non-scaling-stroke">
        <path d="M2 8V2h4M98 8V2h-4M2 92v6h4M98 92v6h-4" vectorEffect="non-scaling-stroke" />
      </g>
      <circle cx="50" cy="1" r="0.6" className="fill-gold" />
      <circle cx="50" cy="99" r="0.6" className="fill-gold" />
    </svg>
  );
}

function PortraitColumn(): React.JSX.Element {
  return (
    <div className="mx-auto w-full max-w-xs lg:mx-0">
      <div className="vb-portrait-clip bg-ink/40 p-px">
        <div className="vb-portrait-clip relative aspect-[485/640] overflow-hidden bg-mist/60">
          <Image
            src={PORTRAIT.src}
            alt={PORTRAIT.alt}
            fill
            sizes="(min-width: 1024px) 20rem, 60vw"
            className="object-cover object-top"
          />
        </div>
      </div>
      <div className="vb-plaque-notch mt-4 bg-ink px-6 py-3 text-center">
        <p className="sr-only">Professional designations</p>
        <p className="mt-1 text-base font-bold tracking-wide text-white">
          ChFC&reg;
          <span aria-hidden="true" className="mx-2.5 inline-block h-3.5 w-px translate-y-0.5 bg-gold" />
          RICP&reg;
        </p>
      </div>
    </div>
  );
}

function PlannerNarrative(): React.JSX.Element {
  return (
    <div>
      <p className="text-body-s font-bold uppercase tracking-[0.24em] text-ink/80">
        {ACCOUNTABLE_PLANNER.orientation}
      </p>
      <h2
        id="accountable-planner-heading"
        className="mt-4 max-w-[22ch] text-display-m tracking-[-0.02em] font-bold leading-[1.15] tracking-tight text-ink"
      >
        {ACCOUNTABLE_PLANNER.headline}
      </h2>
      <div aria-hidden="true" className="my-6 border-t border-dotted border-ink/40" />
      <p className="text-xl font-bold text-ink">{ACCOUNTABLE_PLANNER.name}</p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal">{ACCOUNTABLE_PLANNER.body}</p>
      <a
        href={LINKS.meetMichael}
        className="group mt-8 inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-ink/85 active:bg-ink"
      >
        {ACCOUNTABLE_PLANNER.cta}
        <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

export default function AccountablePlanner(): React.JSX.Element {
  return (
    <section
      id="accountable-planner"
      aria-labelledby="accountable-planner-heading"
      className="relative overflow-hidden bg-ivory"
    >
      <div aria-hidden="true" className="vb-desk-bg absolute inset-0 hidden lg:block" />
      <div className="relative h-44 lg:hidden">
        <Image
          src={DESK_IMAGE}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-8 lg:py-24 lg:pl-44">
        <div className="relative">
          <div
            aria-hidden="true"
            className="vb-dossier-clip absolute inset-0 translate-x-3 translate-y-4 bg-mist"
          />
          <RegistrationMarks />
          <div className="vb-dossier-clip relative bg-white p-7 shadow-[0_30px_60px_rgba(11,31,58,0.2)] sm:p-10 lg:p-14">
            <div className="lg:grid lg:grid-cols-[36%_minmax(0,1fr)] lg:items-start lg:gap-12">
              <PortraitColumn />
              <div className="mt-10 lg:mt-0">
                <PlannerNarrative />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
