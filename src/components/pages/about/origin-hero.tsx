import Image from "next/image";
import { ArrowRightIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

const EYEBROW = "About";
const HEADLINE_PRE = "Elite Physicians Wealth Planning ";
const HEADLINE_ACCENT = "coordinates";
const HEADLINE_POST =
  " a medical professional's financial life into one strategy.";
const BODY =
  "The firm is positioned as the physician-focused planning relationship powered by Fiscal Vision Financial.";
const CTA = "Schedule a Strategy Call";

/**
 * 01-origin-hero. The approved frame sets the advisory-office photograph as
 * the canvas: copy sits over a dark left veil, the single accented verb
 * "coordinates" carries the gold, and one page-local line exits the foot of
 * the section toward the philosophy essay.
 */
export function OriginHero(): React.JSX.Element {
  return (
    <section
      id="origin-hero"
      aria-labelledby="origin-hero-heading"
      data-dark-band
      className="abt-hero relative overflow-hidden text-ivory"
    >
      <div className="va-shell relative z-10 pt-[calc(var(--header-h)+4rem)] pb-14 lg:min-h-[660px] lg:pb-24">
        <span aria-hidden="true" className="abt-seam abt-seam-bottom" />
        <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
          {EYEBROW}
        </p>
        <h1
          id="origin-hero-heading"
          className="va-reveal mt-6 max-w-[24ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
        >
          {HEADLINE_PRE}
          <span className="text-gold">{HEADLINE_ACCENT}</span>
          {HEADLINE_POST}
        </h1>
        <p className="mt-7 max-w-[44ch] font-body text-body-l leading-[1.62] text-mist/85 text-pretty">
          {BODY}
        </p>
        <a
          href={LINKS.scheduleOnsite}
          className="va-btn va-btn-gold mt-10 max-sm:w-full max-sm:justify-center"
        >
          {CTA}
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
      <div className="abt-hero-media">
        <Image
          src="/images/design/about/elements/origin-office-still-life.jpg"
          alt=""
          aria-hidden="true"
          width={886}
          height={764}
          priority
        />
      </div>
    </section>
  );
}
