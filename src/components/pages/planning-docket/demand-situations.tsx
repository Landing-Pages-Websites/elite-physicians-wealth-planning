import { FileTextIcon } from "@/components/site/icons";
import type { DemandSituationsContent } from "./content-types";
import { DemandGlyphIcon } from "./docket-glyphs";

/**
 * 02-demand-situations — the quiet decision-trigger ledger beside the
 * owner-specific editorial still life. One gold spine binds the live list;
 * the photograph is a substantial counterweight, never a thumbnail. The
 * variant controls where the photograph and the ledger hold the frame.
 */
export function DemandSituations({
  content,
}: {
  content: DemandSituationsContent;
}): React.JSX.Element {
  const { variant } = content;
  return (
    <section
      id="demand-situations"
      aria-labelledby="demand-situations-heading"
      className={`dkt-demand dkt-demand--${variant}`}
    >
      <DemandField content={content} />
      <DemandSeam variant={variant} />
    </section>
  );
}

function DemandField({
  content,
}: {
  content: DemandSituationsContent;
}): React.JSX.Element {
  switch (content.variant) {
    case "ambient":
      return <AmbientField content={content} />;
    case "card":
      return <CardField content={content} />;
    case "mirror":
      return <MirrorField content={content} />;
    default:
      return <ClassicField content={content} />;
  }
}

/** The page-local line drops toward the document strip per each ref's seam. */
function DemandSeam({
  variant,
}: {
  variant: DemandSituationsContent["variant"];
}): React.JSX.Element {
  if (variant === "ambient") {
    return (
      <span
        aria-hidden="true"
        className="dkt-seam-drop right-[clamp(2rem,10vw,10rem)]"
      />
    );
  }
  if (variant === "card") {
    return (
      <>
        <span
          aria-hidden="true"
          className="dkt-seam-drop left-[clamp(12rem,32vw,30rem)]"
        />
        <span
          aria-hidden="true"
          className="dkt-demand-glyphnode left-[clamp(10.5rem,30vw,28rem)]"
        >
          <FileTextIcon className="h-4 w-4" />
        </span>
      </>
    );
  }
  return (
    <span
      aria-hidden="true"
      className={`dkt-seam-drop ${
        variant === "mirror"
          ? "right-[clamp(3rem,12vw,12rem)]"
          : "left-[clamp(2rem,9vw,9rem)]"
      }`}
    />
  );
}

function DemandIntro({
  content,
}: {
  content: DemandSituationsContent;
}): React.JSX.Element {
  return (
    <>
      <h2
        id="demand-situations-heading"
        className="dkt-reveal text-display-m font-display leading-[1.12] font-medium tracking-[-0.01em] text-balance text-ink"
      >
        {content.headline}
      </h2>
      <p className="text-body-m mt-5 max-w-[42ch] leading-[1.6] text-charcoal/85">
        {content.body}
      </p>
    </>
  );
}

function DemandImage({
  content,
  className,
}: {
  content: DemandSituationsContent;
  className: string;
}): React.JSX.Element {
  const { image } = content;
  return (
    <figure className={className}>
      <img
        src={image.src}
        alt={image.alt}
        style={
          image.objectPosition
            ? { objectPosition: image.objectPosition }
            : undefined
        }
      />
    </figure>
  );
}

/** Existing "stacked" (tax) and "columns" (wealth) compositions, unchanged. */
function ClassicField({
  content,
}: {
  content: DemandSituationsContent;
}): React.JSX.Element {
  const stacked = content.variant === "stacked";
  return (
    <div
      className={`va-shell grid items-start gap-12 py-16 lg:gap-16 lg:py-24 ${
        stacked
          ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
          : "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,0.9fr)]"
      }`}
    >
      <div className="dkt-demand-intro max-w-md">
        <DemandIntro content={content} />
        {stacked ? <TriggerLedger content={content} className="mt-10" /> : null}
      </div>
      {stacked ? null : (
        <div className="dkt-demand-ledger-col lg:pl-12">
          <TriggerLedger content={content} className="mt-10 lg:mt-1" />
        </div>
      )}
      <DemandImage
        content={content}
        className={`dkt-demand-panel dkt-reveal ${
          stacked
            ? "aspect-[666/852] max-h-[560px] w-full max-w-md justify-self-center lg:justify-self-end"
            : "aspect-[436/731] max-h-[520px] w-full max-w-xs justify-self-center lg:justify-self-end"
        }`}
      />
    </div>
  );
}

