import { ArrowRightIcon } from "@/components/site/icons";
import type {
  AdjacentPlanningContent,
  AdjacentRoute,
  DocketLink,
} from "./content-types";

function stepStyle(index: number): React.CSSProperties {
  return { "--dkt-step": index } as React.CSSProperties;
}

function RouteLink({ route }: { route: AdjacentRoute }): React.JSX.Element {
  return (
    <a
      href={route.href}
      className="dkt-adj-route"
      aria-label={`${route.href} — ${route.name}`}
    >
      {route.href}
    </a>
  );
}

function RouteThumb({
  route,
  className,
}: {
  route: AdjacentRoute;
  className: string;
}): React.JSX.Element {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <img
        src={route.image.src}
        alt={route.image.alt}
        className="dkt-adj-thumb"
        style={{ aspectRatio: route.image.aspectRatio }}
      />
    </span>
  );
}

/**
 * 05-adjacent-planning — the neighboring-route shelf. Every visible label is
 * the literal route path, as the refs draw it; every link is a real page.
 * "stair" steps the rows down-right into a navy exit band; "shelf" stacks
 * plates beside an edge-touching ambience photograph; "ledger" runs aligned
 * rows to arrow terminals; "cascade" steps ivory plates down-right. The
 * ledger and cascade refs seat the explore link inside the navy exit band.
 */
export function AdjacentPlanning({
  content,
}: {
  content: AdjacentPlanningContent;
}): React.JSX.Element {
  return (
    <section
      id="adjacent-planning"
      aria-labelledby="adjacent-planning-heading"
      className={`dkt-adj dkt-adj--${content.layout}`}
    >
      {content.edgeImage ? (
        <div className="dkt-adj-edge">
          <img
            src={content.edgeImage.src}
            alt={content.edgeImage.alt}
            style={
              content.edgeImage.objectPosition
                ? { objectPosition: content.edgeImage.objectPosition }
                : undefined
            }
          />
        </div>
      ) : null}
      <AdjacentField content={content} />
      <AdjacentExit content={content} />
    </section>
  );
}

function AdjacentField({
  content,
}: {
  content: AdjacentPlanningContent;
}): React.JSX.Element {
  switch (content.layout) {
    case "shelf":
      return <ShelfField content={content} />;
    case "ledger":
      return <LedgerField content={content} />;
    case "cascade":
      return <CascadeField content={content} />;
    default:
      return <StairField content={content} />;
  }
}

function AdjacentExit({
  content,
}: {
  content: AdjacentPlanningContent;
}): React.JSX.Element {
  const { layout } = content;
  if (layout === "shelf") {
    return <div aria-hidden="true" className="dkt-adj-shelf-drop mb-10" />;
  }
  if (layout === "stair" && (content.exitNode ?? "seal") === "seal") {
    return (
      <div className="dkt-adj-exit">
        <span className="dkt-adj-node">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
            <path d="m7 7 10 10M17 7 7 17" />
          </svg>
        </span>
      </div>
    );
  }
  if (layout === "stair") {
    return <ExitBand drop="end" />;
  }
  return (
    <ExitBand
      drop={layout === "cascade" ? "end" : "start"}
      explore={content.explore}
    />
  );
}

/**
 * Navy exit band: the page-local line descends past the seam and pauses on a
 * gold dot; the ledger/cascade refs seat the explore link inside the band.
 */
function ExitBand({
  drop,
  explore,
}: {
  drop: "start" | "end";
  explore?: DocketLink;
}): React.JSX.Element {
  return (
    <div className={`dkt-adj-band dkt-adj-band--${drop}`} data-dark-band>
      <span aria-hidden="true" className="dkt-adj-band-drop" />
      {explore ? (
        <div className="va-shell">
          <a href={explore.href} className="va-link dkt-adj-band-link">
            {explore.label}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      ) : null}
    </div>
  );
}

