import {
  ArrowRightIcon,
  CalculatorIcon,
  CalendarIcon,
  ChartBarIcon,
  ClipboardIcon,
  CompassIcon,
  FileTextIcon,
  UmbrellaIcon,
} from "@/components/site/icons";
import { LINKS } from "@/lib/content";
import type {
  RelatedPathsContent,
  RelatedPathLink,
  RelatedPathGroup,
} from "./content-types";

/** One icon per destination — the refs' tiny image tabs are CODE regions per
 *  every extraction plan, so they render as live navy tabs with stroke marks. */
function routeIcon(href: string): React.JSX.Element {
  const shared = "h-4 w-4 text-gold";
  switch (href) {
    case "/tax-planning-for-physicians":
      return <CalculatorIcon aria-hidden="true" className={shared} />;
    case "/wealth-management-for-physicians":
      return <ChartBarIcon aria-hidden="true" className={shared} />;
    case "/retirement-planning-for-physicians":
      return <UmbrellaIcon aria-hidden="true" className={shared} />;
    case "/practice-owner-planning":
      return <FileTextIcon aria-hidden="true" className={shared} />;
    case "/checkup":
      return <ClipboardIcon aria-hidden="true" className={shared} />;
    default:
      return <CompassIcon aria-hidden="true" className={shared} />;
  }
}

/**
 * The page-local line resolves here: one stem drops from the body copy and
 * fans to the five route anchors, then ends cleanly at the CTA — never
 * continuing into the footer.
 */