/**
 * Retirement ref: intro top-left, the wide ambience photograph settles into
 * the lower-left corner (edge-touching per the composition map), and the
 * kicker-titled ledger holds a warm right column.
 */
function AmbientField({
  content,
}: {
  content: DemandSituationsContent;
}): React.JSX.Element {
  return (
    <div className="va-shell grid items-start gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:py-24 lg:pb-[clamp(4rem,6vw,6rem)]">
      <div className="dkt-demand-intro max-w-md">
        <DemandIntro content={content} />
      </div>
      <div className="dkt-demand-ledgerfield order-2 lg:order-none">
        <TriggerLedger content={content} className="mt-2" />
      </div>
      <DemandImage
        content={content}
        className="dkt-demand-ambience dkt-reveal order-3 lg:order-none"
      />
    </div>
  );
}

/**
 * Practice ref: intro above a framed check-row ledger card on the left; the
 * still life fills the right field to the section edges.
 */
function CardField({
  content,
}: {
  content: DemandSituationsContent;
}): React.JSX.Element {
  return (
    <>
      <div className="va-shell relative z-10 grid gap-12 py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:py-24">
        <div className="dkt-demand-intro max-w-md pb-6 lg:pb-10">
          <DemandIntro content={content} />
          <CardLedger content={content} />
        </div>
      </div>
      <DemandImage
        content={content}
        className="dkt-demand-canvas dkt-reveal"
      />
    </>
  );
}

function CardLedger({
  content,
}: {
  content: DemandSituationsContent;
}): React.JSX.Element {
  return (
    <ul className="dkt-ledger-card mt-10">
      {content.items.map((item) => (
        <li key={item} className="text-body-m font-medium text-ink/90">
          <CheckMark className="h-4 w-4 shrink-0 text-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Legacy ref: the estate still life bleeds off the left edge at desktop
 * while intro and the circled-glyph ledger hold the right column.
 */
function MirrorField({
  content,
}: {
  content: DemandSituationsContent;
}): React.JSX.Element {
  return (
    <div className="va-shell grid items-start gap-12 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-24">
      <DemandImage
        content={content}
        className="dkt-demand-mirror-media dkt-reveal order-2 lg:order-1"
      />
      <div className="dkt-demand-intro order-1 max-w-lg lg:order-2 lg:col-start-2 lg:pl-8">
        <DemandIntro content={content} />
        <TriggerLedger content={content} className="mt-10" />
      </div>
    </div>
  );
}

function CheckMark({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

function TriggerLedger({
  content,
  className,
}: {
  content: DemandSituationsContent;
  className: string;
}): React.JSX.Element {
  const glyphs = content.itemGlyphs;
  return (
    <div className={className}>
      {content.ledgerKicker ? (
        <p className="dkt-ledger-kicker">{content.ledgerKicker}</p>
      ) : null}
      <ul className={`dkt-ledger ${glyphs ? "dkt-ledger--glyphs" : ""}`}>
        {content.items.map((item, index) => (
          <li key={item} className="text-body-m font-medium text-ink/90">
            {glyphs?.[index] ? (
              <span className="dkt-glyph-ring" aria-hidden="true">
                <DemandGlyphIcon glyph={glyphs[index]} className="h-4.5 w-4.5" />
              </span>
            ) : null}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
