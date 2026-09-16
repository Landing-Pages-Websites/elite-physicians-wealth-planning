/**
 * Typed content contract for the audience/career page family.
 *
 * All five audience pages (/physicians-specialists,
 * /financial-planning-for-surgeons, /financial-planning-for-dentists,
 * /financial-planning-for-crnas-nps-pas,
 * /financial-planning-for-healthcare-executives) share the same section
 * grammar: 01-role-context, 02-decision-patterns, 03-career-scenario,
 * 04-coordination-map, 05-questions-before-call, 06-related-paths.
 *
 * Every visible string comes from the page's section_manifest.json
 * (`required_sections[].content`) — content objects transcribe, they never
 * invent. Variant flags exist only where the approved ref frames genuinely
 * differ between pages; refs win over reuse.
 */

/** One extracted raster from public/images/design/<slug>/elements/. */
export interface AudienceImage {
  /** Public path, e.g. /images/design/<slug>/elements/role-context-scene.jpg */
  readonly src: string;
  /** Meaningful description, or "" when purely decorative (aria-hidden). */
  readonly alt: string;
  /** CSS object-position honouring the extraction plan's focal point. */
  readonly objectPosition?: string;
}

/**
 * Live hero side panel (the ref's "decision ledger" / compensation table).
 * Heading and rows MUST be phrases lifted verbatim from the section's
 * manifest copy — the panel never carries invented claims.
 */
export interface RoleContextPanel {
  readonly heading?: string;
  readonly rows: readonly string[];
  /** "light": ivory ledger card (CRNAs ref). "dark": navy table (execs ref). */
  readonly tone: "light" | "dark";
  /** Whether the panel sits before or after the scene, left to right. */
  readonly position: "before-scene" | "after-scene";
}

export interface RoleContextContent {
  readonly eyebrow: string;
  /** "rule": letterspaced caps over a gold rule. "tab": gold underline tab.
   *  "display": the eyebrow renders at display scale above a gold headline
   *  subhead (dentists ref); the h1 is still the manifest headline. */
  readonly eyebrowStyle: "rule" | "tab" | "display";
  readonly headline: string;
  readonly body: string;
  readonly primaryCta: string;
  readonly boundary: string;
  /** "plain": quiet caption. "framed": bordered note with info mark.
   *  "sweep": dark caption seated on the ivory seam sweep (execs ref). */
  readonly boundaryStyle: "plain" | "framed" | "sweep";
  readonly scene: AudienceImage;
  /** Optional live ledger/table beside the scene (CRNAs / execs refs). */
  readonly panel?: RoleContextPanel;
  /** Ivory curved seam sweep resolving the hero into the ivory ledger. */
  readonly seamSweep?: boolean;
}

export interface DecisionPatternsContent {
  readonly headline: string;
  readonly body: string;
  /** The five manifest decision rows, in manifest order. */
  readonly items: readonly string[];
  readonly photo: AudienceImage;
  /** Optional second raster (e.g. the surgeons operating-room strip). */
  readonly stripPhoto?: AudienceImage;
  /** "offset": lightly staggered rows (default). "staircase": each row steps
   *  one measure further right with a gold elbow connector (dentists ref). */
  readonly rowStyle?: "offset" | "staircase";
  /** "base": photo counterweights the lower/outer field (default).
   *  "top": tall photo bleeds to the top and right edges (dentists ref). */
  readonly photoPlacement?: "base" | "top";
  /** Crop of the counterweight plate; defaults to "portrait" (4:5). */
  readonly photoAspect?: "portrait" | "landscape";
  /** "column": strip stacks under the photo (default, surgeons ref).
   *  "full": strip runs the full section width at the base (CRNAs ref). */
  readonly stripPlacement?: "column" | "full";
}

export interface CareerScenarioContent {
  readonly headline: string;
  readonly body: string;
  readonly linkLabel: string;
  /**
   * "paths": copy-left on mist, floating translucent path chips, image at the
   * right edge (physicians-specialists ref). "board": photo-left with a navy
   * copy panel and a live checklist paper at the right (surgeons ref).
   * "desk": photo bleeding left with live chips over the paperwork and copy
   * on the mist right (CRNAs ref). "canvas": full-bleed scene with a light
   * veil, copy lower-left and a drawn decision-calendar sheet (execs ref).
   */
  readonly variant: "paths" | "board" | "desk" | "canvas";
  /** Live overlay labels — chips ("paths") or checklist rows ("board").
   *  Each label must be lifted from the section's manifest body copy. */
  readonly overlays: readonly string[];
  readonly scene: AudienceImage;
}

