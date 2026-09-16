import Image from "next/image";
import { ArrowRightIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

const EYEBROW = "Founder";
const HEADLINE = "Meet Michael A. Epps, ChFC, RICP.";
const BODY =
  "Michael A. Epps founded Elite Physicians Wealth Planning to give physicians and medical professionals a more coordinated way to approach taxes, retirement, investments, practice decisions, and long-term wealth planning.";
const CTA = "Schedule a Strategy Call";
const PORTRAIT_ALT =
  "Michael A. Epps, ChFC®, RICP®, financial planner, standing in his office with arms crossed";
const CAPTION_NAME = "Michael A. Epps, ChFC®, RICP®";
const CAPTION_ROLE = "Founder, Elite Physicians Wealth Planning";

/**
 * 01-portrait-dossier. Dark/cream split panel: credentials narrative on the
 * navy left, the approved supplied portrait — never generated or altered —
 * in a formal ivory card on the right, with the ambient desk detail at the
 * far edge on wide screens.
 */
export function PortraitDossier(): React.JSX.Element {
  return (
    <section
      id="portrait-dossier"
      aria-labelledby="portrait-dossier-heading"
      data-dark-band
      className="mme-hero relative overflow-hidden text-ivory"
    >
      <div className="mme-hero-detail">
        <Image
          src="/images/design/meet-michael-epps/elements/portrait-office-detail.jpg"
          alt=""
          aria-hidden="true"
          width={366}
          height={719}
        />
      </div>
      <div className="va-shell relative z-10 pt-[calc(var(--header-h)+3.5rem)] pb-16 lg:pb-20">
        <span aria-hidden="true" className="mme-seam mme-seam-bottom" />
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
              {EYEBROW}
            </p>
            <h1
              id="portrait-dossier-heading"
              className="va-reveal mt-6 max-w-[16ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
            >
              {HEADLINE}
            </h1>
            <p className="mt-7 max-w-[52ch] font-body text-body-m leading-[1.65] text-mist/85 text-pretty">
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
          <figure className="mme-hero-card mx-auto w-full max-w-[20rem] p-4 lg:col-span-4 lg:col-start-8 lg:max-w-[22rem]">
            <div className="relative aspect-[485/640] overflow-hidden">
              <Image
                src="/images/design/meet-michael-epps/elements/michael-epps-approved.png"
                alt={PORTRAIT_ALT}
                fill
                priority
                sizes="(min-width: 1024px) 352px, 320px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 border-t border-gold/40 pt-3">
              <span className="block font-body text-body-s font-semibold tracking-[0.08em] text-ink uppercase">
                {CAPTION_NAME}
              </span>
              <span className="mt-1 block font-body text-body-s text-charcoal/80">
                {CAPTION_ROLE}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
