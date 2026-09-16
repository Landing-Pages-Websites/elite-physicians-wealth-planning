import { CalendarIcon } from "@/components/site/icons";

const NEXT_STEP = {
  headline: "Turn the checkup into a planning conversation.",
  body: "Schedule a confidential strategy call to discuss which areas deserve review with the appropriate professionals.",
  primaryCta: "Schedule a Strategy Call",
} as const;

/**
 * 06-next-step — the dark consultation close: display heading and CTA in the
 * protected left field, the office still life as a right edge rail, and the
 * page-local gold line ending cleanly at a node inside the section.
 */
export function NextStep(): React.JSX.Element {
  return (
    <section
      id="next-step"
      aria-labelledby="next-step-heading"
      className="chk-close relative overflow-hidden text-ivory"
    >
      {/* The route enters from the privacy strip and terminates at a node. */}
      <span aria-hidden="true" className="chk-seam top-0 h-16" />
      <span
        aria-hidden="true"
        className="absolute top-16 left-1/2 z-[5] h-2 w-2 -translate-x-1/2 rounded-full bg-gold"
      />

      {/* Right edge rail: office photograph, cropped in from its left edge. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] lg:block">
        <img
          src="/images/design/checkup/media/checkup-next-step-office-right.jpg"
          alt=""
          aria-hidden="true"
          width={636}
          height={697}
          className="chk-close-media h-full w-full"
        />
        <div className="chk-close-veil absolute inset-0" />
      </div>

      <div className="relative z-10 va-shell py-20 lg:py-28">
        <div className="max-w-2xl lg:max-w-[52%]">
          <h2
            id="next-step-heading"
            className="va-reveal text-display-l font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {NEXT_STEP.headline}
          </h2>
          <p className="mt-6 max-w-[50ch] font-body text-body-l leading-[1.62] text-mist/80 text-pretty">
            {NEXT_STEP.body}
          </p>
          <div className="mt-10">
            <a href="/schedule" className="va-btn va-btn-gold">
              <CalendarIcon className="h-4 w-4" />
              {NEXT_STEP.primaryCta}
            </a>
          </div>
        </div>

        {/* Mobile keeps the focal still life after the decisive action. */}
        <div className="relative mt-12 aspect-[4/5] max-w-sm overflow-hidden rounded-sm border border-white/10 lg:hidden">
          <img
            src="/images/design/checkup/media/checkup-next-step-office-right.jpg"
            alt=""
            aria-hidden="true"
            width={636}
            height={697}
            className="chk-close-media absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
