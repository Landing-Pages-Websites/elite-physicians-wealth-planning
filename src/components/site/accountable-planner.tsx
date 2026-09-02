import Image from "next/image";
import { ACCOUNTABLE_PLANNER, LINKS, PORTRAIT } from "@/lib/content";
import { ArrowRightIcon } from "./icons";
import { PortraitCaption, splitNameCredentials } from "./portrait-caption";

/**
 * Quiet accountability trace: enters at the top edge (x=1516, from the
 * 06 exit), sweeps left along the upper field, bends down at the
 * portrait axis, passes behind the portrait plate, and exits through
 * the bottom edge at x=686 (seam to 08). A short accent sits in the
 * far-left still-life strip.
 */
function AccountabilityTrace(): React.JSX.Element {
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
      >
        <path
          d="M1516 0 V30 Q1516 62 1484 62 H746 C710 62 686 82 686 112 V864"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M188 408 H310" vectorEffect="non-scaling-stroke" />
      </g>
      <circle cx="686" cy="800" r="4" fill="var(--color-gold)" />
    </svg>
  );
}

export function AccountablePlanner(): React.JSX.Element {
  const { name, credentials } = splitNameCredentials();
  return (
    <section
      id="accountable-planner"
      aria-labelledby="accountable-planner-heading"
      className="va-planner relative overflow-hidden"
    >
      <AccountabilityTrace />
      <div className="relative z-10 va-shell grid min-h-[min(864px,100svh)] grid-cols-1 content-center gap-x-20 gap-y-10 py-16 lg:grid-cols-[minmax(280px,24rem)_minmax(0,1fr)] lg:py-24">
        {/* Promise leads on mobile; portrait sits center-left on desktop. */}
        <div className="order-1 lg:col-start-2 lg:row-start-1 lg:self-end">
          {/* Gold #C8A65A on ivory #F6F2E8 measures 2.07:1 — an AA failure at
              any size. Gold stays the accent for rules, nodes and CTA fills;
              eyebrow text on light bands is navy. */}
          <p className="font-body text-[11px] font-semibold tracking-[0.24em] text-ink uppercase">
            {ACCOUNTABLE_PLANNER.orientation}
          </p>
          <h2
            id="accountable-planner-heading"
            className="va-reveal mt-5 max-w-[22ch] text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
          >
            {ACCOUNTABLE_PLANNER.headline}
          </h2>
          <span aria-hidden="true" className="mt-6 flex max-w-2xl items-center">
            <span className="h-[2px] flex-1 bg-gold" />
            <span className="h-2 w-2 rounded-full border-2 border-gold bg-ivory" />
          </span>
        </div>

        <figure className="va-planner-card va-reveal order-2 relative mx-auto w-72 max-w-full p-2 sm:w-80 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:w-full lg:self-center">
          <div className="relative aspect-[405/560] overflow-hidden">
            <Image
              src={PORTRAIT.src}
              alt={PORTRAIT.alt}
              fill
              sizes="(min-width: 1024px) 26vw, 320px"
              className="object-cover"
            />
          </div>
          <PortraitCaption className="text-[10px]" />
        </figure>

        <div className="order-3 lg:col-start-2 lg:row-start-2 lg:self-start">
          <p className="font-display text-3xl font-semibold text-ink">
            {name}{" "}
            <span className="text-xl font-medium text-charcoal">{credentials}</span>
          </p>
          <p className="mt-4 max-w-[58ch] font-body text-body-l leading-[1.6] text-charcoal text-pretty">
            {ACCOUNTABLE_PLANNER.body}
          </p>
          <a
            href={LINKS.meetMichaelOnsite}
            className="va-btn va-btn-navy mt-9"
          >
            {ACCOUNTABLE_PLANNER.cta}
            <ArrowRightIcon className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
