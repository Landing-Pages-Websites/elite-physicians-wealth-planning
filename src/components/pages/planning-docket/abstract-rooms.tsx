import type { BoundaryGlyph } from "./content-types";

/**
 * Code-native abstract room compositions for boundary layouts that ship no
 * raster (wealth "hub"). One SVG room impression per partner role: a tonal
 * wall/floor field with simple furniture geometry drawn in the site's stroke
 * language (thin ink lines, round caps — same family as docket-glyphs).
 * Decorative only; the live figcaption plate carries the room label.
 */

const INK = "rgba(11, 31, 58, 0.6)";
const INK_SOFT = "rgba(11, 31, 58, 0.28)";
const FLOOR_Y = 112;

/** CPA room: tall window, working desk with a document set and wall chart. */
function CpaRoomFurniture(): React.JSX.Element {
  return (
    <>
      <rect x="124" y="24" width="52" height="64" />
      <path d="M150 24v64M124 56h52M118 92h64" />
      <rect x="36" y="34" width="30" height="22" />
      <path d="M41 50l7-6 5 3 8-7" />
      <path d="M24 96h78M30 96v34M96 96v34" />
      <rect x="54" y="102" width="34" height="16" />
      <path d="M68 110h6" />
      <path d="M36 96v-7h22v7M40 89v-4h14v4" />
    </>
  );
}

/** Attorney room: shelved law library with a reading chair and pendant. */
function AttorneyRoomFurniture(): React.JSX.Element {
  return (
    <>
      <rect x="22" y="24" width="62" height="84" />
      <path d="M22 52h62M22 80h62" />
      <path d="M28 52v-20M35 52v-16M42 52v-18M49 52v-15M56 52v-19M63 52v-16M70 52v-18M77 52v-15" />
      <path d="M28 80v-20M36 80v-17M44 80v-19M52 80v-16M60 80v-18M68 80v-15M76 80v-19" />
      <path d="M28 108v-20M37 108v-16M46 108v-19M55 108v-15M64 108v-18M73 108v-16" />
      <path d="M100 14v14" />
      <circle cx="100" cy="33" r="5" />
      <path d="M160 58v44M132 102v-16a6 6 0 0 1 6-6h16" />
      <path d="M130 102h32M136 112v8M156 112v8" />
    </>
  );
}

/** TPA / benefits room: meeting table, paired chairs, and a wall clock. */
function TpaRoomFurniture(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="40" r="9" />
      <path d="M100 40v-5M100 40l4 3" />
      <path d="M64 94h72M72 94v32M128 94v32" />
      <path d="M84 94v-8h32v8" />
      <path d="M42 68v26M40 94h18M44 94v26M56 94v26" />
      <path d="M158 68v26M142 94h18M144 94v26M156 94v26" />
    </>
  );
}

const ROOM_FURNITURE: Record<BoundaryGlyph, () => React.JSX.Element> = {
  cpa: CpaRoomFurniture,
  attorney: AttorneyRoomFurniture,
  tpa: TpaRoomFurniture,
};

/**
 * The shared room shell: floor wash, seam, and corner hints give the panel
 * tonal depth; the role-keyed furniture group sits on the floor line.
 */
export function AbstractRoom({
  glyph,
}: {
  glyph?: BoundaryGlyph;
}): React.JSX.Element {
  const Furniture = ROOM_FURNITURE[glyph ?? "cpa"];
  return (
    <svg viewBox="0 0 200 160" fill="none" aria-hidden="true">
      <rect x="0" y={FLOOR_Y} width="200" height="48" fill="rgba(11, 31, 58, 0.07)" />
      <g stroke={INK_SOFT} strokeWidth="1" strokeLinecap="round">
        <path d={`M0 ${FLOOR_Y}h200`} />
        <path d={`M10 8v${FLOOR_Y - 8}M190 8v${FLOOR_Y - 8}`} />
        <path d={`M10 ${FLOOR_Y}l-10 13M190 ${FLOOR_Y}l10 13`} />
      </g>
      <g
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Furniture />
      </g>
    </svg>
  );
}
