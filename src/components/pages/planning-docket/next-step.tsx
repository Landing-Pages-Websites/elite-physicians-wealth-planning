import { ArrowRightIcon, CalendarIcon, InfoIcon } from "@/components/site/icons";
import type { NextStepContent } from "./content-types";

/**
 * 06-next-step — the dark consultation close. The decision group holds the
 * quiet field; the owner-specific night office anchors the opposite side.
 * The page-local gold line ends at this section's corner rule.
 */
export function NextStep({
  content,
}: {
  content: NextStepContent;
}): React.JSX.Element {
  const { mediaSide, image } = content;
  const copyAlign =
    mediaSide === "right" ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12";
  return (
    <section
      id="next-step"
      aria-labelledby="next-step-heading"
      data-dark-band
      className={`dkt-close dkt-close--${mediaSide} text-ivory`}
    >
      <div className="dkt-close-media">
        <img
          src={image.src}
          alt={image.alt}
          style={
            image.objectPosition
              ? { objectPosition: image.objectPosition }
              : undefined
          }
        />
      </div>
      <div className="va-shell relative z-10 flex flex-col justify-center py-16 lg:min-h-[640px] lg:py-24">
        <div className={`dkt-close-copy max-w-xl lg:w-[44%] ${copyAlign}`}>
          <h2
            id="next-step-heading"
            className="dkt-reveal text-display-l font-display leading-[1.08] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
          >
            {content.headline}
          </h2>
          <p className="text-body-l mt-6 max-w-[46ch] leading-[1.62] text-pretty text-mist/80">
            {content.body}
          </p>
          <a href={content.primaryCta.href} className="va-btn va-btn-gold mt-9">
            <CalendarIcon className="h-4 w-4" />
            {content.primaryCta.label}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <p className="dkt-close-boundary dkt-boundary mt-10 text-mist/70">
            <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {content.boundary}
          </p>
        </div>
      </div>
    </section>
  );
}
