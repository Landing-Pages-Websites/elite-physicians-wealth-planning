import Image from "next/image";
import { ACCOUNTABLE_PLANNER, LINKS, PORTRAIT } from "@/lib/content";
import GoldArrow from "./gold-arrow";

const DESK_IMAGE = "/images/design/b/07-accountable-planner/medical-finance-desk-background.jpg";

/**
 * Frame furniture as positioned spans, not a stretched viewBox: four fixed
 * 24px corner brackets, plus two gold stubs that run into the card's top and
 * bottom edges so the route enters and leaves an object instead of floating.
 */
function RegistrationMarks(): React.JSX.Element {
  return (
    <>
      <span aria-hidden="true" className="absolute left-0 top-0 h-6 w-6 border-l border-t border-ink/50" />
      <span aria-hidden="true" className="absolute right-0 top-0 h-6 w-6 border-r border-t border-ink/50" />
      <span aria-hidden="true" className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-ink/50" />
      <span aria-hidden="true" className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-ink/50" />
      <span aria-hidden="true" className="absolute left-1/2 top-0 h-6 w-[2px] -translate-x-1/2 -translate-y-full bg-gold" />
      <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-6 w-[2px] -translate-x-1/2 translate-y-full bg-gold" />
    </>
  );
}

function PortraitColumn(): React.JSX.Element {
  return (
    <div className="vb-portrait-clip order-2 mx-auto mt-10 w-full max-w-xs bg-ink/40 p-px lg:order-1 lg:mx-0 lg:mt-0">
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
  );
}

function PlannerNarrative(): React.JSX.Element {
  return (
    <div className="order-1 lg:order-2">
      <p className="text-body-s font-bold uppercase tracking-[0.24em] text-ink/80">
        {ACCOUNTABLE_PLANNER.orientation}
      </p>
      <h2
        id="accountable-planner-heading"
        className="mt-4 text-display-m font-bold leading-[1.15] tracking-[-0.02em] text-balance text-ink"
      >
        {ACCOUNTABLE_PLANNER.headline}
      </h2>
      <div aria-hidden="true" className="my-6 border-t border-dotted border-ink/40" />
      <p className="text-lg font-bold text-balance text-ink">{ACCOUNTABLE_PLANNER.name}</p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal">{ACCOUNTABLE_PLANNER.body}</p>
      <a
        href={LINKS.meetMichael}
        className="group va-btn va-btn-navy mt-8"
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
      <div className="relative h-28 lg:hidden">
        <Image
          src={DESK_IMAGE}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
      </div>
      <div className="relative mx-auto max-w-[96rem] px-0 py-12 sm:px-8 lg:px-6 lg:py-24 lg:pl-[18rem]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="vb-dossier-clip absolute inset-0 translate-x-3 translate-y-4 bg-mist"
          />
          <div className="vb-dossier-clip relative bg-white p-6 shadow-[0_30px_60px_rgba(11,31,58,0.2)] sm:p-10 lg:p-14">
            <div className="flex flex-col lg:grid lg:grid-cols-[36%_minmax(0,1fr)] lg:items-start lg:gap-12">
              <PortraitColumn />
              <PlannerNarrative />
            </div>
          </div>
          <RegistrationMarks />
        </div>
      </div>
    </section>
  );
}
