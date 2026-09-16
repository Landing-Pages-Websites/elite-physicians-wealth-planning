import { CalendarIcon, InfoIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";
import type { RoleContextContent, RoleContextPanel } from "./content-types";

/**
 * Section-local gold motif: a quiet page-local line begins beside the eyebrow,
 * and one exit gesture drifts lower-right toward the decision ledger — exactly
 * the seam the page_flow contracts, nothing branching.
 */
function HeroRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 864"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] hidden h-full w-full lg:block"
      fill="none"
    >
      <path
        d="M56 810 H1050 Q1074 810 1074 834 V864"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Eyebrow({
  content,
}: {
  content: RoleContextContent;
}): React.JSX.Element {
  if (content.eyebrowStyle === "tab") {
    return (
      <p className="inline-flex border-b-2 border-gold pb-2 font-body text-body-s font-semibold tracking-[0.24em] uppercase text-gold">
        {content.eyebrow}
      </p>
    );
  }
  return (
    <p className="flex items-center gap-4 font-body text-body-s font-semibold tracking-[0.24em] uppercase text-gold">
      <span aria-hidden="true" className="h-px w-10 bg-gold" />
      {content.eyebrow}
    </p>
  );
}

/**
 * Heading group. In "display" mode (dentists ref) the eyebrow carries the
 * display scale and the manifest headline follows as a gold subhead — the
 * headline stays the page's single h1 either way.
 */
function Heading({
  content,
}: {
  content: RoleContextContent;
}): React.JSX.Element {
  if (content.eyebrowStyle === "display") {
    return (
      <>
        <p className="max-w-xl font-display text-display-xl leading-[1.04] font-medium tracking-[-0.02em] text-balance text-ivory-bright">
          {content.eyebrow}
        </p>
        <h1
          id="role-context-heading"
          className="mt-7 max-w-lg font-display text-display-s leading-snug font-medium tracking-[-0.01em] text-balance text-gold"
        >
          {content.headline}
        </h1>
      </>
    );
  }
  return (
    <>
      <Eyebrow content={content} />
      <h1
        id="role-context-heading"
        className="mt-6 max-w-xl font-display text-display-xl leading-[1.06] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
      >
        {content.headline}
      </h1>
    </>
  );
}

function Boundary({
  content,
}: {
  content: RoleContextContent;
}): React.JSX.Element {
  if (content.boundaryStyle === "framed") {
    return (
      <p className="mt-12 inline-flex max-w-md items-start gap-3 border border-mist/25 px-4 py-3 font-body text-body-s leading-relaxed text-mist/75">
        <InfoIcon
          aria-hidden="true"
          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
        />
        {content.boundary}
      </p>
    );
  }
  if (content.boundaryStyle === "sweep") {
    return (
      <p className="aud-hero-boundary-plate relative z-20 mt-12 inline-block max-w-md px-5 py-3 font-body text-body-s leading-relaxed text-charcoal">
        {content.boundary}
      </p>
    );
  }
  return (
    <p className="mt-12 max-w-md font-body text-body-s leading-relaxed text-mist/65">
      {content.boundary}
    </p>
  );
}

/** Live ledger card / compensation table beside the scene (never raster). */
function PanelCard({ panel }: { panel: RoleContextPanel }): React.JSX.Element {
  const light = panel.tone === "light";
  return (
    <div
      className={
        light
          ? "aud-hero-panel-light w-full max-w-xs px-6 py-6"
          : "aud-hero-panel-dark w-full max-w-xs px-6 py-6"
      }
    >
      {panel.heading ? (
        <p
          className={`border-b pb-3 font-body text-[0.72rem] font-semibold tracking-[0.18em] uppercase ${
            light
              ? "border-ink/15 text-ink"
              : "border-gold/40 text-gold"
          }`}
        >
          {panel.heading}
        </p>
      ) : (
        <span aria-hidden="true" className="block h-px w-12 bg-gold" />
      )}
      <ul>
        {panel.rows.map((row) => (
          <li
            key={row}
            className={`flex items-center gap-3 border-b py-3.5 last:border-b-0 ${
              light ? "border-ink/10" : "border-mist/15"
            }`}
          >
            <span
              aria-hidden="true"
              className="h-[6px] w-[6px] shrink-0 rotate-45 bg-gold"
            />
            <span
              className={`font-body text-body-s font-medium ${
                light ? "text-ink" : "text-ivory"
              }`}
            >
              {row}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The role scene, cropped by a CSS slot on both breakpoints. */
function HeroScene({
  content,
}: {
  content: RoleContextContent;
}): React.JSX.Element {
  return (
    <>
      {/* Desktop: the scene owns the right 45% of the canvas edge-to-edge,
          per the full-bleed extraction contract. */}
      <div className="aud-hero-media absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <img
          src={content.scene.src}
          alt={content.scene.alt}
          width={840}
          height={840}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: content.scene.objectPosition }}
        />
      </div>
      {/* Mobile: recomposed 4:5 crop around the declared focal point, placed
          after the headline/CTA group per the mobile recomposition contract. */}
      <div className="aud-hero-media relative -mx-6 mt-12 aspect-[4/5] sm:-mx-10 sm:aspect-[3/2] lg:hidden">
        <img
          src={content.scene.src}
          alt={content.scene.alt}
          width={840}
          height={840}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: content.scene.objectPosition }}
        />
      </div>
    </>
  );
}

/**
 * Panel heroes (CRNAs / execs refs): the right field pairs the live panel with
 * the section-owned scene; `panel.position` sets which holds the outer edge.
 */
function HeroAside({
  content,
  panel,
}: {
  content: RoleContextContent;
  panel: RoleContextPanel;
}): React.JSX.Element {
  const sceneFirst = panel.position === "after-scene";
  const scene = (
    <div
      className={`aud-hero-media relative ${
        sceneFirst
          ? "aspect-[5/8] w-full max-w-[300px] self-center shadow-[0_28px_60px_-30px_rgba(0,0,0,0.8)]"
          : "w-[38%] max-w-[220px] self-stretch"
      }`}
    >
      <img
        src={content.scene.src}
        alt={content.scene.alt}
        width={400}
        height={640}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: content.scene.objectPosition }}
      />
    </div>
  );
  return (
    <>
      <div className="absolute inset-y-0 right-0 hidden w-[54%] items-center justify-end gap-10 pr-0 lg:flex">
        {sceneFirst ? scene : <PanelCard panel={panel} />}
        {sceneFirst ? <PanelCard panel={panel} /> : scene}
      </div>
      <div className="mt-12 flex flex-col gap-8 lg:hidden">
        <PanelCard panel={panel} />
        <div className="aud-hero-media relative -mx-6 aspect-[3/4] sm:-mx-10 sm:aspect-[3/2]">
          <img
            src={content.scene.src}
            alt={content.scene.alt}
            width={400}
            height={640}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: content.scene.objectPosition }}
          />
        </div>
      </div>
    </>
  );
}

