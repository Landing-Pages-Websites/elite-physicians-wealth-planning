import { ArrowRightIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";
import type { CareerScenarioContent } from "./content-types";

/** Continuation of the page-local line across the scenario spread. */
function ScenarioRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 864"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      fill="none"
    >
      <g
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      >
        <path
          d="M710 0 V28 Q710 52 734 52 H1340"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1340 780 H1476 Q1500 780 1500 804 V864"
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <circle cx="1346" cy="52" r="4.5" fill="var(--color-gold)" />
    </svg>
  );
}

function ProcessLink({ label }: { label: string }): React.JSX.Element {
  return (
    <a href={LINKS.processOnsite} className="va-link">
      {label}
      <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

function PathChips({ labels }: { labels: readonly string[] }): React.JSX.Element {
  return (
    <div className="aud-scenario-sheet relative z-10 mt-4 self-start px-6 py-8 lg:mt-20">
      <ul className="flex flex-col gap-5">
        {labels.map((label, index) => (
          <li
            key={label}
            className="aud-scenario-chip flex w-fit items-center gap-3 rounded-[3px] px-5 py-3.5"
            style={{ marginLeft: `${index * 1.5}rem` }}
          >
            <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-gold" />
            <span className="font-body text-body-m font-medium text-ink">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** physicians-style spread: copy-left, floating path chips, right-edge scene. */
function PathsVariant({
  content,
}: {
  content: CareerScenarioContent;
}): React.JSX.Element {
  return (
    <div className="va-shell relative z-10 grid gap-12 py-20 lg:grid-cols-[minmax(0,6fr)_minmax(0,3fr)_minmax(0,4fr)] lg:gap-10 lg:py-28">
      <div className="flex flex-col justify-center">
        <h2
          id="career-scenario-heading"
          className="max-w-xl font-display text-display-l leading-[1.1] font-medium tracking-[-0.015em] text-balance text-ink"
        >
          {content.headline}
        </h2>
        <p className="mt-6 max-w-[44ch] font-body text-body-m leading-[1.62] text-charcoal/85">
          {content.body}
        </p>
        <div className="mt-9 text-ink">
          <ProcessLink label={content.linkLabel} />
        </div>
      </div>
      <PathChips labels={content.overlays} />
      <figure className="aud-bleed-right relative -mx-6 aspect-[3/4] sm:-mx-10 lg:mx-0 lg:aspect-auto lg:min-h-[540px]">
        <img
          src={content.scene.src}
          alt={content.scene.alt}
          width={400}
          height={780}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: content.scene.objectPosition }}
        />
      </figure>
    </div>
  );
}

function ChecklistPaper({
  labels,
}: {
  labels: readonly string[];
}): React.JSX.Element {
  return (
    <ul className="aud-scenario-paper w-full max-w-sm self-center px-7 py-8 lg:justify-self-end">
      {labels.map((label) => (
        <li
          key={label}
          className="flex items-center gap-4 border-b border-charcoal/15 py-4 last:border-b-0"
        >
          <span
            aria-hidden="true"
            className="flex h-4 w-4 shrink-0 items-center justify-center border border-ink/50"
          >
            <span className="h-1.5 w-1.5 bg-gold" />
          </span>
          <span className="font-body text-body-m text-ink">{label}</span>
        </li>
      ))}
    </ul>
  );
}

/** CRNAs-style spread: paperwork scene bleeding left with live path chips
 *  over the documents, copy holding the mist right column. */
function DeskVariant({
  content,
}: {
  content: CareerScenarioContent;
}): React.JSX.Element {
  return (
    <div className="va-shell relative z-10 grid gap-12 py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:py-28">
      <div className="relative">
        <figure className="aud-bleed-left relative -mx-6 aspect-[6/5] sm:-mx-10 lg:mx-0 lg:min-h-[560px]">
          <img
            src={content.scene.src}
            alt={content.scene.alt}
            width={860}
            height={702}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: content.scene.objectPosition }}
          />
        </figure>
        <ul className="relative z-10 -mt-10 flex flex-col gap-3 pr-6 lg:absolute lg:bottom-10 lg:left-2 lg:mt-0 lg:pr-0">
          {content.overlays.map((label) => (
            <li
              key={label}
              className="aud-scenario-chip flex w-fit items-center gap-3 rounded-[3px] px-4 py-2.5"
            >
              <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-gold" />
              <span className="font-body text-body-s font-medium text-ink">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center">
        <h2
          id="career-scenario-heading"
          className="max-w-xl font-display text-display-l leading-[1.1] font-medium tracking-[-0.015em] text-balance text-ink"
        >
          {content.headline}
        </h2>
        <p className="mt-6 max-w-[44ch] font-body text-body-m leading-[1.62] text-charcoal/85">
          {content.body}
        </p>
        <div className="mt-9 text-ink">
          <ProcessLink label={content.linkLabel} />
        </div>
      </div>
    </div>
  );
}

/** Drawn decision-calendar sheet — live SVG per the CODE-first rule; the
 *  ref's photographic calendar overlay did not ship as an asset. */
function CalendarSheet(): React.JSX.Element {
  const columns = Array.from({ length: 6 }, (_, i) => 66 + i * 46);
  return (
    <svg
      viewBox="0 0 340 250"
      aria-hidden="true"
      className="aud-scenario-calendar h-auto w-full"
      fill="none"
    >
      <rect x="8" y="8" width="324" height="234" fill="#FDFBF5" />
      <rect
        x="8"
        y="8"
        width="324"
        height="234"
        stroke="rgba(11,31,58,0.25)"
      />
      <rect x="26" y="26" width="130" height="12" fill="rgba(11,31,58,0.55)" />
      <rect x="26" y="56" width="288" height="18" fill="rgba(11,31,58,0.16)" />
      <rect x="60" y="58" width="120" height="14" fill="rgba(11,31,58,0.6)" />
      <g stroke="rgba(11,31,58,0.28)">
        {columns.map((x) => (
          <path key={x} d={`M${x} 90 V226`} />
        ))}
        <path d="M26 90 H314 M26 124 H314 M26 158 H314 M26 192 H314 M26 226 H314" />
      </g>
      <rect x="112" y="128" width="110" height="26" fill="rgba(11,31,58,0.5)" />
      <rect
        x="204"
        y="196"
        width="110"
        height="26"
        fill="rgba(200,166,90,0.55)"
      />
    </svg>
  );
}

/** Execs-style canvas: full-bleed advisory scene under a light veil, copy
 *  lower-left, drawn decision-calendar sheet right of centre. */
function CanvasVariant({
  content,
}: {
  content: CareerScenarioContent;
}): React.JSX.Element {
  return (
    <div className="relative">
      <div className="aud-scenario-canvas absolute inset-0" aria-hidden="true">
        <img
          src={content.scene.src}
          alt=""
          width={1440}
          height={850}
          style={{ objectPosition: content.scene.objectPosition }}
        />
      </div>
      <div className="va-shell relative z-10 grid gap-12 py-24 lg:min-h-[620px] lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:items-end lg:py-28">
        <div className="lg:pb-4">
          <h2
            id="career-scenario-heading"
            className="max-w-xl font-display text-display-l leading-[1.1] font-medium tracking-[-0.015em] text-balance text-ink"
          >
            {content.headline}
          </h2>
          <p className="mt-6 max-w-[44ch] font-body text-body-m leading-[1.62] text-charcoal/90">
            {content.body}
          </p>
          <div className="mt-9 text-ink">
            <ProcessLink label={content.linkLabel} />
          </div>
        </div>
        <div className="hidden justify-end lg:flex">
          <div className="w-full max-w-md">
            <CalendarSheet />
          </div>
        </div>
      </div>
    </div>
  );
}

/** surgeons-style spread: scene-left, overlapping navy panel, live checklist. */
function BoardVariant({
  content,
}: {
  content: CareerScenarioContent;
}): React.JSX.Element {
  return (
    <div className="va-shell relative z-10 grid gap-12 py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:py-28">
      <div>
        <figure className="aud-bleed-left relative -mx-6 aspect-[5/2] sm:-mx-10 lg:mx-0">
          <img
            src={content.scene.src}
            alt={content.scene.alt}
            width={855}
            height={335}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: content.scene.objectPosition }}
          />
        </figure>
        <div className="aud-scenario-panel relative max-w-xl px-8 py-9 lg:-mt-14 lg:ml-10">
          <h2
            id="career-scenario-heading"
            className="font-display text-display-m leading-[1.12] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
          >
            {content.headline}
          </h2>
          <p className="mt-4 max-w-[46ch] font-body text-body-m leading-[1.6] text-mist/80">
            {content.body}
          </p>
          <div className="mt-7 text-mist">
            <ProcessLink label={content.linkLabel} />
          </div>
        </div>
      </div>
      <div className="flex">
        <ChecklistPaper labels={content.overlays} />
      </div>
    </div>
  );
}

function ScenarioBody({
  content,
}: {
  content: CareerScenarioContent;
}): React.JSX.Element {
  switch (content.variant) {
    case "paths":
      return <PathsVariant content={content} />;
    case "board":
      return <BoardVariant content={content} />;
    case "desk":
      return <DeskVariant content={content} />;
    default:
      return <CanvasVariant content={content} />;
  }
}

/**
 * 03-career-scenario — loud mist spread grounding the audience page in a
 * route-specific situation. Ref-faithful compositions: "paths"
 * (physicians-specialists), "board" (surgeons), "desk" (CRNAs) and "canvas"
 * (healthcare executives). The canvas raster carries its approved baked gold
 * gesture, so no live route is layered on top of it.
 */
export function CareerScenario({
  content,
}: {
  content: CareerScenarioContent;
}): React.JSX.Element {
  return (
    <section
      id="career-scenario"
      aria-labelledby="career-scenario-heading"
      className="aud-scenario relative overflow-hidden"
    >
      {content.variant === "canvas" ? null : <ScenarioRoute />}
      <ScenarioBody content={content} />
    </section>
  );
}
