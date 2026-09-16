import Image from "next/image";
import { ArrowRightIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

const HEADLINE = "Meet the planner coordinating the strategy.";
const BODY =
  "Michael A. Epps, ChFC, RICP founded Elite Physicians Wealth Planning to bring coordinated strategy to physician households.";
const CTA = "Meet Michael Epps";
const PORTRAIT_ALT =
  "Michael A. Epps, ChFC®, RICP®, financial planner, standing in his office with arms crossed";

/**
 * 05-michael-anchor. Two-column ivory band: the approved supplied portrait —
 * the only permitted likeness — sits in a gold-edged plate on the left; the
 * right column carries the heading, the amber divider, the verified bio line,
 * and the profile link.
 */
export function MichaelAnchor(): React.JSX.Element {
  return (
    <section
      id="michael-anchor"
      aria-labelledby="michael-anchor-heading"
      className="abt-anchor relative overflow-hidden"
    >
      <div className="va-shell relative py-20 lg:py-28">
        <span aria-hidden="true" className="abt-seam abt-seam-top" />
        <span aria-hidden="true" className="abt-seam abt-seam-bottom" />
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="abt-anchor-plate mx-auto w-full max-w-[22rem] p-3 lg:col-span-5 lg:mx-0 lg:max-w-[26rem]">
            <div className="relative aspect-[485/640] overflow-hidden">
              <Image
                src="/images/design/about/elements/michael-epps-approved.png"
                alt={PORTRAIT_ALT}
                fill
                sizes="(min-width: 1024px) 416px, 352px"
                className="object-cover"
              />
            </div>
          </figure>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2
              id="michael-anchor-heading"
              className="va-reveal max-w-[18ch] font-display text-display-m leading-[1.14] font-medium tracking-[-0.01em] text-balance text-ink"
            >
              {HEADLINE}
            </h2>
            <span aria-hidden="true" className="mt-7 block h-px w-20 bg-gold" />
            <p className="mt-6 max-w-[48ch] font-body text-body-m leading-[1.65] text-charcoal">
              {BODY}
            </p>
            <a href={LINKS.meetMichaelOnsite} className="va-link mt-8 text-ink">
              {CTA}
              <ArrowRightIcon className="h-3.5 w-3.5 text-gold-text" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
