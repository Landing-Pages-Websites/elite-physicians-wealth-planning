import { AbstractRoom } from "./abstract-rooms";
import type {
  BoundaryRole,
  CoordinationBoundaryContent,
  DocketImage,
} from "./content-types";
import { BoundaryGlyphIcon, DoorGlyph } from "./docket-glyphs";

/**
 * 04-coordination-boundary — the professional-role map on the mist band.
 * "rooms": staggered photographic room panels (tax). "hub": navy Elite node
 * between code-native room impressions (wealth). "plan": blueprint field of
 * glyph cards around the navy hub node (retirement). "niches": one labelled
 * photographic niche band, hub first (practice). "cards": double-framed
 * label cards around a navy hub card (legacy). All labels are live;
 * connectors are element-anchored so the sparse gold line meets its panel.
 */
export function CoordinationBoundary({
  content,
}: {
  content: CoordinationBoundaryContent;
}): React.JSX.Element {
  const wide = content.layout === "niches";
  /* The plan layout seats the body line inside its annotation plate (per the
     ref's boundary-map note card), so the header keeps the headline only. */
  const bodyInNote = content.layout === "plan";
  return (
    <section
      id="coordination-boundary"
      aria-labelledby="coordination-boundary-heading"
      className={`dkt-map dkt-map--${content.layout}`}
    >
      <div
        className={`va-shell grid gap-14 py-16 lg:gap-20 lg:py-24 ${
          wide
            ? "lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)]"
            : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
        }`}
      >
        <header className="max-w-md">
          <h2
            id="coordination-boundary-heading"
            className="dkt-reveal text-display-m font-display leading-[1.12] font-medium tracking-[-0.01em] text-balance text-ink"
          >
            {content.headline}
          </h2>
          {bodyInNote ? null : (
            <p className="text-body-m mt-5 max-w-[44ch] leading-[1.6] text-charcoal/85">
              {content.body}
            </p>
          )}
        </header>
        <BoundaryDiagram content={content} />
      </div>
      <span aria-hidden="true" className="dkt-map-exit" />
    </section>
  );
}

function BoundaryDiagram({
  content,
}: {
  content: CoordinationBoundaryContent;
}): React.JSX.Element {
  switch (content.layout) {
    case "rooms":
      return <RoomsDiagram roles={content.roles} />;
    case "plan":
      return <PlanDiagram content={content} />;
    case "niches":
      return <NichesDiagram roles={content.roles} />;
    case "cards":
      return <CardsDiagram roles={content.roles} />;
    default:
      return <HubDiagram roles={content.roles} />;
  }
}

/** Portrait crops seat the label beside the panel instead of below it. */
function isPortrait(aspectRatio?: string): boolean {
  if (!aspectRatio) return false;
  const [w, h] = aspectRatio.split("/").map((part) => Number(part.trim()));
  return Number.isFinite(w) && Number.isFinite(h) && h > w;
}

/**
 * Framed room photograph. The crop's rectangle rides a CSS variable so the
 * stylesheet can rein portrait panels back to the landscape set on mobile.
 */
function RoomImage({ image }: { image: DocketImage }): React.JSX.Element {
  const portrait = isPortrait(image.aspectRatio);
  return (
    <span
      className={`dkt-room block${portrait ? " dkt-room--portrait" : ""}`}
      style={{ "--dkt-room-ar": image.aspectRatio } as React.CSSProperties}
    >
      <img src={image.src} alt={image.alt} />
    </span>
  );
}

function RoleFigure({ role }: { role: BoundaryRole }): React.JSX.Element {
  const hub = role.kind === "hub";
  const side = isPortrait(role.image?.aspectRatio);
  return (
    <figure className={`dkt-map-fig${side ? " dkt-map-fig--side" : ""}`}>
      {role.image ? (
        <RoomImage image={role.image} />
      ) : (
        <span aria-hidden="true" className="dkt-room-abstract block">
          <AbstractRoom glyph={role.glyph} />
        </span>
      )}
      <figcaption
        className={`dkt-map-label${hub ? " dkt-map-label--hub" : ""}`}
      >
        {role.label}
      </figcaption>
    </figure>
  );
}

/** Staggered widths echo the ref's room map without hard coordinates. */
const PARTNER_STAGGER = ["lg:w-[88%]", "lg:w-[74%] lg:ml-[8%]", "lg:w-[72%] lg:ml-[14%]"];

function RoomsDiagram({
  roles,
}: {
  roles: readonly BoundaryRole[];
}): React.JSX.Element {
  const [hub, ...partners] = roles;
  return (
    <div className="dkt-map-rail dkt-map-diagram--rooms">
      <div className="dkt-map-hubcol mb-10 lg:mb-0">
        <RoleFigure role={hub} />
      </div>
      <div className="dkt-map-partners flex flex-col gap-10 lg:gap-12">
        {partners.map((role, index) => (
          <div
            key={role.label}
            className={`dkt-map-partner ${PARTNER_STAGGER[index] ?? ""}`}
          >
            <RoleFigure role={role} />
          </div>
        ))}
      </div>
    </div>
  );
}

