import { FileTextIcon } from "@/components/site/icons";
import type { DocketImage, DocumentsNeededContent } from "./content-types";

/** Same stroke family as src/components/site/icons.tsx (round caps, 2px). */
function CheckIcon({ className }: { className?: string }): React.JSX.Element {
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

function ItemMark({
  content,
}: {
  content: DocumentsNeededContent;
}): React.JSX.Element {
  if (content.itemIcon === "circled-check") {
    return (
      <span className="dkt-docs-ring" aria-hidden="true">
        <CheckIcon className="h-3 w-3" />
      </span>
    );
  }
  const Mark = content.itemIcon === "check" ? CheckIcon : FileTextIcon;
  return <Mark className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-gold" />;
}

function ChecklistRow({
  content,
}: {
  content: DocumentsNeededContent;
}): React.JSX.Element {
  const style = content.itemStyle ?? "inline";
  return (
    <ul
      className={`dkt-docs-list dkt-docs-list--${style} mt-10 grid gap-x-7 gap-y-6 sm:grid-cols-2 lg:grid-cols-4`}
    >
      {content.items.map((item) => (
        <li key={item} className="dkt-docs-item">
          <ItemMark content={content} />
          <span className="text-body-m leading-[1.5] font-medium text-ink/90">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function DocsImage({
  image,
  className,
}: {
  image: DocketImage;
  className: string;
}): React.JSX.Element {
  /* The strip slot reads --dkt-strip-ar so its height comes from the clean
     photographic rectangle — no canvas beyond the crop can enter the frame. */
  const slotStyle = image.aspectRatio
    ? ({ "--dkt-strip-ar": image.aspectRatio } as React.CSSProperties)
    : undefined;
  return (
    <div className={className} style={slotStyle}>
      <img
        src={image.src}
        alt={image.alt}
        style={{
          objectPosition: image.objectPosition,
          aspectRatio: image.aspectRatio,
        }}
      />
    </div>
  );
}

/** Strips with a declared clean-crop rectangle opt into the ratio slot. */
function stripClass(image: DocketImage): string {
  return image.aspectRatio
    ? "dkt-docs-strip dkt-docs-strip--ratio"
    : "dkt-docs-strip";
}

/**
 * 03-documents-needed — the compact preparation-checklist strip. The
 * owner-specific document photography brackets the live checklist from the
 * declared slot: full-width below for "bottom", right-anchored beside the
 * heading for "top", or paired edge panels either side of the checklist for
 * "flank". A mist exit band hands the line to the boundary map.
 */
export function DocumentsNeeded({
  content,
}: {
  content: DocumentsNeededContent;
}): React.JSX.Element {
  const { mediaPosition, image, secondImage } = content;
  const flank = mediaPosition === "flank";
  return (
    <section
      id="documents-needed"
      aria-labelledby="documents-needed-heading"
      className={`dkt-docs dkt-docs--${mediaPosition}`}
    >
      {mediaPosition === "top" ? (
        <DocsImage image={image} className={stripClass(image)} />
      ) : null}
      {flank ? (
        <DocsImage image={image} className="dkt-docs-flank dkt-docs-flank--left" />
      ) : null}
      {flank && secondImage ? (
        <DocsImage
          image={secondImage}
          className="dkt-docs-flank dkt-docs-flank--right"
        />
      ) : null}
      <div className="va-shell relative py-12 lg:py-14">
        {/* The flank variant seats all live content between the two edge
            panels, per the ref's central-strip contract. */}
        <div
          className={
            flank
              ? "lg:pr-[clamp(9rem,17vw,15rem)] lg:pl-[clamp(11rem,20vw,18rem)]"
              : undefined
          }
        >
          <DocsCopy content={content} />
          <ChecklistRow content={content} />
        </div>
      </div>
      {mediaPosition === "bottom" ? (
        <DocsImage image={image} className={stripClass(image)} />
      ) : null}
      <div aria-hidden="true" className="dkt-docs-exit" />
    </section>
  );
}

function DocsCopy({
  content,
}: {
  content: DocumentsNeededContent;
}): React.JSX.Element {
  const { mediaPosition } = content;
  /* min-height keeps the full-width checklist clear of the absolute right
     strip at lg on the top-media variant. */
  const frame =
    mediaPosition === "top" ? "lg:min-h-[15rem] lg:max-w-[40%]" : "";
  return (
    <div className={frame || undefined}>
      <h2
        id="documents-needed-heading"
        className="dkt-corner dkt-reveal text-display-m font-display leading-[1.1] font-medium tracking-[-0.01em] text-ink"
      >
        {content.headline}
      </h2>
      <p className="text-body-m mt-4 max-w-[64ch] leading-[1.6] text-charcoal/85">
        {content.body}
      </p>
      {content.kicker ? <p className="dkt-docs-kicker">{content.kicker}</p> : null}
    </div>
  );
}
