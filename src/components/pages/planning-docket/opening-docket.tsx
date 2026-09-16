import { ArrowRightIcon, CalendarIcon } from "@/components/site/icons";
import type { OpeningDocketContent } from "./content-types";

/**
 * 01-opening-docket — the route's planning promise on a navy ground, with
 * the owner-specific documentary photograph as the opposite field. The
 * variant controls how hard the seam between copy and photograph reads.
 * Mobile keeps headline and primary action before the image, per the
 * manifest's recomposition contract.
 */
export function OpeningDocket({
  content,
}: {
  content: OpeningDocketContent;
}): React.JSX.Element {
  const { variant, eyebrow, headline, body, image } = content;
  const arc = content.seam === "arc";
  const modifiers = [
    `dkt-open--${variant}`,
    content.veil === "deep" ? "dkt-open--veil-deep" : "",
    arc ? "dkt-open--arc" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <section
      id="opening-docket"
      aria-labelledby="opening-docket-heading"
      data-dark-band
      className={`dkt-open ${modifiers} text-ivory`}
    >
      <div className="dkt-open-media">
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
      <div className="va-shell relative z-10 flex lg:min-h-[min(760px,calc(100svh-6.25rem))] flex-col justify-center pt-[calc(var(--header-h)+3.5rem)] pb-12 lg:pb-16">
        <div className="max-w-xl lg:max-w-[42%]">
          <p className="dkt-eyebrow dkt-reveal">{eyebrow}</p>
          <h1
            id="opening-docket-heading"
            className="dkt-reveal text-display-l font-display mt-6 leading-[1.08] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
          >
            {headline}
          </h1>
          <p className="text-body-l mt-6 max-w-[50ch] leading-[1.62] text-pretty text-mist/80">
            {body}
          </p>
          <OpeningActions content={content} />
        </div>
      </div>
      <div className="dkt-open-band">
        <div className="va-shell">
          <p className="dkt-boundary text-mist/65">{content.boundary}</p>
        </div>
        {arc ? null : <span aria-hidden="true" className="dkt-open-exit" />}
      </div>
      {arc ? <ArcSeam /> : null}
    </section>
  );
}

/**
 * The practice-owner ref exits on one gentle ivory sweep with a gold
 * hairline rising toward the next section — the page-local line leaves along
 * the curve instead of a straight vertical exit.
 */
function ArcSeam(): React.JSX.Element {
  return (
    <div aria-hidden="true" className="dkt-open-arc">
      <svg viewBox="0 0 1440 184" preserveAspectRatio="none">
        <path
          d="M0 122C420 132 900 60 1440 0V184H0Z"
          fill="var(--color-ivory)"
        />
        <path
          d="M0 122C420 132 900 60 1440 0"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function OpeningActions({
  content,
}: {
  content: OpeningDocketContent;
}): React.JSX.Element {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
      <a href={content.primaryCta.href} className="va-btn va-btn-gold">
        <CalendarIcon className="h-4 w-4" />
        {content.primaryCta.label}
      </a>
      <a
        href={content.secondaryLink.href}
        className="va-link text-gold hover:text-gold-hover"
      >
        {content.secondaryLink.label}
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