export interface CoordinationPillar {
  readonly label: string;
  /** Extracted room-vignette raster ("vignette-row" pages only). */
  readonly image?: AudienceImage;
  /** Drawn floor-plan key ("floor-plan" pages only). */
  readonly plan?: FloorPlanKey;
}

export type FloorPlanKey = "tax" | "wealth" | "retirement" | "practice" | "legacy";

/** Edge-touching architectural plates (CRNAs / execs coordination refs). */
export interface CoordinationEdges {
  readonly left: AudienceImage;
  readonly right: AudienceImage;
}

export interface CoordinationMapContent {
  readonly headline: string;
  readonly body: string;
  /**
   * "vignette-row": centred heading over a gold route joining five extracted
   * room vignettes (physicians-specialists ref). "floor-plan": copy-left with
   * a still life, five drawn SVG floor plans around a central "One
   * conversation" hub (surgeons ref). "vignette-loop": copy-left with the
   * five room vignettes scattered on one looping gold route (dentists ref).
   * "edge-rail": five labels ticked along one horizontal gold rail between
   * two edge-touching office plates (CRNAs ref). "hub-spokes": five labels
   * radiating from a central gold hub between two edge-touching floor plans
   * (execs ref).
   */
  readonly variant:
    | "vignette-row"
    | "floor-plan"
    | "vignette-loop"
    | "edge-rail"
    | "hub-spokes";
  /** Label drawn inside the central hub (floor-plan variant). */
  readonly hubLabel?: string;
  readonly pillars: readonly CoordinationPillar[];
  /** Left-side still-life counterweight (floor-plan variant). */
  readonly stillLife?: AudienceImage;
  /** Edge plates ("edge-rail" and "hub-spokes" variants). */
  readonly edges?: CoordinationEdges;
}

export interface QuestionsBeforeCallContent {
  readonly headline: string;
  readonly items: readonly string[];
  readonly note: string;
  /**
   * "cards": each question on a white card. "rail": open gold-ruled columns.
   * "navy-band": ivory headline strip, then the questions in white on a navy
   * band with the note at its right (dentists ref). "material-band": the
   * still-life band holds the top-right, questions on a horizontal gold rail,
   * note inside the navy exit band (CRNAs ref). "centered-rail": centred
   * headline and rail with the pen still life at the right edge, note inside
   * the navy exit band (execs ref).
   */
  readonly style:
    | "cards"
    | "rail"
    | "navy-band"
    | "material-band"
    | "centered-rail";
  readonly stillLife: AudienceImage;
}

export interface RelatedPathLink {
  readonly href: string;
  /** Accessible name; the visible label is the href rendered as live text,
   *  exactly as the approved close frames draw the route cards. */
  readonly ariaLabel: string;
}

/** Labelled link group for the "two-path" close (CRNAs ref). Labels must be
 *  phrases lifted verbatim from the section's manifest body. */
export interface RelatedPathGroup {
  readonly label: string;
  readonly links: readonly RelatedPathLink[];
}

export interface RelatedPathsContent {
  readonly headline: string;
  readonly body: string;
  /**
   * "route-row": one gold stem branching to five route cards in a row
   * (physicians-specialists ref). "split": a strategy-call panel beside a
   * route table joined by one gold connector (surgeons ref). "ladder": the
   * CTA left of a vertical route ladder on one gold stem (dentists ref).
   * "two-path": copy and CTA left of two labelled route panels under one
   * branching connector (CRNAs ref). "columns": centred heading over two
   * route columns with icon tabs and a centred CTA (execs ref).
   */
  readonly variant: "route-row" | "split" | "ladder" | "two-path" | "columns";
  /** First clause of the body, repeated inside the left panel ("split"). */
  readonly panelLabel?: string;
  readonly links: readonly RelatedPathLink[];
  /** Two labelled panels ("two-path" variant); links must mirror `links`. */
  readonly groups?: readonly RelatedPathGroup[];
  readonly primaryCta: string;
  readonly background: AudienceImage;
}

export interface AudiencePageContent {
  readonly slug: string;
  readonly roleContext: RoleContextContent;
  readonly decisionPatterns: DecisionPatternsContent;
  readonly careerScenario: CareerScenarioContent;
  readonly coordinationMap: CoordinationMapContent;
  readonly questionsBeforeCall: QuestionsBeforeCallContent;
  readonly relatedPaths: RelatedPathsContent;
}