/** Ivory curved seam resolving the navy canvas into the decision ledger. */
function SeamSweep(): React.JSX.Element {
  return (
    <div
      aria-hidden="true"
      className="aud-hero-sweep pointer-events-none absolute right-0 bottom-0 left-0 z-[4]"
    />
  );
}

/**
 * 01-role-context — loud navy image-canvas hero. Copy owns the quiet left
 * field; the section-owned role scene (plus the optional live panel) carries
 * the right column. Fold contract: eyebrow, headline, body, primary CTA and
 * boundary sit beside the scene in the first viewport.
 */
export function RoleContext({
  content,
}: {
  content: RoleContextContent;
}): React.JSX.Element {
  return (
    <section
      id="role-context"
      aria-labelledby="role-context-heading"
      data-dark-band
      className="aud-hero relative overflow-hidden text-ivory"
    >
      <HeroRoute />
      {content.seamSweep ? <SeamSweep /> : null}
      <div className="va-shell relative z-10 flex min-h-[min(864px,100svh)] flex-col justify-center pt-[calc(var(--header-h)+3rem)] pb-16 lg:pb-20">
        <div className={content.panel ? "lg:max-w-[42%]" : "lg:max-w-[46%]"}>
          <Heading content={content} />
          <p className="mt-7 max-w-[50ch] font-body text-body-l leading-[1.62] text-mist/80 text-pretty">
            {content.body}
          </p>
          <div className="mt-10">
            <a href={LINKS.scheduleOnsite} className="va-btn va-btn-gold">
              <CalendarIcon aria-hidden="true" className="h-4 w-4" />
              {content.primaryCta}
            </a>
          </div>
          <Boundary content={content} />
        </div>
        {content.panel ? (
          <HeroAside content={content} panel={content.panel} />
        ) : (
          <HeroScene content={content} />
        )}
      </div>
    </section>
  );
}
