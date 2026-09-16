import type { DecisionPatternsContent } from "./content-types";

/**
 * The ledger's gold gesture: the same page-local line enters at the top-left
 * seam from the hero, runs the margin beside the decision rows, then turns
 * toward the photograph — one continuation, no restart.
 */
function LedgerRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 864"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      fill="none"
    >
      <path
        d="M1074 0 V36 Q1074 60 1050 60 H120 Q96 60 96 84 V776 Q96 800 120 800 H686 Q710 800 710 824 V864"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function rowIndent(index: number, staircase: boolean): string {
  if (staircase) {
    return `min(${index * 1.5}rem, ${index * 3.5}vw)`;
  }
  return `${(index % 3) * 0.75}rem`;
}

function DecisionRows({
  items,
  rowStyle,
}: {
  items: readonly string[];
  rowStyle: "offset" | "staircase";
}): React.JSX.Element {
  const staircase = rowStyle === "staircase";
  return (
    <ul className="mt-12 max-w-xl">
      {items.map((item, index) => (
        <li
          key={item}
          className="relative flex items-baseline gap-4 border-b border-ink/15 py-4"
          style={{ marginLeft: rowIndent(index, staircase) }}
        >
          {staircase && index > 0 ? (
            <span aria-hidden="true" className="aud-ledger-step" />
          ) : null}
          <span
            aria-hidden="true"
            className="h-[7px] w-[7px] shrink-0 translate-y-[-1px] rotate-45 bg-gold"
          />
          <span className="font-body text-body-l leading-snug text-ink">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function LedgerPhoto({
  content,
}: {
  content: DecisionPatternsContent;
}): React.JSX.Element {
  const landscape = content.photoAspect === "landscape";
  return (
    <figure className="aud-ledger-photo w-full max-w-sm">
      <div className={landscape ? "relative aspect-[5/4]" : "relative aspect-[4/5]"}>
        <img
          src={content.photo.src}
          alt={content.photo.alt}
          width={420}
          height={landscape ? 336 : 520}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: content.photo.objectPosition }}
        />
      </div>
    </figure>
  );
}

function LedgerMedia({
  content,
}: {
  content: DecisionPatternsContent;
}): React.JSX.Element {
  if (content.photoPlacement === "top") {
    // The sized slot IS the .aud-ledger-photo figure: that class pins
    // position:relative in unlayered CSS, so an inner `absolute` figure would
    // lose the conflict and collapse to zero height (empty column on desktop,
    // dead gradient scroll on mobile). The crop lives on this one element.
    return (
      <figure className="aud-ledger-photo aud-bleed-right -mx-6 aspect-[3/4] sm:-mx-10 lg:mx-0 lg:-mt-28 lg:aspect-auto lg:min-h-[560px] lg:self-start">
        <img
          src={content.photo.src}
          alt={content.photo.alt}
          width={366}
          height={615}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: content.photo.objectPosition }}
        />
      </figure>
    );
  }
  return (
    <div className="flex flex-col items-end justify-end gap-6 lg:pt-24">
      <LedgerPhoto content={content} />
      {content.stripPhoto && content.stripPlacement !== "full" ? (
        <figure className="aud-ledger-photo w-full">
          <div className="relative aspect-[5/2]">
            <img
              src={content.stripPhoto.src}
              alt={content.stripPhoto.alt}
              width={540}
              height={266}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: content.stripPhoto.objectPosition }}
            />
          </div>
        </figure>
      ) : null}
    </div>
  );
}

/** Full-width material transition at the ledger base (CRNAs ref). */
function FullStrip({
  content,
}: {
  content: DecisionPatternsContent;
}): React.JSX.Element | null {
  if (!content.stripPhoto || content.stripPlacement !== "full") {
    return null;
  }
  return (
    <figure className="relative h-48 w-full overflow-hidden sm:h-60 lg:h-72">
      <img
        src={content.stripPhoto.src}
        alt={content.stripPhoto.alt}
        width={1440}
        height={288}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: content.stripPhoto.objectPosition }}
      />
    </figure>
  );
}

/**
 * 02-decision-patterns — quiet ivory ledger. Live headline and five offset or
 * staircase decision rows dominate; one section-owned photograph
 * counterweights the outer field (lower plate, or a top/right bleed on the
 * dentists ref), with an optional full-width material strip at the base.
 */
export function DecisionPatterns({
  content,
}: {
  content: DecisionPatternsContent;
}): React.JSX.Element {
  const topPhoto = content.photoPlacement === "top";
  return (
    <section
      id="decision-patterns"
      aria-labelledby="decision-patterns-heading"
      className="aud-ledger relative overflow-hidden"
    >
      <LedgerRoute />
      <div
        className={`va-shell relative z-10 grid gap-12 py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20 lg:py-28 ${
          content.stripPlacement === "full" ? "lg:pb-20" : ""
        }`}
      >
        <div className={topPhoto ? "lg:pl-14 lg:pr-4" : "lg:pl-14"}>
          <h2
            id="decision-patterns-heading"
            className="max-w-2xl font-display text-display-l leading-[1.1] font-medium tracking-[-0.015em] text-balance text-ink"
          >
            {content.headline}
          </h2>
          <p className="mt-5 max-w-[46ch] font-body text-body-m leading-[1.6] text-charcoal/85">
            {content.body}
          </p>
          <DecisionRows
            items={content.items}
            rowStyle={content.rowStyle ?? "offset"}
          />
        </div>
        <LedgerMedia content={content} />
      </div>
      <FullStrip content={content} />
    </section>
  );
}