const HUB_CELLS = ["dkt-map-cell--top", "dkt-map-cell--left", "dkt-map-cell--right"];

function HubDiagram({
  roles,
}: {
  roles: readonly BoundaryRole[];
}): React.JSX.Element {
  const [hub, ...partners] = roles;
  return (
    <div className="dkt-map-rail dkt-map-diagram--hub flex flex-col gap-10">
      <div className="dkt-map-cell--hub">
        <p className="dkt-map-hubnode text-body-m dkt-reveal">{hub.label}</p>
      </div>
      {partners.map((role, index) => (
        <div key={role.label} className={HUB_CELLS[index] ?? ""}>
          <RoleFigure role={role} />
        </div>
      ))}
    </div>
  );
}

const PLAN_CELLS = ["dkt-plan-cell--a", "dkt-plan-cell--b", "dkt-plan-cell--c"];

/**
 * Retirement ref: code-native floor plan — glyph cards around the navy Elite
 * node on a blueprint field, plus the annotation plate the ref seats left of
 * centre. No raster ships for this frame.
 */
function PlanDiagram({
  content,
}: {
  content: CoordinationBoundaryContent;
}): React.JSX.Element {
  const [hub, ...partners] = content.roles;
  return (
    <div className="dkt-map-rail dkt-map-diagram--plan flex flex-col gap-10">
      <div className="dkt-plan-cell--hub">
        <p className="dkt-map-hubnode text-body-m dkt-reveal">{hub.label}</p>
      </div>
      <PlanNote content={content} />
      {partners.map((role, index) => (
        <div key={role.label} className={PLAN_CELLS[index] ?? ""}>
          <PlanCard role={role} />
        </div>
      ))}
    </div>
  );
}

/**
 * Annotation plate at the diagram's left-centre (the ref's boundary-map note
 * card): the manifest's interaction label titles the manifest's body line.
 * The section header shows the headline only, so no string repeats.
 */
function PlanNote({
  content,
}: {
  content: CoordinationBoundaryContent;
}): React.JSX.Element {
  return (
    <div className="dkt-plan-cell--note">
      <div className="dkt-plan-note">
        {content.kicker ? (
          <p className="dkt-plan-note-title">
            <DoorGlyph className="h-5 w-5 shrink-0 text-ink/70" />
            {content.kicker}
          </p>
        ) : null}
        <p className="text-body-s mt-3 leading-[1.55] text-charcoal/85">
          {content.body}
        </p>
      </div>
    </div>
  );
}

function PlanCard({ role }: { role: BoundaryRole }): React.JSX.Element {
  return (
    <p className="dkt-plan-card">
      {role.glyph ? (
        <span className="dkt-plan-glyph" aria-hidden="true">
          <BoundaryGlyphIcon glyph={role.glyph} className="h-6 w-6" />
        </span>
      ) : null}
      {role.label}
    </p>
  );
}

/**
 * Practice ref: one horizontal band of labelled photographic niches — the
 * navy-labelled Elite niche leads, partner niches follow, and the gold
 * baseline runs beneath the row.
 */
function NichesDiagram({
  roles,
}: {
  roles: readonly BoundaryRole[];
}): React.JSX.Element {
  const [hub, ...partners] = roles;
  return (
    <div className="dkt-map-rail dkt-map-diagram--niches">
      <div className="dkt-niche dkt-niche--hub">
        <NicheFigure role={hub} />
      </div>
      {partners.map((role) => (
        <div key={role.label} className="dkt-niche">
          <NicheFigure role={role} />
        </div>
      ))}
    </div>
  );
}

function NicheFigure({ role }: { role: BoundaryRole }): React.JSX.Element {
  const hub = role.kind === "hub";
  return (
    <figure className="dkt-niche-fig">
      <figcaption
        className={`dkt-map-label${hub ? " dkt-map-label--hub" : ""}`}
      >
        {role.label}
      </figcaption>
      {role.image ? (
        <RoomImage image={role.image} />
      ) : (
        <span aria-hidden="true" className="dkt-room-abstract block">
          <AbstractRoom glyph={role.glyph} />
        </span>
      )}
    </figure>
  );
}

const CARD_CELLS = ["dkt-cards-cell--left", "dkt-cards-cell--right", "dkt-cards-cell--bottom"];

/**
 * Legacy ref: double-framed live label cards around the navy hub card on the
 * mist band; connectors stay element-anchored. No raster ships.
 */
function CardsDiagram({
  roles,
}: {
  roles: readonly BoundaryRole[];
}): React.JSX.Element {
  const [hub, ...partners] = roles;
  return (
    <div className="dkt-map-rail dkt-map-diagram--cards flex flex-col gap-10">
      <div className="dkt-cards-cell--hub">
        <p className="dkt-cards-hub text-body-m dkt-reveal">{hub.label}</p>
      </div>
      {partners.map((role, index) => (
        <div key={role.label} className={CARD_CELLS[index] ?? ""}>
          <p className="dkt-cards-card">{role.label}</p>
        </div>
      ))}
    </div>
  );
}