function RouteBranch(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1000 96"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none mx-auto hidden h-24 w-full max-w-5xl lg:block"
      fill="none"
    >
      <g stroke="var(--color-gold)" strokeWidth="1.5" opacity="0.8">
        <path d="M500 0 V40" vectorEffect="non-scaling-stroke" />
        <path d="M100 40 H900" vectorEffect="non-scaling-stroke" />
        <path d="M100 40 V96 M300 40 V96 M500 40 V96 M700 40 V96 M900 40 V96" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

function RouteCard({
  link,
  withTab,
}: {
  link: RelatedPathLink;
  withTab?: boolean;
}): React.JSX.Element {
  return (
    <a
      href={link.href}
      aria-label={link.ariaLabel}
      className="aud-route-card flex items-center justify-between gap-3 px-4 py-4"
    >
      <span className="flex min-w-0 items-center gap-3">
        {withTab ? <span className="aud-route-tab">{routeIcon(link.href)}</span> : null}
        {/* Route slugs always render in full — they wrap at their hyphens
            rather than ellipsis-truncating mid-word. */}
        <span className="min-w-0 font-body text-body-s font-medium break-words tracking-[0.02em] text-ivory">
          {link.href}
        </span>
      </span>
      <ArrowRightIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-gold" />
    </a>
  );
}

/** physicians close: one branch over five route cards in a row. */
function RouteRow({
  links,
}: {
  links: readonly RelatedPathLink[];
}): React.JSX.Element {
  return (
    <div className="mt-2">
      <RouteBranch />
      {/* lg:mt-4 keeps clear air between the branch drop-lines and the card
          tops so the drops never merge with the card borders. */}
      <ul className="mx-auto grid max-w-5xl gap-4 border-l border-gold/50 pl-5 sm:grid-cols-2 lg:mt-4 lg:grid-cols-5 lg:gap-5 lg:border-l-0 lg:pl-0">
        {links.map((link) => (
          <li key={link.href}>
            <RouteCard link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** surgeons close: strategy-call panel beside the route table. */
function SplitPanels({
  content,
}: {
  content: RelatedPathsContent;
}): React.JSX.Element {
  return (
    <div className="mx-auto mt-14 grid max-w-4xl items-center gap-10 lg:grid-cols-[minmax(0,5fr)_auto_minmax(0,6fr)]">
      <div className="aud-route-card flex h-full flex-col items-start gap-5 px-7 py-8 hover:translate-y-0">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/70">
          <CompassIcon aria-hidden="true" className="h-5 w-5 text-gold" />
        </span>
        <p className="font-display text-display-s leading-snug font-medium text-ivory-bright">
          {content.panelLabel}
        </p>
      </div>
      <div aria-hidden="true" className="hidden h-px w-14 bg-gold/80 lg:block" />
      <ul className="divide-y divide-gold/20 border-y border-gold/20">
        {content.links.map((link) => (
          <li key={link.href}>
            <RouteCard link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** dentists close: gold CTA left of the vertical route ladder on one stem. */
function Ladder({
  content,
}: {
  content: RelatedPathsContent;
}): React.JSX.Element {
  return (
    <div className="mx-auto mt-14 grid max-w-4xl items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div className="flex justify-center lg:justify-end lg:pr-6">
        <a href={LINKS.scheduleOnsite} className="va-btn va-btn-gold">
          <CalendarIcon aria-hidden="true" className="h-4 w-4" />
          {content.primaryCta}
        </a>
      </div>
      <ul className="aud-route-ladder relative flex flex-col gap-3 pl-6">
        {content.links.map((link) => (
          <li key={link.href} className="aud-route-rung relative">
            <RouteCard link={link} withTab />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** CRNAs close: one connector branching into two labelled route panels. */
function TwoPathPanels({
  groups,
}: {
  groups: readonly RelatedPathGroup[];
}): React.JSX.Element {
  return (
    <div>
      <svg
        viewBox="0 0 600 56"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="mx-auto hidden h-14 w-full max-w-2xl lg:block"
        fill="none"
      >
        <g stroke="var(--color-gold)" strokeWidth="1.5" opacity="0.8">
          <path d="M300 0 V22" vectorEffect="non-scaling-stroke" />
          <path d="M150 22 H450" vectorEffect="non-scaling-stroke" />
          <path d="M150 22 V56 M450 22 V56" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
      {/* items-start sizes each panel to its own rows, so the single-row
          "Broad strategy" panel never trails empty navy below /checkup. */}
      <div className="grid gap-6 border-l border-gold/50 pl-5 sm:grid-cols-2 sm:items-start lg:gap-8 lg:border-l-0 lg:pl-0">
        {groups.map((group) => (
          <div key={group.label} className="aud-route-panel px-6 py-6">
            <p className="border-b border-gold/30 pb-3 font-body text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-gold">
              {group.label}
            </p>
            <ul className="divide-y divide-gold/15">
              {group.links.map((link) => (
                <li key={link.href}>
                  <RouteCard link={link} withTab />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/** execs close: two centred route columns with icon tabs, split 3 + 2 per the
 *  ref so five destinations never leave an empty grid cell. */
function RouteColumns({
  links,
}: {
  links: readonly RelatedPathLink[];
}): React.JSX.Element {
  const columns = [links.slice(0, 3), links.slice(3)];
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <div
        aria-hidden="true"
        className="mx-auto mb-8 hidden h-12 w-px bg-gold/80 lg:block"
      />
      <div className="grid gap-4 border-l border-gold/50 pl-5 sm:grid-cols-2 sm:items-start sm:gap-x-8 lg:border-l-0 lg:pl-0">
        {columns.map((column) => (
          <ul key={column[0]?.href} className="flex flex-col gap-4">
            {column.map((link) => (
              <li key={link.href}>
                <RouteCard link={link} withTab />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function CloseVariant({
  content,
}: {
  content: RelatedPathsContent;
}): React.JSX.Element {
  switch (content.variant) {
    case "route-row":
      return <RouteRow links={content.links} />;
    case "split":
      return <SplitPanels content={content} />;
    case "ladder":
      return <Ladder content={content} />;
    case "columns":
      return <RouteColumns links={content.links} />;
    default:
      return <TwoPathPanels groups={content.groups ?? []} />;
  }
}

/** CRNAs "two-path" close: copy and CTA left, labelled panels right. */
function TwoPathClose({
  content,
}: {
  content: RelatedPathsContent;
}): React.JSX.Element {
  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div className="flex flex-col justify-center">
        <h2
          id="related-paths-heading"
          className="max-w-md font-display text-display-l leading-[1.08] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
        >
          {content.headline}
        </h2>
        <p className="mt-5 max-w-sm font-body text-body-m leading-[1.6] text-mist/80">
          {content.body}
        </p>
        <div className="mt-9">
          <a href={LINKS.scheduleOnsite} className="va-btn va-btn-gold">
            <CalendarIcon aria-hidden="true" className="h-4 w-4" />
            {content.primaryCta}
          </a>
        </div>
      </div>
      <TwoPathPanels groups={content.groups ?? []} />
    </div>
  );
}

/**
 * 06-related-paths — loud navy close over the approved quiet consult-room
 * plate. Heading and the live route system dominate; peripheral furniture
 * stays outside the central quiet field. Ends the page-local gold line at the
 * CTA node.
 */
export function RelatedPaths({
  content,
}: {
  content: RelatedPathsContent;
}): React.JSX.Element {
  const inlineCta = content.variant === "ladder" || content.variant === "two-path";
  return (
    <section
      id="related-paths"
      aria-labelledby="related-paths-heading"
      data-dark-band
      className="aud-close relative overflow-hidden text-ivory"
    >
      <div className="aud-close-media" aria-hidden="true">
        <img
          src={content.background.src}
          alt=""
          width={2560}
          height={1440}
          style={{ objectPosition: content.background.objectPosition }}
        />
      </div>
      <div className="va-shell relative z-10 flex min-h-[720px] flex-col justify-center py-24 lg:py-28">
        {content.variant === "two-path" ? (
          <TwoPathClose content={content} />
        ) : (
          <>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="related-paths-heading"
                className="font-display text-display-l leading-[1.08] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
              >
                {content.headline}
              </h2>
              <p className="mx-auto mt-5 max-w-xl font-body text-body-m leading-[1.6] text-mist/80">
                {content.body}
              </p>
            </div>
            <CloseVariant content={content} />
            {inlineCta ? null : (
              <div className="mt-14 flex justify-center">
                <a href={LINKS.scheduleOnsite} className="va-btn va-btn-gold">
                  <CalendarIcon aria-hidden="true" className="h-4 w-4" />
                  {content.primaryCta}
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