function AdjacentHeader({
  content,
}: {
  content: AdjacentPlanningContent;
}): React.JSX.Element {
  return (
    <header className="max-w-lg">
      <h2
        id="adjacent-planning-heading"
        className="dkt-corner dkt-reveal text-display-m font-display leading-[1.1] font-medium tracking-[-0.01em] text-ink"
      >
        {content.headline}
      </h2>
      <p className="text-body-m mt-4 max-w-[46ch] leading-[1.6] text-charcoal/85">
        {content.body}
      </p>
    </header>
  );
}

function ExploreLink({
  content,
  className,
}: {
  content: AdjacentPlanningContent;
  className: string;
}): React.JSX.Element {
  return (
    <a href={content.explore.href} className={`va-link ${className}`}>
      {content.explore.label}
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </a>
  );
}

function StairField({
  content,
}: {
  content: AdjacentPlanningContent;
}): React.JSX.Element {
  const end = content.exploreAlign === "end";
  return (
    <div className="va-shell pt-16 lg:pt-24">
      <AdjacentHeader content={content} />
      <ol className="mt-12 space-y-8 lg:space-y-9">
        {content.routes.map((route, index) => (
          <li key={route.href} className="dkt-adj-row" style={stepStyle(index)}>
            <RouteThumb
              route={route}
              className="w-28 shrink-0 shadow-[0_14px_26px_-16px_rgba(11,31,58,0.55)] sm:w-40"
            />
            <RouteLink route={route} />
          </li>
        ))}
      </ol>
      <div className={end ? "flex justify-end" : undefined}>
        <ExploreLink content={content} className="mt-12 text-ink" />
      </div>
    </div>
  );
}

function ShelfField({
  content,
}: {
  content: AdjacentPlanningContent;
}): React.JSX.Element {
  return (
    <div className="va-shell grid gap-12 pt-14 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:pt-24 lg:pb-16">
      {/* Inner padding (not on .va-shell — its inline padding is unlayered
          CSS) keeps the copy clear of the edge-touching photograph at lg. */}
      <div className="lg:pl-[clamp(7rem,13vw,13rem)]">
        <AdjacentHeader content={content} />
        <ExploreLink content={content} className="mt-9 text-ink" />
      </div>
      <ol className="space-y-6 lg:space-y-7">
        {content.routes.map((route, index) => (
          <li key={route.href} className="dkt-adj-plate" style={stepStyle(index)}>
            <RouteThumb route={route} className="w-full" />
            <RouteLink route={route} />
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Retirement ref: aligned rows, each rule running to a gold arrow terminal. */
function LedgerField({
  content,
}: {
  content: AdjacentPlanningContent;
}): React.JSX.Element {
  return (
    <div className="va-shell pt-16 pb-14 lg:pt-24 lg:pb-16">
      <AdjacentHeader content={content} />
      <ol className="mt-12 max-w-4xl space-y-8">
        {content.routes.map((route) => (
          <li key={route.href} className="dkt-adj-lrow">
            <RouteThumb
              route={route}
              className="w-28 shrink-0 shadow-[0_14px_26px_-16px_rgba(11,31,58,0.55)] sm:w-40"
            />
            <RouteLink route={route} />
            <span aria-hidden="true" className="dkt-adj-lrule" />
            <ArrowRightIcon className="h-4 w-4 shrink-0 text-gold" />
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Practice ref: ivory plates step down-right toward the navy exit band. */
function CascadeField({
  content,
}: {
  content: AdjacentPlanningContent;
}): React.JSX.Element {
  return (
    <div className="va-shell pt-16 pb-10 lg:pt-24 lg:pb-12">
      <AdjacentHeader content={content} />
      <ol className="mt-12 space-y-5 lg:space-y-6">
        {content.routes.map((route, index) => (
          <li
            key={route.href}
            className="dkt-adj-plate dkt-adj-cplate"
            style={stepStyle(index)}
          >
            <RouteThumb route={route} className="w-full" />
            <RouteLink route={route} />
            <ArrowRightIcon className="h-4 w-4 shrink-0 justify-self-end text-gold" />
          </li>
        ))}
      </ol>
    </div>
  );
}
